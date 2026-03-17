/**
 * Katakana Learning Groups — loanword-based progressive learning
 *
 * 12 groups following the traditional kana chart order.
 * Each group introduces new characters and words that use only
 * characters learned so far (cumulative).
 *
 * Words are primarily English loanwords written in katakana —
 * learners can decode familiar English words, making it fun.
 *
 * Each character includes a `hiragana` field showing its twin.
 * The long vowel mark ー is introduced in Group 2 (first needed).
 * The small ッ (double consonant) appears naturally in words once
 * its parent ツ is introduced in Group 4.
 */

const katakanaGroups = [
  // ─── Group 1: Vowels ───────────────────────────────
  {
    id: 1,
    name: "Vowels",
    characters: [
      { kana: "ア", romaji: "a", hiragana: "あ" },
      { kana: "イ", romaji: "i", hiragana: "い" },
      { kana: "ウ", romaji: "u", hiragana: "う" },
      { kana: "エ", romaji: "e", hiragana: "え" },
      { kana: "オ", romaji: "o", hiragana: "お" },
    ],
    words: [
      { kana: "アイ", romaji: "ai", english: "love / indigo", breakdown: [{ char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }] },
      { kana: "アウ", romaji: "au", english: "(practice: a-u)", breakdown: [{ char: "ア", romaji: "a" }, { char: "ウ", romaji: "u" }] },
      { kana: "オイ", romaji: "oi", english: "hey!", breakdown: [{ char: "オ", romaji: "o" }, { char: "イ", romaji: "i" }] },
      { kana: "イエ", romaji: "ie", english: "(practice: i-e)", breakdown: [{ char: "イ", romaji: "i" }, { char: "エ", romaji: "e" }] },
    ],
  },

  // ─── Group 2: K-row ────────────────────────────────
  {
    id: 2,
    name: "K-row",
    characters: [
      { kana: "カ", romaji: "ka", hiragana: "か" },
      { kana: "キ", romaji: "ki", hiragana: "き" },
      { kana: "ク", romaji: "ku", hiragana: "く" },
      { kana: "ケ", romaji: "ke", hiragana: "け" },
      { kana: "コ", romaji: "ko", hiragana: "こ" },
      { kana: "ー", romaji: "ー", hiragana: "（long vowel mark）" },
    ],
    words: [
      { kana: "カキ", romaji: "kaki", english: "persimmon", breakdown: [{ char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }] },
      { kana: "コーク", romaji: "kooku", english: "coke", breakdown: [{ char: "コ", romaji: "ko" }, { char: "ー", romaji: "o" }, { char: "ク", romaji: "ku" }] },
      { kana: "ココア", romaji: "kokoa", english: "cocoa", breakdown: [{ char: "コ", romaji: "ko" }, { char: "コ", romaji: "ko" }, { char: "ア", romaji: "a" }] },
      { kana: "ケーキ", romaji: "keeki", english: "cake", breakdown: [{ char: "ケ", romaji: "ke" }, { char: "ー", romaji: "e" }, { char: "キ", romaji: "ki" }] },
      { kana: "コイ", romaji: "koi", english: "koi fish", breakdown: [{ char: "コ", romaji: "ko" }, { char: "イ", romaji: "i" }] },
      { kana: "カー", romaji: "kaa", english: "car", breakdown: [{ char: "カ", romaji: "ka" }, { char: "ー", romaji: "a" }] },
    ],
  },

  // ─── Group 3: S-row ────────────────────────────────
  {
    id: 3,
    name: "S-row",
    characters: [
      { kana: "サ", romaji: "sa", hiragana: "さ" },
      { kana: "シ", romaji: "shi", hiragana: "し" },
      { kana: "ス", romaji: "su", hiragana: "す" },
      { kana: "セ", romaji: "se", hiragana: "せ" },
      { kana: "ソ", romaji: "so", hiragana: "そ" },
    ],
    words: [
      { kana: "スキー", romaji: "sukii", english: "skiing", breakdown: [{ char: "ス", romaji: "su" }, { char: "キ", romaji: "ki" }, { char: "ー", romaji: "i" }] },
      { kana: "ソース", romaji: "soosu", english: "sauce", breakdown: [{ char: "ソ", romaji: "so" }, { char: "ー", romaji: "o" }, { char: "ス", romaji: "su" }] },
      { kana: "キス", romaji: "kisu", english: "kiss", breakdown: [{ char: "キ", romaji: "ki" }, { char: "ス", romaji: "su" }] },
      { kana: "コース", romaji: "koosu", english: "course", breakdown: [{ char: "コ", romaji: "ko" }, { char: "ー", romaji: "o" }, { char: "ス", romaji: "su" }] },
      { kana: "ケース", romaji: "keesu", english: "case", breakdown: [{ char: "ケ", romaji: "ke" }, { char: "ー", romaji: "e" }, { char: "ス", romaji: "su" }] },
      { kana: "スイカ", romaji: "suika", english: "watermelon", breakdown: [{ char: "ス", romaji: "su" }, { char: "イ", romaji: "i" }, { char: "カ", romaji: "ka" }] },
    ],
  },

  // ─── Group 4: T-row ────────────────────────────────
  {
    id: 4,
    name: "T-row",
    characters: [
      { kana: "タ", romaji: "ta", hiragana: "た" },
      { kana: "チ", romaji: "chi", hiragana: "ち" },
      { kana: "ツ", romaji: "tsu", hiragana: "つ" },
      { kana: "テ", romaji: "te", hiragana: "て" },
      { kana: "ト", romaji: "to", hiragana: "と" },
    ],
    words: [
      { kana: "タクシー", romaji: "takushii", english: "taxi", breakdown: [{ char: "タ", romaji: "ta" }, { char: "ク", romaji: "ku" }, { char: "シ", romaji: "shi" }, { char: "ー", romaji: "i" }] },
      { kana: "テスト", romaji: "tesuto", english: "test", breakdown: [{ char: "テ", romaji: "te" }, { char: "ス", romaji: "su" }, { char: "ト", romaji: "to" }] },
      { kana: "トースト", romaji: "toosuto", english: "toast", breakdown: [{ char: "ト", romaji: "to" }, { char: "ー", romaji: "o" }, { char: "ス", romaji: "su" }, { char: "ト", romaji: "to" }] },
      { kana: "カット", romaji: "katto", english: "cut", breakdown: [{ char: "カ", romaji: "ka" }, { char: "ッ", romaji: "(double)" }, { char: "ト", romaji: "to" }] },
      { kana: "スーツ", romaji: "suutsu", english: "suit", breakdown: [{ char: "ス", romaji: "su" }, { char: "ー", romaji: "u" }, { char: "ツ", romaji: "tsu" }] },
      { kana: "セット", romaji: "setto", english: "set", breakdown: [{ char: "セ", romaji: "se" }, { char: "ッ", romaji: "(double)" }, { char: "ト", romaji: "to" }] },
      { kana: "コスト", romaji: "kosuto", english: "cost", breakdown: [{ char: "コ", romaji: "ko" }, { char: "ス", romaji: "su" }, { char: "ト", romaji: "to" }] },
    ],
  },

  // ─── Group 5: N-row ────────────────────────────────
  {
    id: 5,
    name: "N-row",
    characters: [
      { kana: "ナ", romaji: "na", hiragana: "な" },
      { kana: "ニ", romaji: "ni", hiragana: "に" },
      { kana: "ヌ", romaji: "nu", hiragana: "ぬ" },
      { kana: "ネ", romaji: "ne", hiragana: "ね" },
      { kana: "ノ", romaji: "no", hiragana: "の" },
    ],
    words: [
      { kana: "ナイス", romaji: "naisu", english: "nice", breakdown: [{ char: "ナ", romaji: "na" }, { char: "イ", romaji: "i" }, { char: "ス", romaji: "su" }] },
      { kana: "テニス", romaji: "tenisu", english: "tennis", breakdown: [{ char: "テ", romaji: "te" }, { char: "ニ", romaji: "ni" }, { char: "ス", romaji: "su" }] },
      { kana: "ノート", romaji: "nooto", english: "notebook", breakdown: [{ char: "ノ", romaji: "no" }, { char: "ー", romaji: "o" }, { char: "ト", romaji: "to" }] },
      { kana: "ネクタイ", romaji: "nekutai", english: "necktie", breakdown: [{ char: "ネ", romaji: "ne" }, { char: "ク", romaji: "ku" }, { char: "タ", romaji: "ta" }, { char: "イ", romaji: "i" }] },
      { kana: "カヌー", romaji: "kanuu", english: "canoe", breakdown: [{ char: "カ", romaji: "ka" }, { char: "ヌ", romaji: "nu" }, { char: "ー", romaji: "u" }] },
      { kana: "ナッツ", romaji: "nattsu", english: "nuts", breakdown: [{ char: "ナ", romaji: "na" }, { char: "ッ", romaji: "(double)" }, { char: "ツ", romaji: "tsu" }] },
    ],
  },

  // ─── Group 6: H-row ────────────────────────────────
  {
    id: 6,
    name: "H-row",
    characters: [
      { kana: "ハ", romaji: "ha", hiragana: "は" },
      { kana: "ヒ", romaji: "hi", hiragana: "ひ" },
      { kana: "フ", romaji: "fu", hiragana: "ふ" },
      { kana: "ヘ", romaji: "he", hiragana: "へ" },
      { kana: "ホ", romaji: "ho", hiragana: "ほ" },
    ],
    words: [
      { kana: "ナイフ", romaji: "naifu", english: "knife", breakdown: [{ char: "ナ", romaji: "na" }, { char: "イ", romaji: "i" }, { char: "フ", romaji: "fu" }] },
      { kana: "コーヒー", romaji: "koohii", english: "coffee", breakdown: [{ char: "コ", romaji: "ko" }, { char: "ー", romaji: "o" }, { char: "ヒ", romaji: "hi" }, { char: "ー", romaji: "i" }] },
      { kana: "ハイキ", romaji: "haiki", english: "exhaust", breakdown: [{ char: "ハ", romaji: "ha" }, { char: "イ", romaji: "i" }, { char: "キ", romaji: "ki" }] },
      { kana: "ヘアー", romaji: "heaa", english: "hair", breakdown: [{ char: "ヘ", romaji: "he" }, { char: "ア", romaji: "a" }, { char: "ー", romaji: "a" }] },
      { kana: "ホース", romaji: "hoosu", english: "hose", breakdown: [{ char: "ホ", romaji: "ho" }, { char: "ー", romaji: "o" }, { char: "ス", romaji: "su" }] },
      { kana: "ソファー", romaji: "sofaa", english: "sofa", breakdown: [{ char: "ソ", romaji: "so" }, { char: "ファ", romaji: "fa" }, { char: "ー", romaji: "a" }] },
      { kana: "フォーク", romaji: "fooku", english: "fork", breakdown: [{ char: "フォ", romaji: "fo" }, { char: "ー", romaji: "o" }, { char: "ク", romaji: "ku" }] },
    ],
  },

  // ─── Group 7: M-row ────────────────────────────────
  {
    id: 7,
    name: "M-row",
    characters: [
      { kana: "マ", romaji: "ma", hiragana: "ま" },
      { kana: "ミ", romaji: "mi", hiragana: "み" },
      { kana: "ム", romaji: "mu", hiragana: "む" },
      { kana: "メ", romaji: "me", hiragana: "め" },
      { kana: "モ", romaji: "mo", hiragana: "も" },
    ],
    words: [
      { kana: "メモ", romaji: "memo", english: "memo", breakdown: [{ char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" }] },
      { kana: "マスク", romaji: "masuku", english: "mask", breakdown: [{ char: "マ", romaji: "ma" }, { char: "ス", romaji: "su" }, { char: "ク", romaji: "ku" }] },
      { kana: "ハム", romaji: "hamu", english: "ham", breakdown: [{ char: "ハ", romaji: "ha" }, { char: "ム", romaji: "mu" }] },
      { kana: "トマト", romaji: "tomato", english: "tomato", breakdown: [{ char: "ト", romaji: "to" }, { char: "マ", romaji: "ma" }, { char: "ト", romaji: "to" }] },
      { kana: "ミス", romaji: "misu", english: "miss / mistake", breakdown: [{ char: "ミ", romaji: "mi" }, { char: "ス", romaji: "su" }] },
      { kana: "ホーム", romaji: "hoomu", english: "platform / home", breakdown: [{ char: "ホ", romaji: "ho" }, { char: "ー", romaji: "o" }, { char: "ム", romaji: "mu" }] },
      { kana: "テーマ", romaji: "teema", english: "theme", breakdown: [{ char: "テ", romaji: "te" }, { char: "ー", romaji: "e" }, { char: "マ", romaji: "ma" }] },
    ],
  },

  // ─── Group 8: Y-row + R-row ────────────────────────
  {
    id: 8,
    name: "Y + R rows",
    characters: [
      { kana: "ヤ", romaji: "ya", hiragana: "や" },
      { kana: "ユ", romaji: "yu", hiragana: "ゆ" },
      { kana: "ヨ", romaji: "yo", hiragana: "よ" },
      { kana: "ラ", romaji: "ra", hiragana: "ら" },
      { kana: "リ", romaji: "ri", hiragana: "り" },
      { kana: "ル", romaji: "ru", hiragana: "る" },
      { kana: "レ", romaji: "re", hiragana: "れ" },
      { kana: "ロ", romaji: "ro", hiragana: "ろ" },
    ],
    words: [
      { kana: "ホテル", romaji: "hoteru", english: "hotel", breakdown: [{ char: "ホ", romaji: "ho" }, { char: "テ", romaji: "te" }, { char: "ル", romaji: "ru" }] },
      { kana: "カレー", romaji: "karee", english: "curry", breakdown: [{ char: "カ", romaji: "ka" }, { char: "レ", romaji: "re" }, { char: "ー", romaji: "e" }] },
      { kana: "ルール", romaji: "ruuru", english: "rule", breakdown: [{ char: "ル", romaji: "ru" }, { char: "ー", romaji: "u" }, { char: "ル", romaji: "ru" }] },
      { kana: "ミルク", romaji: "miruku", english: "milk", breakdown: [{ char: "ミ", romaji: "mi" }, { char: "ル", romaji: "ru" }, { char: "ク", romaji: "ku" }] },
      { kana: "タオル", romaji: "taoru", english: "towel", breakdown: [{ char: "タ", romaji: "ta" }, { char: "オ", romaji: "o" }, { char: "ル", romaji: "ru" }] },
      { kana: "ロッカー", romaji: "rokkaa", english: "locker", breakdown: [{ char: "ロ", romaji: "ro" }, { char: "ッ", romaji: "(double)" }, { char: "カ", romaji: "ka" }, { char: "ー", romaji: "a" }] },
      { kana: "エリア", romaji: "eria", english: "area", breakdown: [{ char: "エ", romaji: "e" }, { char: "リ", romaji: "ri" }, { char: "ア", romaji: "a" }] },
      { kana: "ユニーク", romaji: "yuniiku", english: "unique", breakdown: [{ char: "ユ", romaji: "yu" }, { char: "ニ", romaji: "ni" }, { char: "ー", romaji: "i" }, { char: "ク", romaji: "ku" }] },
    ],
  },

  // ─── Group 9: W-row + ン ───────────────────────────
  {
    id: 9,
    name: "W-row + ン",
    characters: [
      { kana: "ワ", romaji: "wa", hiragana: "わ" },
      { kana: "ヲ", romaji: "wo", hiragana: "を" },
      { kana: "ン", romaji: "n", hiragana: "ん" },
    ],
    words: [
      { kana: "ワイン", romaji: "wain", english: "wine", breakdown: [{ char: "ワ", romaji: "wa" }, { char: "イ", romaji: "i" }, { char: "ン", romaji: "n" }] },
      { kana: "レストラン", romaji: "resutoran", english: "restaurant", breakdown: [{ char: "レ", romaji: "re" }, { char: "ス", romaji: "su" }, { char: "ト", romaji: "to" }, { char: "ラ", romaji: "ra" }, { char: "ン", romaji: "n" }] },
      { kana: "ラーメン", romaji: "raamen", english: "ramen", breakdown: [{ char: "ラ", romaji: "ra" }, { char: "ー", romaji: "a" }, { char: "メ", romaji: "me" }, { char: "ン", romaji: "n" }] },
      { kana: "レモン", romaji: "remon", english: "lemon", breakdown: [{ char: "レ", romaji: "re" }, { char: "モ", romaji: "mo" }, { char: "ン", romaji: "n" }] },
      { kana: "サロン", romaji: "saron", english: "salon", breakdown: [{ char: "サ", romaji: "sa" }, { char: "ロ", romaji: "ro" }, { char: "ン", romaji: "n" }] },
      { kana: "マラソン", romaji: "marason", english: "marathon", breakdown: [{ char: "マ", romaji: "ma" }, { char: "ラ", romaji: "ra" }, { char: "ソ", romaji: "so" }, { char: "ン", romaji: "n" }] },
      { kana: "ワンルーム", romaji: "wanruumu", english: "studio apartment", breakdown: [{ char: "ワ", romaji: "wa" }, { char: "ン", romaji: "n" }, { char: "ル", romaji: "ru" }, { char: "ー", romaji: "u" }, { char: "ム", romaji: "mu" }] },
    ],
  },

  // ─── Group 10: Dakuten (voiced) ────────────────────
  {
    id: 10,
    name: "Dakuten ゛",
    characters: [
      { kana: "ガ", romaji: "ga", hiragana: "が" }, { kana: "ギ", romaji: "gi", hiragana: "ぎ" }, { kana: "グ", romaji: "gu", hiragana: "ぐ" }, { kana: "ゲ", romaji: "ge", hiragana: "げ" }, { kana: "ゴ", romaji: "go", hiragana: "ご" },
      { kana: "ザ", romaji: "za", hiragana: "ざ" }, { kana: "ジ", romaji: "ji", hiragana: "じ" }, { kana: "ズ", romaji: "zu", hiragana: "ず" }, { kana: "ゼ", romaji: "ze", hiragana: "ぜ" }, { kana: "ゾ", romaji: "zo", hiragana: "ぞ" },
      { kana: "ダ", romaji: "da", hiragana: "だ" }, { kana: "ヂ", romaji: "ji", hiragana: "ぢ" }, { kana: "ヅ", romaji: "zu", hiragana: "づ" }, { kana: "デ", romaji: "de", hiragana: "で" }, { kana: "ド", romaji: "do", hiragana: "ど" },
      { kana: "バ", romaji: "ba", hiragana: "ば" }, { kana: "ビ", romaji: "bi", hiragana: "び" }, { kana: "ブ", romaji: "bu", hiragana: "ぶ" }, { kana: "ベ", romaji: "be", hiragana: "べ" }, { kana: "ボ", romaji: "bo", hiragana: "ぼ" },
    ],
    words: [
      { kana: "ビール", romaji: "biiru", english: "beer", breakdown: [{ char: "ビ", romaji: "bi" }, { char: "ー", romaji: "i" }, { char: "ル", romaji: "ru" }] },
      { kana: "ゲーム", romaji: "geemu", english: "game", breakdown: [{ char: "ゲ", romaji: "ge" }, { char: "ー", romaji: "e" }, { char: "ム", romaji: "mu" }] },
      { kana: "ドア", romaji: "doa", english: "door", breakdown: [{ char: "ド", romaji: "do" }, { char: "ア", romaji: "a" }] },
      { kana: "バス", romaji: "basu", english: "bus", breakdown: [{ char: "バ", romaji: "ba" }, { char: "ス", romaji: "su" }] },
      { kana: "ガラス", romaji: "garasu", english: "glass", breakdown: [{ char: "ガ", romaji: "ga" }, { char: "ラ", romaji: "ra" }, { char: "ス", romaji: "su" }] },
      { kana: "デザート", romaji: "dezaato", english: "dessert", breakdown: [{ char: "デ", romaji: "de" }, { char: "ザ", romaji: "za" }, { char: "ー", romaji: "a" }, { char: "ト", romaji: "to" }] },
      { kana: "ギター", romaji: "gitaa", english: "guitar", breakdown: [{ char: "ギ", romaji: "gi" }, { char: "タ", romaji: "ta" }, { char: "ー", romaji: "a" }] },
      { kana: "ベッド", romaji: "beddo", english: "bed", breakdown: [{ char: "ベ", romaji: "be" }, { char: "ッ", romaji: "(double)" }, { char: "ド", romaji: "do" }] },
    ],
  },

  // ─── Group 11: Handakuten (P-row) ──────────────────
  {
    id: 11,
    name: "Handakuten ゜",
    characters: [
      { kana: "パ", romaji: "pa", hiragana: "ぱ" },
      { kana: "ピ", romaji: "pi", hiragana: "ぴ" },
      { kana: "プ", romaji: "pu", hiragana: "ぷ" },
      { kana: "ペ", romaji: "pe", hiragana: "ぺ" },
      { kana: "ポ", romaji: "po", hiragana: "ぽ" },
    ],
    words: [
      { kana: "パソコン", romaji: "pasokon", english: "PC / computer", breakdown: [{ char: "パ", romaji: "pa" }, { char: "ソ", romaji: "so" }, { char: "コ", romaji: "ko" }, { char: "ン", romaji: "n" }] },
      { kana: "スーパー", romaji: "suupaa", english: "supermarket", breakdown: [{ char: "ス", romaji: "su" }, { char: "ー", romaji: "u" }, { char: "パ", romaji: "pa" }, { char: "ー", romaji: "a" }] },
      { kana: "パン", romaji: "pan", english: "bread", breakdown: [{ char: "パ", romaji: "pa" }, { char: "ン", romaji: "n" }] },
      { kana: "ページ", romaji: "peeji", english: "page", breakdown: [{ char: "ペ", romaji: "pe" }, { char: "ー", romaji: "e" }, { char: "ジ", romaji: "ji" }] },
      { kana: "ピアノ", romaji: "piano", english: "piano", breakdown: [{ char: "ピ", romaji: "pi" }, { char: "ア", romaji: "a" }, { char: "ノ", romaji: "no" }] },
      { kana: "プール", romaji: "puuru", english: "pool", breakdown: [{ char: "プ", romaji: "pu" }, { char: "ー", romaji: "u" }, { char: "ル", romaji: "ru" }] },
      { kana: "スポーツ", romaji: "supootsu", english: "sports", breakdown: [{ char: "ス", romaji: "su" }, { char: "ポ", romaji: "po" }, { char: "ー", romaji: "o" }, { char: "ツ", romaji: "tsu" }] },
      { kana: "コップ", romaji: "koppu", english: "cup / glass", breakdown: [{ char: "コ", romaji: "ko" }, { char: "ッ", romaji: "(double)" }, { char: "プ", romaji: "pu" }] },
    ],
  },

  // ─── Group 12: Combos (small ya/yu/yo) ─────────────
  {
    id: 12,
    name: "Combos キャ・シャ・チャ",
    characters: [
      { kana: "キャ", romaji: "kya", hiragana: "きゃ" }, { kana: "キュ", romaji: "kyu", hiragana: "きゅ" }, { kana: "キョ", romaji: "kyo", hiragana: "きょ" },
      { kana: "シャ", romaji: "sha", hiragana: "しゃ" }, { kana: "シュ", romaji: "shu", hiragana: "しゅ" }, { kana: "ショ", romaji: "sho", hiragana: "しょ" },
      { kana: "チャ", romaji: "cha", hiragana: "ちゃ" }, { kana: "チュ", romaji: "chu", hiragana: "ちゅ" }, { kana: "チョ", romaji: "cho", hiragana: "ちょ" },
      { kana: "ニャ", romaji: "nya", hiragana: "にゃ" }, { kana: "ニュ", romaji: "nyu", hiragana: "にゅ" }, { kana: "ニョ", romaji: "nyo", hiragana: "にょ" },
      { kana: "ヒャ", romaji: "hya", hiragana: "ひゃ" }, { kana: "ヒュ", romaji: "hyu", hiragana: "ひゅ" }, { kana: "ヒョ", romaji: "hyo", hiragana: "ひょ" },
      { kana: "ミャ", romaji: "mya", hiragana: "みゃ" }, { kana: "ミュ", romaji: "myu", hiragana: "みゅ" }, { kana: "ミョ", romaji: "myo", hiragana: "みょ" },
      { kana: "リャ", romaji: "rya", hiragana: "りゃ" }, { kana: "リュ", romaji: "ryu", hiragana: "りゅ" }, { kana: "リョ", romaji: "ryo", hiragana: "りょ" },
      { kana: "ギャ", romaji: "gya", hiragana: "ぎゃ" }, { kana: "ギュ", romaji: "gyu", hiragana: "ぎゅ" }, { kana: "ギョ", romaji: "gyo", hiragana: "ぎょ" },
      { kana: "ジャ", romaji: "ja", hiragana: "じゃ" }, { kana: "ジュ", romaji: "ju", hiragana: "じゅ" }, { kana: "ジョ", romaji: "jo", hiragana: "じょ" },
      { kana: "ビャ", romaji: "bya", hiragana: "びゃ" }, { kana: "ビュ", romaji: "byu", hiragana: "びゅ" }, { kana: "ビョ", romaji: "byo", hiragana: "びょ" },
      { kana: "ピャ", romaji: "pya", hiragana: "ぴゃ" }, { kana: "ピュ", romaji: "pyu", hiragana: "ぴゅ" }, { kana: "ピョ", romaji: "pyo", hiragana: "ぴょ" },
    ],
    words: [
      { kana: "チョコレート", romaji: "chokoreeto", english: "chocolate", breakdown: [{ char: "チョ", romaji: "cho" }, { char: "コ", romaji: "ko" }, { char: "レ", romaji: "re" }, { char: "ー", romaji: "e" }, { char: "ト", romaji: "to" }] },
      { kana: "ジュース", romaji: "juusu", english: "juice", breakdown: [{ char: "ジュ", romaji: "ju" }, { char: "ー", romaji: "u" }, { char: "ス", romaji: "su" }] },
      { kana: "シャツ", romaji: "shatsu", english: "shirt", breakdown: [{ char: "シャ", romaji: "sha" }, { char: "ツ", romaji: "tsu" }] },
      { kana: "ニュース", romaji: "nyuusu", english: "news", breakdown: [{ char: "ニュ", romaji: "nyu" }, { char: "ー", romaji: "u" }, { char: "ス", romaji: "su" }] },
      { kana: "キャンプ", romaji: "kyanpu", english: "camp", breakdown: [{ char: "キャ", romaji: "kya" }, { char: "ン", romaji: "n" }, { char: "プ", romaji: "pu" }] },
      { kana: "ショッピング", romaji: "shoppingu", english: "shopping", breakdown: [{ char: "ショ", romaji: "sho" }, { char: "ッ", romaji: "(double)" }, { char: "ピ", romaji: "pi" }, { char: "ン", romaji: "n" }, { char: "グ", romaji: "gu" }] },
      { kana: "ジャム", romaji: "jamu", english: "jam", breakdown: [{ char: "ジャ", romaji: "ja" }, { char: "ム", romaji: "mu" }] },
      { kana: "メニュー", romaji: "menyuu", english: "menu", breakdown: [{ char: "メ", romaji: "me" }, { char: "ニュ", romaji: "nyu" }, { char: "ー", romaji: "u" }] },
    ],
  },
];

/** Confusable character pairs — introduced after both characters are learned. */
export const katakanaConfusablePairs = [
  { a: { kana: "シ", romaji: "shi" }, b: { kana: "ツ", romaji: "tsu" }, hint: "シ (shi) strokes flow left-to-right like a smile; ツ (tsu) strokes flow top-to-bottom like rain", availableAfterGroup: 4 },
  { a: { kana: "ソ", romaji: "so" }, b: { kana: "ン", romaji: "n" }, hint: "ソ (so) strokes go top-to-bottom; ン (n) strokes go left-to-right — same rule as ツ/シ", availableAfterGroup: 9 },
  { a: { kana: "ウ", romaji: "u" }, b: { kana: "ワ", romaji: "wa" }, hint: "ウ has a top dash; ワ does not", availableAfterGroup: 9 },
  { a: { kana: "ク", romaji: "ku" }, b: { kana: "タ", romaji: "ta" }, hint: "タ has a cross-stroke that ク lacks", availableAfterGroup: 4 },
  { a: { kana: "ヌ", romaji: "nu" }, b: { kana: "ス", romaji: "su" }, hint: "ヌ has a loop at the bottom; ス ends with a flick", availableAfterGroup: 5 },
  { a: { kana: "コ", romaji: "ko" }, b: { kana: "ユ", romaji: "yu" }, hint: "コ is closed on the right; ユ is open on the right", availableAfterGroup: 8 },
  { a: { kana: "ナ", romaji: "na" }, b: { kana: "メ", romaji: "me" }, hint: "ナ has a horizontal stroke on top; メ does not", availableAfterGroup: 7 },
  { a: { kana: "ハ", romaji: "ha" }, b: { kana: "ヘ", romaji: "he" }, hint: "ハ has two downward strokes; ヘ is a single peak like a mountain", availableAfterGroup: 6 },
  { a: { kana: "マ", romaji: "ma" }, b: { kana: "ム", romaji: "mu" }, hint: "マ has a horizontal bar; ム is angular like a tent", availableAfterGroup: 7 },
  { a: { kana: "チ", romaji: "chi" }, b: { kana: "テ", romaji: "te" }, hint: "チ curves right at the bottom; テ curves left", availableAfterGroup: 4 },
];

export default katakanaGroups;
