// ══════════════════════════════════════════════════════
// FSRS v4.5 — Free Spaced Repetition Scheduler
// Inline implementation, no dependencies.
// Reference: https://github.com/open-spaced-repetition/fsrs4anki
// ══════════════════════════════════════════════════════

const DECAY = -0.5;
const FACTOR = 19 / 81;
const REQUEST_RETENTION = 0.9;
const MAX_INTERVAL = 36500;

// Default FSRS-5 weights (trained on 20K+ Anki users)
const W = [
  0.40255,  // w0:  initial stability for Again
  1.18385,  // w1:  initial stability for Hard
  3.173,    // w2:  initial stability for Good
  15.69105, // w3:  initial stability for Easy
  7.1949,   // w4:  difficulty baseline
  0.5345,   // w5:  difficulty grade scaling
  1.4604,   // w6:  difficulty delta
  0.0046,   // w7:  difficulty mean reversion
  1.54575,  // w8:  stability increase base
  0.1192,   // w9:  stability power decay
  1.01925,  // w10: retrievability effect
  1.9395,   // w11: post-lapse stability multiplier
  0.11,     // w12: post-lapse difficulty effect
  0.29605,  // w13: post-lapse stability power
  2.2698,   // w14: post-lapse retrievability effect
  0.2315,   // w15: Hard penalty
  2.9898,   // w16: Easy bonus
];

// Rating enum
export const AGAIN = 1;
export const HARD = 2;
export const GOOD = 3;
export const EASY = 4;

// State enum
export const NEW = 0;
export const LEARNING = 1;
export const REVIEW = 2;
export const RELEARNING = 3;

/**
 * Create a new FSRS card for an item.
 */
export function createCard(itemId, itemType) {
  return {
    itemId,
    itemType,
    due: new Date().toISOString(),
    stability: 0,
    difficulty: 0,
    state: NEW,
    reps: 0,
    lapses: 0,
    lastReview: null,
  };
}

/**
 * Compute current retrievability (probability of recall) for a card.
 * Returns 0 for new/unreviewed cards, 0-1 for reviewed cards.
 */
export function retrievability(card) {
  if (!card.lastReview || card.stability <= 0) return 0;
  const elapsed = (Date.now() - new Date(card.lastReview).getTime()) / 86400000;
  return Math.pow(1 + FACTOR * elapsed / card.stability, DECAY);
}

/**
 * Check if a card is due for review (retrievability dropped below target).
 */
export function isDue(card) {
  if (card.state === NEW) return true;
  return new Date(card.due) <= new Date();
}

/**
 * Clamp a value between min and max.
 */
function clamp(x, min, max) {
  return Math.min(max, Math.max(min, x));
}

/**
 * Compute initial difficulty from first rating.
 */
function initDifficulty(rating) {
  return clamp(W[4] - Math.exp(W[5] * (rating - 1)) + 1, 1, 10);
}

/**
 * Update difficulty with mean reversion toward Easy default.
 */
function updateDifficulty(D, rating) {
  const D0easy = clamp(W[4] - Math.exp(W[5] * 3) + 1, 1, 10);
  const delta = -W[6] * (rating - 3);
  return clamp(W[7] * D0easy + (1 - W[7]) * (D + delta * (10 - D) / 9), 1, 10);
}

/**
 * Compute next interval from stability and desired retention.
 */
function nextInterval(S) {
  const interval = (S / FACTOR) * (Math.pow(REQUEST_RETENTION, 1 / DECAY) - 1);
  return Math.min(MAX_INTERVAL, Math.max(1, Math.round(interval)));
}

/**
 * Schedule a card after a review. Returns a new card object (immutable).
 *
 * @param {Object} card - Current card state
 * @param {number} rating - AGAIN (1), HARD (2), GOOD (3), or EASY (4)
 * @returns {Object} Updated card with new due date, stability, difficulty
 */
export function schedule(card, rating) {
  const now = new Date();
  const R = retrievability(card);

  let newS, newD;

  if (card.state === NEW) {
    // First review: initialize from weights
    newS = W[rating - 1];
    newD = initDifficulty(rating);
  } else if (rating === AGAIN) {
    // Lapse: stability drops, difficulty increases
    newS = Math.min(
      W[11] * Math.pow(card.difficulty, -W[12]) *
      (Math.pow(card.stability + 1, W[13]) - 1) *
      Math.exp(W[14] * (1 - R)),
      card.stability
    );
    newD = updateDifficulty(card.difficulty, rating);
  } else {
    // Success: stability grows
    const hardPenalty = rating === HARD ? W[15] : 1;
    const easyBonus = rating === EASY ? W[16] : 1;
    newS = card.stability * (
      1 + Math.exp(W[8]) *
      (11 - card.difficulty) *
      Math.pow(card.stability, -W[9]) *
      (Math.exp(W[10] * (1 - R)) - 1) *
      hardPenalty * easyBonus
    );
    newD = updateDifficulty(card.difficulty, rating);
  }

  const interval = nextInterval(newS);
  const due = new Date(now.getTime() + interval * 86400000);

  return {
    ...card,
    stability: newS,
    difficulty: newD,
    due: due.toISOString(),
    state: rating === AGAIN ? (card.state === NEW ? LEARNING : RELEARNING) : REVIEW,
    reps: card.reps + 1,
    lapses: rating === AGAIN ? card.lapses + 1 : card.lapses,
    lastReview: now.toISOString(),
  };
}

/**
 * Sort cards by review urgency (most overdue first).
 * Cards past their due date are sorted by how far past they are.
 */
export function sortByUrgency(cards) {
  const now = Date.now();
  return [...cards].sort((a, b) => {
    const aOverdue = now - new Date(a.due).getTime();
    const bOverdue = now - new Date(b.due).getTime();
    return bOverdue - aOverdue;
  });
}

/**
 * Get cards that are due for review.
 */
export function getDueCards(cards) {
  return cards.filter(isDue);
}

/**
 * Get cards in New state (not yet reviewed).
 */
export function getNewCards(cards) {
  return cards.filter(c => c.state === NEW);
}
