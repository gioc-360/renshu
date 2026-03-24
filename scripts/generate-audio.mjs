#!/usr/bin/env node
/**
 * Generate static TTS audio files for all deterministic Japanese strings.
 *
 * Reads data from src/data/, calls OpenAI TTS API (tts-1, fable, 0.85x),
 * saves MP3s to audio/, and writes audio/manifest.json.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-audio.mjs
 *
 * Options:
 *   --dry-run   Print strings that would be generated, don't call API
 *   --force     Regenerate all files even if they already exist
 */

import { createHash } from 'crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const AUDIO_DIR = join(ROOT, 'audio');
const MANIFEST_PATH = join(AUDIO_DIR, 'manifest.json');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');

if (!OPENAI_API_KEY && !DRY_RUN) {
  console.error('Error: OPENAI_API_KEY environment variable required');
  process.exit(1);
}

// ── Import data ──────────────────────────────────────

const anchorWords = (await import('../src/data/anchor-words.js')).default;
const scenarios = (await import('../src/data/scenarios.js')).default;
const hiraganaGroups = (await import('../src/data/hiragana-groups.js')).default;
const katakanaGroups = (await import('../src/data/katakana-groups.js')).default;
const n5Content = (await import('../src/data/n5-content.js')).default;
const conjugationDrills = (await import('../src/data/conjugation-drills.js')).default;

// ── Collect all unique Japanese strings ──────────────

const strings = new Set();

// Anchor words
for (const w of anchorWords) {
  strings.add(w.japanese);
}

// Scenario prereqs + Yuki lines
for (const s of scenarios) {
  for (const p of s.prereqs) {
    strings.add(p.japanese);
  }
  for (const ex of s.exchanges) {
    strings.add(ex.line);
  }
}

// Hiragana groups — characters + words
for (const group of hiraganaGroups) {
  for (const ch of group.characters) {
    strings.add(ch.kana);
  }
  for (const w of group.words) {
    strings.add(w.kana);
  }
}

// Katakana groups — characters + words
for (const group of katakanaGroups) {
  for (const ch of group.characters) {
    if (ch.kana === 'ー') continue; // long vowel mark, not speakable alone
    strings.add(ch.kana);
  }
  for (const w of group.words) {
    strings.add(w.kana);
  }
}

// N5 content — kana characters
if (n5Content.kana) {
  for (const ch of n5Content.kana.hiragana || []) {
    strings.add(ch.character);
  }
  for (const ch of n5Content.kana.katakana || []) {
    if (ch.character === 'ー') continue;
    strings.add(ch.character);
  }
}

// N5 content — lessons
if (n5Content.lessons) {
  for (const lesson of n5Content.lessons) {
    // Vocabulary
    for (const v of lesson.vocabulary || []) {
      const text = v.kana || v.japanese;
      if (text) strings.add(text);
    }
    // Sentences
    for (const s of lesson.sentences || []) {
      const text = s.japanese || s.kana;
      if (text) strings.add(text);
    }
    // Grammar fills — the full sentence (with blank) isn't useful for TTS
    // Sentence builds — correct_answer is the full sentence
    for (const sb of lesson.sentenceBuilds || []) {
      if (sb.correct_answer) strings.add(sb.correct_answer);
    }
  }
}

// N5 content — greetings (top-level)
if (n5Content.greetings) {
  if (n5Content.greetings.vocabulary) {
    for (const v of n5Content.greetings.vocabulary) {
      const text = v.kana || v.japanese;
      if (text) strings.add(text);
    }
  }
  if (n5Content.greetings.sentences) {
    for (const s of n5Content.greetings.sentences) {
      const text = s.japanese || s.kana;
      if (text) strings.add(text);
    }
  }
}

// Conjugation drills — dictionary forms and conjugated forms
for (const form of Object.values(conjugationDrills)) {
  for (const group of form.groups) {
    for (const verb of group.verbs) {
      strings.add(verb.dictionary);
      strings.add(verb.form);
    }
  }
}

// ── Generate filenames and manifest ──────────────────

function hashText(text) {
  return createHash('sha256').update(text).digest('hex').slice(0, 10);
}

const manifest = {};
const entries = [];

for (const text of strings) {
  const hash = hashText(text);
  const filename = `${hash}.mp3`;
  manifest[text] = filename;
  entries.push({ text, filename, path: join(AUDIO_DIR, filename) });
}

console.log(`Total unique strings: ${entries.length}`);

if (DRY_RUN) {
  for (const e of entries.sort((a, b) => a.text.localeCompare(b.text, 'ja'))) {
    console.log(`  ${e.filename}  ${e.text}`);
  }
  console.log(`\nDry run complete. ${entries.length} files would be generated.`);
  process.exit(0);
}

// ── Call OpenAI TTS API ──────────────────────────────

mkdirSync(AUDIO_DIR, { recursive: true });

let generated = 0;
let skipped = 0;
let failed = 0;

for (let i = 0; i < entries.length; i++) {
  const { text, filename, path } = entries[i];

  if (!FORCE && existsSync(path)) {
    skipped++;
    continue;
  }

  try {
    const res = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'tts-1-hd',
        input: text,
        voice: 'nova',
        speed: 0.90,
        response_format: 'mp3',
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`  FAIL [${i + 1}/${entries.length}] "${text}": ${err}`);
      failed++;
      continue;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(path, buffer);
    generated++;

    if ((generated + skipped) % 20 === 0 || i === entries.length - 1) {
      console.log(`  [${i + 1}/${entries.length}] generated=${generated} skipped=${skipped} failed=${failed}`);
    }

    // Small delay to avoid rate limits
    if (generated % 10 === 0) {
      await new Promise(r => setTimeout(r, 500));
    }
  } catch (err) {
    console.error(`  FAIL [${i + 1}/${entries.length}] "${text}": ${err.message}`);
    failed++;
  }
}

// ── Write manifest ───────────────────────────────────

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

console.log(`\nDone.`);
console.log(`  Generated: ${generated}`);
console.log(`  Skipped (already exist): ${skipped}`);
console.log(`  Failed: ${failed}`);
console.log(`  Manifest: ${MANIFEST_PATH} (${Object.keys(manifest).length} entries)`);
