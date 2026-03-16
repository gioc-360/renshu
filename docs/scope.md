# Scope Document

## The Problem

Learning Japanese as an adult means juggling too many resources. You have Genki textbooks for grammar, Minato for JLPT-specific drills, YouTube for listening practice, Google Translate for quick lookups, and phone apps like Duolingo or WaniKani for vocabulary. None of these tools know about each other. There is no single place that tracks what you have actually learned, what you have been avoiding, and what you should practice next.

The result is predictable: practice becomes sporadic. When you do sit down, you default to the easiest thing -- flipping vocab flashcards or passively listening to a podcast. The harder skills (building sentences from scratch, reading without furigana, speaking aloud and hearing yourself) get skipped because they require more setup, more thought, and more discomfort. Over weeks, the gap between your vocabulary knowledge and your actual ability to use the language widens.

The core issue is not a lack of resources. It is a lack of structure and consistency.

## What We Built

**練習 Renshu** is a single-page web app that generates structured Japanese practice sessions, roughly 20 minutes each. You open it, press Start, and it gives you a sequence of 13 exercises covering six different skills. When you finish, it records what you got right and wrong, and the next time you come back, it knows where you left off and what to review.

Key facts:

- **No accounts, no API keys, no cost.** Everything runs in your browser. Nothing is sent to a server.
- **Six exercise types in every session:**
  - **Vocabulary** -- multiple choice, Japanese-to-English and English-to-Japanese
  - **Grammar** -- fill in the blank with the correct particle or word
  - **Sentence Building** -- arrange scrambled words into correct Japanese word order
  - **Reading** -- read a Japanese passage and answer a comprehension question
  - **Listening** -- hear a word or phrase spoken aloud (text-to-speech), pick the meaning
  - **Pronunciation** -- see Japanese text, say it into your microphone, get feedback on accuracy (speech recognition)
- **Profile system.** Multiple people can share the same device. Each person has their own progress, stats, and course position.
- **Course progression.** Each session introduces 3-5 new vocabulary words and 1-2 new grammar points, then mixes in review of previously seen material. Items you get wrong come back more often. Items you get right twice are marked as "learned."

## What This Is NOT

- **Not a replacement for textbooks.** Genki (or whatever reference you use) is still where you go to understand *why* a grammar pattern works. This tool drills you on using it.
- **Not a video player or YouTube aggregator.** No video content, no links to external lessons.
- **Not a chatbot or conversation partner.** There is no AI generating responses to your Japanese. Exercises are pre-authored.
- **Not a curriculum planner or study schedule.** It does not tell you when to study or for how long. It just makes sure that when you do study, the time is well spent.

## The Core Idea

One tool. One place to sit down. Zero decisions about what to practice. Press Start, do your 20 minutes, come back tomorrow and it knows where you left off.

## Architecture Decisions

- **Static website (no server, no database).** It is a single HTML file with embedded JavaScript and CSS, plus one external data file. It works on any device with a modern browser -- phone, tablet, laptop -- with no installation.
- **Content starts at JLPT N5.** The architecture supports N5 through N1, but only N5 content exists today. The level selector shows N4-N1 as "Coming Soon."
- **Browser Speech APIs for listening and pronunciation.** Text-to-speech (TTS) reads Japanese aloud for listening exercises. Speech recognition (STT) listens to your pronunciation and compares it to the expected text using Levenshtein distance. No external services, no API keys.
- **localStorage for progress.** All data stays on your device. Nothing is uploaded. Each profile gets its own storage keys, so multiple users on one device stay separate.

## What Comes Next (if the tool proves useful)

- Expand N5 content: more vocabulary words (currently 89, plenty of room for 200+), more grammar fill exercises (currently 15), more sentence build exercises (currently 12)
- Add N4 content once N5 material is well-covered
- Add kanji recognition exercises using the existing kana dataset (92 characters already in the system)
- Consider offline mode via Progressive Web App (PWA) so the tool works without an internet connection and can be added to a phone's home screen

## What We Explicitly Said No To

- **Integrating with external apps** (YouTube, Genki companion app, Minato). The whole point is to replace the need to context-switch between tools, not to connect them.
- **Social features, leaderboards, gamification beyond basic streaks.** A streak counter exists. That is enough. The tool is not trying to be addictive -- it is trying to be reliable.
- **User accounts or cloud sync.** Keeping everything local means zero maintenance, zero cost, zero privacy concerns. If you clear your browser data, you lose your progress. That is the tradeoff.
- **Building all N5-N1 content at once.** Content is hand-authored, not machine-generated. Quality matters more than volume. N5 first, then expand.
