export interface VocabularyExample {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  kanji: string;
  jlpt: 5 | 4 | 3 | 2 | 1;
  strokeCount: number;
  meanings: string[];
  onyomi: string[]; // Katakana
  kunyomi: string[]; // Hiragana
  strokeGuides?: string[]; // Simplified vector instructions or stroke start points if needed
  examples: VocabularyExample[];
}

export const KANJI_DATASET: KanjiItem[] = [
  {
    kanji: "日",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["sun", "day", "Japan"],
    onyomi: ["ニチ", "ジツ"],
    kunyomi: ["ひ", "-び", "-か"],
    examples: [
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" }
    ]
  },
  {
    kanji: "月",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["moon", "month"],
    onyomi: ["ゲツ", "ガツ"],
    kunyomi: ["つき"],
    examples: [
      { word: "月曜日", reading: "げつようび", meaning: "Monday" },
      { word: "今月", reading: "こんげつ", meaning: "this month" },
      { word: "一ヶ月", reading: "いっかげつ", meaning: "one month" },
      { word: "三月", reading: "さんがつ", meaning: "March" }
    ]
  },
  {
    kanji: "火",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["fire"],
    onyomi: ["カ"],
    kunyomi: ["ひ", "ほ-", "-び"],
    examples: [
      { word: "火曜日", reading: "かようび", meaning: "Tuesday" },
      { word: "火山", reading: "かざん", meaning: "volcano" },
      { word: "火花", reading: "ひばな", meaning: "spark" },
      { word: "火事", reading: "かじ", meaning: "fire (accidental)" }
    ]
  },
  {
    kanji: "水",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["water"],
    onyomi: ["スイ"],
    kunyomi: ["みず"],
    examples: [
      { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
      { word: "お水", reading: "おみず", meaning: "water (polite)" },
      { word: "水道", reading: "すいどう", meaning: "water supply / tap water" },
      { word: "水泳", reading: "すいえい", meaning: "swimming" }
    ]
  },
  {
    kanji: "木",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["tree", "wood"],
    onyomi: ["モク", "ボク"],
    kunyomi: ["き", "こ-"],
    examples: [
      { word: "木曜日", reading: "もくようび", meaning: "Thursday" },
      { word: "大木", reading: "たいぼく", meaning: "large tree" },
      { word: "木立", reading: "こだち", meaning: "grove of trees" },
      { word: "木の実", reading: "きのみ", meaning: "nut / fruit of tree" }
    ]
  },
  {
    kanji: "金",
    jlpt: 5,
    strokeCount: 8,
    meanings: ["gold", "money"],
    onyomi: ["キン", "コン"],
    kunyomi: ["かね", "かな-", "-がね"],
    examples: [
      { word: "金曜日", reading: "きんようび", meaning: "Friday" },
      { word: "お金", reading: "おかね", meaning: "money" },
      { word: "金メダル", reading: "きんメダル", meaning: "gold medal" },
      { word: "金物", reading: "かなもの", meaning: "hardware / metalware" }
    ]
  },
  {
    kanji: "土",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["earth", "soil", "ground"],
    onyomi: ["ド", "ト"],
    kunyomi: ["つち"],
    examples: [
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "土地", reading: "とち", meaning: "land" },
      { word: "お土", reading: "おつち", meaning: "soil" },
      { word: "粘土", reading: "ねんど", meaning: "clay" }
    ]
  },
  {
    kanji: "山",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["mountain"],
    onyomi: ["サン", "ザン"],
    kunyomi: ["やま"],
    examples: [
      { word: "山登り", reading: "やまのぼり", meaning: "mountain climbing" },
      { word: "富士山", reading: "ふじさん", meaning: "Mount Fuji" },
      { word: "山道", reading: "やまみち", meaning: "mountain path" },
      { word: "火山", reading: "かざん", meaning: "volcano" }
    ]
  },
  {
    kanji: "川",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["river"],
    onyomi: ["セン"],
    kunyomi: ["かわ"],
    examples: [
      { word: "川岸", reading: "かわぎし", meaning: "riverbank" },
      { word: "小川", reading: "おがわ", meaning: "brook / stream" },
      { word: "川下り", reading: "かわくだり", meaning: "river rafting" },
      { word: "アマゾン川", reading: "アマゾンがわ", meaning: "Amazon River" }
    ]
  },
  {
    kanji: "田",
    jlpt: 5,
    strokeCount: 5,
    meanings: ["rice field"],
    onyomi: ["デン"],
    kunyomi: ["た"],
    examples: [
      { word: "田んぼ", reading: "たんぼ", meaning: "rice paddy" },
      { word: "成田空港", reading: "なりたくうこう", meaning: "Narita Airport" },
      { word: "山田さん", reading: "やまださん", meaning: "Mr./Ms. Yamada" },
      { word: "水田", reading: "すいでん", meaning: "water-filled paddy field" }
    ]
  },
  {
    kanji: "人",
    jlpt: 5,
    strokeCount: 2,
    meanings: ["person", "human"],
    onyomi: ["ジン", "ニン"],
    kunyomi: ["ひと", "-り", "-と"],
    examples: [
      { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
      { word: "三人", reading: "さんにん", meaning: "three people" },
      { word: "大人", reading: "おとな", meaning: "adult" },
      { word: "一人", reading: "ひとり", meaning: "one person" }
    ]
  },
  {
    kanji: "子",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["child", "sign of the rat"],
    onyomi: ["シ", "ス"],
    kunyomi: ["こ", "-こ"],
    examples: [
      { word: "子供", reading: "こども", meaning: "child" },
      { word: "女の子", reading: "おんなのこ", meaning: "girl" },
      { word: "男の子", reading: "おとこのこ", meaning: "boy" },
      { word: "電子", reading: "でんし", meaning: "electron" }
    ]
  },
  {
    kanji: "女",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["woman", "female"],
    onyomi: ["ジョ", "ニョ"],
    kunyomi: ["おんな", "め"],
    examples: [
      { word: "女性", reading: "じょせい", meaning: "woman / female" },
      { word: "女の子", reading: "おんなのこ", meaning: "girl" },
      { word: "女神", reading: "めがみ", meaning: "goddess" },
      { word: "彼女", reading: "かのじょ", meaning: "she / girlfriend" }
    ]
  },
  {
    kanji: "男",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["man", "male"],
    onyomi: ["ダン", "ナン"],
    kunyomi: ["おとこ", "お"],
    examples: [
      { word: "男性", reading: "だんせい", meaning: "man / male" },
      { word: "男の子", reading: "おとこのこ", meaning: "boy" },
      { word: "長男", reading: "ちょうなん", meaning: "eldest son" },
      { word: "男らしい", reading: "おとこらしい", meaning: "manly" }
    ]
  },
  {
    kanji: "口",
    jlpt: 5,
    strokeCount: 3,
    meanings: ["mouth", "opening", "entrance"],
    onyomi: ["コウ", "ク"],
    kunyomi: ["くち"],
    examples: [
      { word: "入り口", reading: "いりぐち", meaning: "entrance" },
      { word: "出口", reading: "でぐち", meaning: "exit" },
      { word: "窓口", reading: "まどぐち", meaning: "service window / contact desk" },
      { word: "人口", reading: "じんこう", meaning: "population" }
    ]
  },
  {
    kanji: "目",
    jlpt: 5,
    strokeCount: 5,
    meanings: ["eye", "class", "look"],
    onyomi: ["モク", "ボク"],
    kunyomi: ["め", "ま-"],
    examples: [
      { word: "目薬", reading: "めぐすり", meaning: "eye drops" },
      { word: "目的", reading: "もくてき", meaning: "purpose / goal" },
      { word: "一日目", reading: "いちにちめ", meaning: "first day" },
      { word: "目立ちます", reading: "めだちます", meaning: "to stand out" }
    ]
  },
  {
    kanji: "耳",
    jlpt: 5,
    strokeCount: 6,
    meanings: ["ear"],
    onyomi: ["ジ"],
    kunyomi: ["みみ"],
    examples: [
      { word: "初耳", reading: "はつみみ", meaning: "hearing something for the first time" },
      { word: "耳鳴り", reading: "みみなり", meaning: "tinnitus / ringing in ears" },
      { word: "耳飾り", reading: "みみかざり", meaning: "earrings" }
    ]
  },
  {
    kanji: "手",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["hand"],
    onyomi: ["シュ", "ズ"],
    kunyomi: ["て", "た-"],
    examples: [
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "歌手", reading: "かしゅ", meaning: "singer" },
      { word: "上手", reading: "じょうず", meaning: "skillful" },
      { word: "手伝う", reading: "てつだう", meaning: "to help" }
    ]
  },
  {
    kanji: "足",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["leg", "foot", "be sufficient"],
    onyomi: ["ソク"],
    kunyomi: ["あし", "た-りる"],
    examples: [
      { word: "足首", reading: "あしくび", meaning: "ankle" },
      { word: "一足", reading: "いっそく", meaning: "one pair (of shoes)" },
      { word: "足ります", reading: "たります", meaning: "to be sufficient" },
      { word: "遠足", reading: "えんそく", meaning: "excursion / picnic" }
    ]
  },
  {
    kanji: "見",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["see", "hopes", "chances", "look at"],
    onyomi: ["ケン"],
    kunyomi: ["み-る", "み-せる"],
    examples: [
      { word: "見ます", reading: "みます", meaning: "to see / watch" },
      { word: "見学", reading: "けんがく", meaning: "study visit / field trip" },
      { word: "花見", reading: "はなみ", meaning: "cherry blossom viewing" },
      { word: "意見", reading: "いけん", meaning: "opinion" }
    ]
  },
  {
    kanji: "行",
    jlpt: 5,
    strokeCount: 6,
    meanings: ["go", "journey", "row"],
    onyomi: ["コウ", "ギョウ", "アン"],
    kunyomi: ["い-く", "ゆ-く", "おこな-う"],
    examples: [
      { word: "行きます", reading: "いきます", meaning: "to go" },
      { word: "旅行", reading: "りょこう", meaning: "travel" },
      { word: "一行目", reading: "いちぎょうめ", meaning: "the first line" },
      { word: "行う", reading: "おこなう", meaning: "to perform / carry out" }
    ]
  },
  {
    kanji: "来",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["come", "due", "next", "cause"],
    onyomi: ["ライ", "タイ"],
    kunyomi: ["く-る", "きた-る"],
    examples: [
      { word: "来ます", reading: "きます", meaning: "to come" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" },
      { word: "将来", reading: "しょうらい", meaning: "future" },
      { word: "来日", reading: "らいにち", meaning: "arrival in Japan" }
    ]
  },
  {
    kanji: "食",
    jlpt: 5,
    strokeCount: 9,
    meanings: ["eat", "food"],
    onyomi: ["ショク", "ジキ"],
    kunyomi: ["た-べる", "く-う"],
    examples: [
      { word: "食べます", reading: "たべます", meaning: "to eat" },
      { word: "食事", reading: "しょくじ", meaning: "meal" },
      { word: "食べ物", reading: "たべもの", meaning: "food" },
      { word: "朝食", reading: "ちょうしょく", meaning: "breakfast" }
    ]
  },
  {
    kanji: "飲",
    jlpt: 5,
    strokeCount: 12,
    meanings: ["drink"],
    onyomi: ["イン", "オン"],
    kunyomi: ["の-む"],
    examples: [
      { word: "飲みます", reading: "のみます", meaning: "to drink" },
      { word: "飲み物", reading: "のみもの", meaning: "drink / beverage" },
      { word: "飲食店", reading: "いんしょくてん", meaning: "restaurant / bar" },
      { word: "飲み薬", reading: "のみぐすり", meaning: "medicine to be swallowed" }
    ]
  },
  {
    kanji: "学",
    jlpt: 5,
    strokeCount: 8,
    meanings: ["study", "learning", "science"],
    onyomi: ["ガク"],
    kunyomi: ["まな-ぶ"],
    examples: [
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "学びます", reading: "まなびます", meaning: "to study / learn" }
    ]
  },
  {
    kanji: "校",
    jlpt: 5,
    strokeCount: 10,
    meanings: ["school", "exam"],
    onyomi: ["コウ"],
    kunyomi: [],
    examples: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "校長先生", reading: "こうちょうせんせい", meaning: "school principal" },
      { word: "高校", reading: "こうこう", meaning: "high school" },
      { word: "校舎", reading: "こうしゃ", meaning: "school building" }
    ]
  },
  {
    kanji: "先",
    jlpt: 5,
    strokeCount: 6,
    meanings: ["before", "ahead", "previous", "future"],
    onyomi: ["セン"],
    kunyomi: ["さき", "まず"],
    examples: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "お先に", reading: "おさきに", meaning: "ahead / before someone else" },
      { word: "指先", reading: "ゆびさき", meaning: "fingertip" }
    ]
  },
  {
    kanji: "生",
    jlpt: 5,
    strokeCount: 5,
    meanings: ["life", "birth", "student", "raw"],
    onyomi: ["セイ", "ショウ"],
    kunyomi: ["い-きる", "う-む", "なま"],
    examples: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "生ビール", reading: "なまビール", meaning: "draft beer" },
      { word: "生まれます", reading: "うまれます", meaning: "to be born" }
    ]
  },
  {
    kanji: "本",
    jlpt: 5,
    strokeCount: 5,
    meanings: ["book", "origin", "main", "counter for long cylindrical objects"],
    onyomi: ["ホン"],
    kunyomi: ["もと"],
    examples: [
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "本日", reading: "ほんじつ", meaning: "today (formal)" },
      { word: "一本", reading: "いっぽん", meaning: "one long cylindrical object" }
    ]
  },
  {
    kanji: "中",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["middle", "inside", "center"],
    onyomi: ["チュウ"],
    kunyomi: ["なか", "うち"],
    examples: [
      { word: "一日中", reading: "いちにちじゅう", meaning: "all day long" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "真ん中", reading: "まんなか", meaning: "dead center" },
      { word: "中身", reading: "なかみ", meaning: "contents / interior" }
    ]
  }
];
