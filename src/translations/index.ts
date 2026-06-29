import en from "./en";
import jp from "./jp";

export const translations = {
  en,
  jp
};

export type Translation =
  typeof translations.en;
  typeof translations.jp;