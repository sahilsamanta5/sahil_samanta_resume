"use client";

import { TbSchool, TbMapPin, TbCode } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { translation } = useLanguage();
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--accent-primary)]/10 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Bento Grid */}
        <div className="grid auto-rows-[220px] gap-6 lg:grid-cols-12">

          {/* ABOUT */}
          <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)] lg:col-span-8 lg:row-span-2">

            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(191,0,255,.08), transparent 40%), radial-gradient(circle at bottom left, rgba(44,255,5,.08), transparent 50%)",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-primary)]">
                Behind the Code
              </span>

              <h3 className="mt-4 font-serif text-3xl font-semibold text-[var(--foreground)]">
                About Me
              </h3>
              <div className="mt-2 max-w-3xl space-y-6 text-[15px] leading-8 text-[var(--text-muted)]">
                {translation.about.narration()}
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="group relative overflow-hidden rounded-[15px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)] lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              { translation.about.factCards[0].type }
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
              { translation.about.factCards[0].heading }
            </h3>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              { translation.about.factCards[0].para }
            </p>
          </div>

          {/* LOCATION */}
          <div className="group relative overflow-hidden rounded-[15px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)] lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              { translation.about.factCards[1].type }
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
              { translation.about.factCards[1].heading }
            </h3>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              { translation.about.factCards[1].para }
            </p>
          </div>

          {/* CURRENT FOCUS */}
          <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)] lg:col-span-6">

            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              { translation.about.factCards[2].type }
            </p>

            <h3 className="mt-3 font-serif text-3xl text-[var(--foreground)]">
              { translation.about.factCards[2].heading }
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {translation.about.factCards[2].items?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] px-3 py-1 text-xs text-[var(--accent-primary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* PASSIONS */}
          <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)] lg:col-span-6">

            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              { translation.about.factCards[3].type }
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {translation.about.factCards[3].items?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] px-4 py-2 text-sm text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-[var(--shadow-glow-green)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}