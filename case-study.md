# Renshu — Case Study

**Build:** Japanese production trainer PWA
**Builder:** Gio Caballero
**Mode:** Jaw (interactive, no Colossal)
**Sessions:** 3 conversations across 2 days
**Result:** ~5500-line single-file PWA with FSRS spaced repetition, 5 exercise types, hiragana/katakana learning modes, Action mode with offline scene engine, deployed on GitHub Pages

---

## Problem & Scope

**Pain (Kamae):** Every Japanese learning app trains recognition. Duolingo gives you four choices. WaniKani shows you a card and you pick. Anki is flashcards. The skeptic is right: you can't learn to produce language by recognizing it. The gap between "I picked the right answer" and "I typed it from memory" is the gap between studying and learning.

**Bottleneck (Kuzushi):** Learners drill vocab in isolation, then freeze in actual situations. No tool bridges isolated production → situated production without scheduling another human.

**Function (Sasoi) — evolved across two versions:**
- v1: `renshu(daily_open) → 20min_production_session → measurable_recall_ability`
- v2: `renshu(daily_open) → scenario_readiness → situated_production`

The function evolved when the builder identified a deeper problem: even production exercises are isolated. Typing すみません on a flashcard doesn't prepare you to deploy it when you bump into a Japanese-speaking friend on campus.

---

## What Got Built

### v1 — Production Engine
1. **FSRS v4.5 spaced repetition** — inline implementation, per-item stability/difficulty/retrievability. No dependencies.
2. **Five production exercise types** — vocab_recall, reading_recall, particle_recall, hiragana_produce, hiragana_vocab. All typing, no multiple choice.
3. **469 N5 vocab items** — expanded from 168 via background agent.
4. **Hiragana + Katakana learning modes** — progressive group unlocking, word-based (not isolated characters), cumulative curriculum.
5. **Interaction design** — quality-differentiated feedback (fast/slow/wrong), streak momentum, directional transitions, progress bar pulses.
6. **Information display (Tufte)** — kana map with retrievability-as-opacity, lesson pulse, knowledge hero. Vanity stats removed.
7. **PWA** — service worker with self-healing cache, GitHub Pages deployment.

### v2 — Action Mode
8. **Scenario-based learning** — Action mode absorbs Practice. Scenarios replace textbook lessons as the organizing unit.
9. **Friend on Campus scene** — 5 exchanges, casual register, accept-list matching, register feedback, scene nudges, silent timer (20s nudge, 35s move-on).
10. **Offline-first architecture** — scene engine works without API. AI enhancement is Increment 5, not a dependency.
11. **Scenario drill** — FSRS-driven practice sessions generated from scenario prerequisites. Drill button and Enter Scene button side by side, no gates.

---

## Key Design Decisions

### 1. Opacity = Retrievability (Tufte)
The kana map started as binary: known/unknown. The builder asked "what's the principle — redefining unknown?" The answer: the principle is redefining *known*. "Known" is a lie — everything is on a continuum. FSRS tracks retrievability 0→1. The map should encode the actual variable, not collapse it into categories.

This encoding was applied once and reused everywhere: kana map, lesson pulse, scenario prereq display. One visual language, learned once. No legends needed.

**Rule:** When you have continuous data, encode it continuously. Binary categories discard signal.

### 2. Fail Loud (Builder Philosophy)
The builder stated a personal philosophy: "fail loud so errors announce themselves because small errors compound until it's heavy to carry." This became the governing design principle.

Concrete implications:
- No multiple choice (errors hide behind lucky guesses)
- No prerequisite gates (delayed failure = delayed learning)
- Scenes always open — enter unprepared, fail, learn what to study
- Scene moves on without you after 35 seconds (silence is the loudest feedback)
- Register feedback ("too formal for a friend") catches errors no flashcard app surfaces

**Rule:** "Fail loud" is not a feature. It's an architecture. Every layer must surface errors, not hide them.

### 3. Action Absorbs Practice
The builder initially had four modes: Hiragana, Katakana, Practice, Action. The question "so how many modes?" led to the realization that Practice is what happens *inside* Action. You don't drill vocab in isolation — you drill the phrases you need for a specific scenario. The scenario gives practice purpose.

**Rule:** When a new mode makes an old mode redundant, absorb it. Don't accumulate modes.

### 4. Offline-First, AI-Second
The builder required offline mode to be seamless — not a degraded experience. This inverted the architecture: offline is the foundation (pre-written exchanges, accept-lists), AI is the enhancement layer. The user never knows which mode they're in.

**Rule:** If a feature requires network, build the offline version first. The offline version is the product. The AI version is a bonus.

### 5. Not Duolingo
The builder explicitly rejected cloning Duolingo's Roleplay (chat bubbles, message history, leisurely conversation). The differentiation is the mental model: Duolingo simulates "texting a friend." Renshu simulates "standing in front of someone." Card-based, not chat-based. Timed, not leisurely. The scene moves on without you.

**Rule:** Differentiation is in the mental model, not the features. "What does this feel like?" matters more than "what does this do?"

### 6. Friend, Not Konbini
The first scenario was initially a convenience store (konbini). The builder redirected: "I'm at Cornell MBA. I have friends with some Japanese knowledge. The first scenario should be talking to a friend." This was a better prototype because:
- Testable in real life within 24 hours (vs. "someday when I visit Japan")
- Teaches casual register (textbooks underweight this)
- Emotionally motivating (talking to friends beats buying groceries)

**Rule:** The prototype scenario should be the one the builder can test in real life soonest.

---

## Methodology Observations

### What the Founding Agent Did Well

1. **Skill invocation was productive.** Running interaction-design and envisioning-information as formal skills produced concrete artifacts — interaction contracts and Tufte-methodology display redesigns — that translated directly to code. The skill output wasn't decorative; it changed what got built.

2. **KKSK caught scope creep at kill list boundaries.** When Action mode was proposed, the Founding Agent flagged it as crossing two kill list items ("AI chatbot" and "external API dependencies") and ran TC1/TC2 properly. The builder confirmed consciously, not by default.

3. **Taste checkpoints worked at five, not eighty.** The builder drove most decisions through short discussion ("discuss" requests), and the protocol surfaces options with contrast. The builder never had to repeat themselves.

### What the Founding Agent Should Learn

1. **The builder teaches through questions, not corrections.** "What's the principle — redefining unknown?" was not a complaint about the three-state proposal. It was pushing toward the deeper insight (encode the actual variable). The Founding Agent's initial proposal (three states: known/fading/unknown) was a reasonable engineering answer. The builder's question elevated it to a design principle. **Implication:** When the builder asks "what's the principle?", they're not asking for justification — they're asking you to go deeper.

2. **"Discuss" means co-think, not present.** The builder asked "discuss" eight times across sessions. Each time, the Founding Agent presented options and the builder steered. This is the right dynamic — but it's not a taste checkpoint. It's collaborative thinking. The protocol's five-checkpoint model doesn't account for this kind of iterative exploration. It's closer to Jaw mode than to formal checkpoints. **Implication:** "Discuss" is a signal to think out loud, present tradeoffs, and let the builder steer. It's informal TC0 — cheaper than a checkpoint, richer than a Category 3 decision.

3. **Personal philosophy is the deepest constraint.** "Fail loud" wasn't in any skill or framework. It came from the builder's personal philosophy. It's more constraining than any technical requirement because it applies to every decision. **Implication:** Capture personal philosophy early. It's the constraint that other constraints derive from. It belongs in taste.md, not in session.md.

4. **The builder's context IS the scope.** The konbini → friend pivot happened because the builder said "I'm at Cornell MBA." Their personal context determined the right prototype scenario. The Founding Agent's initial proposal (konbini) was generically correct but personally wrong. **Implication:** The Founding Agent should ask "where are you?" before "what should we build?" Who the builder is determines what the first scenario should be.

5. **Self-healing > documentation.** The service worker caching issue was solved not by telling the user to clear cache, but by adding a self-healing mechanism (APP_VERSION check that nukes old caches). The fix that doesn't require the user to do anything is always better than the fix that requires a workaround. **Implication:** When a deployment problem hits, fix the system, don't document the workaround.

6. **Single-file apps scale further than expected.** At 5500 lines, the single index.html still works, still iterates fast, still deploys trivially. The instinct to split into files hasn't been validated by actual pain. **Implication:** Don't split preemptively. Split when the single file causes a real problem — not when it feels like it should.

---

## Build Stats

- **Total lines:** ~5500 (index.html) + 220 (scenarios.js) + 190 (fsrs.js) + 1560 (n5-content.js) + supporting data files
- **Commits:** 14 (from initial FSRS to Action mode scene engine)
- **Mode:** Jaw (all interactive, no Colossal deployment)
- **Thermal events:** 0
- **Skills invoked:** KKSK, 4R, interaction-design, envisioning-information, founding-agent
- **Taste checkpoints:** v1 TC1-TC2 confirmed, v2 TC1-TC2 confirmed, TC3-TC5 pending

---

## Status

v2 Increments 1-3 complete (content, UI restructure, scene engine). Remaining:
- **Increment 4:** Feedback loop verification (scene results → FSRS → drill → re-enter cycle end-to-end)
- **Increment 5:** AI enhancement (Claude Haiku evaluation, API proxy, adaptive responses, register detection beyond accept-lists)
- **TC3 pending:** "Does the core feel right?" — builder needs to use the friend scenario and test it with an actual friend.

The app is live at the GitHub Pages URL. The builder can open it on their phone, drill casual Japanese phrases, enter the friend scene, fail loud, and know exactly what to study next.
