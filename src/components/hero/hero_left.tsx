"use client";

import { TbArrowRight, TbDownload } from "react-icons/tb";
import { useLanguage } from "@/src/context/LanguageContext";
import { scrollToInternalSection } from "../utils";

const techStack = [
  "Python",
  "Django",
  "FastAPI",
  "React",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export default function HeroLeft() {
  const { translation } = useLanguage();

  return (
    <div className="lg:col-span-8">
      <div className="flex h-full flex-col rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 md:p-12">

        {/* Status */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-soft)]">
              {translation.hero.availability}
            </span>
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl font-bold leading-none text-[var(--foreground)] sm:text-6xl xl:text-7xl">
          {translation.header.name}
        </h1>

        {/* Position */}
        <p className="mt-1 text-lg font-semibold text-[var(--accent-primary)] sm:text-xl">
          {translation.header.position}
        </p>

        {/* Hero Title */}
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
          {translation.hero.title()}
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
          {translation.hero.para}
        </p>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-[var(--border-subtle)]" />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--accent-secondary)] hover:text-[var(--foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="#showcase"
            onClick={(e) => {
              e.preventDefault();
              scrollToInternalSection("#showcase");
            }}
            className="group inline-flex items-center gap-3 rounded-xl bg-[var(--accent-primary)] px-7 py-4 font-bold text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent-secondary)] hover:text-[var(--foreground)]"
          >
            <span>View Projects</span>

            <TbArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/documents/resume/en/sahil_samanta_resume_v1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-transparent px-7 py-4 font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent-secondary)] hover:bg-[var(--bg-hover)]"
          >
            <span>Download Resume</span>

            <TbDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>

        </div>
      </div>
    </div>
  );
}