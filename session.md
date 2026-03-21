## Current Phase
Scope confirmed (TC2 v3) — entering Plan + Handoff next

## Locked Scope
`renshu(daily_open) → scenario_readiness → situated_production`

Three modes: Hiragana, Katakana, Action.
Action absorbs Practice. Scenarios are the organizing unit, not textbook lessons.

### Function 3: AI-Powered Scene Drills
`drillEval(user_input_typed_or_spoken, drill_item) → ai_rating + tts_playback_at_controlled_speed`

Drills are scene rehearsal — each item is a conversational exchange with Yuki, not isolated vocab recall. Guide words scaffold production. AI evaluates thinking (appropriate, natural, correct register), not string matching. 8 exchanges per session, FSRS-ordered. TTS plays Yuki's line at learner-controlled speed. Mic + keyboard input.

## Constraint Document
- **In scope:** Production exercises (existing types), FSRS scheduling, scenario-based learning, offline scene interface with accept-lists, AI evaluation as enhancement layer (GPT-4.1-mini via Vercel), casual + polite register training, voice I/O (scene mode — shipped), AI-powered scene drills with TTS speed control and mic input
- **Out of scope:** Cloud sync, accounts, backend server (proxy OK), N4+ content, gamification, chat UI, pronunciation scoring, furigana toggle
- **Who it serves:** Gio — Cornell MBA, learning Japanese, has friends with some Japanese knowledge. Daily self-study that builds toward real conversations.
- **Done condition:** Practice a friend scenario in the app, then actually use it with a friend on campus. App skeptic watches and sees someone assembling Japanese in context, not picking from lists.

## Design Philosophy
Fail loud. Small errors compound until heavy to carry. Every layer makes errors visible and immediate.
- No multiple choice (errors hide behind lucky guesses)
- No prereq gates (delayed failure = delayed learning)
- Retrievability as opacity (decay announces itself)
- Scenes always open (jump in unprepared, learn from failure)
- AI catches register errors, not just grammar
- Drills simulate thinking, not regurgitation
- Drills are rehearsal for the scene, not isolated flashcards

## Kill List
Kill: Chat UI/bubbles, gamification/XP/levels, general AI tutor/sensei, pronunciation scoring, furigana toggle, multiple-choice
Defer: Additional scenarios beyond friend, N4+ content, graded reading, export/import, pitch accent, Dynamic Yuki (AI-generated lines), progressive scaffolding (remove guides as mastery increases), per-phrase speed memory, mic for kana drills
Ego: (none identified)

## Deployment
Jaw — iterating on existing ~6000-line single-file app

## Active Skills
Scope: KKSK (re-scoped for Function 3)
Substance: 4R, interaction-design
Surface: Kenya Hara design system, envisioning-information

## Build Log
- TC1 (v1): Confirmed — forced production is the right problem
- TC2 (v1): Confirmed — production trainer with FSRS
- v1 delivered: FSRS engine, 5 exercise types, hiragana/katakana modes, interaction design, knowledge display
- TC1 (v2): Confirmed — pain is the gap between isolated recall and situated production. "Fail loud" philosophy.
- TC2 (v2): Confirmed — one scenario, offline-first, AI as enhancement, text production, casual register, card UI not chat
- Increments 1-3 (v2): delivered — scenario content, UI restructure, scene engine (offline)
- Increment 4 (v2): delivered — feedback loop: drill missed from scene results, enter scene from drill complete
- Increment 5 (v2): delivered — AI evaluation via Vercel + GPT-4.1-mini, accept-list fallback
- Voice I/O shipped (2026-03-19): TTS via /api/tts.js (OpenAI tts-1, nova), mic via Web Speech API, input lock during playback, static SpeechSynthesis fallback
- TC1 (v3): Confirmed — drills reject valid answers (exact match), no audio, no speed control. Drill is dumber than the scene.
- TC2 (v3): Confirmed — AI-powered scene drills. Exchange-based (not isolated vocab), guide words scaffold thinking, AI evaluates appropriateness not string match, 8 items, TTS with speed control, mic + keyboard, static TTS fallback.

## Increment Plan (v2 — Action Mode)
1. **Friend scenario content** — casual register phrases, accept-lists per exchange, FSRS items ✓
2. **UI restructure** — replace lesson dropdown with scenario cards, lesson pulse per scenario ✓
3. **Scene interface (offline)** — card-based exchanges, accept-list matching, scene nudges, silent timer ✓
4. **Feedback loop** — scene results → FSRS items → practice drills missed phrases → re-enter scene ✓
5. **AI enhancement** — GPT-4.1-mini evaluation layer, API proxy, register feedback ✓
6. **Voice I/O** — TTS for Yuki lines, mic input for scene responses, static fallback ✓

## Increment Plan (v3 — AI-Powered Scene Drills)
*To be planned in Phase 3 (Plan + Handoff)*

## Taste Checkpoint Log
1. (v1) Confirmed — forced production is the right problem
2. (v1) Confirmed — production trainer with FSRS, AI voice deferred
3. (v1) pending
4. (v1) pending
5. (v1) pending
---
1. (v2) Confirmed — gap between isolated recall and situated production. Friend scenario, not konbini.
2. (v2) Confirmed — one scenario (friend on campus), offline-first, AI as enhancement, text production, casual register, card UI not chat
3. (v2) Confirmed — core feels right. Feedback loop tightened. Bugs fixed.
4. (v2) pending
5. (v2) pending
---
1. (v3) Confirmed — drills reject valid answers, no audio, no speed control. Exact match is the bottleneck.
2. (v3) Confirmed — exchange-based drills with guide words, AI eval, TTS speed control, mic input, 8 items, thinking over regurgitation.
3. (v3) pending
4. (v3) pending
5. (v3) pending
