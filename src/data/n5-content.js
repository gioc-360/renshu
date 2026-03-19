/**
 * JLPT N5 Study Content — Genki I Curriculum
 *
 * Organized by lesson following the Genki I textbook progression.
 * Four phases:
 *   Phase 1 (Foundation):   Greetings + Lessons 1-3
 *   Phase 2 (Structure):    Lessons 4-6
 *   Phase 3 (Flow):         Lessons 7-9
 *   Phase 4 (Independence): Lessons 10-12
 *
 * Kana learning (hiragana + katakana) is handled by dedicated Learning modes,
 * not by Practice mode. See hiragana-groups.js and katakana-groups.js.
 *
 * Each lesson contains:
 *   - vocabulary   (words to learn)
 *   - grammar      (patterns with examples)
 *   - sentences    (practice sentences)
 *   - grammarFills (fill-in-the-blank exercises)
 *   - sentenceBuilds (word ordering exercises)
 */

const n5Content = {
  // ===========================================================================
  // KANA — full basic sets (46 hiragana + 46 katakana)
  // ===========================================================================
  kana: {
    hiragana: [
      // a-row
      { character: "あ", romaji: "a", row: "a" },
      { character: "い", romaji: "i", row: "a" },
      { character: "う", romaji: "u", row: "a" },
      { character: "え", romaji: "e", row: "a" },
      { character: "お", romaji: "o", row: "a" },
      // ka-row
      { character: "か", romaji: "ka", row: "ka" },
      { character: "き", romaji: "ki", row: "ka" },
      { character: "く", romaji: "ku", row: "ka" },
      { character: "け", romaji: "ke", row: "ka" },
      { character: "こ", romaji: "ko", row: "ka" },
      // sa-row
      { character: "さ", romaji: "sa", row: "sa" },
      { character: "し", romaji: "shi", row: "sa" },
      { character: "す", romaji: "su", row: "sa" },
      { character: "せ", romaji: "se", row: "sa" },
      { character: "そ", romaji: "so", row: "sa" },
      // ta-row
      { character: "た", romaji: "ta", row: "ta" },
      { character: "ち", romaji: "chi", row: "ta" },
      { character: "つ", romaji: "tsu", row: "ta" },
      { character: "て", romaji: "te", row: "ta" },
      { character: "と", romaji: "to", row: "ta" },
      // na-row
      { character: "な", romaji: "na", row: "na" },
      { character: "に", romaji: "ni", row: "na" },
      { character: "ぬ", romaji: "nu", row: "na" },
      { character: "ね", romaji: "ne", row: "na" },
      { character: "の", romaji: "no", row: "na" },
      // ha-row
      { character: "は", romaji: "ha", row: "ha" },
      { character: "ひ", romaji: "hi", row: "ha" },
      { character: "ふ", romaji: "fu", row: "ha" },
      { character: "へ", romaji: "he", row: "ha" },
      { character: "ほ", romaji: "ho", row: "ha" },
      // ma-row
      { character: "ま", romaji: "ma", row: "ma" },
      { character: "み", romaji: "mi", row: "ma" },
      { character: "む", romaji: "mu", row: "ma" },
      { character: "め", romaji: "me", row: "ma" },
      { character: "も", romaji: "mo", row: "ma" },
      // ya-row
      { character: "や", romaji: "ya", row: "ya" },
      { character: "ゆ", romaji: "yu", row: "ya" },
      { character: "よ", romaji: "yo", row: "ya" },
      // ra-row
      { character: "ら", romaji: "ra", row: "ra" },
      { character: "り", romaji: "ri", row: "ra" },
      { character: "る", romaji: "ru", row: "ra" },
      { character: "れ", romaji: "re", row: "ra" },
      { character: "ろ", romaji: "ro", row: "ra" },
      // wa-row + n
      { character: "わ", romaji: "wa", row: "wa" },
      { character: "を", romaji: "wo", row: "wa" },
      { character: "ん", romaji: "n", row: "wa" },
    ],

    katakana: [
      // a-row
      { character: "ア", romaji: "a", row: "a" },
      { character: "イ", romaji: "i", row: "a" },
      { character: "ウ", romaji: "u", row: "a" },
      { character: "エ", romaji: "e", row: "a" },
      { character: "オ", romaji: "o", row: "a" },
      // ka-row
      { character: "カ", romaji: "ka", row: "ka" },
      { character: "キ", romaji: "ki", row: "ka" },
      { character: "ク", romaji: "ku", row: "ka" },
      { character: "ケ", romaji: "ke", row: "ka" },
      { character: "コ", romaji: "ko", row: "ka" },
      // sa-row
      { character: "サ", romaji: "sa", row: "sa" },
      { character: "シ", romaji: "shi", row: "sa" },
      { character: "ス", romaji: "su", row: "sa" },
      { character: "セ", romaji: "se", row: "sa" },
      { character: "ソ", romaji: "so", row: "sa" },
      // ta-row
      { character: "タ", romaji: "ta", row: "ta" },
      { character: "チ", romaji: "chi", row: "ta" },
      { character: "ツ", romaji: "tsu", row: "ta" },
      { character: "テ", romaji: "te", row: "ta" },
      { character: "ト", romaji: "to", row: "ta" },
      // na-row
      { character: "ナ", romaji: "na", row: "na" },
      { character: "ニ", romaji: "ni", row: "na" },
      { character: "ヌ", romaji: "nu", row: "na" },
      { character: "ネ", romaji: "ne", row: "na" },
      { character: "ノ", romaji: "no", row: "na" },
      // ha-row
      { character: "ハ", romaji: "ha", row: "ha" },
      { character: "ヒ", romaji: "hi", row: "ha" },
      { character: "フ", romaji: "fu", row: "ha" },
      { character: "ヘ", romaji: "he", row: "ha" },
      { character: "ホ", romaji: "ho", row: "ha" },
      // ma-row
      { character: "マ", romaji: "ma", row: "ma" },
      { character: "ミ", romaji: "mi", row: "ma" },
      { character: "ム", romaji: "mu", row: "ma" },
      { character: "メ", romaji: "me", row: "ma" },
      { character: "モ", romaji: "mo", row: "ma" },
      // ya-row
      { character: "ヤ", romaji: "ya", row: "ya" },
      { character: "ユ", romaji: "yu", row: "ya" },
      { character: "ヨ", romaji: "yo", row: "ya" },
      // ra-row
      { character: "ラ", romaji: "ra", row: "ra" },
      { character: "リ", romaji: "ri", row: "ra" },
      { character: "ル", romaji: "ru", row: "ra" },
      { character: "レ", romaji: "re", row: "ra" },
      { character: "ロ", romaji: "ro", row: "ra" },
      // wa-row + n
      { character: "ワ", romaji: "wa", row: "wa" },
      { character: "ヲ", romaji: "wo", row: "wa" },
      { character: "ン", romaji: "n", row: "wa" },
    ],
  },

  // ===========================================================================
  // LESSONS — Genki I curriculum, organized by lesson
  // ===========================================================================
  lessons: [
    // ─────────────────────────────────────────────────────────────────────────
    // GREETINGS (Phase 1)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "greetings",
      phase: 1,
      title: "Greetings",
      genki_ref: "Greetings",

      vocabulary: [
        { kana: "おはようございます", romaji: "ohayou gozaimasu", english: "good morning (polite)", category: "greetings" },
        { kana: "こんにちは", romaji: "konnichiwa", english: "hello / good afternoon", category: "greetings" },
        { kana: "こんばんは", romaji: "konbanwa", english: "good evening", category: "greetings" },
        { kana: "いただきます", romaji: "itadakimasu", english: "before eating (lit. I humbly receive)", category: "greetings" },
        { kana: "ごちそうさま", romaji: "gochisousama", english: "after eating (lit. it was a feast)", category: "greetings" },
        { kana: "いってきます", romaji: "ittekimasu", english: "I'm leaving (said when leaving home)", category: "greetings" },
        { kana: "いってらっしゃい", romaji: "itterasshai", english: "have a good day (response to ittekimasu)", category: "greetings" },
        { kana: "ただいま", romaji: "tadaima", english: "I'm home", category: "greetings" },
        { kana: "おかえり", romaji: "okaeri", english: "welcome home (response to tadaima)", category: "greetings" },
        { kana: "おやすみなさい", romaji: "oyasuminasai", english: "good night", category: "greetings" },
        { kana: "さようなら", romaji: "sayounara", english: "goodbye", category: "greetings" },
        { kana: "すみません", romaji: "sumimasen", english: "excuse me / I'm sorry", category: "greetings" },
        { kana: "ありがとうございます", romaji: "arigatou gozaimasu", english: "thank you (polite)", category: "greetings" },
        { kana: "おはよう", romaji: "ohayou", english: "good morning (casual)", category: "greetings" },
        { kana: "ありがとう", romaji: "arigatou", english: "thank you (casual)", category: "greetings" },
        { kana: "ごめんなさい", romaji: "gomen nasai", english: "I'm sorry", category: "greetings" },
        { kana: "はじめまして", romaji: "hajimemashite", english: "nice to meet you (first time)", category: "greetings" },
        { kana: "よろしくおねがいします", romaji: "yoroshiku onegai shimasu", english: "pleased to meet you / please treat me well", category: "greetings" },
        { kana: "どうぞ", romaji: "douzo", english: "please (go ahead); here you are", category: "greetings" },
        { kana: "どうも", romaji: "doumo", english: "thanks (casual); hey", category: "greetings" },
        { kana: "おげんきですか", romaji: "ogenki desu ka", english: "how are you?", category: "greetings" },
        { kana: "げんきです", romaji: "genki desu", english: "I'm fine", category: "greetings" },
        { kana: "おねがいします", romaji: "onegai shimasu", english: "please (requesting something)", category: "greetings" },
        { kana: "しつれいします", romaji: "shitsurei shimasu", english: "excuse me (entering/leaving)", category: "greetings" },
        { kana: "ちょっとまってください", romaji: "chotto matte kudasai", english: "please wait a moment", category: "greetings" },
      ],

      grammar: [],

      sentences: [
        { japanese: "おはようございます", romaji: "ohayou gozaimasu", english: "Good morning.", difficulty: 1 },
        { japanese: "こんにちは", romaji: "konnichiwa", english: "Hello.", difficulty: 1 },
        { japanese: "こんばんは", romaji: "konbanwa", english: "Good evening.", difficulty: 1 },
        { japanese: "ありがとうございます", romaji: "arigatou gozaimasu", english: "Thank you.", difficulty: 1 },
        { japanese: "すみません", romaji: "sumimasen", english: "Excuse me.", difficulty: 1 },
        { japanese: "おやすみなさい", romaji: "oyasuminasai", english: "Good night.", difficulty: 1 },
        { japanese: "さようなら", romaji: "sayounara", english: "Goodbye.", difficulty: 1 },
        { japanese: "はじめまして", romaji: "hajimemashite", english: "Nice to meet you.", difficulty: 1 },
        { japanese: "よろしくおねがいします", romaji: "yoroshiku onegai shimasu", english: "Pleased to meet you.", difficulty: 1 },
        { japanese: "おげんきですか", romaji: "ogenki desu ka", english: "How are you?", difficulty: 1 },
      ],

      grammarFills: [],

      sentenceBuilds: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 1: Numbers, Time & Self-Introduction (Phase 1)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L1",
      phase: 1,
      title: "Numbers, Time & Self-Introduction",
      genki_ref: "Lesson 1",

      vocabulary: [
        // Numbers 1-10
        { kana: "いち", romaji: "ichi", english: "one", category: "numbers" },
        { kana: "に", romaji: "ni", english: "two", category: "numbers" },
        { kana: "さん", romaji: "san", english: "three", category: "numbers" },
        { kana: "よん", romaji: "yon", english: "four", category: "numbers" },
        { kana: "ご", romaji: "go", english: "five", category: "numbers" },
        { kana: "ろく", romaji: "roku", english: "six", category: "numbers" },
        { kana: "なな", romaji: "nana", english: "seven", category: "numbers" },
        { kana: "はち", romaji: "hachi", english: "eight", category: "numbers" },
        { kana: "きゅう", romaji: "kyuu", english: "nine", category: "numbers" },
        { kana: "じゅう", romaji: "juu", english: "ten", category: "numbers" },
        // Bigger numbers
        { kana: "ひゃく", romaji: "hyaku", english: "hundred", category: "numbers" },
        { kana: "せん", romaji: "sen", english: "thousand", category: "numbers" },
        { kana: "まん", romaji: "man", english: "ten thousand", category: "numbers" },
        { kana: "ゼロ", romaji: "zero", english: "zero", category: "numbers" },
        // Time words
        { kana: "いま", romaji: "ima", english: "now", category: "time" },
        { kana: "じ", romaji: "ji", english: "o'clock", category: "time" },
        { kana: "はん", romaji: "han", english: "half (past)", category: "time" },
        { kana: "なんじ", romaji: "nanji", english: "what time", category: "time" },
        { kana: "ごぜん", romaji: "gozen", english: "AM; morning", category: "time" },
        { kana: "ごご", romaji: "gogo", english: "PM; afternoon", category: "time" },
        // Self-intro words
        { kana: "がくせい", romaji: "gakusei", english: "student", category: "people" },
        { kana: "せんせい", romaji: "sensei", english: "teacher; professor", category: "people" },
        { kana: "だいがく", romaji: "daigaku", english: "university", category: "places" },
        { kana: "せんこう", romaji: "senkou", english: "major (field of study)", category: "school" },
        { kana: "なまえ", romaji: "namae", english: "name", category: "people" },
        { kana: "でんわばんごう", romaji: "denwa bangou", english: "telephone number", category: "daily" },
        { kana: "わたし", romaji: "watashi", english: "I; me", category: "people" },
        { kana: "ともだち", romaji: "tomodachi", english: "friend", category: "people" },
        { kana: "にほんじん", romaji: "nihonjin", english: "Japanese person", category: "people" },
        { kana: "アメリカじん", romaji: "amerikajin", english: "American person", category: "people" },
        { kana: "にほんご", romaji: "nihongo", english: "Japanese language", category: "school" },
        { kana: "えいご", romaji: "eigo", english: "English language", category: "school" },
        // Additional L1 vocab
        { kana: "だいがくせい", romaji: "daigakusei", english: "college student", category: "people" },
        { kana: "こうこうせい", romaji: "koukousei", english: "high school student", category: "people" },
        { kana: "りゅうがくせい", romaji: "ryuugakusei", english: "international student", category: "people" },
        { kana: "かいしゃいん", romaji: "kaishain", english: "office worker; company employee", category: "people" },
        { kana: "しごと", romaji: "shigoto", english: "work; job", category: "daily" },
        { kana: "いしゃ", romaji: "isha", english: "doctor", category: "people" },
        { kana: "べんごし", romaji: "bengoshi", english: "lawyer", category: "people" },
        { kana: "さい", romaji: "sai", english: "...years old", category: "counters" },
        { kana: "なんさい", romaji: "nansai", english: "how old", category: "question_words" },
        { kana: "ねんせい", romaji: "nensei", english: "...year student", category: "school" },
      ],

      grammar: [
        {
          pattern: "X は Y です",
          meaning: "X is Y",
          explanation: "Basic copula sentence. は (wa) marks the topic, です (desu) is the polite copula.",
          examples: [
            { japanese: "わたしはがくせいです。", romaji: "Watashi wa gakusei desu.", english: "I am a student." },
            { japanese: "やまださんはにほんじんです。", romaji: "Yamada-san wa nihonjin desu.", english: "Mr./Ms. Yamada is Japanese." },
          ]
        },
        {
          pattern: "X は Y ですか",
          meaning: "Is X Y?",
          explanation: "Add か (ka) to the end of a statement to make it a question.",
          examples: [
            { japanese: "がくせいですか。", romaji: "Gakusei desu ka.", english: "Are you a student?" },
            { japanese: "せんこうはなんですか。", romaji: "Senkou wa nan desu ka.", english: "What is your major?" },
          ]
        },
        {
          pattern: "X の Y",
          meaning: "Y of X / X's Y",
          explanation: "の (no) connects two nouns, showing possession or association.",
          examples: [
            { japanese: "わたしのでんわばんごう", romaji: "Watashi no denwa bangou.", english: "My telephone number." },
            { japanese: "にほんごのせんせい", romaji: "Nihongo no sensei.", english: "A Japanese language teacher." },
          ]
        },
      ],

      sentences: [
        { japanese: "わたしはがくせいです", romaji: "watashi wa gakusei desu", english: "I am a student.", difficulty: 1 },
        { japanese: "せんこうはにほんごです", romaji: "senkou wa nihongo desu", english: "My major is Japanese.", difficulty: 1 },
        { japanese: "いまさんじです", romaji: "ima sanji desu", english: "It is 3 o'clock now.", difficulty: 1 },
        { japanese: "やまださんはせんせいです", romaji: "yamada-san wa sensei desu", english: "Mr./Ms. Yamada is a teacher.", difficulty: 1 },
        { japanese: "がくせいですか", romaji: "gakusei desu ka", english: "Are you a student?", difficulty: 1 },
        { japanese: "いまなんじですか", romaji: "ima nanji desu ka", english: "What time is it now?", difficulty: 1 },
        { japanese: "にほんじんです", romaji: "nihonjin desu", english: "I am Japanese.", difficulty: 1 },
        { japanese: "わたしはだいがくせいです", romaji: "watashi wa daigakusei desu", english: "I am a college student.", difficulty: 1 },
        { japanese: "いまごぜんくじです", romaji: "ima gozen kuji desu", english: "It is 9 AM now.", difficulty: 1 },
        { japanese: "なんさいですか", romaji: "nansai desu ka", english: "How old are you?", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "わたし____がくせいです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic of the sentence." },
        { sentence: "せんこう____なんですか。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks the topic when asking a question." },
        { sentence: "やまださん____せんせいです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic: 'As for Yamada, (they are) a teacher.'" },
        { sentence: "いま____さんじです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks 'now' as the topic." },
        { sentence: "わたし____でんわばんごう", correct_answer: "の", options: ["の", "は", "が", "を"], explanation: "の (no) shows possession: 'my telephone number.'" },
      ],

      sentenceBuilds: [
        { english: "I am a student.", words: ["わたしは", "がくせい", "です"], correct_answer: "わたしはがくせいです", explanation: "わたしは (watashi wa — 'I' + topic marker) → がくせい (gakusei — 'student') → です (desu — 'am'). Japanese puts 'am' at the end." },
        { english: "My major is Japanese.", words: ["にほんご", "せんこうは", "です"], correct_answer: "せんこうはにほんごです", explanation: "せんこうは (senkou wa — 'major' + topic marker) → にほんご (nihongo — 'Japanese') → です (desu — 'is'). The topic marker は goes after what you're talking about." },
        { english: "It is 3 o'clock now.", words: ["さんじ", "いま", "です"], correct_answer: "いまさんじです", explanation: "いま (ima — 'now') → さんじ (sanji — '3 o'clock') → です (desu — 'is'). Time words go at the beginning." },
        { english: "Are you a student?", words: ["がくせい", "ですか"], correct_answer: "がくせいですか", explanation: "がくせい (gakusei — 'student') → ですか (desu ka — 'are you?'). Adding か to the end turns any sentence into a question." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 2: Shopping & Demonstratives (Phase 1)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L2",
      phase: 1,
      title: "Shopping & Demonstratives",
      genki_ref: "Lesson 2",

      vocabulary: [
        // Demonstratives
        { kana: "これ", romaji: "kore", english: "this (thing near me)", category: "demonstratives" },
        { kana: "それ", romaji: "sore", english: "that (thing near you)", category: "demonstratives" },
        { kana: "あれ", romaji: "are", english: "that (thing over there)", category: "demonstratives" },
        { kana: "この", romaji: "kono", english: "this (+ noun)", category: "demonstratives" },
        { kana: "その", romaji: "sono", english: "that (+ noun, near you)", category: "demonstratives" },
        { kana: "あの", romaji: "ano", english: "that (+ noun, over there)", category: "demonstratives" },
        { kana: "どの", romaji: "dono", english: "which (+ noun)", category: "demonstratives" },
        { kana: "ここ", romaji: "koko", english: "here", category: "demonstratives" },
        { kana: "そこ", romaji: "soko", english: "there", category: "demonstratives" },
        { kana: "あそこ", romaji: "asoko", english: "over there", category: "demonstratives" },
        { kana: "どこ", romaji: "doko", english: "where", category: "question_words" },
        // Shopping
        { kana: "いくら", romaji: "ikura", english: "how much (price)", category: "shopping" },
        { kana: "えん", romaji: "en", english: "yen (Japanese currency)", category: "shopping" },
        // Things
        { kana: "ほん", romaji: "hon", english: "book", category: "things" },
        { kana: "かばん", romaji: "kaban", english: "bag", category: "things" },
        { kana: "とけい", romaji: "tokei", english: "watch; clock", category: "things" },
        { kana: "かさ", romaji: "kasa", english: "umbrella", category: "things" },
        { kana: "ペン", romaji: "pen", english: "pen", category: "things" },
        { kana: "ノート", romaji: "nooto", english: "notebook", category: "things" },
        { kana: "じしょ", romaji: "jisho", english: "dictionary", category: "things" },
        { kana: "えんぴつ", romaji: "enpitsu", english: "pencil", category: "things" },
        { kana: "けしゴム", romaji: "keshigomu", english: "eraser", category: "things" },
        { kana: "きょうかしょ", romaji: "kyoukasho", english: "textbook", category: "things" },
        { kana: "しんぶん", romaji: "shinbun", english: "newspaper", category: "things" },
        { kana: "ざっし", romaji: "zasshi", english: "magazine", category: "things" },
        { kana: "さいふ", romaji: "saifu", english: "wallet", category: "things" },
        { kana: "かぎ", romaji: "kagi", english: "key", category: "things" },
        // Question words
        { kana: "だれ", romaji: "dare", english: "who", category: "question_words" },
        { kana: "なに", romaji: "nani", english: "what", category: "question_words" },
        { kana: "どれ", romaji: "dore", english: "which one", category: "question_words" },
      ],

      grammar: [
        {
          pattern: "これ / それ / あれ",
          meaning: "this / that / that over there",
          explanation: "Standalone demonstrative pronouns based on distance from the speaker.",
          examples: [
            { japanese: "これはほんです。", romaji: "Kore wa hon desu.", english: "This is a book." },
            { japanese: "それはなんですか。", romaji: "Sore wa nan desu ka.", english: "What is that?" },
          ]
        },
        {
          pattern: "この / その / あの + Noun",
          meaning: "this / that / that (+ noun)",
          explanation: "Demonstrative adjectives that must precede a noun.",
          examples: [
            { japanese: "このかばんはいくらですか。", romaji: "Kono kaban wa ikura desu ka.", english: "How much is this bag?" },
            { japanese: "あのとけいはたかいです。", romaji: "Ano tokei wa takai desu.", english: "That watch over there is expensive." },
          ]
        },
        {
          pattern: "Noun じゃないです",
          meaning: "is not (Noun)",
          explanation: "Negative form of です. じゃないです is the casual-polite negative copula.",
          examples: [
            { japanese: "これはペンじゃないです。", romaji: "Kore wa pen ja nai desu.", english: "This is not a pen." },
            { japanese: "がくせいじゃないです。", romaji: "Gakusei ja nai desu.", english: "I am not a student." },
          ]
        },
        {
          pattern: "Noun も",
          meaning: "also; too",
          explanation: "も (mo) replaces は to mean 'also' or 'too.'",
          examples: [
            { japanese: "やまださんもがくせいです。", romaji: "Yamada-san mo gakusei desu.", english: "Mr./Ms. Yamada is also a student." },
          ]
        },
      ],

      sentences: [
        { japanese: "これはほんです", romaji: "kore wa hon desu", english: "This is a book.", difficulty: 1 },
        { japanese: "それはなんですか", romaji: "sore wa nan desu ka", english: "What is that?", difficulty: 1 },
        { japanese: "あれはとけいです", romaji: "are wa tokei desu", english: "That over there is a clock.", difficulty: 1 },
        { japanese: "このかばんはいくらですか", romaji: "kono kaban wa ikura desu ka", english: "How much is this bag?", difficulty: 1 },
        { japanese: "これはペンじゃないです", romaji: "kore wa pen ja nai desu", english: "This is not a pen.", difficulty: 1 },
        { japanese: "あのひとはだれですか", romaji: "ano hito wa dare desu ka", english: "Who is that person over there?", difficulty: 2 },
        { japanese: "ここはだいがくです", romaji: "koko wa daigaku desu", english: "This place is a university.", difficulty: 1 },
        { japanese: "このじしょはせんえんです", romaji: "kono jisho wa sen en desu", english: "This dictionary is 1000 yen.", difficulty: 1 },
        { japanese: "やまださんもがくせいです", romaji: "yamada-san mo gakusei desu", english: "Mr./Ms. Yamada is also a student.", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "これ____ほんです。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks the topic: 'As for this, it is a book.'" },
        { sentence: "____かばんはいくらですか。", correct_answer: "この", options: ["この", "これ", "ここ", "あの"], explanation: "この (kono) is the demonstrative adjective 'this' used before a noun." },
        { sentence: "これはペン____ないです。", correct_answer: "じゃ", options: ["じゃ", "は", "が", "で"], explanation: "じゃないです is the negative copula: 'is not.'" },
        { sentence: "それ____なんですか。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks 'that' as the topic of the question." },
        { sentence: "やまださん____がくせいです。", correct_answer: "も", options: ["も", "は", "が", "を"], explanation: "も (mo) means 'also': Yamada is also a student." },
      ],

      sentenceBuilds: [
        { english: "This is a book.", words: ["ほん", "これは", "です"], correct_answer: "これはほんです", explanation: "これは (kore wa — 'this' + topic marker) → ほん (hon — 'book') → です (desu — 'is'). Pattern: [thing]は [what it is] です." },
        { english: "What is that?", words: ["なん", "それは", "ですか"], correct_answer: "それはなんですか", explanation: "それは (sore wa — 'that' + topic marker) → なん (nan — 'what') → ですか (desu ka — 'is?'). The question word goes where the answer would go." },
        { english: "How much is this bag?", words: ["いくら", "このかばんは", "ですか"], correct_answer: "このかばんはいくらですか", explanation: "このかばんは (kono kaban wa — 'this bag' + topic marker) → いくら (ikura — 'how much') → ですか (desu ka — 'is?'). この means 'this' and must go before a noun." },
        { english: "This is not a pen.", words: ["ペン", "これは", "じゃないです"], correct_answer: "これはペンじゃないです", explanation: "これは (kore wa — 'this' + topic marker) → ペン (pen — 'pen') → じゃないです (ja nai desu — 'is not'). じゃないです is the negative of です." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 3: Daily Actions & Verbs (Phase 1)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L3",
      phase: 1,
      title: "Daily Actions & Verbs",
      genki_ref: "Lesson 3",

      vocabulary: [
        // Verbs (ます form)
        { kana: "たべます", romaji: "tabemasu", english: "to eat", category: "verbs" },
        { kana: "のみます", romaji: "nomimasu", english: "to drink", category: "verbs" },
        { kana: "いきます", romaji: "ikimasu", english: "to go", category: "verbs" },
        { kana: "きます", romaji: "kimasu", english: "to come", category: "verbs" },
        { kana: "かえります", romaji: "kaerimasu", english: "to return; to go home", category: "verbs" },
        { kana: "みます", romaji: "mimasu", english: "to see; to watch", category: "verbs" },
        { kana: "よみます", romaji: "yomimasu", english: "to read", category: "verbs" },
        { kana: "ききます", romaji: "kikimasu", english: "to listen; to hear", category: "verbs" },
        { kana: "かきます", romaji: "kakimasu", english: "to write", category: "verbs" },
        { kana: "はなします", romaji: "hanashimasu", english: "to speak; to talk", category: "verbs" },
        { kana: "べんきょうします", romaji: "benkyou shimasu", english: "to study", category: "verbs" },
        { kana: "ねます", romaji: "nemasu", english: "to sleep; to go to bed", category: "verbs" },
        { kana: "おきます", romaji: "okimasu", english: "to get up; to wake up", category: "verbs" },
        { kana: "します", romaji: "shimasu", english: "to do", category: "verbs" },
        { kana: "あそびます", romaji: "asobimasu", english: "to play; to hang out", category: "verbs" },
        // Places
        { kana: "がっこう", romaji: "gakkou", english: "school", category: "places" },
        { kana: "うち", romaji: "uchi", english: "home; house", category: "places" },
        { kana: "としょかん", romaji: "toshokan", english: "library", category: "places" },
        { kana: "びょういん", romaji: "byouin", english: "hospital", category: "places" },
        { kana: "ぎんこう", romaji: "ginkou", english: "bank", category: "places" },
        { kana: "ゆうびんきょく", romaji: "yuubinkyoku", english: "post office", category: "places" },
        { kana: "スーパー", romaji: "suupaa", english: "supermarket", category: "places" },
        { kana: "きっさてん", romaji: "kissaten", english: "coffee shop", category: "places" },
        // Time references
        { kana: "まいにち", romaji: "mainichi", english: "every day", category: "time" },
        { kana: "あした", romaji: "ashita", english: "tomorrow", category: "time" },
        { kana: "きょう", romaji: "kyou", english: "today", category: "time" },
        { kana: "あさ", romaji: "asa", english: "morning", category: "time" },
        { kana: "よる", romaji: "yoru", english: "night; evening", category: "time" },
        { kana: "ひる", romaji: "hiru", english: "noon; daytime", category: "time" },
        { kana: "まいあさ", romaji: "maiasa", english: "every morning", category: "time" },
        { kana: "まいばん", romaji: "maiban", english: "every evening", category: "time" },
        // Food & Drink
        { kana: "ごはん", romaji: "gohan", english: "rice; meal", category: "food" },
        { kana: "あさごはん", romaji: "asagohan", english: "breakfast", category: "food" },
        { kana: "ひるごはん", romaji: "hirugohan", english: "lunch", category: "food" },
        { kana: "ばんごはん", romaji: "bangohan", english: "dinner", category: "food" },
        { kana: "みず", romaji: "mizu", english: "water", category: "food" },
        { kana: "コーヒー", romaji: "koohii", english: "coffee", category: "food" },
        { kana: "おちゃ", romaji: "ocha", english: "tea (green tea)", category: "food" },
        { kana: "パン", romaji: "pan", english: "bread", category: "food" },
        { kana: "たまご", romaji: "tamago", english: "egg", category: "food" },
        // Media
        { kana: "テレビ", romaji: "terebi", english: "television", category: "things" },
        { kana: "しゅくだい", romaji: "shukudai", english: "homework", category: "school" },
      ],

      grammar: [
        {
          pattern: "Noun を Verb ます",
          meaning: "do (verb) to (noun)",
          explanation: "を (wo) marks the direct object of a verb.",
          examples: [
            { japanese: "ごはんをたべます。", romaji: "Gohan wo tabemasu.", english: "I eat rice." },
            { japanese: "みずをのみます。", romaji: "Mizu wo nomimasu.", english: "I drink water." },
          ]
        },
        {
          pattern: "Place に/へ いきます",
          meaning: "go to (place)",
          explanation: "に (ni) or へ (e) marks the destination with movement verbs.",
          examples: [
            { japanese: "がっこうにいきます。", romaji: "Gakkou ni ikimasu.", english: "I go to school." },
            { japanese: "としょかんにいきます。", romaji: "Toshokan ni ikimasu.", english: "I go to the library." },
          ]
        },
        {
          pattern: "～ませんか",
          meaning: "Won't you...? / Shall we...?",
          explanation: "The negative question form used as a polite suggestion or invitation.",
          examples: [
            { japanese: "コーヒーをのみませんか。", romaji: "Koohii wo nomimasen ka.", english: "Won't you have some coffee?" },
            { japanese: "いっしょにいきませんか。", romaji: "Issho ni ikimasen ka.", english: "Shall we go together?" },
          ]
        },
        {
          pattern: "Time に Verb",
          meaning: "do (verb) at (time)",
          explanation: "に (ni) marks specific times (but not relative times like today/tomorrow).",
          examples: [
            { japanese: "しちじにおきます。", romaji: "Shichiji ni okimasu.", english: "I wake up at 7 o'clock." },
            { japanese: "じゅうにじにひるごはんをたべます。", romaji: "Juuniji ni hirugohan wo tabemasu.", english: "I eat lunch at 12 o'clock." },
          ]
        },
      ],

      sentences: [
        { japanese: "ごはんをたべます", romaji: "gohan wo tabemasu", english: "I eat rice.", difficulty: 1 },
        { japanese: "みずをのみます", romaji: "mizu wo nomimasu", english: "I drink water.", difficulty: 1 },
        { japanese: "がっこうにいきます", romaji: "gakkou ni ikimasu", english: "I go to school.", difficulty: 1 },
        { japanese: "まいにちにほんごをべんきょうします", romaji: "mainichi nihongo wo benkyou shimasu", english: "I study Japanese every day.", difficulty: 2 },
        { japanese: "あさコーヒーをのみます", romaji: "asa koohii wo nomimasu", english: "I drink coffee in the morning.", difficulty: 1 },
        { japanese: "テレビをみます", romaji: "terebi wo mimasu", english: "I watch TV.", difficulty: 1 },
        { japanese: "コーヒーをのみませんか", romaji: "koohii wo nomimasen ka", english: "Won't you have some coffee?", difficulty: 2 },
        { japanese: "しちじにおきます", romaji: "shichiji ni okimasu", english: "I wake up at 7 o'clock.", difficulty: 1 },
        { japanese: "まいあさパンをたべます", romaji: "maiasa pan wo tabemasu", english: "I eat bread every morning.", difficulty: 1 },
        { japanese: "としょかんでべんきょうします", romaji: "toshokan de benkyou shimasu", english: "I study at the library.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "みず____のみます。", correct_answer: "を", options: ["を", "は", "が", "で"], explanation: "を (wo) marks the direct object of the verb." },
        { sentence: "がっこう____いきます。", correct_answer: "に", options: ["に", "を", "は", "で"], explanation: "に (ni) marks the destination with movement verbs." },
        { sentence: "にほんご____べんきょうします。", correct_answer: "を", options: ["を", "が", "は", "に"], explanation: "を (wo) marks what you are studying (direct object)." },
        { sentence: "コーヒー____のみませんか。", correct_answer: "を", options: ["を", "は", "が", "に"], explanation: "を (wo) marks the object even in negative/invitation sentences." },
        { sentence: "テレビ____みます。", correct_answer: "を", options: ["を", "が", "は", "で"], explanation: "を (wo) marks what you watch (direct object)." },
        { sentence: "しちじ____おきます。", correct_answer: "に", options: ["に", "で", "を", "は"], explanation: "に (ni) marks the specific time when you do something." },
      ],

      sentenceBuilds: [
        { english: "I eat rice.", words: ["ごはんを", "たべます"], correct_answer: "ごはんをたべます", explanation: "ごはんを (gohan wo — 'rice' + object marker) → たべます (tabemasu — 'eat'). を marks what you eat. The verb always goes last." },
        { english: "I go to school.", words: ["がっこうに", "いきます"], correct_answer: "がっこうにいきます", explanation: "がっこうに (gakkou ni — 'school' + direction marker) → いきます (ikimasu — 'go'). に marks where you're going." },
        { english: "I drink water.", words: ["みずを", "のみます"], correct_answer: "みずをのみます", explanation: "みずを (mizu wo — 'water' + object marker) → のみます (nomimasu — 'drink'). Same pattern: [thing]を [verb]." },
        { english: "I study Japanese every day.", words: ["にほんごを", "まいにち", "べんきょうします"], correct_answer: "まいにちにほんごをべんきょうします", explanation: "まいにち (mainichi — 'every day') → にほんごを (nihongo wo — 'Japanese' + object marker) → べんきょうします (benkyou shimasu — 'study'). Time goes first, then what you do." },
        { english: "Won't you have some coffee?", words: ["コーヒーを", "のみませんか"], correct_answer: "コーヒーをのみませんか", explanation: "コーヒーを (koohii wo — 'coffee' + object marker) → のみませんか (nomimasen ka — 'won't you drink?'). ませんか is a polite way to invite someone." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 4: Existence & Location (Phase 2)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L4",
      phase: 2,
      title: "Existence & Location",
      genki_ref: "Lesson 4",

      vocabulary: [
        // Existence verbs
        { kana: "あります", romaji: "arimasu", english: "there is (inanimate)", category: "verbs" },
        { kana: "います", romaji: "imasu", english: "there is (animate)", category: "verbs" },
        // Location words
        { kana: "うえ", romaji: "ue", english: "on; above", category: "location" },
        { kana: "した", romaji: "shita", english: "under; below", category: "location" },
        { kana: "まえ", romaji: "mae", english: "in front of", category: "location" },
        { kana: "うしろ", romaji: "ushiro", english: "behind", category: "location" },
        { kana: "なか", romaji: "naka", english: "inside", category: "location" },
        { kana: "そと", romaji: "soto", english: "outside", category: "location" },
        { kana: "みぎ", romaji: "migi", english: "right", category: "location" },
        { kana: "ひだり", romaji: "hidari", english: "left", category: "location" },
        { kana: "となり", romaji: "tonari", english: "next to", category: "location" },
        { kana: "ちかく", romaji: "chikaku", english: "nearby", category: "location" },
        { kana: "あいだ", romaji: "aida", english: "between", category: "location" },
        // Things & places
        { kana: "つくえ", romaji: "tsukue", english: "desk", category: "things" },
        { kana: "いす", romaji: "isu", english: "chair", category: "things" },
        { kana: "ねこ", romaji: "neko", english: "cat", category: "animals" },
        { kana: "いぬ", romaji: "inu", english: "dog", category: "animals" },
        { kana: "テレビ", romaji: "terebi", english: "television", category: "things" },
        { kana: "でんわ", romaji: "denwa", english: "telephone", category: "things" },
        { kana: "こうえん", romaji: "kouen", english: "park", category: "places" },
        { kana: "にわ", romaji: "niwa", english: "garden; yard", category: "places" },
        { kana: "へや", romaji: "heya", english: "room", category: "places" },
        { kana: "おてあらい", romaji: "otearai", english: "restroom", category: "places" },
        { kana: "たてもの", romaji: "tatemono", english: "building", category: "places" },
        // Days of the week
        { kana: "にちようび", romaji: "nichiyoubi", english: "Sunday", category: "days" },
        { kana: "げつようび", romaji: "getsuyoubi", english: "Monday", category: "days" },
        { kana: "かようび", romaji: "kayoubi", english: "Tuesday", category: "days" },
        { kana: "すいようび", romaji: "suiyoubi", english: "Wednesday", category: "days" },
        { kana: "もくようび", romaji: "mokuyoubi", english: "Thursday", category: "days" },
        { kana: "きんようび", romaji: "kinyoubi", english: "Friday", category: "days" },
        { kana: "どようび", romaji: "doyoubi", english: "Saturday", category: "days" },
        { kana: "なんようび", romaji: "nanyoubi", english: "what day of the week", category: "question_words" },
        // Past tense markers
        { kana: "きのう", romaji: "kinou", english: "yesterday", category: "time" },
        { kana: "せんしゅう", romaji: "senshuu", english: "last week", category: "time" },
        { kana: "こんしゅう", romaji: "konshuu", english: "this week", category: "time" },
        { kana: "らいしゅう", romaji: "raishuu", english: "next week", category: "time" },
      ],

      grammar: [
        {
          pattern: "Place に X があります / います",
          meaning: "There is X at (place)",
          explanation: "あります for inanimate things, います for living things. に marks the location.",
          examples: [
            { japanese: "つくえのうえにほんがあります。", romaji: "Tsukue no ue ni hon ga arimasu.", english: "There is a book on the desk." },
            { japanese: "にわにねこがいます。", romaji: "Niwa ni neko ga imasu.", english: "There is a cat in the garden." },
          ]
        },
        {
          pattern: "X は Y でした",
          meaning: "X was Y",
          explanation: "Past tense of the copula です. Used for nouns and な-adjectives.",
          examples: [
            { japanese: "きのうはにちようびでした。", romaji: "Kinou wa nichiyoubi deshita.", english: "Yesterday was Sunday." },
          ]
        },
        {
          pattern: "Verb ました / ませんでした",
          meaning: "did / did not (verb)",
          explanation: "Past tense of the ます form. ました is affirmative, ませんでした is negative.",
          examples: [
            { japanese: "ごはんをたべました。", romaji: "Gohan wo tabemashita.", english: "I ate rice." },
            { japanese: "テレビをみませんでした。", romaji: "Terebi wo mimasen deshita.", english: "I did not watch TV." },
          ]
        },
      ],

      sentences: [
        { japanese: "つくえのうえにほんがあります", romaji: "tsukue no ue ni hon ga arimasu", english: "There is a book on the desk.", difficulty: 2 },
        { japanese: "いすのしたにねこがいます", romaji: "isu no shita ni neko ga imasu", english: "There is a cat under the chair.", difficulty: 2 },
        { japanese: "ごはんをたべました", romaji: "gohan wo tabemashita", english: "I ate rice.", difficulty: 1 },
        { japanese: "テレビをみませんでした", romaji: "terebi wo mimasen deshita", english: "I did not watch TV.", difficulty: 2 },
        { japanese: "きのうはにちようびでした", romaji: "kinou wa nichiyoubi deshita", english: "Yesterday was Sunday.", difficulty: 1 },
        { japanese: "としょかんのとなりにこうえんがあります", romaji: "toshokan no tonari ni kouen ga arimasu", english: "There is a park next to the library.", difficulty: 2 },
        { japanese: "テレビのまえにねこがいます", romaji: "terebi no mae ni neko ga imasu", english: "There is a cat in front of the TV.", difficulty: 2 },
        { japanese: "おてあらいはどこですか", romaji: "otearai wa doko desu ka", english: "Where is the restroom?", difficulty: 1 },
        { japanese: "へやのなかにつくえがあります", romaji: "heya no naka ni tsukue ga arimasu", english: "There is a desk inside the room.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "つくえのうえにほん____あります。", correct_answer: "が", options: ["が", "は", "を", "に"], explanation: "が (ga) marks the subject in existence sentences with あります/います." },
        { sentence: "いすのした____ねこがいます。", correct_answer: "に", options: ["に", "で", "を", "が"], explanation: "に (ni) marks the location in existence sentences." },
        { sentence: "ごはんをたべ____。", correct_answer: "ました", options: ["ました", "ます", "ません", "ませんでした"], explanation: "ました is the past affirmative form of ます verbs." },
        { sentence: "きのう____にちようびでした。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic 'yesterday.'" },
        { sentence: "おてあらいは____ですか。", correct_answer: "どこ", options: ["どこ", "なに", "だれ", "いつ"], explanation: "どこ (doko) means 'where' and is used to ask about locations." },
      ],

      sentenceBuilds: [
        { english: "There is a book on the desk.", words: ["つくえのうえに", "ほんが", "あります"], correct_answer: "つくえのうえにほんがあります", explanation: "つくえのうえに (tsukue no ue ni — 'on the desk' + location marker) → ほんが (hon ga — 'book' + subject marker) → あります (arimasu — 'exists'). あります is for non-living things. が marks what exists." },
        { english: "I ate rice.", words: ["ごはんを", "たべました"], correct_answer: "ごはんをたべました", explanation: "ごはんを (gohan wo — 'rice' + object marker) → たべました (tabemashita — 'ate'). ました makes any verb past tense." },
        { english: "There is a cat under the chair.", words: ["いすのしたに", "ねこが", "います"], correct_answer: "いすのしたにねこがいます", explanation: "いすのしたに (isu no shita ni — 'under the chair' + location marker) → ねこが (neko ga — 'cat' + subject marker) → います (imasu — 'exists'). います is for living things (cats, people)." },
        { english: "I did not watch TV.", words: ["テレビを", "みませんでした"], correct_answer: "テレビをみませんでした", explanation: "テレビを (terebi wo — 'TV' + object marker) → みませんでした (mimasen deshita — 'did not watch'). ませんでした = past tense negative." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 5: Adjectives (Phase 2)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L5",
      phase: 2,
      title: "Adjectives",
      genki_ref: "Lesson 5",

      vocabulary: [
        // い-adjectives
        { kana: "おおきい", romaji: "ookii", english: "big; large", category: "i-adjectives" },
        { kana: "ちいさい", romaji: "chiisai", english: "small; little", category: "i-adjectives" },
        { kana: "たかい", romaji: "takai", english: "expensive; tall", category: "i-adjectives" },
        { kana: "やすい", romaji: "yasui", english: "cheap; inexpensive", category: "i-adjectives" },
        { kana: "あたらしい", romaji: "atarashii", english: "new", category: "i-adjectives" },
        { kana: "ふるい", romaji: "furui", english: "old (things)", category: "i-adjectives" },
        { kana: "いい", romaji: "ii", english: "good", category: "i-adjectives" },
        { kana: "おもしろい", romaji: "omoshiroi", english: "interesting; funny", category: "i-adjectives" },
        { kana: "むずかしい", romaji: "muzukashii", english: "difficult", category: "i-adjectives" },
        { kana: "やさしい", romaji: "yasashii", english: "easy; kind", category: "i-adjectives" },
        { kana: "ながい", romaji: "nagai", english: "long", category: "i-adjectives" },
        { kana: "みじかい", romaji: "mijikai", english: "short (length)", category: "i-adjectives" },
        { kana: "あつい", romaji: "atsui", english: "hot (weather/things)", category: "i-adjectives" },
        { kana: "さむい", romaji: "samui", english: "cold (weather)", category: "i-adjectives" },
        { kana: "つめたい", romaji: "tsumetai", english: "cold (things/drinks)", category: "i-adjectives" },
        { kana: "いそがしい", romaji: "isogashii", english: "busy", category: "i-adjectives" },
        { kana: "たのしい", romaji: "tanoshii", english: "fun; enjoyable", category: "i-adjectives" },
        { kana: "おいしい", romaji: "oishii", english: "delicious", category: "i-adjectives" },
        { kana: "まずい", romaji: "mazui", english: "bad tasting", category: "i-adjectives" },
        { kana: "いたい", romaji: "itai", english: "painful", category: "i-adjectives" },
        { kana: "とおい", romaji: "tooi", english: "far", category: "i-adjectives" },
        { kana: "ちかい", romaji: "chikai", english: "near; close", category: "i-adjectives" },
        { kana: "ひろい", romaji: "hiroi", english: "wide; spacious", category: "i-adjectives" },
        { kana: "せまい", romaji: "semai", english: "narrow; cramped", category: "i-adjectives" },
        { kana: "わるい", romaji: "warui", english: "bad", category: "i-adjectives" },
        { kana: "すくない", romaji: "sukunai", english: "few; little (quantity)", category: "i-adjectives" },
        { kana: "おおい", romaji: "ooi", english: "many; much", category: "i-adjectives" },
        { kana: "つよい", romaji: "tsuyoi", english: "strong", category: "i-adjectives" },
        { kana: "よわい", romaji: "yowai", english: "weak", category: "i-adjectives" },
        { kana: "はやい", romaji: "hayai", english: "fast; early", category: "i-adjectives" },
        { kana: "おそい", romaji: "osoi", english: "slow; late", category: "i-adjectives" },
        // な-adjectives
        { kana: "しずか", romaji: "shizuka", english: "quiet", category: "na-adjectives" },
        { kana: "にぎやか", romaji: "nigiyaka", english: "lively; bustling", category: "na-adjectives" },
        { kana: "きれい", romaji: "kirei", english: "beautiful; clean", category: "na-adjectives" },
        { kana: "げんき", romaji: "genki", english: "healthy; energetic", category: "na-adjectives" },
        { kana: "すき", romaji: "suki", english: "like; fond of", category: "na-adjectives" },
        { kana: "きらい", romaji: "kirai", english: "dislike; hate", category: "na-adjectives" },
        { kana: "ゆうめい", romaji: "yuumei", english: "famous", category: "na-adjectives" },
        { kana: "しんせつ", romaji: "shinsetsu", english: "kind; helpful", category: "na-adjectives" },
        { kana: "べんり", romaji: "benri", english: "convenient", category: "na-adjectives" },
        { kana: "ふべん", romaji: "fuben", english: "inconvenient", category: "na-adjectives" },
        { kana: "たいへん", romaji: "taihen", english: "tough; difficult (situation)", category: "na-adjectives" },
        { kana: "ひま", romaji: "hima", english: "free (time); not busy", category: "na-adjectives" },
        { kana: "じょうず", romaji: "jouzu", english: "skillful; good at", category: "na-adjectives" },
        { kana: "へた", romaji: "heta", english: "unskillful; bad at", category: "na-adjectives" },
        { kana: "だいすき", romaji: "daisuki", english: "love; like a lot", category: "na-adjectives" },
        { kana: "だいきらい", romaji: "daikirai", english: "hate; really dislike", category: "na-adjectives" },
        // Foods for like/dislike
        { kana: "おすし", romaji: "osushi", english: "sushi", category: "food" },
        { kana: "にく", romaji: "niku", english: "meat", category: "food" },
        { kana: "さかな", romaji: "sakana", english: "fish", category: "food" },
        { kana: "やさい", romaji: "yasai", english: "vegetable", category: "food" },
        { kana: "くだもの", romaji: "kudamono", english: "fruit", category: "food" },
        // Other
        { kana: "まち", romaji: "machi", english: "town; city", category: "places" },
        { kana: "ほしい", romaji: "hoshii", english: "want (a thing)", category: "i-adjectives" },
      ],

      grammar: [
        {
          pattern: "い-adj / な-adj + です",
          meaning: "is (adjective)",
          explanation: "い-adjectives attach directly to です. な-adjectives need な before a noun but just use です alone.",
          examples: [
            { japanese: "このほんはおもしろいです。", romaji: "Kono hon wa omoshiroi desu.", english: "This book is interesting." },
            { japanese: "このまちはしずかです。", romaji: "Kono machi wa shizuka desu.", english: "This town is quiet." },
          ]
        },
        {
          pattern: "すき / きらい + です",
          meaning: "like / dislike",
          explanation: "すき and きらい are な-adjectives. The object of liking uses が.",
          examples: [
            { japanese: "おすしがすきです。", romaji: "Osushi ga suki desu.", english: "I like sushi." },
            { japanese: "にくがきらいです。", romaji: "Niku ga kirai desu.", english: "I dislike meat." },
          ]
        },
        {
          pattern: "い-adj negative: ～くないです",
          meaning: "is not (i-adjective)",
          explanation: "Drop い and add くないです for negative. Exception: いい → よくないです.",
          examples: [
            { japanese: "このほんはおもしろくないです。", romaji: "Kono hon wa omoshiroku nai desu.", english: "This book is not interesting." },
            { japanese: "てんきはよくないです。", romaji: "Tenki wa yoku nai desu.", english: "The weather is not good." },
          ]
        },
      ],

      sentences: [
        { japanese: "このほんはおもしろいです", romaji: "kono hon wa omoshiroi desu", english: "This book is interesting.", difficulty: 1 },
        { japanese: "にほんごはむずかしいです", romaji: "nihongo wa muzukashii desu", english: "Japanese is difficult.", difficulty: 1 },
        { japanese: "おすしがすきです", romaji: "osushi ga suki desu", english: "I like sushi.", difficulty: 1 },
        { japanese: "このまちはしずかです", romaji: "kono machi wa shizuka desu", english: "This town is quiet.", difficulty: 1 },
        { japanese: "あたらしいかばんがほしいです", romaji: "atarashii kaban ga hoshii desu", english: "I want a new bag.", difficulty: 2 },
        { japanese: "てんきはいいです", romaji: "tenki wa ii desu", english: "The weather is good.", difficulty: 1 },
        { japanese: "このレストランはおいしいです", romaji: "kono resutoran wa oishii desu", english: "This restaurant is delicious.", difficulty: 1 },
        { japanese: "さかなはだいすきです", romaji: "sakana wa daisuki desu", english: "I love fish.", difficulty: 1 },
        { japanese: "きょうはあついです", romaji: "kyou wa atsui desu", english: "It is hot today.", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "おすし____すきです。", correct_answer: "が", options: ["が", "を", "は", "に"], explanation: "が (ga) marks the object of すき (like/love)." },
        { sentence: "このほんはおもしろ____です。", correct_answer: "い", options: ["い", "な", "く", "さ"], explanation: "い-adjectives keep their い before です." },
        { sentence: "このまちはしずか____です。", correct_answer: " ", options: [" ", "な", "い", "く"], explanation: "な-adjectives drop な before です (しずかです)." },
        { sentence: "にく____きらいです。", correct_answer: "が", options: ["が", "を", "は", "に"], explanation: "が (ga) marks the object of きらい (dislike)." },
        { sentence: "このほんはおもしろ____ないです。", correct_answer: "く", options: ["く", "い", "じゃ", "で"], explanation: "い → くない for negative い-adjectives." },
      ],

      sentenceBuilds: [
        { english: "I like sushi.", words: ["おすしが", "すきです"], correct_answer: "おすしがすきです", explanation: "おすしが (osushi ga — 'sushi' + subject marker) → すきです (suki desu — 'like'). With すき (like) and きらい (dislike), が marks the thing you like, not を." },
        { english: "This book is interesting.", words: ["おもしろいです", "このほんは"], correct_answer: "このほんはおもしろいです", explanation: "このほんは (kono hon wa — 'this book' + topic marker) → おもしろいです (omoshiroi desu — 'is interesting'). Adjectives ending in い go right before です." },
        { english: "The weather is good.", words: ["いいです", "てんきは"], correct_answer: "てんきはいいです", explanation: "てんきは (tenki wa — 'weather' + topic marker) → いいです (ii desu — 'is good'). Same pattern: [topic]は [adjective]です." },
        { english: "Japanese is difficult.", words: ["むずかしいです", "にほんごは"], correct_answer: "にほんごはむずかしいです", explanation: "にほんごは (nihongo wa — 'Japanese' + topic marker) → むずかしいです (muzukashii desu — 'is difficult'). The topic always comes first, the description always comes last." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 6: Te-form (Phase 2)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L6",
      phase: 2,
      title: "Te-form: Requests & Permissions",
      genki_ref: "Lesson 6",

      vocabulary: [
        // Te-form verbs
        { kana: "あけます", romaji: "akemasu", english: "to open", category: "verbs" },
        { kana: "しめます", romaji: "shimemasu", english: "to close", category: "verbs" },
        { kana: "つけます", romaji: "tsukemasu", english: "to turn on", category: "verbs" },
        { kana: "けします", romaji: "keshimasu", english: "to turn off; to erase", category: "verbs" },
        { kana: "まちます", romaji: "machimasu", english: "to wait", category: "verbs" },
        { kana: "とります", romaji: "torimasu", english: "to take (photos)", category: "verbs" },
        { kana: "すわります", romaji: "suwarimasu", english: "to sit down", category: "verbs" },
        { kana: "たちます", romaji: "tachimasu", english: "to stand up", category: "verbs" },
        { kana: "つかいます", romaji: "tsukaimasu", english: "to use", category: "verbs" },
        { kana: "おしえます", romaji: "oshiemasu", english: "to teach; to tell", category: "verbs" },
        { kana: "もっていきます", romaji: "motte ikimasu", english: "to take (something)", category: "verbs" },
        { kana: "もってきます", romaji: "motte kimasu", english: "to bring (something)", category: "verbs" },
        { kana: "あらいます", romaji: "araimasu", english: "to wash", category: "verbs" },
        { kana: "はいります", romaji: "hairimasu", english: "to enter", category: "verbs" },
        { kana: "でます", romaji: "demasu", english: "to exit; to leave", category: "verbs" },
        { kana: "のります", romaji: "norimasu", english: "to ride; to get on", category: "verbs" },
        { kana: "おります", romaji: "orimasu", english: "to get off", category: "verbs" },
        // Things used with te-form
        { kana: "まど", romaji: "mado", english: "window", category: "things" },
        { kana: "ドア", romaji: "doa", english: "door", category: "things" },
        { kana: "でんき", romaji: "denki", english: "electricity; light", category: "things" },
        { kana: "しゃしん", romaji: "shashin", english: "photo; photograph", category: "things" },
        { kana: "エアコン", romaji: "eakon", english: "air conditioner", category: "things" },
        { kana: "くるま", romaji: "kuruma", english: "car", category: "transportation" },
        { kana: "じてんしゃ", romaji: "jitensha", english: "bicycle", category: "transportation" },
        { kana: "バス", romaji: "basu", english: "bus", category: "transportation" },
        { kana: "でんしゃ", romaji: "densha", english: "train", category: "transportation" },
        { kana: "タクシー", romaji: "takushii", english: "taxi", category: "transportation" },
        { kana: "ちかてつ", romaji: "chikatetsu", english: "subway", category: "transportation" },
        { kana: "ひこうき", romaji: "hikouki", english: "airplane", category: "transportation" },
        { kana: "ふね", romaji: "fune", english: "ship; boat", category: "transportation" },
        { kana: "えき", romaji: "eki", english: "station", category: "places" },
      ],

      grammar: [
        {
          pattern: "～てください",
          meaning: "Please do...",
          explanation: "Te-form + ください makes a polite request.",
          examples: [
            { japanese: "まどをあけてください。", romaji: "Mado wo akete kudasai.", english: "Please open the window." },
            { japanese: "すわってください。", romaji: "Suwatte kudasai.", english: "Please sit down." },
          ]
        },
        {
          pattern: "～てもいいです",
          meaning: "May I...? / It's okay to...",
          explanation: "Te-form + もいいです asks for or grants permission.",
          examples: [
            { japanese: "しゃしんをとってもいいですか。", romaji: "Shashin wo totte mo ii desu ka.", english: "May I take a photo?" },
            { japanese: "ここにすわってもいいです。", romaji: "Koko ni suwatte mo ii desu.", english: "You may sit here." },
          ]
        },
        {
          pattern: "～てはいけません",
          meaning: "You must not...",
          explanation: "Te-form + はいけません expresses prohibition.",
          examples: [
            { japanese: "ここでたべてはいけません。", romaji: "Koko de tabete wa ikemasen.", english: "You must not eat here." },
            { japanese: "しゃしんをとってはいけません。", romaji: "Shashin wo totte wa ikemasen.", english: "You must not take photos." },
          ]
        },
        {
          pattern: "～から",
          meaning: "because...",
          explanation: "から (kara) connects a reason to a result.",
          examples: [
            { japanese: "あついですから、まどをあけてください。", romaji: "Atsui desu kara, mado wo akete kudasai.", english: "Because it's hot, please open the window." },
          ]
        },
      ],

      sentences: [
        { japanese: "まどをあけてください", romaji: "mado wo akete kudasai", english: "Please open the window.", difficulty: 1 },
        { japanese: "すわってください", romaji: "suwatte kudasai", english: "Please sit down.", difficulty: 1 },
        { japanese: "しゃしんをとってもいいですか", romaji: "shashin wo totte mo ii desu ka", english: "May I take a photo?", difficulty: 2 },
        { japanese: "ここでたべてはいけません", romaji: "koko de tabete wa ikemasen", english: "You must not eat here.", difficulty: 2 },
        { japanese: "でんきをけしてください", romaji: "denki wo keshite kudasai", english: "Please turn off the light.", difficulty: 1 },
        { japanese: "あついですからまどをあけてください", romaji: "atsui desu kara mado wo akete kudasai", english: "Because it's hot, please open the window.", difficulty: 2 },
        { japanese: "でんしゃにのってください", romaji: "densha ni notte kudasai", english: "Please get on the train.", difficulty: 1 },
        { japanese: "くるまをつかってもいいですか", romaji: "kuruma wo tsukatte mo ii desu ka", english: "May I use the car?", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "まどをあけて____。", correct_answer: "ください", options: ["ください", "います", "ません", "ました"], explanation: "てください is a polite request: 'please do.'" },
        { sentence: "しゃしんをとって____いいですか。", correct_answer: "も", options: ["も", "は", "が", "を"], explanation: "てもいいです asks permission: 'may I?'" },
        { sentence: "ここでたべて____いけません。", correct_answer: "は", options: ["は", "も", "が", "を"], explanation: "てはいけません expresses prohibition: 'must not.'" },
        { sentence: "あつい____から、まどをあけてください。", correct_answer: "です", options: ["です", "ます", "だ", "な"], explanation: "ですから gives a polite reason: 'because it is hot.'" },
      ],

      sentenceBuilds: [
        { english: "Please open the window.", words: ["まどを", "あけてください"], correct_answer: "まどをあけてください", explanation: "まどを (mado wo — 'window' + object marker) → あけてください (akete kudasai — 'please open'). てください is how you make polite requests." },
        { english: "May I take a photo?", words: ["しゃしんを", "とってもいいですか"], correct_answer: "しゃしんをとってもいいですか", explanation: "しゃしんを (shashin wo — 'photo' + object marker) → とってもいいですか (totte mo ii desu ka — 'is it okay to take?'). てもいいですか is how you ask permission." },
        { english: "You must not eat here.", words: ["ここで", "たべてはいけません"], correct_answer: "ここでたべてはいけません", explanation: "ここで (koko de — 'here' + location marker for actions) → たべてはいけません (tabete wa ikemasen — 'must not eat'). てはいけません means something is not allowed." },
        { english: "Please turn off the light.", words: ["でんきを", "けしてください"], correct_answer: "でんきをけしてください", explanation: "でんきを (denki wo — 'light' + object marker) → けしてください (keshite kudasai — 'please turn off'). Same pattern as 'please open': [thing]を [verb]てください." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 7: ~ている & Descriptions (Phase 3)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L7",
      phase: 3,
      title: "Progressive & Descriptions",
      genki_ref: "Lesson 7",

      vocabulary: [
        { kana: "しっています", romaji: "shitte imasu", english: "to know", category: "verbs" },
        { kana: "すんでいます", romaji: "sunde imasu", english: "to live (in a place)", category: "verbs" },
        { kana: "はたらいています", romaji: "hataraite imasu", english: "to be working", category: "verbs" },
        { kana: "けっこんしています", romaji: "kekkon shite imasu", english: "to be married", category: "verbs" },
        { kana: "もっています", romaji: "motte imasu", english: "to have; to hold", category: "verbs" },
        { kana: "きています", romaji: "kite imasu", english: "to be wearing (above waist)", category: "verbs" },
        { kana: "はいています", romaji: "haite imasu", english: "to be wearing (below waist)", category: "verbs" },
        { kana: "かぶっています", romaji: "kabutte imasu", english: "to be wearing (on head)", category: "verbs" },
        { kana: "かけています", romaji: "kakete imasu", english: "to be wearing (glasses)", category: "verbs" },
        // Clothing & accessories
        { kana: "めがね", romaji: "megane", english: "glasses", category: "clothing" },
        { kana: "ぼうし", romaji: "boushi", english: "hat; cap", category: "clothing" },
        { kana: "シャツ", romaji: "shatsu", english: "shirt", category: "clothing" },
        { kana: "くつ", romaji: "kutsu", english: "shoes", category: "clothing" },
        { kana: "ズボン", romaji: "zubon", english: "pants; trousers", category: "clothing" },
        { kana: "スカート", romaji: "sukaato", english: "skirt", category: "clothing" },
        { kana: "コート", romaji: "kooto", english: "coat", category: "clothing" },
        { kana: "セーター", romaji: "seetaa", english: "sweater", category: "clothing" },
        { kana: "ティーシャツ", romaji: "tiishatsu", english: "T-shirt", category: "clothing" },
        { kana: "ジーンズ", romaji: "jiinzu", english: "jeans", category: "clothing" },
        { kana: "くつした", romaji: "kutsushita", english: "socks", category: "clothing" },
        // Colors
        { kana: "あか", romaji: "aka", english: "red", category: "colors" },
        { kana: "あかい", romaji: "akai", english: "red (adj.)", category: "colors" },
        { kana: "あお", romaji: "ao", english: "blue", category: "colors" },
        { kana: "あおい", romaji: "aoi", english: "blue (adj.)", category: "colors" },
        { kana: "しろ", romaji: "shiro", english: "white", category: "colors" },
        { kana: "しろい", romaji: "shiroi", english: "white (adj.)", category: "colors" },
        { kana: "くろ", romaji: "kuro", english: "black", category: "colors" },
        { kana: "くろい", romaji: "kuroi", english: "black (adj.)", category: "colors" },
        { kana: "きいろ", romaji: "kiiro", english: "yellow", category: "colors" },
        { kana: "きいろい", romaji: "kiiroi", english: "yellow (adj.)", category: "colors" },
        { kana: "みどり", romaji: "midori", english: "green", category: "colors" },
        { kana: "ちゃいろ", romaji: "chairo", english: "brown", category: "colors" },
        // Body parts
        { kana: "かお", romaji: "kao", english: "face", category: "body" },
        { kana: "め", romaji: "me", english: "eye", category: "body" },
        { kana: "みみ", romaji: "mimi", english: "ear", category: "body" },
        { kana: "はな", romaji: "hana", english: "nose", category: "body" },
        { kana: "くち", romaji: "kuchi", english: "mouth", category: "body" },
        { kana: "て", romaji: "te", english: "hand", category: "body" },
        { kana: "あし", romaji: "ashi", english: "foot; leg", category: "body" },
        { kana: "かみ", romaji: "kami", english: "hair", category: "body" },
        { kana: "からだ", romaji: "karada", english: "body", category: "body" },
      ],

      grammar: [
        {
          pattern: "～ている (progressive)",
          meaning: "is doing...",
          explanation: "Te-form + いる/います describes an action in progress.",
          examples: [
            { japanese: "いまべんきょうしています。", romaji: "Ima benkyou shite imasu.", english: "I am studying right now." },
          ]
        },
        {
          pattern: "～ている (resultant state)",
          meaning: "has done... / is in the state of...",
          explanation: "For some verbs, ている describes the result of a completed action that persists.",
          examples: [
            { japanese: "けっこんしています。", romaji: "Kekkon shite imasu.", english: "I am married." },
            { japanese: "とうきょうにすんでいます。", romaji: "Toukyou ni sunde imasu.", english: "I live in Tokyo." },
          ]
        },
        {
          pattern: "Verb stem + に いく / くる",
          meaning: "go/come to do...",
          explanation: "The verb stem + に + movement verb expresses going/coming for a purpose.",
          examples: [
            { japanese: "ひるごはんをたべにいきます。", romaji: "Hirugohan wo tabe ni ikimasu.", english: "I'm going to eat lunch." },
          ]
        },
        {
          pattern: "Adj/Noun で Description",
          meaning: "is [A] and [B]",
          explanation: "Use adjective て-form to connect descriptions: い-adj → くて, な-adj → で.",
          examples: [
            { japanese: "このへやはひろくてきれいです。", romaji: "Kono heya wa hirokute kirei desu.", english: "This room is spacious and clean." },
          ]
        },
      ],

      sentences: [
        { japanese: "いまべんきょうしています", romaji: "ima benkyou shite imasu", english: "I am studying right now.", difficulty: 2 },
        { japanese: "けっこんしています", romaji: "kekkon shite imasu", english: "I am married.", difficulty: 1 },
        { japanese: "とうきょうにすんでいます", romaji: "toukyou ni sunde imasu", english: "I live in Tokyo.", difficulty: 1 },
        { japanese: "めがねをかけています", romaji: "megane wo kakete imasu", english: "He/She is wearing glasses.", difficulty: 2 },
        { japanese: "ひるごはんをたべにいきます", romaji: "hirugohan wo tabe ni ikimasu", english: "I'm going to eat lunch.", difficulty: 2 },
        { japanese: "あかいシャツをきています", romaji: "akai shatsu wo kite imasu", english: "I am wearing a red shirt.", difficulty: 2 },
        { japanese: "このへやはひろくてきれいです", romaji: "kono heya wa hirokute kirei desu", english: "This room is spacious and clean.", difficulty: 2 },
        { japanese: "しろいぼうしをかぶっています", romaji: "shiroi boushi wo kabutte imasu", english: "He/She is wearing a white hat.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "いまべんきょう____います。", correct_answer: "して", options: ["して", "する", "した", "します"], explanation: "Te-form + います = progressive action." },
        { sentence: "とうきょう____すんでいます。", correct_answer: "に", options: ["に", "で", "を", "は"], explanation: "に (ni) marks the place where someone lives." },
        { sentence: "めがね____かけています。", correct_answer: "を", options: ["を", "が", "に", "は"], explanation: "を (wo) marks what you are wearing." },
        { sentence: "このへやはひろ____きれいです。", correct_answer: "くて", options: ["くて", "いで", "くの", "いの"], explanation: "い-adjective て-form: い → くて to connect adjectives." },
      ],

      sentenceBuilds: [
        { english: "I am studying right now.", words: ["いま", "べんきょうしています"], correct_answer: "いまべんきょうしています", explanation: "いま (ima — 'right now') → べんきょうしています (benkyou shite imasu — 'am studying'). ています means an action is happening right now, like English '-ing.'" },
        { english: "I live in Tokyo.", words: ["とうきょうに", "すんでいます"], correct_answer: "とうきょうにすんでいます", explanation: "とうきょうに (toukyou ni — 'in Tokyo' + location marker) → すんでいます (sunde imasu — 'am living'). Some verbs use ています for ongoing states, not just actions in progress." },
        { english: "I am wearing a red shirt.", words: ["あかいシャツを", "きています"], correct_answer: "あかいシャツをきています", explanation: "あかいシャツを (akai shatsu wo — 'red shirt' + object marker) → きています (kite imasu — 'am wearing'). Wearing clothes uses ている for the resulting state." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 8: Short Forms & Quotations (Phase 3)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L8",
      phase: 3,
      title: "Short Forms & Quotations",
      genki_ref: "Lesson 8",

      vocabulary: [
        { kana: "おもいます", romaji: "omoimasu", english: "to think", category: "verbs" },
        { kana: "いいます", romaji: "iimasu", english: "to say", category: "verbs" },
        { kana: "わかります", romaji: "wakarimasu", english: "to understand", category: "verbs" },
        { kana: "しります", romaji: "shirimasu", english: "to come to know", category: "verbs" },
        { kana: "すてます", romaji: "sutemasu", english: "to throw away", category: "verbs" },
        { kana: "たばこをすいます", romaji: "tabako wo suimasu", english: "to smoke", category: "verbs" },
        // Nature & weather
        { kana: "あめ", romaji: "ame", english: "rain", category: "nature" },
        { kana: "ゆき", romaji: "yuki", english: "snow", category: "nature" },
        { kana: "てんき", romaji: "tenki", english: "weather", category: "nature" },
        { kana: "かぜ", romaji: "kaze", english: "wind", category: "nature" },
        { kana: "くもり", romaji: "kumori", english: "cloudy", category: "nature" },
        { kana: "はれ", romaji: "hare", english: "sunny; clear weather", category: "nature" },
        { kana: "そら", romaji: "sora", english: "sky", category: "nature" },
        { kana: "うみ", romaji: "umi", english: "sea; ocean", category: "nature" },
        { kana: "やま", romaji: "yama", english: "mountain", category: "nature" },
        { kana: "かわ", romaji: "kawa", english: "river", category: "nature" },
        { kana: "き", romaji: "ki", english: "tree", category: "nature" },
        { kana: "はな", romaji: "hana", english: "flower", category: "nature" },
        // Hobbies & activities
        { kana: "うた", romaji: "uta", english: "song", category: "things" },
        { kana: "うたいます", romaji: "utaimasu", english: "to sing", category: "verbs" },
        { kana: "おどります", romaji: "odorimasu", english: "to dance", category: "verbs" },
        { kana: "えいが", romaji: "eiga", english: "movie", category: "things" },
        { kana: "おんがく", romaji: "ongaku", english: "music", category: "things" },
        { kana: "りょこう", romaji: "ryokou", english: "travel; trip", category: "things" },
        { kana: "スポーツ", romaji: "supootsu", english: "sports", category: "things" },
        { kana: "サッカー", romaji: "sakkaa", english: "soccer", category: "things" },
        { kana: "やきゅう", romaji: "yakyuu", english: "baseball", category: "things" },
        { kana: "テニス", romaji: "tenisu", english: "tennis", category: "things" },
        { kana: "じょうだん", romaji: "joudan", english: "joke", category: "things" },
      ],

      grammar: [
        {
          pattern: "～と思います",
          meaning: "I think that...",
          explanation: "Short form + と思います expresses an opinion or belief.",
          examples: [
            { japanese: "あしたあめがふるとおもいます。", romaji: "Ashita ame ga furu to omoimasu.", english: "I think it will rain tomorrow." },
          ]
        },
        {
          pattern: "～と言っていました",
          meaning: "someone said that...",
          explanation: "Short form + と言っていました reports what someone else said.",
          examples: [
            { japanese: "ともだちがにほんにいくといっていました。", romaji: "Tomodachi ga nihon ni iku to itte imashita.", english: "My friend said they're going to Japan." },
          ]
        },
        {
          pattern: "～ないでください",
          meaning: "Please don't...",
          explanation: "Negative short form (ない) + でください makes a negative request.",
          examples: [
            { japanese: "ここでたばこをすわないでください。", romaji: "Koko de tabako wo suwanaide kudasai.", english: "Please don't smoke here." },
          ]
        },
        {
          pattern: "Verb の が すき / じょうず",
          meaning: "like/good at doing...",
          explanation: "Verb dictionary form + のが + adjective expresses liking or skill with an activity.",
          examples: [
            { japanese: "えいがをみるのがすきです。", romaji: "Eiga wo miru no ga suki desu.", english: "I like watching movies." },
          ]
        },
      ],

      sentences: [
        { japanese: "あしたあめがふるとおもいます", romaji: "ashita ame ga furu to omoimasu", english: "I think it will rain tomorrow.", difficulty: 2 },
        { japanese: "ともだちがにほんにいくといっていました", romaji: "tomodachi ga nihon ni iku to itte imashita", english: "My friend said they're going to Japan.", difficulty: 2 },
        { japanese: "にほんごはおもしろいとおもいます", romaji: "nihongo wa omoshiroi to omoimasu", english: "I think Japanese is interesting.", difficulty: 2 },
        { japanese: "ここでたばこをすわないでください", romaji: "koko de tabako wo suwanaide kudasai", english: "Please don't smoke here.", difficulty: 2 },
        { japanese: "えいがをみるのがすきです", romaji: "eiga wo miru no ga suki desu", english: "I like watching movies.", difficulty: 2 },
        { japanese: "うたをうたうのがじょうずです", romaji: "uta wo utau no ga jouzu desu", english: "I am good at singing songs.", difficulty: 2 },
        { japanese: "きょうはてんきがいいとおもいます", romaji: "kyou wa tenki ga ii to omoimasu", english: "I think the weather is good today.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "あしたあめがふる____おもいます。", correct_answer: "と", options: ["と", "が", "を", "に"], explanation: "と connects the quoted thought to おもいます." },
        { sentence: "ここでたばこをすわない____ください。", correct_answer: "で", options: ["で", "て", "に", "を"], explanation: "ない + でください = 'please don't.'" },
        { sentence: "えいがをみる____がすきです。", correct_answer: "の", options: ["の", "こと", "もの", "ところ"], explanation: "のが turns a verb into a noun phrase: 'watching movies' + が すき." },
        { sentence: "ともだちがにほんにいく____いっていました。", correct_answer: "と", options: ["と", "が", "を", "に"], explanation: "と marks the quoted speech before いう (to say)." },
      ],

      sentenceBuilds: [
        { english: "I think it will rain tomorrow.", words: ["あしたあめがふると", "おもいます"], correct_answer: "あしたあめがふるとおもいます", explanation: "あしたあめがふると (ashita ame ga furu to — 'tomorrow rain will fall' + quotation marker) → おもいます (omoimasu — 'I think'). と connects what you think to おもいます. The thought goes first." },
        { english: "I think Japanese is interesting.", words: ["にほんごはおもしろいと", "おもいます"], correct_answer: "にほんごはおもしろいとおもいます", explanation: "にほんごはおもしろいと (nihongo wa omoshiroi to — 'Japanese is interesting' + quotation marker) → おもいます (omoimasu — 'I think'). Same pattern: [your opinion]とおもいます." },
        { english: "I like watching movies.", words: ["えいがをみるのが", "すきです"], correct_answer: "えいがをみるのがすきです", explanation: "えいがをみるのが (eiga wo miru no ga — 'watching movies' + subject marker) → すきです (suki desu — 'like'). の turns the verb into a noun so you can say you like the activity." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 9: Past Short Forms & Qualifying Nouns (Phase 3)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L9",
      phase: 3,
      title: "Past Short Forms & Qualifying Nouns",
      genki_ref: "Lesson 9",

      vocabulary: [
        { kana: "かいます", romaji: "kaimasu", english: "to buy", category: "verbs" },
        { kana: "あいます", romaji: "aimasu", english: "to meet", category: "verbs" },
        { kana: "つくります", romaji: "tsukurimasu", english: "to make; to cook", category: "verbs" },
        { kana: "もらいます", romaji: "moraimasu", english: "to receive", category: "verbs" },
        { kana: "あげます", romaji: "agemasu", english: "to give (to someone)", category: "verbs" },
        { kana: "かします", romaji: "kashimasu", english: "to lend", category: "verbs" },
        { kana: "かります", romaji: "karimasu", english: "to borrow", category: "verbs" },
        { kana: "おくります", romaji: "okurimasu", english: "to send", category: "verbs" },
        { kana: "よびます", romaji: "yobimasu", english: "to call; to invite", category: "verbs" },
        // Food
        { kana: "りょうり", romaji: "ryouri", english: "cooking; cuisine", category: "food" },
        { kana: "ケーキ", romaji: "keeki", english: "cake", category: "food" },
        { kana: "おかし", romaji: "okashi", english: "sweets; snacks", category: "food" },
        { kana: "ラーメン", romaji: "raamen", english: "ramen", category: "food" },
        { kana: "カレー", romaji: "karee", english: "curry", category: "food" },
        { kana: "ぎゅうにゅう", romaji: "gyuunyuu", english: "milk", category: "food" },
        { kana: "ジュース", romaji: "juusu", english: "juice", category: "food" },
        { kana: "ビール", romaji: "biiru", english: "beer", category: "food" },
        { kana: "おさけ", romaji: "osake", english: "alcohol; sake", category: "food" },
        // Family (plain)
        { kana: "ちち", romaji: "chichi", english: "my father", category: "family" },
        { kana: "はは", romaji: "haha", english: "my mother", category: "family" },
        { kana: "あに", romaji: "ani", english: "my older brother", category: "family" },
        { kana: "あね", romaji: "ane", english: "my older sister", category: "family" },
        { kana: "おとうと", romaji: "otouto", english: "my younger brother", category: "family" },
        { kana: "いもうと", romaji: "imouto", english: "my younger sister", category: "family" },
        // Family (polite)
        { kana: "おとうさん", romaji: "otousan", english: "father (polite/someone else's)", category: "family" },
        { kana: "おかあさん", romaji: "okaasan", english: "mother (polite/someone else's)", category: "family" },
        { kana: "おにいさん", romaji: "oniisan", english: "older brother (polite)", category: "family" },
        { kana: "おねえさん", romaji: "oneesan", english: "older sister (polite)", category: "family" },
        { kana: "かぞく", romaji: "kazoku", english: "family", category: "family" },
        { kana: "きょうだい", romaji: "kyoudai", english: "siblings", category: "family" },
      ],

      grammar: [
        {
          pattern: "Verb (short past) + Noun",
          meaning: "the (noun) that (verb)...",
          explanation: "Place a verb in short past form before a noun to qualify/describe it. No relative pronoun needed.",
          examples: [
            { japanese: "きのうかったほん", romaji: "kinou katta hon", english: "the book I bought yesterday" },
            { japanese: "にほんごをおしえているせんせい", romaji: "nihongo wo oshiete iru sensei", english: "the teacher who teaches Japanese" },
          ]
        },
        {
          pattern: "まだ～ていません",
          meaning: "haven't ... yet",
          explanation: "まだ + te-form + いません indicates something has not yet been done.",
          examples: [
            { japanese: "まだひるごはんをたべていません。", romaji: "Mada hirugohan wo tabete imasen.", english: "I haven't eaten lunch yet." },
          ]
        },
        {
          pattern: "あげる / もらう / くれる",
          meaning: "give / receive / give (to me)",
          explanation: "Three verbs for giving and receiving depending on direction of the gift.",
          examples: [
            { japanese: "ともだちにほんをあげました。", romaji: "Tomodachi ni hon wo agemashita.", english: "I gave a book to my friend." },
            { japanese: "ははにケーキをもらいました。", romaji: "Haha ni keeki wo moraimashita.", english: "I received cake from my mother." },
          ]
        },
      ],

      sentences: [
        { japanese: "きのうかったほんはおもしろいです", romaji: "kinou katta hon wa omoshiroi desu", english: "The book I bought yesterday is interesting.", difficulty: 2 },
        { japanese: "にほんごをおしえているせんせいはやまださんです", romaji: "nihongo wo oshiete iru sensei wa yamada-san desu", english: "The teacher who teaches Japanese is Mr./Ms. Yamada.", difficulty: 2 },
        { japanese: "まだひるごはんをたべていません", romaji: "mada hirugohan wo tabete imasen", english: "I haven't eaten lunch yet.", difficulty: 2 },
        { japanese: "きのうあったともだちはアメリカじんです", romaji: "kinou atta tomodachi wa amerikajin desu", english: "The friend I met yesterday is American.", difficulty: 2 },
        { japanese: "ははがつくったりょうりはおいしいです", romaji: "haha ga tsukutta ryouri wa oishii desu", english: "The food my mother made is delicious.", difficulty: 2 },
        { japanese: "ともだちにほんをあげました", romaji: "tomodachi ni hon wo agemashita", english: "I gave a book to my friend.", difficulty: 2 },
        { japanese: "ははにケーキをもらいました", romaji: "haha ni keeki wo moraimashita", english: "I received cake from my mother.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "まだひるごはんをたべて____。", correct_answer: "いません", options: ["いません", "います", "ました", "ません"], explanation: "まだ + ていません = 'haven't yet.'" },
        { sentence: "きのう____ほんはおもしろいです。", correct_answer: "かった", options: ["かった", "かう", "かいます", "かって"], explanation: "Short past form (かった) before a noun qualifies it." },
        { sentence: "ともだち____ほんをあげました。", correct_answer: "に", options: ["に", "を", "が", "は"], explanation: "に (ni) marks the recipient of giving." },
        { sentence: "はは____ケーキをもらいました。", correct_answer: "に", options: ["に", "が", "を", "は"], explanation: "に (ni) marks who you received from with もらう." },
      ],

      sentenceBuilds: [
        { english: "I haven't eaten lunch yet.", words: ["まだ", "ひるごはんを", "たべていません"], correct_answer: "まだひるごはんをたべていません", explanation: "まだ (mada — 'not yet') → ひるごはんを (hirugohan wo — 'lunch' + object marker) → たべていません (tabete imasen — 'haven't eaten'). まだ + ていません = 'haven't done something yet.'" },
        { english: "I gave a book to my friend.", words: ["ともだちに", "ほんを", "あげました"], correct_answer: "ともだちにほんをあげました", explanation: "ともだちに (tomodachi ni — 'to friend') → ほんを (hon wo — 'book' + object marker) → あげました (agemashita — 'gave'). に marks the person you give to." },
        { english: "The food my mother made is delicious.", words: ["ははがつくったりょうりは", "おいしいです"], correct_answer: "ははがつくったりょうりはおいしいです", explanation: "ははがつくったりょうりは (haha ga tsukutta ryouri wa — 'food that mother made' + topic) → おいしいです (oishii desu — 'is delicious'). Verbs before nouns work like relative clauses." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 10: Comparisons (Phase 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L10",
      phase: 4,
      title: "Comparisons & Intentions",
      genki_ref: "Lesson 10",

      vocabulary: [
        // Seasons
        { kana: "はる", romaji: "haru", english: "spring", category: "seasons" },
        { kana: "なつ", romaji: "natsu", english: "summer", category: "seasons" },
        { kana: "あき", romaji: "aki", english: "autumn; fall", category: "seasons" },
        { kana: "ふゆ", romaji: "fuyu", english: "winter", category: "seasons" },
        { kana: "きせつ", romaji: "kisetsu", english: "season", category: "seasons" },
        // Grammar words
        { kana: "つもり", romaji: "tsumori", english: "intention; plan", category: "grammar_words" },
        { kana: "いちばん", romaji: "ichiban", english: "number one; most", category: "grammar_words" },
        { kana: "どちら", romaji: "dochira", english: "which (of two)", category: "question_words" },
        // Months
        { kana: "いちがつ", romaji: "ichigatsu", english: "January", category: "months" },
        { kana: "にがつ", romaji: "nigatsu", english: "February", category: "months" },
        { kana: "さんがつ", romaji: "sangatsu", english: "March", category: "months" },
        { kana: "しがつ", romaji: "shigatsu", english: "April", category: "months" },
        { kana: "ごがつ", romaji: "gogatsu", english: "May", category: "months" },
        { kana: "ろくがつ", romaji: "rokugatsu", english: "June", category: "months" },
        { kana: "しちがつ", romaji: "shichigatsu", english: "July", category: "months" },
        { kana: "はちがつ", romaji: "hachigatsu", english: "August", category: "months" },
        { kana: "くがつ", romaji: "kugatsu", english: "September", category: "months" },
        { kana: "じゅうがつ", romaji: "juugatsu", english: "October", category: "months" },
        { kana: "じゅういちがつ", romaji: "juuichigatsu", english: "November", category: "months" },
        { kana: "じゅうにがつ", romaji: "juunigatsu", english: "December", category: "months" },
        { kana: "なんがつ", romaji: "nangatsu", english: "what month", category: "question_words" },
        // Countries
        { kana: "にほん", romaji: "nihon", english: "Japan", category: "places" },
        { kana: "アメリカ", romaji: "amerika", english: "America", category: "places" },
        { kana: "ちゅうごく", romaji: "chuugoku", english: "China", category: "places" },
        { kana: "かんこく", romaji: "kankoku", english: "Korea", category: "places" },
        { kana: "イギリス", romaji: "igirisu", english: "England; UK", category: "places" },
        { kana: "フランス", romaji: "furansu", english: "France", category: "places" },
        { kana: "ドイツ", romaji: "doitsu", english: "Germany", category: "places" },
        { kana: "オーストラリア", romaji: "oosutoraria", english: "Australia", category: "places" },
      ],

      grammar: [
        {
          pattern: "A のほうが B より ～",
          meaning: "A is more ~ than B",
          explanation: "Comparison structure: のほうが marks the superior item, より marks the inferior.",
          examples: [
            { japanese: "にほんのほうがアメリカよりちいさいです。", romaji: "Nihon no hou ga amerika yori chiisai desu.", english: "Japan is smaller than America." },
          ]
        },
        {
          pattern: "～のなかで ～がいちばん ～",
          meaning: "(among ~) ~ is the most ~",
          explanation: "Superlative: のなかで defines the group, いちばん means 'most.'",
          examples: [
            { japanese: "きせつのなかではるがいちばんすきです。", romaji: "Kisetsu no naka de haru ga ichiban suki desu.", english: "Among the seasons, I like spring the most." },
          ]
        },
        {
          pattern: "～つもりです",
          meaning: "I intend to...",
          explanation: "Short form + つもりです expresses intention or plan.",
          examples: [
            { japanese: "あしたべんきょうするつもりです。", romaji: "Ashita benkyou suru tsumori desu.", english: "I intend to study tomorrow." },
          ]
        },
        {
          pattern: "A と B と どちらが ～ですか",
          meaning: "Which is more ~, A or B?",
          explanation: "Used to compare two items and ask which is more of an adjective.",
          examples: [
            { japanese: "コーヒーとおちゃとどちらがすきですか。", romaji: "Koohii to ocha to dochira ga suki desu ka.", english: "Which do you like better, coffee or tea?" },
          ]
        },
      ],

      sentences: [
        { japanese: "にほんのほうがアメリカよりちいさいです", romaji: "nihon no hou ga amerika yori chiisai desu", english: "Japan is smaller than America.", difficulty: 2 },
        { japanese: "きせつのなかではるがいちばんすきです", romaji: "kisetsu no naka de haru ga ichiban suki desu", english: "Among the seasons, I like spring the most.", difficulty: 2 },
        { japanese: "あしたべんきょうするつもりです", romaji: "ashita benkyou suru tsumori desu", english: "I intend to study tomorrow.", difficulty: 2 },
        { japanese: "コーヒーとおちゃとどちらがすきですか", romaji: "koohii to ocha to dochira ga suki desu ka", english: "Which do you like better, coffee or tea?", difficulty: 2 },
        { japanese: "コーヒーのほうがすきです", romaji: "koohii no hou ga suki desu", english: "I like coffee better.", difficulty: 2 },
        { japanese: "なつはふゆよりあついです", romaji: "natsu wa fuyu yori atsui desu", english: "Summer is hotter than winter.", difficulty: 2 },
        { japanese: "らいしゅうにほんにいくつもりです", romaji: "raishuu nihon ni iku tsumori desu", english: "I intend to go to Japan next week.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "にほん____ほうがアメリカよりちいさいです。", correct_answer: "の", options: ["の", "が", "は", "を"], explanation: "のほうが marks the item being compared favorably." },
        { sentence: "きせつのなか____はるがいちばんすきです。", correct_answer: "で", options: ["で", "に", "は", "が"], explanation: "のなかで defines the group for superlative comparison." },
        { sentence: "あしたべんきょうする____です。", correct_answer: "つもり", options: ["つもり", "こと", "もの", "ほう"], explanation: "つもりです expresses intention: 'I intend to.'" },
        { sentence: "なつはふゆ____あついです。", correct_answer: "より", options: ["より", "から", "まで", "ほど"], explanation: "より marks the thing being compared against: 'than winter.'" },
      ],

      sentenceBuilds: [
        { english: "I intend to study tomorrow.", words: ["あした", "べんきょうする", "つもりです"], correct_answer: "あしたべんきょうするつもりです", explanation: "あした (ashita — 'tomorrow') → べんきょうする (benkyou suru — 'study', casual form) → つもりです (tsumori desu — 'intend to'). つもりです expresses a plan you've decided on." },
        { english: "Japan is smaller than America.", words: ["にほんのほうが", "アメリカより", "ちいさいです"], correct_answer: "にほんのほうがアメリカよりちいさいです", explanation: "にほんのほうが (nihon no hou ga — 'Japan' + comparison) → アメリカより (amerika yori — 'than America') → ちいさいです (chiisai desu — 'is small'). のほうが marks the winner, より marks the loser." },
        { english: "Summer is hotter than winter.", words: ["なつは", "ふゆより", "あついです"], correct_answer: "なつはふゆよりあついです", explanation: "なつは (natsu wa — 'summer' + topic) → ふゆより (fuyu yori — 'than winter') → あついです (atsui desu — 'is hot'). より means 'compared to' or 'than.'" },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 11: Desires & Experiences (Phase 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L11",
      phase: 4,
      title: "Desires & Experiences",
      genki_ref: "Lesson 11",

      vocabulary: [
        { kana: "およぎます", romaji: "oyogimasu", english: "to swim", category: "verbs" },
        { kana: "のぼります", romaji: "noborimasu", english: "to climb", category: "verbs" },
        { kana: "はしります", romaji: "hashirimasu", english: "to run", category: "verbs" },
        { kana: "あるきます", romaji: "arukimasu", english: "to walk", category: "verbs" },
        { kana: "あびます", romaji: "abimasu", english: "to take (a shower)", category: "verbs" },
        { kana: "つとめます", romaji: "tsutomemasu", english: "to work (at a company)", category: "verbs" },
        { kana: "やめます", romaji: "yamemasu", english: "to quit; to stop", category: "verbs" },
        { kana: "はじめます", romaji: "hajimemasu", english: "to begin", category: "verbs" },
        { kana: "おわります", romaji: "owarimasu", english: "to end; to finish", category: "verbs" },
        // Time
        { kana: "やすみ", romaji: "yasumi", english: "day off; holiday", category: "time" },
        { kana: "なつやすみ", romaji: "natsuyasumi", english: "summer vacation", category: "time" },
        { kana: "ふゆやすみ", romaji: "fuyuyasumi", english: "winter vacation", category: "time" },
        { kana: "しゅうまつ", romaji: "shuumatsu", english: "weekend", category: "time" },
        // Counters
        { kana: "ひとつ", romaji: "hitotsu", english: "one (thing)", category: "counters" },
        { kana: "ふたつ", romaji: "futatsu", english: "two (things)", category: "counters" },
        { kana: "みっつ", romaji: "mittsu", english: "three (things)", category: "counters" },
        { kana: "よっつ", romaji: "yottsu", english: "four (things)", category: "counters" },
        { kana: "いつつ", romaji: "itsutsu", english: "five (things)", category: "counters" },
        { kana: "むっつ", romaji: "muttsu", english: "six (things)", category: "counters" },
        { kana: "ななつ", romaji: "nanatsu", english: "seven (things)", category: "counters" },
        { kana: "やっつ", romaji: "yattsu", english: "eight (things)", category: "counters" },
        { kana: "ここのつ", romaji: "kokonotsu", english: "nine (things)", category: "counters" },
        { kana: "とお", romaji: "too", english: "ten (things)", category: "counters" },
        { kana: "いくつ", romaji: "ikutsu", english: "how many", category: "question_words" },
        // Places for activities
        { kana: "プール", romaji: "puuru", english: "pool", category: "places" },
        { kana: "かいしゃ", romaji: "kaisha", english: "company; office", category: "places" },
        { kana: "レストラン", romaji: "resutoran", english: "restaurant", category: "places" },
        { kana: "デパート", romaji: "depaato", english: "department store", category: "places" },
        { kana: "ホテル", romaji: "hoteru", english: "hotel", category: "places" },
        { kana: "くうこう", romaji: "kuukou", english: "airport", category: "places" },
        // Adverbs
        { kana: "いっしょに", romaji: "issho ni", english: "together", category: "adverbs" },
        { kana: "ひとりで", romaji: "hitori de", english: "alone; by oneself", category: "adverbs" },
        { kana: "もう", romaji: "mou", english: "already", category: "adverbs" },
        { kana: "まだ", romaji: "mada", english: "still; not yet", category: "adverbs" },
        { kana: "たくさん", romaji: "takusan", english: "many; a lot", category: "adverbs" },
        { kana: "すこし", romaji: "sukoshi", english: "a little; a few", category: "adverbs" },
        { kana: "ぜんぜん", romaji: "zenzen", english: "not at all (+ negative)", category: "adverbs" },
        { kana: "よく", romaji: "yoku", english: "often; well", category: "adverbs" },
        { kana: "ときどき", romaji: "tokidoki", english: "sometimes", category: "adverbs" },
        { kana: "いつも", romaji: "itsumo", english: "always", category: "adverbs" },
        { kana: "たいてい", romaji: "taitei", english: "usually", category: "adverbs" },
        { kana: "あまり", romaji: "amari", english: "not very (+ negative)", category: "adverbs" },
      ],

      grammar: [
        {
          pattern: "～たい",
          meaning: "want to...",
          explanation: "Verb stem + たい expresses the speaker's desire to do something.",
          examples: [
            { japanese: "にほんにいきたいです。", romaji: "Nihon ni ikitai desu.", english: "I want to go to Japan." },
          ]
        },
        {
          pattern: "～たり～たりする",
          meaning: "do things like ~ and ~",
          explanation: "Lists representative actions. Past short form + り for each action, ending with する.",
          examples: [
            { japanese: "やすみのひはほんをよんだりえいがをみたりします。", romaji: "Yasumi no hi wa hon wo yondari eiga wo mitari shimasu.", english: "On days off, I do things like read books and watch movies." },
          ]
        },
        {
          pattern: "～ことがある",
          meaning: "have the experience of...",
          explanation: "Past short form + ことがある means you have (or haven't) experienced something.",
          examples: [
            { japanese: "すしをたべたことがあります。", romaji: "Sushi wo tabeta koto ga arimasu.", english: "I have eaten sushi (before)." },
          ]
        },
      ],

      sentences: [
        { japanese: "にほんにいきたいです", romaji: "nihon ni ikitai desu", english: "I want to go to Japan.", difficulty: 1 },
        { japanese: "すしをたべたことがあります", romaji: "sushi wo tabeta koto ga arimasu", english: "I have eaten sushi before.", difficulty: 2 },
        { japanese: "やすみのひはほんをよんだりえいがをみたりします", romaji: "yasumi no hi wa hon wo yondari eiga wo mitari shimasu", english: "On days off, I do things like read books and watch movies.", difficulty: 2 },
        { japanese: "ふじさんにのぼりたいです", romaji: "fujisan ni noboritai desu", english: "I want to climb Mt. Fuji.", difficulty: 1 },
        { japanese: "にほんにいったことがありません", romaji: "nihon ni itta koto ga arimasen", english: "I have never been to Japan.", difficulty: 2 },
        { japanese: "しゅうまつはともだちとあそびたいです", romaji: "shuumatsu wa tomodachi to asobitai desu", english: "I want to hang out with friends on the weekend.", difficulty: 2 },
        { japanese: "プールでおよいだりはしったりしました", romaji: "puuru de oyoidari hashittari shimashita", english: "I did things like swim and run at the pool.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "にほんにいき____です。", correct_answer: "たい", options: ["たい", "ます", "ました", "ません"], explanation: "Verb stem + たい = 'want to.'" },
        { sentence: "すしをたべた____があります。", correct_answer: "こと", options: ["こと", "もの", "ところ", "とき"], explanation: "たことがある = 'have the experience of.'" },
        { sentence: "ほんをよん____えいがをみたりします。", correct_answer: "だり", options: ["だり", "たり", "から", "ので"], explanation: "よむ → よんだ → よんだり for listing activities." },
        { sentence: "にほんにいった____がありません。", correct_answer: "こと", options: ["こと", "もの", "ところ", "とき"], explanation: "たことがありません = 'have never experienced.'" },
      ],

      sentenceBuilds: [
        { english: "I want to go to Japan.", words: ["にほんに", "いきたいです"], correct_answer: "にほんにいきたいです", explanation: "にほんに (nihon ni — 'to Japan' + direction marker) → いきたいです (ikitai desu — 'want to go'). たい on a verb stem = 'want to.' Like adding 'want to' before any verb." },
        { english: "I have eaten sushi before.", words: ["すしを", "たべたことが", "あります"], correct_answer: "すしをたべたことがあります", explanation: "すしを (sushi wo — 'sushi' + object marker) → たべたことが (tabeta koto ga — 'the experience of having eaten') → あります (arimasu — 'exists'). ことがあります literally means 'the experience exists.'" },
        { english: "I want to climb Mt. Fuji.", words: ["ふじさんに", "のぼりたいです"], correct_answer: "ふじさんにのぼりたいです", explanation: "ふじさんに (fujisan ni — 'to Mt. Fuji') → のぼりたいです (noboritai desu — 'want to climb'). Same たい pattern applied to のぼる (to climb)." },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 12: Explanations & Advice (Phase 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "L12",
      phase: 4,
      title: "Explanations & Advice",
      genki_ref: "Lesson 12",

      vocabulary: [
        // Body & health
        { kana: "あたま", romaji: "atama", english: "head", category: "body" },
        { kana: "おなか", romaji: "onaka", english: "stomach", category: "body" },
        { kana: "のど", romaji: "nodo", english: "throat", category: "body" },
        { kana: "は", romaji: "ha", english: "tooth", category: "body" },
        { kana: "せなか", romaji: "senaka", english: "back (body)", category: "body" },
        { kana: "かた", romaji: "kata", english: "shoulder", category: "body" },
        { kana: "ゆび", romaji: "yubi", english: "finger", category: "body" },
        { kana: "くすり", romaji: "kusuri", english: "medicine", category: "health" },
        { kana: "びょうき", romaji: "byouki", english: "illness; sick", category: "health" },
        { kana: "びょういん", romaji: "byouin", english: "hospital", category: "places" },
        { kana: "ねつ", romaji: "netsu", english: "fever", category: "health" },
        { kana: "かぜ", romaji: "kaze", english: "cold (illness)", category: "health" },
        { kana: "せき", romaji: "seki", english: "cough", category: "health" },
        // School & work
        { kana: "しけん", romaji: "shiken", english: "exam; test", category: "school" },
        { kana: "じゅぎょう", romaji: "jugyou", english: "class; lesson", category: "school" },
        { kana: "レポート", romaji: "repooto", english: "report; paper", category: "school" },
        { kana: "かいぎ", romaji: "kaigi", english: "meeting", category: "work" },
        // Conjunctions & particles
        { kana: "でも", romaji: "demo", english: "but; however", category: "conjunctions" },
        { kana: "そして", romaji: "soshite", english: "and then", category: "conjunctions" },
        { kana: "それから", romaji: "sorekara", english: "after that; and then", category: "conjunctions" },
        { kana: "だから", romaji: "dakara", english: "therefore; so", category: "conjunctions" },
        { kana: "けど", romaji: "kedo", english: "but; although", category: "conjunctions" },
        // More adverbs
        { kana: "たぶん", romaji: "tabun", english: "probably; maybe", category: "adverbs" },
        { kana: "きっと", romaji: "kitto", english: "surely; certainly", category: "adverbs" },
        { kana: "もちろん", romaji: "mochiron", english: "of course", category: "adverbs" },
        { kana: "ちょっと", romaji: "chotto", english: "a little; a bit", category: "adverbs" },
        { kana: "とても", romaji: "totemo", english: "very; extremely", category: "adverbs" },
        { kana: "すぐ", romaji: "sugu", english: "soon; immediately", category: "adverbs" },
        { kana: "ゆっくり", romaji: "yukkuri", english: "slowly; leisurely", category: "adverbs" },
        { kana: "はじめて", romaji: "hajimete", english: "for the first time", category: "adverbs" },
        // Animals
        { kana: "とり", romaji: "tori", english: "bird", category: "animals" },
        { kana: "さる", romaji: "saru", english: "monkey", category: "animals" },
        { kana: "うま", romaji: "uma", english: "horse", category: "animals" },
        { kana: "うし", romaji: "ushi", english: "cow", category: "animals" },
        { kana: "ぶた", romaji: "buta", english: "pig", category: "animals" },
        { kana: "ひつじ", romaji: "hitsuji", english: "sheep", category: "animals" },
        { kana: "うさぎ", romaji: "usagi", english: "rabbit", category: "animals" },
        { kana: "さかな", romaji: "sakana", english: "fish", category: "animals" },
      ],

      grammar: [
        {
          pattern: "～んです",
          meaning: "it is that... (explanatory)",
          explanation: "Short form + んです adds an explanatory or seeking-explanation tone.",
          examples: [
            { japanese: "あたまがいたいんです。", romaji: "Atama ga itai n desu.", english: "I have a headache. (explaining)" },
          ]
        },
        {
          pattern: "～すぎる",
          meaning: "too much...",
          explanation: "Verb stem or adjective stem + すぎる means 'too much' or 'excessively.'",
          examples: [
            { japanese: "たべすぎました。", romaji: "Tabesugimashita.", english: "I ate too much." },
          ]
        },
        {
          pattern: "～ほうがいいです",
          meaning: "it would be better to...",
          explanation: "Past short form + ほうがいいです gives advice.",
          examples: [
            { japanese: "くすりをのんだほうがいいです。", romaji: "Kusuri wo nonda hou ga ii desu.", english: "You'd better take medicine." },
          ]
        },
        {
          pattern: "～ので",
          meaning: "because... (polite)",
          explanation: "Short form + ので gives a polite reason, more formal than から.",
          examples: [
            { japanese: "しけんがあるのでべんきょうします。", romaji: "Shiken ga aru node benkyou shimasu.", english: "Because I have an exam, I will study." },
          ]
        },
      ],

      sentences: [
        { japanese: "あたまがいたいんです", romaji: "atama ga itai n desu", english: "I have a headache. (explaining)", difficulty: 2 },
        { japanese: "たべすぎました", romaji: "tabesugimashita", english: "I ate too much.", difficulty: 1 },
        { japanese: "くすりをのんだほうがいいです", romaji: "kusuri wo nonda hou ga ii desu", english: "You'd better take medicine.", difficulty: 2 },
        { japanese: "しけんがあるのでべんきょうします", romaji: "shiken ga aru node benkyou shimasu", english: "Because I have an exam, I will study.", difficulty: 2 },
        { japanese: "あしたはあめでしょう", romaji: "ashita wa ame deshou", english: "It will probably rain tomorrow.", difficulty: 2 },
        { japanese: "のみすぎました", romaji: "nomisugimashita", english: "I drank too much.", difficulty: 1 },
        { japanese: "はやくねたほうがいいです", romaji: "hayaku neta hou ga ii desu", english: "You should go to bed early.", difficulty: 2 },
        { japanese: "かぜをひいたんです", romaji: "kaze wo hiita n desu", english: "I caught a cold. (explaining)", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "あたまがいたい____です。", correct_answer: "ん", options: ["ん", "の", "な", "だ"], explanation: "んです adds explanatory tone." },
        { sentence: "くすりをのんだ____がいいです。", correct_answer: "ほう", options: ["ほう", "かた", "もの", "こと"], explanation: "ほうがいいです = 'it would be better to.'" },
        { sentence: "しけんがある____べんきょうします。", correct_answer: "ので", options: ["ので", "から", "けど", "のに"], explanation: "ので gives a polite reason: 'because.'" },
        { sentence: "たべ____ました。", correct_answer: "すぎ", options: ["すぎ", "たい", "にくい", "やすい"], explanation: "すぎる attached to verb stem = 'did too much.'" },
      ],

      sentenceBuilds: [
        { english: "You'd better take medicine.", words: ["くすりを", "のんだほうが", "いいです"], correct_answer: "くすりをのんだほうがいいです", explanation: "くすりを (kusuri wo — 'medicine' + object marker) → のんだほうが (nonda hou ga — 'the option of having taken') → いいです (ii desu — 'is good'). ほうがいいです literally means 'the direction of doing X is better.'" },
        { english: "I ate too much.", words: ["たべ", "すぎました"], correct_answer: "たべすぎました", explanation: "たべ (tabe — 'eat', verb stem) → すぎました (sugimashita — 'did too much'). すぎる attaches to a verb stem and means 'overdid it.' のみすぎ = drank too much, はなしすぎ = talked too much." },
        { english: "Because I have an exam, I will study.", words: ["しけんがあるので", "べんきょうします"], correct_answer: "しけんがあるのでべんきょうします", explanation: "しけんがあるので (shiken ga aru node — 'because there is an exam') → べんきょうします (benkyou shimasu — 'will study'). ので gives the reason before the result." },
      ],
    },
  ],
};

export default n5Content;
