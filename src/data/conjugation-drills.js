/**
 * Conjugation Drill Data — Tae Kim approach
 *
 * Sequence follows Tae Kim's Guide to Japanese Grammar:
 * plain forms first (negative, past), then polite (ます), then
 * te-form as the gateway, then derived forms.
 *
 * The first form (ない) also teaches verb classification (ru vs u)
 * since that's the prerequisite for everything.
 *
 * Each form has:
 *   explanation — Tae Kim-style teaching text for the intro card
 *   tip        — one key insight to remember
 *
 * Verb types:
 *   ru  — ichidan: ends in る with vowel before it
 *   u   — godan: everything else (including る-ending exceptions)
 *   irr — irregular (する, くる)
 */

const conjugationDrills = {
  // ═══════════════════════════════════════════════════════
  // 1. NEGATIVE (ない) — the first conjugation you learn
  // Teaches verb classification as a side effect
  // ═══════════════════════════════════════════════════════
  negative: {
    id: 'negative',
    name: 'ない form',
    lesson: 'L3',
    hint: 'Plain negative — "don\'t / doesn\'t"',
    explanation: 'Before you conjugate anything, you need to classify verbs. There are only two types: ru-verbs end in る with a vowel sound before it (たべる, みる). Everything else is a u-verb (のむ, いく, はなす). There are only two irregular verbs in the entire language: する and くる. That\'s it. Once you can classify, the negative is simple: ru-verbs drop る and add ない. U-verbs shift the final う-sound to あ-sound and add ない.',
    tip: 'Classify first, then conjugate. ru-verb = drop る. u-verb = shift to あ-row.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → ない',
        verbs: [
          { dictionary: 'たべる', form: 'たべない', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みない', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねない', english: 'to sleep', type: 'ru' },
          { dictionary: 'おきる', form: 'おきない', english: 'to get up', type: 'ru' },
          { dictionary: 'でる', form: 'でない', english: 'to exit', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'う-sound → あ-sound + ない',
        verbs: [
          { dictionary: 'のむ', form: 'のまない', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いかない', english: 'to go', type: 'u' },
          { dictionary: 'かえる', form: 'かえらない', english: 'to return', type: 'u' },
          { dictionary: 'よむ', form: 'よまない', english: 'to read', type: 'u' },
          { dictionary: 'きく', form: 'きかない', english: 'to listen', type: 'u' },
          { dictionary: 'かく', form: 'かかない', english: 'to write', type: 'u' },
          { dictionary: 'はなす', form: 'はなさない', english: 'to speak', type: 'u' },
          { dictionary: 'あそぶ', form: 'あそばない', english: 'to play', type: 'u' },
          { dictionary: 'まつ', form: 'またない', english: 'to wait', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'just memorize these two (+ ある)',
        verbs: [
          { dictionary: 'する', form: 'しない', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'こない', english: 'to come', type: 'irr' },
          { dictionary: 'ある', form: 'ない', english: 'to exist', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 2. PAST (た/だ) — plain past, introduces consonant groups
  // ═══════════════════════════════════════════════════════
  past: {
    id: 'past',
    name: 'た form',
    lesson: 'L4',
    hint: 'Plain past — "did"',
    explanation: 'The past tense is where u-verbs get interesting. Ru-verbs are still simple: drop る, add た. But u-verbs split into consonant groups — the last kana determines what happens. This is the first time you see these groups, and they\'ll come back in て-form with the exact same pattern. Learn them here and て-form is free.',
    tip: 'む/ぶ/ぬ → んだ, く → いた, ぐ → いだ, す → した, つ/る/う → った. Same groups for て-form.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → た',
        verbs: [
          { dictionary: 'たべる', form: 'たべた', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みた', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねた', english: 'to sleep', type: 'ru' },
          { dictionary: 'おきる', form: 'おきた', english: 'to get up', type: 'ru' },
          { dictionary: 'おしえる', form: 'おしえた', english: 'to teach', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb: む・ぶ・ぬ → んだ',
        rule: 'む/ぶ/ぬ → んだ',
        verbs: [
          { dictionary: 'のむ', form: 'のんだ', english: 'to drink', type: 'u' },
          { dictionary: 'よむ', form: 'よんだ', english: 'to read', type: 'u' },
          { dictionary: 'あそぶ', form: 'あそんだ', english: 'to play', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: く → いた',
        rule: 'く → いた',
        verbs: [
          { dictionary: 'きく', form: 'きいた', english: 'to listen', type: 'u' },
          { dictionary: 'かく', form: 'かいた', english: 'to write', type: 'u' },
          { dictionary: 'あるく', form: 'あるいた', english: 'to walk', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: ぐ → いだ',
        rule: 'ぐ → いだ',
        verbs: [
          { dictionary: 'およぐ', form: 'およいだ', english: 'to swim', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: す → した',
        rule: 'す → した',
        verbs: [
          { dictionary: 'はなす', form: 'はなした', english: 'to speak', type: 'u' },
          { dictionary: 'かす', form: 'かした', english: 'to lend', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: つ・る・う → った',
        rule: 'つ/る/う → った',
        verbs: [
          { dictionary: 'まつ', form: 'まった', english: 'to wait', type: 'u' },
          { dictionary: 'かえる', form: 'かえった', english: 'to return', type: 'u' },
          { dictionary: 'かう', form: 'かった', english: 'to buy', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'した', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'きた', english: 'to come', type: 'irr' },
          { dictionary: 'いく', form: 'いった', english: 'to go (exception!)', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 3. MASU (polite present) — the polite wrapper
  // ═══════════════════════════════════════════════════════
  masu: {
    id: 'masu',
    name: 'ます form',
    lesson: 'L3',
    hint: 'Polite present — used with strangers, at work, in class',
    explanation: 'The ます form is just a politeness wrapper around the verb stem. It doesn\'t change the meaning — it changes the social register. You\'ll use this with anyone you\'re not close to. The conjugation is simple: ru-verbs drop る, u-verbs shift the final う-sound to い-sound. Then add ます. You already know how to classify verbs from ない form — same skill applies here.',
    tip: 'Same stem logic as ない, but shift to い-row instead of あ-row.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → ます',
        verbs: [
          { dictionary: 'たべる', form: 'たべます', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みます', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねます', english: 'to sleep', type: 'ru' },
          { dictionary: 'おきる', form: 'おきます', english: 'to get up', type: 'ru' },
          { dictionary: 'でる', form: 'でます', english: 'to exit', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'う-sound → い-sound + ます',
        verbs: [
          { dictionary: 'のむ', form: 'のみます', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いきます', english: 'to go', type: 'u' },
          { dictionary: 'かえる', form: 'かえります', english: 'to return', type: 'u' },
          { dictionary: 'よむ', form: 'よみます', english: 'to read', type: 'u' },
          { dictionary: 'きく', form: 'ききます', english: 'to listen', type: 'u' },
          { dictionary: 'かく', form: 'かきます', english: 'to write', type: 'u' },
          { dictionary: 'はなす', form: 'はなします', english: 'to speak', type: 'u' },
          { dictionary: 'あそぶ', form: 'あそびます', english: 'to play', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'します', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'きます', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 4. TE-FORM (て/で) — the gateway conjugation
  // Same consonant groups as た-form, just て/で instead of た/だ
  // ═══════════════════════════════════════════════════════
  te: {
    id: 'te',
    name: 'て form',
    lesson: 'L6',
    hint: 'Connects actions, makes requests, builds grammar',
    explanation: 'The て-form is the most important conjugation in Japanese. It\'s used to chain actions ("I ate and left"), make requests ("please eat"), build progressive ("is eating"), and dozens more patterns. The good news: if you learned た-form, you already know this. The consonant groups are identical — just replace た with て, and だ with で. That\'s it.',
    tip: 'Exact same consonant rules as た-form. た→て, だ→で. You already know this.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → て',
        verbs: [
          { dictionary: 'たべる', form: 'たべて', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みて', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねて', english: 'to sleep', type: 'ru' },
          { dictionary: 'おきる', form: 'おきて', english: 'to get up', type: 'ru' },
          { dictionary: 'あける', form: 'あけて', english: 'to open', type: 'ru' },
          { dictionary: 'しめる', form: 'しめて', english: 'to close', type: 'ru' },
          { dictionary: 'つける', form: 'つけて', english: 'to turn on', type: 'ru' },
          { dictionary: 'おしえる', form: 'おしえて', english: 'to teach', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb: む・ぶ・ぬ → んで',
        rule: 'む/ぶ/ぬ → んで',
        verbs: [
          { dictionary: 'のむ', form: 'のんで', english: 'to drink', type: 'u' },
          { dictionary: 'よむ', form: 'よんで', english: 'to read', type: 'u' },
          { dictionary: 'あそぶ', form: 'あそんで', english: 'to play', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: く → いて',
        rule: 'く → いて',
        verbs: [
          { dictionary: 'きく', form: 'きいて', english: 'to listen', type: 'u' },
          { dictionary: 'かく', form: 'かいて', english: 'to write', type: 'u' },
          { dictionary: 'あるく', form: 'あるいて', english: 'to walk', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: ぐ → いで',
        rule: 'ぐ → いで',
        verbs: [
          { dictionary: 'およぐ', form: 'およいで', english: 'to swim', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: す → して',
        rule: 'す → して',
        verbs: [
          { dictionary: 'はなす', form: 'はなして', english: 'to speak', type: 'u' },
          { dictionary: 'かす', form: 'かして', english: 'to lend', type: 'u' },
          { dictionary: 'けす', form: 'けして', english: 'to turn off', type: 'u' },
        ],
      },
      {
        pattern: 'u-verb: つ・る・う → って',
        rule: 'つ/る/う → って',
        verbs: [
          { dictionary: 'まつ', form: 'まって', english: 'to wait', type: 'u' },
          { dictionary: 'かえる', form: 'かえって', english: 'to return', type: 'u' },
          { dictionary: 'すわる', form: 'すわって', english: 'to sit', type: 'u' },
          { dictionary: 'かう', form: 'かって', english: 'to buy', type: 'u' },
          { dictionary: 'つかう', form: 'つかって', english: 'to use', type: 'u' },
          { dictionary: 'あらう', form: 'あらって', english: 'to wash', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'して', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'きて', english: 'to come', type: 'irr' },
          { dictionary: 'いく', form: 'いって', english: 'to go (exception!)', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 5. TE-IRU (progressive / resultant state)
  // Builds directly on て-form
  // ═══════════════════════════════════════════════════════
  teiru: {
    id: 'teiru',
    name: 'ている form',
    lesson: 'L7',
    hint: '"is doing" or "has done" — ongoing actions and states',
    explanation: 'て-form + いる describes something ongoing or a resulting state. "たべている" can mean "is eating" (action in progress) or "has eaten" (result). Which meaning depends on the verb — action verbs are progressive, state-change verbs are resultant. The conjugation is mechanical: just make the て-form and add いる. If you know て-form, this is free.',
    tip: 'Just て-form + いる. The hard part is て-form — you already drilled that.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'て form + いる',
        verbs: [
          { dictionary: 'たべる', form: 'たべている', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みている', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねている', english: 'to sleep', type: 'ru' },
          { dictionary: 'きる', form: 'きている', english: 'to wear', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'て form + いる',
        verbs: [
          { dictionary: 'のむ', form: 'のんでいる', english: 'to drink', type: 'u' },
          { dictionary: 'よむ', form: 'よんでいる', english: 'to read', type: 'u' },
          { dictionary: 'きく', form: 'きいている', english: 'to listen', type: 'u' },
          { dictionary: 'はなす', form: 'はなしている', english: 'to speak', type: 'u' },
          { dictionary: 'すむ', form: 'すんでいる', english: 'to live', type: 'u' },
          { dictionary: 'はたらく', form: 'はたらいている', english: 'to work', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'している', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'きている', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 6. NEGATIVE PAST (なかった)
  // Built on ない — just conjugate ない like an i-adjective
  // ═══════════════════════════════════════════════════════
  negativePast: {
    id: 'negativePast',
    name: 'なかった form',
    lesson: 'L8',
    hint: '"didn\'t" — plain negative past',
    explanation: 'Here\'s a secret: ない conjugates exactly like an い-adjective. To make it past tense, drop the い and add かった — just like あつい → あつかった. So the negative past of any verb is: make the ない form, then ない → なかった. Two steps you already know, chained together.',
    tip: 'ない behaves like an い-adjective. ない → なかった, same as あつい → あつかった.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'ない → なかった',
        verbs: [
          { dictionary: 'たべる', form: 'たべなかった', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みなかった', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねなかった', english: 'to sleep', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'ない → なかった',
        verbs: [
          { dictionary: 'のむ', form: 'のまなかった', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いかなかった', english: 'to go', type: 'u' },
          { dictionary: 'かく', form: 'かかなかった', english: 'to write', type: 'u' },
          { dictionary: 'はなす', form: 'はなさなかった', english: 'to speak', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'しなかった', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'こなかった', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 7. TAI (want to ~)
  // Uses the same stem as ます
  // ═══════════════════════════════════════════════════════
  tai: {
    id: 'tai',
    name: 'たい form',
    lesson: 'L11',
    hint: '"want to ~" — expresses your desire to do something',
    explanation: 'たい attaches to the same verb stem as ます — ru-verbs drop る, u-verbs shift to い-sound. Then add たい instead of ます. The result conjugates like an い-adjective: たべたくない (don\'t want to eat), たべたかった (wanted to eat). Note: たい only expresses YOUR desire. For someone else\'s desires, you need different grammar.',
    tip: 'Same stem as ます form, but add たい. Result behaves like an い-adjective.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → たい',
        verbs: [
          { dictionary: 'たべる', form: 'たべたい', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みたい', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねたい', english: 'to sleep', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'う-sound → い-sound + たい',
        verbs: [
          { dictionary: 'のむ', form: 'のみたい', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いきたい', english: 'to go', type: 'u' },
          { dictionary: 'かう', form: 'かいたい', english: 'to buy', type: 'u' },
          { dictionary: 'よむ', form: 'よみたい', english: 'to read', type: 'u' },
          { dictionary: 'およぐ', form: 'およぎたい', english: 'to swim', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'したい', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'きたい', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 8. POTENTIAL (can ~)
  // ═══════════════════════════════════════════════════════
  potential: {
    id: 'potential',
    name: 'Potential form',
    lesson: 'L10',
    hint: '"can do ~" — expressing ability',
    explanation: 'The potential form expresses ability. Ru-verbs drop る and add られる. U-verbs shift the final う-sound to え-sound and add る — the result is actually a ru-verb, which makes further conjugation easy. する becomes できる (a completely different word). Note: in casual speech, ru-verb られる is often shortened to れる (たべれる), called "ra-nuki."',
    tip: 'ru-verb: drop る → られる. u-verb: shift to え-row + る. する → できる.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → られる',
        verbs: [
          { dictionary: 'たべる', form: 'たべられる', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みられる', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねられる', english: 'to sleep', type: 'ru' },
          { dictionary: 'おきる', form: 'おきられる', english: 'to get up', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'う-sound → え-sound + る',
        verbs: [
          { dictionary: 'のむ', form: 'のめる', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いける', english: 'to go', type: 'u' },
          { dictionary: 'よむ', form: 'よめる', english: 'to read', type: 'u' },
          { dictionary: 'きく', form: 'きける', english: 'to listen', type: 'u' },
          { dictionary: 'かく', form: 'かける', english: 'to write', type: 'u' },
          { dictionary: 'はなす', form: 'はなせる', english: 'to speak', type: 'u' },
          { dictionary: 'およぐ', form: 'およげる', english: 'to swim', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'できる', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'こられる', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 9. VOLITIONAL (let's ~ / shall we ~)
  // ═══════════════════════════════════════════════════════
  volitional: {
    id: 'volitional',
    name: 'よう form',
    lesson: 'L10',
    hint: '"let\'s ~" — suggesting or expressing intent',
    explanation: 'The volitional form expresses intent or suggestion — "let\'s eat," "shall we go?" Ru-verbs drop る and add よう. U-verbs shift the final う-sound to お-sound and add う. This is the casual equivalent of ましょう. You can also use it with と思う to express something you\'re thinking of doing: たべようと思う ("I\'m thinking of eating").',
    tip: 'ru-verb: drop る → よう. u-verb: shift to お-row + う. Casual version of ましょう.',
    groups: [
      {
        pattern: 'ru-verb',
        rule: 'drop る → よう',
        verbs: [
          { dictionary: 'たべる', form: 'たべよう', english: 'to eat', type: 'ru' },
          { dictionary: 'みる', form: 'みよう', english: 'to see', type: 'ru' },
          { dictionary: 'ねる', form: 'ねよう', english: 'to sleep', type: 'ru' },
        ],
      },
      {
        pattern: 'u-verb',
        rule: 'う-sound → お-sound + う',
        verbs: [
          { dictionary: 'のむ', form: 'のもう', english: 'to drink', type: 'u' },
          { dictionary: 'いく', form: 'いこう', english: 'to go', type: 'u' },
          { dictionary: 'かう', form: 'かおう', english: 'to buy', type: 'u' },
          { dictionary: 'はなす', form: 'はなそう', english: 'to speak', type: 'u' },
          { dictionary: 'あそぶ', form: 'あそぼう', english: 'to play', type: 'u' },
        ],
      },
      {
        pattern: 'irregular',
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'しよう', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'こよう', english: 'to come', type: 'irr' },
        ],
      },
    ],
  },
};

export default conjugationDrills;
