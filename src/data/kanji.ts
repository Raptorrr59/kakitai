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
  onyomi: string[];
  kunyomi: string[];
  examples: VocabularyExample[];
}

export const KANJI_DATASET: KanjiItem[] = [
  {
    "kanji": "一",
    "jlpt": 5,
    "strokeCount": 1,
    "meanings": [
      "one",
      "one radical (no.1)"
    ],
    "onyomi": [
      "イチ",
      "イツ"
    ],
    "kunyomi": [
      "ひと-",
      "ひと.つ"
    ],
    "examples": [
      {
        "word": "一月",
        "reading": "ひとつき",
        "meaning": "one month"
      },
      {
        "word": "一つ",
        "reading": "ひとつ",
        "meaning": "one"
      },
      {
        "word": "一日",
        "reading": "いちにち",
        "meaning": "(1) one day, (2) first of month"
      },
      {
        "word": "一緒",
        "reading": "いっしょ",
        "meaning": "together"
      }
    ]
  },
  {
    "kanji": "二",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "two",
      "two radical (no. 7)"
    ],
    "onyomi": [
      "ニ",
      "ジ"
    ],
    "kunyomi": [
      "ふた",
      "ふた.つ",
      "ふたたび"
    ],
    "examples": [
      {
        "word": "二日",
        "reading": "ふつか",
        "meaning": "two days, second day of the month"
      },
      {
        "word": "二十日",
        "reading": "はつか",
        "meaning": "twenty days, twentieth"
      },
      {
        "word": "二つ",
        "reading": "ふたつ",
        "meaning": "two"
      },
      {
        "word": "二十歳",
        "reading": "はたち",
        "meaning": "20 years old, 20th year"
      }
    ]
  },
  {
    "kanji": "九",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "nine"
    ],
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "ここの",
      "ここの.つ"
    ],
    "examples": [
      {
        "word": "九",
        "reading": "きゅう / く",
        "meaning": "nine"
      },
      {
        "word": "九日",
        "reading": "ここのか",
        "meaning": "nine days, ninth day"
      },
      {
        "word": "九つ",
        "reading": "ここのつ",
        "meaning": "nine"
      }
    ]
  },
  {
    "kanji": "七",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "seven"
    ],
    "onyomi": [
      "シチ"
    ],
    "kunyomi": [
      "なな",
      "なな.つ",
      "なの"
    ],
    "examples": [
      {
        "word": "七つ",
        "reading": "ななつ",
        "meaning": "seven"
      },
      {
        "word": "七",
        "reading": "しち / なな",
        "meaning": "seven"
      },
      {
        "word": "七日",
        "reading": "なのか",
        "meaning": "seven days, the seventh day"
      }
    ]
  },
  {
    "kanji": "人",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "person"
    ],
    "onyomi": [
      "ジン",
      "ニン"
    ],
    "kunyomi": [
      "ひと",
      "-り",
      "-と"
    ],
    "examples": [
      {
        "word": "人",
        "reading": "ひと",
        "meaning": "person"
      },
      {
        "word": "大人",
        "reading": "おとな",
        "meaning": "adult"
      },
      {
        "word": "一人",
        "reading": "ひとり",
        "meaning": "one person"
      },
      {
        "word": "二人",
        "reading": "ふたり",
        "meaning": "two people"
      }
    ]
  },
  {
    "kanji": "入",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "enter",
      "insert"
    ],
    "onyomi": [
      "ニュウ",
      "ジュ"
    ],
    "kunyomi": [
      "い.る",
      "-い.る",
      "-い.り",
      "い.れる",
      "-い.れ",
      "はい.る"
    ],
    "examples": [
      {
        "word": "入る",
        "reading": "はいる",
        "meaning": "to enter, to contain"
      },
      {
        "word": "入れる",
        "reading": "いれる",
        "meaning": "to put in"
      },
      {
        "word": "入口",
        "reading": "いりぐち",
        "meaning": "entrance"
      },
      {
        "word": "押し入れ",
        "reading": "おしいれ",
        "meaning": "closet"
      }
    ]
  },
  {
    "kanji": "八",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "eight",
      "eight radical (no. 12)"
    ],
    "onyomi": [
      "ハチ"
    ],
    "kunyomi": [
      "や",
      "や.つ",
      "やっ.つ",
      "よう"
    ],
    "examples": [
      {
        "word": "八",
        "reading": "はち",
        "meaning": "eight"
      },
      {
        "word": "八百屋",
        "reading": "やおや",
        "meaning": "greengrocer"
      },
      {
        "word": "八日",
        "reading": "ようか",
        "meaning": "eight days, eighth day of the month"
      },
      {
        "word": "八つ",
        "reading": "やっつ",
        "meaning": "eight"
      }
    ]
  },
  {
    "kanji": "十",
    "jlpt": 5,
    "strokeCount": 2,
    "meanings": [
      "ten"
    ],
    "onyomi": [
      "ジュウ",
      "ジッ",
      "ジュッ"
    ],
    "kunyomi": [
      "とお",
      "と"
    ],
    "examples": [
      {
        "word": "十",
        "reading": "じゅう  とお",
        "meaning": "ten"
      },
      {
        "word": "二十日",
        "reading": "はつか",
        "meaning": "twenty days, twentieth"
      },
      {
        "word": "十日",
        "reading": "とおか",
        "meaning": "ten days, the tenth day"
      },
      {
        "word": "二十歳",
        "reading": "はたち",
        "meaning": "20 years old, 20th year"
      }
    ]
  },
  {
    "kanji": "三",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "three"
    ],
    "onyomi": [
      "サン",
      "ゾウ"
    ],
    "kunyomi": [
      "み",
      "み.つ",
      "みっ.つ"
    ],
    "examples": [
      {
        "word": "三つ",
        "reading": "みっつ",
        "meaning": "three"
      },
      {
        "word": "三日",
        "reading": "みっか",
        "meaning": "three days, third day of the month"
      },
      {
        "word": "三",
        "reading": "さん",
        "meaning": "three"
      }
    ]
  },
  {
    "kanji": "上",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "above",
      "up"
    ],
    "onyomi": [
      "ジョウ",
      "ショウ",
      "シャン"
    ],
    "kunyomi": [
      "うえ",
      "-うえ",
      "うわ-",
      "かみ",
      "あ.げる",
      "-あ.げる",
      "あ.がる",
      "-あ.がる",
      "あ.がり",
      "-あ.がり",
      "のぼ.る",
      "のぼ.り",
      "のぼ.せる",
      "のぼ.す",
      "たてまつ.る"
    ],
    "examples": [
      {
        "word": "上げる",
        "reading": "あげる",
        "meaning": "to give"
      },
      {
        "word": "上着",
        "reading": "うわぎ",
        "meaning": "jacket"
      },
      {
        "word": "上",
        "reading": "うえ",
        "meaning": "on top of"
      },
      {
        "word": "上手",
        "reading": "じょうず",
        "meaning": "skillful"
      }
    ]
  },
  {
    "kanji": "下",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "below",
      "down",
      "descend",
      "give",
      "low",
      "inferior"
    ],
    "onyomi": [
      "カ",
      "ゲ"
    ],
    "kunyomi": [
      "した",
      "しも",
      "もと",
      "さ.げる",
      "さ.がる",
      "くだ.る",
      "くだ.り",
      "くだ.す",
      "-くだ.す",
      "くだ.さる",
      "お.ろす",
      "お.りる"
    ],
    "examples": [
      {
        "word": "廊下",
        "reading": "ろうか",
        "meaning": "corridor"
      },
      {
        "word": "下手",
        "reading": "へた",
        "meaning": "unskillful"
      },
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "underground train"
      },
      {
        "word": "靴下",
        "reading": "くつした",
        "meaning": "socks"
      }
    ]
  },
  {
    "kanji": "大",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "large",
      "big"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "おお-",
      "おお.きい",
      "-おお.いに"
    ],
    "examples": [
      {
        "word": "大きな",
        "reading": "おおきな",
        "meaning": "big"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "university"
      },
      {
        "word": "大好き",
        "reading": "だいすき",
        "meaning": "to be very likeable"
      },
      {
        "word": "大人",
        "reading": "おとな",
        "meaning": "adult"
      }
    ]
  },
  {
    "kanji": "女",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "woman",
      "female"
    ],
    "onyomi": [
      "ジョ",
      "ニョ",
      "ニョウ"
    ],
    "kunyomi": [
      "おんな",
      "め"
    ],
    "examples": [
      {
        "word": "女の子",
        "reading": "おんなのこ",
        "meaning": "girl"
      },
      {
        "word": "女",
        "reading": "おんな",
        "meaning": "woman"
      },
      {
        "word": "女性",
        "reading": "じょせい",
        "meaning": "woman"
      },
      {
        "word": "彼女",
        "reading": "かのじょ",
        "meaning": "she, girlfriend"
      }
    ]
  },
  {
    "kanji": "山",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "mountain"
    ],
    "onyomi": [
      "サン",
      "セン"
    ],
    "kunyomi": [
      "やま"
    ],
    "examples": [
      {
        "word": "山",
        "reading": "やま",
        "meaning": "mountain"
      },
      {
        "word": "登山",
        "reading": "とざん",
        "meaning": "mountain-climbing"
      }
    ]
  },
  {
    "kanji": "川",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "stream",
      "river",
      "river or three-stroke river radical (no. 47)"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "かわ"
    ],
    "examples": [
      {
        "word": "川 / 河",
        "reading": "かわ",
        "meaning": "river"
      },
      {
        "word": "川",
        "reading": "かわ",
        "meaning": "river"
      }
    ]
  },
  {
    "kanji": "土",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "soil",
      "earth",
      "ground",
      "turkey"
    ],
    "onyomi": [
      "ド",
      "ト"
    ],
    "kunyomi": [
      "つち"
    ],
    "examples": [
      {
        "word": "土曜日",
        "reading": "どようび",
        "meaning": "Saturday"
      },
      {
        "word": "お土産",
        "reading": "おみやげ",
        "meaning": "souvenir"
      },
      {
        "word": "土",
        "reading": "つち",
        "meaning": "earth, soil"
      },
      {
        "word": "土曜",
        "reading": "どよう",
        "meaning": "Saturday"
      }
    ]
  },
  {
    "kanji": "千",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "thousand"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "ち"
    ],
    "examples": [
      {
        "word": "千",
        "reading": "せん",
        "meaning": "thousand"
      }
    ]
  },
  {
    "kanji": "子",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "child",
      "sign of the rat",
      "11pm-1am",
      "first sign of chinese zodiac"
    ],
    "onyomi": [
      "シ",
      "ス",
      "ツ"
    ],
    "kunyomi": [
      "こ",
      "-こ",
      "ね"
    ],
    "examples": [
      {
        "word": "男の子",
        "reading": "おとこのこ",
        "meaning": "boy"
      },
      {
        "word": "お菓子",
        "reading": "おかし",
        "meaning": "sweets, candy"
      },
      {
        "word": "帽子",
        "reading": "ぼうし",
        "meaning": "hat"
      },
      {
        "word": "子供",
        "reading": "こども",
        "meaning": "child"
      }
    ]
  },
  {
    "kanji": "小",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "little",
      "small"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "ちい.さい",
      "こ-",
      "お-",
      "さ-"
    ],
    "examples": [
      {
        "word": "小さな",
        "reading": "ちいさな",
        "meaning": "little"
      },
      {
        "word": "小さい",
        "reading": "ちいさい",
        "meaning": "little"
      },
      {
        "word": "小鳥",
        "reading": "ことり",
        "meaning": "small bird"
      },
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "novel"
      }
    ]
  },
  {
    "kanji": "万",
    "jlpt": 5,
    "strokeCount": 3,
    "meanings": [
      "ten thousand",
      "10,000"
    ],
    "onyomi": [
      "マン",
      "バン"
    ],
    "kunyomi": [
      "よろず"
    ],
    "examples": [
      {
        "word": "万年筆",
        "reading": "まんねんひつ",
        "meaning": "fountain pen"
      },
      {
        "word": "万",
        "reading": "まん",
        "meaning": "ten thousand"
      },
      {
        "word": "万一",
        "reading": "まんいち",
        "meaning": "by some chance, by some possibility, if by any chance"
      }
    ]
  },
  {
    "kanji": "中",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "in",
      "inside",
      "middle",
      "mean",
      "center"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "なか",
      "うち",
      "あた.る"
    ],
    "examples": [
      {
        "word": "中",
        "reading": "なか",
        "meaning": "middle"
      },
      {
        "word": "真中",
        "reading": "まんなか",
        "meaning": "middle"
      },
      {
        "word": "途中",
        "reading": "とちゅう",
        "meaning": "on the way"
      },
      {
        "word": "中学校",
        "reading": "ちゅうがっこう",
        "meaning": "junior high school, middle school"
      }
    ]
  },
  {
    "kanji": "五",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "five"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "いつ",
      "いつ.つ"
    ],
    "examples": [
      {
        "word": "五つ",
        "reading": "いつつ",
        "meaning": "five"
      },
      {
        "word": "五日",
        "reading": "いつか",
        "meaning": "five days, fifth day"
      },
      {
        "word": "五",
        "reading": "ご",
        "meaning": "five"
      }
    ]
  },
  {
    "kanji": "六",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "six"
    ],
    "onyomi": [
      "ロク",
      "リク"
    ],
    "kunyomi": [
      "む",
      "む.つ",
      "むっ.つ",
      "むい"
    ],
    "examples": [
      {
        "word": "六日",
        "reading": "むいか",
        "meaning": "six days, sixth day of the month"
      },
      {
        "word": "六",
        "reading": "ろく",
        "meaning": "six"
      },
      {
        "word": "六つ",
        "reading": "むっつ",
        "meaning": "six"
      }
    ]
  },
  {
    "kanji": "円",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "circle",
      "yen",
      "round"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "まる.い",
      "まる",
      "まど",
      "まど.か",
      "まろ.やか"
    ],
    "examples": [
      {
        "word": "丸い / 円い",
        "reading": "まるい",
        "meaning": "round, circular"
      },
      {
        "word": "円",
        "reading": "えん",
        "meaning": "circle, money"
      }
    ]
  },
  {
    "kanji": "天",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "heavens",
      "sky",
      "imperial"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "あまつ",
      "あめ",
      "あま-"
    ],
    "examples": [
      {
        "word": "天気",
        "reading": "てんき",
        "meaning": "weather"
      },
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "meaning": "weather forecast"
      },
      {
        "word": "天然",
        "reading": "てんねん",
        "meaning": "nature, spontaneity"
      },
      {
        "word": "天候",
        "reading": "てんこう",
        "meaning": "weather"
      }
    ]
  },
  {
    "kanji": "日",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "day",
      "sun",
      "japan",
      "counter for days"
    ],
    "onyomi": [
      "ニチ",
      "ジツ"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "-か"
    ],
    "examples": [
      {
        "word": "六日",
        "reading": "むいか",
        "meaning": "six days, sixth day of the month"
      },
      {
        "word": "一日",
        "reading": "いちにち",
        "meaning": "(1) one day, (2) first of month"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "meaning": "today"
      },
      {
        "word": "木曜日",
        "reading": "もくようび",
        "meaning": "Thursday"
      }
    ]
  },
  {
    "kanji": "月",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "month",
      "moon"
    ],
    "onyomi": [
      "ゲツ",
      "ガツ"
    ],
    "kunyomi": [
      "つき"
    ],
    "examples": [
      {
        "word": "一月",
        "reading": "ひとつき",
        "meaning": "one month"
      },
      {
        "word": "毎月",
        "reading": "まいげつ / まいつき",
        "meaning": "every month"
      },
      {
        "word": "来月",
        "reading": "らいげつ",
        "meaning": "next month"
      },
      {
        "word": "先月",
        "reading": "せんげつ",
        "meaning": "last month"
      }
    ]
  },
  {
    "kanji": "木",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "tree",
      "wood"
    ],
    "onyomi": [
      "ボク",
      "モク"
    ],
    "kunyomi": [
      "き",
      "こ-"
    ],
    "examples": [
      {
        "word": "木曜日",
        "reading": "もくようび",
        "meaning": "Thursday"
      },
      {
        "word": "木",
        "reading": "き",
        "meaning": "tree, wood"
      },
      {
        "word": "木綿",
        "reading": "もめん",
        "meaning": "cotton"
      },
      {
        "word": "木曜",
        "reading": "もくよう",
        "meaning": "Thursday"
      }
    ]
  },
  {
    "kanji": "水",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "water"
    ],
    "onyomi": [
      "スイ"
    ],
    "kunyomi": [
      "みず",
      "みず-"
    ],
    "examples": [
      {
        "word": "水",
        "reading": "みず",
        "meaning": "water"
      },
      {
        "word": "水曜日",
        "reading": "すいようび",
        "meaning": "Wednesday"
      },
      {
        "word": "水泳",
        "reading": "すいえい",
        "meaning": "swimming"
      },
      {
        "word": "水道",
        "reading": "すいどう",
        "meaning": "water supply"
      }
    ]
  },
  {
    "kanji": "火",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "fire"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "ほ-"
    ],
    "examples": [
      {
        "word": "火曜日",
        "reading": "かようび",
        "meaning": "Tuesday"
      },
      {
        "word": "火事",
        "reading": "かじ",
        "meaning": "fire"
      },
      {
        "word": "火",
        "reading": "ひ",
        "meaning": "fire"
      },
      {
        "word": "火曜",
        "reading": "かよう",
        "meaning": "(abbr) Tuesday"
      }
    ]
  },
  {
    "kanji": "今",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "now"
    ],
    "onyomi": [
      "コン",
      "キン"
    ],
    "kunyomi": [
      "いま"
    ],
    "examples": [
      {
        "word": "今年",
        "reading": "ことし",
        "meaning": "this year"
      },
      {
        "word": "今朝",
        "reading": "けさ",
        "meaning": "this morning"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "meaning": "today"
      },
      {
        "word": "今晩",
        "reading": "こんばん",
        "meaning": "this evening"
      }
    ]
  },
  {
    "kanji": "午",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "noon",
      "sign of the horse",
      "11am-1pm",
      "seventh sign of chinese zodiac"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "うま"
    ],
    "examples": [
      {
        "word": "午後",
        "reading": "ごご",
        "meaning": "afternoon"
      },
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "morning"
      },
      {
        "word": "正午",
        "reading": "しょうご",
        "meaning": "noon, mid-day"
      }
    ]
  },
  {
    "kanji": "友",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "friend"
    ],
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [
      "とも"
    ],
    "examples": [
      {
        "word": "友達",
        "reading": "ともだち",
        "meaning": "friend"
      },
      {
        "word": "友人",
        "reading": "ゆうじん",
        "meaning": "friend"
      },
      {
        "word": "友情",
        "reading": "ゆうじょう",
        "meaning": "friendship, fellowship"
      },
      {
        "word": "友",
        "reading": "とも",
        "meaning": "friend, companion, pal"
      }
    ]
  },
  {
    "kanji": "父",
    "jlpt": 5,
    "strokeCount": 4,
    "meanings": [
      "father"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "ちち"
    ],
    "examples": [
      {
        "word": "お父さん",
        "reading": "おとうさん",
        "meaning": "(honorable) father"
      },
      {
        "word": "伯父 / 叔父",
        "reading": "おじいさん",
        "meaning": "grandfather, male senior citizen"
      },
      {
        "word": "祖父",
        "reading": "そふ",
        "meaning": "grandfather"
      },
      {
        "word": "父親",
        "reading": "ちちおや",
        "meaning": "father"
      }
    ]
  },
  {
    "kanji": "出",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "exit",
      "leave",
      "go out",
      "come out",
      "put out",
      "protrude"
    ],
    "onyomi": [
      "シュツ",
      "スイ"
    ],
    "kunyomi": [
      "で.る",
      "-で",
      "だ.す",
      "-だ.す",
      "い.でる",
      "い.だす"
    ],
    "examples": [
      {
        "word": "出す",
        "reading": "だす",
        "meaning": "to put out"
      },
      {
        "word": "出口",
        "reading": "でぐち",
        "meaning": "exit"
      },
      {
        "word": "出る",
        "reading": "でる",
        "meaning": "to appear, to leave"
      },
      {
        "word": "出かける",
        "reading": "でかける",
        "meaning": "to go out"
      }
    ]
  },
  {
    "kanji": "右",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "right"
    ],
    "onyomi": [
      "ウ",
      "ユウ"
    ],
    "kunyomi": [
      "みぎ"
    ],
    "examples": [
      {
        "word": "右",
        "reading": "みぎ",
        "meaning": "right side"
      },
      {
        "word": "左右",
        "reading": "さゆう",
        "meaning": "(1) left and right, (2) influence, control, domination"
      }
    ]
  },
  {
    "kanji": "四",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "four"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "よ",
      "よ.つ",
      "よっ.つ",
      "よん"
    ],
    "examples": [
      {
        "word": "四",
        "reading": "し / よん",
        "meaning": "four"
      },
      {
        "word": "四つ",
        "reading": "よっつ",
        "meaning": "four"
      },
      {
        "word": "四日",
        "reading": "よっか",
        "meaning": "four days, fouth day of the month"
      }
    ]
  },
  {
    "kanji": "左",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "left"
    ],
    "onyomi": [
      "サ",
      "シャ"
    ],
    "kunyomi": [
      "ひだり"
    ],
    "examples": [
      {
        "word": "左",
        "reading": "ひだり",
        "meaning": "left hand side"
      },
      {
        "word": "左右",
        "reading": "さゆう",
        "meaning": "(1) left and right, (2) influence, control, domination"
      }
    ]
  },
  {
    "kanji": "本",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "book",
      "present",
      "main",
      "origin",
      "true",
      "real",
      "counter for long cylindrical things"
    ],
    "onyomi": [
      "ホン"
    ],
    "kunyomi": [
      "もと"
    ],
    "examples": [
      {
        "word": "本",
        "reading": "ほん",
        "meaning": "book"
      },
      {
        "word": "本棚",
        "reading": "ほんだな",
        "meaning": "bookshelves"
      },
      {
        "word": "資本",
        "reading": "しほん",
        "meaning": "funds, capital"
      },
      {
        "word": "日本",
        "reading": "にっぽん",
        "meaning": "Japan"
      }
    ]
  },
  {
    "kanji": "白",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "white"
    ],
    "onyomi": [
      "ハク",
      "ビャク"
    ],
    "kunyomi": [
      "しろ",
      "しら-",
      "しろ.い"
    ],
    "examples": [
      {
        "word": "白",
        "reading": "しろ",
        "meaning": "white"
      },
      {
        "word": "白い",
        "reading": "しろい",
        "meaning": "white"
      }
    ]
  },
  {
    "kanji": "北",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "north"
    ],
    "onyomi": [
      "ホク"
    ],
    "kunyomi": [
      "きた"
    ],
    "examples": [
      {
        "word": "北",
        "reading": "きた",
        "meaning": "north"
      }
    ]
  },
  {
    "kanji": "半",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "half",
      "middle",
      "odd number",
      "semi-",
      "part-"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "なか.ば"
    ],
    "examples": [
      {
        "word": "半分",
        "reading": "はんぶん",
        "meaning": "half minute"
      },
      {
        "word": "半",
        "reading": "はん",
        "meaning": "half"
      },
      {
        "word": "半ば",
        "reading": "なかば",
        "meaning": "middle, half, semi, halfway, partly"
      },
      {
        "word": "大半",
        "reading": "たいはん",
        "meaning": "majority, mostly, generally"
      }
    ]
  },
  {
    "kanji": "外",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "outside"
    ],
    "onyomi": [
      "ガイ",
      "ゲ"
    ],
    "kunyomi": [
      "そと",
      "ほか",
      "はず.す",
      "はず.れる",
      "と-"
    ],
    "examples": [
      {
        "word": "外国",
        "reading": "がいこく",
        "meaning": "foreign country"
      },
      {
        "word": "外",
        "reading": "そと",
        "meaning": "outside"
      },
      {
        "word": "外国人",
        "reading": "がいこくじん",
        "meaning": "foreigner"
      },
      {
        "word": "郊外",
        "reading": "こうがい",
        "meaning": "outskirts"
      }
    ]
  },
  {
    "kanji": "母",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "mother"
    ],
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "はは",
      "も"
    ],
    "examples": [
      {
        "word": "お母さん",
        "reading": "おかあさん",
        "meaning": "(honorable) mother"
      },
      {
        "word": "伯母さん / 叔母さん",
        "reading": "おばさん",
        "meaning": "aunt"
      },
      {
        "word": "祖母",
        "reading": "そぼ",
        "meaning": "grandmother"
      },
      {
        "word": "母親",
        "reading": "ははおや",
        "meaning": "mother"
      }
    ]
  },
  {
    "kanji": "生",
    "jlpt": 5,
    "strokeCount": 5,
    "meanings": [
      "life",
      "genuine",
      "birth"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける",
      "う.まれる",
      "うま.れる",
      "う.まれ",
      "うまれ",
      "う.む",
      "お.う",
      "は.える",
      "は.やす",
      "き",
      "なま",
      "なま-",
      "な.る",
      "な.す",
      "む.す",
      "-う"
    ],
    "examples": [
      {
        "word": "生徒",
        "reading": "せいと",
        "meaning": "pupil"
      },
      {
        "word": "生まれる",
        "reading": "うまれる",
        "meaning": "to be born"
      },
      {
        "word": "学生",
        "reading": "がくせい",
        "meaning": "student"
      },
      {
        "word": "先生",
        "reading": "せんせい",
        "meaning": "teacher, doctor"
      }
    ]
  },
  {
    "kanji": "休",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "rest",
      "day off",
      "retire",
      "sleep"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "やす.む",
      "やす.まる",
      "やす.める"
    ],
    "examples": [
      {
        "word": "休み",
        "reading": "やすみ",
        "meaning": "rest, holiday"
      },
      {
        "word": "夏休み",
        "reading": "なつやすみ",
        "meaning": "summer holiday"
      },
      {
        "word": "休む",
        "reading": "やすむ",
        "meaning": "to rest"
      },
      {
        "word": "昼休み",
        "reading": "ひるやすみ",
        "meaning": "noon break"
      }
    ]
  },
  {
    "kanji": "先",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "before",
      "ahead",
      "previous",
      "future",
      "precedence"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "さき",
      "ま.ず"
    ],
    "examples": [
      {
        "word": "先週",
        "reading": "せんしゅう",
        "meaning": "last week"
      },
      {
        "word": "先生",
        "reading": "せんせい",
        "meaning": "teacher, doctor"
      },
      {
        "word": "先月",
        "reading": "せんげつ",
        "meaning": "last month"
      },
      {
        "word": "先",
        "reading": "さき",
        "meaning": "the future, previous"
      }
    ]
  },
  {
    "kanji": "名",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "name",
      "noted",
      "distinguished",
      "reputation"
    ],
    "onyomi": [
      "メイ",
      "ミョウ"
    ],
    "kunyomi": [
      "な",
      "-な"
    ],
    "examples": [
      {
        "word": "有名",
        "reading": "ゆうめい",
        "meaning": "famous"
      },
      {
        "word": "名前",
        "reading": "なまえ",
        "meaning": "name"
      },
      {
        "word": "名",
        "reading": "な",
        "meaning": "name, reputation"
      },
      {
        "word": "名人",
        "reading": "めいじん",
        "meaning": "master, expert"
      }
    ]
  },
  {
    "kanji": "年",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "year",
      "counter for years"
    ],
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [
      "とし"
    ],
    "examples": [
      {
        "word": "年",
        "reading": "とし",
        "meaning": "year"
      },
      {
        "word": "今年",
        "reading": "ことし",
        "meaning": "this year"
      },
      {
        "word": "万年筆",
        "reading": "まんねんひつ",
        "meaning": "fountain pen"
      },
      {
        "word": "さ来年",
        "reading": "さらいねん",
        "meaning": "year after next"
      }
    ]
  },
  {
    "kanji": "気",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "spirit",
      "mind",
      "air",
      "atmosphere",
      "mood"
    ],
    "onyomi": [
      "キ",
      "ケ"
    ],
    "kunyomi": [
      "いき"
    ],
    "examples": [
      {
        "word": "電気",
        "reading": "でんき",
        "meaning": "electricity, electric light"
      },
      {
        "word": "病気",
        "reading": "びょうき",
        "meaning": "illness"
      },
      {
        "word": "元気",
        "reading": "げんき",
        "meaning": "health, vitality"
      },
      {
        "word": "天気",
        "reading": "てんき",
        "meaning": "weather"
      }
    ]
  },
  {
    "kanji": "百",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "hundred"
    ],
    "onyomi": [
      "ヒャク",
      "ビャク"
    ],
    "kunyomi": [
      "もも"
    ],
    "examples": [
      {
        "word": "百",
        "reading": "ひゃく",
        "meaning": "hundred"
      },
      {
        "word": "八百屋",
        "reading": "やおや",
        "meaning": "greengrocer"
      }
    ]
  },
  {
    "kanji": "毎",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "every"
    ],
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "ごと",
      "-ごと.に"
    ],
    "examples": [
      {
        "word": "毎朝",
        "reading": "まいあさ",
        "meaning": "every morning"
      },
      {
        "word": "毎月",
        "reading": "まいげつ / まいつき",
        "meaning": "every month"
      },
      {
        "word": "毎週",
        "reading": "まいしゅう",
        "meaning": "every week"
      },
      {
        "word": "毎晩",
        "reading": "まいばん",
        "meaning": "every night"
      }
    ]
  },
  {
    "kanji": "行",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "going",
      "journey",
      "carry out",
      "conduct",
      "act",
      "line",
      "row",
      "bank"
    ],
    "onyomi": [
      "コウ",
      "ギョウ",
      "アン"
    ],
    "kunyomi": [
      "い.く",
      "ゆ.く",
      "-ゆ.き",
      "-ゆき",
      "-い.き",
      "-いき",
      "おこな.う",
      "おこ.なう"
    ],
    "examples": [
      {
        "word": "銀行",
        "reading": "ぎんこう",
        "meaning": "bank"
      },
      {
        "word": "旅行",
        "reading": "りょこう",
        "meaning": "travel"
      },
      {
        "word": "行く",
        "reading": "いく",
        "meaning": "to go"
      },
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "meaning": "aeroplane"
      }
    ]
  },
  {
    "kanji": "西",
    "jlpt": 5,
    "strokeCount": 6,
    "meanings": [
      "west",
      "spain"
    ],
    "onyomi": [
      "セイ",
      "サイ",
      "ス"
    ],
    "kunyomi": [
      "にし"
    ],
    "examples": [
      {
        "word": "西",
        "reading": "にし",
        "meaning": "west"
      },
      {
        "word": "西洋",
        "reading": "せいよう",
        "meaning": "western countries"
      }
    ]
  },
  {
    "kanji": "男",
    "jlpt": 5,
    "strokeCount": 7,
    "meanings": [
      "male"
    ],
    "onyomi": [
      "ダン",
      "ナン"
    ],
    "kunyomi": [
      "おとこ",
      "お"
    ],
    "examples": [
      {
        "word": "男の子",
        "reading": "おとこのこ",
        "meaning": "boy"
      },
      {
        "word": "男",
        "reading": "おとこ",
        "meaning": "man"
      },
      {
        "word": "男性",
        "reading": "だんせい",
        "meaning": "male"
      },
      {
        "word": "男子",
        "reading": "だんし",
        "meaning": "youth, young man"
      }
    ]
  },
  {
    "kanji": "見",
    "jlpt": 5,
    "strokeCount": 7,
    "meanings": [
      "see",
      "hopes",
      "chances",
      "idea",
      "opinion",
      "look at",
      "visible"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "み.る",
      "み.える",
      "み.せる"
    ],
    "examples": [
      {
        "word": "見せる",
        "reading": "みせる",
        "meaning": "to show"
      },
      {
        "word": "見る  観る",
        "reading": "みる",
        "meaning": "to see, to watch"
      },
      {
        "word": "花見",
        "reading": "はなみ",
        "meaning": "cherry-blossom viewing"
      },
      {
        "word": "見つかる",
        "reading": "みつかる",
        "meaning": "to be discovered"
      }
    ]
  },
  {
    "kanji": "車",
    "jlpt": 5,
    "strokeCount": 7,
    "meanings": [
      "car"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "くるま"
    ],
    "examples": [
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "bicycle"
      },
      {
        "word": "電車",
        "reading": "でんしゃ",
        "meaning": "electric train"
      },
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "meaning": "automobile"
      },
      {
        "word": "車",
        "reading": "くるま",
        "meaning": "car, vehicle"
      }
    ]
  },
  {
    "kanji": "何",
    "jlpt": 5,
    "strokeCount": 7,
    "meanings": [
      "what"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "なに",
      "なん",
      "なに-",
      "なん-"
    ],
    "examples": [
      {
        "word": "何",
        "reading": "なん / なに",
        "meaning": "what"
      },
      {
        "word": "何か",
        "reading": "なにか",
        "meaning": "something"
      },
      {
        "word": "何とか",
        "reading": "なんとか",
        "meaning": "somehow, anyhow, one way or another"
      },
      {
        "word": "何で",
        "reading": "なんで",
        "meaning": "Why?, What for?"
      }
    ]
  },
  {
    "kanji": "来",
    "jlpt": 5,
    "strokeCount": 7,
    "meanings": [
      "come",
      "due",
      "next",
      "cause",
      "become"
    ],
    "onyomi": [
      "ライ",
      "タイ"
    ],
    "kunyomi": [
      "く.る",
      "きた.る",
      "きた.す",
      "き.たす",
      "き.たる",
      "き",
      "こ"
    ],
    "examples": [
      {
        "word": "来週",
        "reading": "らいしゅう",
        "meaning": "next week"
      },
      {
        "word": "さ来年",
        "reading": "さらいねん",
        "meaning": "year after next"
      },
      {
        "word": "来月",
        "reading": "らいげつ",
        "meaning": "next month"
      },
      {
        "word": "来る",
        "reading": "くる",
        "meaning": "to come"
      }
    ]
  },
  {
    "kanji": "学",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "study",
      "learning",
      "science"
    ],
    "onyomi": [
      "ガク"
    ],
    "kunyomi": [
      "まな.ぶ"
    ],
    "examples": [
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "university"
      },
      {
        "word": "学校",
        "reading": "がっこう",
        "meaning": "school"
      },
      {
        "word": "学生",
        "reading": "がくせい",
        "meaning": "student"
      },
      {
        "word": "留学生",
        "reading": "りゅうがくせい",
        "meaning": "overseas student"
      }
    ]
  },
  {
    "kanji": "金",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "gold"
    ],
    "onyomi": [
      "キン",
      "コン",
      "ゴン"
    ],
    "kunyomi": [
      "かね",
      "かな-",
      "-がね"
    ],
    "examples": [
      {
        "word": "金曜日",
        "reading": "きんようび",
        "meaning": "Friday"
      },
      {
        "word": "お金",
        "reading": "おかね",
        "meaning": "money"
      },
      {
        "word": "お・金持ち",
        "reading": "かねもち / おかねもち",
        "meaning": "rich man"
      },
      {
        "word": "料金",
        "reading": "りょうきん",
        "meaning": "fee, charge, fare"
      }
    ]
  },
  {
    "kanji": "雨",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "rain"
    ],
    "onyomi": [
      "ウ"
    ],
    "kunyomi": [
      "あめ",
      "あま-",
      "-さめ"
    ],
    "examples": [
      {
        "word": "雨",
        "reading": "あめ",
        "meaning": "rain"
      },
      {
        "word": "梅雨",
        "reading": "つゆ",
        "meaning": "rainy season, rain during the rainy season"
      }
    ]
  },
  {
    "kanji": "国",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "country"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "くに"
    ],
    "examples": [
      {
        "word": "外国",
        "reading": "がいこく",
        "meaning": "foreign country"
      },
      {
        "word": "国",
        "reading": "くに",
        "meaning": "country"
      },
      {
        "word": "外国人",
        "reading": "がいこくじん",
        "meaning": "foreigner"
      },
      {
        "word": "国際",
        "reading": "こくさい",
        "meaning": "international"
      }
    ]
  },
  {
    "kanji": "東",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "east"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひがし"
    ],
    "examples": [
      {
        "word": "東",
        "reading": "ひがし",
        "meaning": "east"
      }
    ]
  },
  {
    "kanji": "長",
    "jlpt": 5,
    "strokeCount": 8,
    "meanings": [
      "long",
      "leader",
      "superior",
      "senior"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "なが.い",
      "おさ"
    ],
    "examples": [
      {
        "word": "長い",
        "reading": "ながい",
        "meaning": "long"
      },
      {
        "word": "社長",
        "reading": "しゃちょう",
        "meaning": "company president"
      },
      {
        "word": "部長",
        "reading": "ぶちょう",
        "meaning": "head of a section"
      },
      {
        "word": "課長",
        "reading": "かちょう",
        "meaning": "section manager"
      }
    ]
  },
  {
    "kanji": "前",
    "jlpt": 5,
    "strokeCount": 9,
    "meanings": [
      "in front",
      "before"
    ],
    "onyomi": [
      "ゼン"
    ],
    "kunyomi": [
      "まえ",
      "-まえ"
    ],
    "examples": [
      {
        "word": "前",
        "reading": "まえ",
        "meaning": "before"
      },
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "morning"
      },
      {
        "word": "名前",
        "reading": "なまえ",
        "meaning": "name"
      },
      {
        "word": "以前",
        "reading": "いぜん",
        "meaning": "ago, since, before, previous"
      }
    ]
  },
  {
    "kanji": "南",
    "jlpt": 5,
    "strokeCount": 9,
    "meanings": [
      "south"
    ],
    "onyomi": [
      "ナン",
      "ナ"
    ],
    "kunyomi": [
      "みなみ"
    ],
    "examples": [
      {
        "word": "南",
        "reading": "みなみ",
        "meaning": "south"
      }
    ]
  },
  {
    "kanji": "後",
    "jlpt": 5,
    "strokeCount": 9,
    "meanings": [
      "behind",
      "back",
      "later"
    ],
    "onyomi": [
      "ゴ",
      "コウ"
    ],
    "kunyomi": [
      "のち",
      "うし.ろ",
      "うしろ",
      "あと",
      "おく.れる"
    ],
    "examples": [
      {
        "word": "午後",
        "reading": "ごご",
        "meaning": "afternoon"
      },
      {
        "word": "後ろ",
        "reading": "うしろ",
        "meaning": "behind"
      },
      {
        "word": "後",
        "reading": "あと",
        "meaning": "afterwards"
      },
      {
        "word": "最後",
        "reading": "さいご",
        "meaning": "last, end"
      }
    ]
  },
  {
    "kanji": "食",
    "jlpt": 5,
    "strokeCount": 9,
    "meanings": [
      "eat",
      "food"
    ],
    "onyomi": [
      "ショク",
      "ジキ"
    ],
    "kunyomi": [
      "く.う",
      "く.らう",
      "た.べる",
      "は.む"
    ],
    "examples": [
      {
        "word": "食べ物",
        "reading": "たべもの",
        "meaning": "food"
      },
      {
        "word": "食堂",
        "reading": "しょくどう",
        "meaning": "dining hall"
      },
      {
        "word": "食べる",
        "reading": "たべる",
        "meaning": "to eat"
      },
      {
        "word": "食料品",
        "reading": "しょくりょうひん",
        "meaning": "groceries"
      }
    ]
  },
  {
    "kanji": "校",
    "jlpt": 5,
    "strokeCount": 10,
    "meanings": [
      "exam",
      "school",
      "printing",
      "proof",
      "correction"
    ],
    "onyomi": [
      "コウ",
      "キョウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "学校",
        "reading": "がっこう",
        "meaning": "school"
      },
      {
        "word": "高等学校",
        "reading": "こうとうがっこう",
        "meaning": "high school"
      },
      {
        "word": "小学校",
        "reading": "しょうがっこう",
        "meaning": "elementary school"
      },
      {
        "word": "中学校",
        "reading": "ちゅうがっこう",
        "meaning": "junior high school, middle school"
      }
    ]
  },
  {
    "kanji": "時",
    "jlpt": 5,
    "strokeCount": 10,
    "meanings": [
      "time",
      "hour"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "とき",
      "-どき"
    ],
    "examples": [
      {
        "word": "時々",
        "reading": "ときどき",
        "meaning": "sometimes"
      },
      {
        "word": "時間",
        "reading": "じかん",
        "meaning": "time"
      },
      {
        "word": "時計",
        "reading": "とけい",
        "meaning": "watch, clock"
      },
      {
        "word": "時代",
        "reading": "じだい",
        "meaning": "era"
      }
    ]
  },
  {
    "kanji": "高",
    "jlpt": 5,
    "strokeCount": 10,
    "meanings": [
      "tall",
      "high",
      "expensive"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "たか.い",
      "たか",
      "-だか",
      "たか.まる",
      "たか.める"
    ],
    "examples": [
      {
        "word": "高い",
        "reading": "たかい",
        "meaning": "tall, expensive"
      },
      {
        "word": "高等学校",
        "reading": "こうとうがっこう",
        "meaning": "high school"
      },
      {
        "word": "高校生",
        "reading": "こうこうせい",
        "meaning": "high school student"
      },
      {
        "word": "高校",
        "reading": "こうこう",
        "meaning": "high school"
      }
    ]
  },
  {
    "kanji": "書",
    "jlpt": 5,
    "strokeCount": 10,
    "meanings": [
      "write"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "か.く",
      "-が.き",
      "-がき"
    ],
    "examples": [
      {
        "word": "葉書",
        "reading": "はがき",
        "meaning": "postcard"
      },
      {
        "word": "辞書",
        "reading": "じしょ",
        "meaning": "dictionary"
      },
      {
        "word": "書く",
        "reading": "かく",
        "meaning": "to write"
      },
      {
        "word": "図書館",
        "reading": "としょかん",
        "meaning": "library"
      }
    ]
  },
  {
    "kanji": "間",
    "jlpt": 5,
    "strokeCount": 12,
    "meanings": [
      "interval",
      "space"
    ],
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "あいだ",
      "ま",
      "あい"
    ],
    "examples": [
      {
        "word": "時間",
        "reading": "じかん",
        "meaning": "time"
      },
      {
        "word": "昼間",
        "reading": "ひるま",
        "meaning": "daytime, during the day"
      },
      {
        "word": "間違える",
        "reading": "まちがえる",
        "meaning": "to make a mistake"
      },
      {
        "word": "間",
        "reading": "あいだ",
        "meaning": "a space"
      }
    ]
  },
  {
    "kanji": "話",
    "jlpt": 5,
    "strokeCount": 13,
    "meanings": [
      "tale",
      "talk"
    ],
    "onyomi": [
      "ワ"
    ],
    "kunyomi": [
      "はな.す",
      "はなし"
    ],
    "examples": [
      {
        "word": "電話",
        "reading": "でんわ",
        "meaning": "telephone"
      },
      {
        "word": "話",
        "reading": "はなし",
        "meaning": "talk, story"
      },
      {
        "word": "話す",
        "reading": "はなす",
        "meaning": "to speak"
      },
      {
        "word": "世話",
        "reading": "せわ・する",
        "meaning": "to look after"
      }
    ]
  },
  {
    "kanji": "電",
    "jlpt": 5,
    "strokeCount": 13,
    "meanings": [
      "electricity"
    ],
    "onyomi": [
      "デン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "電気",
        "reading": "でんき",
        "meaning": "electricity, electric light"
      },
      {
        "word": "電話",
        "reading": "でんわ",
        "meaning": "telephone"
      },
      {
        "word": "電車",
        "reading": "でんしゃ",
        "meaning": "electric train"
      },
      {
        "word": "電報",
        "reading": "でんぽう",
        "meaning": "telegram"
      }
    ]
  },
  {
    "kanji": "聞",
    "jlpt": 5,
    "strokeCount": 14,
    "meanings": [
      "hear",
      "ask",
      "listen"
    ],
    "onyomi": [
      "ブン",
      "モン"
    ],
    "kunyomi": [
      "き.く",
      "き.こえる"
    ],
    "examples": [
      {
        "word": "新聞",
        "reading": "しんぶん",
        "meaning": "newspaper"
      },
      {
        "word": "聞く",
        "reading": "きく",
        "meaning": "to hear, to listen to, to ask"
      },
      {
        "word": "聞こえる",
        "reading": "きこえる",
        "meaning": "to be heard"
      },
      {
        "word": "新聞社",
        "reading": "しんぶんしゃ",
        "meaning": "newspaper company"
      }
    ]
  },
  {
    "kanji": "語",
    "jlpt": 5,
    "strokeCount": 14,
    "meanings": [
      "word",
      "speech",
      "language"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "かた.る",
      "かた.らう"
    ],
    "examples": [
      {
        "word": "英語",
        "reading": "えいご",
        "meaning": "English language"
      },
      {
        "word": "物語",
        "reading": "ものがたり",
        "meaning": "tale, story, legend"
      },
      {
        "word": "語学",
        "reading": "ごがく",
        "meaning": "language study"
      },
      {
        "word": "語る",
        "reading": "かたる",
        "meaning": "to talk, to tell, to recite"
      }
    ]
  },
  {
    "kanji": "読",
    "jlpt": 5,
    "strokeCount": 14,
    "meanings": [
      "read"
    ],
    "onyomi": [
      "ドク",
      "トク",
      "トウ"
    ],
    "kunyomi": [
      "よ.む",
      "-よ.み"
    ],
    "examples": [
      {
        "word": "読む",
        "reading": "よむ",
        "meaning": "to read"
      },
      {
        "word": "読書",
        "reading": "どくしょ",
        "meaning": "reading"
      },
      {
        "word": "読み",
        "reading": "よみ",
        "meaning": "reading"
      }
    ]
  },
  {
    "kanji": "力",
    "jlpt": 4,
    "strokeCount": 2,
    "meanings": [
      "power",
      "strength",
      "strong",
      "strain",
      "bear up",
      "exert"
    ],
    "onyomi": [
      "リョク",
      "リキ",
      "リイ"
    ],
    "kunyomi": [
      "ちから"
    ],
    "examples": [
      {
        "word": "力",
        "reading": "ちから",
        "meaning": "strength, power"
      },
      {
        "word": "協力",
        "reading": "きょうりょく",
        "meaning": "cooperation, collaboration"
      },
      {
        "word": "能力",
        "reading": "のうりょく",
        "meaning": "ability, faculty"
      },
      {
        "word": "強力",
        "reading": "きょうりょく",
        "meaning": "herculean strength, mountain carrier-guide"
      }
    ]
  },
  {
    "kanji": "口",
    "jlpt": 4,
    "strokeCount": 3,
    "meanings": [
      "mouth"
    ],
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "くち"
    ],
    "examples": [
      {
        "word": "人口",
        "reading": "じんこう",
        "meaning": "population"
      },
      {
        "word": "口",
        "reading": "くち",
        "meaning": "mouth, opening"
      },
      {
        "word": "出口",
        "reading": "でぐち",
        "meaning": "exit"
      },
      {
        "word": "入口",
        "reading": "いりぐち",
        "meaning": "entrance"
      }
    ]
  },
  {
    "kanji": "工",
    "jlpt": 4,
    "strokeCount": 3,
    "meanings": [
      "craft",
      "construction",
      "katakana e radical (no. 48)"
    ],
    "onyomi": [
      "コウ",
      "ク",
      "グ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "工場",
        "reading": "こうじょう",
        "meaning": "factory"
      },
      {
        "word": "工業",
        "reading": "こうぎょう",
        "meaning": "the manufacturing industry"
      },
      {
        "word": "人工",
        "reading": "じんこう",
        "meaning": "artificial, manmade, human work, human skill, artificiality"
      }
    ]
  },
  {
    "kanji": "夕",
    "jlpt": 4,
    "strokeCount": 3,
    "meanings": [
      "evening"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "ゆう"
    ],
    "examples": [
      {
        "word": "夕方",
        "reading": "ゆうがた",
        "meaning": "evening"
      },
      {
        "word": "夕飯",
        "reading": "ゆうはん",
        "meaning": "dinner"
      },
      {
        "word": "夕べ",
        "reading": "ゆうべ",
        "meaning": "evening"
      }
    ]
  },
  {
    "kanji": "手",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "hand"
    ],
    "onyomi": [
      "シュ",
      "ズ"
    ],
    "kunyomi": [
      "て",
      "て-",
      "-て",
      "た-"
    ],
    "examples": [
      {
        "word": "手伝う",
        "reading": "てつだう",
        "meaning": "to assist"
      },
      {
        "word": "運転手",
        "reading": "うんてんしゅ",
        "meaning": "driver"
      },
      {
        "word": "手袋",
        "reading": "てぶくろ",
        "meaning": "glove"
      },
      {
        "word": "手紙",
        "reading": "てがみ",
        "meaning": "letter"
      }
    ]
  },
  {
    "kanji": "文",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "sentence",
      "literature",
      "style",
      "art",
      "decoration",
      "figures",
      "plan",
      "literary radical (no. 67)"
    ],
    "onyomi": [
      "ブン",
      "モン"
    ],
    "kunyomi": [
      "ふみ",
      "あや"
    ],
    "examples": [
      {
        "word": "文学",
        "reading": "ぶんがく",
        "meaning": "literature"
      },
      {
        "word": "文法",
        "reading": "ぶんぽう",
        "meaning": "grammar"
      },
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "culture"
      },
      {
        "word": "作文",
        "reading": "さくぶん",
        "meaning": "composition, writing"
      }
    ]
  },
  {
    "kanji": "犬",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "dog"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "いぬ",
      "いぬ-"
    ],
    "examples": [
      {
        "word": "犬",
        "reading": "いぬ",
        "meaning": "dog"
      }
    ]
  },
  {
    "kanji": "元",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "beginning",
      "former time",
      "origin"
    ],
    "onyomi": [
      "ゲン",
      "ガン"
    ],
    "kunyomi": [
      "もと"
    ],
    "examples": [
      {
        "word": "元気",
        "reading": "げんき",
        "meaning": "health, vitality"
      },
      {
        "word": "元",
        "reading": "もと",
        "meaning": "(1) origin, original, (2) former"
      }
    ]
  },
  {
    "kanji": "公",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "public",
      "prince",
      "official",
      "governmental"
    ],
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "おおやけ"
    ],
    "examples": [
      {
        "word": "公務員",
        "reading": "こうむいん",
        "meaning": "government worker"
      },
      {
        "word": "公園",
        "reading": "こうえん",
        "meaning": "park"
      },
      {
        "word": "公平",
        "reading": "こうへい",
        "meaning": "fairness, impartial, justice"
      }
    ]
  },
  {
    "kanji": "切",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "cut",
      "cutoff",
      "be sharp"
    ],
    "onyomi": [
      "セツ",
      "サイ"
    ],
    "kunyomi": [
      "き.る",
      "-き.る",
      "き.り",
      "-き.り",
      "-ぎ.り",
      "き.れる",
      "-き.れる",
      "き.れ",
      "-き.れ",
      "-ぎ.れ"
    ],
    "examples": [
      {
        "word": "親切",
        "reading": "しんせつ",
        "meaning": "kindness"
      },
      {
        "word": "切符",
        "reading": "きっぷ",
        "meaning": "ticket"
      },
      {
        "word": "大切",
        "reading": "たいせつ",
        "meaning": "important"
      },
      {
        "word": "切る",
        "reading": "きる",
        "meaning": "to cut"
      }
    ]
  },
  {
    "kanji": "少",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "few",
      "little"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "すく.ない",
      "すこ.し"
    ],
    "examples": [
      {
        "word": "少し",
        "reading": "すこし",
        "meaning": "few"
      },
      {
        "word": "少ない",
        "reading": "すくない",
        "meaning": "a few"
      },
      {
        "word": "少年",
        "reading": "しょうねん",
        "meaning": "boys, juveniles"
      },
      {
        "word": "少しも",
        "reading": "すこしも",
        "meaning": "anything of, not one bit"
      }
    ]
  },
  {
    "kanji": "心",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "heart",
      "mind",
      "spirit",
      "heart radical (no. 61)"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "こころ",
      "-ごころ"
    ],
    "examples": [
      {
        "word": "心",
        "reading": "こころ",
        "meaning": "core, heart"
      },
      {
        "word": "心配",
        "reading": "しんぱい・する",
        "meaning": "to worry"
      },
      {
        "word": "安心",
        "reading": "あんしん",
        "meaning": "relief"
      },
      {
        "word": "関心",
        "reading": "かんしん",
        "meaning": "concern, interest"
      }
    ]
  },
  {
    "kanji": "方",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "direction",
      "person",
      "alternative"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "かた",
      "-かた",
      "-がた"
    ],
    "examples": [
      {
        "word": "仕方",
        "reading": "しかた",
        "meaning": "method"
      },
      {
        "word": "両方",
        "reading": "りょうほう",
        "meaning": "both sides"
      },
      {
        "word": "泳ぎ方",
        "reading": "およぎかた",
        "meaning": "way of swimming"
      },
      {
        "word": "夕方",
        "reading": "ゆうがた",
        "meaning": "evening"
      }
    ]
  },
  {
    "kanji": "牛",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "cow"
    ],
    "onyomi": [
      "ギュウ"
    ],
    "kunyomi": [
      "うし"
    ],
    "examples": [
      {
        "word": "牛肉",
        "reading": "ぎゅうにく",
        "meaning": "beef"
      },
      {
        "word": "牛乳",
        "reading": "ぎゅうにゅう",
        "meaning": "milk"
      },
      {
        "word": "牛",
        "reading": "うし",
        "meaning": "cattle, cow"
      }
    ]
  },
  {
    "kanji": "止",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "stop",
      "halt"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "と.まる",
      "-ど.まり",
      "と.める",
      "-と.める",
      "-ど.め",
      "とど.める",
      "とど.め",
      "とど.まる",
      "や.める",
      "や.む",
      "-や.む",
      "よ.す",
      "-さ.す",
      "-さ.し"
    ],
    "examples": [
      {
        "word": "止む",
        "reading": "やむ",
        "meaning": "to stop"
      },
      {
        "word": "止める",
        "reading": "とめる",
        "meaning": "to stop something"
      },
      {
        "word": "止まる",
        "reading": "とまる",
        "meaning": "to come to a halt"
      },
      {
        "word": "禁止",
        "reading": "きんし",
        "meaning": "prohibition, ban"
      }
    ]
  },
  {
    "kanji": "不",
    "jlpt": 4,
    "strokeCount": 4,
    "meanings": [
      "negative",
      "non-",
      "bad",
      "ugly",
      "clumsy"
    ],
    "onyomi": [
      "フ",
      "ブ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "不便",
        "reading": "ふべん",
        "meaning": "inconvenience"
      },
      {
        "word": "不平",
        "reading": "ふへい",
        "meaning": "complaint, discontent, dissatisfaction"
      },
      {
        "word": "不満",
        "reading": "ふまん",
        "meaning": "dissatisfaction, displeasure, discontent, complaints, unhappiness"
      },
      {
        "word": "不幸",
        "reading": "ふこう",
        "meaning": "unhappiness, sorrow, misfortune, disaster, accident, death"
      }
    ]
  },
  {
    "kanji": "正",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "correct",
      "justice",
      "righteous",
      "10**40"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "ただ.しい",
      "ただ.す",
      "まさ",
      "まさ.に"
    ],
    "examples": [
      {
        "word": "正しい",
        "reading": "ただしい",
        "meaning": "correct"
      },
      {
        "word": "修正",
        "reading": "しゅうせい",
        "meaning": "amendment, correction, revision, modification"
      },
      {
        "word": "正",
        "reading": "せい",
        "meaning": "(logical) true, regular"
      },
      {
        "word": "正確",
        "reading": "せいかく",
        "meaning": "accurate, punctuality, exactness, authenticity, veracity"
      }
    ]
  },
  {
    "kanji": "田",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "rice field",
      "rice paddy"
    ],
    "onyomi": [
      "デン"
    ],
    "kunyomi": [
      "た"
    ],
    "examples": [
      {
        "word": "田舎",
        "reading": "いなか",
        "meaning": "countryside"
      },
      {
        "word": "田",
        "reading": "た",
        "meaning": "rice field"
      }
    ]
  },
  {
    "kanji": "目",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "eye",
      "class",
      "look",
      "insight",
      "experience",
      "care",
      "favor"
    ],
    "onyomi": [
      "モク",
      "ボク"
    ],
    "kunyomi": [
      "め",
      "-め",
      "ま-"
    ],
    "examples": [
      {
        "word": "目",
        "reading": "め",
        "meaning": "eye"
      },
      {
        "word": "注目",
        "reading": "ちゅうもく",
        "meaning": "notice, attention, observation"
      },
      {
        "word": "目的",
        "reading": "もくてき",
        "meaning": "purpose, goal, aim, objective, intention"
      },
      {
        "word": "駄目",
        "reading": "だめ",
        "meaning": "useless, no good, hopeless"
      }
    ]
  },
  {
    "kanji": "立",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "stand up",
      "rise",
      "set up",
      "erect"
    ],
    "onyomi": [
      "リツ",
      "リュウ",
      "リットル"
    ],
    "kunyomi": [
      "た.つ",
      "-た.つ",
      "た.ち-",
      "た.てる",
      "-た.てる",
      "た.て-",
      "たて-",
      "-た.て",
      "-だ.て",
      "-だ.てる"
    ],
    "examples": [
      {
        "word": "役に立つ",
        "reading": "やくにたつ",
        "meaning": "to be helpful"
      },
      {
        "word": "立てる",
        "reading": "たてる",
        "meaning": "to stand something up"
      },
      {
        "word": "立つ",
        "reading": "たつ",
        "meaning": "to stand"
      },
      {
        "word": "立派",
        "reading": "りっぱ",
        "meaning": "splendid, fine, handsome, elegant, imposing, prominent, legal, legitimate"
      }
    ]
  },
  {
    "kanji": "兄",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "elder brother",
      "big brother"
    ],
    "onyomi": [
      "ケイ",
      "キョウ"
    ],
    "kunyomi": [
      "あに"
    ],
    "examples": [
      {
        "word": "お兄さん",
        "reading": "おにいさん",
        "meaning": "(honorable) older brother"
      },
      {
        "word": "兄弟",
        "reading": "きょうだい",
        "meaning": "(humble) siblings"
      },
      {
        "word": "兄",
        "reading": "あに",
        "meaning": "(humble) older brother"
      },
      {
        "word": "従兄弟",
        "reading": "いとこ",
        "meaning": "cousin (male)"
      }
    ]
  },
  {
    "kanji": "冬",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "winter"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ふゆ"
    ],
    "examples": [
      {
        "word": "冬",
        "reading": "ふゆ",
        "meaning": "winter"
      }
    ]
  },
  {
    "kanji": "古",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "old"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "ふる.い",
      "ふる-",
      "-ふる.す"
    ],
    "examples": [
      {
        "word": "古い",
        "reading": "ふるい",
        "meaning": "old (not used for people)"
      },
      {
        "word": "中古",
        "reading": "ちゅうこ",
        "meaning": "(1) used, second-hand, old"
      }
    ]
  },
  {
    "kanji": "台",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "pedestal",
      "a stand",
      "counter for machines and vehicles"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "うてな",
      "われ",
      "つかさ"
    ],
    "examples": [
      {
        "word": "台風",
        "reading": "たいふう",
        "meaning": "typhoon"
      },
      {
        "word": "台所",
        "reading": "だいどころ",
        "meaning": "kitchen"
      },
      {
        "word": "台",
        "reading": "だい",
        "meaning": "stand, rack, table, support"
      },
      {
        "word": "舞台",
        "reading": "ぶたい",
        "meaning": "stage (theatre)"
      }
    ]
  },
  {
    "kanji": "広",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "wide",
      "broad",
      "spacious"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "ひろ.い",
      "ひろ.まる",
      "ひろ.める",
      "ひろ.がる",
      "ひろ.げる"
    ],
    "examples": [
      {
        "word": "広い",
        "reading": "ひろい",
        "meaning": "spacious, wide"
      },
      {
        "word": "背広",
        "reading": "せびろ",
        "meaning": "business suit"
      },
      {
        "word": "広告",
        "reading": "こうこく",
        "meaning": "advertisement"
      },
      {
        "word": "広がる",
        "reading": "ひろがる",
        "meaning": "to spread (out), to extend, to stretch, to reach to, to get around"
      }
    ]
  },
  {
    "kanji": "用",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "utilize",
      "business",
      "service",
      "use",
      "employ"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "もち.いる"
    ],
    "examples": [
      {
        "word": "用",
        "reading": "よう",
        "meaning": "use"
      },
      {
        "word": "利用",
        "reading": "りよう",
        "meaning": "utilization"
      },
      {
        "word": "用意",
        "reading": "ようい",
        "meaning": "preparation"
      },
      {
        "word": "用事",
        "reading": "ようじ",
        "meaning": "things to do"
      }
    ]
  },
  {
    "kanji": "世",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "generation",
      "world",
      "society",
      "public"
    ],
    "onyomi": [
      "セイ",
      "セ",
      "ソウ"
    ],
    "kunyomi": [
      "よ"
    ],
    "examples": [
      {
        "word": "世話",
        "reading": "せわ・する",
        "meaning": "to look after"
      },
      {
        "word": "世界",
        "reading": "せかい",
        "meaning": "the world"
      },
      {
        "word": "世紀",
        "reading": "せいき",
        "meaning": "century, era"
      },
      {
        "word": "世間",
        "reading": "せけん",
        "meaning": "world, society"
      }
    ]
  },
  {
    "kanji": "主",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "lord",
      "chief",
      "master",
      "main thing",
      "principal"
    ],
    "onyomi": [
      "シュ",
      "ス",
      "シュウ"
    ],
    "kunyomi": [
      "ぬし",
      "おも",
      "あるじ"
    ],
    "examples": [
      {
        "word": "御主人",
        "reading": "ごしゅじん",
        "meaning": "(honorable) your husband"
      },
      {
        "word": "主義",
        "reading": "しゅぎ",
        "meaning": "doctrine, rule, principle"
      },
      {
        "word": "主婦",
        "reading": "しゅふ",
        "meaning": "housewife, mistress"
      },
      {
        "word": "主張",
        "reading": "しゅちょう",
        "meaning": "claim, request, insistence, assertion"
      }
    ]
  },
  {
    "kanji": "代",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "substitute",
      "change",
      "convert",
      "replace",
      "period",
      "age",
      "counter for decades of ages, eras, etc.",
      "generation",
      "charge",
      "rate",
      "fee"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "か.わる",
      "かわ.る",
      "かわ.り",
      "か.わり",
      "-がわ.り",
      "-が.わり",
      "か.える",
      "よ",
      "しろ"
    ],
    "examples": [
      {
        "word": "代わり",
        "reading": "かわり",
        "meaning": "substitute, alternate"
      },
      {
        "word": "時代",
        "reading": "じだい",
        "meaning": "era"
      },
      {
        "word": "代理",
        "reading": "だいり",
        "meaning": "representation, agency, proxy, deputy, agent"
      },
      {
        "word": "年代",
        "reading": "ねんだい",
        "meaning": "age, era, period, date"
      }
    ]
  },
  {
    "kanji": "写",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "copy",
      "be photographed",
      "describe"
    ],
    "onyomi": [
      "シャ",
      "ジャ"
    ],
    "kunyomi": [
      "うつ.す",
      "うつ.る",
      "うつ-",
      "うつ.し"
    ],
    "examples": [
      {
        "word": "写す",
        "reading": "うつす",
        "meaning": "to copy or photograph"
      },
      {
        "word": "写真",
        "reading": "しゃしん",
        "meaning": "photograph"
      }
    ]
  },
  {
    "kanji": "去",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "gone",
      "past",
      "quit",
      "leave",
      "elapse",
      "eliminate",
      "divorce"
    ],
    "onyomi": [
      "キョ",
      "コ"
    ],
    "kunyomi": [
      "さ.る",
      "-さ.る"
    ],
    "examples": [
      {
        "word": "去年",
        "reading": "きょねん",
        "meaning": "last year"
      },
      {
        "word": "去る",
        "reading": "さる",
        "meaning": "to leave, to go away"
      },
      {
        "word": "過去",
        "reading": "かこ",
        "meaning": "the past, bygone days, the previous"
      }
    ]
  },
  {
    "kanji": "仕",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "attend",
      "doing",
      "official",
      "serve"
    ],
    "onyomi": [
      "シ",
      "ジ"
    ],
    "kunyomi": [
      "つか.える"
    ],
    "examples": [
      {
        "word": "仕方",
        "reading": "しかた",
        "meaning": "method"
      },
      {
        "word": "仕事",
        "reading": "しごと",
        "meaning": "job"
      }
    ]
  },
  {
    "kanji": "以",
    "jlpt": 4,
    "strokeCount": 5,
    "meanings": [
      "by means of",
      "because",
      "in view of",
      "compared with"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "もっ.て"
    ],
    "examples": [
      {
        "word": "以上",
        "reading": "いじょう",
        "meaning": "more than, this is all"
      },
      {
        "word": "以下",
        "reading": "いか",
        "meaning": "less than"
      },
      {
        "word": "以内",
        "reading": "いない",
        "meaning": "within"
      },
      {
        "word": "以外",
        "reading": "いがい",
        "meaning": "with the exception of"
      }
    ]
  },
  {
    "kanji": "字",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "character",
      "letter",
      "word",
      "section of village"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "あざ",
      "あざな",
      "-な"
    ],
    "examples": [
      {
        "word": "字",
        "reading": "じ",
        "meaning": "character"
      },
      {
        "word": "漢字",
        "reading": "かんじ",
        "meaning": "Chinese character"
      },
      {
        "word": "字引",
        "reading": "じびき",
        "meaning": "dictionary"
      },
      {
        "word": "文字",
        "reading": "もじ",
        "meaning": "letter (of alphabet), character"
      }
    ]
  },
  {
    "kanji": "早",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "early",
      "fast"
    ],
    "onyomi": [
      "ソウ",
      "サッ"
    ],
    "kunyomi": [
      "はや.い",
      "はや",
      "はや-",
      "はや.まる",
      "はや.める",
      "さ-"
    ],
    "examples": [
      {
        "word": "早い",
        "reading": "はやい",
        "meaning": "early"
      }
    ]
  },
  {
    "kanji": "会",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "meeting",
      "meet",
      "party",
      "association",
      "interview",
      "join"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [
      "あ.う",
      "あ.わせる",
      "あつ.まる"
    ],
    "examples": [
      {
        "word": "会話",
        "reading": "かいわ",
        "meaning": "conversation"
      },
      {
        "word": "機会",
        "reading": "きかい",
        "meaning": "opportunity"
      },
      {
        "word": "会議室",
        "reading": "かいぎしつ",
        "meaning": "meeting room"
      },
      {
        "word": "社会",
        "reading": "しゃかい",
        "meaning": "society, public"
      }
    ]
  },
  {
    "kanji": "同",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "same",
      "agree",
      "equal"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "おな.じ"
    ],
    "examples": [
      {
        "word": "同じ",
        "reading": "おなじ",
        "meaning": "same"
      },
      {
        "word": "同一",
        "reading": "どういつ",
        "meaning": "identity, sameness, similarity"
      },
      {
        "word": "共同",
        "reading": "きょうどう",
        "meaning": "cooperation, association, collaboration, joint"
      },
      {
        "word": "同様",
        "reading": "どうよう",
        "meaning": "identical, equal to, same (kind), like"
      }
    ]
  },
  {
    "kanji": "多",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "many",
      "frequent",
      "much"
    ],
    "onyomi": [
      "タ"
    ],
    "kunyomi": [
      "おお.い",
      "まさ.に",
      "まさ.る"
    ],
    "examples": [
      {
        "word": "多い",
        "reading": "おおい",
        "meaning": "many"
      },
      {
        "word": "多少",
        "reading": "たしょう",
        "meaning": "more or less, somewhat, a little, some"
      },
      {
        "word": "滅多に",
        "reading": "めったに",
        "meaning": "rarely (with neg. verb), seldom"
      },
      {
        "word": "多分",
        "reading": "たぶん",
        "meaning": "perhaps, probably"
      }
    ]
  },
  {
    "kanji": "考",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "consider",
      "think over"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "かんが.える",
      "かんが.え"
    ],
    "examples": [
      {
        "word": "考える",
        "reading": "かんがえる",
        "meaning": "to consider"
      },
      {
        "word": "参考",
        "reading": "さんこう",
        "meaning": "reference, consultation"
      },
      {
        "word": "考え",
        "reading": "かんがえ",
        "meaning": "thinking, thought, ideas, intention"
      },
      {
        "word": "考慮",
        "reading": "こうりょ",
        "meaning": "consideration, taking into account"
      }
    ]
  },
  {
    "kanji": "肉",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "meat"
    ],
    "onyomi": [
      "ニク"
    ],
    "kunyomi": [
      "しし"
    ],
    "examples": [
      {
        "word": "肉",
        "reading": "にく",
        "meaning": "meat"
      },
      {
        "word": "豚肉",
        "reading": "ぶたにく",
        "meaning": "pork"
      },
      {
        "word": "牛肉",
        "reading": "ぎゅうにく",
        "meaning": "beef"
      },
      {
        "word": "とり肉",
        "reading": "とりにく",
        "meaning": "chicken meat"
      }
    ]
  },
  {
    "kanji": "自",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "oneself"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "みずか.ら",
      "おの.ずから",
      "おの.ずと"
    ],
    "examples": [
      {
        "word": "自由",
        "reading": "じゆう",
        "meaning": "freedom"
      },
      {
        "word": "自分",
        "reading": "じぶん",
        "meaning": "oneself"
      },
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "bicycle"
      },
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "meaning": "automobile"
      }
    ]
  },
  {
    "kanji": "色",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "color"
    ],
    "onyomi": [
      "ショク",
      "シキ"
    ],
    "kunyomi": [
      "いろ"
    ],
    "examples": [
      {
        "word": "景色",
        "reading": "けしき",
        "meaning": "scene, landscape"
      },
      {
        "word": "茶色",
        "reading": "ちゃいろ",
        "meaning": "brown"
      },
      {
        "word": "色",
        "reading": "いろ",
        "meaning": "colour"
      },
      {
        "word": "黄色",
        "reading": "きいろ",
        "meaning": "yellow"
      }
    ]
  },
  {
    "kanji": "地",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "ground",
      "earth"
    ],
    "onyomi": [
      "チ",
      "ジ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "地理",
        "reading": "ちり",
        "meaning": "geography"
      },
      {
        "word": "地震",
        "reading": "じしん",
        "meaning": "earthquake"
      },
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "underground train"
      },
      {
        "word": "地図",
        "reading": "ちず",
        "meaning": "map"
      }
    ]
  },
  {
    "kanji": "安",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "relax",
      "cheap",
      "low",
      "quiet",
      "rested",
      "contented",
      "peaceful"
    ],
    "onyomi": [
      "アン"
    ],
    "kunyomi": [
      "やす.い",
      "やす.まる",
      "やす",
      "やす.らか"
    ],
    "examples": [
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "safety"
      },
      {
        "word": "安心",
        "reading": "あんしん",
        "meaning": "relief"
      },
      {
        "word": "安い",
        "reading": "やすい",
        "meaning": "cheap"
      },
      {
        "word": "安定",
        "reading": "あんてい",
        "meaning": "stability, equilibrium"
      }
    ]
  },
  {
    "kanji": "有",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "possess",
      "have",
      "exist",
      "happen",
      "occur",
      "approx"
    ],
    "onyomi": [
      "ユウ",
      "ウ"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "examples": [
      {
        "word": "有名",
        "reading": "ゆうめい",
        "meaning": "famous"
      },
      {
        "word": "有効",
        "reading": "ゆうこう",
        "meaning": "validity, availability, effectiveness"
      },
      {
        "word": "有能",
        "reading": "ゆうのう",
        "meaning": "able, capable, efficient, skill"
      },
      {
        "word": "有利",
        "reading": "ゆうり",
        "meaning": "advantageous, better, profitable, lucrative"
      }
    ]
  },
  {
    "kanji": "死",
    "jlpt": 4,
    "strokeCount": 6,
    "meanings": [
      "death",
      "die"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "し.ぬ",
      "し.に-"
    ],
    "examples": [
      {
        "word": "死ぬ",
        "reading": "しぬ",
        "meaning": "to die"
      },
      {
        "word": "必死",
        "reading": "ひっし",
        "meaning": "inevitable death, desperation, frantic, inevitable result"
      },
      {
        "word": "死亡",
        "reading": "しぼう",
        "meaning": "death, mortality"
      }
    ]
  },
  {
    "kanji": "町",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "town",
      "village",
      "block",
      "street"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "まち"
    ],
    "examples": [
      {
        "word": "町",
        "reading": "まち",
        "meaning": "town, city"
      }
    ]
  },
  {
    "kanji": "花",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "flower"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "はな"
    ],
    "examples": [
      {
        "word": "花見",
        "reading": "はなみ",
        "meaning": "cherry-blossom viewing"
      },
      {
        "word": "花瓶",
        "reading": "かびん",
        "meaning": "a vase"
      },
      {
        "word": "花",
        "reading": "はな",
        "meaning": "flower"
      }
    ]
  },
  {
    "kanji": "赤",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "red"
    ],
    "onyomi": [
      "セキ",
      "シャク"
    ],
    "kunyomi": [
      "あか",
      "あか-",
      "あか.い",
      "あか.らむ",
      "あか.らめる"
    ],
    "examples": [
      {
        "word": "赤ん坊",
        "reading": "あかんぼう",
        "meaning": "baby"
      },
      {
        "word": "赤い",
        "reading": "あかい",
        "meaning": "red"
      },
      {
        "word": "赤",
        "reading": "あか",
        "meaning": "red"
      },
      {
        "word": "真っ赤",
        "reading": "まっか",
        "meaning": "deep red, flushed (of face)"
      }
    ]
  },
  {
    "kanji": "足",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "leg",
      "foot",
      "be sufficient",
      "counter for pairs of footwear"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "あし",
      "た.りる",
      "た.る",
      "た.す"
    ],
    "examples": [
      {
        "word": "足す",
        "reading": "たす",
        "meaning": "to add a number"
      },
      {
        "word": "足りる",
        "reading": "たりる",
        "meaning": "to be enough"
      },
      {
        "word": "足",
        "reading": "あし",
        "meaning": "foot, leg"
      },
      {
        "word": "満足",
        "reading": "まんぞく",
        "meaning": "satisfaction"
      }
    ]
  },
  {
    "kanji": "体",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "body",
      "substance",
      "object",
      "reality",
      "counter for images"
    ],
    "onyomi": [
      "タイ",
      "テイ"
    ],
    "kunyomi": [
      "からだ",
      "かたち"
    ],
    "examples": [
      {
        "word": "大体",
        "reading": "だいたい",
        "meaning": "generally"
      },
      {
        "word": "体",
        "reading": "からだ",
        "meaning": "body"
      },
      {
        "word": "身体",
        "reading": "しんたい",
        "meaning": "the body"
      },
      {
        "word": "体温",
        "reading": "たいおん",
        "meaning": "temperature (body)"
      }
    ]
  },
  {
    "kanji": "作",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "make",
      "production",
      "prepare",
      "build"
    ],
    "onyomi": [
      "サク",
      "サ"
    ],
    "kunyomi": [
      "つく.る",
      "つく.り",
      "-づく.り"
    ],
    "examples": [
      {
        "word": "作文",
        "reading": "さくぶん",
        "meaning": "composition, writing"
      },
      {
        "word": "作る",
        "reading": "つくる",
        "meaning": "to make"
      },
      {
        "word": "作品",
        "reading": "さくひん",
        "meaning": "work, opus, performance, production"
      },
      {
        "word": "作家",
        "reading": "さっか",
        "meaning": "author, writer, novelist, artist"
      }
    ]
  },
  {
    "kanji": "図",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "map",
      "drawing",
      "plan",
      "extraordinary",
      "audacious"
    ],
    "onyomi": [
      "ズ",
      "ト"
    ],
    "kunyomi": [
      "え",
      "はか.る"
    ],
    "examples": [
      {
        "word": "地図",
        "reading": "ちず",
        "meaning": "map"
      },
      {
        "word": "図書館",
        "reading": "としょかん",
        "meaning": "library"
      },
      {
        "word": "合図",
        "reading": "あいず",
        "meaning": "sign, signal"
      },
      {
        "word": "図書",
        "reading": "としょ",
        "meaning": "books"
      }
    ]
  },
  {
    "kanji": "売",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "sell"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "う.る",
      "う.れる"
    ],
    "examples": [
      {
        "word": "売り場",
        "reading": "うりば",
        "meaning": "place where things are sold"
      },
      {
        "word": "売る",
        "reading": "うる",
        "meaning": "to sell"
      },
      {
        "word": "売れる",
        "reading": "うれる",
        "meaning": "to be sold"
      },
      {
        "word": "販売",
        "reading": "はんばい",
        "meaning": "sale, selling, marketing"
      }
    ]
  },
  {
    "kanji": "弟",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "younger brother",
      "faithful service to elders"
    ],
    "onyomi": [
      "テイ",
      "ダイ",
      "デ"
    ],
    "kunyomi": [
      "おとうと"
    ],
    "examples": [
      {
        "word": "弟",
        "reading": "おとうと",
        "meaning": "younger brother"
      },
      {
        "word": "兄弟",
        "reading": "きょうだい",
        "meaning": "(humble) siblings"
      },
      {
        "word": "従兄弟",
        "reading": "いとこ",
        "meaning": "cousin (male)"
      }
    ]
  },
  {
    "kanji": "社",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "company",
      "firm",
      "office",
      "association",
      "shrine"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "やしろ"
    ],
    "examples": [
      {
        "word": "神社",
        "reading": "じんじゃ",
        "meaning": "Shinto shrine"
      },
      {
        "word": "社会",
        "reading": "しゃかい",
        "meaning": "society, public"
      },
      {
        "word": "社長",
        "reading": "しゃちょう",
        "meaning": "company president"
      },
      {
        "word": "新聞社",
        "reading": "しんぶんしゃ",
        "meaning": "newspaper company"
      }
    ]
  },
  {
    "kanji": "言",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "say",
      "word"
    ],
    "onyomi": [
      "ゲン",
      "ゴン"
    ],
    "kunyomi": [
      "い.う",
      "こと"
    ],
    "examples": [
      {
        "word": "言う",
        "reading": "いう",
        "meaning": "to say"
      },
      {
        "word": "言葉",
        "reading": "ことば",
        "meaning": "word, language"
      },
      {
        "word": "言わば",
        "reading": "いわば",
        "meaning": "so to speak"
      },
      {
        "word": "言語",
        "reading": "げんご",
        "meaning": "language"
      }
    ]
  },
  {
    "kanji": "走",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "run"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "はし.る"
    ],
    "examples": [
      {
        "word": "走る",
        "reading": "はしる",
        "meaning": "to run"
      }
    ]
  },
  {
    "kanji": "近",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "near",
      "early",
      "akin",
      "tantamount"
    ],
    "onyomi": [
      "キン",
      "コン"
    ],
    "kunyomi": [
      "ちか.い"
    ],
    "examples": [
      {
        "word": "近所",
        "reading": "きんじょ",
        "meaning": "neighbourhood"
      },
      {
        "word": "最近",
        "reading": "さいきん",
        "meaning": "latest, nowadays"
      },
      {
        "word": "近く",
        "reading": "ちかく",
        "meaning": "near"
      },
      {
        "word": "近い",
        "reading": "ちかい",
        "meaning": "near"
      }
    ]
  },
  {
    "kanji": "住",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "dwell",
      "reside",
      "live",
      "inhabit"
    ],
    "onyomi": [
      "ジュウ",
      "ヂュウ",
      "チュウ"
    ],
    "kunyomi": [
      "す.む",
      "す.まう",
      "-ず.まい"
    ],
    "examples": [
      {
        "word": "住所",
        "reading": "じゅうしょ",
        "meaning": "an address, a residence"
      },
      {
        "word": "住む",
        "reading": "すむ",
        "meaning": "to live in"
      },
      {
        "word": "住民",
        "reading": "じゅうみん",
        "meaning": "citizens, inhabitants, residents, population"
      },
      {
        "word": "住宅",
        "reading": "じゅうたく",
        "meaning": "resident, housing"
      }
    ]
  },
  {
    "kanji": "医",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "doctor",
      "medicine"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "い.やす",
      "い.する",
      "くすし"
    ],
    "examples": [
      {
        "word": "歯医者",
        "reading": "はいしゃ",
        "meaning": "dentist"
      },
      {
        "word": "医学",
        "reading": "いがく",
        "meaning": "medical science"
      },
      {
        "word": "医者",
        "reading": "いしゃ",
        "meaning": "medical doctor"
      },
      {
        "word": "医師",
        "reading": "いし",
        "meaning": "doctor, physician"
      }
    ]
  },
  {
    "kanji": "究",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "research",
      "study"
    ],
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "きわ.める"
    ],
    "examples": [
      {
        "word": "研究室",
        "reading": "けんきゅうしつ",
        "meaning": "study room, laboratory"
      },
      {
        "word": "研究",
        "reading": "けんきゅう",
        "meaning": "research"
      }
    ]
  },
  {
    "kanji": "別",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "separate",
      "branch off",
      "diverge",
      "fork",
      "another",
      "extra",
      "specially"
    ],
    "onyomi": [
      "ベツ"
    ],
    "kunyomi": [
      "わか.れる",
      "わ.ける"
    ],
    "examples": [
      {
        "word": "別",
        "reading": "べつ",
        "meaning": "different"
      },
      {
        "word": "特別",
        "reading": "とくべつ",
        "meaning": "special"
      },
      {
        "word": "別れる",
        "reading": "わかれる",
        "meaning": "to separate"
      },
      {
        "word": "区別",
        "reading": "くべつ",
        "meaning": "distinction, differentiation, classification"
      }
    ]
  },
  {
    "kanji": "私",
    "jlpt": 4,
    "strokeCount": 7,
    "meanings": [
      "private",
      "i",
      "me"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "わたくし",
      "わたし"
    ],
    "examples": [
      {
        "word": "私",
        "reading": "わたくし",
        "meaning": "(humble) I, myself"
      }
    ]
  },
  {
    "kanji": "空",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "empty",
      "sky",
      "void",
      "vacant",
      "vacuum"
    ],
    "onyomi": [
      "クウ"
    ],
    "kunyomi": [
      "そら",
      "あ.く",
      "あ.き",
      "あ.ける",
      "から",
      "す.く",
      "す.かす",
      "むな.しい"
    ],
    "examples": [
      {
        "word": "空気",
        "reading": "くうき",
        "meaning": "air, atmosphere"
      },
      {
        "word": "空く",
        "reading": "あく",
        "meaning": "to open, to become empty"
      },
      {
        "word": "空港",
        "reading": "くうこう",
        "meaning": "airport"
      },
      {
        "word": "空",
        "reading": "そら",
        "meaning": "sky"
      }
    ]
  },
  {
    "kanji": "青",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "blue",
      "green"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "あお",
      "あお-",
      "あお.い"
    ],
    "examples": [
      {
        "word": "青い",
        "reading": "あおい",
        "meaning": "blue"
      },
      {
        "word": "青",
        "reading": "あお",
        "meaning": "blue"
      },
      {
        "word": "青年",
        "reading": "せいねん",
        "meaning": "youth, young man"
      }
    ]
  },
  {
    "kanji": "京",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "capital",
      "10**16"
    ],
    "onyomi": [
      "キョウ",
      "ケイ",
      "キン"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "examples": [
      {
        "word": "上京",
        "reading": "じょうきょう",
        "meaning": "proceeding to the capital (Tokyo)"
      }
    ]
  },
  {
    "kanji": "夜",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "night",
      "evening"
    ],
    "onyomi": [
      "ヤ"
    ],
    "kunyomi": [
      "よ",
      "よる"
    ],
    "examples": [
      {
        "word": "今夜",
        "reading": "こんや",
        "meaning": "tonight"
      },
      {
        "word": "夜",
        "reading": "よる",
        "meaning": "evening, night"
      },
      {
        "word": "昨夜",
        "reading": "ゆうべ",
        "meaning": "last night"
      },
      {
        "word": "夜中",
        "reading": "よなか",
        "meaning": "midnight, dead of night"
      }
    ]
  },
  {
    "kanji": "妹",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "younger sister"
    ],
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "いもうと"
    ],
    "examples": [
      {
        "word": "妹",
        "reading": "いもうと",
        "meaning": "(humble) younger sister"
      },
      {
        "word": "姉妹",
        "reading": "しまい",
        "meaning": "sisters"
      }
    ]
  },
  {
    "kanji": "姉",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "elder sister"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "あね",
      "はは"
    ],
    "examples": [
      {
        "word": "お姉さん",
        "reading": "おねえさん",
        "meaning": "(honorable) older sister"
      },
      {
        "word": "姉",
        "reading": "あね",
        "meaning": "(humble) older sister"
      },
      {
        "word": "姉妹",
        "reading": "しまい",
        "meaning": "sisters"
      }
    ]
  },
  {
    "kanji": "店",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "store",
      "shop"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "みせ",
      "たな"
    ],
    "examples": [
      {
        "word": "店員",
        "reading": "てんいん",
        "meaning": "shop assistant"
      },
      {
        "word": "店",
        "reading": "みせ",
        "meaning": "shop"
      },
      {
        "word": "喫茶店",
        "reading": "きっさてん",
        "meaning": "coffee lounge"
      },
      {
        "word": "支店",
        "reading": "してん",
        "meaning": "branch store (office)"
      }
    ]
  },
  {
    "kanji": "明",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "bright",
      "light"
    ],
    "onyomi": [
      "メイ",
      "ミョウ",
      "ミン"
    ],
    "kunyomi": [
      "あ.かり",
      "あか.るい",
      "あか.るむ",
      "あか.らむ",
      "あき.らか",
      "あ.ける",
      "-あ.け",
      "あ.く",
      "あ.くる",
      "あ.かす"
    ],
    "examples": [
      {
        "word": "説明",
        "reading": "せつめい",
        "meaning": "explanation"
      },
      {
        "word": "明日",
        "reading": "あした",
        "meaning": "tomorrow"
      },
      {
        "word": "明い",
        "reading": "あかるい",
        "meaning": "bright"
      },
      {
        "word": "文明",
        "reading": "ぶんめい",
        "meaning": "civilization, culture"
      }
    ]
  },
  {
    "kanji": "歩",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "walk",
      "counter for steps"
    ],
    "onyomi": [
      "ホ",
      "ブ",
      "フ"
    ],
    "kunyomi": [
      "ある.く",
      "あゆ.む"
    ],
    "examples": [
      {
        "word": "散歩",
        "reading": "さんぽする",
        "meaning": "to stroll"
      },
      {
        "word": "歩く",
        "reading": "あるく",
        "meaning": "to walk"
      },
      {
        "word": "歩道",
        "reading": "ほどう",
        "meaning": "footpath, walkway, sidewalk"
      },
      {
        "word": "進歩",
        "reading": "しんぽ",
        "meaning": "progress, development"
      }
    ]
  },
  {
    "kanji": "画",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "brush-stroke",
      "picture"
    ],
    "onyomi": [
      "ガ",
      "カク",
      "エ",
      "カイ"
    ],
    "kunyomi": [
      "えが.く",
      "かく.する",
      "かぎ.る",
      "はかりごと",
      "はか.る"
    ],
    "examples": [
      {
        "word": "漫画",
        "reading": "まんが",
        "meaning": "comic"
      },
      {
        "word": "計画",
        "reading": "けいかく・する",
        "meaning": "to plan"
      },
      {
        "word": "映画",
        "reading": "えいが",
        "meaning": "movie"
      },
      {
        "word": "映画館",
        "reading": "えいがかん",
        "meaning": "cinema"
      }
    ]
  },
  {
    "kanji": "知",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "know",
      "wisdom"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "し.る",
      "し.らせる"
    ],
    "examples": [
      {
        "word": "知らせる",
        "reading": "しらせる",
        "meaning": "to notify"
      },
      {
        "word": "承知",
        "reading": "しょうち・する",
        "meaning": "to consent"
      },
      {
        "word": "知る",
        "reading": "しる",
        "meaning": "to know"
      },
      {
        "word": "知らせ",
        "reading": "しらせ",
        "meaning": "notice"
      }
    ]
  },
  {
    "kanji": "者",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "someone",
      "person"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "もの"
    ],
    "examples": [
      {
        "word": "歯医者",
        "reading": "はいしゃ",
        "meaning": "dentist"
      },
      {
        "word": "医者",
        "reading": "いしゃ",
        "meaning": "medical doctor"
      },
      {
        "word": "学者",
        "reading": "がくしゃ",
        "meaning": "scholar"
      },
      {
        "word": "患者",
        "reading": "かんじゃ",
        "meaning": "a patient"
      }
    ]
  },
  {
    "kanji": "事",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "matter",
      "thing",
      "fact",
      "business",
      "reason",
      "possibly"
    ],
    "onyomi": [
      "ジ",
      "ズ"
    ],
    "kunyomi": [
      "こと",
      "つか.う",
      "つか.える"
    ],
    "examples": [
      {
        "word": "食事",
        "reading": "しょくじ・する",
        "meaning": "to have a meal"
      },
      {
        "word": "火事",
        "reading": "かじ",
        "meaning": "fire"
      },
      {
        "word": "事故",
        "reading": "じこ",
        "meaning": "accident"
      },
      {
        "word": "大事",
        "reading": "だいじ",
        "meaning": "important, valuable, serious matter"
      }
    ]
  },
  {
    "kanji": "使",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "use",
      "send on a mission",
      "order",
      "messenger",
      "envoy",
      "ambassador",
      "cause"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "つか.う",
      "つか.い",
      "-つか.い",
      "-づか.い"
    ],
    "examples": [
      {
        "word": "大使館",
        "reading": "たいしかん",
        "meaning": "embassy"
      },
      {
        "word": "使う",
        "reading": "つかう",
        "meaning": "to use"
      },
      {
        "word": "大使",
        "reading": "たいし",
        "meaning": "ambassador"
      },
      {
        "word": "使用",
        "reading": "しよう",
        "meaning": "use, application, employment, utilization"
      }
    ]
  },
  {
    "kanji": "始",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "commence",
      "begin"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "はじ.める",
      "-はじ.める",
      "はじ.まる"
    ],
    "examples": [
      {
        "word": "始める",
        "reading": "はじめる",
        "meaning": "to begin"
      },
      {
        "word": "始まる",
        "reading": "はじまる",
        "meaning": "to begin"
      },
      {
        "word": "初め / 始め",
        "reading": "はじめ",
        "meaning": "beginning"
      },
      {
        "word": "開始",
        "reading": "かいし",
        "meaning": "start, commencement, beginning"
      }
    ]
  },
  {
    "kanji": "服",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "clothing",
      "admit",
      "obey",
      "discharge"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "洋服",
        "reading": "ようふく",
        "meaning": "western-style clothes"
      },
      {
        "word": "服",
        "reading": "ふく",
        "meaning": "clothes"
      },
      {
        "word": "衣服",
        "reading": "いふく",
        "meaning": "clothes"
      },
      {
        "word": "服装",
        "reading": "ふくそう",
        "meaning": "garments"
      }
    ]
  },
  {
    "kanji": "物",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "thing",
      "object",
      "matter"
    ],
    "onyomi": [
      "ブツ",
      "モツ"
    ],
    "kunyomi": [
      "もの",
      "もの-"
    ],
    "examples": [
      {
        "word": "着物",
        "reading": "きもの",
        "meaning": "kimono"
      },
      {
        "word": "忘れ物",
        "reading": "わすれもの",
        "meaning": "lost article"
      },
      {
        "word": "乗り物",
        "reading": "のりもの",
        "meaning": "vehicle"
      },
      {
        "word": "見物",
        "reading": "けんぶつ",
        "meaning": "sightseeing"
      }
    ]
  },
  {
    "kanji": "注",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "pour",
      "irrigate",
      "shed (tears)",
      "flow into",
      "concentrate on",
      "notes",
      "comment",
      "annotate"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "そそ.ぐ",
      "さ.す",
      "つ.ぐ"
    ],
    "examples": [
      {
        "word": "注射",
        "reading": "ちゅうしゃ",
        "meaning": "injection"
      },
      {
        "word": "注意",
        "reading": "ちゅうい",
        "meaning": "caution"
      },
      {
        "word": "注目",
        "reading": "ちゅうもく",
        "meaning": "notice, attention, observation"
      },
      {
        "word": "注文",
        "reading": "ちゅうもん",
        "meaning": "order, request"
      }
    ]
  },
  {
    "kanji": "味",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "flavor",
      "taste"
    ],
    "onyomi": [
      "ミ"
    ],
    "kunyomi": [
      "あじ",
      "あじ.わう"
    ],
    "examples": [
      {
        "word": "興味",
        "reading": "きょうみ",
        "meaning": "an interest"
      },
      {
        "word": "趣味",
        "reading": "しゅみ",
        "meaning": "hobby"
      },
      {
        "word": "味噌",
        "reading": "みそ",
        "meaning": "bean paste"
      },
      {
        "word": "味",
        "reading": "あじ",
        "meaning": "flavour"
      }
    ]
  },
  {
    "kanji": "英",
    "jlpt": 4,
    "strokeCount": 8,
    "meanings": [
      "england",
      "english",
      "hero",
      "outstanding",
      "calyx"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "はなぶさ"
    ],
    "examples": [
      {
        "word": "英語",
        "reading": "えいご",
        "meaning": "English language"
      }
    ]
  },
  {
    "kanji": "音",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "sound",
      "noise"
    ],
    "onyomi": [
      "オン",
      "イン",
      "-ノン"
    ],
    "kunyomi": [
      "おと",
      "ね"
    ],
    "examples": [
      {
        "word": "発音",
        "reading": "はつおん",
        "meaning": "pronunciation"
      },
      {
        "word": "音",
        "reading": "おと",
        "meaning": "sound, note"
      },
      {
        "word": "音楽",
        "reading": "おんがく",
        "meaning": "music"
      },
      {
        "word": "騒音",
        "reading": "そうおん",
        "meaning": "noise"
      }
    ]
  },
  {
    "kanji": "室",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "room",
      "apartment",
      "chamber",
      "greenhouse",
      "cellar"
    ],
    "onyomi": [
      "シツ"
    ],
    "kunyomi": [
      "むろ"
    ],
    "examples": [
      {
        "word": "研究室",
        "reading": "けんきゅうしつ",
        "meaning": "study room, laboratory"
      },
      {
        "word": "会議室",
        "reading": "かいぎしつ",
        "meaning": "meeting room"
      },
      {
        "word": "教室",
        "reading": "きょうしつ",
        "meaning": "classroom"
      }
    ]
  },
  {
    "kanji": "思",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "think"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "おも.う",
      "おもえら.く",
      "おぼ.す"
    ],
    "examples": [
      {
        "word": "思う",
        "reading": "おもう",
        "meaning": "to think, to feel"
      },
      {
        "word": "思い出す",
        "reading": "おもいだす",
        "meaning": "to remember"
      },
      {
        "word": "意思",
        "reading": "いし",
        "meaning": "intention, purpose"
      },
      {
        "word": "思い出",
        "reading": "おもいで",
        "meaning": "memories, recollections, reminiscence"
      }
    ]
  },
  {
    "kanji": "海",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "sea",
      "ocean"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "うみ"
    ],
    "examples": [
      {
        "word": "海岸",
        "reading": "かいがん",
        "meaning": "coast"
      },
      {
        "word": "海",
        "reading": "うみ",
        "meaning": "sea"
      },
      {
        "word": "海外",
        "reading": "かいがい",
        "meaning": "foreign, abroad, overseas"
      }
    ]
  },
  {
    "kanji": "茶",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "tea"
    ],
    "onyomi": [
      "チャ",
      "サ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "お茶",
        "reading": "おちゃ",
        "meaning": "green tea"
      },
      {
        "word": "茶色",
        "reading": "ちゃいろ",
        "meaning": "brown"
      },
      {
        "word": "喫茶店",
        "reading": "きっさてん",
        "meaning": "coffee lounge"
      },
      {
        "word": "紅茶",
        "reading": "こうちゃ",
        "meaning": "black tea"
      }
    ]
  },
  {
    "kanji": "研",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "polish",
      "study of",
      "sharpen"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "と.ぐ"
    ],
    "examples": [
      {
        "word": "研究室",
        "reading": "けんきゅうしつ",
        "meaning": "study room, laboratory"
      },
      {
        "word": "研究",
        "reading": "けんきゅう",
        "meaning": "research"
      }
    ]
  },
  {
    "kanji": "屋",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "roof",
      "house",
      "shop",
      "dealer",
      "seller"
    ],
    "onyomi": [
      "オク"
    ],
    "kunyomi": [
      "や"
    ],
    "examples": [
      {
        "word": "屋上",
        "reading": "おくじょう",
        "meaning": "rooftop"
      },
      {
        "word": "部屋",
        "reading": "へや",
        "meaning": "room"
      },
      {
        "word": "八百屋",
        "reading": "やおや",
        "meaning": "greengrocer"
      },
      {
        "word": "屋根",
        "reading": "やね",
        "meaning": "roof"
      }
    ]
  },
  {
    "kanji": "度",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "degrees",
      "occurrence",
      "time",
      "counter for occurrences",
      "consider",
      "attitude"
    ],
    "onyomi": [
      "ド",
      "ト",
      "タク"
    ],
    "kunyomi": [
      "たび",
      "-た.い"
    ],
    "examples": [
      {
        "word": "一度",
        "reading": "いちど",
        "meaning": "once"
      },
      {
        "word": "今度",
        "reading": "こんど",
        "meaning": "now, next time"
      },
      {
        "word": "支度",
        "reading": "したく・する",
        "meaning": "to prepare"
      },
      {
        "word": "もう一度",
        "reading": "もういちど",
        "meaning": "again"
      }
    ]
  },
  {
    "kanji": "待",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "wait",
      "depend on"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "ま.つ",
      "-ま.ち"
    ],
    "examples": [
      {
        "word": "招待",
        "reading": "しょうたい・する",
        "meaning": "to invite"
      },
      {
        "word": "待つ",
        "reading": "まつ",
        "meaning": "to wait"
      },
      {
        "word": "期待",
        "reading": "きたい",
        "meaning": "expectation, anticipation, hope"
      }
    ]
  },
  {
    "kanji": "持",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "hold",
      "have"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "も.つ",
      "-も.ち",
      "も.てる"
    ],
    "examples": [
      {
        "word": "お・金持ち",
        "reading": "かねもち / おかねもち",
        "meaning": "rich man"
      },
      {
        "word": "気持ち",
        "reading": "きもち",
        "meaning": "feeling, mood"
      },
      {
        "word": "持つ",
        "reading": "もつ",
        "meaning": "to hold"
      },
      {
        "word": "持ち上げる",
        "reading": "もちあげる",
        "meaning": "to raise, to lift up, to flatter"
      }
    ]
  },
  {
    "kanji": "界",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "world",
      "boundary"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "世界",
        "reading": "せかい",
        "meaning": "the world"
      },
      {
        "word": "限界",
        "reading": "げんかい",
        "meaning": "limit, bound"
      }
    ]
  },
  {
    "kanji": "発",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "departure",
      "discharge",
      "publish",
      "emit",
      "start from",
      "disclose",
      "counter for gunshots"
    ],
    "onyomi": [
      "ハツ",
      "ホツ"
    ],
    "kunyomi": [
      "た.つ",
      "あば.く",
      "おこ.る",
      "つか.わす",
      "はな.つ"
    ],
    "examples": [
      {
        "word": "発音",
        "reading": "はつおん",
        "meaning": "pronunciation"
      },
      {
        "word": "出発",
        "reading": "しゅっぱつ・する",
        "meaning": "to depart"
      },
      {
        "word": "発明",
        "reading": "はつめい",
        "meaning": "invention"
      },
      {
        "word": "発見",
        "reading": "はっけん",
        "meaning": "discovery, detection, finding"
      }
    ]
  },
  {
    "kanji": "送",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "escort",
      "send"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "おく.る"
    ],
    "examples": [
      {
        "word": "放送",
        "reading": "ほうそう・する",
        "meaning": "to broadcast"
      },
      {
        "word": "送る",
        "reading": "おくる",
        "meaning": "to send"
      },
      {
        "word": "見送り",
        "reading": "みおくり",
        "meaning": "seeing one off, farewell, escort"
      }
    ]
  },
  {
    "kanji": "重",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "heavy",
      "important",
      "esteem",
      "respect",
      "heap up",
      "pile up",
      "nest of boxes",
      "-fold"
    ],
    "onyomi": [
      "ジュウ",
      "チョウ"
    ],
    "kunyomi": [
      "え",
      "おも.い",
      "おも.り",
      "おも.なう",
      "かさ.ねる",
      "かさ.なる",
      "おも"
    ],
    "examples": [
      {
        "word": "重い",
        "reading": "おもい",
        "meaning": "heavy"
      },
      {
        "word": "重要",
        "reading": "じゅうよう",
        "meaning": "important, momentous, essential, principal, major"
      },
      {
        "word": "重視",
        "reading": "じゅうし",
        "meaning": "importance, stress, serious consideration"
      },
      {
        "word": "尊重",
        "reading": "そんちょう",
        "meaning": "respect, esteem, regard"
      }
    ]
  },
  {
    "kanji": "洋",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "ocean",
      "sea",
      "foreign",
      "western style"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "西洋",
        "reading": "せいよう",
        "meaning": "western countries"
      },
      {
        "word": "洋服",
        "reading": "ようふく",
        "meaning": "western-style clothes"
      }
    ]
  },
  {
    "kanji": "風",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "wind",
      "air",
      "style",
      "manner"
    ],
    "onyomi": [
      "フウ",
      "フ"
    ],
    "kunyomi": [
      "かぜ",
      "かざ-",
      "-かぜ"
    ],
    "examples": [
      {
        "word": "台風",
        "reading": "たいふう",
        "meaning": "typhoon"
      },
      {
        "word": "お風呂",
        "reading": "おふろ",
        "meaning": "bath"
      },
      {
        "word": "風邪",
        "reading": "かぜ",
        "meaning": "a cold"
      },
      {
        "word": "風",
        "reading": "かぜ",
        "meaning": "wind"
      }
    ]
  },
  {
    "kanji": "映",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "reflect",
      "reflection",
      "projection"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す",
      "は.える",
      "-ば.え"
    ],
    "examples": [
      {
        "word": "映画",
        "reading": "えいが",
        "meaning": "movie"
      },
      {
        "word": "映画館",
        "reading": "えいがかん",
        "meaning": "cinema"
      }
    ]
  },
  {
    "kanji": "春",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "springtime",
      "spring (season)"
    ],
    "onyomi": [
      "シュン"
    ],
    "kunyomi": [
      "はる"
    ],
    "examples": [
      {
        "word": "春",
        "reading": "はる",
        "meaning": "spring"
      }
    ]
  },
  {
    "kanji": "昼",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "daytime",
      "noon"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "ひる"
    ],
    "examples": [
      {
        "word": "昼間",
        "reading": "ひるま",
        "meaning": "daytime, during the day"
      },
      {
        "word": "昼休み",
        "reading": "ひるやすみ",
        "meaning": "noon break"
      },
      {
        "word": "昼御飯",
        "reading": "ひるごはん",
        "meaning": "midday meal"
      },
      {
        "word": "昼",
        "reading": "ひる",
        "meaning": "noon, daytime"
      }
    ]
  },
  {
    "kanji": "秋",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "autumn"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "あき",
      "とき"
    ],
    "examples": [
      {
        "word": "秋",
        "reading": "あき",
        "meaning": "autumn"
      }
    ]
  },
  {
    "kanji": "計",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "plot",
      "plan",
      "scheme",
      "measure"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "はか.る",
      "はか.らう"
    ],
    "examples": [
      {
        "word": "計画",
        "reading": "けいかく・する",
        "meaning": "to plan"
      },
      {
        "word": "時計",
        "reading": "とけい",
        "meaning": "watch, clock"
      },
      {
        "word": "合計",
        "reading": "ごうけい",
        "meaning": "sum total, total amount"
      },
      {
        "word": "会計",
        "reading": "かいけい",
        "meaning": "account, finance, accountant"
      }
    ]
  },
  {
    "kanji": "建",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "build"
    ],
    "onyomi": [
      "ケン",
      "コン"
    ],
    "kunyomi": [
      "た.てる",
      "た.て",
      "-だ.て",
      "た.つ"
    ],
    "examples": [
      {
        "word": "二階建て",
        "reading": "にかいだて",
        "meaning": "two storied"
      },
      {
        "word": "建てる",
        "reading": "たてる",
        "meaning": "to build"
      },
      {
        "word": "建物",
        "reading": "たてもの",
        "meaning": "building"
      },
      {
        "word": "建設",
        "reading": "けんせつ",
        "meaning": "construction, establishment"
      }
    ]
  },
  {
    "kanji": "品",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "goods",
      "refinement",
      "dignity",
      "article",
      "counter for meal courses"
    ],
    "onyomi": [
      "ヒン",
      "ホン"
    ],
    "kunyomi": [
      "しな"
    ],
    "examples": [
      {
        "word": "食料品",
        "reading": "しょくりょうひん",
        "meaning": "groceries"
      },
      {
        "word": "品物",
        "reading": "しなもの",
        "meaning": "goods"
      },
      {
        "word": "食品",
        "reading": "しょくひん",
        "meaning": "commodity, foodstuff"
      },
      {
        "word": "品",
        "reading": "しな",
        "meaning": "thing, article, goods, dignity, article (goods), counter for meal courses"
      }
    ]
  },
  {
    "kanji": "急",
    "jlpt": 4,
    "strokeCount": 9,
    "meanings": [
      "hurry",
      "emergency",
      "sudden",
      "steep"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "いそ.ぐ",
      "いそ.ぎ",
      "せ.く"
    ],
    "examples": [
      {
        "word": "急",
        "reading": "きゅう",
        "meaning": "urgent, steep"
      },
      {
        "word": "特急",
        "reading": "とっきゅう",
        "meaning": "limited express train (faster than an express train)"
      },
      {
        "word": "急行",
        "reading": "きゅうこう",
        "meaning": "speedy, express"
      },
      {
        "word": "急ぐ",
        "reading": "いそぐ",
        "meaning": "to hurry"
      }
    ]
  },
  {
    "kanji": "夏",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "summer"
    ],
    "onyomi": [
      "カ",
      "ガ",
      "ゲ"
    ],
    "kunyomi": [
      "なつ"
    ],
    "examples": [
      {
        "word": "夏",
        "reading": "なつ",
        "meaning": "summer"
      },
      {
        "word": "夏休み",
        "reading": "なつやすみ",
        "meaning": "summer holiday"
      }
    ]
  },
  {
    "kanji": "家",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "house",
      "home",
      "family",
      "professional",
      "expert",
      "performer"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "いえ",
      "や",
      "うち"
    ],
    "examples": [
      {
        "word": "家内",
        "reading": "かない",
        "meaning": "housewife"
      },
      {
        "word": "家",
        "reading": "いえ",
        "meaning": "house"
      },
      {
        "word": "家族",
        "reading": "かぞく",
        "meaning": "family"
      },
      {
        "word": "家庭",
        "reading": "かてい",
        "meaning": "household"
      }
    ]
  },
  {
    "kanji": "紙",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "paper"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "かみ"
    ],
    "examples": [
      {
        "word": "手紙",
        "reading": "てがみ",
        "meaning": "letter"
      },
      {
        "word": "紙",
        "reading": "かみ",
        "meaning": "paper"
      }
    ]
  },
  {
    "kanji": "通",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "traffic",
      "pass through",
      "avenue",
      "commute",
      "counter for letters, notes, documents, etc."
    ],
    "onyomi": [
      "ツウ",
      "ツ"
    ],
    "kunyomi": [
      "とお.る",
      "とお.り",
      "-とお.り",
      "-どお.り",
      "とお.す",
      "とお.し",
      "-どお.し",
      "かよ.う"
    ],
    "examples": [
      {
        "word": "通る",
        "reading": "とおる",
        "meaning": "to go through"
      },
      {
        "word": "交通",
        "reading": "こうつう",
        "meaning": "traffic, transportation"
      },
      {
        "word": "普通",
        "reading": "ふつう",
        "meaning": "usually, or a train that stops at every station"
      },
      {
        "word": "通う",
        "reading": "かよう",
        "meaning": "to commute"
      }
    ]
  },
  {
    "kanji": "起",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "rouse",
      "wake up",
      "get up"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "お.きる",
      "お.こる",
      "お.こす",
      "おこ.す",
      "た.つ"
    ],
    "examples": [
      {
        "word": "起す",
        "reading": "おこす",
        "meaning": "to wake"
      },
      {
        "word": "起きる",
        "reading": "おきる",
        "meaning": "to get up"
      },
      {
        "word": "起こる",
        "reading": "おこる",
        "meaning": "to occur, to happen"
      }
    ]
  },
  {
    "kanji": "院",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "inst.",
      "institution",
      "temple",
      "mansion",
      "school"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "入院",
        "reading": "にゅういん・する",
        "meaning": "to hospitalise"
      },
      {
        "word": "退院",
        "reading": "たいいん・する",
        "meaning": "to leave hospital"
      },
      {
        "word": "病院",
        "reading": "びょういん",
        "meaning": "hospital"
      }
    ]
  },
  {
    "kanji": "病",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "ill",
      "sick"
    ],
    "onyomi": [
      "ビョウ",
      "ヘイ"
    ],
    "kunyomi": [
      "や.む",
      "-や.み",
      "やまい"
    ],
    "examples": [
      {
        "word": "病気",
        "reading": "びょうき",
        "meaning": "illness"
      },
      {
        "word": "病院",
        "reading": "びょういん",
        "meaning": "hospital"
      }
    ]
  },
  {
    "kanji": "特",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "special"
    ],
    "onyomi": [
      "トク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "特に",
        "reading": "とくに",
        "meaning": "particularly, especially"
      },
      {
        "word": "特急",
        "reading": "とっきゅう",
        "meaning": "limited express train (faster than an express train)"
      },
      {
        "word": "特別",
        "reading": "とくべつ",
        "meaning": "special"
      },
      {
        "word": "特徴",
        "reading": "とくちょう",
        "meaning": "feature, characteristic"
      }
    ]
  },
  {
    "kanji": "勉",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "exertion",
      "endeavour",
      "encourage",
      "strive",
      "make effort",
      "diligent"
    ],
    "onyomi": [
      "ベン"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "examples": [
      {
        "word": "勉強",
        "reading": "べんきょうする",
        "meaning": "to study"
      }
    ]
  },
  {
    "kanji": "旅",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "trip",
      "travel"
    ],
    "onyomi": [
      "リョ"
    ],
    "kunyomi": [
      "たび"
    ],
    "examples": [
      {
        "word": "旅館",
        "reading": "りょかん",
        "meaning": "Japanese hotel"
      },
      {
        "word": "旅行",
        "reading": "りょこう",
        "meaning": "travel"
      },
      {
        "word": "旅",
        "reading": "たび",
        "meaning": "travel, trip, journey"
      }
    ]
  },
  {
    "kanji": "員",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "employee",
      "member",
      "number",
      "the one in charge"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "公務員",
        "reading": "こうむいん",
        "meaning": "government worker"
      },
      {
        "word": "店員",
        "reading": "てんいん",
        "meaning": "shop assistant"
      },
      {
        "word": "全員",
        "reading": "ぜんいん",
        "meaning": "all members (unanimity), all hands, the whole crew"
      },
      {
        "word": "委員",
        "reading": "いいん",
        "meaning": "committee member"
      }
    ]
  },
  {
    "kanji": "料",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "fee",
      "materials"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "食料品",
        "reading": "しょくりょうひん",
        "meaning": "groceries"
      },
      {
        "word": "料理",
        "reading": "りょうり",
        "meaning": "cuisine"
      },
      {
        "word": "無料",
        "reading": "むりょう",
        "meaning": "free, no charge"
      },
      {
        "word": "料金",
        "reading": "りょうきん",
        "meaning": "fee, charge, fare"
      }
    ]
  },
  {
    "kanji": "帰",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "homecoming",
      "arrive at",
      "lead to",
      "result in"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "かえ.る",
      "かえ.す",
      "おく.る",
      "とつ.ぐ"
    ],
    "examples": [
      {
        "word": "帰り",
        "reading": "かえり",
        "meaning": "return"
      },
      {
        "word": "帰る",
        "reading": "かえる",
        "meaning": "to go back"
      },
      {
        "word": "帰宅",
        "reading": "きたく",
        "meaning": "returning home"
      }
    ]
  },
  {
    "kanji": "真",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "true",
      "reality",
      "buddhist sect"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ま",
      "ま-",
      "まこと"
    ],
    "examples": [
      {
        "word": "真中",
        "reading": "まんなか",
        "meaning": "middle"
      },
      {
        "word": "写真",
        "reading": "しゃしん",
        "meaning": "photograph"
      },
      {
        "word": "真っ赤",
        "reading": "まっか",
        "meaning": "deep red, flushed (of face)"
      },
      {
        "word": "真剣",
        "reading": "しんけん",
        "meaning": "seriousness, earnestness"
      }
    ]
  },
  {
    "kanji": "借",
    "jlpt": 4,
    "strokeCount": 10,
    "meanings": [
      "borrow",
      "rent"
    ],
    "onyomi": [
      "シャク"
    ],
    "kunyomi": [
      "か.りる"
    ],
    "examples": [
      {
        "word": "借りる",
        "reading": "かりる",
        "meaning": "to borrow"
      },
      {
        "word": "借金",
        "reading": "しゃっきん",
        "meaning": "debt, loan, liabilities"
      }
    ]
  },
  {
    "kanji": "強",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "strong"
    ],
    "onyomi": [
      "キョウ",
      "ゴウ"
    ],
    "kunyomi": [
      "つよ.い",
      "つよ.まる",
      "つよ.める",
      "し.いる",
      "こわ.い"
    ],
    "examples": [
      {
        "word": "勉強",
        "reading": "べんきょうする",
        "meaning": "to study"
      },
      {
        "word": "強い",
        "reading": "つよい",
        "meaning": "powerful"
      },
      {
        "word": "強盗",
        "reading": "ごうとう",
        "meaning": "robbery, burglary"
      },
      {
        "word": "強力",
        "reading": "きょうりょく",
        "meaning": "herculean strength, mountain carrier-guide"
      }
    ]
  },
  {
    "kanji": "教",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "teach",
      "faith",
      "doctrine"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "おし.える",
      "おそ.わる"
    ],
    "examples": [
      {
        "word": "教育",
        "reading": "きょういく",
        "meaning": "education"
      },
      {
        "word": "教会",
        "reading": "きょうかい",
        "meaning": "church"
      },
      {
        "word": "教える",
        "reading": "おしえる",
        "meaning": "to teach, to tell"
      },
      {
        "word": "教室",
        "reading": "きょうしつ",
        "meaning": "classroom"
      }
    ]
  },
  {
    "kanji": "理",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "logic",
      "arrangement",
      "reason",
      "justice",
      "truth"
    ],
    "onyomi": [
      "リ"
    ],
    "kunyomi": [
      "ことわり"
    ],
    "examples": [
      {
        "word": "無理",
        "reading": "むり",
        "meaning": "impossible"
      },
      {
        "word": "理由",
        "reading": "りゆう",
        "meaning": "reason"
      },
      {
        "word": "地理",
        "reading": "ちり",
        "meaning": "geography"
      },
      {
        "word": "料理",
        "reading": "りょうり",
        "meaning": "cuisine"
      }
    ]
  },
  {
    "kanji": "週",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "week"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "さ来週",
        "reading": "さらいしゅう",
        "meaning": "the week after next"
      },
      {
        "word": "毎週",
        "reading": "まいしゅう",
        "meaning": "every week"
      },
      {
        "word": "来週",
        "reading": "らいしゅう",
        "meaning": "next week"
      },
      {
        "word": "先週",
        "reading": "せんしゅう",
        "meaning": "last week"
      }
    ]
  },
  {
    "kanji": "魚",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "fish"
    ],
    "onyomi": [
      "ギョ"
    ],
    "kunyomi": [
      "うお",
      "さかな",
      "-ざかな"
    ],
    "examples": [
      {
        "word": "魚",
        "reading": "さかな",
        "meaning": "fish"
      }
    ]
  },
  {
    "kanji": "鳥",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "bird",
      "chicken"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "とり"
    ],
    "examples": [
      {
        "word": "小鳥",
        "reading": "ことり",
        "meaning": "small bird"
      },
      {
        "word": "鳥",
        "reading": "とり",
        "meaning": "bird"
      }
    ]
  },
  {
    "kanji": "黒",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "black"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "くろ",
      "くろ.ずむ",
      "くろ.い"
    ],
    "examples": [
      {
        "word": "黒",
        "reading": "くろ",
        "meaning": "black"
      },
      {
        "word": "黒い",
        "reading": "くろい",
        "meaning": "black"
      },
      {
        "word": "黒板",
        "reading": "こくばん",
        "meaning": "blackboard"
      }
    ]
  },
  {
    "kanji": "終",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "end",
      "finish"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "お.わる",
      "-お.わる",
      "おわ.る",
      "お.える",
      "つい",
      "つい.に"
    ],
    "examples": [
      {
        "word": "終わり",
        "reading": "おわり",
        "meaning": "the end"
      },
      {
        "word": "終る",
        "reading": "おわる",
        "meaning": "to finish"
      },
      {
        "word": "終える",
        "reading": "おえる",
        "meaning": "to finish"
      },
      {
        "word": "終",
        "reading": "おわり",
        "meaning": "the end"
      }
    ]
  },
  {
    "kanji": "習",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "learn"
    ],
    "onyomi": [
      "シュウ",
      "ジュ"
    ],
    "kunyomi": [
      "なら.う",
      "なら.い"
    ],
    "examples": [
      {
        "word": "復習",
        "reading": "ふくしゅう",
        "meaning": "revision"
      },
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "meaning": "custom, manners"
      },
      {
        "word": "予習",
        "reading": "よしゅう",
        "meaning": "preparation for a lesson"
      },
      {
        "word": "練習",
        "reading": "れんしゅうする",
        "meaning": "to practice"
      }
    ]
  },
  {
    "kanji": "転",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "revolve",
      "turn around",
      "change"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "ころ.がる",
      "ころ.げる",
      "ころ.がす",
      "ころ.ぶ",
      "まろ.ぶ",
      "うたた",
      "うつ.る",
      "くる.めく"
    ],
    "examples": [
      {
        "word": "運転手",
        "reading": "うんてんしゅ",
        "meaning": "driver"
      },
      {
        "word": "運転",
        "reading": "うんてん・する",
        "meaning": "to drive"
      },
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "bicycle"
      },
      {
        "word": "転ぶ",
        "reading": "ころぶ",
        "meaning": "to fall down, to fall over"
      }
    ]
  },
  {
    "kanji": "動",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "move",
      "motion",
      "change",
      "confusion",
      "shift",
      "shake"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "うご.く",
      "うご.かす"
    ],
    "examples": [
      {
        "word": "運動",
        "reading": "うんどう・する",
        "meaning": "to exercise"
      },
      {
        "word": "動く",
        "reading": "うごく",
        "meaning": "to move"
      },
      {
        "word": "動物園",
        "reading": "どうぶつえん",
        "meaning": "zoo"
      },
      {
        "word": "動物",
        "reading": "どうぶつ",
        "meaning": "animal"
      }
    ]
  },
  {
    "kanji": "悪",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "bad",
      "vice",
      "rascal",
      "false",
      "evil",
      "wrong"
    ],
    "onyomi": [
      "アク",
      "オ"
    ],
    "kunyomi": [
      "わる.い",
      "わる-",
      "あ.し",
      "にく.い",
      "-にく.い",
      "ああ",
      "いずくに",
      "いずくんぞ",
      "にく.む"
    ],
    "examples": [
      {
        "word": "悪い",
        "reading": "わるい",
        "meaning": "bad"
      },
      {
        "word": "悪口",
        "reading": "わるくち",
        "meaning": "abuse, insult, slander, evil speaking"
      },
      {
        "word": "悪魔",
        "reading": "あくま",
        "meaning": "devil, demon, evil spirit"
      }
    ]
  },
  {
    "kanji": "族",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "tribe",
      "family"
    ],
    "onyomi": [
      "ゾク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "家族",
        "reading": "かぞく",
        "meaning": "family"
      }
    ]
  },
  {
    "kanji": "野",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "plains",
      "field",
      "rustic",
      "civilian life"
    ],
    "onyomi": [
      "ヤ",
      "ショ"
    ],
    "kunyomi": [
      "の",
      "の-"
    ],
    "examples": [
      {
        "word": "野菜",
        "reading": "やさい",
        "meaning": "vegetable"
      },
      {
        "word": "野",
        "reading": "の",
        "meaning": "field"
      },
      {
        "word": "分野",
        "reading": "ぶんや",
        "meaning": "field, sphere, realm, division, branch"
      }
    ]
  },
  {
    "kanji": "問",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "question",
      "ask",
      "problem"
    ],
    "onyomi": [
      "モン"
    ],
    "kunyomi": [
      "と.う",
      "と.い",
      "とん"
    ],
    "examples": [
      {
        "word": "問題",
        "reading": "もんだい",
        "meaning": "problem"
      },
      {
        "word": "質問",
        "reading": "しつもん",
        "meaning": "question"
      },
      {
        "word": "問い",
        "reading": "とい",
        "meaning": "question, query"
      },
      {
        "word": "疑問",
        "reading": "ぎもん",
        "meaning": "question, problem, doubt, guess"
      }
    ]
  },
  {
    "kanji": "堂",
    "jlpt": 4,
    "strokeCount": 11,
    "meanings": [
      "public chamber",
      "hall"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "講堂",
        "reading": "こうどう",
        "meaning": "auditorium"
      },
      {
        "word": "食堂",
        "reading": "しょくどう",
        "meaning": "dining hall"
      }
    ]
  },
  {
    "kanji": "場",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "location",
      "place"
    ],
    "onyomi": [
      "ジョウ",
      "チョウ"
    ],
    "kunyomi": [
      "ば"
    ],
    "examples": [
      {
        "word": "場合",
        "reading": "ばあい",
        "meaning": "situation"
      },
      {
        "word": "工場",
        "reading": "こうじょう",
        "meaning": "factory"
      },
      {
        "word": "会場",
        "reading": "かいじょう",
        "meaning": "assembly hall or meeting place"
      },
      {
        "word": "売り場",
        "reading": "うりば",
        "meaning": "place where things are sold"
      }
    ]
  },
  {
    "kanji": "朝",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "morning",
      "dynasty",
      "regime",
      "epoch",
      "period",
      "(north) korea"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "あさ"
    ],
    "examples": [
      {
        "word": "毎朝",
        "reading": "まいあさ",
        "meaning": "every morning"
      },
      {
        "word": "朝御飯",
        "reading": "あさごはん",
        "meaning": "breakfast"
      },
      {
        "word": "今朝",
        "reading": "けさ",
        "meaning": "this morning"
      },
      {
        "word": "朝",
        "reading": "あさ",
        "meaning": "morning"
      }
    ]
  },
  {
    "kanji": "答",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "solution",
      "answer"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "こた.える",
      "こた.え"
    ],
    "examples": [
      {
        "word": "答",
        "reading": "こたえ",
        "meaning": "response"
      },
      {
        "word": "答える",
        "reading": "こたえる",
        "meaning": "to answer"
      },
      {
        "word": "答案",
        "reading": "とうあん",
        "meaning": "examination paper, examination script"
      }
    ]
  },
  {
    "kanji": "買",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "buy"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "か.う"
    ],
    "examples": [
      {
        "word": "買う",
        "reading": "かう",
        "meaning": "to buy"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "meaning": "shopping"
      }
    ]
  },
  {
    "kanji": "道",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "road-way",
      "street",
      "district",
      "journey",
      "course",
      "moral",
      "teachings"
    ],
    "onyomi": [
      "ドウ",
      "トウ"
    ],
    "kunyomi": [
      "みち",
      "いう"
    ],
    "examples": [
      {
        "word": "水道",
        "reading": "すいどう",
        "meaning": "water supply"
      },
      {
        "word": "道具",
        "reading": "どうぐ",
        "meaning": "tool, means"
      },
      {
        "word": "柔道",
        "reading": "じゅうどう",
        "meaning": "judo"
      },
      {
        "word": "道",
        "reading": "みち",
        "meaning": "street"
      }
    ]
  },
  {
    "kanji": "運",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "carry",
      "luck",
      "destiny",
      "fate",
      "lot",
      "transport",
      "progress",
      "advance"
    ],
    "onyomi": [
      "ウン"
    ],
    "kunyomi": [
      "はこ.ぶ"
    ],
    "examples": [
      {
        "word": "運ぶ",
        "reading": "はこぶ",
        "meaning": "to transport"
      },
      {
        "word": "運動",
        "reading": "うんどう・する",
        "meaning": "to exercise"
      },
      {
        "word": "運転手",
        "reading": "うんてんしゅ",
        "meaning": "driver"
      },
      {
        "word": "運転",
        "reading": "うんてん・する",
        "meaning": "to drive"
      }
    ]
  },
  {
    "kanji": "開",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "open",
      "unfold",
      "unseal"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "ひら.く",
      "ひら.き",
      "-びら.き",
      "ひら.ける",
      "あ.く",
      "あ.ける"
    ],
    "examples": [
      {
        "word": "開く",
        "reading": "あく",
        "meaning": "to open, to become open"
      },
      {
        "word": "開ける",
        "reading": "あける",
        "meaning": "to open"
      },
      {
        "word": "開始",
        "reading": "かいし",
        "meaning": "start, commencement, beginning"
      }
    ]
  },
  {
    "kanji": "集",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "gather",
      "meet",
      "congregate",
      "swarm",
      "flock"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "あつ.まる",
      "あつ.める",
      "つど.う"
    ],
    "examples": [
      {
        "word": "集る",
        "reading": "あつまる",
        "meaning": "to gather"
      },
      {
        "word": "集める",
        "reading": "あつめる",
        "meaning": "to collect something"
      },
      {
        "word": "集団",
        "reading": "しゅうだん",
        "meaning": "group, mass"
      },
      {
        "word": "集まり",
        "reading": "あつまり",
        "meaning": "gathering, meeting, assembly, collection"
      }
    ]
  },
  {
    "kanji": "飲",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "drink",
      "smoke",
      "take"
    ],
    "onyomi": [
      "イン",
      "オン"
    ],
    "kunyomi": [
      "の.む",
      "-の.み"
    ],
    "examples": [
      {
        "word": "飲む",
        "reading": "のむ",
        "meaning": "to drink"
      },
      {
        "word": "飲み物",
        "reading": "のみもの",
        "meaning": "a drink"
      }
    ]
  },
  {
    "kanji": "着",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "don",
      "arrive",
      "wear",
      "counter for suits of clothing"
    ],
    "onyomi": [
      "チャク",
      "ジャク"
    ],
    "kunyomi": [
      "き.る",
      "-ぎ",
      "き.せる",
      "-き.せ",
      "つ.く",
      "つ.ける"
    ],
    "examples": [
      {
        "word": "着物",
        "reading": "きもの",
        "meaning": "kimono"
      },
      {
        "word": "下着",
        "reading": "したぎ",
        "meaning": "underwear"
      },
      {
        "word": "上着",
        "reading": "うわぎ",
        "meaning": "jacket"
      },
      {
        "word": "着る",
        "reading": "きる",
        "meaning": "to put on from the shoulders down"
      }
    ]
  },
  {
    "kanji": "飯",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "meal",
      "boiled rice"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "めし"
    ],
    "examples": [
      {
        "word": "朝御飯",
        "reading": "あさごはん",
        "meaning": "breakfast"
      },
      {
        "word": "夕飯",
        "reading": "ゆうはん",
        "meaning": "dinner"
      },
      {
        "word": "昼御飯",
        "reading": "ひるごはん",
        "meaning": "midday meal"
      },
      {
        "word": "御飯",
        "reading": "ごはん",
        "meaning": "cooked rice, meal"
      }
    ]
  },
  {
    "kanji": "貸",
    "jlpt": 4,
    "strokeCount": 12,
    "meanings": [
      "lend"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "か.す",
      "か.し-",
      "かし-"
    ],
    "examples": [
      {
        "word": "貸す",
        "reading": "かす",
        "meaning": "to lend"
      },
      {
        "word": "貸し",
        "reading": "かし",
        "meaning": "loan, lending"
      }
    ]
  },
  {
    "kanji": "楽",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "music",
      "comfort",
      "ease"
    ],
    "onyomi": [
      "ガク",
      "ラク",
      "ゴウ"
    ],
    "kunyomi": [
      "たの.しい",
      "たの.しむ",
      "この.む"
    ],
    "examples": [
      {
        "word": "楽む",
        "reading": "たのしむ",
        "meaning": "to enjoy oneself"
      },
      {
        "word": "楽しみ",
        "reading": "たのしみ",
        "meaning": "joy"
      },
      {
        "word": "音楽",
        "reading": "おんがく",
        "meaning": "music"
      },
      {
        "word": "楽しい",
        "reading": "たのしい",
        "meaning": "enjoyable"
      }
    ]
  },
  {
    "kanji": "業",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "business",
      "vocation",
      "arts",
      "performance"
    ],
    "onyomi": [
      "ギョウ",
      "ゴウ"
    ],
    "kunyomi": [
      "わざ"
    ],
    "examples": [
      {
        "word": "工業",
        "reading": "こうぎょう",
        "meaning": "the manufacturing industry"
      },
      {
        "word": "産業",
        "reading": "さんぎょう",
        "meaning": "industry"
      },
      {
        "word": "卒業",
        "reading": "そつぎょう",
        "meaning": "graduation"
      },
      {
        "word": "授業",
        "reading": "じゅぎょう",
        "meaning": "lesson, class work"
      }
    ]
  },
  {
    "kanji": "漢",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "sino-",
      "china"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "漢字",
        "reading": "かんじ",
        "meaning": "Chinese character"
      }
    ]
  },
  {
    "kanji": "意",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "idea",
      "mind",
      "heart",
      "taste",
      "thought",
      "desire",
      "care",
      "liking"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "注意",
        "reading": "ちゅうい",
        "meaning": "caution"
      },
      {
        "word": "意見",
        "reading": "いけん",
        "meaning": "opinion"
      },
      {
        "word": "用意",
        "reading": "ようい",
        "meaning": "preparation"
      },
      {
        "word": "意味",
        "reading": "いみ",
        "meaning": "meaning"
      }
    ]
  },
  {
    "kanji": "新",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "new"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "あたら.しい",
      "あら.た",
      "あら-",
      "にい-"
    ],
    "examples": [
      {
        "word": "新聞社",
        "reading": "しんぶんしゃ",
        "meaning": "newspaper company"
      },
      {
        "word": "新しい",
        "reading": "あたらしい",
        "meaning": "new"
      },
      {
        "word": "新聞",
        "reading": "しんぶん",
        "meaning": "newspaper"
      },
      {
        "word": "新た",
        "reading": "あらた",
        "meaning": "new, fresh, novel"
      }
    ]
  },
  {
    "kanji": "試",
    "jlpt": 4,
    "strokeCount": 13,
    "meanings": [
      "test",
      "try",
      "attempt",
      "experiment",
      "ordeal"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "こころ.みる",
      "ため.す"
    ],
    "examples": [
      {
        "word": "試合",
        "reading": "しあい",
        "meaning": "match, game"
      },
      {
        "word": "試験",
        "reading": "しけん",
        "meaning": "examination"
      },
      {
        "word": "試し",
        "reading": "ためし",
        "meaning": "trial, test"
      },
      {
        "word": "試す",
        "reading": "ためす",
        "meaning": "to attempt, to test"
      }
    ]
  },
  {
    "kanji": "歌",
    "jlpt": 4,
    "strokeCount": 14,
    "meanings": [
      "song",
      "sing"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "うた",
      "うた.う"
    ],
    "examples": [
      {
        "word": "歌",
        "reading": "うた",
        "meaning": "song"
      },
      {
        "word": "歌う",
        "reading": "うたう",
        "meaning": "to sing"
      },
      {
        "word": "歌手",
        "reading": "かしゅ",
        "meaning": "singer"
      }
    ]
  },
  {
    "kanji": "銀",
    "jlpt": 4,
    "strokeCount": 14,
    "meanings": [
      "silver"
    ],
    "onyomi": [
      "ギン"
    ],
    "kunyomi": [
      "しろがね"
    ],
    "examples": [
      {
        "word": "銀行",
        "reading": "ぎんこう",
        "meaning": "bank"
      },
      {
        "word": "銀",
        "reading": "ぎん",
        "meaning": "(1) silver, silver coin, silver paint"
      }
    ]
  },
  {
    "kanji": "駅",
    "jlpt": 4,
    "strokeCount": 14,
    "meanings": [
      "station"
    ],
    "onyomi": [
      "エキ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "駅",
        "reading": "えき",
        "meaning": "station"
      }
    ]
  },
  {
    "kanji": "質",
    "jlpt": 4,
    "strokeCount": 15,
    "meanings": [
      "substance",
      "quality",
      "matter",
      "temperament"
    ],
    "onyomi": [
      "シツ",
      "シチ",
      "チ"
    ],
    "kunyomi": [
      "たち",
      "ただ.す",
      "もと",
      "わりふ"
    ],
    "examples": [
      {
        "word": "質問",
        "reading": "しつもん",
        "meaning": "question"
      },
      {
        "word": "物質",
        "reading": "ぶっしつ",
        "meaning": "material, substance"
      },
      {
        "word": "質",
        "reading": "しつ",
        "meaning": "quality, nature (of person)"
      }
    ]
  },
  {
    "kanji": "親",
    "jlpt": 4,
    "strokeCount": 16,
    "meanings": [
      "parent",
      "intimacy",
      "relative",
      "familiarity",
      "dealer (cards)"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "おや",
      "おや-",
      "した.しい",
      "した.しむ"
    ],
    "examples": [
      {
        "word": "親",
        "reading": "おや",
        "meaning": "parents"
      },
      {
        "word": "親切",
        "reading": "しんせつ",
        "meaning": "kindness"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "meaning": "both parents"
      },
      {
        "word": "母親",
        "reading": "ははおや",
        "meaning": "mother"
      }
    ]
  },
  {
    "kanji": "館",
    "jlpt": 4,
    "strokeCount": 16,
    "meanings": [
      "building",
      "mansion",
      "large building",
      "palace"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "やかた",
      "たて"
    ],
    "examples": [
      {
        "word": "旅館",
        "reading": "りょかん",
        "meaning": "Japanese hotel"
      },
      {
        "word": "美術館",
        "reading": "びじゅつかん",
        "meaning": "art gallery"
      },
      {
        "word": "大使館",
        "reading": "たいしかん",
        "meaning": "embassy"
      },
      {
        "word": "映画館",
        "reading": "えいがかん",
        "meaning": "cinema"
      }
    ]
  },
  {
    "kanji": "題",
    "jlpt": 4,
    "strokeCount": 18,
    "meanings": [
      "topic",
      "subject"
    ],
    "onyomi": [
      "ダイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "問題",
        "reading": "もんだい",
        "meaning": "problem"
      },
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "meaning": "homework"
      },
      {
        "word": "話題",
        "reading": "わだい",
        "meaning": "topic, subject"
      },
      {
        "word": "題",
        "reading": "だい",
        "meaning": "title, subject, theme, topic"
      }
    ]
  },
  {
    "kanji": "曜",
    "jlpt": 4,
    "strokeCount": 18,
    "meanings": [
      "weekday"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "木曜日",
        "reading": "もくようび",
        "meaning": "Thursday"
      },
      {
        "word": "金曜日",
        "reading": "きんようび",
        "meaning": "Friday"
      },
      {
        "word": "火曜日",
        "reading": "かようび",
        "meaning": "Tuesday"
      },
      {
        "word": "水曜日",
        "reading": "すいようび",
        "meaning": "Wednesday"
      }
    ]
  },
  {
    "kanji": "験",
    "jlpt": 4,
    "strokeCount": 18,
    "meanings": [
      "verification",
      "effect",
      "testing"
    ],
    "onyomi": [
      "ケン",
      "ゲン"
    ],
    "kunyomi": [
      "あかし",
      "しるし",
      "ため.す",
      "ためし"
    ],
    "examples": [
      {
        "word": "試験",
        "reading": "しけん",
        "meaning": "examination"
      },
      {
        "word": "経験",
        "reading": "けいけん・する",
        "meaning": "to experience"
      },
      {
        "word": "実験",
        "reading": "じっけん",
        "meaning": "experiment"
      }
    ]
  },
  {
    "kanji": "才",
    "jlpt": 3,
    "strokeCount": 3,
    "meanings": [
      "genius",
      "years old",
      "cubic shaku"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "才能",
        "reading": "さいのう",
        "meaning": "talent, ability"
      }
    ]
  },
  {
    "kanji": "亡",
    "jlpt": 3,
    "strokeCount": 3,
    "meanings": [
      "deceased",
      "the late",
      "dying",
      "perish"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "な.い",
      "な.き-",
      "ほろ.びる",
      "ほろ.ぶ",
      "ほろ.ぼす"
    ],
    "examples": [
      {
        "word": "死亡",
        "reading": "しぼう",
        "meaning": "death, mortality"
      },
      {
        "word": "亡くなる",
        "reading": "なくなる",
        "meaning": "to die"
      }
    ]
  },
  {
    "kanji": "与",
    "jlpt": 3,
    "strokeCount": 3,
    "meanings": [
      "bestow",
      "participate in",
      "give",
      "award",
      "impart",
      "provide",
      "cause",
      "gift",
      "godsend"
    ],
    "onyomi": [
      "ヨ"
    ],
    "kunyomi": [
      "あた.える",
      "あずか.る",
      "くみ.する",
      "ともに"
    ],
    "examples": [
      {
        "word": "与える",
        "reading": "あたえる",
        "meaning": "to give, to present, to award"
      }
    ]
  },
  {
    "kanji": "王",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "king",
      "rule",
      "magnate"
    ],
    "onyomi": [
      "オウ",
      "-ノウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "王",
        "reading": "おう",
        "meaning": "king, ruler, sovereign, monarch"
      },
      {
        "word": "王様",
        "reading": "おうさま",
        "meaning": "king"
      },
      {
        "word": "女王",
        "reading": "じょおう",
        "meaning": "queen"
      },
      {
        "word": "王子",
        "reading": "おうじ",
        "meaning": "prince"
      }
    ]
  },
  {
    "kanji": "内",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "inside",
      "within",
      "between",
      "among",
      "house",
      "home"
    ],
    "onyomi": [
      "ナイ",
      "ダイ"
    ],
    "kunyomi": [
      "うち"
    ],
    "examples": [
      {
        "word": "内",
        "reading": "うち",
        "meaning": "inside"
      },
      {
        "word": "内容",
        "reading": "ないよう",
        "meaning": "subject, contents, matter, substance, detail, import"
      },
      {
        "word": "家内",
        "reading": "かない",
        "meaning": "housewife"
      },
      {
        "word": "案内",
        "reading": "あんない・する",
        "meaning": "to guide"
      }
    ]
  },
  {
    "kanji": "太",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "plump",
      "thick",
      "big around"
    ],
    "onyomi": [
      "タイ",
      "タ"
    ],
    "kunyomi": [
      "ふと.い",
      "ふと.る"
    ],
    "examples": [
      {
        "word": "太陽",
        "reading": "たいよう",
        "meaning": "sun, solar"
      },
      {
        "word": "太る",
        "reading": "ふとる",
        "meaning": "to become fat"
      },
      {
        "word": "太い",
        "reading": "ふとい",
        "meaning": "fat"
      }
    ]
  },
  {
    "kanji": "引",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "pull",
      "tug",
      "jerk",
      "admit",
      "install",
      "quote",
      "refer to"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "ひ.く",
      "ひ.き",
      "ひ.き-",
      "-び.き",
      "ひ.ける"
    ],
    "examples": [
      {
        "word": "引っ張る",
        "reading": "ひっぱる",
        "meaning": "(1) to pull, to draw, to stretch, to drag, (2) to pull the ball (baseball)"
      },
      {
        "word": "引用",
        "reading": "いんよう",
        "meaning": "quotation, citation"
      },
      {
        "word": "引退",
        "reading": "いんたい",
        "meaning": "retire"
      },
      {
        "word": "引き出す",
        "reading": "ひきだす",
        "meaning": "to withdraw"
      }
    ]
  },
  {
    "kanji": "化",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "change",
      "take the form of",
      "influence",
      "enchant",
      "delude",
      "-ization"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "ば.ける",
      "ば.かす",
      "ふ.ける",
      "け.する"
    ],
    "examples": [
      {
        "word": "化粧",
        "reading": "けしょう",
        "meaning": "make-up (cosmetic)"
      },
      {
        "word": "変化",
        "reading": "へんか",
        "meaning": "goblin, ghost, apparition, bugbear"
      },
      {
        "word": "化学",
        "reading": "かがく",
        "meaning": "chemistry"
      },
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "culture"
      }
    ]
  },
  {
    "kanji": "欠",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "lack",
      "gap",
      "fail",
      "yawning radical (no. 76)"
    ],
    "onyomi": [
      "ケツ",
      "ケン"
    ],
    "kunyomi": [
      "か.ける",
      "か.く"
    ],
    "examples": [
      {
        "word": "欠ける",
        "reading": "かける",
        "meaning": "to be lacking"
      },
      {
        "word": "欠点",
        "reading": "けってん",
        "meaning": "faults, defect, weakness"
      },
      {
        "word": "欠席",
        "reading": "けっせき",
        "meaning": "absence, non-attendance"
      },
      {
        "word": "欠陥",
        "reading": "けっかん",
        "meaning": "defect, fault, deficiency"
      }
    ]
  },
  {
    "kanji": "支",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "branch",
      "support",
      "sustain",
      "branch radical (no. 65)"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "ささ.える",
      "つか.える",
      "か.う"
    ],
    "examples": [
      {
        "word": "支払",
        "reading": "しはらい",
        "meaning": "payment"
      },
      {
        "word": "支える",
        "reading": "ささえる",
        "meaning": "to be blocked, to choke, to be obstructed"
      },
      {
        "word": "支出",
        "reading": "ししゅつ",
        "meaning": "expenditure, expenses"
      },
      {
        "word": "支店",
        "reading": "してん",
        "meaning": "branch store (office)"
      }
    ]
  },
  {
    "kanji": "予",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "beforehand",
      "previous",
      "myself",
      "i"
    ],
    "onyomi": [
      "ヨ",
      "シャ"
    ],
    "kunyomi": [
      "あらかじ.め"
    ],
    "examples": [
      {
        "word": "予算",
        "reading": "よさん",
        "meaning": "estimate, budget"
      },
      {
        "word": "予報",
        "reading": "よほう",
        "meaning": "forecast, prediction"
      },
      {
        "word": "予期",
        "reading": "よき",
        "meaning": "expectation, assume will happen, forecast"
      },
      {
        "word": "予測",
        "reading": "よそく",
        "meaning": "prediction, estimation"
      }
    ]
  },
  {
    "kanji": "反",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "anti-"
    ],
    "onyomi": [
      "ハン",
      "ホン",
      "タン",
      "ホ"
    ],
    "kunyomi": [
      "そ.る",
      "そ.らす",
      "かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "examples": [
      {
        "word": "反抗",
        "reading": "はんこう",
        "meaning": "opposition, resistance"
      },
      {
        "word": "違反",
        "reading": "いはん",
        "meaning": "violation (of law), transgression, infringement, breach"
      },
      {
        "word": "反対",
        "reading": "はんたい",
        "meaning": "opposition"
      }
    ]
  },
  {
    "kanji": "夫",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "husband",
      "man"
    ],
    "onyomi": [
      "フ",
      "フウ",
      "ブ"
    ],
    "kunyomi": [
      "おっと",
      "それ"
    ],
    "examples": [
      {
        "word": "夫婦",
        "reading": "ふうふ",
        "meaning": "married couple, husband and wife"
      },
      {
        "word": "夫人",
        "reading": "ふじん",
        "meaning": "wife, Mrs, madam"
      },
      {
        "word": "夫",
        "reading": "おっと",
        "meaning": "husband"
      },
      {
        "word": "丈夫",
        "reading": "じょうぶ",
        "meaning": "strong, durable"
      }
    ]
  },
  {
    "kanji": "収",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "income",
      "obtain",
      "reap",
      "pay",
      "supply",
      "store"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる"
    ],
    "examples": [
      {
        "word": "収穫",
        "reading": "しゅうかく",
        "meaning": "harvest, crop, ingathering"
      },
      {
        "word": "吸収",
        "reading": "きゅうしゅう",
        "meaning": "absorption, suction, attraction"
      },
      {
        "word": "収入",
        "reading": "しゅうにゅう",
        "meaning": "income, receipts, revenue"
      },
      {
        "word": "収める",
        "reading": "おさめる",
        "meaning": "to obtain, to reap, to pay, to supply, to accept"
      }
    ]
  },
  {
    "kanji": "互",
    "jlpt": 3,
    "strokeCount": 4,
    "meanings": [
      "mutually",
      "reciprocally",
      "together"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "たが.い",
      "かたみ.に"
    ],
    "examples": [
      {
        "word": "お互い",
        "reading": "おたがい",
        "meaning": "mutual, reciprocal, each other"
      },
      {
        "word": "互い",
        "reading": "たがい",
        "meaning": "mutual, reciprocal"
      }
    ]
  },
  {
    "kanji": "石",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "stone"
    ],
    "onyomi": [
      "セキ",
      "シャク",
      "コク"
    ],
    "kunyomi": [
      "いし"
    ],
    "examples": [
      {
        "word": "石油",
        "reading": "せきゆ",
        "meaning": "oil, petroleum, kerosene"
      },
      {
        "word": "石炭",
        "reading": "せきたん",
        "meaning": "coal"
      },
      {
        "word": "宝石",
        "reading": "ほうせき",
        "meaning": "gem, jewel"
      },
      {
        "word": "石",
        "reading": "いし",
        "meaning": "stone"
      }
    ]
  },
  {
    "kanji": "市",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "market",
      "city",
      "town"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "いち"
    ],
    "examples": [
      {
        "word": "市場",
        "reading": "いちば",
        "meaning": "(the) market (as a concept)"
      },
      {
        "word": "都市",
        "reading": "とし",
        "meaning": "town, city, municipal, urban"
      },
      {
        "word": "市民",
        "reading": "しみん",
        "meaning": "citizen"
      },
      {
        "word": "市",
        "reading": "し",
        "meaning": "city"
      }
    ]
  },
  {
    "kanji": "他",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "other",
      "another",
      "the others"
    ],
    "onyomi": [
      "タ"
    ],
    "kunyomi": [
      "ほか"
    ],
    "examples": [
      {
        "word": "他",
        "reading": "た",
        "meaning": "other (esp. places and things)"
      },
      {
        "word": "他人",
        "reading": "たにん",
        "meaning": "another person, unrelated person, outsider, stranger"
      }
    ]
  },
  {
    "kanji": "号",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "nickname",
      "number",
      "item",
      "title",
      "pseudonym",
      "name",
      "call"
    ],
    "onyomi": [
      "ゴウ"
    ],
    "kunyomi": [
      "さけ.ぶ",
      "よびな"
    ],
    "examples": [
      {
        "word": "信号",
        "reading": "しんごう",
        "meaning": "traffic lights, signal, semaphore"
      },
      {
        "word": "番号",
        "reading": "ばんごう",
        "meaning": "number"
      }
    ]
  },
  {
    "kanji": "平",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "even",
      "flat",
      "peace"
    ],
    "onyomi": [
      "ヘイ",
      "ビョウ",
      "ヒョウ"
    ],
    "kunyomi": [
      "たい.ら",
      "-だいら",
      "ひら",
      "ひら-"
    ],
    "examples": [
      {
        "word": "平均",
        "reading": "へいきん",
        "meaning": "equilibrium, balance, average, mean"
      },
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace, harmony"
      },
      {
        "word": "地平線",
        "reading": "ちへいせん",
        "meaning": "horizon"
      },
      {
        "word": "不平",
        "reading": "ふへい",
        "meaning": "complaint, discontent, dissatisfaction"
      }
    ]
  },
  {
    "kanji": "打",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "strike",
      "hit",
      "knock",
      "pound",
      "dozen"
    ],
    "onyomi": [
      "ダ",
      "ダアス"
    ],
    "kunyomi": [
      "う.つ",
      "う.ち-",
      "ぶ.つ"
    ],
    "examples": [
      {
        "word": "打つ",
        "reading": "うつ",
        "meaning": "to hit"
      }
    ]
  },
  {
    "kanji": "申",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "have the honor to",
      "sign of the monkey",
      "3-5pm",
      "ninth sign of chinese zodiac"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "もう.す",
      "もう.し-",
      "さる"
    ],
    "examples": [
      {
        "word": "申し訳",
        "reading": "もうしわけ",
        "meaning": "apology, excuse"
      },
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "meaning": "to apply for, to make an application"
      },
      {
        "word": "申す",
        "reading": "もうす",
        "meaning": "(humble) to be called, to say"
      },
      {
        "word": "申し上げる",
        "reading": "もうしあげる",
        "meaning": "(humble) to say, to tell"
      }
    ]
  },
  {
    "kanji": "礼",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "salute",
      "bow",
      "ceremony",
      "thanks",
      "remuneration"
    ],
    "onyomi": [
      "レイ",
      "ライ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "礼儀",
        "reading": "れいぎ",
        "meaning": "manners, courtesy, etiquette"
      },
      {
        "word": "礼",
        "reading": "れい",
        "meaning": "expression of gratitude"
      },
      {
        "word": "お礼",
        "reading": "おれい",
        "meaning": "expression of gratitude"
      }
    ]
  },
  {
    "kanji": "由",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "wherefore",
      "a reason"
    ],
    "onyomi": [
      "ユ",
      "ユウ",
      "ユイ"
    ],
    "kunyomi": [
      "よし",
      "よ.る"
    ],
    "examples": [
      {
        "word": "経由",
        "reading": "けいゆ",
        "meaning": "go by the way, via"
      },
      {
        "word": "不自由",
        "reading": "ふじゆう",
        "meaning": "discomfort, disability, inconvenience, destitution"
      },
      {
        "word": "理由",
        "reading": "りゆう",
        "meaning": "reason"
      },
      {
        "word": "自由",
        "reading": "じゆう",
        "meaning": "freedom"
      }
    ]
  },
  {
    "kanji": "民",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "people",
      "nation",
      "subjects"
    ],
    "onyomi": [
      "ミン"
    ],
    "kunyomi": [
      "たみ"
    ],
    "examples": [
      {
        "word": "農民",
        "reading": "のうみん",
        "meaning": "farmers, peasants"
      },
      {
        "word": "住民",
        "reading": "じゅうみん",
        "meaning": "citizens, inhabitants, residents, population"
      },
      {
        "word": "国民",
        "reading": "こくみん",
        "meaning": "national, people, citizen"
      },
      {
        "word": "市民",
        "reading": "しみん",
        "meaning": "citizen"
      }
    ]
  },
  {
    "kanji": "付",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "adhere",
      "attach",
      "refer to",
      "append"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "つ.ける",
      "-つ.ける",
      "-づ.ける",
      "つ.け",
      "つ.け-",
      "-つ.け",
      "-づ.け",
      "-づけ",
      "つ.く",
      "-づ.く",
      "つ.き",
      "-つ.き",
      "-つき",
      "-づ.き",
      "-づき"
    ],
    "examples": [
      {
        "word": "日付",
        "reading": "ひづけ",
        "meaning": "date, dating"
      },
      {
        "word": "気付く",
        "reading": "きづく",
        "meaning": "to notice, to recognize, to become aware of"
      },
      {
        "word": "付き合い",
        "reading": "つきあい",
        "meaning": "association, socializing, fellowship"
      },
      {
        "word": "追い付く",
        "reading": "おいつく",
        "meaning": "to overtake, to catch up (with)"
      }
    ]
  },
  {
    "kanji": "失",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "lose",
      "error",
      "fault",
      "disadvantage",
      "loss"
    ],
    "onyomi": [
      "シツ"
    ],
    "kunyomi": [
      "うしな.う",
      "う.せる"
    ],
    "examples": [
      {
        "word": "失う",
        "reading": "うしなう",
        "meaning": "to lose, to part with"
      },
      {
        "word": "失業",
        "reading": "しつぎょう",
        "meaning": "unemployment"
      },
      {
        "word": "失望",
        "reading": "しつぼう",
        "meaning": "disappointment, despair"
      },
      {
        "word": "失敗",
        "reading": "しっぱい",
        "meaning": "failure, mistake"
      }
    ]
  },
  {
    "kanji": "必",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "invariably",
      "certain",
      "inevitable"
    ],
    "onyomi": [
      "ヒツ"
    ],
    "kunyomi": [
      "かなら.ず"
    ],
    "examples": [
      {
        "word": "必死",
        "reading": "ひっし",
        "meaning": "inevitable death, desperation, frantic, inevitable result"
      },
      {
        "word": "必ずしも",
        "reading": "かならずしも",
        "meaning": "(not) always, (not) necessarily, (not) all, (not) entirely"
      },
      {
        "word": "必要",
        "reading": "ひつよう",
        "meaning": "necessary"
      },
      {
        "word": "必ず",
        "reading": "かならず",
        "meaning": "certainly, necessarily"
      }
    ]
  },
  {
    "kanji": "未",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "un-",
      "not yet",
      "hitherto",
      "still",
      "even now",
      "sign of the ram",
      "1-3pm",
      "eighth sign of chinese zodiac"
    ],
    "onyomi": [
      "ミ",
      "ビ"
    ],
    "kunyomi": [
      "いま.だ",
      "ま.だ",
      "ひつじ"
    ],
    "examples": [
      {
        "word": "未来",
        "reading": "みらい",
        "meaning": "future (life, tense)"
      },
      {
        "word": "未だ",
        "reading": "まだ",
        "meaning": "yet, still, more, besides"
      }
    ]
  },
  {
    "kanji": "末",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "end",
      "close",
      "tip",
      "powder",
      "posterity"
    ],
    "onyomi": [
      "マツ",
      "バツ"
    ],
    "kunyomi": [
      "すえ"
    ],
    "examples": [
      {
        "word": "末",
        "reading": "すえ",
        "meaning": "the end of, powder"
      },
      {
        "word": "粗末",
        "reading": "そまつ",
        "meaning": "crude, rough, plain, humble"
      }
    ]
  },
  {
    "kanji": "加",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "add",
      "addition",
      "increase",
      "join",
      "include",
      "canada"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "くわ.える",
      "くわ.わる"
    ],
    "examples": [
      {
        "word": "加わる",
        "reading": "くわわる",
        "meaning": "to join in, to accede to, to increase, to gain in (influence)"
      },
      {
        "word": "増加",
        "reading": "ぞうか",
        "meaning": "increase, addition"
      },
      {
        "word": "参加",
        "reading": "さんか",
        "meaning": "participation"
      },
      {
        "word": "加える",
        "reading": "くわえる",
        "meaning": "to append, to sum up, to add (up)"
      }
    ]
  },
  {
    "kanji": "犯",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "crime",
      "sin",
      "offense"
    ],
    "onyomi": [
      "ハン",
      "ボン"
    ],
    "kunyomi": [
      "おか.す"
    ],
    "examples": [
      {
        "word": "犯人",
        "reading": "はんにん",
        "meaning": "offender, criminal"
      },
      {
        "word": "犯罪",
        "reading": "はんざい",
        "meaning": "crime"
      }
    ]
  },
  {
    "kanji": "示",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "show",
      "indicate",
      "point out",
      "express",
      "display"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "しめ.す"
    ],
    "examples": [
      {
        "word": "示す",
        "reading": "しめす",
        "meaning": "to denote, to show, to point out, to indicate"
      },
      {
        "word": "掲示",
        "reading": "けいじ",
        "meaning": "notice, bulletin"
      }
    ]
  },
  {
    "kanji": "処",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "dispose",
      "manage",
      "deal with",
      "sentence",
      "condemn",
      "act",
      "behave",
      "place"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "ところ",
      "-こ",
      "お.る"
    ],
    "examples": [
      {
        "word": "処理",
        "reading": "しょり",
        "meaning": "processing, dealing with, treatment, disposition, disposal"
      }
    ]
  },
  {
    "kanji": "込",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "crowded",
      "mixture",
      "in bulk",
      "included",
      "(kokuji)"
    ],
    "onyomi": [],
    "kunyomi": [
      "-こ.む",
      "こ.む",
      "こ.み",
      "-こ.み",
      "こ.める"
    ],
    "examples": [
      {
        "word": "人込み",
        "reading": "ひとごみ",
        "meaning": "crowd of people"
      },
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "meaning": "to apply for, to make an application"
      },
      {
        "word": "込む",
        "reading": "こむ",
        "meaning": "to be crowded"
      }
    ]
  },
  {
    "kanji": "払",
    "jlpt": 3,
    "strokeCount": 5,
    "meanings": [
      "pay",
      "clear out",
      "prune",
      "banish",
      "dispose of"
    ],
    "onyomi": [
      "フツ",
      "ヒツ",
      "ホツ"
    ],
    "kunyomi": [
      "はら.う",
      "-はら.い",
      "-ばら.い"
    ],
    "examples": [
      {
        "word": "支払",
        "reading": "しはらい",
        "meaning": "payment"
      },
      {
        "word": "支払う",
        "reading": "しはらう",
        "meaning": "to pay"
      },
      {
        "word": "払う",
        "reading": "はらう",
        "meaning": "to pay"
      }
    ]
  },
  {
    "kanji": "耳",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "ear"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "みみ"
    ],
    "examples": [
      {
        "word": "耳",
        "reading": "みみ",
        "meaning": "ear"
      }
    ]
  },
  {
    "kanji": "交",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "mingle",
      "mixing",
      "association",
      "coming & going"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "まじ.わる",
      "まじ.える",
      "ま.じる",
      "まじ.る",
      "ま.ざる",
      "ま.ぜる",
      "-か.う",
      "か.わす",
      "かわ.す",
      "こもごも"
    ],
    "examples": [
      {
        "word": "交際",
        "reading": "こうさい",
        "meaning": "company, friendship, association, society, acquaintance"
      },
      {
        "word": "交換",
        "reading": "こうかん",
        "meaning": "exchange, interchange, reciprocity"
      },
      {
        "word": "外交",
        "reading": "がいこう",
        "meaning": "diplomacy"
      },
      {
        "word": "交通",
        "reading": "こうつう",
        "meaning": "traffic, transportation"
      }
    ]
  },
  {
    "kanji": "光",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "ray",
      "light"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "ひか.る",
      "ひかり"
    ],
    "examples": [
      {
        "word": "観光",
        "reading": "かんこう",
        "meaning": "sightseeing"
      },
      {
        "word": "日光",
        "reading": "にっこう",
        "meaning": "sunlight"
      },
      {
        "word": "光景",
        "reading": "こうけい",
        "meaning": "scene, spectacle"
      },
      {
        "word": "光",
        "reading": "ひかり",
        "meaning": "light"
      }
    ]
  },
  {
    "kanji": "回",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "-times",
      "round",
      "game",
      "revolve",
      "counter for occurrences"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [
      "まわ.る",
      "-まわ.る",
      "-まわ.り",
      "まわ.す",
      "-まわ.す",
      "まわ.し-",
      "-まわ.し",
      "もとお.る",
      "か.える"
    ],
    "examples": [
      {
        "word": "回す",
        "reading": "まわす",
        "meaning": "to turn, to revolve"
      },
      {
        "word": "回り",
        "reading": "まわり",
        "meaning": "circumference, surroundings, circulation"
      },
      {
        "word": "今回",
        "reading": "こんかい",
        "meaning": "now, this time, lately"
      },
      {
        "word": "回",
        "reading": "かい",
        "meaning": "counter for occurrences"
      }
    ]
  },
  {
    "kanji": "当",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "hit",
      "right",
      "appropriate",
      "himself"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "あ.たる",
      "あ.たり",
      "あ.てる",
      "あ.て",
      "まさ.に",
      "まさ.にべし"
    ],
    "examples": [
      {
        "word": "弁当",
        "reading": "べんとう",
        "meaning": "box lunch"
      },
      {
        "word": "担当",
        "reading": "たんとう",
        "meaning": "(in) charge"
      },
      {
        "word": "相当",
        "reading": "そうとう",
        "meaning": "suitable, fair, tolerable, proper"
      },
      {
        "word": "当時",
        "reading": "とうじ",
        "meaning": "at that time, in those days"
      }
    ]
  },
  {
    "kanji": "米",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "rice",
      "usa",
      "metre"
    ],
    "onyomi": [
      "ベイ",
      "マイ",
      "メエトル"
    ],
    "kunyomi": [
      "こめ",
      "よね"
    ],
    "examples": [
      {
        "word": "米",
        "reading": "こめ",
        "meaning": "uncooked rice"
      }
    ]
  },
  {
    "kanji": "両",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "both",
      "old japanese coin",
      "counter for carriages (e.g., in a train)",
      "two"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "てる",
      "ふたつ"
    ],
    "examples": [
      {
        "word": "両替",
        "reading": "りょうがえ",
        "meaning": "change, money exchange"
      },
      {
        "word": "両方",
        "reading": "りょうほう",
        "meaning": "both sides"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "meaning": "both parents"
      }
    ]
  },
  {
    "kanji": "全",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "whole",
      "entire",
      "all",
      "complete",
      "fulfill"
    ],
    "onyomi": [
      "ゼン"
    ],
    "kunyomi": [
      "まった.く",
      "すべ.て"
    ],
    "examples": [
      {
        "word": "全く",
        "reading": "まったく",
        "meaning": "really, truly, entirely, completely"
      },
      {
        "word": "完全",
        "reading": "かんぜん",
        "meaning": "perfection, completeness"
      },
      {
        "word": "全員",
        "reading": "ぜんいん",
        "meaning": "all members (unanimity), all hands, the whole crew"
      },
      {
        "word": "全て",
        "reading": "すべて",
        "meaning": "all, the whole, entirely, in general, wholly"
      }
    ]
  },
  {
    "kanji": "向",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "yonder",
      "facing",
      "beyond",
      "confront",
      "defy",
      "tend toward",
      "approach"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "む.く",
      "む.い",
      "-む.き",
      "む.ける",
      "-む.け",
      "む.かう",
      "む.かい",
      "む.こう",
      "む.こう-",
      "むこ",
      "むか.い"
    ],
    "examples": [
      {
        "word": "向ける",
        "reading": "むける",
        "meaning": "to turn towards, to point"
      },
      {
        "word": "向かい",
        "reading": "むかい",
        "meaning": "facing, opposite, across the street, other side"
      },
      {
        "word": "傾向",
        "reading": "けいこう",
        "meaning": "tendency, trend, inclination"
      },
      {
        "word": "向く",
        "reading": "むく",
        "meaning": "to face"
      }
    ]
  },
  {
    "kanji": "曲",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "bend",
      "music",
      "melody",
      "composition",
      "pleasure",
      "injustice",
      "fault",
      "curve",
      "crooked",
      "perverse",
      "lean"
    ],
    "onyomi": [
      "キョク"
    ],
    "kunyomi": [
      "ま.がる",
      "ま.げる",
      "くま"
    ],
    "examples": [
      {
        "word": "作曲",
        "reading": "さっきょく",
        "meaning": "composition, setting (of music)"
      },
      {
        "word": "曲る",
        "reading": "まがる",
        "meaning": "to turn, to bend"
      }
    ]
  },
  {
    "kanji": "次",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "next",
      "order",
      "sequence"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "つ.ぐ",
      "つぎ"
    ],
    "examples": [
      {
        "word": "次々",
        "reading": "つぎつぎ",
        "meaning": "in succession, one by one"
      },
      {
        "word": "次第",
        "reading": "しだい",
        "meaning": "(1) order, precedence, (2) circumstances, (3) immediate(ly)"
      },
      {
        "word": "次",
        "reading": "つぎ",
        "meaning": "next"
      }
    ]
  },
  {
    "kanji": "争",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "contend",
      "dispute",
      "argue"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "あらそ.う",
      "いか.でか"
    ],
    "examples": [
      {
        "word": "論争",
        "reading": "ろんそう",
        "meaning": "controversy, dispute"
      },
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      },
      {
        "word": "競争",
        "reading": "きょうそう",
        "meaning": "competition"
      }
    ]
  },
  {
    "kanji": "伝",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "transmit",
      "go along",
      "walk along",
      "follow",
      "report",
      "communicate",
      "legend",
      "tradition"
    ],
    "onyomi": [
      "デン",
      "テン"
    ],
    "kunyomi": [
      "つた.わる",
      "つた.える",
      "つた.う",
      "つだ.う",
      "-づた.い",
      "つて"
    ],
    "examples": [
      {
        "word": "手伝い",
        "reading": "てつだい",
        "meaning": "help, helper, assistant"
      },
      {
        "word": "伝統",
        "reading": "でんとう",
        "meaning": "tradition, convention"
      },
      {
        "word": "手伝う",
        "reading": "てつだう",
        "meaning": "to assist"
      },
      {
        "word": "伝える",
        "reading": "つたえる",
        "meaning": "to report"
      }
    ]
  },
  {
    "kanji": "共",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "together",
      "both",
      "neither",
      "all",
      "and",
      "alike",
      "with"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "とも",
      "とも.に",
      "-ども"
    ],
    "examples": [
      {
        "word": "共同",
        "reading": "きょうどう",
        "meaning": "cooperation, association, collaboration, joint"
      },
      {
        "word": "共に",
        "reading": "ともに",
        "meaning": "sharing with, participate in"
      },
      {
        "word": "共通",
        "reading": "きょうつう",
        "meaning": "commonness, community"
      }
    ]
  },
  {
    "kanji": "好",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "fond",
      "pleasing",
      "like something"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "この.む",
      "す.く",
      "よ.い",
      "い.い"
    ],
    "examples": [
      {
        "word": "好む",
        "reading": "このむ",
        "meaning": "to like, to prefer"
      },
      {
        "word": "格好",
        "reading": "かっこう",
        "meaning": "shape, form, posture, suitability"
      },
      {
        "word": "好み",
        "reading": "このみ",
        "meaning": "liking, taste, choice"
      },
      {
        "word": "好き",
        "reading": "すき",
        "meaning": "likeable"
      }
    ]
  },
  {
    "kanji": "成",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "turn into",
      "become",
      "get",
      "grow",
      "elapse",
      "reach"
    ],
    "onyomi": [
      "セイ",
      "ジョウ"
    ],
    "kunyomi": [
      "な.る",
      "な.す",
      "-な.す"
    ],
    "examples": [
      {
        "word": "成る",
        "reading": "なる",
        "meaning": "to become"
      },
      {
        "word": "賛成",
        "reading": "Uӣ[い",
        "meaning": "approval, agreement, support, favour"
      },
      {
        "word": "成人",
        "reading": "せいじん",
        "meaning": "adult"
      },
      {
        "word": "成功",
        "reading": "せいこう",
        "meaning": "success, hit"
      }
    ]
  },
  {
    "kanji": "老",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "old man",
      "old age",
      "grow old"
    ],
    "onyomi": [
      "ロウ"
    ],
    "kunyomi": [
      "お.いる",
      "ふ.ける"
    ],
    "examples": [
      {
        "word": "老い",
        "reading": "おい",
        "meaning": "old age, old person, the old, the aged"
      },
      {
        "word": "老人",
        "reading": "ろうじん",
        "meaning": "the aged, old person"
      }
    ]
  },
  {
    "kanji": "合",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "fit",
      "suit",
      "join",
      "0.1"
    ],
    "onyomi": [
      "ゴウ",
      "ガッ",
      "カッ"
    ],
    "kunyomi": [
      "あ.う",
      "-あ.う",
      "あ.い",
      "あい-",
      "-あ.い",
      "-あい",
      "あ.わす",
      "あ.わせる",
      "-あ.わせる"
    ],
    "examples": [
      {
        "word": "合図",
        "reading": "あいず",
        "meaning": "sign, signal"
      },
      {
        "word": "合格",
        "reading": "ごうかく",
        "meaning": "success, passing (e.g. exam), eligibility"
      },
      {
        "word": "付き合い",
        "reading": "つきあい",
        "meaning": "association, socializing, fellowship"
      },
      {
        "word": "合計",
        "reading": "ごうけい",
        "meaning": "sum total, total amount"
      }
    ]
  },
  {
    "kanji": "列",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "file",
      "row",
      "rank",
      "tier",
      "column"
    ],
    "onyomi": [
      "レツ",
      "レ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "列車",
        "reading": "れっしゃ",
        "meaning": "train (ordinary)"
      },
      {
        "word": "列",
        "reading": "れつ",
        "meaning": "queue, line, row"
      }
    ]
  },
  {
    "kanji": "式",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "style",
      "ceremony",
      "rite",
      "function",
      "method",
      "system",
      "form",
      "expression"
    ],
    "onyomi": [
      "シキ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "正式",
        "reading": "せいしき",
        "meaning": "due form, official, formality"
      },
      {
        "word": "式",
        "reading": "しき",
        "meaning": "equation, formula, ceremony"
      }
    ]
  },
  {
    "kanji": "守",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "guard",
      "protect",
      "defend",
      "obey"
    ],
    "onyomi": [
      "シュ",
      "ス"
    ],
    "kunyomi": [
      "まも.る",
      "まも.り",
      "もり",
      "-もり",
      "かみ"
    ],
    "examples": [
      {
        "word": "守る",
        "reading": "まもる",
        "meaning": "to protect, to obey, to guard, to abide (by the rules)"
      },
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      }
    ]
  },
  {
    "kanji": "危",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "dangerous",
      "fear",
      "uneasy"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "あぶ.ない",
      "あや.うい",
      "あや.ぶむ"
    ],
    "examples": [
      {
        "word": "危険",
        "reading": "きけん",
        "meaning": "danger"
      },
      {
        "word": "危ない",
        "reading": "あぶない",
        "meaning": "dangerous"
      }
    ]
  },
  {
    "kanji": "存",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "exist",
      "suppose",
      "be aware of",
      "believe",
      "feel"
    ],
    "onyomi": [
      "ソン",
      "ゾン"
    ],
    "kunyomi": [
      "ながら.える",
      "あ.る",
      "たも.つ",
      "と.う"
    ],
    "examples": [
      {
        "word": "存在",
        "reading": "そんざい",
        "meaning": "existence, being"
      },
      {
        "word": "保存",
        "reading": "ほぞん",
        "meaning": "preservation, conservation, storage, maintenance"
      },
      {
        "word": "ご存じ",
        "reading": "ごぞんじ",
        "meaning": "knowing, acquaintance"
      }
    ]
  },
  {
    "kanji": "因",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "cause",
      "factor",
      "be associated with",
      "depend on",
      "be limited to"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "よ.る",
      "ちな.む"
    ],
    "examples": [
      {
        "word": "原因",
        "reading": "げんいん",
        "meaning": "cause, source"
      }
    ]
  },
  {
    "kanji": "忙",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "busy",
      "occupied",
      "restless"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "いそが.しい",
      "せわ.しい",
      "おそ.れる",
      "うれえるさま"
    ],
    "examples": [
      {
        "word": "忙しい",
        "reading": "いそがしい",
        "meaning": "busy, irritated"
      }
    ]
  },
  {
    "kanji": "在",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "exist",
      "outskirts",
      "suburbs",
      "located in"
    ],
    "onyomi": [
      "ザイ"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "examples": [
      {
        "word": "存在",
        "reading": "そんざい",
        "meaning": "existence, being"
      },
      {
        "word": "滞在",
        "reading": "たいざい",
        "meaning": "stay, sojourn"
      },
      {
        "word": "現在",
        "reading": "げんざい",
        "meaning": "present, up to now, nowadays, modern times, current"
      }
    ]
  },
  {
    "kanji": "件",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "affair",
      "case",
      "matter",
      "item"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "くだん"
    ],
    "examples": [
      {
        "word": "条件",
        "reading": "じょうけん",
        "meaning": "conditions, terms"
      },
      {
        "word": "事件",
        "reading": "じけん",
        "meaning": "event, affair, incident"
      }
    ]
  },
  {
    "kanji": "任",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "responsibility",
      "duty",
      "term",
      "entrust to",
      "appoint"
    ],
    "onyomi": [
      "ニン"
    ],
    "kunyomi": [
      "まか.せる",
      "まか.す"
    ],
    "examples": [
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "duty, responsibility"
      },
      {
        "word": "任せる",
        "reading": "まかせる",
        "meaning": "to entrust to another, to leave to"
      }
    ]
  },
  {
    "kanji": "吸",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "suck",
      "imbibe",
      "inhale",
      "sip"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "す.う"
    ],
    "examples": [
      {
        "word": "吸収",
        "reading": "きゅうしゅう",
        "meaning": "absorption, suction, attraction"
      },
      {
        "word": "呼吸",
        "reading": "こきゅう",
        "meaning": "breath, respiration"
      },
      {
        "word": "吸う",
        "reading": "すう",
        "meaning": "to smoke, to suck"
      }
    ]
  },
  {
    "kanji": "宅",
    "jlpt": 3,
    "strokeCount": 6,
    "meanings": [
      "home",
      "house",
      "residence",
      "our house",
      "my husband"
    ],
    "onyomi": [
      "タク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "宅",
        "reading": "たく",
        "meaning": "house, home, husband"
      },
      {
        "word": "帰宅",
        "reading": "きたく",
        "meaning": "returning home"
      },
      {
        "word": "住宅",
        "reading": "じゅうたく",
        "meaning": "resident, housing"
      },
      {
        "word": "お宅",
        "reading": "おたく",
        "meaning": "(polite) your house"
      }
    ]
  },
  {
    "kanji": "声",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "voice"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "こえ",
      "こわ-"
    ],
    "examples": [
      {
        "word": "声",
        "reading": "こえ",
        "meaning": "voice"
      }
    ]
  },
  {
    "kanji": "形",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "shape",
      "form",
      "style"
    ],
    "onyomi": [
      "ケイ",
      "ギョウ"
    ],
    "kunyomi": [
      "かた",
      "-がた",
      "かたち",
      "なり"
    ],
    "examples": [
      {
        "word": "形",
        "reading": "かたち",
        "meaning": "shape"
      },
      {
        "word": "人形",
        "reading": "にんぎょう",
        "meaning": "doll, figure"
      }
    ]
  },
  {
    "kanji": "助",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "help",
      "rescue",
      "assist"
    ],
    "onyomi": [
      "ジョ"
    ],
    "kunyomi": [
      "たす.ける",
      "たす.かる",
      "す.ける",
      "すけ"
    ],
    "examples": [
      {
        "word": "援助",
        "reading": "えんじょ",
        "meaning": "assistance, aid, support"
      },
      {
        "word": "助手",
        "reading": "じょしゅ",
        "meaning": "helper, helpmeet, assistant, tutor"
      },
      {
        "word": "助ける",
        "reading": "たすける",
        "meaning": "to help, to save, to rescue"
      },
      {
        "word": "救助",
        "reading": "きゅうじょ",
        "meaning": "relief, aid, rescue"
      }
    ]
  },
  {
    "kanji": "君",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "mister",
      "you",
      "ruler",
      "male name suffix"
    ],
    "onyomi": [
      "クン"
    ],
    "kunyomi": [
      "きみ",
      "-ぎみ"
    ],
    "examples": [
      {
        "word": "君",
        "reading": "きみ",
        "meaning": "(informal) You (used by men towards women)"
      }
    ]
  },
  {
    "kanji": "対",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "vis-a-vis",
      "opposite",
      "even",
      "equal",
      "versus",
      "anti-",
      "compare"
    ],
    "onyomi": [
      "タイ",
      "ツイ"
    ],
    "kunyomi": [
      "あいて",
      "こた.える",
      "そろ.い",
      "つれあ.い",
      "なら.ぶ",
      "むか.う"
    ],
    "examples": [
      {
        "word": "対象",
        "reading": "たいしょう",
        "meaning": "target, object (of worship, study, etc), subject (of taxation, etc)"
      },
      {
        "word": "対する",
        "reading": "たいする",
        "meaning": "to face, to confront, to oppose"
      },
      {
        "word": "対",
        "reading": "たい",
        "meaning": "pair, couple, set"
      },
      {
        "word": "絶対",
        "reading": "ぜったい",
        "meaning": "absolute, unconditional, absoluteness"
      }
    ]
  },
  {
    "kanji": "局",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "bureau",
      "board",
      "office",
      "affair",
      "conclusion",
      "court lady",
      "lady-in-waiting",
      "her apartment"
    ],
    "onyomi": [
      "キョク"
    ],
    "kunyomi": [
      "つぼね"
    ],
    "examples": [
      {
        "word": "局",
        "reading": "きょく",
        "meaning": "court lady, lady in waiting"
      },
      {
        "word": "結局",
        "reading": "けっきょく",
        "meaning": "after all, eventually"
      },
      {
        "word": "郵便局",
        "reading": "ゆうびんきょく",
        "meaning": "post office"
      }
    ]
  },
  {
    "kanji": "役",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "duty",
      "war",
      "campaign",
      "drafted labor",
      "office",
      "service",
      "role"
    ],
    "onyomi": [
      "ヤク",
      "エキ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "役",
        "reading": "やく",
        "meaning": "use, service, role, position"
      },
      {
        "word": "役割",
        "reading": "やくわり",
        "meaning": "part, assigning (allotment of) parts, role, duties"
      },
      {
        "word": "役に立つ",
        "reading": "やくにたつ",
        "meaning": "to be helpful"
      }
    ]
  },
  {
    "kanji": "投",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "throw",
      "discard",
      "abandon",
      "launch into",
      "join",
      "invest in",
      "hurl",
      "give up",
      "sell at a loss"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "な.げる",
      "-な.げ"
    ],
    "examples": [
      {
        "word": "投票",
        "reading": "とうひょう",
        "meaning": "voting, poll"
      },
      {
        "word": "投げる",
        "reading": "なげる",
        "meaning": "to throw or cast away"
      }
    ]
  },
  {
    "kanji": "決",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "decide",
      "fix",
      "agree upon",
      "appoint"
    ],
    "onyomi": [
      "ケツ"
    ],
    "kunyomi": [
      "き.める",
      "-ぎ.め",
      "き.まる",
      "さ.く"
    ],
    "examples": [
      {
        "word": "決心",
        "reading": "けっしん",
        "meaning": "determination, resolution"
      },
      {
        "word": "解決",
        "reading": "かいけつ",
        "meaning": "settlement, solution, resolution"
      },
      {
        "word": "決まり",
        "reading": "きまり",
        "meaning": "settlement, conclusion, regulation, rule"
      },
      {
        "word": "決定",
        "reading": "けってい",
        "meaning": "decision, determination"
      }
    ]
  },
  {
    "kanji": "位",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "rank",
      "grade",
      "throne",
      "crown",
      "about",
      "some"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "くらい",
      "ぐらい"
    ],
    "examples": [
      {
        "word": "位置",
        "reading": "いち",
        "meaning": "place, situation, position, location"
      },
      {
        "word": "単位",
        "reading": "たんい",
        "meaning": "unit, denomination, credit (in school)"
      },
      {
        "word": "位",
        "reading": "くらい",
        "meaning": "grade, rank, about"
      },
      {
        "word": "地位",
        "reading": "ちい",
        "meaning": "(social) position, status"
      }
    ]
  },
  {
    "kanji": "初",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "first time",
      "beginning"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "はじ.め",
      "はじ.めて",
      "はつ",
      "はつ-",
      "うい-",
      "-そ.める",
      "-ぞ.め"
    ],
    "examples": [
      {
        "word": "最初",
        "reading": "さいしょ",
        "meaning": "beginning, first"
      },
      {
        "word": "初めて",
        "reading": "はじめて",
        "meaning": "for the first time"
      },
      {
        "word": "初め / 始め",
        "reading": "はじめ",
        "meaning": "beginning"
      }
    ]
  },
  {
    "kanji": "利",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "profit",
      "advantage",
      "benefit"
    ],
    "onyomi": [
      "リ"
    ],
    "kunyomi": [
      "き.く"
    ],
    "examples": [
      {
        "word": "利口",
        "reading": "りこう",
        "meaning": "clever, shrewd, bright, sharp, wise, intelligent"
      },
      {
        "word": "有利",
        "reading": "ゆうり",
        "meaning": "advantageous, better, profitable, lucrative"
      },
      {
        "word": "利益",
        "reading": "りえき",
        "meaning": "profits, gains, (political, economic) interest"
      },
      {
        "word": "権利",
        "reading": "けんり",
        "meaning": "right, privilege"
      }
    ]
  },
  {
    "kanji": "努",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "toil",
      "diligent",
      "as much as possible"
    ],
    "onyomi": [
      "ド"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "examples": [
      {
        "word": "努力",
        "reading": "どりょく",
        "meaning": "great effort, exertion, endeavour, effort"
      }
    ]
  },
  {
    "kanji": "労",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "labor",
      "thank for",
      "reward for",
      "toil",
      "trouble"
    ],
    "onyomi": [
      "ロウ"
    ],
    "kunyomi": [
      "ろう.する",
      "いたわ.る",
      "いた.ずき",
      "ねぎら",
      "つか.れる",
      "ねぎら.う"
    ],
    "examples": [
      {
        "word": "苦労",
        "reading": "くろう",
        "meaning": "troubles, hardships"
      },
      {
        "word": "労働",
        "reading": "ろうどう",
        "meaning": "manual labor, toil, work"
      }
    ]
  },
  {
    "kanji": "良",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "good",
      "pleasing",
      "skilled"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "よ.い",
      "-よ.い",
      "い.い",
      "-い.い"
    ],
    "examples": []
  },
  {
    "kanji": "返",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "return",
      "answer",
      "fade",
      "repay"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "かえ.す",
      "-かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "examples": [
      {
        "word": "繰り返す",
        "reading": "くりかえす",
        "meaning": "to repeat, to do something over again"
      },
      {
        "word": "返事",
        "reading": "へんじ",
        "meaning": "reply"
      },
      {
        "word": "返す",
        "reading": "かえす",
        "meaning": "to return something"
      }
    ]
  },
  {
    "kanji": "完",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "perfect",
      "completion",
      "end"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "完全",
        "reading": "かんぜん",
        "meaning": "perfection, completeness"
      },
      {
        "word": "完成",
        "reading": "かんせい",
        "meaning": "(1) complete, completion, (2) perfection, accomplishment"
      },
      {
        "word": "完了",
        "reading": "かんりょう",
        "meaning": "completion, conclusion"
      }
    ]
  },
  {
    "kanji": "折",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "fold",
      "break",
      "fracture",
      "bend",
      "yield",
      "submit"
    ],
    "onyomi": [
      "セツ",
      "シャク"
    ],
    "kunyomi": [
      "お.る",
      "おり",
      "お.り",
      "-お.り",
      "お.れる"
    ],
    "examples": [
      {
        "word": "骨折",
        "reading": "こっせつ",
        "meaning": "bone fracture"
      },
      {
        "word": "折れる",
        "reading": "おれる",
        "meaning": "to break or be folded"
      },
      {
        "word": "折る",
        "reading": "おる",
        "meaning": "to break or to fold"
      }
    ]
  },
  {
    "kanji": "束",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "bundle",
      "sheaf",
      "ream",
      "tie in bundles",
      "govern",
      "manage",
      "control"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "たば",
      "たば.ねる",
      "つか",
      "つか.ねる"
    ],
    "examples": [
      {
        "word": "束",
        "reading": "たば",
        "meaning": "handbreadth, bundle"
      },
      {
        "word": "約束",
        "reading": "やくそく",
        "meaning": "promise"
      }
    ]
  },
  {
    "kanji": "求",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "request",
      "want",
      "wish for",
      "require",
      "demand"
    ],
    "onyomi": [
      "キュウ",
      "グ"
    ],
    "kunyomi": [
      "もと.める"
    ],
    "examples": [
      {
        "word": "求める",
        "reading": "もとめる",
        "meaning": "to seek, to request, to demand, to want, to wish for, to search for, to pursue (pleasure), to hunt (a job),"
      },
      {
        "word": "請求",
        "reading": "せいきゅう",
        "meaning": "claim, demand, application, request"
      },
      {
        "word": "要求",
        "reading": "ようきゅう",
        "meaning": "request, demand, requisition"
      }
    ]
  },
  {
    "kanji": "告",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "revelation",
      "tell",
      "inform",
      "announce"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "つ.げる"
    ],
    "examples": [
      {
        "word": "報告",
        "reading": "ほうこく",
        "meaning": "report, information"
      },
      {
        "word": "警告",
        "reading": "けいこく",
        "meaning": "warning, advice"
      },
      {
        "word": "広告",
        "reading": "こうこく",
        "meaning": "advertisement"
      }
    ]
  },
  {
    "kanji": "忘",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "forget"
    ],
    "onyomi": [
      "ボウ"
    ],
    "kunyomi": [
      "わす.れる"
    ],
    "examples": [
      {
        "word": "忘れ物",
        "reading": "わすれもの",
        "meaning": "lost article"
      },
      {
        "word": "忘れる",
        "reading": "わすれる",
        "meaning": "to forget"
      }
    ]
  },
  {
    "kanji": "困",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "quandary",
      "become distressed",
      "annoyed"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [
      "こま.る"
    ],
    "examples": [
      {
        "word": "困難",
        "reading": "こんなん",
        "meaning": "difficulty, distress"
      },
      {
        "word": "困る",
        "reading": "こまる",
        "meaning": "to be worried"
      }
    ]
  },
  {
    "kanji": "余",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "too much",
      "myself",
      "surplus",
      "other",
      "remainder"
    ],
    "onyomi": [
      "ヨ"
    ],
    "kunyomi": [
      "あま.る",
      "あま.り",
      "あま.す",
      "あんま.り"
    ],
    "examples": [
      {
        "word": "余り",
        "reading": "あまり",
        "meaning": "not very (used as adverb), not much"
      },
      {
        "word": "余裕",
        "reading": "よゆう",
        "meaning": "surplus, composure, margin, room, time, allowance, scope, rope"
      },
      {
        "word": "余分",
        "reading": "よぶん",
        "meaning": "extra, excess, surplus"
      }
    ]
  },
  {
    "kanji": "判",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "judgement",
      "signature",
      "stamp",
      "seal"
    ],
    "onyomi": [
      "ハン",
      "バン"
    ],
    "kunyomi": [
      "わか.る"
    ],
    "examples": [
      {
        "word": "批判",
        "reading": "ひはん",
        "meaning": "criticism, judgement, comment"
      },
      {
        "word": "裁判",
        "reading": "さいばん",
        "meaning": "trial, judgement"
      },
      {
        "word": "評判",
        "reading": "ひょうばん",
        "meaning": "fame, reputation, popularity, arrant"
      },
      {
        "word": "審判",
        "reading": "しんぱん",
        "meaning": "refereeing, trial, judgement, umpire, referee"
      }
    ]
  },
  {
    "kanji": "状",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "status quo",
      "conditions",
      "circumstances",
      "form",
      "appearance"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "状況",
        "reading": "じょうきょう",
        "meaning": "state of affairs, situation, circumstances"
      },
      {
        "word": "現状",
        "reading": "げんじょう",
        "meaning": "present condition, existing state, status quo"
      },
      {
        "word": "症状",
        "reading": "しょうじょう",
        "meaning": "symptoms, condition"
      },
      {
        "word": "状態",
        "reading": "じょうたい",
        "meaning": "condition, situation, circumstances, state"
      }
    ]
  },
  {
    "kanji": "抜",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "slip out",
      "extract",
      "pull out",
      "pilfer",
      "quote",
      "remove",
      "omit"
    ],
    "onyomi": [
      "バツ",
      "ハツ",
      "ハイ"
    ],
    "kunyomi": [
      "ぬ.く",
      "-ぬ.く",
      "ぬ.き",
      "ぬ.ける",
      "ぬ.かす",
      "ぬ.かる"
    ],
    "examples": [
      {
        "word": "抜く",
        "reading": "ぬく",
        "meaning": "to extract, to omit, to surpass, to draw out, to unplug"
      },
      {
        "word": "抜ける",
        "reading": "ぬける",
        "meaning": "to come out, to fall out, to be omitted"
      }
    ]
  },
  {
    "kanji": "冷",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "cool",
      "cold (beer, person)",
      "chill"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "つめ.たい",
      "ひ.える",
      "ひ.や",
      "ひ.ややか",
      "ひ.やす",
      "ひ.やかす",
      "さ.める",
      "さ.ます"
    ],
    "examples": [
      {
        "word": "冷静",
        "reading": "れいせい",
        "meaning": "calm, composure, coolness, serenity"
      },
      {
        "word": "冷える",
        "reading": "ひえる",
        "meaning": "to grow cold"
      },
      {
        "word": "冷房",
        "reading": "れいぼう",
        "meaning": "air conditioning"
      },
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "meaning": "refrigerator"
      }
    ]
  },
  {
    "kanji": "更",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "grow late",
      "night watch",
      "sit up late",
      "of course",
      "renew",
      "renovate",
      "again",
      "more and more",
      "further"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "さら",
      "さら.に",
      "ふ.ける",
      "ふ.かす"
    ],
    "examples": [
      {
        "word": "更に",
        "reading": "さらに",
        "meaning": "furthermore, again, after all, more and more, moreover"
      },
      {
        "word": "変更",
        "reading": "へんこう",
        "meaning": "change, modification, alteration"
      }
    ]
  },
  {
    "kanji": "似",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "becoming",
      "resemble",
      "counterfeit",
      "imitate",
      "suitable"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "に.る",
      "ひ.る"
    ],
    "examples": [
      {
        "word": "真似",
        "reading": "まね",
        "meaning": "mimicry, imitation, behavior, pretense"
      },
      {
        "word": "似合う",
        "reading": "にあう",
        "meaning": "to suit, to match, to become, to be like"
      },
      {
        "word": "似る",
        "reading": "にる",
        "meaning": "to be similar"
      }
    ]
  },
  {
    "kanji": "迎",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "welcome",
      "meet",
      "greet"
    ],
    "onyomi": [
      "ゲイ"
    ],
    "kunyomi": [
      "むか.える"
    ],
    "examples": [
      {
        "word": "歓迎",
        "reading": "かんげい",
        "meaning": "welcome, reception"
      },
      {
        "word": "迎え",
        "reading": "むかえ",
        "meaning": "meeting, person sent to pick up an arrival"
      },
      {
        "word": "迎える",
        "reading": "むかえる",
        "meaning": "to go out to meet"
      }
    ]
  },
  {
    "kanji": "否",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "negate",
      "no",
      "noes",
      "refuse",
      "decline",
      "deny"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "いな",
      "いや"
    ],
    "examples": [
      {
        "word": "否",
        "reading": "いや",
        "meaning": "no, the noes"
      },
      {
        "word": "否定",
        "reading": "ひてい",
        "meaning": "negation, denial, repudiation"
      }
    ]
  },
  {
    "kanji": "戻",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "re-",
      "return",
      "revert",
      "resume",
      "restore",
      "go backwards"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "もど.す",
      "もど.る"
    ],
    "examples": [
      {
        "word": "戻す",
        "reading": "もどす",
        "meaning": "to restore, to put back, to return"
      },
      {
        "word": "戻る",
        "reading": "もどる",
        "meaning": "to turn back"
      }
    ]
  },
  {
    "kanji": "吹",
    "jlpt": 3,
    "strokeCount": 7,
    "meanings": [
      "blow",
      "breathe",
      "puff",
      "emit",
      "smoke"
    ],
    "onyomi": [
      "スイ"
    ],
    "kunyomi": [
      "ふ.く"
    ],
    "examples": [
      {
        "word": "吹く",
        "reading": "ふく",
        "meaning": "to blow"
      }
    ]
  },
  {
    "kanji": "直",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "straightaway",
      "honesty",
      "frankness",
      "fix",
      "repair"
    ],
    "onyomi": [
      "チョク",
      "ジキ",
      "ジカ"
    ],
    "kunyomi": [
      "ただ.ちに",
      "なお.す",
      "-なお.す",
      "なお.る",
      "なお.き",
      "す.ぐ"
    ],
    "examples": [
      {
        "word": "直",
        "reading": "じき",
        "meaning": "earnestly, immediately, exactly"
      },
      {
        "word": "直ちに",
        "reading": "ただちに",
        "meaning": "at once, immediately, directly, in person"
      },
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "meaning": "direct, immediate, personal, firsthand"
      },
      {
        "word": "直に",
        "reading": "じかに",
        "meaning": "immediately, readily, directly"
      }
    ]
  },
  {
    "kanji": "所",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "place",
      "extent"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "ところ",
      "-ところ",
      "どころ",
      "とこ"
    ],
    "examples": [
      {
        "word": "所為",
        "reading": "せい",
        "meaning": "cause, reason, fault"
      },
      {
        "word": "停留所",
        "reading": "ていりゅうじょ",
        "meaning": "bus or tram stop"
      },
      {
        "word": "住所",
        "reading": "じゅうしょ",
        "meaning": "an address, a residence"
      },
      {
        "word": "近所",
        "reading": "きんじょ",
        "meaning": "neighbourhood"
      }
    ]
  },
  {
    "kanji": "具",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "tool",
      "utensil",
      "means",
      "possess",
      "ingredients",
      "counter for armor, suits, sets of furniture"
    ],
    "onyomi": [
      "グ"
    ],
    "kunyomi": [
      "そな.える",
      "つぶさ.に"
    ],
    "examples": [
      {
        "word": "家具",
        "reading": "かぐ",
        "meaning": "furniture"
      },
      {
        "word": "具体",
        "reading": "ぐたい",
        "meaning": "concrete, tangible, material"
      },
      {
        "word": "道具",
        "reading": "どうぐ",
        "meaning": "tool, means"
      },
      {
        "word": "具合",
        "reading": "ぐあい",
        "meaning": "condition, health"
      }
    ]
  },
  {
    "kanji": "受",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "accept",
      "undergo",
      "answer (phone)",
      "take",
      "get",
      "catch",
      "receive"
    ],
    "onyomi": [
      "ジュ"
    ],
    "kunyomi": [
      "う.ける",
      "-う.け",
      "う.かる"
    ],
    "examples": [
      {
        "word": "受け取る",
        "reading": "うけとる",
        "meaning": "to receive, to get, to accept, to take"
      },
      {
        "word": "受ける",
        "reading": "うける",
        "meaning": "to take a lesson or test"
      },
      {
        "word": "受付",
        "reading": "うけつけ",
        "meaning": "receipt"
      }
    ]
  },
  {
    "kanji": "和",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "harmony",
      "japanese style",
      "peace",
      "soften",
      "japan"
    ],
    "onyomi": [
      "ワ",
      "オ",
      "カ"
    ],
    "kunyomi": [
      "やわ.らぐ",
      "やわ.らげる",
      "なご.む",
      "なご.やか",
      "あ.える"
    ],
    "examples": [
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace, harmony"
      }
    ]
  },
  {
    "kanji": "定",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "determine",
      "fix",
      "establish",
      "decide"
    ],
    "onyomi": [
      "テイ",
      "ジョウ"
    ],
    "kunyomi": [
      "さだ.める",
      "さだ.まる",
      "さだ.か"
    ],
    "examples": [
      {
        "word": "定期",
        "reading": "ていき",
        "meaning": "fixed term"
      },
      {
        "word": "安定",
        "reading": "あんてい",
        "meaning": "stability, equilibrium"
      },
      {
        "word": "勘定",
        "reading": "かんじょう",
        "meaning": "calculation, counting, consideration"
      },
      {
        "word": "否定",
        "reading": "ひてい",
        "meaning": "negation, denial, repudiation"
      }
    ]
  },
  {
    "kanji": "実",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "reality",
      "truth"
    ],
    "onyomi": [
      "ジツ",
      "シツ"
    ],
    "kunyomi": [
      "み",
      "みの.る",
      "まこと",
      "みの",
      "みち.る"
    ],
    "examples": [
      {
        "word": "実験",
        "reading": "じっけん",
        "meaning": "experiment"
      },
      {
        "word": "実は",
        "reading": "じつは",
        "meaning": "as a matter of fact, by the way"
      },
      {
        "word": "実施",
        "reading": "じっし",
        "meaning": "enforcement, enact, put into practice, carry out, operation"
      },
      {
        "word": "確実",
        "reading": "かくじつ",
        "meaning": "certainty, reliability, soundness"
      }
    ]
  },
  {
    "kanji": "泳",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "swim"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "およ.ぐ"
    ],
    "examples": [
      {
        "word": "泳ぎ",
        "reading": "およぎ",
        "meaning": "swimming"
      },
      {
        "word": "水泳",
        "reading": "すいえい",
        "meaning": "swimming"
      },
      {
        "word": "泳ぎ方",
        "reading": "およぎかた",
        "meaning": "way of swimming"
      },
      {
        "word": "泳ぐ",
        "reading": "およぐ",
        "meaning": "to swim"
      }
    ]
  },
  {
    "kanji": "苦",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "suffering",
      "trial",
      "worry",
      "hardship",
      "feel bitter",
      "scowl"
    ],
    "onyomi": [
      "ク"
    ],
    "kunyomi": [
      "くる.しい",
      "-ぐる.しい",
      "くる.しむ",
      "くる.しめる",
      "にが.い",
      "にが.る"
    ],
    "examples": [
      {
        "word": "苦しい",
        "reading": "くるしい",
        "meaning": "painful, difficult"
      },
      {
        "word": "苦労",
        "reading": "くろう",
        "meaning": "troubles, hardships"
      },
      {
        "word": "苦手",
        "reading": "にがて",
        "meaning": "poor (at), weak (in), dislike (of)"
      },
      {
        "word": "苦痛",
        "reading": "くつう",
        "meaning": "pain, agony"
      }
    ]
  },
  {
    "kanji": "表",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "surface",
      "table",
      "chart",
      "diagram"
    ],
    "onyomi": [
      "ヒョウ"
    ],
    "kunyomi": [
      "おもて",
      "-おもて",
      "あらわ.す",
      "あらわ.れる",
      "あら.わす"
    ],
    "examples": [
      {
        "word": "表現",
        "reading": "ひょうげん",
        "meaning": "expression, presentation, representation (math)"
      },
      {
        "word": "発表",
        "reading": "はっぴょう",
        "meaning": "announcement, publication"
      },
      {
        "word": "表情",
        "reading": "ひょうじょう",
        "meaning": "facial expression"
      },
      {
        "word": "表す",
        "reading": "あらわす",
        "meaning": "to express, to show, to reveal"
      }
    ]
  },
  {
    "kanji": "命",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "fate",
      "command",
      "decree",
      "destiny",
      "life",
      "appoint"
    ],
    "onyomi": [
      "メイ",
      "ミョウ"
    ],
    "kunyomi": [
      "いのち"
    ],
    "examples": [
      {
        "word": "生命",
        "reading": "せいめい",
        "meaning": "life, existence"
      },
      {
        "word": "命",
        "reading": "いのち",
        "meaning": "command, decree, life, destiny"
      },
      {
        "word": "命令",
        "reading": "めいれい",
        "meaning": "order, command, decree, directive, (software) instruction"
      },
      {
        "word": "命じる",
        "reading": "めいじる",
        "meaning": "to order, to command, to appoint"
      }
    ]
  },
  {
    "kanji": "放",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "set free",
      "release",
      "fire",
      "shoot",
      "emit",
      "banish",
      "liberate"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "はな.す",
      "-っぱな.し",
      "はな.つ",
      "はな.れる",
      "こ.く",
      "ほう.る"
    ],
    "examples": [
      {
        "word": "放す",
        "reading": "はなす",
        "meaning": "to separate, to set free"
      },
      {
        "word": "放送",
        "reading": "ほうそう・する",
        "meaning": "to broadcast"
      }
    ]
  },
  {
    "kanji": "昔",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "once upon a time",
      "antiquity",
      "old times"
    ],
    "onyomi": [
      "セキ",
      "シャク"
    ],
    "kunyomi": [
      "むかし"
    ],
    "examples": [
      {
        "word": "昔",
        "reading": "むかし",
        "meaning": "olden days, former"
      }
    ]
  },
  {
    "kanji": "育",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "bring up",
      "grow up",
      "raise",
      "rear"
    ],
    "onyomi": [
      "イク"
    ],
    "kunyomi": [
      "そだ.つ",
      "そだ.ち",
      "そだ.てる",
      "はぐく.む"
    ],
    "examples": [
      {
        "word": "体育",
        "reading": "たいいく",
        "meaning": "physical education, gymnastics, athletics"
      },
      {
        "word": "育つ",
        "reading": "そだつ",
        "meaning": "to raise (child), to be brought up, to grow (up)"
      },
      {
        "word": "教育",
        "reading": "きょういく",
        "meaning": "education"
      },
      {
        "word": "育てる",
        "reading": "そだてる",
        "meaning": "to rear, to bring up"
      }
    ]
  },
  {
    "kanji": "例",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "example",
      "custom",
      "usage",
      "precedent"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "たと.える"
    ],
    "examples": [
      {
        "word": "例",
        "reading": "れい",
        "meaning": "instance, example, case"
      },
      {
        "word": "例えば",
        "reading": "たとえば",
        "meaning": "for example"
      }
    ]
  },
  {
    "kanji": "参",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "nonplussed",
      "three (in documents)",
      "going",
      "coming",
      "visiting",
      "visit",
      "be defeated",
      "die",
      "be madly in love",
      "participate",
      "take part in"
    ],
    "onyomi": [
      "サン",
      "シン"
    ],
    "kunyomi": [
      "まい.る",
      "まい-",
      "まじわる",
      "みつ"
    ],
    "examples": [
      {
        "word": "参考",
        "reading": "さんこう",
        "meaning": "reference, consultation"
      },
      {
        "word": "参加",
        "reading": "さんか",
        "meaning": "participation"
      },
      {
        "word": "参る",
        "reading": "まいる",
        "meaning": "(humble) to go, to come"
      }
    ]
  },
  {
    "kanji": "念",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "wish",
      "sense",
      "idea",
      "thought",
      "feeling",
      "desire",
      "attention"
    ],
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "記念",
        "reading": "きねん",
        "meaning": "commemoration, memory"
      },
      {
        "word": "残念",
        "reading": "ざんねん",
        "meaning": "disappointment"
      }
    ]
  },
  {
    "kanji": "性",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "sex",
      "gender",
      "nature"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "さが"
    ],
    "examples": [
      {
        "word": "性",
        "reading": "せい",
        "meaning": "sex, gender"
      },
      {
        "word": "性格",
        "reading": "せいかく",
        "meaning": "character, personality"
      },
      {
        "word": "男性",
        "reading": "だんせい",
        "meaning": "male"
      },
      {
        "word": "女性",
        "reading": "じょせい",
        "meaning": "woman"
      }
    ]
  },
  {
    "kanji": "法",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "method",
      "law",
      "rule",
      "principle",
      "model",
      "system"
    ],
    "onyomi": [
      "ホウ",
      "ハッ",
      "ホッ",
      "フラン"
    ],
    "kunyomi": [
      "のり"
    ],
    "examples": [
      {
        "word": "方法",
        "reading": "ほうほう",
        "meaning": "method, manner, way, means, technique"
      },
      {
        "word": "法",
        "reading": "ほう",
        "meaning": "Act (law: the X Act)"
      },
      {
        "word": "作法",
        "reading": "さほう",
        "meaning": "manners, etiquette, propriety"
      },
      {
        "word": "憲法",
        "reading": "けんぽう",
        "meaning": "constitution"
      }
    ]
  },
  {
    "kanji": "取",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "take",
      "fetch",
      "take up"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "と.る",
      "と.り",
      "と.り-",
      "とり",
      "-ど.り"
    ],
    "examples": [
      {
        "word": "取れる",
        "reading": "とれる",
        "meaning": "to come off, to be taken off, to be removed"
      },
      {
        "word": "取り上げる",
        "reading": "とりあげる",
        "meaning": "to take up, to pick up, to disqualify, to confiscate, to deprive"
      },
      {
        "word": "受け取る",
        "reading": "うけとる",
        "meaning": "to receive, to get, to accept, to take"
      },
      {
        "word": "取り替える",
        "reading": "とりかえる",
        "meaning": "to exchange"
      }
    ]
  },
  {
    "kanji": "幸",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "happiness",
      "blessing",
      "fortune"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "さいわ.い",
      "さち",
      "しあわ.せ"
    ],
    "examples": [
      {
        "word": "幸せ",
        "reading": "しあわせ",
        "meaning": "happiness, good fortune, luck, blessing"
      },
      {
        "word": "幸い",
        "reading": "さいわい",
        "meaning": "happiness, blessedness"
      },
      {
        "word": "不幸",
        "reading": "ふこう",
        "meaning": "unhappiness, sorrow, misfortune, disaster, accident, death"
      },
      {
        "word": "幸運",
        "reading": "こううん",
        "meaning": "good luck, fortune"
      }
    ]
  },
  {
    "kanji": "治",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "reign",
      "be at peace",
      "calm down",
      "subdue",
      "quell",
      "govt",
      "cure",
      "heal",
      "rule",
      "conserve"
    ],
    "onyomi": [
      "ジ",
      "チ"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる",
      "なお.る",
      "なお.す"
    ],
    "examples": [
      {
        "word": "治る",
        "reading": "なおる",
        "meaning": "to be cured, to heal"
      },
      {
        "word": "政治",
        "reading": "せいじ",
        "meaning": "politics, government"
      }
    ]
  },
  {
    "kanji": "果",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "fruit",
      "reward",
      "carry out",
      "achieve",
      "complete",
      "end",
      "finish",
      "succeed"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "は.たす",
      "はた.す",
      "-は.たす",
      "は.てる",
      "-は.てる",
      "は.て"
    ],
    "examples": [
      {
        "word": "結果",
        "reading": "けっか",
        "meaning": "result, consequence"
      },
      {
        "word": "効果",
        "reading": "こうか",
        "meaning": "effect, effectiveness, efficacy, result"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "fruit"
      }
    ]
  },
  {
    "kanji": "非",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "un-",
      "mistake",
      "negative",
      "injustice",
      "non-"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "あら.ず"
    ],
    "examples": [
      {
        "word": "非常",
        "reading": "ひじょう",
        "meaning": "emergency, extraordinary, unusual"
      },
      {
        "word": "是非",
        "reading": "ぜひ",
        "meaning": "certainly, without fail"
      },
      {
        "word": "非常に",
        "reading": "ひじょうに",
        "meaning": "extremely"
      }
    ]
  },
  {
    "kanji": "官",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "bureaucrat",
      "the government",
      "organ"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "警官",
        "reading": "けいかん",
        "meaning": "policeman"
      }
    ]
  },
  {
    "kanji": "易",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "easy",
      "ready to",
      "simple",
      "fortune-telling",
      "divination"
    ],
    "onyomi": [
      "エキ",
      "イ"
    ],
    "kunyomi": [
      "やさ.しい",
      "やす.い"
    ],
    "examples": [
      {
        "word": "容易",
        "reading": "ようい",
        "meaning": "easy, simple, plain"
      },
      {
        "word": "貿易",
        "reading": "ぼうえき",
        "meaning": "trade"
      },
      {
        "word": "易しい",
        "reading": "やさしい",
        "meaning": "easy, simple"
      }
    ]
  },
  {
    "kanji": "若",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "young",
      "if",
      "perhaps",
      "possibly",
      "low number",
      "immature"
    ],
    "onyomi": [
      "ジャク",
      "ニャク",
      "ニャ"
    ],
    "kunyomi": [
      "わか.い",
      "わか-",
      "も.しくわ",
      "も.し",
      "も.しくは",
      "ごと.し"
    ],
    "examples": [
      {
        "word": "若い",
        "reading": "わかい",
        "meaning": "young"
      }
    ]
  },
  {
    "kanji": "妻",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "wife",
      "spouse"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "つま"
    ],
    "examples": [
      {
        "word": "妻",
        "reading": "つま",
        "meaning": "(humble) wife"
      }
    ]
  },
  {
    "kanji": "制",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "system",
      "law",
      "rule"
    ],
    "onyomi": [
      "セイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "制度",
        "reading": "せいど",
        "meaning": "system, institution, organization"
      },
      {
        "word": "制限",
        "reading": "せいげん",
        "meaning": "restriction, restraint, limitation"
      }
    ]
  },
  {
    "kanji": "呼",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "call",
      "call out to",
      "invite"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "よ.ぶ"
    ],
    "examples": [
      {
        "word": "呼吸",
        "reading": "こきゅう",
        "meaning": "breath, respiration"
      },
      {
        "word": "呼ぶ",
        "reading": "よぶ",
        "meaning": "to call out, to invite"
      }
    ]
  },
  {
    "kanji": "供",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "submit",
      "offer",
      "present",
      "serve (meal)",
      "accompany"
    ],
    "onyomi": [
      "キョウ",
      "ク",
      "クウ",
      "グ"
    ],
    "kunyomi": [
      "そな.える",
      "とも",
      "-ども"
    ],
    "examples": [
      {
        "word": "供給",
        "reading": "きょうきゅう",
        "meaning": "supply, provision"
      },
      {
        "word": "子供",
        "reading": "こども",
        "meaning": "child"
      }
    ]
  },
  {
    "kanji": "居",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "reside",
      "to be",
      "exist",
      "live with"
    ],
    "onyomi": [
      "キョ",
      "コ"
    ],
    "kunyomi": [
      "い.る",
      "-い",
      "お.る"
    ],
    "examples": [
      {
        "word": "居間",
        "reading": "いま",
        "meaning": "living room (western style)"
      },
      {
        "word": "芝居",
        "reading": "しばい",
        "meaning": "play, drama"
      },
      {
        "word": "居眠り",
        "reading": "いねむり",
        "meaning": "dozing, nodding off"
      },
      {
        "word": "居る",
        "reading": "いる",
        "meaning": "to be, to have (used for people and animals)"
      }
    ]
  },
  {
    "kanji": "突",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "stab",
      "protruding",
      "thrust",
      "pierce",
      "prick",
      "collision",
      "sudden"
    ],
    "onyomi": [
      "トツ",
      "カ"
    ],
    "kunyomi": [
      "つ.く"
    ],
    "examples": [
      {
        "word": "突然",
        "reading": "とつぜん",
        "meaning": "abruptly, suddenly, unexpectedly, all at once"
      },
      {
        "word": "衝突",
        "reading": "しょうとつ",
        "meaning": "collision, conflict"
      }
    ]
  },
  {
    "kanji": "招",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "beckon",
      "invite",
      "summon",
      "engage"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "まね.く"
    ],
    "examples": [
      {
        "word": "招く",
        "reading": "まねく",
        "meaning": "to invite"
      },
      {
        "word": "招待",
        "reading": "しょうたい・する",
        "meaning": "to invite"
      }
    ]
  },
  {
    "kanji": "杯",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "counter for cupfuls",
      "wine glass",
      "glass",
      "toast"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "さかずき"
    ],
    "examples": []
  },
  {
    "kanji": "怖",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "dreadful",
      "be frightened",
      "fearful"
    ],
    "onyomi": [
      "フ",
      "ホ"
    ],
    "kunyomi": [
      "こわ.い",
      "こわ.がる",
      "お.じる",
      "おそ.れる"
    ],
    "examples": [
      {
        "word": "恐怖",
        "reading": "きょうふ",
        "meaning": "be afraid, dread, dismay, terror"
      },
      {
        "word": "怖い",
        "reading": "こわい",
        "meaning": "frightening"
      }
    ]
  },
  {
    "kanji": "押",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "push",
      "stop",
      "check",
      "subdue",
      "attach",
      "seize",
      "weight",
      "shove",
      "press",
      "seal",
      "do in spite of"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "お.す",
      "お.し-",
      "お.っ-",
      "お.さえる",
      "おさ.える"
    ],
    "examples": [
      {
        "word": "押し入れ",
        "reading": "おしいれ",
        "meaning": "closet"
      },
      {
        "word": "押す",
        "reading": "おす",
        "meaning": "to push, to stamp something"
      }
    ]
  },
  {
    "kanji": "刻",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "engrave",
      "cut fine",
      "chop",
      "hash",
      "mince",
      "time",
      "carving"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "きざ.む",
      "きざ.み"
    ],
    "examples": [
      {
        "word": "深刻",
        "reading": "しんこく",
        "meaning": "serious"
      },
      {
        "word": "時刻",
        "reading": "じこく",
        "meaning": "instant, time, moment"
      },
      {
        "word": "遅刻",
        "reading": "ちこく",
        "meaning": "lateness, late coming"
      }
    ]
  },
  {
    "kanji": "彼",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "he",
      "that",
      "the"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "かれ",
      "かの",
      "か.の"
    ],
    "examples": [
      {
        "word": "彼等",
        "reading": "かれら",
        "meaning": "they (usually male)"
      },
      {
        "word": "彼ら",
        "reading": "かれら",
        "meaning": "they"
      },
      {
        "word": "彼",
        "reading": "かれ",
        "meaning": "he, boyfriend"
      },
      {
        "word": "彼女",
        "reading": "かのじょ",
        "meaning": "she, girlfriend"
      }
    ]
  },
  {
    "kanji": "抱",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "embrace",
      "hug",
      "hold in arms"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "だ.く",
      "いだ.く",
      "かか.える"
    ],
    "examples": [
      {
        "word": "抱える",
        "reading": "かかえる",
        "meaning": "to hold or carry under or in the arms"
      },
      {
        "word": "抱く",
        "reading": "いだく",
        "meaning": "(sl) to embrace, to hug, to harbour, to entertain"
      }
    ]
  },
  {
    "kanji": "到",
    "jlpt": 3,
    "strokeCount": 8,
    "meanings": [
      "arrival",
      "proceed",
      "reach",
      "attain",
      "result in"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "いた.る"
    ],
    "examples": [
      {
        "word": "到着",
        "reading": "とうちゃく",
        "meaning": "arrival"
      }
    ]
  },
  {
    "kanji": "草",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "grass",
      "weeds",
      "herbs",
      "pasture",
      "write",
      "draft"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "くさ",
      "くさ-",
      "-ぐさ"
    ],
    "examples": [
      {
        "word": "草",
        "reading": "くさ",
        "meaning": "grass"
      }
    ]
  },
  {
    "kanji": "活",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "lively",
      "resuscitation",
      "being helped",
      "living"
    ],
    "onyomi": [
      "カツ"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける"
    ],
    "examples": [
      {
        "word": "活動",
        "reading": "かつどう",
        "meaning": "action, activity"
      },
      {
        "word": "活気",
        "reading": "かっき",
        "meaning": "energy, liveliness"
      },
      {
        "word": "活用",
        "reading": "かつよう",
        "meaning": "conjugation, practical use"
      },
      {
        "word": "生活",
        "reading": "せいかつ・する",
        "meaning": "to live"
      }
    ]
  },
  {
    "kanji": "点",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "spot",
      "point",
      "mark",
      "speck",
      "decimal point"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "つ.ける",
      "つ.く",
      "た.てる",
      "さ.す",
      "とぼ.す",
      "とも.す",
      "ぼち"
    ],
    "examples": [
      {
        "word": "欠点",
        "reading": "けってん",
        "meaning": "faults, defect, weakness"
      },
      {
        "word": "要点",
        "reading": "ようてん",
        "meaning": "gist, main point"
      },
      {
        "word": "点",
        "reading": "てん",
        "meaning": "point, dot"
      },
      {
        "word": "交差点",
        "reading": "こうさてん",
        "meaning": "intersection"
      }
    ]
  },
  {
    "kanji": "科",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "department",
      "course",
      "section"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "教科書",
        "reading": "きょうかしょ",
        "meaning": "text book"
      },
      {
        "word": "科目",
        "reading": "かもく",
        "meaning": "(school) subject, curriculum, course"
      },
      {
        "word": "科学",
        "reading": "かがく",
        "meaning": "science"
      }
    ]
  },
  {
    "kanji": "首",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "neck",
      "counter for songs and poems"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "くび"
    ],
    "examples": [
      {
        "word": "首相",
        "reading": "しゅしょう",
        "meaning": "Prime Minister"
      },
      {
        "word": "首都",
        "reading": "しゅと",
        "meaning": "capital city"
      },
      {
        "word": "首",
        "reading": "くび",
        "meaning": "neck"
      }
    ]
  },
  {
    "kanji": "乗",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "ride",
      "power",
      "multiplication",
      "record",
      "counter for vehicles",
      "board",
      "mount",
      "join"
    ],
    "onyomi": [
      "ジョウ",
      "ショウ"
    ],
    "kunyomi": [
      "の.る",
      "-の.り",
      "の.せる"
    ],
    "examples": [
      {
        "word": "乗客",
        "reading": "じょうきゃく",
        "meaning": "passenger"
      },
      {
        "word": "乗せる",
        "reading": "のせる",
        "meaning": "to place on (something), to take on board, to give a ride"
      },
      {
        "word": "乗り換える",
        "reading": "のりかえる",
        "meaning": "to change between buses or trains"
      },
      {
        "word": "乗り物",
        "reading": "のりもの",
        "meaning": "vehicle"
      }
    ]
  },
  {
    "kanji": "客",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "guest",
      "visitor",
      "customer",
      "client"
    ],
    "onyomi": [
      "キャク",
      "カク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "乗客",
        "reading": "じょうきゃく",
        "meaning": "passenger"
      },
      {
        "word": "観客",
        "reading": "かんきゃく",
        "meaning": "audience, spectator(s)"
      },
      {
        "word": "客",
        "reading": "きゃく",
        "meaning": "guest, customer"
      }
    ]
  },
  {
    "kanji": "相",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "inter-",
      "mutual",
      "together",
      "each other",
      "minister of state",
      "councillor",
      "aspect",
      "phase",
      "physiognomy"
    ],
    "onyomi": [
      "ソウ",
      "ショウ"
    ],
    "kunyomi": [
      "あい-"
    ],
    "examples": [
      {
        "word": "相当",
        "reading": "そうとう",
        "meaning": "suitable, fair, tolerable, proper"
      },
      {
        "word": "首相",
        "reading": "しゅしょう",
        "meaning": "Prime Minister"
      },
      {
        "word": "相手",
        "reading": "あいて",
        "meaning": "companion, partner, company"
      },
      {
        "word": "相続",
        "reading": "そうぞく",
        "meaning": "succession, inheritance"
      }
    ]
  },
  {
    "kanji": "美",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "beauty",
      "beautiful"
    ],
    "onyomi": [
      "ビ",
      "ミ"
    ],
    "kunyomi": [
      "うつく.しい"
    ],
    "examples": [
      {
        "word": "美人",
        "reading": "びじん",
        "meaning": "beautiful person (woman)"
      },
      {
        "word": "美しい",
        "reading": "うつくしい",
        "meaning": "beautiful"
      },
      {
        "word": "美術館",
        "reading": "びじゅつかん",
        "meaning": "art gallery"
      }
    ]
  },
  {
    "kanji": "負",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "defeat",
      "negative",
      "-",
      "minus",
      "bear",
      "owe",
      "assume a responsibility"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "ま.ける",
      "ま.かす",
      "お.う"
    ],
    "examples": [
      {
        "word": "負け",
        "reading": "まけ",
        "meaning": "defeat, loss, losing (a game)"
      },
      {
        "word": "負ける",
        "reading": "まける",
        "meaning": "to lose"
      }
    ]
  },
  {
    "kanji": "要",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "need",
      "main point",
      "essence",
      "pivot",
      "key to"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "い.る",
      "かなめ"
    ],
    "examples": [
      {
        "word": "要するに",
        "reading": "ようするに",
        "meaning": "in a word, after all, the point is .., in short .."
      },
      {
        "word": "需要",
        "reading": "じゅよう",
        "meaning": "demand, request"
      },
      {
        "word": "重要",
        "reading": "じゅうよう",
        "meaning": "important, momentous, essential, principal, major"
      },
      {
        "word": "主要",
        "reading": "しゅよう",
        "meaning": "chief, main, principal, major"
      }
    ]
  },
  {
    "kanji": "指",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "finger",
      "point to",
      "indicate",
      "put into",
      "play (chess)",
      "measure (ruler)"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "ゆび",
      "さ.す",
      "-さ.し"
    ],
    "examples": [
      {
        "word": "指す",
        "reading": "さす",
        "meaning": "to point, to put up umbrella, to play"
      },
      {
        "word": "指導",
        "reading": "しどう",
        "meaning": "leadership, guidance, coaching"
      },
      {
        "word": "指輪",
        "reading": "ゆびわ",
        "meaning": "finger ring"
      },
      {
        "word": "指",
        "reading": "ゆび",
        "meaning": "finger"
      }
    ]
  },
  {
    "kanji": "神",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "gods",
      "mind",
      "soul"
    ],
    "onyomi": [
      "シン",
      "ジン"
    ],
    "kunyomi": [
      "かみ",
      "かん-",
      "こう-"
    ],
    "examples": [
      {
        "word": "神経",
        "reading": "しんけい",
        "meaning": "nerve, sensitivity"
      },
      {
        "word": "精神",
        "reading": "せいしん",
        "meaning": "mind, soul, heart, spirit, intention"
      },
      {
        "word": "神",
        "reading": "かみ",
        "meaning": "god"
      },
      {
        "word": "神社",
        "reading": "じんじゃ",
        "meaning": "Shinto shrine"
      }
    ]
  },
  {
    "kanji": "追",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "chase",
      "drive away",
      "follow",
      "pursue",
      "meanwhile"
    ],
    "onyomi": [
      "ツイ"
    ],
    "kunyomi": [
      "お.う"
    ],
    "examples": [
      {
        "word": "追う",
        "reading": "おう",
        "meaning": "to chase, to run after"
      },
      {
        "word": "追い付く",
        "reading": "おいつく",
        "meaning": "to overtake, to catch up (with)"
      }
    ]
  },
  {
    "kanji": "便",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "convenience",
      "facility",
      "excrement",
      "feces",
      "letter",
      "chance"
    ],
    "onyomi": [
      "ベン",
      "ビン"
    ],
    "kunyomi": [
      "たよ.り"
    ],
    "examples": [
      {
        "word": "便",
        "reading": "びん",
        "meaning": "way, means"
      },
      {
        "word": "郵便",
        "reading": "ゆうびん",
        "meaning": "mail, postal service"
      },
      {
        "word": "便り",
        "reading": "たより",
        "meaning": "news, tidings, information, correspondence, letter"
      },
      {
        "word": "不便",
        "reading": "ふべん",
        "meaning": "inconvenience"
      }
    ]
  },
  {
    "kanji": "皆",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "all",
      "everything"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "みな",
      "みんな"
    ],
    "examples": [
      {
        "word": "皆",
        "reading": "みな",
        "meaning": "everybody"
      },
      {
        "word": "皆さん",
        "reading": "みなさん",
        "meaning": "everyone"
      }
    ]
  },
  {
    "kanji": "約",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "promise",
      "approximately",
      "shrink"
    ],
    "onyomi": [
      "ヤク"
    ],
    "kunyomi": [
      "つづ.まる",
      "つづ.める",
      "つづま.やか"
    ],
    "examples": [
      {
        "word": "契約",
        "reading": "けいやく",
        "meaning": "contract, compact, agreement"
      },
      {
        "word": "約",
        "reading": "やく",
        "meaning": "approximately, about, some"
      },
      {
        "word": "節約",
        "reading": "せつやく",
        "meaning": "economising, saving"
      },
      {
        "word": "婚約",
        "reading": "こんやく",
        "meaning": "engagement, betrothal"
      }
    ]
  },
  {
    "kanji": "信",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "faith",
      "truth",
      "fidelity",
      "trust"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "信頼",
        "reading": "しんらい",
        "meaning": "reliance, trust, confidence"
      },
      {
        "word": "信仰",
        "reading": "しんこう",
        "meaning": "(religious) faith, belief, creed"
      },
      {
        "word": "通信",
        "reading": "つうしん",
        "meaning": "correspondence, communication, news, signal"
      },
      {
        "word": "信じる",
        "reading": "しんじる",
        "meaning": "to believe, to place trust in"
      }
    ]
  },
  {
    "kanji": "単",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "simple",
      "one",
      "single",
      "merely"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "ひとえ"
    ],
    "examples": [
      {
        "word": "単に",
        "reading": "たんに",
        "meaning": "simply, merely, only, solely"
      },
      {
        "word": "単なる",
        "reading": "たんなる",
        "meaning": "mere, simple, sheer"
      },
      {
        "word": "単位",
        "reading": "たんい",
        "meaning": "unit, denomination, credit (in school)"
      },
      {
        "word": "単語",
        "reading": "たんご",
        "meaning": "word, vocabulary, (usually) single-character word"
      }
    ]
  },
  {
    "kanji": "変",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "unusual",
      "change",
      "strange"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "か.わる",
      "か.わり",
      "か.える"
    ],
    "examples": [
      {
        "word": "大変",
        "reading": "たいへん",
        "meaning": "awful, dreadful, terrible, very"
      },
      {
        "word": "変更",
        "reading": "へんこう",
        "meaning": "change, modification, alteration"
      },
      {
        "word": "変化",
        "reading": "へんか",
        "meaning": "goblin, ghost, apparition, bugbear"
      },
      {
        "word": "変える",
        "reading": "かえる",
        "meaning": "to change"
      }
    ]
  },
  {
    "kanji": "昨",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "yesterday",
      "previous"
    ],
    "onyomi": [
      "サク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "昨",
        "reading": "さく",
        "meaning": "last (year), yesterday"
      },
      {
        "word": "一昨年",
        "reading": "おととし",
        "meaning": "year before last"
      },
      {
        "word": "一昨日",
        "reading": "おととい",
        "meaning": "day before yesterday"
      },
      {
        "word": "昨夜",
        "reading": "ゆうべ",
        "meaning": "last night"
      }
    ]
  },
  {
    "kanji": "係",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "person in charge",
      "connection",
      "duty",
      "concern oneself"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "かか.る",
      "かかり",
      "-がかり",
      "かか.わる"
    ],
    "examples": [
      {
        "word": "係",
        "reading": "かかり",
        "meaning": "official, duty, person in charge"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "relationship"
      }
    ]
  },
  {
    "kanji": "面",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "mask",
      "face",
      "features",
      "surface"
    ],
    "onyomi": [
      "メン",
      "ベン"
    ],
    "kunyomi": [
      "おも",
      "おもて",
      "つら"
    ],
    "examples": [
      {
        "word": "場面",
        "reading": "ばめん",
        "meaning": "scene, setting (e.g. of novel)"
      },
      {
        "word": "面倒",
        "reading": "めんどう",
        "meaning": "trouble, difficulty, care, attention"
      },
      {
        "word": "面",
        "reading": "めん",
        "meaning": "face, mug, surface, facial features, mask, face guard, side or facet, corner, page"
      },
      {
        "word": "表面",
        "reading": "ひょうめん",
        "meaning": "surface, outside, face, appearance"
      }
    ]
  },
  {
    "kanji": "政",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "politics",
      "government"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "まつりごと",
      "まん"
    ],
    "examples": [
      {
        "word": "政府",
        "reading": "せいふ",
        "meaning": "government, administration"
      },
      {
        "word": "政治",
        "reading": "せいじ",
        "meaning": "politics, government"
      }
    ]
  },
  {
    "kanji": "洗",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "wash",
      "inquire into",
      "probe"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "あら.う"
    ],
    "examples": [
      {
        "word": "お手洗い",
        "reading": "おてあらい",
        "meaning": "bathroom"
      },
      {
        "word": "洗う",
        "reading": "あらう",
        "meaning": "to wash"
      },
      {
        "word": "洗濯",
        "reading": "せんたく",
        "meaning": "washing"
      }
    ]
  },
  {
    "kanji": "飛",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "fly",
      "skip (pages)",
      "scatter"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "と.ぶ",
      "と.ばす",
      "-と.ばす"
    ],
    "examples": [
      {
        "word": "飛行",
        "reading": "ひこう",
        "meaning": "aviation"
      },
      {
        "word": "飛び出す",
        "reading": "とびだす",
        "meaning": "to jump out, to rush out, to fly out"
      },
      {
        "word": "飛ばす",
        "reading": "とばす",
        "meaning": "to skip over, to omit"
      },
      {
        "word": "飛行場",
        "reading": "ひこうじょう",
        "meaning": "airport"
      }
    ]
  },
  {
    "kanji": "限",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "limit",
      "restrict",
      "to best of ability"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "かぎ.る",
      "かぎ.り",
      "-かぎ.り"
    ],
    "examples": [
      {
        "word": "限界",
        "reading": "げんかい",
        "meaning": "limit, bound"
      },
      {
        "word": "制限",
        "reading": "せいげん",
        "meaning": "restriction, restraint, limitation"
      },
      {
        "word": "限る",
        "reading": "かぎる",
        "meaning": "to restrict, to limit, to confine"
      }
    ]
  },
  {
    "kanji": "段",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "grade",
      "steps",
      "stairs"
    ],
    "onyomi": [
      "ダン",
      "タン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "値段",
        "reading": "ねだん",
        "meaning": "price, cost"
      },
      {
        "word": "段",
        "reading": "だん",
        "meaning": "step, stair, flight of steps, grade, rank, level"
      },
      {
        "word": "普段",
        "reading": "ふだん",
        "meaning": "usually, habitually, ordinarily, always"
      },
      {
        "word": "手段",
        "reading": "しゅだん",
        "meaning": "means, way, measure"
      }
    ]
  },
  {
    "kanji": "退",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "retreat",
      "withdraw",
      "retire",
      "resign",
      "repel",
      "expel",
      "reject"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "しりぞ.く",
      "しりぞ.ける",
      "ひ.く",
      "の.く",
      "の.ける",
      "ど.く"
    ],
    "examples": [
      {
        "word": "引退",
        "reading": "いんたい",
        "meaning": "retire"
      },
      {
        "word": "退屈",
        "reading": "たいくつ",
        "meaning": "tedium, boredom"
      },
      {
        "word": "退院",
        "reading": "たいいん・する",
        "meaning": "to leave hospital"
      }
    ]
  },
  {
    "kanji": "迷",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "astray",
      "be perplexed",
      "in doubt",
      "lost",
      "err",
      "illusion"
    ],
    "onyomi": [
      "メイ"
    ],
    "kunyomi": [
      "まよ.う"
    ],
    "examples": [
      {
        "word": "迷子",
        "reading": "まいご",
        "meaning": "lost (stray) child"
      },
      {
        "word": "迷惑",
        "reading": "めいわく",
        "meaning": "trouble, bother, annoyance"
      }
    ]
  },
  {
    "kanji": "怒",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "angry",
      "be offended"
    ],
    "onyomi": [
      "ド",
      "ヌ"
    ],
    "kunyomi": [
      "いか.る",
      "おこ.る"
    ],
    "examples": [
      {
        "word": "怒る",
        "reading": "おこる",
        "meaning": "to get angry, to be angry"
      }
    ]
  },
  {
    "kanji": "背",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "stature",
      "height",
      "back",
      "behind",
      "disobey",
      "defy",
      "go back on",
      "rebel"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "せ",
      "せい",
      "そむ.く",
      "そむ.ける"
    ],
    "examples": [
      {
        "word": "背中",
        "reading": "せなか",
        "meaning": "back of the body"
      },
      {
        "word": "背",
        "reading": "せ",
        "meaning": "height, stature"
      },
      {
        "word": "背広",
        "reading": "せびろ",
        "meaning": "business suit"
      }
    ]
  },
  {
    "kanji": "祖",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "ancestor",
      "pioneer",
      "founder"
    ],
    "onyomi": [
      "ソ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "祖父",
        "reading": "そふ",
        "meaning": "grandfather"
      },
      {
        "word": "祖母",
        "reading": "そぼ",
        "meaning": "grandmother"
      }
    ]
  },
  {
    "kanji": "逃",
    "jlpt": 3,
    "strokeCount": 9,
    "meanings": [
      "escape",
      "flee",
      "shirk",
      "evade",
      "set free"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "に.げる",
      "に.がす",
      "のが.す",
      "のが.れる"
    ],
    "examples": [
      {
        "word": "逃げる",
        "reading": "にげる",
        "meaning": "to escape"
      }
    ]
  },
  {
    "kanji": "記",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "scribe",
      "account",
      "narrative"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "しる.す"
    ],
    "examples": [
      {
        "word": "記念",
        "reading": "きねん",
        "meaning": "commemoration, memory"
      },
      {
        "word": "記入",
        "reading": "きにゅう",
        "meaning": "entry, filling in of forms"
      },
      {
        "word": "記憶",
        "reading": "きおく",
        "meaning": "memory, recollection, remembrance"
      },
      {
        "word": "記事",
        "reading": "きじ",
        "meaning": "article, news story, report, account"
      }
    ]
  },
  {
    "kanji": "馬",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "horse"
    ],
    "onyomi": [
      "バ"
    ],
    "kunyomi": [
      "うま",
      "うま-",
      "ま"
    ],
    "examples": [
      {
        "word": "馬",
        "reading": "うま",
        "meaning": "(1) horse, (2) promoted bishop (shogi)"
      },
      {
        "word": "馬鹿",
        "reading": "ばか",
        "meaning": "fool, idiot, trivial matter, folly"
      }
    ]
  },
  {
    "kanji": "速",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "quick",
      "fast"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "はや.い",
      "はや-",
      "はや.める",
      "すみ.やか"
    ],
    "examples": [
      {
        "word": "急速",
        "reading": "きゅうそく",
        "meaning": "rapid (e.g. progress)"
      },
      {
        "word": "速度",
        "reading": "そくど",
        "meaning": "speed, velocity, rate"
      },
      {
        "word": "高速",
        "reading": "こうそく",
        "meaning": "high speed, high gear"
      },
      {
        "word": "速い",
        "reading": "はやい",
        "meaning": "quick"
      }
    ]
  },
  {
    "kanji": "配",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "distribute",
      "spouse",
      "exile",
      "rationing"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "くば.る"
    ],
    "examples": [
      {
        "word": "配達",
        "reading": "はいたつ",
        "meaning": "delivery, distribution"
      },
      {
        "word": "支配",
        "reading": "しはい",
        "meaning": "rule, control, direction"
      },
      {
        "word": "心配",
        "reading": "しんぱい・する",
        "meaning": "to worry"
      }
    ]
  },
  {
    "kanji": "酒",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "sake",
      "alcohol"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "さけ",
      "さか-"
    ],
    "examples": [
      {
        "word": "酒",
        "reading": "さけ",
        "meaning": "alcohol, sake"
      },
      {
        "word": "お酒",
        "reading": "おさけ",
        "meaning": "alcohol, rice wine"
      }
    ]
  },
  {
    "kanji": "庭",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "courtyard",
      "garden",
      "yard"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "にわ"
    ],
    "examples": [
      {
        "word": "庭",
        "reading": "にわ",
        "meaning": "garden"
      },
      {
        "word": "家庭",
        "reading": "かてい",
        "meaning": "household"
      }
    ]
  },
  {
    "kanji": "息",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "breath",
      "respiration",
      "son",
      "interest (on money)"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "いき"
    ],
    "examples": [
      {
        "word": "息",
        "reading": "いき",
        "meaning": "breath, tone"
      },
      {
        "word": "息子",
        "reading": "むすこ",
        "meaning": "(humble) son"
      }
    ]
  },
  {
    "kanji": "流",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "current",
      "a sink",
      "flow",
      "forfeit"
    ],
    "onyomi": [
      "リュウ",
      "ル"
    ],
    "kunyomi": [
      "なが.れる",
      "なが.れ",
      "なが.す",
      "-なが.す"
    ],
    "examples": [
      {
        "word": "流れる",
        "reading": "ながれる",
        "meaning": "to stream, to flow, to run (ink), to be washed away"
      },
      {
        "word": "流す",
        "reading": "ながす",
        "meaning": "to drain, to float, to shed (blood, tears), to cruise (e.g. taxi)"
      },
      {
        "word": "流行",
        "reading": "りゅうこう",
        "meaning": "fashionable, fad, in vogue, prevailing"
      },
      {
        "word": "流れ",
        "reading": "ながれ",
        "meaning": "stream, current"
      }
    ]
  },
  {
    "kanji": "消",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "extinguish",
      "blow out",
      "turn off",
      "neutralize",
      "cancel"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "き.える",
      "け.す"
    ],
    "examples": [
      {
        "word": "消防",
        "reading": "しょうぼう",
        "meaning": "fire fighting, fire department"
      },
      {
        "word": "消費",
        "reading": "しょうひ",
        "meaning": "consumption, expenditure"
      },
      {
        "word": "消しゴム",
        "reading": "けしゴム",
        "meaning": "eraser"
      },
      {
        "word": "消す",
        "reading": "けす",
        "meaning": "to erase, to turn off power"
      }
    ]
  },
  {
    "kanji": "殺",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "kill",
      "murder",
      "butcher",
      "slice off",
      "split",
      "diminish",
      "reduce",
      "spoil"
    ],
    "onyomi": [
      "サツ",
      "サイ",
      "セツ"
    ],
    "kunyomi": [
      "ころ.す",
      "-ごろ.し",
      "そ.ぐ"
    ],
    "examples": [
      {
        "word": "自殺",
        "reading": "じさつ",
        "meaning": "suicide"
      },
      {
        "word": "殺す",
        "reading": "ころす",
        "meaning": "to kill"
      }
    ]
  },
  {
    "kanji": "残",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "remainder",
      "leftover",
      "balance"
    ],
    "onyomi": [
      "ザン",
      "サン"
    ],
    "kunyomi": [
      "のこ.る",
      "のこ.す",
      "そこな.う",
      "のこ.り"
    ],
    "examples": [
      {
        "word": "残す",
        "reading": "のこす",
        "meaning": "to leave (behind, over), to bequeath, to save, to reserve"
      },
      {
        "word": "残り",
        "reading": "のこり",
        "meaning": "remnant, residue, remaining, left-over"
      },
      {
        "word": "残る",
        "reading": "のこる",
        "meaning": "to remain"
      },
      {
        "word": "残念",
        "reading": "ざんねん",
        "meaning": "disappointment"
      }
    ]
  },
  {
    "kanji": "格",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "status",
      "rank",
      "capacity",
      "character",
      "case (law, grammar)"
    ],
    "onyomi": [
      "カク",
      "コウ",
      "キャク",
      "ゴウ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "合格",
        "reading": "ごうかく",
        "meaning": "success, passing (e.g. exam), eligibility"
      },
      {
        "word": "価格",
        "reading": "かかく",
        "meaning": "price, value, cost"
      },
      {
        "word": "格好",
        "reading": "かっこう",
        "meaning": "shape, form, posture, suitability"
      },
      {
        "word": "性格",
        "reading": "せいかく",
        "meaning": "character, personality"
      }
    ]
  },
  {
    "kanji": "能",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "ability",
      "talent",
      "skill",
      "capacity"
    ],
    "onyomi": [
      "ノウ"
    ],
    "kunyomi": [
      "よ.く"
    ],
    "examples": [
      {
        "word": "才能",
        "reading": "さいのう",
        "meaning": "talent, ability"
      },
      {
        "word": "可能",
        "reading": "かのう",
        "meaning": "possible, practicable, feasible"
      },
      {
        "word": "有能",
        "reading": "ゆうのう",
        "meaning": "able, capable, efficient, skill"
      },
      {
        "word": "知能",
        "reading": "ちのう",
        "meaning": "intelligence, brains"
      }
    ]
  },
  {
    "kanji": "笑",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "laugh"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "わら.う",
      "え.む"
    ],
    "examples": [
      {
        "word": "笑い",
        "reading": "わらい",
        "meaning": "laugh, laughter, smile"
      },
      {
        "word": "笑顔",
        "reading": "えがお",
        "meaning": "smiling face"
      },
      {
        "word": "微笑む",
        "reading": "ほほえむ",
        "meaning": "to smile"
      },
      {
        "word": "笑う",
        "reading": "わらう",
        "meaning": "to laugh, to smile"
      }
    ]
  },
  {
    "kanji": "留",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "detain",
      "fasten",
      "halt",
      "stop"
    ],
    "onyomi": [
      "リュウ",
      "ル"
    ],
    "kunyomi": [
      "と.める",
      "と.まる",
      "とど.める",
      "とど.まる",
      "るうぶる"
    ],
    "examples": [
      {
        "word": "留める",
        "reading": "とめる",
        "meaning": "to fasten, to turn off, to detain"
      },
      {
        "word": "停留所",
        "reading": "ていりゅうじょ",
        "meaning": "bus or tram stop"
      },
      {
        "word": "留学",
        "reading": "りゅうがく",
        "meaning": "studying abroad"
      },
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      }
    ]
  },
  {
    "kanji": "原",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "meadow",
      "original",
      "primitive",
      "field",
      "plain",
      "prairie",
      "tundra",
      "wilderness"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "はら"
    ],
    "examples": [
      {
        "word": "原",
        "reading": "はら",
        "meaning": "field, plain, prairie, tundra, moor, wilderness"
      },
      {
        "word": "原因",
        "reading": "げんいん",
        "meaning": "cause, source"
      }
    ]
  },
  {
    "kanji": "席",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "seat",
      "mat",
      "occasion",
      "place"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "むしろ"
    ],
    "examples": [
      {
        "word": "座席",
        "reading": "ざせき",
        "meaning": "seat"
      },
      {
        "word": "欠席",
        "reading": "けっせき",
        "meaning": "absence, non-attendance"
      },
      {
        "word": "出席",
        "reading": "しゅっせき・する",
        "meaning": "to attend"
      },
      {
        "word": "席",
        "reading": "せき",
        "meaning": "seat"
      }
    ]
  },
  {
    "kanji": "座",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "squat",
      "seat",
      "cushion",
      "gathering",
      "sit"
    ],
    "onyomi": [
      "ザ"
    ],
    "kunyomi": [
      "すわ.る"
    ],
    "examples": [
      {
        "word": "座席",
        "reading": "ざせき",
        "meaning": "seat"
      },
      {
        "word": "座る",
        "reading": "すわる",
        "meaning": "to sit"
      }
    ]
  },
  {
    "kanji": "容",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "contain",
      "form",
      "looks"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "い.れる"
    ],
    "examples": [
      {
        "word": "容易",
        "reading": "ようい",
        "meaning": "easy, simple, plain"
      },
      {
        "word": "内容",
        "reading": "ないよう",
        "meaning": "subject, contents, matter, substance, detail, import"
      }
    ]
  },
  {
    "kanji": "財",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "property",
      "money",
      "wealth",
      "assets"
    ],
    "onyomi": [
      "ザイ",
      "サイ",
      "ゾク"
    ],
    "kunyomi": [
      "たから"
    ],
    "examples": [
      {
        "word": "財産",
        "reading": "ざいさん",
        "meaning": "property, fortune, assets"
      },
      {
        "word": "財布",
        "reading": "さいふ",
        "meaning": "wallet"
      }
    ]
  },
  {
    "kanji": "徒",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "on foot",
      "junior",
      "emptiness",
      "vanity",
      "futility",
      "uselessness",
      "ephemeral thing",
      "gang",
      "set",
      "party",
      "people"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "いたずら",
      "あだ"
    ],
    "examples": [
      {
        "word": "生徒",
        "reading": "せいと",
        "meaning": "pupil"
      }
    ]
  },
  {
    "kanji": "連",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "take along",
      "lead",
      "join",
      "connect",
      "party",
      "gang",
      "clique"
    ],
    "onyomi": [
      "レン"
    ],
    "kunyomi": [
      "つら.なる",
      "つら.ねる",
      "つ.れる",
      "-づ.れ"
    ],
    "examples": [
      {
        "word": "連れ",
        "reading": "つれ",
        "meaning": "companion, company"
      },
      {
        "word": "連続",
        "reading": "れんぞく",
        "meaning": "serial, consecutive, continuity, continuing"
      },
      {
        "word": "関連",
        "reading": "かんれん",
        "meaning": "relation, connection, relevance"
      },
      {
        "word": "連想",
        "reading": "れんそう",
        "meaning": "association (of ideas), suggestion"
      }
    ]
  },
  {
    "kanji": "害",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "harm",
      "injury"
    ],
    "onyomi": [
      "ガイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "障害",
        "reading": "しょうがい",
        "meaning": "obstacle, impediment (fault), damage"
      },
      {
        "word": "損害",
        "reading": "そんがい",
        "meaning": "damage, injury, loss"
      },
      {
        "word": "害",
        "reading": "がい",
        "meaning": "injury, harm, evil influence, damage"
      },
      {
        "word": "被害",
        "reading": "ひがい",
        "meaning": "damage"
      }
    ]
  },
  {
    "kanji": "倒",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "overthrow",
      "fall",
      "collapse",
      "drop",
      "break down"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "たお.れる",
      "-だお.れ",
      "たお.す",
      "さかさま",
      "さかさ",
      "さかしま"
    ],
    "examples": [
      {
        "word": "面倒",
        "reading": "めんどう",
        "meaning": "trouble, difficulty, care, attention"
      },
      {
        "word": "倒す",
        "reading": "たおす",
        "meaning": "to throw down, to beat, to bring down, to blow down"
      },
      {
        "word": "倒れる",
        "reading": "たおれる",
        "meaning": "to break down"
      }
    ]
  },
  {
    "kanji": "値",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "price",
      "cost",
      "value"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "ね",
      "あたい"
    ],
    "examples": [
      {
        "word": "値段",
        "reading": "ねだん",
        "meaning": "price, cost"
      },
      {
        "word": "値",
        "reading": "ね",
        "meaning": "value, price, cost"
      },
      {
        "word": "価値",
        "reading": "かち",
        "meaning": "value, worth, merit"
      }
    ]
  },
  {
    "kanji": "師",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "expert",
      "teacher",
      "master",
      "model",
      "exemplar",
      "army (incl. counter)",
      "war"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "いくさ"
    ],
    "examples": [
      {
        "word": "教師",
        "reading": "きょうし",
        "meaning": "teacher (classroom)"
      },
      {
        "word": "医師",
        "reading": "いし",
        "meaning": "doctor, physician"
      },
      {
        "word": "技師",
        "reading": "ぎし",
        "meaning": "engineer, technician"
      }
    ]
  },
  {
    "kanji": "差",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "distinction",
      "difference",
      "variation",
      "discrepancy",
      "margin",
      "balance"
    ],
    "onyomi": [
      "サ"
    ],
    "kunyomi": [
      "さ.す",
      "さ.し"
    ],
    "examples": [
      {
        "word": "差",
        "reading": "さ",
        "meaning": "difference, variation"
      },
      {
        "word": "差別",
        "reading": "さべつ",
        "meaning": "discrimination, distinction, differentiation"
      },
      {
        "word": "差し上げる",
        "reading": "さしあげる",
        "meaning": "(polite) to give"
      },
      {
        "word": "差す",
        "reading": "さす",
        "meaning": "to stretch out hands, to raise an umbrella"
      }
    ]
  },
  {
    "kanji": "候",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "climate",
      "season",
      "weather",
      "wait for",
      "expect"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "そうろう"
    ],
    "examples": [
      {
        "word": "気候",
        "reading": "きこう",
        "meaning": "climate"
      },
      {
        "word": "天候",
        "reading": "てんこう",
        "meaning": "weather"
      },
      {
        "word": "候補",
        "reading": "こうほ",
        "meaning": "candidacy"
      }
    ]
  },
  {
    "kanji": "捕",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "catch",
      "capture"
    ],
    "onyomi": [
      "ホ"
    ],
    "kunyomi": [
      "と.らえる",
      "と.らわれる",
      "と.る",
      "とら.える",
      "とら.われる",
      "つか.まえる",
      "つか.まる"
    ],
    "examples": [
      {
        "word": "逮捕",
        "reading": "たいほ",
        "meaning": "arrest, apprehension, capture"
      },
      {
        "word": "捕まる",
        "reading": "つかまる",
        "meaning": "to be caught, to be arrested"
      },
      {
        "word": "捕まえる",
        "reading": "つかまえる",
        "meaning": "to seize"
      }
    ]
  },
  {
    "kanji": "眠",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "sleep",
      "die",
      "sleepy"
    ],
    "onyomi": [
      "ミン"
    ],
    "kunyomi": [
      "ねむ.る",
      "ねむ.い"
    ],
    "examples": [
      {
        "word": "居眠り",
        "reading": "いねむり",
        "meaning": "dozing, nodding off"
      },
      {
        "word": "睡眠",
        "reading": "すいみん",
        "meaning": "sleep"
      },
      {
        "word": "眠る",
        "reading": "ねむる",
        "meaning": "to sleep"
      },
      {
        "word": "眠い",
        "reading": "ねむい",
        "meaning": "sleepy"
      }
    ]
  },
  {
    "kanji": "途",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "route",
      "way",
      "road"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "みち"
    ],
    "examples": [
      {
        "word": "途端",
        "reading": "とたん",
        "meaning": "just (now, at the moment, etc.)"
      },
      {
        "word": "途中",
        "reading": "とちゅう",
        "meaning": "on the way"
      }
    ]
  },
  {
    "kanji": "娘",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "daughter",
      "girl"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [
      "むすめ",
      "こ"
    ],
    "examples": [
      {
        "word": "娘",
        "reading": "むすめ",
        "meaning": "(humble) daughter"
      }
    ]
  },
  {
    "kanji": "恐",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "fear",
      "dread",
      "awe"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "おそ.れる",
      "おそ.る",
      "おそ.ろしい",
      "こわ.い",
      "こわ.がる"
    ],
    "examples": [
      {
        "word": "恐ろしい",
        "reading": "おそろしい",
        "meaning": "terrible, dreadful"
      },
      {
        "word": "恐れる",
        "reading": "おそれる",
        "meaning": "to fear, to be afraid of"
      },
      {
        "word": "恐怖",
        "reading": "きょうふ",
        "meaning": "be afraid, dread, dismay, terror"
      }
    ]
  },
  {
    "kanji": "浮",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "floating",
      "float",
      "rise to surface"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "う.く",
      "う.かれる",
      "う.かぶ",
      "む",
      "う.かべる"
    ],
    "examples": []
  },
  {
    "kanji": "除",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "exclude",
      "division (x/3)",
      "remove",
      "abolish",
      "cancel",
      "except"
    ],
    "onyomi": [
      "ジョ",
      "ジ"
    ],
    "kunyomi": [
      "のぞ.く",
      "-よ.け"
    ],
    "examples": [
      {
        "word": "除く",
        "reading": "のぞく",
        "meaning": "to remove, to exclude, to except"
      },
      {
        "word": "掃除",
        "reading": "そうじする",
        "meaning": "to clean, to sweep"
      }
    ]
  },
  {
    "kanji": "降",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "descend",
      "precipitate",
      "fall",
      "surrender"
    ],
    "onyomi": [
      "コウ",
      "ゴ"
    ],
    "kunyomi": [
      "お.りる",
      "お.ろす",
      "ふ.る",
      "ふ.り",
      "くだ.る",
      "くだ.す"
    ],
    "examples": [
      {
        "word": "降ろす",
        "reading": "おろす",
        "meaning": "to take down, to launch, to drop"
      },
      {
        "word": "降り出す",
        "reading": "ふりだす",
        "meaning": "to start to rain"
      },
      {
        "word": "降る",
        "reading": "ふる",
        "meaning": "to fall, e.g. rain or snow"
      },
      {
        "word": "降りる",
        "reading": "おりる",
        "meaning": "to get off, to descend"
      }
    ]
  },
  {
    "kanji": "破",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "rend",
      "rip",
      "tear",
      "break",
      "destroy",
      "defeat",
      "frustrate"
    ],
    "onyomi": [
      "ハ"
    ],
    "kunyomi": [
      "やぶ.る",
      "やぶ.れる",
      "わ.れる"
    ],
    "examples": [
      {
        "word": "破産",
        "reading": "はさん",
        "meaning": "(personal) bankruptcy"
      },
      {
        "word": "破る",
        "reading": "やぶる",
        "meaning": "to tear, to violate, to defeat, to smash, to destroy"
      }
    ]
  },
  {
    "kanji": "恥",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "shame",
      "dishonor"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "は.じる",
      "はじ",
      "は.じらう",
      "は.ずかしい"
    ],
    "examples": [
      {
        "word": "恥ずかしい",
        "reading": "はずかしい",
        "meaning": "embarrassed"
      }
    ]
  },
  {
    "kanji": "疲",
    "jlpt": 3,
    "strokeCount": 10,
    "meanings": [
      "exhausted",
      "tire",
      "weary"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "つか.れる",
      "-づか.れ",
      "つか.らす"
    ],
    "examples": [
      {
        "word": "疲れ",
        "reading": "つかれ",
        "meaning": "tiredness, fatigue"
      },
      {
        "word": "疲れる",
        "reading": "つかれる",
        "meaning": "to get tired"
      }
    ]
  },
  {
    "kanji": "組",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "association",
      "braid",
      "plait",
      "construct",
      "assemble",
      "unite",
      "cooperate",
      "grapple"
    ],
    "onyomi": [
      "ソ"
    ],
    "kunyomi": [
      "く.む",
      "くみ",
      "-ぐみ"
    ],
    "examples": [
      {
        "word": "組",
        "reading": "くみ",
        "meaning": "class, group, team, set"
      },
      {
        "word": "組合",
        "reading": "くみあい",
        "meaning": "association, union"
      },
      {
        "word": "組む",
        "reading": "くむ",
        "meaning": "to put together"
      },
      {
        "word": "組織",
        "reading": "そしき",
        "meaning": "(1) organization, (2) structure, construction, (3) tissue, (4) system"
      }
    ]
  },
  {
    "kanji": "船",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "ship",
      "boat"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "ふね",
      "ふな-"
    ],
    "examples": [
      {
        "word": "船",
        "reading": "ふね",
        "meaning": "ship, boat, watercraft, shipping, vessel, steamship"
      }
    ]
  },
  {
    "kanji": "雪",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "snow"
    ],
    "onyomi": [
      "セツ"
    ],
    "kunyomi": [
      "ゆき"
    ],
    "examples": [
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "snow"
      }
    ]
  },
  {
    "kanji": "部",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "section",
      "bureau",
      "dept",
      "class",
      "copy",
      "part",
      "portion",
      "counter for copies of a newspaper or magazine"
    ],
    "onyomi": [
      "ブ"
    ],
    "kunyomi": [
      "-べ"
    ],
    "examples": [
      {
        "word": "部分",
        "reading": "ぶぶん",
        "meaning": "portion, section, part"
      },
      {
        "word": "大部分",
        "reading": "だいぶぶん",
        "meaning": "most part, greater part, majority"
      },
      {
        "word": "部長",
        "reading": "ぶちょう",
        "meaning": "head of a section"
      },
      {
        "word": "部屋",
        "reading": "へや",
        "meaning": "room"
      }
    ]
  },
  {
    "kanji": "進",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "advance",
      "proceed",
      "progress",
      "promote"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "すす.む",
      "すす.める"
    ],
    "examples": [
      {
        "word": "進歩",
        "reading": "しんぽ",
        "meaning": "progress, development"
      },
      {
        "word": "前進",
        "reading": "ぜんしん",
        "meaning": "advance, drive, progress"
      },
      {
        "word": "進める",
        "reading": "すすめる",
        "meaning": "to advance, to promote, to hasten"
      },
      {
        "word": "進学",
        "reading": "しんがく",
        "meaning": "going on to university"
      }
    ]
  },
  {
    "kanji": "都",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "metropolis",
      "capital",
      "all",
      "everything"
    ],
    "onyomi": [
      "ト",
      "ツ"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "examples": [
      {
        "word": "都会",
        "reading": "とかい",
        "meaning": "city"
      },
      {
        "word": "首都",
        "reading": "しゅと",
        "meaning": "capital city"
      },
      {
        "word": "都市",
        "reading": "とし",
        "meaning": "town, city, municipal, urban"
      },
      {
        "word": "都合",
        "reading": "つごう",
        "meaning": "circumstances, convenience"
      }
    ]
  },
  {
    "kanji": "商",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "make a deal",
      "selling",
      "dealing in",
      "merchant"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "あきな.う"
    ],
    "examples": [
      {
        "word": "商品",
        "reading": "しょうひん",
        "meaning": "commodity, article of commerce, goods, stock, merchandise"
      },
      {
        "word": "商売",
        "reading": "しょうばい",
        "meaning": "trade, business, commerce, transaction, occupation"
      },
      {
        "word": "商人",
        "reading": "しょうにん",
        "meaning": "trader, shopkeeper, merchant"
      }
    ]
  },
  {
    "kanji": "深",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "deep",
      "heighten",
      "intensify",
      "strengthen"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ふか.い",
      "-ぶか.い",
      "ふか.まる",
      "ふか.める",
      "み-"
    ],
    "examples": [
      {
        "word": "深刻",
        "reading": "しんこく",
        "meaning": "serious"
      },
      {
        "word": "深い",
        "reading": "ふかい",
        "meaning": "deep"
      }
    ]
  },
  {
    "kanji": "球",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "ball",
      "sphere"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "たま"
    ],
    "examples": [
      {
        "word": "地球",
        "reading": "ちきゅう",
        "meaning": "the earth"
      },
      {
        "word": "球",
        "reading": "きゅう",
        "meaning": "globe, sphere, ball"
      }
    ]
  },
  {
    "kanji": "宿",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "inn",
      "lodging",
      "relay station",
      "dwell",
      "lodge",
      "be pregnant",
      "home",
      "dwelling"
    ],
    "onyomi": [
      "シュク"
    ],
    "kunyomi": [
      "やど",
      "やど.る",
      "やど.す"
    ],
    "examples": [
      {
        "word": "宿",
        "reading": "やど",
        "meaning": "inn, lodging"
      },
      {
        "word": "宿泊",
        "reading": "しゅくはく",
        "meaning": "lodging"
      },
      {
        "word": "下宿",
        "reading": "げしゅく",
        "meaning": "lodging"
      },
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "meaning": "homework"
      }
    ]
  },
  {
    "kanji": "情",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "feelings",
      "emotion",
      "passion",
      "sympathy",
      "circumstances",
      "facts"
    ],
    "onyomi": [
      "ジョウ",
      "セイ"
    ],
    "kunyomi": [
      "なさ.け"
    ],
    "examples": [
      {
        "word": "事情",
        "reading": "じじょう",
        "meaning": "circumstances, consideration, conditions, situation, reasons"
      },
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information, (military) intelligence"
      },
      {
        "word": "愛情",
        "reading": "あいじょう",
        "meaning": "love, affection"
      },
      {
        "word": "表情",
        "reading": "ひょうじょう",
        "meaning": "facial expression"
      }
    ]
  },
  {
    "kanji": "望",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "ambition",
      "full moon",
      "hope",
      "desire",
      "aspire to",
      "expect"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "のぞ.む",
      "もち"
    ],
    "examples": [
      {
        "word": "望み",
        "reading": "のぞみ",
        "meaning": "wish, desire, (a) hope"
      },
      {
        "word": "望む",
        "reading": "のぞむ",
        "meaning": "to desire, to wish for, to see, to command (a view of)"
      },
      {
        "word": "希望",
        "reading": "きぼう",
        "meaning": "hope, wish, aspiration"
      },
      {
        "word": "失望",
        "reading": "しつぼう",
        "meaning": "disappointment, despair"
      }
    ]
  },
  {
    "kanji": "術",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "art",
      "technique",
      "skill",
      "means",
      "trick",
      "resources",
      "magic"
    ],
    "onyomi": [
      "ジュツ"
    ],
    "kunyomi": [
      "すべ"
    ],
    "examples": [
      {
        "word": "芸術",
        "reading": "げいじゅつ",
        "meaning": "(fine) art, the arts"
      },
      {
        "word": "手術",
        "reading": "しゅじゅつ",
        "meaning": "surgical operation"
      },
      {
        "word": "技術",
        "reading": "ぎじゅつ",
        "meaning": "art, technology, skill"
      },
      {
        "word": "美術館",
        "reading": "びじゅつかん",
        "meaning": "art gallery"
      }
    ]
  },
  {
    "kanji": "猫",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "cat"
    ],
    "onyomi": [
      "ビョウ"
    ],
    "kunyomi": [
      "ねこ"
    ],
    "examples": [
      {
        "word": "猫",
        "reading": "ねこ",
        "meaning": "cat"
      }
    ]
  },
  {
    "kanji": "険",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "precipitous",
      "inaccessible place",
      "impregnable position",
      "steep place",
      "sharp eyes"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "けわ.しい"
    ],
    "examples": [
      {
        "word": "冒険",
        "reading": "ぼうけん",
        "meaning": "risk, venture, adventure"
      },
      {
        "word": "危険",
        "reading": "きけん",
        "meaning": "danger"
      }
    ]
  },
  {
    "kanji": "側",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "side",
      "lean",
      "oppose",
      "regret"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "かわ",
      "がわ",
      "そば"
    ],
    "examples": [
      {
        "word": "側",
        "reading": "そば",
        "meaning": "side, edge, third person"
      }
    ]
  },
  {
    "kanji": "敗",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "failure",
      "defeat",
      "reversal"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "やぶ.れる"
    ],
    "examples": [
      {
        "word": "失敗",
        "reading": "しっぱい",
        "meaning": "failure, mistake"
      }
    ]
  },
  {
    "kanji": "常",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "usual",
      "ordinary",
      "normal",
      "common",
      "regular",
      "continually",
      "always",
      "long-lasting"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [
      "つね",
      "とこ-"
    ],
    "examples": [
      {
        "word": "常に",
        "reading": "つねに",
        "meaning": "always, constantly"
      },
      {
        "word": "非常",
        "reading": "ひじょう",
        "meaning": "emergency, extraordinary, unusual"
      },
      {
        "word": "常識",
        "reading": "じょうしき",
        "meaning": "common sense"
      },
      {
        "word": "日常",
        "reading": "にちじょう",
        "meaning": "ordinary, regular, everyday, usual"
      }
    ]
  },
  {
    "kanji": "許",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "permit",
      "approve"
    ],
    "onyomi": [
      "キョ"
    ],
    "kunyomi": [
      "ゆる.す",
      "もと"
    ],
    "examples": [
      {
        "word": "許す",
        "reading": "ゆるす",
        "meaning": "to permit, to allow, to approve"
      },
      {
        "word": "免許",
        "reading": "めんきょ",
        "meaning": "license, permit, licence, certificate"
      },
      {
        "word": "許可",
        "reading": "きょか",
        "meaning": "permission, approval"
      }
    ]
  },
  {
    "kanji": "得",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "gain",
      "get",
      "find",
      "earn",
      "acquire",
      "can",
      "may",
      "able to",
      "profit",
      "advantage",
      "benefit"
    ],
    "onyomi": [
      "トク"
    ],
    "kunyomi": [
      "え.る",
      "う.る"
    ],
    "examples": [
      {
        "word": "納得",
        "reading": "なっとく",
        "meaning": "consent, assent, understanding"
      },
      {
        "word": "得る",
        "reading": "える",
        "meaning": "to get, to gain, to win"
      },
      {
        "word": "得意",
        "reading": "とくい",
        "meaning": "pride, triumph, prosperity"
      }
    ]
  },
  {
    "kanji": "産",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "products",
      "bear",
      "give birth",
      "yield",
      "childbirth",
      "native",
      "property"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "う.む",
      "う.まれる",
      "うぶ-",
      "む.す"
    ],
    "examples": [
      {
        "word": "破産",
        "reading": "はさん",
        "meaning": "(personal) bankruptcy"
      },
      {
        "word": "土産",
        "reading": "みやげ",
        "meaning": "present, souvenir"
      },
      {
        "word": "財産",
        "reading": "ざいさん",
        "meaning": "property, fortune, assets"
      },
      {
        "word": "生産",
        "reading": "せいさん・する",
        "meaning": "to produce"
      }
    ]
  },
  {
    "kanji": "経",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "sutra",
      "longitude",
      "pass thru",
      "expire",
      "warp"
    ],
    "onyomi": [
      "ケイ",
      "キョウ",
      "キン"
    ],
    "kunyomi": [
      "へ.る",
      "た.つ",
      "たていと",
      "はか.る",
      "のり"
    ],
    "examples": [
      {
        "word": "経由",
        "reading": "けいゆ",
        "meaning": "go by the way, via"
      },
      {
        "word": "神経",
        "reading": "しんけい",
        "meaning": "nerve, sensitivity"
      },
      {
        "word": "経つ",
        "reading": "たつ",
        "meaning": "to pass, to lapse"
      },
      {
        "word": "経営",
        "reading": "けいえい",
        "meaning": "management, administration"
      }
    ]
  },
  {
    "kanji": "済",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "settle (debt, etc.)",
      "relieve (burden)",
      "finish",
      "come to an end",
      "excusable",
      "need not"
    ],
    "onyomi": [
      "サイ",
      "セイ"
    ],
    "kunyomi": [
      "す.む",
      "-ず.み",
      "-ずみ",
      "す.まない",
      "す.ます",
      "-す.ます",
      "すく.う",
      "な.す",
      "わたし",
      "わた.る"
    ],
    "examples": [
      {
        "word": "済ませる",
        "reading": "すませる",
        "meaning": "to be finished"
      },
      {
        "word": "済む",
        "reading": "すむ",
        "meaning": "to finish"
      },
      {
        "word": "経済",
        "reading": "けいざい",
        "meaning": "finance, economy"
      }
    ]
  },
  {
    "kanji": "務",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "task",
      "duties"
    ],
    "onyomi": [
      "ム"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "examples": [
      {
        "word": "務め",
        "reading": "つとめ",
        "meaning": "(1) service, duty, (2) Buddhist religious services"
      },
      {
        "word": "事務",
        "reading": "じむ",
        "meaning": "business, office work"
      },
      {
        "word": "義務",
        "reading": "ぎむ",
        "meaning": "duty, obligation, responsibility"
      },
      {
        "word": "公務員",
        "reading": "こうむいん",
        "meaning": "government worker"
      }
    ]
  },
  {
    "kanji": "断",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "severance",
      "decline",
      "refuse",
      "apologize",
      "warn",
      "dismiss",
      "prohibit",
      "decision",
      "judgement",
      "cutting"
    ],
    "onyomi": [
      "ダン"
    ],
    "kunyomi": [
      "た.つ",
      "ことわ.る",
      "さだ.める"
    ],
    "examples": [
      {
        "word": "断る",
        "reading": "ことわる",
        "meaning": "to refuse, to decline, to dismiss"
      },
      {
        "word": "横断",
        "reading": "おうだん",
        "meaning": "crossing"
      },
      {
        "word": "判断",
        "reading": "はんだん",
        "meaning": "judgement, decision"
      }
    ]
  },
  {
    "kanji": "責",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "blame",
      "condemn",
      "censure"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "せ.める"
    ],
    "examples": [
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "duty, responsibility"
      },
      {
        "word": "責める",
        "reading": "せめる",
        "meaning": "to condemn, to blame, to criticize"
      }
    ]
  },
  {
    "kanji": "規",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "standard",
      "measure"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "規則",
        "reading": "きそく",
        "meaning": "regulations"
      }
    ]
  },
  {
    "kanji": "現",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "present",
      "existing",
      "actual"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "あらわ.れる",
      "あらわ.す",
      "うつつ",
      "うつ.つ"
    ],
    "examples": [
      {
        "word": "表現",
        "reading": "ひょうげん",
        "meaning": "expression, presentation, representation (math)"
      },
      {
        "word": "現れ",
        "reading": "あらわれ",
        "meaning": "embodiment, materialization"
      },
      {
        "word": "実現",
        "reading": "じつげん",
        "meaning": "implementation, materialization, realization"
      },
      {
        "word": "現代",
        "reading": "げんだい",
        "meaning": "nowadays, modern times, present-day"
      }
    ]
  },
  {
    "kanji": "掛",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "hang",
      "suspend",
      "depend",
      "arrive at",
      "tax",
      "pour"
    ],
    "onyomi": [
      "カイ",
      "ケイ"
    ],
    "kunyomi": [
      "か.ける",
      "-か.ける",
      "か.け",
      "-か.け",
      "-が.け",
      "か.かる",
      "-か.かる",
      "-が.かる",
      "か.かり",
      "-が.かり",
      "かかり",
      "-がかり"
    ],
    "examples": [
      {
        "word": "お目に掛かる",
        "reading": "おめにかかる",
        "meaning": ""
      },
      {
        "word": "掛かる",
        "reading": "かかる",
        "meaning": "to take (e.g. time, money, etc), to hang"
      },
      {
        "word": "掛ける",
        "reading": "かける",
        "meaning": "to hang something"
      }
    ]
  },
  {
    "kanji": "訪",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "call on",
      "visit",
      "look up",
      "offer sympathy"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "おとず.れる",
      "たず.ねる",
      "と.う"
    ],
    "examples": [
      {
        "word": "訪問",
        "reading": "ほうもん",
        "meaning": "call, visit"
      },
      {
        "word": "訪ねる",
        "reading": "たずねる",
        "meaning": "to visit"
      }
    ]
  },
  {
    "kanji": "婦",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "lady",
      "woman",
      "wife",
      "bride"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "よめ"
    ],
    "examples": [
      {
        "word": "夫婦",
        "reading": "ふうふ",
        "meaning": "married couple, husband and wife"
      },
      {
        "word": "主婦",
        "reading": "しゅふ",
        "meaning": "housewife, mistress"
      },
      {
        "word": "婦人",
        "reading": "ふじん",
        "meaning": "woman, female"
      },
      {
        "word": "看護婦",
        "reading": "かんごふ",
        "meaning": "female nurse"
      }
    ]
  },
  {
    "kanji": "寄",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "draw near",
      "stop in",
      "bring near",
      "gather",
      "collect",
      "send",
      "forward"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "よ.る",
      "-よ.り",
      "よ.せる"
    ],
    "examples": [
      {
        "word": "寄付",
        "reading": "きふ",
        "meaning": "contribution, donation"
      },
      {
        "word": "年寄",
        "reading": "としより",
        "meaning": "old people, the aged"
      },
      {
        "word": "寄る",
        "reading": "よる",
        "meaning": "to visit"
      }
    ]
  },
  {
    "kanji": "婚",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "marriage"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "婚約",
        "reading": "こんやく",
        "meaning": "engagement, betrothal"
      },
      {
        "word": "離婚",
        "reading": "りこん",
        "meaning": "divorce"
      },
      {
        "word": "結婚",
        "reading": "けっこん",
        "meaning": "marriage"
      }
    ]
  },
  {
    "kanji": "貧",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "poverty",
      "poor"
    ],
    "onyomi": [
      "ヒン",
      "ビン"
    ],
    "kunyomi": [
      "まず.しい"
    ],
    "examples": [
      {
        "word": "貧しい",
        "reading": "まずしい",
        "meaning": "poor, needy"
      }
    ]
  },
  {
    "kanji": "盗",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "steal",
      "rob",
      "pilfer"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ぬす.む",
      "ぬす.み"
    ],
    "examples": [
      {
        "word": "強盗",
        "reading": "ごうとう",
        "meaning": "robbery, burglary"
      },
      {
        "word": "盗む",
        "reading": "ぬすむ",
        "meaning": "to steal"
      }
    ]
  },
  {
    "kanji": "探",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "grope",
      "search",
      "look for"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "さぐ.る",
      "さが.す"
    ],
    "examples": [
      {
        "word": "探す",
        "reading": "さがす",
        "meaning": "to look for"
      }
    ]
  },
  {
    "kanji": "欲",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "longing",
      "covetousness",
      "greed",
      "passion",
      "desire",
      "craving"
    ],
    "onyomi": [
      "ヨク"
    ],
    "kunyomi": [
      "ほっ.する",
      "ほ.しい"
    ],
    "examples": [
      {
        "word": "食欲",
        "reading": "しょくよく",
        "meaning": "appetite (for food)"
      },
      {
        "word": "欲しい",
        "reading": "ほしい",
        "meaning": "want"
      }
    ]
  },
  {
    "kanji": "閉",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "closed",
      "shut"
    ],
    "onyomi": [
      "ヘイ"
    ],
    "kunyomi": [
      "と.じる",
      "と.ざす",
      "し.める",
      "し.まる",
      "た.てる"
    ],
    "examples": [
      {
        "word": "閉じる",
        "reading": "とじる",
        "meaning": "to close (e.g. book, eyes), to shut"
      },
      {
        "word": "閉める",
        "reading": "しめる",
        "meaning": "to close something"
      },
      {
        "word": "閉まる",
        "reading": "しまる",
        "meaning": "to close, to be closed"
      }
    ]
  },
  {
    "kanji": "窓",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "window",
      "pane"
    ],
    "onyomi": [
      "ソウ",
      "ス"
    ],
    "kunyomi": [
      "まど",
      "てんまど",
      "けむだし"
    ],
    "examples": [
      {
        "word": "窓",
        "reading": "まど",
        "meaning": "window"
      }
    ]
  },
  {
    "kanji": "偶",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "accidentally",
      "even number",
      "couple",
      "man & wife",
      "same kind"
    ],
    "onyomi": [
      "グウ"
    ],
    "kunyomi": [
      "たま"
    ],
    "examples": [
      {
        "word": "偶々",
        "reading": "たまたま",
        "meaning": "casually, unexpectedly, accidentally, by chance"
      },
      {
        "word": "偶",
        "reading": "たま",
        "meaning": "even number, couple, man and wife, friend"
      },
      {
        "word": "偶然",
        "reading": "ぐうぜん",
        "meaning": "(by) chance, unexpectedly, suddenly"
      }
    ]
  },
  {
    "kanji": "頂",
    "jlpt": 3,
    "strokeCount": 11,
    "meanings": [
      "place on the head",
      "receive",
      "top of head",
      "top",
      "summit",
      "peak"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "いただ.く",
      "いただき"
    ],
    "examples": [
      {
        "word": "頂上",
        "reading": "ちょうじょう",
        "meaning": "top, summit, peak"
      },
      {
        "word": "頂く",
        "reading": "いただく",
        "meaning": "to receive, to take food or drink (hum)"
      }
    ]
  },
  {
    "kanji": "番",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "turn",
      "number in a series"
    ],
    "onyomi": [
      "バン"
    ],
    "kunyomi": [
      "つが.い"
    ],
    "examples": [
      {
        "word": "一番",
        "reading": "いちばん",
        "meaning": "best, first, number one"
      },
      {
        "word": "順番",
        "reading": "じゅんばん",
        "meaning": "turn (in line), order of things"
      },
      {
        "word": "番",
        "reading": "ばん",
        "meaning": ""
      },
      {
        "word": "番組",
        "reading": "ばんぐみ",
        "meaning": "television or radio program"
      }
    ]
  },
  {
    "kanji": "絵",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "picture",
      "drawing",
      "painting",
      "sketch"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "絵画",
        "reading": "かいが",
        "meaning": "picture"
      },
      {
        "word": "絵",
        "reading": "え",
        "meaning": "picture"
      }
    ]
  },
  {
    "kanji": "勝",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "victory",
      "win",
      "prevail",
      "excel"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "か.つ",
      "-が.ち",
      "まさ.る",
      "すぐ.れる",
      "かつ"
    ],
    "examples": [
      {
        "word": "勝ち",
        "reading": "かち",
        "meaning": "win, victory"
      },
      {
        "word": "優勝",
        "reading": "ゆうしょう",
        "meaning": "overall victory, championship"
      },
      {
        "word": "勝つ",
        "reading": "かつ",
        "meaning": "to win"
      }
    ]
  },
  {
    "kanji": "落",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "fall",
      "drop",
      "come down",
      "village",
      "hamlet"
    ],
    "onyomi": [
      "ラク"
    ],
    "kunyomi": [
      "お.ちる",
      "お.ち",
      "お.とす"
    ],
    "examples": [
      {
        "word": "落る",
        "reading": "おちる",
        "meaning": "to fall or drop"
      },
      {
        "word": "落す",
        "reading": "おとす",
        "meaning": "to drop"
      }
    ]
  },
  {
    "kanji": "葉",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "leaf",
      "plane",
      "lobe",
      "needle",
      "blade",
      "spear",
      "counter for flat things",
      "fragment",
      "piece"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "は"
    ],
    "examples": [
      {
        "word": "葉",
        "reading": "は",
        "meaning": "leaf"
      },
      {
        "word": "葉書",
        "reading": "はがき",
        "meaning": "postcard"
      },
      {
        "word": "言葉",
        "reading": "ことば",
        "meaning": "word, language"
      }
    ]
  },
  {
    "kanji": "最",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "utmost",
      "most",
      "extreme"
    ],
    "onyomi": [
      "サイ",
      "シュ"
    ],
    "kunyomi": [
      "もっと.も",
      "つま"
    ],
    "examples": [
      {
        "word": "最も",
        "reading": "もっとも",
        "meaning": "most, extremely"
      },
      {
        "word": "最低",
        "reading": "さいてい",
        "meaning": "least, lowest, worst"
      },
      {
        "word": "最中",
        "reading": "さいちゅう",
        "meaning": "in the middle of"
      },
      {
        "word": "最終",
        "reading": "さいしゅう",
        "meaning": "last, final, closing"
      }
    ]
  },
  {
    "kanji": "陽",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "sunshine",
      "yang principle",
      "positive",
      "male",
      "heaven",
      "daytime"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "ひ"
    ],
    "examples": [
      {
        "word": "陽気",
        "reading": "ようき",
        "meaning": "season, weather, cheerfulness"
      },
      {
        "word": "太陽",
        "reading": "たいよう",
        "meaning": "sun, solar"
      }
    ]
  },
  {
    "kanji": "寒",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "cold"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "さむ.い"
    ],
    "examples": [
      {
        "word": "寒い",
        "reading": "さむい",
        "meaning": "cold"
      }
    ]
  },
  {
    "kanji": "悲",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "grieve",
      "sad",
      "deplore",
      "regret"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "かな.しい",
      "かな.しむ"
    ],
    "examples": [
      {
        "word": "悲しむ",
        "reading": "かなしむ",
        "meaning": "to be sad, to mourn for, to regret"
      },
      {
        "word": "悲劇",
        "reading": "ひげき",
        "meaning": "tragedy"
      },
      {
        "word": "悲しい",
        "reading": "かなしい",
        "meaning": "sad"
      }
    ]
  },
  {
    "kanji": "期",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "period",
      "time",
      "date",
      "term"
    ],
    "onyomi": [
      "キ",
      "ゴ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "定期",
        "reading": "ていき",
        "meaning": "fixed term"
      },
      {
        "word": "期待",
        "reading": "きたい",
        "meaning": "expectation, anticipation, hope"
      },
      {
        "word": "期間",
        "reading": "きかん",
        "meaning": "period, term"
      },
      {
        "word": "予期",
        "reading": "よき",
        "meaning": "expectation, assume will happen, forecast"
      }
    ]
  },
  {
    "kanji": "歯",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "tooth",
      "cog"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "よわい",
      "は",
      "よわ.い",
      "よわい.する"
    ],
    "examples": [
      {
        "word": "虫歯",
        "reading": "むしば",
        "meaning": "cavity, tooth decay, decayed tooth, caries"
      },
      {
        "word": "歯医者",
        "reading": "はいしゃ",
        "meaning": "dentist"
      },
      {
        "word": "歯",
        "reading": "は",
        "meaning": "tooth"
      }
    ]
  },
  {
    "kanji": "港",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "harbor"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "みなと"
    ],
    "examples": [
      {
        "word": "港",
        "reading": "みなと",
        "meaning": "harbour"
      },
      {
        "word": "空港",
        "reading": "くうこう",
        "meaning": "airport"
      }
    ]
  },
  {
    "kanji": "登",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "ascend",
      "climb up"
    ],
    "onyomi": [
      "トウ",
      "ト",
      "ドウ",
      "ショウ",
      "チョウ"
    ],
    "kunyomi": [
      "のぼ.る",
      "あ.がる"
    ],
    "examples": [
      {
        "word": "登山",
        "reading": "とざん",
        "meaning": "mountain-climbing"
      },
      {
        "word": "登る",
        "reading": "のぼる",
        "meaning": "to climb"
      }
    ]
  },
  {
    "kanji": "然",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "sort of thing",
      "so",
      "if so",
      "in that case",
      "well"
    ],
    "onyomi": [
      "ゼン",
      "ネン"
    ],
    "kunyomi": [
      "しか",
      "しか.り",
      "しか.し",
      "さ"
    ],
    "examples": [
      {
        "word": "突然",
        "reading": "とつぜん",
        "meaning": "abruptly, suddenly, unexpectedly, all at once"
      },
      {
        "word": "全然",
        "reading": "ぜんぜん",
        "meaning": "(1) wholly, entirely, completely, (2) not at all (with neg. verb)"
      },
      {
        "word": "天然",
        "reading": "てんねん",
        "meaning": "nature, spontaneity"
      },
      {
        "word": "偶然",
        "reading": "ぐうぜん",
        "meaning": "(by) chance, unexpectedly, suddenly"
      }
    ]
  },
  {
    "kanji": "晴",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "clear up"
    ],
    "onyomi": [
      "セイ"
    ],
    "kunyomi": [
      "は.れる",
      "は.れ",
      "は.れ-",
      "-ば.れ",
      "は.らす"
    ],
    "examples": [
      {
        "word": "素晴らしい",
        "reading": "すばらしい",
        "meaning": "wonderful, splendid, magnificent"
      },
      {
        "word": "晴れる",
        "reading": "はれる",
        "meaning": "to be sunny"
      },
      {
        "word": "晴れ",
        "reading": "はれ",
        "meaning": "clear weather"
      }
    ]
  },
  {
    "kanji": "晩",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "nightfall",
      "night"
    ],
    "onyomi": [
      "バン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "晩",
        "reading": "ばん",
        "meaning": "evening"
      },
      {
        "word": "今晩",
        "reading": "こんばん",
        "meaning": "this evening"
      },
      {
        "word": "毎晩",
        "reading": "まいばん",
        "meaning": "every night"
      },
      {
        "word": "晩御飯",
        "reading": "ばんごはん",
        "meaning": "evening meal"
      }
    ]
  },
  {
    "kanji": "喜",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "rejoice",
      "take pleasure in"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "よろこ.ぶ",
      "よろこ.ばす"
    ],
    "examples": [
      {
        "word": "喜び",
        "reading": "よろこび",
        "meaning": "(a) joy, (a) delight, rapture, pleasure, gratification, rejoicing, congratulations, felicitations"
      },
      {
        "word": "喜ぶ",
        "reading": "よろこぶ",
        "meaning": "to be delighted"
      }
    ]
  },
  {
    "kanji": "覚",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "memorize",
      "learn",
      "remember",
      "awake",
      "sober up"
    ],
    "onyomi": [
      "カク"
    ],
    "kunyomi": [
      "おぼ.える",
      "さ.ます",
      "さ.める",
      "さと.る"
    ],
    "examples": [
      {
        "word": "覚悟",
        "reading": "かくご",
        "meaning": "resolution, resignation, readiness, preparedness"
      },
      {
        "word": "覚める",
        "reading": "さめる",
        "meaning": "to wake, to wake up"
      },
      {
        "word": "感覚",
        "reading": "かんかく",
        "meaning": "sense, sensation"
      },
      {
        "word": "覚ます",
        "reading": "さます",
        "meaning": "to awaken"
      }
    ]
  },
  {
    "kanji": "達",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "accomplished",
      "reach",
      "arrive",
      "attain"
    ],
    "onyomi": [
      "タツ",
      "ダ"
    ],
    "kunyomi": [
      "-たち"
    ],
    "examples": [
      {
        "word": "達する",
        "reading": "たっする",
        "meaning": "to reach, to get to"
      },
      {
        "word": "配達",
        "reading": "はいたつ",
        "meaning": "delivery, distribution"
      },
      {
        "word": "上達",
        "reading": "じょうたつ",
        "meaning": "improvement, advance, progress"
      },
      {
        "word": "発達",
        "reading": "はったつ",
        "meaning": "development, growth"
      }
    ]
  },
  {
    "kanji": "報",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "report",
      "news",
      "reward",
      "retribution"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "むく.いる"
    ],
    "examples": [
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information, (military) intelligence"
      },
      {
        "word": "予報",
        "reading": "よほう",
        "meaning": "forecast, prediction"
      },
      {
        "word": "報告",
        "reading": "ほうこく",
        "meaning": "report, information"
      },
      {
        "word": "電報",
        "reading": "でんぽう",
        "meaning": "telegram"
      }
    ]
  },
  {
    "kanji": "等",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "etc.",
      "and so forth",
      "class (first)",
      "quality",
      "equal",
      "similar"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひと.しい",
      "など",
      "-ら"
    ],
    "examples": [
      {
        "word": "彼等",
        "reading": "かれら",
        "meaning": "they (usually male)"
      },
      {
        "word": "等",
        "reading": "など",
        "meaning": "et cetera, etc., and the like"
      },
      {
        "word": "等しい",
        "reading": "ひとしい",
        "meaning": "equal"
      },
      {
        "word": "平等",
        "reading": "びょうどう",
        "meaning": "equality (a), impartiality, evenness"
      }
    ]
  },
  {
    "kanji": "過",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "overdo",
      "exceed",
      "go beyond",
      "error"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "す.ぎる",
      "-す.ぎる",
      "-す.ぎ",
      "す.ごす",
      "あやま.つ",
      "あやま.ち",
      "よ.ぎる"
    ],
    "examples": [
      {
        "word": "過去",
        "reading": "かこ",
        "meaning": "the past, bygone days, the previous"
      },
      {
        "word": "通り過ぎる",
        "reading": "とおりすぎる",
        "meaning": "to pass, to pass through"
      },
      {
        "word": "過ごす",
        "reading": "すごす",
        "meaning": "to pass, to spend, to go through, to tide over"
      },
      {
        "word": "通過",
        "reading": "つうか",
        "meaning": "passage through, passing"
      }
    ]
  },
  {
    "kanji": "費",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "expense",
      "cost",
      "spend",
      "consume",
      "waste"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "つい.やす",
      "つい.える"
    ],
    "examples": [
      {
        "word": "費用",
        "reading": "ひよう",
        "meaning": "cost, expense"
      },
      {
        "word": "消費",
        "reading": "しょうひ",
        "meaning": "consumption, expenditure"
      }
    ]
  },
  {
    "kanji": "割",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "proportion",
      "comparatively",
      "divide",
      "cut",
      "separate",
      "split"
    ],
    "onyomi": [
      "カツ"
    ],
    "kunyomi": [
      "わ.る",
      "わり",
      "わ.り",
      "わ.れる",
      "さ.く"
    ],
    "examples": [
      {
        "word": "割る",
        "reading": "わる",
        "meaning": "to divide, to cut, to break, to halve"
      },
      {
        "word": "役割",
        "reading": "やくわり",
        "meaning": "part, assigning (allotment of) parts, role, duties"
      },
      {
        "word": "割れる",
        "reading": "われる",
        "meaning": "to break"
      },
      {
        "word": "割合",
        "reading": "わりあい",
        "meaning": "rate, ratio, percentage"
      }
    ]
  },
  {
    "kanji": "備",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "equip",
      "provision",
      "preparation"
    ],
    "onyomi": [
      "ビ"
    ],
    "kunyomi": [
      "そな.える",
      "そな.わる",
      "つぶさ.に"
    ],
    "examples": [
      {
        "word": "備える",
        "reading": "そなえる",
        "meaning": "to furnish, to provide for, to equip, to install"
      },
      {
        "word": "設備",
        "reading": "せつび",
        "meaning": "equipment, device, facilities, installation"
      },
      {
        "word": "準備",
        "reading": "じゅんび・する",
        "meaning": "to prepare"
      }
    ]
  },
  {
    "kanji": "渡",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "transit",
      "ford",
      "ferry",
      "cross",
      "import",
      "deliver",
      "diameter",
      "migrate"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "わた.る",
      "-わた.る",
      "わた.す"
    ],
    "examples": [
      {
        "word": "渡す",
        "reading": "わたす",
        "meaning": "to hand over"
      },
      {
        "word": "渡る",
        "reading": "わたる",
        "meaning": "to go across"
      }
    ]
  },
  {
    "kanji": "景",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "scenery",
      "view"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "風景",
        "reading": "ふうけい",
        "meaning": "scenery"
      },
      {
        "word": "景気",
        "reading": "けいき",
        "meaning": "condition, state, business (condition)"
      },
      {
        "word": "光景",
        "reading": "こうけい",
        "meaning": "scene, spectacle"
      },
      {
        "word": "景色",
        "reading": "けしき",
        "meaning": "scene, landscape"
      }
    ]
  },
  {
    "kanji": "満",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "full",
      "fullness",
      "enough",
      "satisfy"
    ],
    "onyomi": [
      "マン",
      "バン"
    ],
    "kunyomi": [
      "み.ちる",
      "み.つ",
      "み.たす"
    ],
    "examples": [
      {
        "word": "満足",
        "reading": "まんぞく",
        "meaning": "satisfaction"
      },
      {
        "word": "不満",
        "reading": "ふまん",
        "meaning": "dissatisfaction, displeasure, discontent, complaints, unhappiness"
      },
      {
        "word": "満ちる",
        "reading": "みちる",
        "meaning": "to be full, to rise (tide), to mature, to expire"
      }
    ]
  },
  {
    "kanji": "痛",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "pain",
      "hurt",
      "damage",
      "bruise"
    ],
    "onyomi": [
      "ツウ"
    ],
    "kunyomi": [
      "いた.い",
      "いた.む",
      "いた.ましい",
      "いた.める"
    ],
    "examples": [
      {
        "word": "頭痛",
        "reading": "ずつう",
        "meaning": "headache"
      },
      {
        "word": "苦痛",
        "reading": "くつう",
        "meaning": "pain, agony"
      },
      {
        "word": "痛み",
        "reading": "いたみ",
        "meaning": "pain, ache, sore, grief, distress"
      },
      {
        "word": "痛い",
        "reading": "いたい",
        "meaning": "painful"
      }
    ]
  },
  {
    "kanji": "給",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "salary",
      "wage",
      "gift",
      "allow",
      "grant",
      "bestow on"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "たま.う",
      "たも.う",
      "-たま.え"
    ],
    "examples": [
      {
        "word": "給料",
        "reading": "きゅうりょう",
        "meaning": "salary, wages"
      },
      {
        "word": "供給",
        "reading": "きょうきゅう",
        "meaning": "supply, provision"
      },
      {
        "word": "支給",
        "reading": "しきゅう",
        "meaning": "payment, allowance"
      }
    ]
  },
  {
    "kanji": "程",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "extent",
      "degree",
      "law",
      "formula",
      "distance",
      "limits",
      "amount"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "ほど",
      "-ほど"
    ],
    "examples": [
      {
        "word": "程度",
        "reading": "ていど",
        "meaning": "degree, amount, grade, standard, of the order of (following a number)"
      },
      {
        "word": "程",
        "reading": "ほど",
        "meaning": "degree, extent, bounds, limit"
      }
    ]
  },
  {
    "kanji": "絶",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "discontinue",
      "sever",
      "cut off",
      "abstain",
      "interrupt",
      "suppress",
      "be beyond",
      "without match",
      "peerless",
      "unparalleled"
    ],
    "onyomi": [
      "ゼツ"
    ],
    "kunyomi": [
      "た.える",
      "た.やす",
      "た.つ"
    ],
    "examples": [
      {
        "word": "絶滅",
        "reading": "ぜつめつ",
        "meaning": "destruction, extinction"
      },
      {
        "word": "絶対",
        "reading": "ぜったい",
        "meaning": "absolute, unconditional, absoluteness"
      }
    ]
  },
  {
    "kanji": "遊",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "play"
    ],
    "onyomi": [
      "ユウ",
      "ユ"
    ],
    "kunyomi": [
      "あそ.ぶ",
      "あそ.ばす"
    ],
    "examples": [
      {
        "word": "遊び",
        "reading": "あそび",
        "meaning": "play"
      },
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "meaning": "to play, to make a visit"
      }
    ]
  },
  {
    "kanji": "越",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "surpass",
      "cross over",
      "move to",
      "exceed",
      "vietnam"
    ],
    "onyomi": [
      "エツ",
      "オツ"
    ],
    "kunyomi": [
      "こ.す",
      "-こ.す",
      "-ご.し",
      "こ.える",
      "-ご.え"
    ],
    "examples": [
      {
        "word": "越す",
        "reading": "こす",
        "meaning": "to go over (e.g. with audience)"
      },
      {
        "word": "越える",
        "reading": "こえる",
        "meaning": "to exceed, to cross over, to cross"
      },
      {
        "word": "引っ越す",
        "reading": "ひっこす",
        "meaning": "to move house"
      }
    ]
  },
  {
    "kanji": "幾",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "how many",
      "how much",
      "how far",
      "how long",
      "some",
      "several"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "いく-",
      "いく.つ",
      "いく.ら"
    ],
    "examples": [
      {
        "word": "幾ら",
        "reading": "いくら",
        "meaning": "how much?, how many?"
      },
      {
        "word": "幾つ",
        "reading": "いくつ",
        "meaning": "how many?, how old?"
      }
    ]
  },
  {
    "kanji": "散",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "scatter",
      "disperse",
      "spend",
      "squander"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "ち.る",
      "ち.らす",
      "-ち.らす",
      "ち.らかす",
      "ち.らかる",
      "ち.らばる",
      "ばら",
      "ばら.ける"
    ],
    "examples": [
      {
        "word": "散歩",
        "reading": "さんぽする",
        "meaning": "to stroll"
      }
    ]
  },
  {
    "kanji": "富",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "wealth",
      "enrich",
      "abundant"
    ],
    "onyomi": [
      "フ",
      "フウ"
    ],
    "kunyomi": [
      "と.む",
      "とみ"
    ],
    "examples": [
      {
        "word": "豊富",
        "reading": "ほうふ",
        "meaning": "abundance, wealth, plenty, bounty"
      }
    ]
  },
  {
    "kanji": "勤",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "diligence",
      "become employed",
      "serve"
    ],
    "onyomi": [
      "キン",
      "ゴン"
    ],
    "kunyomi": [
      "つと.める",
      "-づと.め",
      "つと.まる",
      "いそ.しむ"
    ],
    "examples": [
      {
        "word": "勤め",
        "reading": "つとめ",
        "meaning": "(1) service, duty, business, responsibility, task, (2) Buddhist religious services"
      },
      {
        "word": "勤める",
        "reading": "つとめる",
        "meaning": "to work for someone"
      }
    ]
  },
  {
    "kanji": "遅",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "slow",
      "late",
      "back",
      "later"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "おく.れる",
      "おく.らす",
      "おそ.い"
    ],
    "examples": [
      {
        "word": "遅刻",
        "reading": "ちこく",
        "meaning": "lateness, late coming"
      },
      {
        "word": "遅れる",
        "reading": "おくれる",
        "meaning": "to be late"
      },
      {
        "word": "遅い",
        "reading": "おそい",
        "meaning": "late, slow"
      }
    ]
  },
  {
    "kanji": "御",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "honorable",
      "manipulate",
      "govern"
    ],
    "onyomi": [
      "ギョ",
      "ゴ"
    ],
    "kunyomi": [
      "おん-",
      "お-",
      "み-"
    ],
    "examples": [
      {
        "word": "御",
        "reading": "お",
        "meaning": "honourable"
      },
      {
        "word": "御主人",
        "reading": "ごしゅじん",
        "meaning": "(honorable) your husband"
      },
      {
        "word": "朝御飯",
        "reading": "あさごはん",
        "meaning": "breakfast"
      },
      {
        "word": "昼御飯",
        "reading": "ひるごはん",
        "meaning": "midday meal"
      }
    ]
  },
  {
    "kanji": "偉",
    "jlpt": 3,
    "strokeCount": 12,
    "meanings": [
      "admirable",
      "greatness",
      "remarkable",
      "conceited",
      "famous",
      "excellent"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "えら.い"
    ],
    "examples": [
      {
        "word": "偉大",
        "reading": "いだい",
        "meaning": "greatness"
      }
    ]
  },
  {
    "kanji": "数",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "number",
      "strength",
      "fate",
      "law",
      "figures"
    ],
    "onyomi": [
      "スウ",
      "ス",
      "サク",
      "ソク",
      "シュ"
    ],
    "kunyomi": [
      "かず",
      "かぞ.える",
      "しばしば",
      "せ.める",
      "わずらわ.しい"
    ],
    "examples": [
      {
        "word": "数える",
        "reading": "かぞえる",
        "meaning": "to count"
      },
      {
        "word": "数字",
        "reading": "すうじ",
        "meaning": "numeral, figure"
      },
      {
        "word": "数",
        "reading": "かず",
        "meaning": "number, figure"
      },
      {
        "word": "数学",
        "reading": "すうがく",
        "meaning": "mathematics, arithmetic"
      }
    ]
  },
  {
    "kanji": "路",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "path",
      "route",
      "road",
      "distance"
    ],
    "onyomi": [
      "ロ",
      "ル"
    ],
    "kunyomi": [
      "-じ",
      "みち"
    ],
    "examples": [
      {
        "word": "道路",
        "reading": "どうろ",
        "meaning": "road, highway"
      }
    ]
  },
  {
    "kanji": "戦",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "war",
      "battle",
      "match"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "いくさ",
      "たたか.う",
      "おのの.く",
      "そよ.ぐ",
      "わなな.く"
    ],
    "examples": [
      {
        "word": "戦い",
        "reading": "たたかい",
        "meaning": "battle, fight, struggle, conflict"
      },
      {
        "word": "大戦",
        "reading": "たいせん",
        "meaning": "great war, great battle"
      },
      {
        "word": "戦う",
        "reading": "たたかう",
        "meaning": "to fight, to battle, to combat"
      },
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      }
    ]
  },
  {
    "kanji": "働",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "work",
      "(kokuji)"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "はたら.く"
    ],
    "examples": [
      {
        "word": "働き",
        "reading": "はたらき",
        "meaning": "work, labor"
      },
      {
        "word": "労働",
        "reading": "ろうどう",
        "meaning": "manual labor, toil, work"
      },
      {
        "word": "働く",
        "reading": "はたらく",
        "meaning": "to work"
      }
    ]
  },
  {
    "kanji": "想",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "concept",
      "think",
      "idea",
      "thought"
    ],
    "onyomi": [
      "ソウ",
      "ソ"
    ],
    "kunyomi": [
      "おも.う"
    ],
    "examples": [
      {
        "word": "想像",
        "reading": "そうぞう",
        "meaning": "imagination, guess"
      },
      {
        "word": "理想",
        "reading": "りそう",
        "meaning": "ideal"
      },
      {
        "word": "思想",
        "reading": "しそう",
        "meaning": "thought, idea"
      },
      {
        "word": "連想",
        "reading": "れんそう",
        "meaning": "association (of ideas), suggestion"
      }
    ]
  },
  {
    "kanji": "感",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "emotion",
      "feeling",
      "sensation"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "感じ",
        "reading": "かんじ",
        "meaning": "feeling, sense, impression"
      },
      {
        "word": "感心",
        "reading": "かんしん",
        "meaning": "admiration, Well done!"
      },
      {
        "word": "感情",
        "reading": "かんじょう",
        "meaning": "emotion(s), feeling(s), sentiment"
      },
      {
        "word": "感動",
        "reading": "かんどう",
        "meaning": "being deeply moved, excitement, impression, deep emotion"
      }
    ]
  },
  {
    "kanji": "暗",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "darkness",
      "disappear",
      "shade",
      "informal",
      "grow dark",
      "be blinded"
    ],
    "onyomi": [
      "アン"
    ],
    "kunyomi": [
      "くら.い",
      "くら.む",
      "くれ.る"
    ],
    "examples": [
      {
        "word": "暗記",
        "reading": "あんき",
        "meaning": "memorization, learning by heart"
      },
      {
        "word": "暗い",
        "reading": "くらい",
        "meaning": "gloomy"
      }
    ]
  },
  {
    "kanji": "福",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "blessing",
      "fortune",
      "luck",
      "wealth"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "幸福",
        "reading": "こうふく",
        "meaning": "happiness, blessedness"
      }
    ]
  },
  {
    "kanji": "園",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "park",
      "garden",
      "yard",
      "farm"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "その"
    ],
    "examples": [
      {
        "word": "動物園",
        "reading": "どうぶつえん",
        "meaning": "zoo"
      },
      {
        "word": "公園",
        "reading": "こうえん",
        "meaning": "park"
      }
    ]
  },
  {
    "kanji": "遠",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "distant",
      "far"
    ],
    "onyomi": [
      "エン",
      "オン"
    ],
    "kunyomi": [
      "とお.い"
    ],
    "examples": [
      {
        "word": "永遠",
        "reading": "えいえん",
        "meaning": "eternity, perpetuity, immortality, permanence"
      },
      {
        "word": "遠慮",
        "reading": "えんりょ・する",
        "meaning": "to be reserved, to be restrained"
      },
      {
        "word": "遠く",
        "reading": "とおく",
        "meaning": "distant"
      },
      {
        "word": "遠い",
        "reading": "とおい",
        "meaning": "far"
      }
    ]
  },
  {
    "kanji": "辞",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "resign",
      "word",
      "term",
      "expression"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "や.める",
      "いな.む"
    ],
    "examples": [
      {
        "word": "辞める",
        "reading": "やめる",
        "meaning": "to retire"
      },
      {
        "word": "辞典",
        "reading": "じてん",
        "meaning": "dictionary"
      },
      {
        "word": "辞書",
        "reading": "じしょ",
        "meaning": "dictionary"
      }
    ]
  },
  {
    "kanji": "愛",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "love",
      "affection",
      "favourite"
    ],
    "onyomi": [
      "アイ"
    ],
    "kunyomi": [
      "いと.しい",
      "かな.しい",
      "め.でる",
      "お.しむ",
      "まな"
    ],
    "examples": [
      {
        "word": "愛",
        "reading": "あい",
        "meaning": "love"
      },
      {
        "word": "愛する",
        "reading": "あいする",
        "meaning": "to love"
      },
      {
        "word": "愛情",
        "reading": "あいじょう",
        "meaning": "love, affection"
      }
    ]
  },
  {
    "kanji": "煙",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "smoke"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "けむ.る",
      "けむり",
      "けむ.い"
    ],
    "examples": [
      {
        "word": "煙",
        "reading": "けむり",
        "meaning": "smoke, fumes"
      },
      {
        "word": "禁煙",
        "reading": "きんえん",
        "meaning": "No Smoking!"
      }
    ]
  },
  {
    "kanji": "続",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "continue",
      "series",
      "sequel"
    ],
    "onyomi": [
      "ゾク",
      "ショク",
      "コウ",
      "キョウ"
    ],
    "kunyomi": [
      "つづ.く",
      "つづ.ける",
      "つぐ.ない"
    ],
    "examples": [
      {
        "word": "連続",
        "reading": "れんぞく",
        "meaning": "serial, consecutive, continuity, continuing"
      },
      {
        "word": "続き",
        "reading": "つづき",
        "meaning": "sequel, continuation"
      },
      {
        "word": "相続",
        "reading": "そうぞく",
        "meaning": "succession, inheritance"
      },
      {
        "word": "続く",
        "reading": "つづく",
        "meaning": "to be continued"
      }
    ]
  },
  {
    "kanji": "夢",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "dream",
      "vision",
      "illusion"
    ],
    "onyomi": [
      "ム",
      "ボウ"
    ],
    "kunyomi": [
      "ゆめ",
      "ゆめ.みる",
      "くら.い"
    ],
    "examples": [
      {
        "word": "夢中",
        "reading": "むちゅう",
        "meaning": "daze, (in a) trance, ecstasy, delirium, engrossment"
      },
      {
        "word": "夢",
        "reading": "ゆめ",
        "meaning": "dream"
      }
    ]
  },
  {
    "kanji": "罪",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "guilt",
      "sin",
      "crime",
      "fault",
      "blame",
      "offense"
    ],
    "onyomi": [
      "ザイ"
    ],
    "kunyomi": [
      "つみ"
    ],
    "examples": [
      {
        "word": "罪",
        "reading": "つみ",
        "meaning": "crime, fault, indiscretion"
      },
      {
        "word": "犯罪",
        "reading": "はんざい",
        "meaning": "crime"
      }
    ]
  },
  {
    "kanji": "資",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "assets",
      "resources",
      "capital",
      "funds",
      "data",
      "be conducive to",
      "contribute to"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "資本",
        "reading": "しほん",
        "meaning": "funds, capital"
      },
      {
        "word": "資源",
        "reading": "しげん",
        "meaning": "resources"
      }
    ]
  },
  {
    "kanji": "解",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "unravel",
      "notes",
      "key",
      "explanation",
      "understanding",
      "untie",
      "undo",
      "solve",
      "answer",
      "cancel",
      "absolve",
      "explain",
      "minute"
    ],
    "onyomi": [
      "カイ",
      "ゲ"
    ],
    "kunyomi": [
      "と.く",
      "と.かす",
      "と.ける",
      "ほど.く",
      "ほど.ける",
      "わか.る",
      "さと.る"
    ],
    "examples": [
      {
        "word": "解く",
        "reading": "とく",
        "meaning": "to unfasten"
      },
      {
        "word": "誤解",
        "reading": "ごかい",
        "meaning": "misunderstanding"
      },
      {
        "word": "見解",
        "reading": "けんかい",
        "meaning": "opinion, point of view"
      },
      {
        "word": "解決",
        "reading": "かいけつ",
        "meaning": "settlement, solution, resolution"
      }
    ]
  },
  {
    "kanji": "寝",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "lie down",
      "sleep",
      "rest",
      "bed",
      "remain unsold"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ね.る",
      "ね.かす",
      "い.ぬ",
      "みたまや",
      "や.める"
    ],
    "examples": [
      {
        "word": "寝坊",
        "reading": "ねぼう",
        "meaning": "sleeping in late"
      },
      {
        "word": "寝る",
        "reading": "ねる",
        "meaning": "to go to bed, to sleep"
      }
    ]
  },
  {
    "kanji": "置",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "placement",
      "put",
      "set",
      "deposit",
      "leave behind",
      "keep",
      "employ",
      "pawn"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "お.く",
      "-お.き"
    ],
    "examples": [
      {
        "word": "位置",
        "reading": "いち",
        "meaning": "place, situation, position, location"
      },
      {
        "word": "装置",
        "reading": "そうち",
        "meaning": "equipment, installation, apparatus"
      },
      {
        "word": "置く",
        "reading": "おく",
        "meaning": "to put"
      }
    ]
  },
  {
    "kanji": "違",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "difference",
      "differ"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "ちが.う",
      "ちが.い",
      "ちが.える",
      "-ちが.える",
      "たが.う",
      "たが.える"
    ],
    "examples": [
      {
        "word": "違い",
        "reading": "ちがい",
        "meaning": "difference, discrepancy"
      },
      {
        "word": "間違い",
        "reading": "まちがい",
        "meaning": "mistake"
      },
      {
        "word": "違反",
        "reading": "いはん",
        "meaning": "violation (of law), transgression, infringement, breach"
      },
      {
        "word": "違いない",
        "reading": "ちがいない",
        "meaning": "(phrase) sure, no mistaking it, for certain"
      }
    ]
  },
  {
    "kanji": "腹",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "abdomen",
      "belly",
      "stomach"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [
      "はら"
    ],
    "examples": [
      {
        "word": "腹",
        "reading": "はら",
        "meaning": "abdomen, belly, stomach"
      },
      {
        "word": "お腹",
        "reading": "おなか",
        "meaning": "stomach"
      }
    ]
  },
  {
    "kanji": "靴",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "shoes"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "くつ"
    ],
    "examples": [
      {
        "word": "靴下",
        "reading": "くつした",
        "meaning": "socks"
      },
      {
        "word": "靴",
        "reading": "くつ",
        "meaning": "shoes"
      }
    ]
  },
  {
    "kanji": "歳",
    "jlpt": 3,
    "strokeCount": 13,
    "meanings": [
      "year-end",
      "age",
      "occasion",
      "opportunity"
    ],
    "onyomi": [
      "サイ",
      "セイ"
    ],
    "kunyomi": [
      "とし",
      "とせ",
      "よわい"
    ],
    "examples": [
      {
        "word": "二十歳",
        "reading": "はたち",
        "meaning": "20 years old, 20th year"
      }
    ]
  },
  {
    "kanji": "鳴",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "chirp",
      "cry",
      "bark",
      "sound",
      "ring",
      "echo",
      "honk"
    ],
    "onyomi": [
      "メイ"
    ],
    "kunyomi": [
      "な.く",
      "な.る",
      "な.らす"
    ],
    "examples": [
      {
        "word": "鳴る",
        "reading": "なる",
        "meaning": "to sound"
      },
      {
        "word": "鳴く",
        "reading": "なく",
        "meaning": "animal noise. to chirp, roar or croak etc."
      }
    ]
  },
  {
    "kanji": "様",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "esq.",
      "way",
      "manner",
      "situation",
      "polite suffix"
    ],
    "onyomi": [
      "ヨウ",
      "ショウ"
    ],
    "kunyomi": [
      "さま",
      "さん"
    ],
    "examples": [
      {
        "word": "様々",
        "reading": "さまざま",
        "meaning": "varied, various"
      },
      {
        "word": "模様",
        "reading": "もよう",
        "meaning": "pattern, figure, design"
      },
      {
        "word": "王様",
        "reading": "おうさま",
        "meaning": "king"
      },
      {
        "word": "様子",
        "reading": "ようす",
        "meaning": "aspect, state, appearance"
      }
    ]
  },
  {
    "kanji": "疑",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "doubt",
      "distrust",
      "be suspicious",
      "question"
    ],
    "onyomi": [
      "ギ"
    ],
    "kunyomi": [
      "うたが.う"
    ],
    "examples": [
      {
        "word": "疑問",
        "reading": "ぎもん",
        "meaning": "question, problem, doubt, guess"
      },
      {
        "word": "疑う",
        "reading": "うたがう",
        "meaning": "to doubt, to distrust, to be suspicious of, to suspect"
      }
    ]
  },
  {
    "kanji": "関",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "connection",
      "barrier",
      "gateway",
      "involve",
      "concerning"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "せき",
      "-ぜき",
      "かか.わる",
      "からくり",
      "かんぬき"
    ],
    "examples": [
      {
        "word": "関心",
        "reading": "かんしん",
        "meaning": "concern, interest"
      },
      {
        "word": "関する",
        "reading": "かんする",
        "meaning": "to concern, to be related"
      },
      {
        "word": "機関",
        "reading": "きかん",
        "meaning": "organ, mechanism, facility, engine"
      },
      {
        "word": "関連",
        "reading": "かんれん",
        "meaning": "relation, connection, relevance"
      }
    ]
  },
  {
    "kanji": "察",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "guess",
      "presume",
      "surmise",
      "judge",
      "understand"
    ],
    "onyomi": [
      "サツ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "診察",
        "reading": "しんさつ",
        "meaning": "medical examination"
      },
      {
        "word": "観察",
        "reading": "かんさつ",
        "meaning": "observation, survey"
      },
      {
        "word": "警察",
        "reading": "けいさつ",
        "meaning": "police"
      }
    ]
  },
  {
    "kanji": "説",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "opinion",
      "theory",
      "explanation",
      "rumor"
    ],
    "onyomi": [
      "セツ",
      "ゼイ"
    ],
    "kunyomi": [
      "と.く"
    ],
    "examples": [
      {
        "word": "演説",
        "reading": "えんぜつ",
        "meaning": "speech, address"
      },
      {
        "word": "説",
        "reading": "せつ",
        "meaning": "theory"
      },
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "novel"
      },
      {
        "word": "説明",
        "reading": "せつめい",
        "meaning": "explanation"
      }
    ]
  },
  {
    "kanji": "種",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "species",
      "kind",
      "class",
      "variety",
      "seed"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "たね",
      "-ぐさ"
    ],
    "examples": [
      {
        "word": "人種",
        "reading": "じんしゅ",
        "meaning": "race (of people)"
      },
      {
        "word": "種類",
        "reading": "しゅるい",
        "meaning": "variety, kind, type"
      },
      {
        "word": "一種",
        "reading": "いっしゅ",
        "meaning": "a species, a kind, a variety"
      },
      {
        "word": "種",
        "reading": "たね",
        "meaning": "(1) seed, (2) material, (3) cause, source"
      }
    ]
  },
  {
    "kanji": "静",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "quiet"
    ],
    "onyomi": [
      "セイ",
      "ジョウ"
    ],
    "kunyomi": [
      "しず-",
      "しず.か",
      "しず.まる",
      "しず.める"
    ],
    "examples": [
      {
        "word": "冷静",
        "reading": "れいせい",
        "meaning": "calm, composure, coolness, serenity"
      },
      {
        "word": "静か",
        "reading": "しずか",
        "meaning": "quiet"
      }
    ]
  },
  {
    "kanji": "増",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "increase",
      "add",
      "augment",
      "gain",
      "promote"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [
      "ま.す",
      "ま.し",
      "ふ.える",
      "ふ.やす"
    ],
    "examples": [
      {
        "word": "増加",
        "reading": "ぞうか",
        "meaning": "increase, addition"
      },
      {
        "word": "増す",
        "reading": "ます",
        "meaning": "to increase, to grow"
      },
      {
        "word": "増える",
        "reading": "ふえる",
        "meaning": "to increase"
      }
    ]
  },
  {
    "kanji": "際",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "occasion",
      "side",
      "edge",
      "verge",
      "dangerous",
      "adventurous",
      "indecent",
      "time",
      "when"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "きわ",
      "-ぎわ"
    ],
    "examples": [
      {
        "word": "実際",
        "reading": "じっさい",
        "meaning": "practical, actual condition, status quo"
      },
      {
        "word": "交際",
        "reading": "こうさい",
        "meaning": "company, friendship, association, society, acquaintance"
      },
      {
        "word": "際",
        "reading": "さい",
        "meaning": "on the occasion of, circumstances"
      },
      {
        "word": "国際",
        "reading": "こくさい",
        "meaning": "international"
      }
    ]
  },
  {
    "kanji": "認",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "acknowledge",
      "witness",
      "discern",
      "recognize",
      "appreciate",
      "believe"
    ],
    "onyomi": [
      "ニン"
    ],
    "kunyomi": [
      "みと.める",
      "したた.める"
    ],
    "examples": [
      {
        "word": "承認",
        "reading": "しょうにん",
        "meaning": "recognition, acknowledgement, approval, consent, agreement"
      },
      {
        "word": "確認",
        "reading": "かくにん",
        "meaning": "affirmation, confirmation"
      },
      {
        "word": "認める",
        "reading": "みとめる",
        "meaning": "to recognize, to appreciate, to approve, to admit, to notice"
      }
    ]
  },
  {
    "kanji": "演",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "performance",
      "act",
      "play",
      "render",
      "stage"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "演説",
        "reading": "えんぜつ",
        "meaning": "speech, address"
      },
      {
        "word": "演技",
        "reading": "えんぎ",
        "meaning": "acting, performance"
      },
      {
        "word": "演奏",
        "reading": "えんそう",
        "meaning": "musical performance"
      },
      {
        "word": "講演",
        "reading": "こうえん",
        "meaning": "lecture, address"
      }
    ]
  },
  {
    "kanji": "構",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "posture",
      "build",
      "pretend"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "かま.える",
      "かま.う"
    ],
    "examples": [
      {
        "word": "構う",
        "reading": "かまう",
        "meaning": "to mind, to care about, to be concerned about"
      },
      {
        "word": "構成",
        "reading": "こうせい",
        "meaning": "organization, composition"
      },
      {
        "word": "結構",
        "reading": "けっこう",
        "meaning": "splendid, enough"
      }
    ]
  },
  {
    "kanji": "慣",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "accustomed",
      "get used to",
      "become experienced"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "な.れる",
      "な.らす"
    ],
    "examples": [
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "meaning": "custom, manners"
      },
      {
        "word": "慣れる",
        "reading": "なれる",
        "meaning": "to grow accustomed to"
      }
    ]
  },
  {
    "kanji": "精",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "refined",
      "ghost",
      "fairy",
      "energy",
      "vitality",
      "semen",
      "excellence",
      "purity",
      "skill"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "しら.げる",
      "くわ.しい"
    ],
    "examples": [
      {
        "word": "精々",
        "reading": "せいぜい",
        "meaning": "at the most, at best, to the utmost, as much (far) as possible"
      },
      {
        "word": "精神",
        "reading": "せいしん",
        "meaning": "mind, soul, heart, spirit, intention"
      }
    ]
  },
  {
    "kanji": "適",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "suitable",
      "occasional",
      "rare",
      "qualified",
      "capable"
    ],
    "onyomi": [
      "テキ"
    ],
    "kunyomi": [
      "かな.う"
    ],
    "examples": [
      {
        "word": "適用",
        "reading": "てきよう",
        "meaning": "applying"
      },
      {
        "word": "適する",
        "reading": "てきする",
        "meaning": "to fit, to suit"
      },
      {
        "word": "快適",
        "reading": "かいてき",
        "meaning": "pleasant, agreeable, comfortable"
      },
      {
        "word": "適切",
        "reading": "てきせつ",
        "meaning": "pertinent, appropriate, adequate, relevance"
      }
    ]
  },
  {
    "kanji": "雑",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "miscellaneous"
    ],
    "onyomi": [
      "ザツ",
      "ゾウ"
    ],
    "kunyomi": [
      "まじ.える",
      "まじ.る"
    ],
    "examples": [
      {
        "word": "混雑",
        "reading": "こんざつ",
        "meaning": "confusion, congestion"
      },
      {
        "word": "複雑",
        "reading": "ふくざつ",
        "meaning": "complexity, complication"
      },
      {
        "word": "雑誌",
        "reading": "ざっし",
        "meaning": "magazine"
      }
    ]
  },
  {
    "kanji": "暮",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "evening",
      "twilight",
      "season's end",
      "livelihood",
      "make a living",
      "spend time"
    ],
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "く.れる",
      "く.らす"
    ],
    "examples": [
      {
        "word": "暮らし",
        "reading": "くらし",
        "meaning": "living, livelihood, subsistence, circumstances"
      },
      {
        "word": "暮らす",
        "reading": "くらす",
        "meaning": "to live, to get along"
      },
      {
        "word": "暮れ",
        "reading": "くれ",
        "meaning": "year end, sunset, nightfall, end"
      },
      {
        "word": "暮れる",
        "reading": "くれる",
        "meaning": "to get dark, to come to an end"
      }
    ]
  },
  {
    "kanji": "誤",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "mistake",
      "err",
      "do wrong",
      "mislead"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "あやま.る",
      "-あやま.る"
    ],
    "examples": [
      {
        "word": "誤り",
        "reading": "あやまり",
        "meaning": "error"
      },
      {
        "word": "誤解",
        "reading": "ごかい",
        "meaning": "misunderstanding"
      }
    ]
  },
  {
    "kanji": "緒",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "thong",
      "beginning",
      "inception",
      "end",
      "cord",
      "strap",
      "mental or emotional state"
    ],
    "onyomi": [
      "ショ",
      "チョ"
    ],
    "kunyomi": [
      "お",
      "いとぐち"
    ],
    "examples": [
      {
        "word": "一緒",
        "reading": "いっしょ",
        "meaning": "together"
      }
    ]
  },
  {
    "kanji": "髪",
    "jlpt": 3,
    "strokeCount": 14,
    "meanings": [
      "hair of the head"
    ],
    "onyomi": [
      "ハツ"
    ],
    "kunyomi": [
      "かみ"
    ],
    "examples": [
      {
        "word": "髪の毛",
        "reading": "かみのけ",
        "meaning": "hair (head)"
      },
      {
        "word": "髪",
        "reading": "かみ",
        "meaning": "hair"
      }
    ]
  },
  {
    "kanji": "談",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "discuss",
      "talk"
    ],
    "onyomi": [
      "ダン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "冗談",
        "reading": "じょうだん",
        "meaning": "jest, joke"
      },
      {
        "word": "相談",
        "reading": "そうだん・する",
        "meaning": "to discuss"
      }
    ]
  },
  {
    "kanji": "横",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "sideways",
      "side",
      "horizontal",
      "width",
      "woof",
      "unreasonable",
      "perverse"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "よこ"
    ],
    "examples": [
      {
        "word": "横切る",
        "reading": "よこぎる",
        "meaning": "to cross (e.g. arms), to traverse"
      },
      {
        "word": "横断",
        "reading": "おうだん",
        "meaning": "crossing"
      },
      {
        "word": "横",
        "reading": "よこ",
        "meaning": "beside, side, width"
      }
    ]
  },
  {
    "kanji": "調",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "tune",
      "tone",
      "meter",
      "key (music)",
      "writing style",
      "prepare",
      "exorcise",
      "investigate",
      "harmonize",
      "mediate"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "しら.べる",
      "しら.べ",
      "ととの.う",
      "ととの.える"
    ],
    "examples": [
      {
        "word": "順調",
        "reading": "じゅんちょう",
        "meaning": "favourable, doing well, O.K., all right"
      },
      {
        "word": "調査",
        "reading": "ちょうさ",
        "meaning": "investigation, examination, inquiry, survey"
      },
      {
        "word": "調子",
        "reading": "ちょうし",
        "meaning": "tune, tone, key"
      },
      {
        "word": "強調",
        "reading": "きょうちょう",
        "meaning": "emphasis, stress, stressed point"
      }
    ]
  },
  {
    "kanji": "熱",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "heat",
      "temperature",
      "fever",
      "mania",
      "passion"
    ],
    "onyomi": [
      "ネツ"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "examples": [
      {
        "word": "熱帯",
        "reading": "ねったい",
        "meaning": "tropics"
      },
      {
        "word": "熱中",
        "reading": "ねっちゅう",
        "meaning": "nuts!, enthusiasm, zeal, mania"
      },
      {
        "word": "熱心",
        "reading": "ねっしん",
        "meaning": "zeal, enthusiasm"
      },
      {
        "word": "熱",
        "reading": "ねつ",
        "meaning": "fever"
      }
    ]
  },
  {
    "kanji": "選",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "elect",
      "select",
      "choose",
      "prefer"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "えら.ぶ"
    ],
    "examples": [
      {
        "word": "選択",
        "reading": "せんたく",
        "meaning": "selection, choice"
      },
      {
        "word": "選手",
        "reading": "せんしゅ",
        "meaning": "(1) player (in game), (2) team"
      },
      {
        "word": "選ぶ",
        "reading": "えらぶ",
        "meaning": "to choose"
      }
    ]
  },
  {
    "kanji": "箱",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "box",
      "chest",
      "case",
      "bin",
      "railway car"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "はこ"
    ],
    "examples": [
      {
        "word": "箱",
        "reading": "はこ",
        "meaning": "box"
      }
    ]
  },
  {
    "kanji": "確",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "assurance",
      "firm",
      "tight",
      "hard",
      "solid",
      "confirm",
      "clear",
      "evident"
    ],
    "onyomi": [
      "カク",
      "コウ"
    ],
    "kunyomi": [
      "たし.か",
      "たし.かめる"
    ],
    "examples": [
      {
        "word": "正確",
        "reading": "せいかく",
        "meaning": "accurate, punctuality, exactness, authenticity, veracity"
      },
      {
        "word": "確実",
        "reading": "かくじつ",
        "meaning": "certainty, reliability, soundness"
      },
      {
        "word": "確認",
        "reading": "かくにん",
        "meaning": "affirmation, confirmation"
      },
      {
        "word": "明確",
        "reading": "めいかく",
        "meaning": "clear up, clarify, define"
      }
    ]
  },
  {
    "kanji": "論",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "argument",
      "discourse"
    ],
    "onyomi": [
      "ロン"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "論じる",
        "reading": "ろんじる",
        "meaning": "to argue, to discuss, to debate"
      },
      {
        "word": "結論",
        "reading": "けつろん",
        "meaning": "conclusion"
      },
      {
        "word": "論文",
        "reading": "ろんぶん",
        "meaning": "thesis, essay, treatise, paper"
      },
      {
        "word": "勿論",
        "reading": "もちろん",
        "meaning": "of course, certainly, naturally"
      }
    ]
  },
  {
    "kanji": "権",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "authority",
      "power",
      "rights"
    ],
    "onyomi": [
      "ケン",
      "ゴン"
    ],
    "kunyomi": [
      "おもり",
      "かり",
      "はか.る"
    ],
    "examples": [
      {
        "word": "権利",
        "reading": "けんり",
        "meaning": "right, privilege"
      }
    ]
  },
  {
    "kanji": "賛",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "approve",
      "praise",
      "title or inscription on picture",
      "assist",
      "agree with"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "たす.ける",
      "たた.える"
    ],
    "examples": [
      {
        "word": "賛成",
        "reading": "Uӣ[い",
        "meaning": "approval, agreement, support, favour"
      }
    ]
  },
  {
    "kanji": "舞",
    "jlpt": 3,
    "strokeCount": 15,
    "meanings": [
      "dance",
      "flit",
      "circle",
      "wheel"
    ],
    "onyomi": [
      "ブ"
    ],
    "kunyomi": [
      "ま.う",
      "-ま.う",
      "まい"
    ],
    "examples": [
      {
        "word": "舞台",
        "reading": "ぶたい",
        "meaning": "stage (theatre)"
      },
      {
        "word": "見舞い",
        "reading": "みまい",
        "meaning": "enquiry, expression of sympathy, expression of concern"
      },
      {
        "word": "お見舞い",
        "reading": "おみまい",
        "meaning": "calling on someone who is ill, enquiry"
      }
    ]
  },
  {
    "kanji": "頭",
    "jlpt": 3,
    "strokeCount": 16,
    "meanings": [
      "head",
      "counter for large animals"
    ],
    "onyomi": [
      "トウ",
      "ズ",
      "ト"
    ],
    "kunyomi": [
      "あたま",
      "かしら",
      "-がしら",
      "かぶり"
    ],
    "examples": [
      {
        "word": "頭痛",
        "reading": "ずつう",
        "meaning": "headache"
      },
      {
        "word": "頭",
        "reading": "あたま",
        "meaning": "head"
      }
    ]
  },
  {
    "kanji": "薬",
    "jlpt": 3,
    "strokeCount": 16,
    "meanings": [
      "medicine",
      "chemical",
      "enamel",
      "gunpowder",
      "benefit"
    ],
    "onyomi": [
      "ヤク"
    ],
    "kunyomi": [
      "くすり"
    ],
    "examples": [
      {
        "word": "薬",
        "reading": "くすり",
        "meaning": "medicine"
      }
    ]
  },
  {
    "kanji": "機",
    "jlpt": 3,
    "strokeCount": 16,
    "meanings": [
      "loom",
      "mechanism",
      "machine",
      "airplane",
      "opportunity",
      "potency",
      "efficacy",
      "occasion"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "はた"
    ],
    "examples": [
      {
        "word": "ジェット機",
        "reading": "ジェットき",
        "meaning": "jet aeroplane"
      },
      {
        "word": "機械",
        "reading": "きかい",
        "meaning": "machine, mechanism"
      },
      {
        "word": "機関",
        "reading": "きかん",
        "meaning": "organ, mechanism, facility, engine"
      },
      {
        "word": "機嫌",
        "reading": "きげん",
        "meaning": "humour, temper, mood"
      }
    ]
  },
  {
    "kanji": "積",
    "jlpt": 3,
    "strokeCount": 16,
    "meanings": [
      "volume",
      "product (x*y)",
      "acreage",
      "contents",
      "pile up",
      "stack",
      "load",
      "amass"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "つ.む",
      "-づ.み",
      "つ.もる",
      "つ.もり"
    ],
    "examples": [
      {
        "word": "積もる",
        "reading": "つもる",
        "meaning": "to pile up"
      },
      {
        "word": "積極的",
        "reading": "せっきょくてき",
        "meaning": "positive, active, proactive"
      }
    ]
  },
  {
    "kanji": "頼",
    "jlpt": 3,
    "strokeCount": 16,
    "meanings": [
      "trust",
      "request"
    ],
    "onyomi": [
      "ライ"
    ],
    "kunyomi": [
      "たの.む",
      "たの.もしい",
      "たよ.る"
    ],
    "examples": [
      {
        "word": "信頼",
        "reading": "しんらい",
        "meaning": "reliance, trust, confidence"
      },
      {
        "word": "依頼",
        "reading": "いらい",
        "meaning": "(1) request, commission, dispatch, (2) dependence, trust"
      },
      {
        "word": "頼る",
        "reading": "たよる",
        "meaning": "to rely on, to have recourse to, to depend on"
      },
      {
        "word": "頼む",
        "reading": "たのむ",
        "meaning": "to ask"
      }
    ]
  },
  {
    "kanji": "優",
    "jlpt": 3,
    "strokeCount": 17,
    "meanings": [
      "tenderness",
      "excel",
      "surpass",
      "actor",
      "superiority",
      "gentleness"
    ],
    "onyomi": [
      "ユウ",
      "ウ"
    ],
    "kunyomi": [
      "やさ.しい",
      "すぐ.れる",
      "まさ.る"
    ],
    "examples": [
      {
        "word": "俳優",
        "reading": "はいゆう",
        "meaning": "actor, actress, player, performer"
      },
      {
        "word": "優秀",
        "reading": "ゆうしゅう",
        "meaning": "superiority, excellence"
      },
      {
        "word": "優勝",
        "reading": "ゆうしょう",
        "meaning": "overall victory, championship"
      },
      {
        "word": "優れる",
        "reading": "すぐれる",
        "meaning": "to surpass, to outstrip, to excel"
      }
    ]
  },
  {
    "kanji": "顔",
    "jlpt": 3,
    "strokeCount": 18,
    "meanings": [
      "face",
      "expression"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "かお"
    ],
    "examples": [
      {
        "word": "笑顔",
        "reading": "えがお",
        "meaning": "smiling face"
      }
    ]
  },
  {
    "kanji": "類",
    "jlpt": 3,
    "strokeCount": 18,
    "meanings": [
      "sort",
      "kind",
      "variety",
      "class",
      "genus"
    ],
    "onyomi": [
      "ルイ"
    ],
    "kunyomi": [
      "たぐ.い"
    ],
    "examples": [
      {
        "word": "書類",
        "reading": "しょるい",
        "meaning": "documents, official papers"
      },
      {
        "word": "人類",
        "reading": "じんるい",
        "meaning": "mankind, humanity"
      },
      {
        "word": "種類",
        "reading": "しゅるい",
        "meaning": "variety, kind, type"
      }
    ]
  },
  {
    "kanji": "難",
    "jlpt": 3,
    "strokeCount": 18,
    "meanings": [
      "difficult",
      "impossible",
      "trouble",
      "accident",
      "defect"
    ],
    "onyomi": [
      "ナン"
    ],
    "kunyomi": [
      "かた.い",
      "-がた.い",
      "むずか.しい",
      "むづか.しい",
      "むつか.しい",
      "-にく.い"
    ],
    "examples": [
      {
        "word": "困難",
        "reading": "こんなん",
        "meaning": "difficulty, distress"
      },
      {
        "word": "難しい",
        "reading": "むずかしい",
        "meaning": "difficult"
      }
    ]
  },
  {
    "kanji": "観",
    "jlpt": 3,
    "strokeCount": 18,
    "meanings": [
      "outlook",
      "look",
      "appearance",
      "condition",
      "view"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "み.る",
      "しめ.す"
    ],
    "examples": [
      {
        "word": "観光",
        "reading": "かんこう",
        "meaning": "sightseeing"
      },
      {
        "word": "観客",
        "reading": "かんきゃく",
        "meaning": "audience, spectator(s)"
      },
      {
        "word": "観察",
        "reading": "かんさつ",
        "meaning": "observation, survey"
      },
      {
        "word": "見る  観る",
        "reading": "みる",
        "meaning": "to see, to watch"
      }
    ]
  },
  {
    "kanji": "職",
    "jlpt": 3,
    "strokeCount": 18,
    "meanings": [
      "post",
      "employment",
      "work"
    ],
    "onyomi": [
      "ショク",
      "ソク"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "職",
        "reading": "しょく",
        "meaning": "employment"
      },
      {
        "word": "就職",
        "reading": "しゅうしょく",
        "meaning": "finding employment, inauguration"
      },
      {
        "word": "職業",
        "reading": "しょくぎょう",
        "meaning": "occupation, business"
      }
    ]
  },
  {
    "kanji": "願",
    "jlpt": 3,
    "strokeCount": 19,
    "meanings": [
      "petition",
      "request",
      "vow",
      "wish",
      "hope"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "ねが.う",
      "-ねがい"
    ],
    "examples": [
      {
        "word": "願い",
        "reading": "ねがい",
        "meaning": "desire, wish, request"
      },
      {
        "word": "願う",
        "reading": "ねがう",
        "meaning": "to desire, to wish, to request"
      }
    ]
  },
  {
    "kanji": "識",
    "jlpt": 3,
    "strokeCount": 19,
    "meanings": [
      "discriminating",
      "know",
      "write"
    ],
    "onyomi": [
      "シキ"
    ],
    "kunyomi": [
      "し.る",
      "しる.す"
    ],
    "examples": [
      {
        "word": "意識",
        "reading": "いしき",
        "meaning": "consciousness, senses"
      },
      {
        "word": "知識",
        "reading": "ちしき",
        "meaning": "knowledge, information"
      },
      {
        "word": "常識",
        "reading": "じょうしき",
        "meaning": "common sense"
      }
    ]
  },
  {
    "kanji": "警",
    "jlpt": 3,
    "strokeCount": 19,
    "meanings": [
      "admonish",
      "commandment"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "いまし.める"
    ],
    "examples": [
      {
        "word": "警告",
        "reading": "けいこく",
        "meaning": "warning, advice"
      },
      {
        "word": "警察",
        "reading": "けいさつ",
        "meaning": "police"
      },
      {
        "word": "警官",
        "reading": "けいかん",
        "meaning": "policeman"
      }
    ]
  },
  {
    "kanji": "議",
    "jlpt": 3,
    "strokeCount": 20,
    "meanings": [
      "deliberation",
      "consultation",
      "debate",
      "consideration"
    ],
    "onyomi": [
      "ギ"
    ],
    "kunyomi": [],
    "examples": [
      {
        "word": "議会",
        "reading": "ぎかい",
        "meaning": "Diet, congress, parliament"
      },
      {
        "word": "議長",
        "reading": "ぎちょう",
        "meaning": "chairman"
      },
      {
        "word": "議員",
        "reading": "ぎいん",
        "meaning": "member of the Diet, congress or parliament"
      },
      {
        "word": "不思議",
        "reading": "ふしぎ",
        "meaning": "mystery, curiosity"
      }
    ]
  }
];
