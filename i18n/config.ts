import en from "./english";
import bn from "./bangla";

type Dictionary = typeof en;

const bnDictionary: Dictionary = bn;

export const dictionaries = {
  en,
  bn: bnDictionary,
};
export const languages = ["bn", "en"] as const;

export type Language = keyof typeof dictionaries;

export const defaultLanguage: Language = "bn";

