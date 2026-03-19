/**
 * Action Mode Scenarios
 *
 * Each scenario is a real-world situation with 4-5 exchanges.
 * Offline-first: every exchange has accept-lists for valid responses.
 * AI enhancement layer evaluates when available but is not required.
 *
 * Structure:
 *   - id: unique scenario key
 *   - title: display name (Japanese)
 *   - titleEn: display name (English)
 *   - setting: scene description shown on first card
 *   - register: expected formality level (casual / polite / mixed)
 *   - prereqs: phrases the scenario drills (become FSRS items)
 *   - exchanges: ordered moments, each with:
 *       - speaker: who's talking ("friend" / "narrator")
 *       - line: what they say (Japanese)
 *       - lineReading: romaji reading
 *       - lineEn: English translation (shown after response)
 *       - prompt: what the user needs to do (shown as hint)
 *       - accepts: array of valid responses (normalized hiragana)
 *       - best: the most natural response
 *       - feedback: shown after evaluation
 *           - correct: feedback for accepted response
 *           - close: feedback for almost-right (wrong register, etc.)
 *           - miss: feedback for wrong/no response
 *       - nudge: scene nudge text if user takes too long (~20s)
 *       - moveOn: scene moves on text if user doesn't respond (~35s)
 */

export default [
  {
    id: 'friend-campus',
    title: 'ともだち',
    titleEn: 'Friend on Campus',
    setting: 'You bump into your friend Yuki outside Sage Hall between classes.',
    register: 'casual',
    prereqs: [
      { id: 'fc_01', japanese: 'よう', romaji: 'you', english: 'hey', type: 'greeting' },
      { id: 'fc_02', japanese: 'ひさしぶり', romaji: 'hisashiburi', english: 'long time no see', type: 'greeting' },
      { id: 'fc_03', japanese: 'げんき？', romaji: 'genki?', english: 'how are you?', type: 'check-in' },
      { id: 'fc_04', japanese: 'まあまあ', romaji: 'maamaa', english: 'so-so', type: 'response' },
      { id: 'fc_05', japanese: 'げんき', romaji: 'genki', english: "I'm good", type: 'response' },
      { id: 'fc_06', japanese: 'いそがしい', romaji: 'isogashii', english: 'busy', type: 'response' },
      { id: 'fc_07', japanese: 'まじで？', romaji: 'maji de?', english: 'really?', type: 'reaction' },
      { id: 'fc_08', japanese: 'すごい', romaji: 'sugoi', english: 'amazing', type: 'reaction' },
      { id: 'fc_09', japanese: 'いいね', romaji: 'ii ne', english: 'nice', type: 'reaction' },
      { id: 'fc_10', japanese: 'たいへんだね', romaji: 'taihen da ne', english: "that's tough", type: 'reaction' },
      { id: 'fc_11', japanese: 'また こんど あそぼう', romaji: 'mata kondo asobou', english: "let's hang out sometime", type: 'suggestion' },
      { id: 'fc_12', japanese: 'ひま な とき れんらく して', romaji: 'hima na toki renraku shite', english: 'hit me up when you have time', type: 'suggestion' },
      { id: 'fc_13', japanese: 'じゃあね', romaji: 'jaa ne', english: 'see ya', type: 'farewell' },
      { id: 'fc_14', japanese: 'またね', romaji: 'mata ne', english: 'see you later', type: 'farewell' },
      { id: 'fc_15', japanese: 'おつかれ', romaji: 'otsukare', english: 'good work / take it easy', type: 'farewell' },
      { id: 'fc_16', japanese: 'がんばって', romaji: 'ganbatte', english: 'good luck / do your best', type: 'farewell' },
    ],
    exchanges: [
      // ── Exchange 1: Greeting ──────────────────────────
      {
        speaker: 'friend',
        line: 'よう！ひさしぶり！',
        lineReading: 'you! hisashiburi!',
        lineEn: 'Hey! Long time no see!',
        prompt: 'Greet your friend back',
        accepts: [
          'よう',
          'ひさしぶり',
          'よう、ひさしぶり',
          'おう',
          'おう、ひさしぶり',
          'やあ',
          'おひさしぶり',
        ],
        best: 'よう、ひさしぶり！',
        feedback: {
          correct: 'Matching their energy — よう for よう. That sets the tone. Now they know you\'re on the same level.',
          close: [
            { pattern: 'こんにちは', msg: 'Too formal for a friend — こんにちは is for strangers. Just よう or ひさしぶり.' },
            { pattern: 'おはようございます', msg: 'Way too formal. Drop the ございます — friends say おはよう at most.' },
          ],
          miss: 'A friend says hey — you say hey back. よう or ひさしぶり.',
        },
        nudge: 'Yuki tilts their head, waiting.',
        moveOn: 'Yuki shrugs and keeps walking.',
      },

      // ── Exchange 2: Check-in ──────────────────────────
      {
        speaker: 'friend',
        line: 'さいきん どう？いそがしい？',
        lineReading: 'saikin dou? isogashii?',
        lineEn: "How's it been? Busy?",
        prompt: 'Tell them how you are',
        accepts: [
          'げんき',
          'まあまあ',
          'いそがしい',
          'げんきだよ',
          'まあまあだよ',
          'いそがしいよ',
          'めっちゃいそがしい',
          'ぼちぼち',
          'うん、いそがしい',
          'まあ、げんき',
        ],
        best: 'まあまあ、いそがしいよ',
        feedback: {
          correct: 'Short and real — that\'s how friends talk. You gave them something to respond to. What will they share next?',
          close: [
            { pattern: 'げんきです', msg: 'Drop the です — too stiff for a friend. Just げんき or げんきだよ.' },
            { pattern: 'いそがしいです', msg: 'です makes it formal. Friends say いそがしい or いそがしいよ.' },
          ],
          miss: 'They asked how you are. げんき, まあまあ, or いそがしい all work.',
        },
        nudge: 'Yuki raises an eyebrow.',
        moveOn: '"まあ いいか…" Yuki laughs it off.',
      },

      // ── Exchange 3: Friend shares news ────────────────
      {
        speaker: 'friend',
        line: 'おれ、らいしゅう にほんご の テスト あるんだ…',
        lineReading: 'ore, raishuu nihongo no tesuto arunda...',
        lineEn: 'I have a Japanese test next week...',
        prompt: 'React to what they said',
        accepts: [
          'まじで',
          'まじで？',
          'すごい',
          'たいへんだね',
          'たいへんだ',
          'がんばって',
          'がんばれ',
          'だいじょうぶ？',
          'うそ',
          'えー',
          'そうなんだ',
        ],
        best: 'まじで？がんばって！',
        feedback: {
          correct: 'You acknowledged their stress and backed them up. That\'s what friends do — react, then support. Where does the conversation go from here?',
          close: [
            { pattern: 'がんばってください', msg: 'ください is too polite for a friend. Just がんばって or がんばれ.' },
            { pattern: 'だいじょうぶですか', msg: 'Drop the ですか. Friends say だいじょうぶ？ with rising tone.' },
          ],
          miss: 'Your friend shared something stressful. React: まじで？, たいへんだね, or がんばって.',
        },
        nudge: 'Yuki looks at you, waiting for a reaction.',
        moveOn: '"まあ、なんとかなるか…" Yuki sighs.',
      },

      // ── Exchange 4: Suggestion ────────────────────────
      {
        speaker: 'friend',
        line: 'テスト おわったら、なんか しよう！',
        lineReading: 'tesuto owattara, nanka shiyou!',
        lineEn: "Once the test is over, let's do something!",
        prompt: 'Agree or suggest something',
        accepts: [
          'いいね',
          'いいね！',
          'いいよ',
          'そうしよう',
          'うん',
          'もちろん',
          'ぜったい',
          'あそぼう',
          'またこんどあそぼう',
          'のみにいこう',
          'ひまなときれんらくして',
          'たのしみ',
        ],
        best: 'いいね！たのしみ！',
        feedback: {
          correct: 'You matched their excitement. In Japanese, enthusiasm is agreement — いいね says "I\'m in" without needing to explain. The conversation\'s winding down now.',
          close: [
            { pattern: 'いいですね', msg: 'Too formal. Friends say いいね, not いいですね.' },
            { pattern: 'しましょう', msg: 'しましょう is polite. Casual version: しよう.' },
          ],
          miss: 'They want to hang out after the test. いいね, そうしよう, or たのしみ.',
        },
        nudge: 'Yuki waits, looking hopeful.',
        moveOn: '"じゃあ また れんらく するね！" Yuki waves and heads off.',
      },

      // ── Exchange 5: Farewell ──────────────────────────
      {
        speaker: 'friend',
        line: 'じゃ、じゅぎょう いかなきゃ。またね！',
        lineReading: 'ja, jugyou ikanakya. mata ne!',
        lineEn: 'Well, gotta get to class. See ya!',
        prompt: 'Say goodbye',
        accepts: [
          'じゃあね',
          'またね',
          'おつかれ',
          'がんばって',
          'がんばれ',
          'またね！',
          'じゃね',
          'じゃあ',
          'うん、またね',
          'バイバイ',
          'おつ',
        ],
        best: 'おつかれ！またね！',
        feedback: {
          correct: 'おつかれ does double duty — "good work" and "take care." It\'s the friend goodbye that says you respect their grind.',
          close: [
            { pattern: 'さようなら', msg: 'さようなら is too formal — almost dramatic. Friends say じゃあね, またね, or おつかれ.' },
            { pattern: 'しつれいします', msg: "That's for leaving a professor's office, not a friend. じゃあね or またね." },
          ],
          miss: 'They said bye. じゃあね, またね, or おつかれ all work.',
        },
        nudge: 'Yuki starts walking away.',
        moveOn: 'Yuki waves over their shoulder and disappears into the crowd.',
      },
    ],
  },
];
