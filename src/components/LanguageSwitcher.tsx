"use client";

import {
  TbLanguage,
  TbChevronUp,
} from "react-icons/tb";

import { useState } from "react";

import {
  useLanguage,
} from "@/src/context/LanguageContext";

export default function LanguageSwitcher() {
  const {
    language,
    languages,
    setLanguage,
  } = useLanguage();

  const [open, setOpen] =
    useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="relative">

        {open && (
          <div
            className="
              absolute
              bottom-full
              right-0
              mb-3
              w-56
              overflow-hidden
              rounded-[2px]
              border
              border-[var(--border-subtle)]
              bg-[var(--bg-surface)]
              shadow-2xl
            "
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
               className={`
                flex
                w-full
                items-center
                justify-between
                px-5
                py-3
                transition-colors

                ${
                    language.code === lang.code
                    ? "bg-[var(--accent-glow)] text-[var(--accent-cyan)]"
                    : "text-[var(--foreground)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-cyan)]"
                }
                `}
              >
                <span>
                  {lang.nativeName}
                </span>

                <span className="text-xs text-[var(--text-muted)]">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="
            flex
            items-center
            gap-3
            rounded-[2px]
            border
            border-[var(--border-subtle)]
            bg-[var(--bg-surface)]/90
            px-5
            py-3
            backdrop-blur-xl
            transition-all
            hover:border-[var(--accent-cyan)]
          "
        >
          <TbLanguage
            className="
              text-xl
              text-[var(--accent-cyan)]
            "
          />

          <span className="font-medium">
            {language.nativeName}
          </span>

          <TbChevronUp
            className={`
              transition-transform

              ${
                open
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        </button>
      </div>
    </div>
  );
}