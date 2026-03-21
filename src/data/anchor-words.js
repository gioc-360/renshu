/**
 * Anchor Words — high-frequency conversational glue
 *
 * 25 words across 5 categories that let a beginner stay in
 * any Japanese conversation. These are the reactions, fillers,
 * questions, acknowledgments, and emotions that native speakers
 * use constantly. Without them, you go silent the moment
 * conversation departs from scripted exchanges.
 *
 * Each item has:
 *   id        — unique key for FSRS (anchor_{id})
 *   japanese  — the word in kana
 *   romaji    — romanized reading
 *   english   — meaning/translation
 *   context   — when to use this word (the drill prompt)
 *   category  — grouping for display
 *   accepts   — accepted answers (kana + romaji variations)
 */

const anchorWords = [
  // ─── Reactions ───────────────────────────────────────
  {
    id: 'majide',
    japanese: 'まじで？',
    romaji: 'majide?',
    english: 'No way! / Really?!',
    context: 'Your friend tells you something surprising',
    category: 'reaction',
    accepts: ['まじで', 'まじで？', 'majide', 'majide?'],
  },
  {
    id: 'sugoi',
    japanese: 'すごい',
    romaji: 'sugoi',
    english: 'Amazing! / Wow!',
    context: 'Your friend did something impressive',
    category: 'reaction',
    accepts: ['すごい', 'sugoi'],
  },
  {
    id: 'iine',
    japanese: 'いいね',
    romaji: 'iine',
    english: 'Nice! / That\'s good!',
    context: 'Your friend suggests a plan you like',
    category: 'reaction',
    accepts: ['いいね', 'iine', 'ii ne'],
  },
  {
    id: 'ee',
    japanese: 'えー',
    romaji: 'ee',
    english: 'What?! / Huh?!',
    context: 'You hear something unexpected',
    category: 'reaction',
    accepts: ['えー', 'えぇ', 'ee'],
  },
  {
    id: 'uso',
    japanese: 'うそ',
    romaji: 'uso',
    english: 'No way! / You\'re lying!',
    context: 'Your friend says something hard to believe',
    category: 'reaction',
    accepts: ['うそ', 'うそ！', 'uso'],
  },
  {
    id: 'sounanda',
    japanese: 'そうなんだ',
    romaji: 'sounanda',
    english: 'Oh, I see / Is that so',
    context: 'Your friend explains something you didn\'t know',
    category: 'reaction',
    accepts: ['そうなんだ', 'sounanda', 'sou nanda'],
  },
  {
    id: 'naruhodo',
    japanese: 'なるほど',
    romaji: 'naruhodo',
    english: 'I see / That makes sense',
    context: 'Something your friend said just clicked',
    category: 'reaction',
    accepts: ['なるほど', 'naruhodo'],
  },

  // ─── Fillers ─────────────────────────────────────────
  {
    id: 'etto',
    japanese: 'えっと',
    romaji: 'etto',
    english: 'Um... / Let me think...',
    context: 'You need a moment to think before answering',
    category: 'filler',
    accepts: ['えっと', 'etto', 'えっと…'],
  },
  {
    id: 'ano',
    japanese: 'あの',
    romaji: 'ano',
    english: 'Um... / Excuse me...',
    context: 'You want to get someone\'s attention or start speaking',
    category: 'filler',
    accepts: ['あの', 'ano'],
  },
  {
    id: 'jaa',
    japanese: 'じゃあ',
    romaji: 'jaa',
    english: 'Well then / In that case',
    context: 'You\'re about to suggest something or wrap up',
    category: 'filler',
    accepts: ['じゃあ', 'じゃ', 'jaa', 'ja'],
  },
  {
    id: 'demo',
    japanese: 'でも',
    romaji: 'demo',
    english: 'But / However',
    context: 'You want to disagree or add a different point',
    category: 'filler',
    accepts: ['でも', 'demo'],
  },
  {
    id: 'sorede',
    japanese: 'それで',
    romaji: 'sorede',
    english: 'And then? / So?',
    context: 'You want to hear what happened next',
    category: 'filler',
    accepts: ['それで', 'sorede', 'sore de'],
  },

  // ─── Acknowledgments ─────────────────────────────────
  {
    id: 'un',
    japanese: 'うん',
    romaji: 'un',
    english: 'Yeah / Uh-huh',
    context: 'You\'re listening and want to show you understand',
    category: 'acknowledgment',
    accepts: ['うん', 'un'],
  },
  {
    id: 'sou',
    japanese: 'そう',
    romaji: 'sou',
    english: 'Right / Yeah',
    context: 'You agree with what someone said',
    category: 'acknowledgment',
    accepts: ['そう', 'sou'],
  },
  {
    id: 'hai',
    japanese: 'はい',
    romaji: 'hai',
    english: 'Yes',
    context: 'Someone asks you a yes/no question politely',
    category: 'acknowledgment',
    accepts: ['はい', 'hai'],
  },
  {
    id: 'aa',
    japanese: 'ああ',
    romaji: 'aa',
    english: 'Oh / Ah',
    context: 'You just realized or remembered something',
    category: 'acknowledgment',
    accepts: ['ああ', 'aa'],
  },

  // ─── Questions ───────────────────────────────────────
  {
    id: 'nani',
    japanese: 'なに？',
    romaji: 'nani?',
    english: 'What?',
    context: 'You didn\'t catch what someone said',
    category: 'question',
    accepts: ['なに', 'なに？', 'nani', 'nani?'],
  },
  {
    id: 'doko',
    japanese: 'どこ？',
    romaji: 'doko?',
    english: 'Where?',
    context: 'You want to know the location',
    category: 'question',
    accepts: ['どこ', 'どこ？', 'doko', 'doko?'],
  },
  {
    id: 'itsu',
    japanese: 'いつ？',
    romaji: 'itsu?',
    english: 'When?',
    context: 'You want to know the time or date',
    category: 'question',
    accepts: ['いつ', 'いつ？', 'itsu', 'itsu?'],
  },
  {
    id: 'nande',
    japanese: 'なんで？',
    romaji: 'nande?',
    english: 'Why?',
    context: 'Something doesn\'t make sense and you want to know why',
    category: 'question',
    accepts: ['なんで', 'なんで？', 'nande', 'nande?'],
  },
  {
    id: 'honto',
    japanese: 'ほんと？',
    romaji: 'honto?',
    english: 'Really? / For real?',
    context: 'You want to confirm something is true',
    category: 'question',
    accepts: ['ほんと', 'ほんと？', 'ほんとう', 'honto', 'honto?', 'hontou'],
  },

  // ─── Emotions ────────────────────────────────────────
  {
    id: 'yabai',
    japanese: 'やばい',
    romaji: 'yabai',
    english: 'Wow / Crazy / Oh no',
    context: 'Something extreme happened — good or bad',
    category: 'emotion',
    accepts: ['やばい', 'yabai'],
  },
  {
    id: 'tanoshii',
    japanese: 'たのしい',
    romaji: 'tanoshii',
    english: 'Fun! / Enjoyable!',
    context: 'You\'re having a good time',
    category: 'emotion',
    accepts: ['たのしい', 'tanoshii', 'tanoshī'],
  },
  {
    id: 'tsurai',
    japanese: 'つらい',
    romaji: 'tsurai',
    english: 'Tough / Hard / Painful',
    context: 'Something is difficult or you\'re struggling',
    category: 'emotion',
    accepts: ['つらい', 'tsurai'],
  },
  {
    id: 'ureshii',
    japanese: 'うれしい',
    romaji: 'ureshii',
    english: 'Happy! / Glad!',
    context: 'Something good happened to you',
    category: 'emotion',
    accepts: ['うれしい', 'ureshii', 'ureshī'],
  },
];

export default anchorWords;
