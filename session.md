## Current Phase
Plan + Handoff (Jaw mode — building interactively)

## Locked Scope
`renshu(daily_open) → scenario_readiness → situated_production`

Three modes: Hiragana, Katakana, Action.
Action absorbs Practice. Scenarios are the organizing unit, not textbook lessons.

## Constraint Document
- **In scope:** Production exercises (existing types), FSRS scheduling, scenario-based learning, offline scene interface with accept-lists, AI evaluation as enhancement layer (Claude Haiku), casual + polite register training
- **Out of scope:** Cloud sync, accounts, backend server (proxy OK), N4+ content, gamification, voice input/output, chat UI
- **Who it serves:** Gio — Cornell MBA, learning Japanese, has friends with some Japanese knowledge. Daily self-study that builds toward real conversations.
- **Done condition:** Practice a friend scenario in the app, then actually use it with a friend on campus. App skeptic watches and sees someone assembling Japanese in context, not picking from lists.

## Design Philosophy
Fail loud. Small errors compound until heavy to carry. Every layer makes errors visible and immediate.
- No multiple choice (errors hide behind lucky guesses)
- No prereq gates (delayed failure = delayed learning)
- Retrievability as opacity (decay announces itself)
- Scenes always open (jump in unprepared, learn from failure)
- AI catches register errors, not just grammar

## Kill List
Kill: Chat UI/bubbles, gamification/XP/levels, voice I/O (for now), general AI tutor/sensei
Defer: Additional scenarios beyond friend, N4+ content, graded reading, export/import, pitch accent, voice mode
Ego: (none identified)

## Deployment
Jaw — iterating on existing ~5000-line single-file app

## Active Skills
Scope: KKSK (re-scoped for Action mode)
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

## Increment Plan (v2 — Action Mode)
1. **Friend scenario content** — casual register phrases, accept-lists per exchange, FSRS items
2. **UI restructure** — replace lesson dropdown with scenario cards, lesson pulse per scenario
3. **Scene interface (offline)** — card-based exchanges, accept-list matching, scene nudges, silent timer
4. **Feedback loop** — scene results → FSRS items → practice drills missed phrases → re-enter scene
5. **AI enhancement** — Claude Haiku evaluation layer, API proxy, adaptive friend responses, register feedback

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
