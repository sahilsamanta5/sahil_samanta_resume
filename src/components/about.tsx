"use client";

import { TbSchool, TbMapPin, TbCode } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { translation } = useLanguage();
  return (
    <section 
      id="about" 
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6 py-24 md:px-16 lg:px-24"
    >
      
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0 bg-[url('/images/bg/about_bg.png')] bg-cover bg-center opacity-10 blend-soft-light pointer-events-none" />
      
     
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[var(--accent-cyan)]" />
            <span className="font-sans text-[11px] font-medium tracking-[0.16em] text-[var(--accent-cyan)] uppercase">
              {translation.about.tagline}
            </span>
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl leading-[1.1]">
            {translation.about.heading}
          </h2>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
          
          {/* ── LEFT COLUMN: The Narrative (Wider) ── */}
          <div className="flex flex-col space-y-7 lg:col-span-7">
            {
              translation.about.narration()
            }
          </div>

          {/* ── RIGHT COLUMN: Quick Facts ONLY ── */}
          <div className="flex flex-col gap-4 lg:col-span-5 pt-2">
            
            {/* Fact Cards */}
            {translation.about.factCards.map(factCard => {
              return (
                <div key={factCard.id} className="group flex items-start gap-5 rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 p-6 transition-all hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-hover)]">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-glow)]">
                    <factCard.icon className="text-xl text-[var(--accent-cyan)]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[var(--text-faint)] uppercase">{factCard.type}</span>
                    <span className="font-sans text-[14px] font-medium text-[var(--foreground)]">{factCard.heading}</span>
                    <span className="font-sans text-[13px] text-[var(--text-muted)]">{factCard.para}</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}