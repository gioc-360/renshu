/**
 * Hiragana origin stories — kanji etymology for each basic character
 *
 * Each hiragana evolved from a cursive form of a Chinese character (man'yōgana).
 * These stories connect the shape to its source, giving learners a memorable
 * first encounter with each character.
 */

const hiraganaOrigins = {
  'あ': {
    kanji: '安',
    meaning: 'peace, safety',
    story: 'A woman (女) sitting beneath a roof (宀) — shelter is safety. Written quickly in cursive, the top of 安 became the crossbar and the bottom flowed into the downward curves of あ.',
  },
  'い': {
    kanji: '以',
    meaning: 'by means of',
    story: 'The kanji 以 depicted a person carrying a tool — "by means of." Written rapidly, only the two leftmost strokes survived, producing い\'s pair of descending lines.',
  },
  'う': {
    kanji: '宇',
    meaning: 'eaves, universe',
    story: 'A roof radical (宀) over 于 — the space under the eaves, later extended to mean the cosmos itself. Cursive writing collapsed the structure into う, whose rounded top still echoes the sheltering roof.',
  },
  'え': {
    kanji: '衣',
    meaning: 'clothing',
    story: 'The kanji 衣 shows a flowing robe with crossed lapels. The lower portion, where fabric drapes and overlaps, was isolated and simplified into え\'s looping shape.',
  },
  'お': {
    kanji: '於',
    meaning: 'at, in',
    story: 'A literary character for location — "at this place." The left portion of 於 was extracted and written in flowing cursive, its angular strokes merging into お.',
  },
  'か': {
    kanji: '加',
    meaning: 'add, increase',
    story: 'Mouth (口) plus power (力) — adding force to speech. The left side of 加 was written cursively, the angular strokes softening into か.',
  },
  'き': {
    kanji: '幾',
    meaning: 'how many',
    story: 'Threads crossing on a loom — so many you can\'t count them. The intricate character 幾 was compressed drastically, its crisscrossing strokes condensing into き\'s layered horizontals.',
  },
  'く': {
    kanji: '久',
    meaning: 'long time',
    story: 'Already one of the simplest kanji. The main sweeping stroke of 久 became the single angle of く — endurance reduced to a single gesture.',
  },
  'け': {
    kanji: '計',
    meaning: 'plan, measure',
    story: 'Words (言) plus ten (十) — calculating, measuring out. The right portion of 計 was extracted and written quickly, producing け\'s three vertical strokes.',
  },
  'こ': {
    kanji: '己',
    meaning: 'self',
    story: 'Already just two strokes. The angular bends of 己 softened into こ\'s two parallel curves — the simplification barely visible.',
  },
  'さ': {
    kanji: '左',
    meaning: 'left',
    story: 'A left hand reaching down and across. Written in cursive, 左\'s strokes compressed into さ — the horizontal and diagonal merging into its distinctive shape.',
  },
  'し': {
    kanji: '之',
    meaning: 'this, of',
    story: 'A classical connecting particle — "of this." The zigzag stroke of 之 smoothed into し\'s single elegant curve, one of the most dramatic simplifications in the syllabary.',
  },
  'す': {
    kanji: '寸',
    meaning: 'measurement',
    story: 'A hand with a mark at one inch from the wrist — the original unit of measure. The horizontal and vertical of 寸 merged into す\'s hook and loop.',
  },
  'せ': {
    kanji: '世',
    meaning: 'world, generation',
    story: 'Three vertical lines connected by horizontals — generations linked together across time. Cursive writing fused the verticals of 世 into せ\'s flowing form.',
  },
  'そ': {
    kanji: '曽',
    meaning: 'formerly, once',
    story: 'Meaning "in the past" — layers of time stacked. The complex structure of 曽 underwent one of the most dramatic reductions, becoming そ\'s single sweeping curve.',
  },
  'た': {
    kanji: '太',
    meaning: 'thick, big',
    story: 'The character 大 (big) with an extra dot, meaning "extra-large." Written in cursive, 太\'s broad strokes simplified into た\'s four compact marks.',
  },
  'ち': {
    kanji: '知',
    meaning: 'know, wisdom',
    story: 'Arrow (矢) and mouth (口) — knowledge is hitting the mark with words. The left portion of 知 was extracted and simplified into ち.',
  },
  'つ': {
    kanji: '川',
    meaning: 'river',
    story: 'Three parallel lines for flowing water — one of the oldest pictographs. Written at speed, the three strokes of 川 merged into つ\'s single swooping curve.',
  },
  'て': {
    kanji: '天',
    meaning: 'heaven, sky',
    story: 'A figure with arms spread beneath the vast sky. The top portion of 天 was taken and simplified — heaven reduced to て\'s single flowing gesture.',
  },
  'と': {
    kanji: '止',
    meaning: 'stop',
    story: 'Originally a foot at rest — the toes pointing upward. The upper strokes of 止 simplified into と\'s two-stroke form, stillness made minimal.',
  },
  'な': {
    kanji: '奈',
    meaning: 'what, Nara',
    story: 'Used in the ancient capital\'s name — 奈良 (Nara). The character combines 大 and a tree element. Written rapidly in court documents, 奈 became な.',
  },
  'に': {
    kanji: '仁',
    meaning: 'benevolence',
    story: 'Person (人) plus two (二) — benevolence is what happens between two people. One of the core Confucian virtues. Monks writing quickly simplified 仁 into に, keeping the two-stroke rhythm.',
  },
  'ぬ': {
    kanji: '奴',
    meaning: 'fellow, servant',
    story: 'A blunt term — woman (女) plus right hand (又), meaning a servant or "that guy." The cursive form of 奴 became ぬ, the looping tail from the 又 component.',
  },
  'ね': {
    kanji: '祢',
    meaning: 'ancestral shrine',
    story: 'The spirit/altar radical (示) in a memorial context — a father\'s shrine. The flowing cursive of 祢 became ね, its loops preserving the ritual complexity.',
  },
  'の': {
    kanji: '乃',
    meaning: 'of, from',
    story: 'A grammatical particle even in classical Chinese — purely functional. Simple 乃 became even simpler の, one of the most natural simplifications, a single spiral.',
  },
  'は': {
    kanji: '波',
    meaning: 'wave',
    story: 'Water (氵) and skin/surface (皮) — waves moving across a surface. The right portion of 波 was written in flowing cursive, its undulating strokes becoming は.',
  },
  'ひ': {
    kanji: '比',
    meaning: 'compare',
    story: 'Two people sitting side by side — comparison requires a pair. The left half of 比 was taken and its angular strokes smoothed into ひ\'s single curve.',
  },
  'ふ': {
    kanji: '不',
    meaning: 'not, negative',
    story: 'Pure negation — a stroke that cancels what\'s beneath it. The angular 不 softened in cursive into ふ\'s four gentle dots and curves.',
  },
  'へ': {
    kanji: '部',
    meaning: 'section, part',
    story: 'The right portion of 部 — the radical 阝(おおざと). In extreme cursive, it reduced to へ\'s single angular stroke, the most minimal character in the syllabary.',
  },
  'ほ': {
    kanji: '保',
    meaning: 'preserve, protect',
    story: 'A person (亻) sheltering a child — protection. The right portion of 保 was written in cursive, its careful strokes becoming ほ\'s vertical backbone and branches.',
  },
  'ま': {
    kanji: '末',
    meaning: 'end, tip',
    story: 'A tree (木) with a longer top branch — the very tip, the end of things. The horizontal-heavy structure of 末 simplified into ま\'s cross-and-loop form.',
  },
  'み': {
    kanji: '美',
    meaning: 'beauty',
    story: 'Sheep (羊) and big (大) — a large, healthy sheep was the ancient ideal of beauty. The flowing cursive of 美 compressed into み\'s compact curves.',
  },
  'む': {
    kanji: '武',
    meaning: 'military, martial',
    story: 'Stop (止) and spear (戈) — the martial arts are about knowing when to stop fighting. The character 武 simplified into む\'s three distinctive strokes.',
  },
  'め': {
    kanji: '女',
    meaning: 'woman',
    story: 'A figure kneeling gracefully — one of the oldest pictographs. The flowing cursive of 女 became め, the crossing strokes preserved as loops.',
  },
  'も': {
    kanji: '毛',
    meaning: 'hair, fur',
    story: 'Strands of hair growing from skin — the character 毛 is already close to its hiragana. The horizontal strokes of 毛 simplified into も\'s clean lines.',
  },
  'や': {
    kanji: '也',
    meaning: 'also, to be',
    story: 'A classical assertion particle — philosophical and declarative. The curves of 也 were opened up in cursive, becoming や\'s distinctive forked shape.',
  },
  'ゆ': {
    kanji: '由',
    meaning: 'reason, cause',
    story: 'Originally oil rising from a vessel — a reason emerging from a source. The enclosed structure of 由 opened in cursive, its internal strokes flowing into ゆ.',
  },
  'よ': {
    kanji: '与',
    meaning: 'give, bestow',
    story: 'One hand extending to another — the act of giving. The angular 与 softened in cursive into よ\'s vertical-and-hook form.',
  },
  'ら': {
    kanji: '良',
    meaning: 'good, fine',
    story: 'Grain being cleaned and sorted — the good separated from the bad. The complex 良 was drastically reduced, its many strokes collapsing into ら\'s two swift marks.',
  },
  'り': {
    kanji: '利',
    meaning: 'profit, sharp',
    story: 'Grain (禾) and knife (刂) — cutting grain at harvest, hence profit and sharpness. The right portion (刂) became り\'s two parallel descending strokes.',
  },
  'る': {
    kanji: '留',
    meaning: 'stay, remain',
    story: 'A field (田) held in place by a foot (止) — remaining, staying put. The lower portion of 留 was written in cursive, its looping tail becoming る\'s distinctive curl.',
  },
  'れ': {
    kanji: '礼',
    meaning: 'courtesy, rite',
    story: 'The spirit radical (示) with a ritual gesture — social ceremony and proper form. The character 礼 simplified into れ, preserving the formal uprightness.',
  },
  'ろ': {
    kanji: '呂',
    meaning: 'spine, musical pitch',
    story: 'Originally vertebrae stacked one above another — the backbone. Also used in the musical scale (律呂). The two boxes of 呂 merged in cursive into ろ\'s open curve.',
  },
  'わ': {
    kanji: '和',
    meaning: 'harmony, peace',
    story: 'Grain (禾) and mouth (口) — harmony is having food and conversation. The character 和 also means "Japanese." Its left portion simplified into わ.',
  },
  'を': {
    kanji: '遠',
    meaning: 'far, distant',
    story: 'Distance stretching beyond reach. The cursive form of 遠 was dramatically reduced to を\'s three strokes — far simplified into something close at hand.',
  },
  'ん': {
    kanji: '无',
    meaning: 'nothing, without',
    story: 'The only standalone consonant in the Japanese syllabary. Born from the nasal sound in 无 (nothingness), ん emerged as a single flowing stroke — something from nothing.',
  },
};

export default hiraganaOrigins;
