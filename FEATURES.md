# Renshu Feature List

## Modes

| Mode | What it does |
|------|-------------|
| **Hiragana** | 10 groups, 46 characters. Progressive unlock. Words use only learned characters. |
| **Katakana** | 10 groups, 46 characters. Shows hiragana twins. Same progression system. |
| **Anchor Words** | 25 conversational glue words across 5 categories (reactions, fillers, acknowledgments, questions, emotions). |
| **Action** | Friend-on-campus scenario. Drill prereq phrases + enter scene conversation with Yuki. |

## Exercise Types

| Type | Input | Tests |
|------|-------|-------|
| Vocab Quiz | Pick from options | Japanese → English recognition |
| Grammar Fill | Pick particle | Sentence completion |
| Reading | Pick from options | Japanese sentence → English |
| Listening | Pick from options | Audio → English |
| Sentence Build | Drag/tap words | Word order |
| Pronunciation | Speak aloud | Speech recognition match |
| Vocab Recall | Type kana/romaji | English → Japanese production |
| Particle Recall | Type | Fill the particle |
| Reading Recall | Type English | Japanese → English production |
| Hiragana Read | Type romaji | Kana → romaji |
| Hiragana Spot | Pick kana | English/romaji → kana |
| Hiragana Reverse | Pick English | Kana → English |
| Hiragana Listen | Type romaji | Audio → romaji |
| Hiragana Confusable | Pick correct | Look-alike discrimination |
| Hiragana Build | Tap to arrange | Rebuild scrambled word |
| Hiragana Produce | Type kana | Romaji → kana |
| Hiragana Vocab | Type romaji | Real words with learned kana |
| Anchor Context | Type kana/romaji | Situation → produce the word |
| Anchor Read | Type romaji | Kana → romaji |
| Anchor Produce | Type kana/romaji | English → kana |
| Scene Intro | Auto-advance | New phrase card + TTS |
| Word Intro | Auto-advance | New word card + breakdown |
| Anchor Intro | Auto-advance | New anchor word + context + TTS |

## Scene Engine

- 5 exchanges per scene with Yuki (casual register)
- TTS plays Yuki's line, input locks during playback
- 20s nudge timer, 35s auto-submit
- AI evaluation (GPT-4.1) rates register, relevance, naturalness
- Accept-list fallback when API unavailable
- English translation of Yuki's line shown
- Wrong answers explained in English
- Scene results → drill missed phrases

## Scheduling (FSRS v4.5)

- Spaced repetition with 4 states: NEW, LEARNING, REVIEW, RELEARNING
- Retrievability-as-opacity (lesson pulse, kana map)
- Due items prioritized, then weakest, then new
- 8 items per anchor/scene session
- Response time affects rating (< 2s = EASY)
- Reinforcement queue re-injects wrong answers

## Voice

- **TTS**: OpenAI tts-1 (nova) via Vercel, browser SpeechSynthesis fallback
- **STT**: Web Speech API (ja-JP), continuous on desktop, single-utterance on mobile
- Auto-retry on no-speech errors (mobile), session ID prevents stale callbacks

## AI

- `/api/evaluate.js` — Vercel proxy to GPT-4.1
- Returns: acceptable, rating (GOOD/HARD/AGAIN), feedback, registerError
- Temperature 0.1, 4s timeout

## UI/UX

- Profile system (multi-profile, localStorage)
- Settings drawer with knowledge display + kana heat map
- Progress bars per mode
- Dark mode (double-tap title)
- Intro cards for NEW items (phrase, word, anchor)
- Review log (scrollable, inline, most recent on top)
- Animated score count-up + breakdown by type on session complete
- Slide-in exercise cards (faster on correct streak)
- Kenya Hara design: no rounded corners, vermillion accent, Noto Serif JP

## Data Files

| File | Content |
|------|---------|
| `n5-content.js` | 12 lessons, 4 phases, 1000+ vocab, grammar, sentences |
| `hiragana-groups.js` | 10 groups + confusable pairs |
| `katakana-groups.js` | 10 groups + confusable pairs |
| `scenarios.js` | Friend-campus: 16 prereqs, 5 exchanges |
| `anchor-words.js` | 25 words, 5 categories |
| `fsrs.js` | FSRS v4.5 engine |
