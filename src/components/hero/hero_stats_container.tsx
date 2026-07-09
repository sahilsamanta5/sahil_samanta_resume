"use client";

import { TbGridScan } from "react-icons/tb";
import HeroStats from "./hero_stats";

export default function HeroStatsContainer() {
  return (
    <div className="lg:col-span-12">
      <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8">

        {/* Heading */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-soft)]">
              Key Stats
            </p>

            <h3 className="mt-2 font-display text-3xl text-[var(--foreground)]">
              Some Key Points about me
            </h3>

          </div>

          <TbGridScan
            size={34}
            className="text-[var(--accent-secondary)]"
          />

        </div>

        {/* Categories */}

        <div className="grid gap-5 sm:grid-cols-1">
          <HeroStats />
        </div>

      </div>
    </div>
  );
}