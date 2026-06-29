"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

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
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
  },

  // Future
  // {
  //   code: "ko",
  //   name: "Korean",
  //   nativeName: "한국어",
  // },
  // {
  //   code: "lt",
  //   name: "Lithuanian",
  //   nativeName: "Lietuvių",
  // },
];

interface LanguageContextType {
  language: Language;
  languages: Language[];
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
    const saved =
      localStorage.getItem("language");

    const found = LANGUAGES.find(
      (l) => l.code === saved
    );

    if (found) setCurrentLanguage(found);
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
  const context =
    useContext(LanguageContext);

  if (!context)
    throw new Error(
      "LanguageProvider missing."
    );

  return context;
}