/**
 * Conjugation Drill Data
 *
 * Verb conjugation exercises organized by pattern groups.
 * Each group introduces one conjugation form with verbs grouped
 * by conjugation pattern (ru-verbs together, then u-verbs by consonant).
 *
 * The scaffolding system uses the first verb in each pattern as
 * the worked example shown at the top of the card.
 *
 * Verb types:
 *   ru  — ichidan (る-verbs): drop る, apply ending
 *   u   — godan (う-verbs): consonant-specific rules
 *   irr — irregular (する, くる)
 *
 * Each verb has:
 *   dictionary  — dictionary form (plain present affirmative)
 *   type        — ru / u / irr
 *   masu        — ます form (for reference, already in n5-content)
 *   forms       — object mapping form names to correct conjugations
 *   english     — meaning
 *   lesson      — which Genki lesson introduces this verb
 */

const conjugationDrills = {
  // ═══════════════════════════════════════════════════════
  // FORM: masu (polite present) — L3
  // Rule: ru-verbs drop る add ます; u-verbs change final u→i add ます
  // ═══════════════════════════════════════════════════════
  masu: {
    id: 'masu',
    name: 'ます form',
    lesson: 'L3',
    hint: 'Polite present form',
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
        rule: 'う→い + ます',
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
  // FORM: negative (plain present negative) — L3
  // Rule: ru-verbs drop る add ない; u-verbs change う→あ add ない
  // ═══════════════════════════════════════════════════════
  negative: {
    id: 'negative',
    name: 'ない form',
    lesson: 'L3',
    hint: 'Plain negative',
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
        rule: 'う→あ + ない',
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
        rule: 'memorize',
        verbs: [
          { dictionary: 'する', form: 'しない', english: 'to do', type: 'irr' },
          { dictionary: 'くる', form: 'こない', english: 'to come', type: 'irr' },
          { dictionary: 'ある', form: 'ない', english: 'to exist (inanimate)', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FORM: past (plain past affirmative) — L4
  // Same sound changes as te-form but with た/だ instead of て/で
  // ═══════════════════════════════════════════════════════
  past: {
    id: 'past',
    name: 'た form',
    lesson: 'L4',
    hint: 'Plain past',
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
          { dictionary: 'いく', form: 'いった', english: 'to go', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FORM: te-form — L6
  // The most important conjugation form. Same sound changes as past
  // but with て/で instead of た/だ.
  // ═══════════════════════════════════════════════════════
  te: {
    id: 'te',
    name: 'て form',
    lesson: 'L6',
    hint: 'Conjunctive form',
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
          { dictionary: 'いく', form: 'いって', english: 'to go', type: 'irr' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FORM: te-iru (progressive / resultant state) — L7
  // ═══════════════════════════════════════════════════════
  teiru: {
    id: 'teiru',
    name: 'ている form',
    lesson: 'L7',
    hint: 'Progressive / ongoing state',
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
  // FORM: short form negative past — L8
  // dictionary → なかった
  // ═══════════════════════════════════════════════════════
  negativePast: {
    id: 'negativePast',
    name: 'なかった form',
    lesson: 'L8',
    hint: 'Plain negative past',
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
  // FORM: tai (want to ~) — L11
  // ═══════════════════════════════════════════════════════
  tai: {
    id: 'tai',
    name: 'たい form',
    lesson: 'L11',
    hint: 'Want to ~',
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
        rule: 'う→い + たい',
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
  // FORM: potential (can ~) — L10
  // ═══════════════════════════════════════════════════════
  potential: {
    id: 'potential',
    name: 'Potential form',
    lesson: 'L10',
    hint: 'Can ~',
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
        rule: 'う→え + る',
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
  // FORM: volitional (let's ~) — L10
  // ═══════════════════════════════════════════════════════
  volitional: {
    id: 'volitional',
    name: 'よう form',
    lesson: 'L10',
    hint: "Let's ~",
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
        rule: 'う→おう',
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
