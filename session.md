## Current Phase
Polish (v4 — Anchor Words) — TC1 ✓, TC2 ✓, TC3 ✓, TC4 ✓, TC5 ✓ (shipped)

## Locked Scope
`renshu(daily_open) → scenario_readiness → situated_production`

Four modes: Hiragana, Katakana, Anchor Words, Action.
Action absorbs Practice. Scenarios are the organizing unit, not textbook lessons.
Anchor Words fills the vocabulary gap between kana and scenarios.

### Function 3: AI-Powered Scene Drills (scoped, not yet built)
`drillEval(user_input_typed_or_spoken, drill_item) → ai_rating + tts_playback_at_controlled_speed`

Drills are scene rehearsal — each item is a conversational exchange with Yuki, not isolated vocab recall. Guide words scaffold production. AI evaluates thinking (appropriate, natural, correct register), not string matching. 8 exchanges per session, FSRS-ordered. TTS plays Yuki's line at learner-controlled speed. Mic + keyboard input.

### Function 4: Anchor Words (shipped 2026-03-22)
`anchorDrill(anchor_word_item) → production_exercise + audio_model + FSRS_scheduling`

25 high-frequency conversational glue words across 5 categories:
- Reactions (7): まじで？, すごい, いいね, えー, うそ, そうなんだ, なるほど
- Fillers (5): えっと, あの, じゃあ, でも, それで
- Acknowledgments (4): うん, そう, はい, ああ
- Questions (5): なに？, どこ？, いつ？, なんで？, ほんと？
- Emotions (4): やばい, たのしい, つらい, うれしい

Three exercise types: context→produce, reading recall, meaning recall.
Accept-list evaluation (no AI). FSRS scheduling. Intro cards with TTS. Explanations on all answers.

## Constraint Document
- **In scope:** Production exercises (existing types), FSRS scheduling, scenario-based learning, offline scene interface with accept-lists, AI evaluation as enhancement layer (GPT-4.1 via Vercel), casual + polite register training, voice I/O (scene mode — shipped), intro cards for new items
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
- Anchor words before scenarios — conversational foundation first

## Kill List
Kill: Chat UI/bubbles, gamification/XP/levels, general AI tutor/sensei, pronunciation scoring, furigana toggle, multiple-choice
Defer: AI-powered scene drills (Function 3 — scoped, build after anchor words), additional scenarios beyond friend, N4+ content, graded reading, export/import, pitch accent, Dynamic Yuki, progressive scaffolding, per-phrase speed memory, Korean mode, stroke tracing exercises, Whisper STT fallback for mobile
Ego: (none identified)

## Deployment
Jaw — iterating on existing ~6000-line single-file app

## Active Skills
Scope: KKSK (scouting for Function 4)
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
- TC2 (v3): Confirmed — AI-powered scene drills (scoped, not built yet)
- Shipped (2026-03-20): scene mic moved below input, voice recognition improved (continuous + interim), no auto-submit after recording
- Shipped (2026-03-20): eval model upgraded gpt-4.1-mini → gpt-4.1
- Shipped (2026-03-20): English translation of Yuki's line shown in scene, wrong answers explained in English
- Shipped (2026-03-20): drill missed phrases fix — collect ALL matching prereqs, not just first
- Shipped (2026-03-20): intro cards for NEW phrases (scene drills) and NEW words (hiragana/katakana drills)
- Shipped (2026-03-21): mobile UI fixes — input/check stacked vertically, voice recognition reliability on iOS, scene layout tightened
- Kamae read (v4): anchor words identified as missing vocabulary layer between kana and scenarios. "You just need anchor words to get started talking."
- TC1-TC4 (v4): All confirmed. Anchor Words mode shipped — 25 words, 3 exercise types, FSRS, intro cards + TTS, progression display.
- Shipped (2026-03-21): voice recording reliability fix — session ID counter, instance cleanup, no-speech auto-retry
- Shipped (2026-03-22): anchor word explanations on correct/incorrect + review log wired up
- FEATURES.md generated for systematic design review
- Shipped (2026-03-22): enhanced character intros — stroke animation (KanjiVG), kanji origin stories, per-character cards for groups 1-9
- Discussed: Korean mode (deferred — no user to design for), stroke tracing exercise (deferred — scope creep)
- iOS voice bug: second scene exchange mic fails. Tried multiple fixes (delay, cleanup, shared instance). Root cause is iOS SpeechRecognition API not releasing audio session between instances. Exchange 1 works, exchange 2 doesn't. Whisper fallback discussed and deferred — not worth the complexity for one user on desktop. Typing on mobile is fine for now.

## Increment Plan (v2 — Action Mode)
1. **Friend scenario content** — casual register phrases, accept-lists per exchange, FSRS items ✓
2. **UI restructure** — replace lesson dropdown with scenario cards, lesson pulse per scenario ✓
3. **Scene interface (offline)** — card-based exchanges, accept-list matching, scene nudges, silent timer ✓
4. **Feedback loop** — scene results → FSRS items → practice drills missed phrases → re-enter scene ✓
5. **AI enhancement** — GPT-4.1-mini evaluation layer, API proxy, register feedback ✓
6. **Voice I/O** — TTS for Yuki lines, mic input for scene responses, static fallback ✓

## Increment Plan (v3 — AI-Powered Scene Drills)
*Scoped (TC2 confirmed), deferred until after anchor words*

## Increment Plan (v4 — Anchor Words)
1. **Anchor word data + mode button** — 25 items, 4th mode tab, updateModeUI ✓
2. **Exercise generation + session wiring** — generateAnchorDrill(), FSRS keys, startSession() ✓
3. **Exercise render + setup** — 3 types + intro cards, accept-list matching, FSRS update ✓
4. **Progression + polish** — lesson pulse, progression display, reinforcement, explanations ✓

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
3. (v3) pending (deferred — build after anchor words)
4. (v3) pending
5. (v3) pending
---
1. (v4) Confirmed — anchor words as missing vocabulary layer between kana and scenarios
2. (v4) Confirmed — anchorDrill(anchor_word_item) → production_exercise + audio_model + FSRS_scheduling. 25 words, 3 types, accept-list eval.
3. (v4) Confirmed — core feels right. Voice fix shipped alongside.
4. (v4) Confirmed — function complete.
5. (v4) Confirmed — shipped. Enhanced character intros added. Korean mode and stroke tracing deferred.
