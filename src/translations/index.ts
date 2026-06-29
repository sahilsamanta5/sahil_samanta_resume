import en from "./en";
import jp from "./jp";
import de from "./de";
import hi from "./hi";

export const translations = {
  en,
  jp,
  de,
  hi
};

export type Translation =
  typeof translations.en;
  typeof translations.jp;
  typeof translations.de;
  typeof translations.hi;