"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/translations";

export default function HeroCharacter() {
  const { translation } = useLanguage();

  return (
    <div className="lg:col-span-4 lg:row-span-2">
      <div className="relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">

        {/* Decorative Gradient */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent-secondary)]/10 blur-[120px]" />
        </div>

        {/* Status */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-faint)]">
              Currently
            </p>

            <h3 className="mt-1 font-display text-xl text-[var(--foreground)]">
              Available
            </h3>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />

            <span className="text-xs font-medium text-[var(--accent-soft)]">
              Open
            </span>
          </span>
        </div>

        {/* Character */}
        <div className="relative flex flex-1 items-end justify-center px-6">
          <Image
            src={translation.hero.model || translations.en.hero.model}
            alt="Sahil Samanta"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Bottom Information */}
        <div className="relative z-10 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-sm p-6">

          <p className="text-sm text-[var(--text-faint)]">
            Building software with
          </p>

          <h4 className="mt-2 font-display text-2xl text-[var(--foreground)]">
            Precision.
          </h4>

        </div>

      </div>
    </div>
  );
}