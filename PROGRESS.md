# Renshu — Build Progress

**Function:** `renshu(daily_open) → 20min_production_session → measurable_recall_ability`

## Design Philosophy

**Fail loud.** Small errors compound until they're heavy to carry. Every layer of the app makes errors visible and immediate. Nothing stays quiet long enough to compound.

This governs every design decision:
- **No multiple choice.** Silent errors hide behind lucky guesses. Production-only — you type it or you don't.
- **No prereq gates.** Delayed failure = delayed learning. Scenes are always open. Jump in, fail, learn what to study.
- **Retrievability as opacity.** Memory decay announces itself visually — characters and words fade before you notice you've forgotten them.
- **Scene nudges move on without you.** Silence is the loudest feedback. The moment passes like it would in real life.
- **AI catches register, not just grammar.** Saying げんきですか to a friend is grammatically correct and socially wrong. That error surfaces in Action mode. It would never surface in a flashcard app.

The test: at no point should a user carry an error they don't know about.

## What Exists

### Engine
- **FSRS v4.5** spaced repetition — per-item stability, difficulty, retrievability tracking (`src/fsrs.js`)
- Per-character FSRS cards for hiragana (keyed `hira_あ`) — each practice updates every character in the word
- Session generation with learn-then-produce flow: recognition first, then immediate production recall
- Reinforcement queue: missed items re-enter the session
- Content: 469 vocab, 54 grammar fills, 43 sentence builds, 109 sentences across 13 Genki I lessons (`src/data/n5-content.js`)

### Exercise Types
- `vocab_recall` — see English → type Japanese
- `reading_recall` — see Japanese → type English meaning
- `particle_recall` — sentence with blank → type particle
- `hiragana_produce` — see romaji → type kana (word-based, not isolated characters)
- `hiragana_vocab` — read real N5 word (filtered to known characters) → pick meaning

### Interaction Design (implemented)
- Quality-differentiated feedback: fast correct (< 2s) gets microCelebrate animation, slow correct gets standard confirmation, incorrect gets vermillion + fade
- Streak-based momentum: 3+ correct in a row speeds up transitions, 5+ speeds further
- Directional transitions: exercises slide left-out / right-in
- Progress bar pulses on fast correct, turns vermillion in final stretch
- Staggered reveal on session complete screen

### Information Display (Tufte methodology)
- **Kana map** in settings drawer: each character's opacity = its FSRS retrievability. Not binary known/unknown — continuous gradient. Characters fade as memory fades.
- **Lesson pulse** on start screen below "begin": current lesson/group items rendered at retrievability opacity. The words themselves are the progress indicator.
- **Knowledge hero**: readable N5 word count (filtered by unlocked hiragana groups) + due-for-review count
- Vanity stats (streak, sessions) removed entirely

### Design System
- Kenya Hara: no rounded corners, vermillion accent (#C23B22), Noto Serif JP, minimal
- Dark mode: double-tap/click ここすき title (easter egg). Persists in localStorage. Inverts all CSS custom properties.
- PWA: manifest.json, service worker with self-healing cache (APP_VERSION check nukes old SW on mismatch)

### Infrastructure
- Single-file app: `index.html` (~5000 lines, all HTML/CSS/JS)
- Hosted on GitHub Pages: `gioc-360/renshu`
- Service worker: network-first for HTML, cache-first for assets, self-healing version check
- All state in localStorage, per-profile

## What's Open

### Bugs
- None known after the `const total` duplicate fix + SW self-healing

### Deferred
- **Pronunciation log**: hiragana exercises now track to FSRS (fixed), but the session complete breakdown doesn't show hiragana exercise types in the log list — verify this is actually working
- **Design framework audit**: identified as priority but not executed — visual audit using Tufte's Visual Display methodology
- **TC3 not confirmed**: "Does the core feel right?" taste checkpoint still open
- **Katakana FSRS**: `ensureHiraFSRSCard` only handles `hira_` prefix — katakana characters need `kata_` prefix cards too (the lesson pulse already handles this, but the exercise answer handler only creates `hira_` keys)

### Ideas Not Yet Scoped
- Offline-first with full SW caching of all lesson data
- Export/import progress (backup localStorage)
- Sound/haptic feedback channels (interaction contracts written but not implemented)
- Adaptive session length based on time-of-day patterns

## Key Files
| File | What |
|------|------|
| `index.html` | The entire app — HTML + CSS + JS |
| `sw.js` | Service worker, cache version = APP_VERSION |
| `manifest.json` | PWA manifest |
| `src/fsrs.js` | FSRS v4.5 implementation |
| `src/data/n5-content.js` | 13 lessons of N5 content |
| `src/data/hiragana-groups.js` | 12 progressive hiragana groups with words |
| `src/data/katakana-groups.js` | Katakana groups |
| `session.md` | Founding Agent session state |

## What's Next — v2 Action Mode

**Three modes: Hiragana, Katakana, Action.** Action absorbs Practice.

Scenarios replace textbook lessons as the organizing unit. First scenario: "Friend on campus" — you bump into a friend, casual Japanese, 4-5 exchanges. Practice drills the scenario's prerequisite phrases. No gates — scene is always open, fail loud, learn from it.

**Offline-first architecture.** Every scenario ships with pre-written exchanges and accept-lists. Works fully offline. AI (Claude Haiku) is an enhancement layer on top — better feedback, adaptive responses, register detection. User never knows which mode they're in.

**Build order:**
1. Friend scenario content (casual register phrases + accept-lists)
2. UI restructure (scenario cards replace lesson dropdown)
3. Scene interface offline (card-based exchanges, nudges, silent timer)
4. Feedback loop (scene results → FSRS → practice drills → re-enter)
5. AI enhancement (Claude Haiku evaluation, proxy, adaptive responses)

## Architecture Decisions
- **Single file**: everything in index.html. Simpler deployment, no build step, easier to iterate. Will split when it becomes a problem, not before.
- **FSRS per character, not per word**: a word like あき updates both あ and き. This means the kana map reflects actual character-level mastery, not just "did you get a word containing this character right once."
- **Opacity = retrievability everywhere**: one encoding, learned once, applied to kana map + lesson pulse. No legends needed.
- **No progress bars or percentages**: FSRS is continuous and there's no "done." Representing mastery as a gradient instead of a meter is more honest.
