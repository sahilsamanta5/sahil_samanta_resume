"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { translations } from "@/src/translations";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const LANGUAGES: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "jp",
    name: "Japanese",
    nativeName: "日本語",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch"
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी"
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা"
  },
  {
    code: "fil",
    name: "Filipino",
    nativeName: "Filipino"
  },
  {
    code: "th",
    name: "Thai",
    nativeName: "ไทย"
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어"
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文"
  },
  {
    code: "ms",
    name: "Malay",
    nativeName: "Bahasa Melayu"
  },
  {
    code: "lt",
    name: "Lithuanian",
    nativeName: "Lietuvių"
  },
  {
    code: "et",
    name: "Estonian",
    nativeName: "Eesti"
  },
  {
    code: "cs",
    name: "Czech",
    nativeName: "Čeština"
  },
  {
    code: "pl",
    name: "Polish",
    nativeName: "Polski"
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français"
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español"
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português"
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano"
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands"
  },
  {
    code: "sv",
    name: "Swedish",
    nativeName: "Svenska"
  },
  {
    code: "da",
    name: "Danish",
    nativeName: "Dansk"
  },
  {
    code: "fi",
    name: "Finnish",
    nativeName: "Suomi"
  },
  {
    code: "no",
    name: "Norwegian",
    nativeName: "Norsk"
  },
];

type Translation = typeof translations.en;

interface LanguageContextType {
  language: Language;
  languages: Language[];
  translation: Translation;
  setLanguage: (code: string) => void;
}

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setCurrentLanguage] =
    useState(LANGUAGES[0]);

  useEffect(() => {
    const saved = localStorage.getItem("language");

    const found = LANGUAGES.find(
      (l) => l.code === saved
    );

    if (found) {
      setCurrentLanguage(found);
    } else {
      setCurrentLanguage(LANGUAGES[0])
    }
  }, []);

  const setLanguage = (code: string) => {
    const found = LANGUAGES.find(
      (l) => l.code === code
    );

    if (!found) return;

    setCurrentLanguage(found);

    localStorage.setItem(
      "language",
      found.code
    );
  };

  const value = useMemo(
    () => ({
      language,
      languages: LANGUAGES,
      setLanguage,

      translation:
      translations[
        language.code as keyof typeof translations
      ] ?? translations.en,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "LanguageProvider missing."
    );
  }

  return context;
}