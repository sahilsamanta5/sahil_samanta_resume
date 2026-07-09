"use client";

import { TbBriefcase2, TbFolders, TbWorld } from "react-icons/tb";

const stats = [
  {
    icon: TbBriefcase2,
    value: "2+",
    title: "Years",
    subtitle: "Professional Experience",
  },
  {
    icon: TbFolders,
    value: "25+",
    title: "Projects",
    subtitle: "Completed",
  },
  {
    icon: TbWorld,
    value: "Global",
    title: "Available",
    subtitle: "Remote & Relocation",
  },
];

export default function HeroStats() {
  return (
    <div className="lg:col-span-12">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                  <Icon
                    size={22}
                    className="text-[var(--accent-secondary)]"
                  />
                </div>

                <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)] opacity-70 transition group-hover:opacity-100" />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-4xl font-bold text-[var(--foreground)]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  {stat.title}
                </p>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}