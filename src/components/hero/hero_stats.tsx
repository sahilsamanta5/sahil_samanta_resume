"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function HeroStats() {
  const { translation } = useLanguage();
  return (
      <div className="grid gap-5 md:grid-cols-3">
        {translation.hero.key_stats.stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.subtitle}
              className="group rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)]"
            >
              <div className="flex items-start justify-between gap-4">

                {/* Left */}
                <div className="flex-1">

                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-4xl font-bold leading-none text-[var(--foreground)]">
                      {stat.value}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {stat.subtitle}
                  </p>

                </div>

                {/* Right */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-[var(--border-subtle)]

                    bg-[var(--bg-surface)]

                    transition-all
                    duration-300

                    group-hover:border-[var(--accent-secondary)]
                  "
                >
                  <Icon
                    size={24}
                    className="text-[var(--accent-secondary)]"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>
  );
}