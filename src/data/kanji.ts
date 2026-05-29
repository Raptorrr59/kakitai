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
  examples: VocabularyExample[];
}

export const KANJI_DATASET: KanjiItem[] = [
  // === JLPT N5 (30 Kanji) ===
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
      { word: "毎日", reading: "まいにch", meaning: "every day" },
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
      { word: "男の子", reading: "おとconoko", meaning: "boy" },
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
    kunyomi: ["おとco", "お"],
    examples: [
      { word: "男性", reading: "だんせい", meaning: "man / male" },
      { word: "男の子", reading: "おとこのこ", meaning: "boy" },
      { word: "長男", reading: "ちょうnan", meaning: "eldest son" },
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
      { word: "窓口", reading: "まどぐち", meaning: "service window" },
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
      { word: "耳鳴り", reading: "みみなり", meaning: "tinnitus" },
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
      { word: "遠足", reading: "えんそく", meaning: "excursion" }
    ]
  },
  {
    kanji: "見",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["see", "look at"],
    onyomi: ["ケン"],
    kunyomi: ["み-る", "み-せる"],
    examples: [
      { word: "見ます", reading: "みます", meaning: "to see / watch" },
      { word: "見学", reading: "けんがく", meaning: "field trip" },
      { word: "花見", reading: "はなみ", meaning: "cherry blossom viewing" },
      { word: "意見", reading: "いけん", meaning: "opinion" }
    ]
  },
  {
    kanji: "行",
    jlpt: 5,
    strokeCount: 6,
    meanings: ["go", "journey", "row"],
    onyomi: ["コウ", "ギョウ"],
    kunyomi: ["い-く", "ゆ-く", "おこな-う"],
    examples: [
      { word: "行きます", reading: "いきます", meaning: "to go" },
      { word: "旅行", reading: "りょこう", meaning: "travel / trip" },
      { word: "一行目", reading: "いちぎょうめ", meaning: "the first line" },
      { word: "行う", reading: "おこなう", meaning: "to perform / do" }
    ]
  },
  {
    kanji: "来",
    jlpt: 5,
    strokeCount: 7,
    meanings: ["come", "next"],
    onyomi: ["ライ"],
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
    onyomi: ["ショク"],
    kunyomi: ["た-べる"],
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
    onyomi: ["イン"],
    kunyomi: ["の-む"],
    examples: [
      { word: "飲みます", reading: "のみます", meaning: "to drink" },
      { word: "飲み物", reading: "のみもの", meaning: "drink" },
      { word: "飲食店", reading: "いんしょくてん", meaning: "restaurant" }
    ]
  },
  {
    kanji: "学",
    jlpt: 5,
    strokeCount: 8,
    meanings: ["study", "learn"],
    onyomi: ["ガク"],
    kunyomi: ["まな-ぶ"],
    examples: [
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "学びます", reading: "まなびます", meaning: "to study" }
    ]
  },
  {
    kanji: "校",
    jlpt: 5,
    strokeCount: 10,
    meanings: ["school"],
    onyomi: ["コウ"],
    kunyomi: [],
    examples: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "校長", reading: "こうちょう", meaning: "school principal" },
      { word: "高校", reading: "こうこう", meaning: "high school" }
    ]
  },
  {
    kanji: "先",
    jlpt: 5,
    strokeCount: 6,
    meanings: ["before", "ahead", "previous"],
    onyomi: ["セン"],
    kunyomi: ["さき"],
    examples: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "お先に", reading: "おさきに", meaning: "ahead / before" }
    ]
  },
  {
    kanji: "生",
    jlpt: 5,
    strokeCount: 5,
    meanings: ["life", "birth", "student"],
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
    meanings: ["book", "origin", "main"],
    onyomi: ["ホン"],
    kunyomi: ["もと"],
    examples: [
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "本日", reading: "ほんじつ", meaning: "today (formal)" }
    ]
  },
  {
    kanji: "中",
    jlpt: 5,
    strokeCount: 4,
    meanings: ["middle", "inside", "center"],
    onyomi: ["チュウ"],
    kunyomi: ["なか"],
    examples: [
      { word: "一日中", reading: "いちにちじゅう", meaning: "all day long" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "真ん中", reading: "まんなか", meaning: "center" }
    ]
  },

  // === JLPT N4 (15 Kanji) ===
  {
    kanji: "会",
    jlpt: 4,
    strokeCount: 6,
    meanings: ["meet", "society", "association"],
    onyomi: ["カイ", "エ"],
    kunyomi: ["あ-う"],
    examples: [
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "会議", reading: "かいぎ", meaning: "meeting / conference" }
    ]
  },
  {
    kanji: "社",
    jlpt: 4,
    strokeCount: 7,
    meanings: ["company", "shrine", "society"],
    onyomi: ["シャ"],
    kunyomi: ["やしろ"],
    examples: [
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "社長", reading: "しゃちょう", meaning: "company president" },
      { word: "神社", reading: "じんじゃ", meaning: "shrine" }
    ]
  },
  {
    kanji: "車",
    jlpt: 4,
    strokeCount: 7,
    meanings: ["car", "vehicle", "wheel"],
    onyomi: ["シャ"],
    kunyomi: ["くるま"],
    examples: [
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "自転車", reading: "じてんしゃ", meaning: "bicycle" },
      { word: "自動車", reading: "じどうしゃ", meaning: "automobile / car" }
    ]
  },
  {
    kanji: "駅",
    jlpt: 4,
    strokeCount: 14,
    meanings: ["station"],
    onyomi: ["エキ"],
    kunyomi: [],
    examples: [
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "駅長", reading: "えきちょう", meaning: "station master" },
      { word: "東京駅", reading: "とうきょうえき", meaning: "Tokyo Station" }
    ]
  },
  {
    kanji: "外",
    jlpt: 4,
    strokeCount: 5,
    meanings: ["outside", "foreign", "other"],
    onyomi: ["ガイ", "ゲ"],
    kunyomi: ["そと", "ほか", "はず-す"],
    examples: [
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "外国人", reading: "がいこくじん", meaning: "foreigner" },
      { word: "外", reading: "そと", meaning: "outside" }
    ]
  },
  {
    kanji: "国",
    jlpt: 4,
    strokeCount: 8,
    meanings: ["country", "nation"],
    onyomi: ["コク"],
    kunyomi: ["くに"],
    examples: [
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "国歌", reading: "こっか", meaning: "national anthem" },
      { word: "国籍", reading: "こくせき", meaning: "nationality" }
    ]
  },
  {
    kanji: "語",
    jlpt: 4,
    strokeCount: 14,
    meanings: ["language", "word", "talk"],
    onyomi: ["ゴ"],
    kunyomi: ["かた-る"],
    examples: [
      { word: "日本語", reading: "にほんご", meaning: "Japanese language" },
      { word: "英語", reading: "えいご", meaning: "English language" },
      { word: "単語", reading: "たんご", meaning: "vocabulary word" }
    ]
  },
  {
    kanji: "聞",
    jlpt: 4,
    strokeCount: 14,
    meanings: ["hear", "listen", "ask"],
    onyomi: ["ブン", "モン"],
    kunyomi: ["き-く"],
    examples: [
      { word: "聞きます", reading: "ききます", meaning: "to listen / ask" },
      { word: "新聞", reading: "しんぶん", meaning: "newspaper" },
      { word: "聞き取り", reading: "ききとり", meaning: "listening comprehension" }
    ]
  },
  {
    kanji: "書",
    jlpt: 4,
    strokeCount: 10,
    meanings: ["write", "book", "document"],
    onyomi: ["ショ"],
    kunyomi: ["か-く"],
    examples: [
      { word: "書きます", reading: "かきます", meaning: "to write" },
      { word: "教科書", reading: "きょうかしょ", meaning: "textbook" },
      { word: "辞書", reading: "じしょ", meaning: "dictionary" }
    ]
  },
  {
    kanji: "読",
    jlpt: 4,
    strokeCount: 14,
    meanings: ["read"],
    onyomi: ["ドク", "トク"],
    kunyomi: ["よ-む"],
    examples: [
      { word: "読みます", reading: "よみます", meaning: "to read" },
      { word: "読書", reading: "どくしょ", meaning: "reading books" },
      { word: "音読", reading: "おんどく", meaning: "reading aloud" }
    ]
  },
  {
    kanji: "帰",
    jlpt: 4,
    strokeCount: 10,
    meanings: ["return", "go home"],
    onyomi: ["キ"],
    kunyomi: ["かえ-る"],
    examples: [
      { word: "帰ります", reading: "かえります", meaning: "to return home" },
      { word: "帰国", reading: "きこく", meaning: "return to one's country" },
      { word: "日帰り", reading: "ひがえり", meaning: "day trip" }
    ]
  },
  {
    kanji: "週",
    jlpt: 4,
    strokeCount: 11,
    meanings: ["week"],
    onyomi: ["シュウ"],
    kunyomi: [],
    examples: [
      { word: "来週", reading: "らいしゅう", meaning: "next week" },
      { word: "今週", reading: "こんしゅう", meaning: "this week" },
      { word: "一週間", reading: "いっしゅうかん", meaning: "one week" }
    ]
  },
  {
    kanji: "電",
    jlpt: 4,
    strokeCount: 13,
    meanings: ["electricity"],
    onyomi: ["デン"],
    kunyomi: [],
    examples: [
      { word: "電車", reading: "てんしゃ", meaning: "train" },
      { word: "電話", reading: "でんわ", meaning: "telephone" },
      { word: "電気", reading: "でんき", meaning: "electricity / lights" }
    ]
  },
  {
    kanji: "雨",
    jlpt: 4,
    strokeCount: 8,
    meanings: ["rain"],
    onyomi: ["ウ"],
    kunyomi: ["あめ", "あま-"],
    examples: [
      { word: "雨", reading: "あめ", meaning: "rain" },
      { word: "大雨", reading: "おおあめ", meaning: "heavy rain" },
      { word: "雨天", reading: "うてん", meaning: "rainy weather" }
    ]
  },
  {
    kanji: "空",
    jlpt: 4,
    strokeCount: 8,
    meanings: ["sky", "empty", "air"],
    onyomi: ["クウ"],
    kunyomi: ["そら", "あ-く", "から"],
    examples: [
      { word: "空気", reading: "くうき", meaning: "air / atmosphere" },
      { word: "空港", reading: "くうこう", meaning: "airport" },
      { word: "青空", reading: "あおぞら", meaning: "blue sky" }
    ]
  },

  // === JLPT N3 (15 Kanji) ===
  {
    kanji: "最",
    jlpt: 3,
    strokeCount: 12,
    meanings: ["most", "extreme", "utmost"],
    onyomi: ["サイ"],
    kunyomi: ["もっと-も"],
    examples: [
      { word: "最近", reading: "さいきん", meaning: "recently" },
      { word: "最高", reading: "さいこう", meaning: "the best / supreme" },
      { word: "最も", reading: "もっとも", meaning: "most / extremely" }
    ]
  },
  {
    kanji: "新",
    jlpt: 3,
    strokeCount: 13,
    meanings: ["new"],
    onyomi: ["シン"],
    kunyomi: ["あたら-しい", "あら-た"],
    examples: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "新幹線", reading: "しんかんせん", meaning: "bullet train" },
      { word: "新年", reading: "しんねん", meaning: "New Year" }
    ]
  },
  {
    kanji: "古",
    jlpt: 3,
    strokeCount: 5,
    meanings: ["old"],
    onyomi: ["コ"],
    kunyomi: ["ふる-い"],
    examples: [
      { word: "古い", reading: "ふるい", meaning: "old" },
      { word: "中古", reading: "ちゅうこ", meaning: "second-hand / used" },
      { word: "古本", reading: "ふるほん", meaning: "used book" }
    ]
  },
  {
    kanji: "急",
    jlpt: 3,
    strokeCount: 9,
    meanings: ["hurry", "urgent", "sudden"],
    onyomi: ["キュウ"],
    kunyomi: ["いそ-ぐ"],
    examples: [
      { word: "急ぎます", reading: "いそぎます", meaning: "to hurry" },
      { word: "急行", reading: "きゅうこう", meaning: "express train" },
      { word: "急に", reading: "きゅうに", meaning: "suddenly" }
    ]
  },
  {
    kanji: "特",
    jlpt: 3,
    strokeCount: 10,
    meanings: ["special"],
    onyomi: ["トク"],
    kunyomi: [],
    examples: [
      { word: "特別", reading: "とくべつ", meaning: "special" },
      { word: "特急", reading: "とっきゅう", meaning: "limited express train" },
      { word: "特徴", reading: "とくちょう", meaning: "distinctive feature" }
    ]
  },
  {
    kanji: "線",
    jlpt: 3,
    strokeCount: 15,
    meanings: ["line", "track", "wire"],
    onyomi: ["セン"],
    kunyomi: [],
    examples: [
      { word: "新幹線", reading: "しんかんせん", meaning: "bullet train" },
      { word: "線路", reading: "せんろ", meaning: "railway track" },
      { word: "下線", reading: "かせん", meaning: "underline" }
    ]
  },
  {
    kanji: "決",
    jlpt: 3,
    strokeCount: 7,
    meanings: ["decide", "fix", "agree"],
    onyomi: ["ケツ"],
    kunyomi: ["き-める", "き-まる"],
    examples: [
      { word: "決めます", reading: "きめます", meaning: "to decide" },
      { word: "決定", reading: "けってい", meaning: "decision / determination" },
      { word: "解決", reading: "かいけつ", meaning: "settlement / solution" }
    ]
  },
  {
    kanji: "定",
    jlpt: 3,
    strokeCount: 8,
    meanings: ["determine", "fix", "establish"],
    onyomi: ["テイ", "ジョウ"],
    kunyomi: ["さだ-める", "さ定-まる"],
    examples: [
      { word: "決定", reading: "けってい", meaning: "decision" },
      { word: "予定", reading: "よてい", meaning: "plan / schedule" },
      { word: "定食", reading: "ていしょく", meaning: "set meal" }
    ]
  },
  {
    kanji: "変",
    jlpt: 3,
    strokeCount: 9,
    meanings: ["change", "strange", "unusual"],
    onyomi: ["ヘン"],
    kunyomi: ["か-わる", "か-える"],
    examples: [
      { word: "変化", reading: "へんか", meaning: "change / variation" },
      { word: "大変", reading: "たいhen", meaning: "tough / difficult" },
      { word: "変な", reading: "へんな", meaning: "strange / odd" }
    ]
  },
  {
    kanji: "対",
    jlpt: 3,
    strokeCount: 7,
    meanings: ["opposite", "versus", "against", "compare"],
    onyomi: ["タイ", "ツイ"],
    kunyomi: [],
    examples: [
      { word: "反対", reading: "はんたい", meaning: "opposition / reverse" },
      { word: "対象", reading: "たいしょう", meaning: "target / object" },
      { word: "対比", reading: "たいひ", meaning: "contrast / comparison" }
    ]
  },
  {
    kanji: "全",
    jlpt: 3,
    strokeCount: 6,
    meanings: ["all", "whole", "complete"],
    onyomi: ["ゼン"],
    kunyomi: ["まった-く", "すべ-て"],
    examples: [
      { word: "全部", reading: "ぜんぶ", meaning: "all / everything" },
      { word: "全体", reading: "ぜんたい", meaning: "whole / entirety" },
      { word: "全然", reading: "ぜんぜん", meaning: "not at all (with negative)" }
    ]
  },
  {
    kanji: "部",
    jlpt: 3,
    strokeCount: 11,
    meanings: ["part", "section", "department", "room"],
    onyomi: ["ブ"],
    kunyomi: [],
    examples: [
      { word: "全部", reading: "ぜんぶ", meaning: "all / everything" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "部長", reading: "ぶちょう", meaning: "department manager" }
    ]
  },
  {
    kanji: "信",
    jlpt: 3,
    strokeCount: 9,
    meanings: ["believe", "trust", "faith", "signal"],
    onyomi: ["シン"],
    kunyomi: [],
    examples: [
      { word: "信じます", reading: "しんじます", meaning: "to believe / trust" },
      { word: "自信", reading: "じしん", meaning: "self-confidence" },
      { word: "信号", reading: "しんごう", meaning: "traffic light / signal" }
    ]
  },
  {
    kanji: "感",
    jlpt: 3,
    strokeCount: 13,
    meanings: ["feel", "sensation", "emotion"],
    onyomi: ["カン"],
    kunyomi: [],
    examples: [
      { word: "感情", reading: "かんじょう", meaning: "emotion / feelings" },
      { word: "感謝", reading: "かんしゃ", meaning: "gratitude / thanks" },
      { word: "感想", reading: "かんそう", meaning: "impressions / thoughts" }
    ]
  },
  {
    kanji: "理",
    jlpt: 3,
    strokeCount: 11,
    meanings: ["reason", "logic", "truth"],
    onyomi: ["リ"],
    kunyomi: [],
    examples: [
      { word: "理由", reading: "りゆう", meaning: "reason" },
      { word: "料理", reading: "りょうり", meaning: "cooking / cuisine" },
      { word: "地理", reading: "ちり", meaning: "geography" }
    ]
  }
];
