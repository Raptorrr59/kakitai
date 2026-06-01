import { useState, useEffect } from "react";
import { KANJI_DATASET } from "../data/kanji";

export interface KanjiPreset {
  id: string;
  name: string;
  description: string;
  kanjiList: string[]; // e.g. ["日", "月"]
  isBuiltIn?: boolean;
}

export function usePresets() {
  const [customPresets, setCustomPresets] = useState<KanjiPreset[]>([]);

  // Load custom presets from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("kakitai_presets");
    if (saved) {
      try {
        setCustomPresets(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse custom presets", e);
      }
    }
  }, []);

  const saveCustomPresets = (newPresets: KanjiPreset[]) => {
    setCustomPresets(newPresets);
    localStorage.setItem("kakitai_presets", JSON.stringify(newPresets));
  };

  // Define Built-in Presets dynamically
  const getBuiltInPresets = (): KanjiPreset[] => {
    const n5List = KANJI_DATASET.filter((k) => k.jlpt === 5).map((k) => k.kanji);
    const n4List = KANJI_DATASET.filter((k) => k.jlpt === 4).map((k) => k.kanji);
    const n3List = KANJI_DATASET.filter((k) => k.jlpt === 3).map((k) => k.kanji);

    return [
      {
        id: "builtin-n5",
        name: "JLPT N5 Core",
        description: "The complete set of introductory JLPT N5 Kanji characters (79 items). Excellent for absolute beginners.",
        kanjiList: n5List,
        isBuiltIn: true
      },
      {
        id: "builtin-n4",
        name: "JLPT N4 Core",
        description: "The complete set of elementary JLPT N4 Kanji characters (166 items). Perfect for basic conversations.",
        kanjiList: n4List,
        isBuiltIn: true
      },
      {
        id: "builtin-n3",
        name: "JLPT N3 Core",
        description: "The complete set of intermediate JLPT N3 Kanji characters (367 items). Expands reading comprehension significantly.",
        kanjiList: n3List,
        isBuiltIn: true
      },
      {
        id: "builtin-nature",
        name: "Nature & Astronomy",
        description: "Kanji relating to elements, environment, and celestial bodies (sun, moon, water, rain, mountain, etc.).",
        kanjiList: ["日", "月", "火", "水", "木", "金", "土", "山", "川", "田", "雨", "空"],
        isBuiltIn: true
      },
      {
        id: "builtin-people",
        name: "People & Relationships",
        description: "Essential characters describing human relations, people, children, and occupations.",
        kanjiList: ["人", "子", "女", "男", "先", "生", "会", "社"],
        isBuiltIn: true
      },
      {
        id: "builtin-body",
        name: "Human Body Parts",
        description: "Kanji characters representing anatomical body parts (eye, mouth, hand, foot, ear).",
        kanjiList: ["口", "目", "耳", "手", "足"],
        isBuiltIn: true
      },
      {
        id: "builtin-verbs",
        name: "Core Actions (Verbs)",
        description: "Key action verbs covering everyday movement, perception, communication, and studies.",
        kanjiList: ["見", "行", "来", "食", "飲", "学", "書", "読", "帰", "急", "決", "信"],
        isBuiltIn: true
      }
    ];
  };

  const allPresets = [...getBuiltInPresets(), ...customPresets];

  // Create a new custom preset
  const createPreset = (name: string, description: string, kanjiList: string[]) => {
    const newPreset: KanjiPreset = {
      id: `custom-${Date.now()}`,
      name,
      description: description || `Custom list of ${kanjiList.length} Kanji.`,
      kanjiList
    };

    const updated = [...customPresets, newPreset];
    saveCustomPresets(updated);
  };

  // Delete a custom preset
  const deletePreset = (id: string) => {
    const updated = customPresets.filter((p) => p.id !== id);
    saveCustomPresets(updated);
  };

  // Activate a preset: loops through its kanji and calls startLearning
  const activatePreset = (id: string, startLearning: (kanji: string) => void): number => {
    const preset = allPresets.find((p) => p.id === id);
    if (!preset) return 0;

    let addedCount = 0;
    preset.kanjiList.forEach((char) => {
      // startLearning handles checks (only starts if box === 0)
      startLearning(char);
      addedCount++;
    });

    return addedCount;
  };

  return {
    presets: allPresets,
    customPresets,
    createPreset,
    deletePreset,
    activatePreset
  };
}
