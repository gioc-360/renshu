/**
 * Core session generation for JLPT N5 Japanese language study.
 *
 * Generates ~20-minute practice sessions (12-15 exercises, ~1-1.5 min each)
 * with six exercise types, weighted toward skills the user has practised
 * least recently.
 *
 * @module session
 */

import {
  vocab,
  grammarFills,
  sentenceBuilds,
  readings,
  listeningItems,
} from "./data/n5-content.js";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** All recognised exercise types. */
const EXERCISE_TYPES = [
  "vocab_quiz",
  "grammar_fill",
  "sentence_build",
  "reading",
  "listening",
  "pronunciation",
];

const SESSION_SIZE_MIN = 12;
const SESSION_SIZE_MAX = 15;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Cryptographically-unnecessary but good-enough Fisher-Yates shuffle. */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick `n` random elements from `arr` without repeats. */
function pickN(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

/** Pick one random element. */
function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Generate a short unique id (good enough for in-session use). */
function uid() {
  return `ex_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Build an array of distractors for a vocab multiple-choice question.
 * Returns 3 wrong answers (english strings) that differ from `correct`.
 */
function vocabDistractors(correctEnglish, pool) {
  const others = pool.filter((v) => v.english !== correctEnglish);
  return pickN(others, 3).map((v) => v.english);
}

// ---------------------------------------------------------------------------
// Weighting algorithm
// ---------------------------------------------------------------------------

/**
 * Given a skillHistory, return a weighted list of exercise types so that
 * less-recently-practised skills appear more often.
 *
 * The output is a flat array where each type appears 1-N times proportional
 * to its "staleness".  Drawing from this array gives a natural weighting.
 */
function weightedTypeBag(skillHistory) {
  const now = Date.now();
  const entries = EXERCISE_TYPES.map((type) => {
    const skill = skillHistory.skills[type];
    // Milliseconds since last practice.  If never practised, treat as very stale.
    const elapsed = skill.lastPracticed ? now - skill.lastPracticed : now;
    // Also factor in total completed — fewer completions = more weight.
    const completionFactor = 1 / (1 + skill.totalCompleted);
    // Lower correctRate means more practice needed.
    const accuracyFactor = 1 - skill.correctRate * 0.5; // range [0.5, 1.0]

    // Combine into a single staleness score (higher = needs more practice).
    const score = (elapsed / 3_600_000) * completionFactor * accuracyFactor;
    return { type, score };
  });

  // Normalise scores into repeat-counts (minimum 1, max 5).
  const maxScore = Math.max(...entries.map((e) => e.score));
  const bag = [];
  for (const { type, score } of entries) {
    const repeats = maxScore > 0 ? Math.max(1, Math.round((score / maxScore) * 5)) : 1;
    for (let i = 0; i < repeats; i++) bag.push(type);
  }
  return bag;
}

// ---------------------------------------------------------------------------
// Exercise generators (one per type)
// ---------------------------------------------------------------------------

/**
 * Vocab quiz — multiple choice: Japanese word -> English meaning
 * (50 % chance of reversing direction: English -> Japanese)
 */
function makeVocabQuiz(completedItems) {
  const pool = vocab.filter((v) => !completedItems.includes(v.id));
  const item = pickOne(pool.length > 0 ? pool : vocab);

  const reverse = Math.random() < 0.5;

  if (reverse) {
    // Show English, pick the Japanese
    const distractors = pickN(
      vocab.filter((v) => v.id !== item.id),
      3
    ).map((v) => v.word);
    const options = shuffle([item.word, ...distractors]);

    return {
      id: uid(),
      type: "vocab_quiz",
      question: {
        display: `What is the Japanese word for "${item.english}"?`,
        japanese: null,
        romaji: null,
      },
      options,
      correctAnswer: item.word,
      hint: `Reading: ${item.reading}`,
      useTTS: false,
      useSTT: false,
    };
  }

  // Default: show Japanese, pick the English
  const distractors = vocabDistractors(item.english, vocab);
  const options = shuffle([item.english, ...distractors]);

  return {
    id: uid(),
    type: "vocab_quiz",
    question: {
      display: `What does "${item.word}" mean?`,
      japanese: item.word,
      romaji: item.reading,
    },
    options,
    correctAnswer: item.english,
    hint: `Reading: ${item.reading}`,
    useTTS: false,
    useSTT: false,
  };
}

/** Grammar fill — fill the blank with the right particle or verb form. */
function makeGrammarFill(completedItems) {
  const pool = grammarFills.filter((g) => !completedItems.includes(g.id));
  const item = pickOne(pool.length > 0 ? pool : grammarFills);
  const options = shuffle([...item.options]);

  return {
    id: uid(),
    type: "grammar_fill",
    question: {
      display: item.sentence,
      japanese: item.sentence,
      romaji: item.reading,
    },
    options,
    correctAnswer: item.correct,
    hint: item.hint,
    useTTS: false,
    useSTT: false,
  };
}

/** Sentence build — arrange scrambled words into the correct Japanese order. */
function makeSentenceBuild(completedItems) {
  const pool = sentenceBuilds.filter((s) => !completedItems.includes(s.id));
  const item = pickOne(pool.length > 0 ? pool : sentenceBuilds);

  // Scramble the word order — keep shuffling until the order differs from correct.
  let scrambled = shuffle(item.correctOrder);
  let attempts = 0;
  while (
    scrambled.join("") === item.correctOrder.join("") &&
    attempts < 10
  ) {
    scrambled = shuffle(item.correctOrder);
    attempts++;
  }

  return {
    id: uid(),
    type: "sentence_build",
    question: {
      display: `Arrange the words to say: "${item.english}"`,
      japanese: null,
      romaji: null,
    },
    options: scrambled,
    correctAnswer: item.correctOrder.join(""),
    hint: item.hint,
    useTTS: false,
    useSTT: false,
  };
}

/** Reading — read a passage, pick the correct answer. */
function makeReading(completedItems) {
  const pool = readings.filter((r) => !completedItems.includes(r.id));
  const item = pickOne(pool.length > 0 ? pool : readings);
  const options = shuffle([...item.options]);

  return {
    id: uid(),
    type: "reading",
    question: {
      display: `${item.passage}\n\n${item.question}`,
      japanese: item.passage,
      romaji: item.passageReading,
    },
    options,
    correctAnswer: item.correct,
    hint: `Translation: ${item.english}`,
    useTTS: false,
    useSTT: false,
  };
}

/** Listening — hear a word/sentence, select what was said. */
function makeListening(completedItems) {
  const pool = listeningItems.filter((l) => !completedItems.includes(l.id));
  const item = pickOne(pool.length > 0 ? pool : listeningItems);

  // Build distractors from other listening items.
  const distractors = pickN(
    listeningItems.filter((l) => l.id !== item.id),
    3
  ).map((l) => l.english);
  const options = shuffle([item.english, ...distractors]);

  return {
    id: uid(),
    type: "listening",
    question: {
      display: "Listen and choose the correct meaning.",
      japanese: item.japanese,
      romaji: item.reading,
    },
    options,
    correctAnswer: item.english,
    hint: null,
    useTTS: true,
    useSTT: false,
  };
}

/** Pronunciation — see Japanese, speak it aloud. */
function makePronunciation(completedItems) {
  const pool = listeningItems.filter((l) => !completedItems.includes(l.id));
  const item = pickOne(pool.length > 0 ? pool : listeningItems);

  return {
    id: uid(),
    type: "pronunciation",
    question: {
      display: `Say this aloud: ${item.japanese}`,
      japanese: item.japanese,
      romaji: item.reading,
    },
    options: null,
    correctAnswer: item.reading,
    hint: `Meaning: ${item.english}`,
    useTTS: false,
    useSTT: true,
  };
}

/** Map of type -> generator function. */
const GENERATORS = {
  vocab_quiz: makeVocabQuiz,
  grammar_fill: makeGrammarFill,
  sentence_build: makeSentenceBuild,
  reading: makeReading,
  listening: makeListening,
  pronunciation: makePronunciation,
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Create a fresh skill-history object for a first-time user.
 *
 * @param {string} [level="N5"] — JLPT level
 * @returns {Object} A skillHistory with zeroed stats for every exercise type.
 */
export function createDefaultHistory(level = "N5") {
  const skills = {};
  for (const type of EXERCISE_TYPES) {
    skills[type] = {
      lastPracticed: null,
      totalCompleted: 0,
      correctRate: 0,
    };
  }
  return {
    level,
    skills,
    completedItems: [],
  };
}

/**
 * Update a skill-history object after the user completes an exercise.
 *
 * Mutates and returns the same object for convenience.
 *
 * @param {Object} skillHistory — current history
 * @param {string} exerciseType — one of the 6 exercise types
 * @param {boolean} wasCorrect — whether the user answered correctly
 * @returns {Object} the updated skillHistory
 */
export function updateHistory(skillHistory, exerciseType, wasCorrect) {
  const skill = skillHistory.skills[exerciseType];
  if (!skill) {
    throw new Error(`Unknown exercise type: ${exerciseType}`);
  }

  const prev = skill.totalCompleted;
  skill.totalCompleted = prev + 1;
  skill.lastPracticed = Date.now();

  // Running weighted average for correctRate.
  skill.correctRate =
    (skill.correctRate * prev + (wasCorrect ? 1 : 0)) / skill.totalCompleted;

  return skillHistory;
}

/**
 * Generate a structured practice session.
 *
 * Produces 12-15 exercises rotating through all six types, weighted so that
 * skills the user has practised least recently appear more frequently.
 *
 * @param {string} userLevel — JLPT level (currently only "N5" content exists)
 * @param {Object|null} skillHistory — the user's stored skill history, or
 *   null for a first-time user (a balanced session will be generated).
 * @returns {{ exercises: Object[], meta: Object }} A session object containing
 *   an array of exercise objects and session metadata.
 */
export function generateSession(userLevel, skillHistory) {
  const history = skillHistory ?? createDefaultHistory(userLevel);
  const completedItems = history.completedItems ?? [];

  // Decide how many exercises to include (12-15).
  const size =
    SESSION_SIZE_MIN +
    Math.floor(Math.random() * (SESSION_SIZE_MAX - SESSION_SIZE_MIN + 1));

  // Build the type sequence.
  let typeSequence;

  if (!skillHistory) {
    // First-time user: cycle evenly through all types.
    typeSequence = [];
    while (typeSequence.length < size) {
      typeSequence.push(...shuffle(EXERCISE_TYPES));
    }
    typeSequence = typeSequence.slice(0, size);
  } else {
    // Returning user: draw from a weighted bag.
    const bag = weightedTypeBag(history);
    typeSequence = [];

    // Guarantee at least one of each type to keep sessions varied.
    const guaranteed = shuffle([...EXERCISE_TYPES]);
    typeSequence.push(...guaranteed);

    // Fill remaining slots from the weighted bag.
    while (typeSequence.length < size) {
      typeSequence.push(pickOne(bag));
    }

    // Shuffle so guaranteed types are not always at the front.
    typeSequence = shuffle(typeSequence);
  }

  // Generate exercises.
  const exercises = typeSequence.map((type) => {
    const generator = GENERATORS[type];
    return generator(completedItems);
  });

  return {
    exercises,
    meta: {
      level: userLevel,
      size: exercises.length,
      generatedAt: new Date().toISOString(),
      typeCounts: EXERCISE_TYPES.reduce((acc, t) => {
        acc[t] = exercises.filter((e) => e.type === t).length;
        return acc;
      }, {}),
    },
  };
}
