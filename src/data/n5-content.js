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
        // Time words
        { kana: "いま", romaji: "ima", english: "now", category: "time" },
        { kana: "じ", romaji: "ji", english: "o'clock", category: "time" },
        { kana: "はん", romaji: "han", english: "half (past)", category: "time" },
        { kana: "なんじ", romaji: "nanji", english: "what time", category: "time" },
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
      ],

      sentences: [
        { japanese: "わたしはがくせいです", romaji: "watashi wa gakusei desu", english: "I am a student.", difficulty: 1 },
        { japanese: "せんこうはにほんごです", romaji: "senkou wa nihongo desu", english: "My major is Japanese.", difficulty: 1 },
        { japanese: "いまさんじです", romaji: "ima sanji desu", english: "It is 3 o'clock now.", difficulty: 1 },
        { japanese: "やまださんはせんせいです", romaji: "yamada-san wa sensei desu", english: "Mr./Ms. Yamada is a teacher.", difficulty: 1 },
        { japanese: "がくせいですか", romaji: "gakusei desu ka", english: "Are you a student?", difficulty: 1 },
        { japanese: "いまなんじですか", romaji: "ima nanji desu ka", english: "What time is it now?", difficulty: 1 },
        { japanese: "にほんじんです", romaji: "nihonjin desu", english: "I am Japanese.", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "わたし____がくせいです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic of the sentence." },
        { sentence: "せんこう____なんですか。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks the topic when asking a question." },
        { sentence: "やまださん____せんせいです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic: 'As for Yamada, (they are) a teacher.'" },
        { sentence: "いま____さんじです。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks 'now' as the topic." },
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
        { kana: "ここ", romaji: "koko", english: "here", category: "demonstratives" },
        { kana: "そこ", romaji: "soko", english: "there", category: "demonstratives" },
        { kana: "あそこ", romaji: "asoko", english: "over there", category: "demonstratives" },
        // Shopping
        { kana: "いくら", romaji: "ikura", english: "how much (price)", category: "shopping" },
        { kana: "えん", romaji: "en", english: "yen (Japanese currency)", category: "shopping" },
        { kana: "ほん", romaji: "hon", english: "book", category: "things" },
        { kana: "かばん", romaji: "kaban", english: "bag", category: "things" },
        { kana: "とけい", romaji: "tokei", english: "watch; clock", category: "things" },
        { kana: "かさ", romaji: "kasa", english: "umbrella", category: "things" },
        { kana: "ペン", romaji: "pen", english: "pen", category: "things" },
        { kana: "ノート", romaji: "nooto", english: "notebook", category: "things" },
        { kana: "じしょ", romaji: "jisho", english: "dictionary", category: "things" },
        { kana: "だれ", romaji: "dare", english: "who", category: "question_words" },
        { kana: "なに", romaji: "nani", english: "what", category: "question_words" },
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
      ],

      sentences: [
        { japanese: "これはほんです", romaji: "kore wa hon desu", english: "This is a book.", difficulty: 1 },
        { japanese: "それはなんですか", romaji: "sore wa nan desu ka", english: "What is that?", difficulty: 1 },
        { japanese: "あれはとけいです", romaji: "are wa tokei desu", english: "That over there is a clock.", difficulty: 1 },
        { japanese: "このかばんはいくらですか", romaji: "kono kaban wa ikura desu ka", english: "How much is this bag?", difficulty: 1 },
        { japanese: "これはペンじゃないです", romaji: "kore wa pen ja nai desu", english: "This is not a pen.", difficulty: 1 },
        { japanese: "あのひとはだれですか", romaji: "ano hito wa dare desu ka", english: "Who is that person over there?", difficulty: 2 },
        { japanese: "ここはだいがくです", romaji: "koko wa daigaku desu", english: "This place is a university.", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "これ____ほんです。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks the topic: 'As for this, it is a book.'" },
        { sentence: "____かばんはいくらですか。", correct_answer: "この", options: ["この", "これ", "ここ", "あの"], explanation: "この (kono) is the demonstrative adjective 'this' used before a noun." },
        { sentence: "これはペン____ないです。", correct_answer: "じゃ", options: ["じゃ", "は", "が", "で"], explanation: "じゃないです is the negative copula: 'is not.'" },
        { sentence: "それ____なんですか。", correct_answer: "は", options: ["は", "が", "を", "の"], explanation: "は (wa) marks 'that' as the topic of the question." },
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
        // Places
        { kana: "がっこう", romaji: "gakkou", english: "school", category: "places" },
        { kana: "うち", romaji: "uchi", english: "home; house", category: "places" },
        { kana: "としょかん", romaji: "toshokan", english: "library", category: "places" },
        // Time references
        { kana: "まいにち", romaji: "mainichi", english: "every day", category: "time" },
        { kana: "あした", romaji: "ashita", english: "tomorrow", category: "time" },
        { kana: "きょう", romaji: "kyou", english: "today", category: "time" },
        { kana: "あさ", romaji: "asa", english: "morning", category: "time" },
        { kana: "よる", romaji: "yoru", english: "night; evening", category: "time" },
        // Food & Drink
        { kana: "ごはん", romaji: "gohan", english: "rice; meal", category: "food" },
        { kana: "みず", romaji: "mizu", english: "water", category: "food" },
        { kana: "コーヒー", romaji: "koohii", english: "coffee", category: "food" },
        { kana: "おちゃ", romaji: "ocha", english: "tea (green tea)", category: "food" },
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
      ],

      sentences: [
        { japanese: "ごはんをたべます", romaji: "gohan wo tabemasu", english: "I eat rice.", difficulty: 1 },
        { japanese: "みずをのみます", romaji: "mizu wo nomimasu", english: "I drink water.", difficulty: 1 },
        { japanese: "がっこうにいきます", romaji: "gakkou ni ikimasu", english: "I go to school.", difficulty: 1 },
        { japanese: "まいにちにほんごをべんきょうします", romaji: "mainichi nihongo wo benkyou shimasu", english: "I study Japanese every day.", difficulty: 2 },
        { japanese: "あさコーヒーをのみます", romaji: "asa koohii wo nomimasu", english: "I drink coffee in the morning.", difficulty: 1 },
        { japanese: "テレビをみます", romaji: "terebi wo mimasu", english: "I watch TV.", difficulty: 1 },
        { japanese: "コーヒーをのみませんか", romaji: "koohii wo nomimasen ka", english: "Won't you have some coffee?", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "みず____のみます。", correct_answer: "を", options: ["を", "は", "が", "で"], explanation: "を (wo) marks the direct object of the verb." },
        { sentence: "がっこう____いきます。", correct_answer: "に", options: ["に", "を", "は", "で"], explanation: "に (ni) marks the destination with movement verbs." },
        { sentence: "にほんご____べんきょうします。", correct_answer: "を", options: ["を", "が", "は", "に"], explanation: "を (wo) marks what you are studying (direct object)." },
        { sentence: "コーヒー____のみませんか。", correct_answer: "を", options: ["を", "は", "が", "に"], explanation: "を (wo) marks the object even in negative/invitation sentences." },
        { sentence: "テレビ____みます。", correct_answer: "を", options: ["を", "が", "は", "で"], explanation: "を (wo) marks what you watch (direct object)." },
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
        // Things & places
        { kana: "つくえ", romaji: "tsukue", english: "desk", category: "things" },
        { kana: "いす", romaji: "isu", english: "chair", category: "things" },
        { kana: "ねこ", romaji: "neko", english: "cat", category: "animals" },
        { kana: "いぬ", romaji: "inu", english: "dog", category: "animals" },
        { kana: "テレビ", romaji: "terebi", english: "television", category: "things" },
        { kana: "でんわ", romaji: "denwa", english: "telephone", category: "things" },
        // Past tense markers (conceptual)
        { kana: "きのう", romaji: "kinou", english: "yesterday", category: "time" },
        { kana: "せんしゅう", romaji: "senshuu", english: "last week", category: "time" },
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
      ],

      grammarFills: [
        { sentence: "つくえのうえにほん____あります。", correct_answer: "が", options: ["が", "は", "を", "に"], explanation: "が (ga) marks the subject in existence sentences with あります/います." },
        { sentence: "いすのした____ねこがいます。", correct_answer: "に", options: ["に", "で", "を", "が"], explanation: "に (ni) marks the location in existence sentences." },
        { sentence: "ごはんをたべ____。", correct_answer: "ました", options: ["ました", "ます", "ません", "ませんでした"], explanation: "ました is the past affirmative form of ます verbs." },
        { sentence: "きのう____にちようびでした。", correct_answer: "は", options: ["は", "が", "を", "に"], explanation: "は (wa) marks the topic 'yesterday.'" },
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
        // な-adjectives
        { kana: "しずか", romaji: "shizuka", english: "quiet", category: "na-adjectives" },
        { kana: "にぎやか", romaji: "nigiyaka", english: "lively; bustling", category: "na-adjectives" },
        { kana: "きれい", romaji: "kirei", english: "beautiful; clean", category: "na-adjectives" },
        { kana: "げんき", romaji: "genki", english: "healthy; energetic", category: "na-adjectives" },
        { kana: "すき", romaji: "suki", english: "like; fond of", category: "na-adjectives" },
        { kana: "きらい", romaji: "kirai", english: "dislike; hate", category: "na-adjectives" },
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
      ],

      sentences: [
        { japanese: "このほんはおもしろいです", romaji: "kono hon wa omoshiroi desu", english: "This book is interesting.", difficulty: 1 },
        { japanese: "にほんごはむずかしいです", romaji: "nihongo wa muzukashii desu", english: "Japanese is difficult.", difficulty: 1 },
        { japanese: "おすしがすきです", romaji: "osushi ga suki desu", english: "I like sushi.", difficulty: 1 },
        { japanese: "このまちはしずかです", romaji: "kono machi wa shizuka desu", english: "This town is quiet.", difficulty: 1 },
        { japanese: "あたらしいかばんがほしいです", romaji: "atarashii kaban ga hoshii desu", english: "I want a new bag.", difficulty: 2 },
        { japanese: "てんきはいいです", romaji: "tenki wa ii desu", english: "The weather is good.", difficulty: 1 },
      ],

      grammarFills: [
        { sentence: "おすし____すきです。", correct_answer: "が", options: ["が", "を", "は", "に"], explanation: "が (ga) marks the object of すき (like/love)." },
        { sentence: "このほんはおもしろ____です。", correct_answer: "い", options: ["い", "な", "く", "さ"], explanation: "い-adjectives keep their い before です." },
        { sentence: "このまちはしずか____です。", correct_answer: " ", options: [" ", "な", "い", "く"], explanation: "な-adjectives drop な before です (しずかです)." },
        { sentence: "にく____きらいです。", correct_answer: "が", options: ["が", "を", "は", "に"], explanation: "が (ga) marks the object of きらい (dislike)." },
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
        // Te-form verbs (shown in dictionary/masu form, te-form is grammar)
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
        // Things used with te-form
        { kana: "まど", romaji: "mado", english: "window", category: "things" },
        { kana: "ドア", romaji: "doa", english: "door", category: "things" },
        { kana: "でんき", romaji: "denki", english: "electricity; light", category: "things" },
        { kana: "しゃしん", romaji: "shashin", english: "photo; photograph", category: "things" },
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
        { kana: "めがね", romaji: "megane", english: "glasses", category: "things" },
        { kana: "ぼうし", romaji: "boushi", english: "hat; cap", category: "things" },
        { kana: "シャツ", romaji: "shatsu", english: "shirt", category: "things" },
        { kana: "くつ", romaji: "kutsu", english: "shoes", category: "things" },
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
      ],

      sentences: [
        { japanese: "いまべんきょうしています", romaji: "ima benkyou shite imasu", english: "I am studying right now.", difficulty: 2 },
        { japanese: "けっこんしています", romaji: "kekkon shite imasu", english: "I am married.", difficulty: 1 },
        { japanese: "とうきょうにすんでいます", romaji: "toukyou ni sunde imasu", english: "I live in Tokyo.", difficulty: 1 },
        { japanese: "めがねをかけています", romaji: "megane wo kakete imasu", english: "He/She is wearing glasses.", difficulty: 2 },
        { japanese: "ひるごはんをたべにいきます", romaji: "hirugohan wo tabe ni ikimasu", english: "I'm going to eat lunch.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "いまべんきょう____います。", correct_answer: "して", options: ["して", "する", "した", "します"], explanation: "Te-form + います = progressive action." },
        { sentence: "とうきょう____すんでいます。", correct_answer: "に", options: ["に", "で", "を", "は"], explanation: "に (ni) marks the place where someone lives." },
      ],

      sentenceBuilds: [
        { english: "I am studying right now.", words: ["いま", "べんきょうしています"], correct_answer: "いまべんきょうしています", explanation: "いま (ima — 'right now') → べんきょうしています (benkyou shite imasu — 'am studying'). ています means an action is happening right now, like English '-ing.'" },
        { english: "I live in Tokyo.", words: ["とうきょうに", "すんでいます"], correct_answer: "とうきょうにすんでいます", explanation: "とうきょうに (toukyou ni — 'in Tokyo' + location marker) → すんでいます (sunde imasu — 'am living'). Some verbs use ています for ongoing states, not just actions in progress." },
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
        { kana: "あめ", romaji: "ame", english: "rain", category: "nature" },
        { kana: "ゆき", romaji: "yuki", english: "snow", category: "nature" },
        { kana: "てんき", romaji: "tenki", english: "weather", category: "nature" },
        { kana: "うた", romaji: "uta", english: "song", category: "things" },
        { kana: "うたいます", romaji: "utaimasu", english: "to sing", category: "verbs" },
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
      ],

      sentences: [
        { japanese: "あしたあめがふるとおもいます", romaji: "ashita ame ga furu to omoimasu", english: "I think it will rain tomorrow.", difficulty: 2 },
        { japanese: "ともだちがにほんにいくといっていました", romaji: "tomodachi ga nihon ni iku to itte imashita", english: "My friend said they're going to Japan.", difficulty: 2 },
        { japanese: "にほんごはおもしろいとおもいます", romaji: "nihongo wa omoshiroi to omoimasu", english: "I think Japanese is interesting.", difficulty: 2 },
        { japanese: "ここでたばこをすわないでください", romaji: "koko de tabako wo suwanaide kudasai", english: "Please don't smoke here.", difficulty: 2 },
        { japanese: "えいがをみるのがすきです", romaji: "eiga wo miru no ga suki desu", english: "I like watching movies.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "あしたあめがふる____おもいます。", correct_answer: "と", options: ["と", "が", "を", "に"], explanation: "と connects the quoted thought to おもいます." },
        { sentence: "ここでたばこをすわない____ください。", correct_answer: "で", options: ["で", "て", "に", "を"], explanation: "ない + でください = 'please don't.'" },
      ],

      sentenceBuilds: [
        { english: "I think it will rain tomorrow.", words: ["あしたあめがふると", "おもいます"], correct_answer: "あしたあめがふるとおもいます", explanation: "あしたあめがふると (ashita ame ga furu to — 'tomorrow rain will fall' + quotation marker) → おもいます (omoimasu — 'I think'). と connects what you think to おもいます. The thought goes first." },
        { english: "I think Japanese is interesting.", words: ["にほんごはおもしろいと", "おもいます"], correct_answer: "にほんごはおもしろいとおもいます", explanation: "にほんごはおもしろいと (nihongo wa omoshiroi to — 'Japanese is interesting' + quotation marker) → おもいます (omoimasu — 'I think'). Same pattern: [your opinion]とおもいます." },
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
        { kana: "りょうり", romaji: "ryouri", english: "cooking; cuisine", category: "food" },
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
      ],

      sentences: [
        { japanese: "きのうかったほんはおもしろいです", romaji: "kinou katta hon wa omoshiroi desu", english: "The book I bought yesterday is interesting.", difficulty: 2 },
        { japanese: "にほんごをおしえているせんせいはやまださんです", romaji: "nihongo wo oshiete iru sensei wa yamada-san desu", english: "The teacher who teaches Japanese is Mr./Ms. Yamada.", difficulty: 2 },
        { japanese: "まだひるごはんをたべていません", romaji: "mada hirugohan wo tabete imasen", english: "I haven't eaten lunch yet.", difficulty: 2 },
        { japanese: "きのうあったともだちはアメリカじんです", romaji: "kinou atta tomodachi wa amerikajin desu", english: "The friend I met yesterday is American.", difficulty: 2 },
        { japanese: "ははがつくったりょうりはおいしいです", romaji: "haha ga tsukutta ryouri wa oishii desu", english: "The food my mother made is delicious.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "まだひるごはんをたべて____。", correct_answer: "いません", options: ["いません", "います", "ました", "ません"], explanation: "まだ + ていません = 'haven't yet.'" },
        { sentence: "きのう____ほんはおもしろいです。", correct_answer: "かった", options: ["かった", "かう", "かいます", "かって"], explanation: "Short past form (かった) before a noun qualifies it." },
      ],

      sentenceBuilds: [
        { english: "I haven't eaten lunch yet.", words: ["まだ", "ひるごはんを", "たべていません"], correct_answer: "まだひるごはんをたべていません", explanation: "まだ (mada — 'not yet') → ひるごはんを (hirugohan wo — 'lunch' + object marker) → たべていません (tabete imasen — 'haven't eaten'). まだ + ていません = 'haven't done something yet.'" },
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
        { kana: "はる", romaji: "haru", english: "spring", category: "seasons" },
        { kana: "なつ", romaji: "natsu", english: "summer", category: "seasons" },
        { kana: "あき", romaji: "aki", english: "autumn; fall", category: "seasons" },
        { kana: "ふゆ", romaji: "fuyu", english: "winter", category: "seasons" },
        { kana: "つもり", romaji: "tsumori", english: "intention; plan", category: "grammar_words" },
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
      ],

      sentences: [
        { japanese: "にほんのほうがアメリカよりちいさいです", romaji: "nihon no hou ga amerika yori chiisai desu", english: "Japan is smaller than America.", difficulty: 2 },
        { japanese: "きせつのなかではるがいちばんすきです", romaji: "kisetsu no naka de haru ga ichiban suki desu", english: "Among the seasons, I like spring the most.", difficulty: 2 },
        { japanese: "あしたべんきょうするつもりです", romaji: "ashita benkyou suru tsumori desu", english: "I intend to study tomorrow.", difficulty: 2 },
        { japanese: "コーヒーとおちゃとどちらがすきですか", romaji: "koohii to ocha to dochira ga suki desu ka", english: "Which do you like better, coffee or tea?", difficulty: 2 },
        { japanese: "コーヒーのほうがすきです", romaji: "koohii no hou ga suki desu", english: "I like coffee better.", difficulty: 2 },
      ],

      grammarFills: [
        { sentence: "にほん____ほうがアメリカよりちいさいです。", correct_answer: "の", options: ["の", "が", "は", "を"], explanation: "のほうが marks the item being compared favorably." },
        { sentence: "きせつのなか____はるがいちばんすきです。", correct_answer: "で", options: ["で", "に", "は", "が"], explanation: "のなかで defines the group for superlative comparison." },
      ],

      sentenceBuilds: [
        { english: "I intend to study tomorrow.", words: ["あした", "べんきょうする", "つもりです"], correct_answer: "あしたべんきょうするつもりです", explanation: "あした (ashita — 'tomorrow') → べんきょうする (benkyou suru — 'study', casual form) → つもりです (tsumori desu — 'intend to'). つもりです expresses a plan you've decided on." },
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
        { kana: "やすみ", romaji: "yasumi", english: "day off; holiday", category: "time" },
        { kana: "えいが", romaji: "eiga", english: "movie", category: "things" },
        { kana: "おんがく", romaji: "ongaku", english: "music", category: "things" },
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
      ],

      grammarFills: [
        { sentence: "にほんにいき____です。", correct_answer: "たい", options: ["たい", "ます", "ました", "ません"], explanation: "Verb stem + たい = 'want to.'" },
        { sentence: "すしをたべた____があります。", correct_answer: "こと", options: ["こと", "もの", "ところ", "とき"], explanation: "たことがある = 'have the experience of.'" },
      ],

      sentenceBuilds: [
        { english: "I want to go to Japan.", words: ["にほんに", "いきたいです"], correct_answer: "にほんにいきたいです", explanation: "にほんに (nihon ni — 'to Japan' + direction marker) → いきたいです (ikitai desu — 'want to go'). たい on a verb stem = 'want to.' Like adding 'want to' before any verb." },
        { english: "I have eaten sushi before.", words: ["すしを", "たべたことが", "あります"], correct_answer: "すしをたべたことがあります", explanation: "すしを (sushi wo — 'sushi' + object marker) → たべたことが (tabeta koto ga — 'the experience of having eaten') → あります (arimasu — 'exists'). ことがあります literally means 'the experience exists.'" },
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
        { kana: "あたま", romaji: "atama", english: "head", category: "body" },
        { kana: "おなか", romaji: "onaka", english: "stomach", category: "body" },
        { kana: "くすり", romaji: "kusuri", english: "medicine", category: "things" },
        { kana: "びょうき", romaji: "byouki", english: "illness; sick", category: "health" },
        { kana: "しけん", romaji: "shiken", english: "exam; test", category: "school" },
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
      ],

      grammarFills: [
        { sentence: "あたまがいたい____です。", correct_answer: "ん", options: ["ん", "の", "な", "だ"], explanation: "んです adds explanatory tone." },
        { sentence: "くすりをのんだ____がいいです。", correct_answer: "ほう", options: ["ほう", "かた", "もの", "こと"], explanation: "ほうがいいです = 'it would be better to.'" },
      ],

      sentenceBuilds: [
        { english: "You'd better take medicine.", words: ["くすりを", "のんだほうが", "いいです"], correct_answer: "くすりをのんだほうがいいです", explanation: "くすりを (kusuri wo — 'medicine' + object marker) → のんだほうが (nonda hou ga — 'the option of having taken') → いいです (ii desu — 'is good'). ほうがいいです literally means 'the direction of doing X is better.'" },
        { english: "I ate too much.", words: ["たべ", "すぎました"], correct_answer: "たべすぎました", explanation: "たべ (tabe — 'eat', verb stem) → すぎました (sugimashita — 'did too much'). すぎる attaches to a verb stem and means 'overdid it.' のみすぎ = drank too much, はなしすぎ = talked too much." },
      ],
    },
  ],
};

export default n5Content;
