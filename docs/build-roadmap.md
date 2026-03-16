# Build Roadmap

A practical guide to understanding, maintaining, and extending the 練習 Renshu app.

---

## What's Already Built (v1)

| Feature | Description |
|---|---|
| **Vocabulary exercises** | Multiple-choice quizzes, both JP-to-EN and EN-to-JP direction, randomly chosen each time |
| **Grammar fill exercises** | A Japanese sentence with a blank; pick the correct particle (は, を, に, が, で, etc.) |
| **Sentence building** | Given an English sentence, arrange scrambled Japanese word chips into correct word order |
| **Reading comprehension** | Read a Japanese sentence, choose the correct English translation from three options |
| **Listening exercises** | Browser reads a Japanese word aloud (text-to-speech); pick the English meaning |
| **Pronunciation exercises** | A Japanese word or sentence is shown; speak it aloud; the browser's speech recognition compares what you said to what was expected |
| **Profile system** | Create named profiles, switch between them; each profile has independent progress and stats |
| **Course progression** | Tracks which vocab and grammar items you have seen, which you have learned (correct 2+ times), and introduces new material each session |
| **Session stats** | Streak counter, total sessions count, weakest-skill indicator on the home screen |
| **Progress bars** | Visual bars showing how much of the available vocabulary and grammar you have learned |
| **Score breakdown** | After each session, see your score broken down by exercise type with colored bars |

**Technical implementation:** Single HTML file (`index.html`) with all CSS and JavaScript inline. One external ES module (`src/data/n5-content.js`) holds the content data. No build tools, no bundler, no framework. Uses browser `localStorage` for persistence, the Web Speech API (`speechSynthesis` for TTS, `SpeechRecognition` for STT), and Google Fonts for the Noto Sans JP typeface.

---

## How the App Works (Technical Overview)

### Views

The app has three views, only one visible at a time:

1. **Start screen** (`#view-start`) -- Shows the app title, current profile, stats (streak, sessions, weakest skill), course progress bars, a "Start Session" button, and a level selector dropdown.
2. **Session view** (`#view-session`) -- Shows a progress bar across the top, the current exercise card, and Skip/Next buttons at the bottom.
3. **Complete screen** (`#view-complete`) -- Shows the score circle, percentage, breakdown by exercise type, and buttons to practice again or return home.

View transitions are handled by the `showView()` function, which toggles CSS classes for fade animations.

### Exercise Generation

The `generateExercises()` function (in `index.html`, around line 1428) creates 13 exercises per session. The logic:

1. Check the profile's progress to see which vocab/grammar items have been seen and learned.
2. Introduce 3-5 new vocabulary items and 1-2 new grammar items (advancing the cursor).
3. Always include one sentence build and one reading exercise.
4. Fill remaining slots with a weighted random mix: review vocab quizzes (35%), listening (15%), pronunciation (15%), review grammar (10%), sentence builds (10%), reading (15%).
5. Review exercises prioritize items with the lowest correct counts (weakest-first review).
6. Shuffle the final list so exercise types appear in random order.

### Progress Tracking

All progress is stored in `localStorage` under profile-scoped keys:

- `renshu_profile_{name}_history` -- Contains per-exercise-type stats (correct/total counts), progression cursors (`currentVocabIndex`, `currentGrammarIndex`), lists of seen and learned item indices, and per-item correct counts.
- `renshu_profile_{name}_stats` -- Contains streak count, total sessions, and last session date.
- `renshu_profiles` -- List of all profile names.
- `renshu_active_profile` -- Currently selected profile name.

An item is marked "learned" after being answered correctly 2 or more times.

### Audio

- **Text-to-speech:** Uses `window.speechSynthesis`. Finds a Japanese voice (`ja-*`), sets speech rate to 0.85 (slightly slower than normal). Auto-plays on listening exercises.
- **Speech recognition:** Uses `window.SpeechRecognition` (or `webkitSpeechRecognition`). Sets language to `ja-JP`. Computes similarity between the recognized transcript and the expected text using Levenshtein distance. Match thresholds: 80%+ = excellent, 50-79% = close (partial credit), below 50% = incorrect.

---

## File Structure

```
japanese-tool/
  index.html              -- The entire app (HTML + CSS + JS, ~2600 lines)
  package.json            -- Minimal project metadata (name, version)
  src/
    data/
      n5-content.js       -- All N5 content: 92 kana, 89 vocab, 25 grammar, 32 sentences
  docs/
    scope.md              -- Project scope document
    build-roadmap.md      -- This file
  spikes/                 -- Prototypes and experiments (not part of the app)
```

---

## How to Add Content

### Adding New Vocabulary Words

Open `src/data/n5-content.js`. Find the `vocabulary` array. Add a new entry following this exact format:

```javascript
{
  kanji: "食べる",              // kanji form (set to null if there is no kanji)
  kana: "たべる",               // hiragana/katakana reading (required)
  romaji: "taberu",            // romanized pronunciation (required)
  english: "to eat",           // English meaning (required)
  category: "verbs",           // category name (required)
  example_sentence: {
    japanese: "ごはんをたべます。",
    romaji: "Gohan wo tabemasu.",
    english: "I eat a meal.",
  },
},
```

Existing categories: `greetings`, `numbers`, `time`, `family`, `food`, `verbs`, `adjectives`, `places`, `pronouns-demonstratives`, `question-words`. You can add new categories freely -- they are just string labels.

The vocab automatically becomes available for vocabulary quizzes, listening exercises, and pronunciation exercises without any other changes.

### Adding New Grammar Fill Exercises

Open `index.html`. Find the `GRAMMAR_FILLS` array (around line 1268). Add a new entry:

```javascript
{
  sentence: "わたし____がくせいです。",
  correct_answer: "は",
  options: ["は", "が", "を", "に"],
  explanation: "は (wa) marks the topic of the sentence."
},
```

- `sentence` -- The Japanese sentence with `____` (four underscores) marking the blank.
- `correct_answer` -- The particle or word that belongs in the blank.
- `options` -- Array of exactly 4 choices (one correct, three distractors).
- `explanation` -- Shown after the user answers, whether right or wrong.

### Adding New Sentence Build Exercises

In `index.html`, find the `SENTENCE_BUILDS` array (around line 1287). Add a new entry:

```javascript
{
  english: "I am a student.",
  words: ["わたしは", "がくせい", "です"],
  correct_answer: "わたしはがくせいです",
  explanation: "Topic (わたしは) + noun (がくせい) + copula (です)"
},
```

- `english` -- The English sentence the user needs to translate.
- `words` -- Array of Japanese word chunks to arrange. Particles should be attached to the word they follow (e.g., "わたしは" not "わたし" + "は").
- `correct_answer` -- All words concatenated in the correct order, no spaces.
- `explanation` -- Shown after answering.

### Adding New Sentences (for Reading / Pronunciation)

Open `src/data/n5-content.js`. Find the `sentences` array. Add a new entry:

```javascript
{
  japanese: "わたしはまいにちにほんごをべんきょうします。",
  romaji: "Watashi wa mainichi nihongo wo benkyou shimasu.",
  english: "I study Japanese every day.",
  grammar_point: "〜を〜ます",
  difficulty: 1,
},
```

- `difficulty` -- Use 1 for simple sentences, 2 for intermediate, 3 for longer/complex ones. Pronunciation exercises only use sentences with difficulty 1 or 2.

---

## How to Add a New JLPT Level

### Step 1: Create the Content File

Create `src/data/n4-content.js` following the exact same structure as `n5-content.js`:

```javascript
const n4Content = {
  kana: { hiragana: [...], katakana: [...] },
  vocabulary: [...],
  grammar: [...],
  sentences: [...],
};

export default n4Content;
```

### Step 2: Import It

In `index.html`, add an import near the top of the `<script>` block (around line 1244):

```javascript
import n5Content from './src/data/n5-content.js';
import n4Content from './src/data/n4-content.js';   // add this line
```

### Step 3: Enable the Level Selector

In the HTML, find the level selector (around line 1180) and remove `disabled` from the N4 option:

```html
<option value="N4">N4 - Elementary</option>
```

### Step 4: Use the Right Content

Modify the `startSession()` function to read the selected level and pass the corresponding content object:

```javascript
async function startSession() {
  const level = document.querySelector('#level-select').value;
  const content = level === 'N4' ? n4Content : n5Content;
  exercises = generateExercises(content, 13);
  // ... rest stays the same
}
```

You will also need to add level-specific `GRAMMAR_FILLS` and `SENTENCE_BUILDS` arrays, or merge them into the content files.

---

## Improvement Ideas (Prioritized)

### Priority 1 -- High Impact, Easy

These require only adding data, no code changes:

- **Add more N5 vocabulary.** Currently 89 words across 10 categories. Target: 200+ words. The official N5 list has roughly 800 words. Even getting to 300 would meaningfully improve session variety.
- **Add more grammar fill exercises.** Currently 15. Target: 30+. There are 25 grammar patterns in the content file but only 15 have fill-in-the-blank exercises.
- **Add more sentence build exercises.** Currently 12. Target: 25+. Cover more grammar patterns and longer sentences.
- **Add more practice sentences.** Currently 32. More sentences means more variety in reading and pronunciation exercises.

### Priority 2 -- High Impact, Medium Effort

These require some code changes but are self-contained:

- **Kanji reading exercises.** Show a kanji character, pick the correct hiragana reading. The kana data (92 characters) is already in the system. You would add a new exercise type and a new renderer function.
- **Conjugation drill exercises.** Show a verb in dictionary form, ask for the ます-form, ない-form, て-form, past tense, etc. Requires a new exercise type and conjugation rule data.
- **Make it a PWA (Progressive Web App).** Add a `manifest.json` and a service worker so the app works offline and can be "added to home screen" on phones. Probably 50-100 lines of code.

### Priority 3 -- Medium Impact, Higher Effort

- **N4 content creation.** Writing quality content for an entire JLPT level takes time. N4 adds ~300 vocab, ~40 grammar patterns, and many more sentence structures.
- **Spaced repetition algorithm.** Right now, review items are chosen by lowest-correct-count. A proper spaced repetition system (like Anki's SM-2 algorithm) would space reviews over days/weeks based on how well you know each item.
- **Export/import progress.** Let users download their progress as a JSON file and re-import it. Useful for backups or migrating to a new device.

### Priority 4 -- Future / Only If Needed

- **Cloud sync across devices.** Would require a server, user accounts, and a database. Major complexity increase.
- **More exercise types.** Dictation (hear a sentence, type it in Japanese), free writing (type a response to a prompt), fill-in-the-kanji.
- **AI-powered conversation practice.** Would require an API key and external service (e.g., OpenAI). Changes the "no cost, no accounts" nature of the tool.

---

## Testing Checklist

Before deploying any changes:

- [ ] All 6 exercise types render correctly (vocab, grammar, sentence build, reading, listening, pronunciation)
- [ ] Vocab quiz shows 4 options; selecting one highlights it green (correct) or red (incorrect)
- [ ] Grammar fill shows the sentence with a blank and 4 particle options
- [ ] Sentence build lets you tap words to arrange them, tap again to remove, and check your answer
- [ ] Reading shows a Japanese passage with 3 English translation options
- [ ] Listening auto-plays Japanese audio; replay button appears after playback
- [ ] Pronunciation records via microphone and shows match result (excellent / close / try again)
- [ ] Correct answers show green highlight and explanation
- [ ] Incorrect answers show red highlight, reveal the correct answer, and show explanation
- [ ] Session completes and shows score circle, percentage, and breakdown by type
- [ ] Progress bars on the home screen update after a session
- [ ] Profile creation works (type name, press Create)
- [ ] Profile switching works (create a second profile, switch back, verify each has separate data)
- [ ] Stats update correctly (streak increments on consecutive days, session count goes up)
- [ ] TTS plays Japanese audio on listening exercises (test on Chrome, Safari, Firefox)
- [ ] STT records and compares pronunciation (test on Chrome -- Firefox/Safari have limited support)
- [ ] Mobile layout works (test on a phone, all buttons are tappable, text is readable)
- [ ] Fresh browser (clear localStorage) shows the welcome/profile creation screen
- [ ] The "Next" button has a 1-second delay to prevent accidental double-taps
- [ ] The "Skip" button records the exercise as incorrect and advances

---

## File Reference

| File | Purpose |
|---|---|
| `index.html` | The entire application. Contains all HTML structure (3 views), all CSS (1130 lines of styles), and all JavaScript (exercise generation, rendering, progress tracking, TTS/STT, profile management). |
| `src/data/n5-content.js` | N5 study content exported as an ES module. Contains 46 hiragana + 46 katakana characters, 89 vocabulary words across 10 categories, 25 grammar patterns with examples, and 32 practice sentences at 3 difficulty levels. |
| `package.json` | Minimal project metadata. Sets the project name (`japanese-tool`), version (`0.1.0`), and module type (`module`). No dependencies. |
| `docs/scope.md` | Project scope document explaining the problem, what was built, architecture decisions, and what was intentionally excluded. |
| `docs/build-roadmap.md` | This file. |
| `spikes/` | Prototype and experiment files created during development. Not part of the running application. |
