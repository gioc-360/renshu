/**
 * Hiragana Learning Groups — word-based progressive learning
 *
 * 12 groups following the traditional kana chart order.
 * Each group introduces new characters and words that use only
 * characters learned so far (cumulative).
 *
 * Words are the primary learning unit, not isolated characters.
 */

const hiraganaGroups = [
  // ─── Group 1: Vowels ───────────────────────────────
  {
    id: 1,
    name: "Vowels",
    characters: [
      { kana: "あ", romaji: "a" },
      { kana: "い", romaji: "i" },
      { kana: "う", romaji: "u" },
      { kana: "え", romaji: "e" },
      { kana: "お", romaji: "o" },
    ],
    words: [
      { kana: "あい", romaji: "ai", english: "love", breakdown: [{ char: "あ", romaji: "a" }, { char: "い", romaji: "i" }] },
      { kana: "あおい", romaji: "aoi", english: "blue", breakdown: [{ char: "あ", romaji: "a" }, { char: "お", romaji: "o" }, { char: "い", romaji: "i" }] },
      { kana: "いえ", romaji: "ie", english: "house", breakdown: [{ char: "い", romaji: "i" }, { char: "え", romaji: "e" }] },
      { kana: "うえ", romaji: "ue", english: "above", breakdown: [{ char: "う", romaji: "u" }, { char: "え", romaji: "e" }] },
    ],
  },

  // ─── Group 2: K-row ────────────────────────────────
  {
    id: 2,
    name: "K-row",
    characters: [
      { kana: "か", romaji: "ka" },
      { kana: "き", romaji: "ki" },
      { kana: "く", romaji: "ku" },
      { kana: "け", romaji: "ke" },
      { kana: "こ", romaji: "ko" },
    ],
    words: [
      { kana: "あき", romaji: "aki", english: "autumn", breakdown: [{ char: "あ", romaji: "a" }, { char: "き", romaji: "ki" }] },
      { kana: "いけ", romaji: "ike", english: "pond", breakdown: [{ char: "い", romaji: "i" }, { char: "け", romaji: "ke" }] },
      { kana: "えき", romaji: "eki", english: "station", breakdown: [{ char: "え", romaji: "e" }, { char: "き", romaji: "ki" }] },
      { kana: "かお", romaji: "kao", english: "face", breakdown: [{ char: "か", romaji: "ka" }, { char: "お", romaji: "o" }] },
      { kana: "きく", romaji: "kiku", english: "to listen", breakdown: [{ char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }] },
      { kana: "ここ", romaji: "koko", english: "here", breakdown: [{ char: "こ", romaji: "ko" }, { char: "こ", romaji: "ko" }] },
      { kana: "こえ", romaji: "koe", english: "voice", breakdown: [{ char: "こ", romaji: "ko" }, { char: "え", romaji: "e" }] },
    ],
  },

  // ─── Group 3: S-row ────────────────────────────────
  {
    id: 3,
    name: "S-row",
    characters: [
      { kana: "さ", romaji: "sa" },
      { kana: "し", romaji: "shi" },
      { kana: "す", romaji: "su" },
      { kana: "せ", romaji: "se" },
      { kana: "そ", romaji: "so" },
    ],
    words: [
      { kana: "あさ", romaji: "asa", english: "morning", breakdown: [{ char: "あ", romaji: "a" }, { char: "さ", romaji: "sa" }] },
      { kana: "あし", romaji: "ashi", english: "foot", breakdown: [{ char: "あ", romaji: "a" }, { char: "し", romaji: "shi" }] },
      { kana: "いす", romaji: "isu", english: "chair", breakdown: [{ char: "い", romaji: "i" }, { char: "す", romaji: "su" }] },
      { kana: "うそ", romaji: "uso", english: "lie", breakdown: [{ char: "う", romaji: "u" }, { char: "そ", romaji: "so" }] },
      { kana: "おかし", romaji: "okashi", english: "snack", breakdown: [{ char: "お", romaji: "o" }, { char: "か", romaji: "ka" }, { char: "し", romaji: "shi" }] },
      { kana: "すし", romaji: "sushi", english: "sushi", breakdown: [{ char: "す", romaji: "su" }, { char: "し", romaji: "shi" }] },
      { kana: "すき", romaji: "suki", english: "like", breakdown: [{ char: "す", romaji: "su" }, { char: "き", romaji: "ki" }] },
      { kana: "そこ", romaji: "soko", english: "there", breakdown: [{ char: "そ", romaji: "so" }, { char: "こ", romaji: "ko" }] },
    ],
  },

  // ─── Group 4: T-row ────────────────────────────────
  {
    id: 4,
    name: "T-row",
    characters: [
      { kana: "た", romaji: "ta" },
      { kana: "ち", romaji: "chi" },
      { kana: "つ", romaji: "tsu" },
      { kana: "て", romaji: "te" },
      { kana: "と", romaji: "to" },
    ],
    words: [
      { kana: "おと", romaji: "oto", english: "sound", breakdown: [{ char: "お", romaji: "o" }, { char: "と", romaji: "to" }] },
      { kana: "かた", romaji: "kata", english: "person (polite)", breakdown: [{ char: "か", romaji: "ka" }, { char: "た", romaji: "ta" }] },
      { kana: "きた", romaji: "kita", english: "north", breakdown: [{ char: "き", romaji: "ki" }, { char: "た", romaji: "ta" }] },
      { kana: "くち", romaji: "kuchi", english: "mouth", breakdown: [{ char: "く", romaji: "ku" }, { char: "ち", romaji: "chi" }] },
      { kana: "した", romaji: "shita", english: "below", breakdown: [{ char: "し", romaji: "shi" }, { char: "た", romaji: "ta" }] },
      { kana: "たかい", romaji: "takai", english: "expensive", breakdown: [{ char: "た", romaji: "ta" }, { char: "か", romaji: "ka" }, { char: "い", romaji: "i" }] },
      { kana: "ちかい", romaji: "chikai", english: "near", breakdown: [{ char: "ち", romaji: "chi" }, { char: "か", romaji: "ka" }, { char: "い", romaji: "i" }] },
      { kana: "つき", romaji: "tsuki", english: "moon", breakdown: [{ char: "つ", romaji: "tsu" }, { char: "き", romaji: "ki" }] },
      { kana: "とき", romaji: "toki", english: "time", breakdown: [{ char: "と", romaji: "to" }, { char: "き", romaji: "ki" }] },
    ],
  },

  // ─── Group 5: N-row ────────────────────────────────
  {
    id: 5,
    name: "N-row",
    characters: [
      { kana: "な", romaji: "na" },
      { kana: "に", romaji: "ni" },
      { kana: "ぬ", romaji: "nu" },
      { kana: "ね", romaji: "ne" },
      { kana: "の", romaji: "no" },
    ],
    words: [
      { kana: "あに", romaji: "ani", english: "older brother", breakdown: [{ char: "あ", romaji: "a" }, { char: "に", romaji: "ni" }] },
      { kana: "いぬ", romaji: "inu", english: "dog", breakdown: [{ char: "い", romaji: "i" }, { char: "ぬ", romaji: "nu" }] },
      { kana: "おかね", romaji: "okane", english: "money", breakdown: [{ char: "お", romaji: "o" }, { char: "か", romaji: "ka" }, { char: "ね", romaji: "ne" }] },
      { kana: "きのう", romaji: "kinou", english: "yesterday", breakdown: [{ char: "き", romaji: "ki" }, { char: "の", romaji: "no" }, { char: "う", romaji: "u" }] },
      { kana: "くに", romaji: "kuni", english: "country", breakdown: [{ char: "く", romaji: "ku" }, { char: "に", romaji: "ni" }] },
      { kana: "さかな", romaji: "sakana", english: "fish", breakdown: [{ char: "さ", romaji: "sa" }, { char: "か", romaji: "ka" }, { char: "な", romaji: "na" }] },
      { kana: "なに", romaji: "nani", english: "what", breakdown: [{ char: "な", romaji: "na" }, { char: "に", romaji: "ni" }] },
      { kana: "にし", romaji: "nishi", english: "west", breakdown: [{ char: "に", romaji: "ni" }, { char: "し", romaji: "shi" }] },
      { kana: "ねこ", romaji: "neko", english: "cat", breakdown: [{ char: "ね", romaji: "ne" }, { char: "こ", romaji: "ko" }] },
    ],
  },

  // ─── Group 6: H-row ────────────────────────────────
  {
    id: 6,
    name: "H-row",
    characters: [
      { kana: "は", romaji: "ha" },
      { kana: "ひ", romaji: "hi" },
      { kana: "ふ", romaji: "fu" },
      { kana: "へ", romaji: "he" },
      { kana: "ほ", romaji: "ho" },
    ],
    words: [
      { kana: "あさひ", romaji: "asahi", english: "morning sun", breakdown: [{ char: "あ", romaji: "a" }, { char: "さ", romaji: "sa" }, { char: "ひ", romaji: "hi" }] },
      { kana: "はし", romaji: "hashi", english: "chopsticks", breakdown: [{ char: "は", romaji: "ha" }, { char: "し", romaji: "shi" }] },
      { kana: "はな", romaji: "hana", english: "flower", breakdown: [{ char: "は", romaji: "ha" }, { char: "な", romaji: "na" }] },
      { kana: "ひと", romaji: "hito", english: "person", breakdown: [{ char: "ひ", romaji: "hi" }, { char: "と", romaji: "to" }] },
      { kana: "ふね", romaji: "fune", english: "boat", breakdown: [{ char: "ふ", romaji: "fu" }, { char: "ね", romaji: "ne" }] },
      { kana: "へた", romaji: "heta", english: "bad at", breakdown: [{ char: "へ", romaji: "he" }, { char: "た", romaji: "ta" }] },
      { kana: "ほし", romaji: "hoshi", english: "star", breakdown: [{ char: "ほ", romaji: "ho" }, { char: "し", romaji: "shi" }] },
      { kana: "ほん", romaji: "hon", english: "book", breakdown: [{ char: "ほ", romaji: "ho" }, { char: "ん", romaji: "n" }] },
    ],
  },

  // ─── Group 7: M-row ────────────────────────────────
  {
    id: 7,
    name: "M-row",
    characters: [
      { kana: "ま", romaji: "ma" },
      { kana: "み", romaji: "mi" },
      { kana: "む", romaji: "mu" },
      { kana: "め", romaji: "me" },
      { kana: "も", romaji: "mo" },
    ],
    words: [
      { kana: "あたま", romaji: "atama", english: "head", breakdown: [{ char: "あ", romaji: "a" }, { char: "た", romaji: "ta" }, { char: "ま", romaji: "ma" }] },
      { kana: "おもしろい", romaji: "omoshiroi", english: "interesting", breakdown: [{ char: "お", romaji: "o" }, { char: "も", romaji: "mo" }, { char: "し", romaji: "shi" }, { char: "ろ", romaji: "ro" }, { char: "い", romaji: "i" }] },
      { kana: "さむい", romaji: "samui", english: "cold", breakdown: [{ char: "さ", romaji: "sa" }, { char: "む", romaji: "mu" }, { char: "い", romaji: "i" }] },
      { kana: "なまえ", romaji: "namae", english: "name", breakdown: [{ char: "な", romaji: "na" }, { char: "ま", romaji: "ma" }, { char: "え", romaji: "e" }] },
      { kana: "みせ", romaji: "mise", english: "shop", breakdown: [{ char: "み", romaji: "mi" }, { char: "せ", romaji: "se" }] },
      { kana: "みち", romaji: "michi", english: "road", breakdown: [{ char: "み", romaji: "mi" }, { char: "ち", romaji: "chi" }] },
      { kana: "もの", romaji: "mono", english: "thing", breakdown: [{ char: "も", romaji: "mo" }, { char: "の", romaji: "no" }] },
      { kana: "むし", romaji: "mushi", english: "insect", breakdown: [{ char: "む", romaji: "mu" }, { char: "し", romaji: "shi" }] },
    ],
  },

  // ─── Group 8: Y-row + R-row ────────────────────────
  {
    id: 8,
    name: "Y + R rows",
    characters: [
      { kana: "や", romaji: "ya" },
      { kana: "ゆ", romaji: "yu" },
      { kana: "よ", romaji: "yo" },
      { kana: "ら", romaji: "ra" },
      { kana: "り", romaji: "ri" },
      { kana: "る", romaji: "ru" },
      { kana: "れ", romaji: "re" },
      { kana: "ろ", romaji: "ro" },
    ],
    words: [
      { kana: "やま", romaji: "yama", english: "mountain", breakdown: [{ char: "や", romaji: "ya" }, { char: "ま", romaji: "ma" }] },
      { kana: "ゆき", romaji: "yuki", english: "snow", breakdown: [{ char: "ゆ", romaji: "yu" }, { char: "き", romaji: "ki" }] },
      { kana: "よる", romaji: "yoru", english: "night", breakdown: [{ char: "よ", romaji: "yo" }, { char: "る", romaji: "ru" }] },
      { kana: "くるま", romaji: "kuruma", english: "car", breakdown: [{ char: "く", romaji: "ku" }, { char: "る", romaji: "ru" }, { char: "ま", romaji: "ma" }] },
      { kana: "さくら", romaji: "sakura", english: "cherry blossom", breakdown: [{ char: "さ", romaji: "sa" }, { char: "く", romaji: "ku" }, { char: "ら", romaji: "ra" }] },
      { kana: "ところ", romaji: "tokoro", english: "place", breakdown: [{ char: "と", romaji: "to" }, { char: "こ", romaji: "ko" }, { char: "ろ", romaji: "ro" }] },
      { kana: "まるい", romaji: "marui", english: "round", breakdown: [{ char: "ま", romaji: "ma" }, { char: "る", romaji: "ru" }, { char: "い", romaji: "i" }] },
    ],
  },

  // ─── Group 9: W-row + N ────────────────────────────
  {
    id: 9,
    name: "W-row + ん",
    characters: [
      { kana: "わ", romaji: "wa" },
      { kana: "を", romaji: "wo" },
      { kana: "ん", romaji: "n" },
    ],
    words: [
      { kana: "にほん", romaji: "nihon", english: "Japan", breakdown: [{ char: "に", romaji: "ni" }, { char: "ほ", romaji: "ho" }, { char: "ん", romaji: "n" }] },
      { kana: "ごはん", romaji: "gohan", english: "rice / meal", breakdown: [{ char: "ご", romaji: "go" }, { char: "は", romaji: "ha" }, { char: "ん", romaji: "n" }] },
      { kana: "せんせい", romaji: "sensei", english: "teacher", breakdown: [{ char: "せ", romaji: "se" }, { char: "ん", romaji: "n" }, { char: "せ", romaji: "se" }, { char: "い", romaji: "i" }] },
      { kana: "でんわ", romaji: "denwa", english: "telephone", breakdown: [{ char: "で", romaji: "de" }, { char: "ん", romaji: "n" }, { char: "わ", romaji: "wa" }] },
      { kana: "にんげん", romaji: "ningen", english: "human", breakdown: [{ char: "に", romaji: "ni" }, { char: "ん", romaji: "n" }, { char: "げ", romaji: "ge" }, { char: "ん", romaji: "n" }] },
      { kana: "かんたん", romaji: "kantan", english: "simple", breakdown: [{ char: "か", romaji: "ka" }, { char: "ん", romaji: "n" }, { char: "た", romaji: "ta" }, { char: "ん", romaji: "n" }] },
    ],
  },

  // ─── Group 10: Dakuten (voiced) ────────────────────
  {
    id: 10,
    name: "Dakuten ゛",
    characters: [
      { kana: "が", romaji: "ga" }, { kana: "ぎ", romaji: "gi" }, { kana: "ぐ", romaji: "gu" }, { kana: "げ", romaji: "ge" }, { kana: "ご", romaji: "go" },
      { kana: "ざ", romaji: "za" }, { kana: "じ", romaji: "ji" }, { kana: "ず", romaji: "zu" }, { kana: "ぜ", romaji: "ze" }, { kana: "ぞ", romaji: "zo" },
      { kana: "だ", romaji: "da" }, { kana: "ぢ", romaji: "ji" }, { kana: "づ", romaji: "zu" }, { kana: "で", romaji: "de" }, { kana: "ど", romaji: "do" },
      { kana: "ば", romaji: "ba" }, { kana: "び", romaji: "bi" }, { kana: "ぶ", romaji: "bu" }, { kana: "べ", romaji: "be" }, { kana: "ぼ", romaji: "bo" },
    ],
    words: [
      { kana: "べんきょう", romaji: "benkyou", english: "study", breakdown: [{ char: "べ", romaji: "be" }, { char: "ん", romaji: "n" }, { char: "き", romaji: "ki" }, { char: "ょ", romaji: "yo" }, { char: "う", romaji: "u" }] },
      { kana: "がっこう", romaji: "gakkou", english: "school", breakdown: [{ char: "が", romaji: "ga" }, { char: "っ", romaji: "(double)" }, { char: "こ", romaji: "ko" }, { char: "う", romaji: "u" }] },
      { kana: "じかん", romaji: "jikan", english: "time", breakdown: [{ char: "じ", romaji: "ji" }, { char: "か", romaji: "ka" }, { char: "ん", romaji: "n" }] },
      { kana: "だいがく", romaji: "daigaku", english: "university", breakdown: [{ char: "だ", romaji: "da" }, { char: "い", romaji: "i" }, { char: "が", romaji: "ga" }, { char: "く", romaji: "ku" }] },
      { kana: "ともだち", romaji: "tomodachi", english: "friend", breakdown: [{ char: "と", romaji: "to" }, { char: "も", romaji: "mo" }, { char: "だ", romaji: "da" }, { char: "ち", romaji: "chi" }] },
      { kana: "ぎんこう", romaji: "ginkou", english: "bank", breakdown: [{ char: "ぎ", romaji: "gi" }, { char: "ん", romaji: "n" }, { char: "こ", romaji: "ko" }, { char: "う", romaji: "u" }] },
    ],
  },

  // ─── Group 11: Handakuten (P-row) ──────────────────
  {
    id: 11,
    name: "Handakuten ゜",
    characters: [
      { kana: "ぱ", romaji: "pa" },
      { kana: "ぴ", romaji: "pi" },
      { kana: "ぷ", romaji: "pu" },
      { kana: "ぺ", romaji: "pe" },
      { kana: "ぽ", romaji: "po" },
    ],
    words: [
      { kana: "にっぽん", romaji: "nippon", english: "Japan (formal)", breakdown: [{ char: "に", romaji: "ni" }, { char: "っ", romaji: "(double)" }, { char: "ぽ", romaji: "po" }, { char: "ん", romaji: "n" }] },
      { kana: "さんぽ", romaji: "sanpo", english: "a walk", breakdown: [{ char: "さ", romaji: "sa" }, { char: "ん", romaji: "n" }, { char: "ぽ", romaji: "po" }] },
      { kana: "てんぷら", romaji: "tenpura", english: "tempura", breakdown: [{ char: "て", romaji: "te" }, { char: "ん", romaji: "n" }, { char: "ぷ", romaji: "pu" }, { char: "ら", romaji: "ra" }] },
      { kana: "しんぱい", romaji: "shinpai", english: "worry", breakdown: [{ char: "し", romaji: "shi" }, { char: "ん", romaji: "n" }, { char: "ぱ", romaji: "pa" }, { char: "い", romaji: "i" }] },
    ],
  },

  // ─── Group 12: Combos (small ya/yu/yo) ─────────────
  {
    id: 12,
    name: "Combos きゃ・しゃ・ちゃ",
    characters: [
      { kana: "きゃ", romaji: "kya" }, { kana: "きゅ", romaji: "kyu" }, { kana: "きょ", romaji: "kyo" },
      { kana: "しゃ", romaji: "sha" }, { kana: "しゅ", romaji: "shu" }, { kana: "しょ", romaji: "sho" },
      { kana: "ちゃ", romaji: "cha" }, { kana: "ちゅ", romaji: "chu" }, { kana: "ちょ", romaji: "cho" },
      { kana: "にゃ", romaji: "nya" }, { kana: "にゅ", romaji: "nyu" }, { kana: "にょ", romaji: "nyo" },
      { kana: "ひゃ", romaji: "hya" }, { kana: "ひゅ", romaji: "hyu" }, { kana: "ひょ", romaji: "hyo" },
      { kana: "みゃ", romaji: "mya" }, { kana: "みゅ", romaji: "myu" }, { kana: "みょ", romaji: "myo" },
      { kana: "りゃ", romaji: "rya" }, { kana: "りゅ", romaji: "ryu" }, { kana: "りょ", romaji: "ryo" },
    ],
    words: [
      { kana: "しゃしん", romaji: "shashin", english: "photo", breakdown: [{ char: "しゃ", romaji: "sha" }, { char: "し", romaji: "shi" }, { char: "ん", romaji: "n" }] },
      { kana: "きょう", romaji: "kyou", english: "today", breakdown: [{ char: "きょ", romaji: "kyo" }, { char: "う", romaji: "u" }] },
      { kana: "ちょっと", romaji: "chotto", english: "a little", breakdown: [{ char: "ちょ", romaji: "cho" }, { char: "っ", romaji: "(double)" }, { char: "と", romaji: "to" }] },
      { kana: "おちゃ", romaji: "ocha", english: "tea", breakdown: [{ char: "お", romaji: "o" }, { char: "ちゃ", romaji: "cha" }] },
      { kana: "りょうり", romaji: "ryouri", english: "cooking", breakdown: [{ char: "りょ", romaji: "ryo" }, { char: "う", romaji: "u" }, { char: "り", romaji: "ri" }] },
      { kana: "びょういん", romaji: "byouin", english: "hospital", breakdown: [{ char: "びょ", romaji: "byo" }, { char: "う", romaji: "u" }, { char: "い", romaji: "i" }, { char: "ん", romaji: "n" }] },
    ],
  },
];

/** Confusable character pairs — introduced after both characters are learned. */
export const confusablePairs = [
  { a: { kana: "き", romaji: "ki" }, b: { kana: "さ", romaji: "sa" }, hint: "き has a slight cross at top; さ curves left", availableAfterGroup: 3 },
  { a: { kana: "は", romaji: "ha" }, b: { kana: "ほ", romaji: "ho" }, hint: "ほ has an extra bump on the right side", availableAfterGroup: 6 },
  { a: { kana: "ぬ", romaji: "nu" }, b: { kana: "め", romaji: "me" }, hint: "ぬ has a tail that loops; め closes", availableAfterGroup: 7 },
  { a: { kana: "ね", romaji: "ne" }, b: { kana: "れ", romaji: "re" }, hint: "ね loops at the bottom; れ doesn't", availableAfterGroup: 8 },
  { a: { kana: "わ", romaji: "wa" }, b: { kana: "れ", romaji: "re" }, hint: "わ is rounder; れ has a sharper right stroke", availableAfterGroup: 9 },
  { a: { kana: "る", romaji: "ru" }, b: { kana: "ろ", romaji: "ro" }, hint: "る has a loop at the bottom; ろ doesn't", availableAfterGroup: 8 },
];

export default hiraganaGroups;
