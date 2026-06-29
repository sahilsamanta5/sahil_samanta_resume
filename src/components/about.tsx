"use client";

import { TbSchool, TbMapPin, TbCode } from "react-icons/tb";

export default function About() {
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
              Behind The Code
            </span>
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl leading-[1.1]">
            About Me.
          </h2>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
          
          {/* ── LEFT COLUMN: The Narrative (Wider) ── */}
          <div className="flex flex-col space-y-7 lg:col-span-7">
            <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
              I am a Backend Software Engineer specializing in  <strong className="font-medium text-[var(--foreground)]">scalable APIs, cloud-native applications, and modern backend systems.</strong> Currently pursuing a <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> at <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, I enjoy building <strong className="font-medium text-[var(--foreground)]">reliable softwares</strong> using <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, and <span className="text-[var(--accent-cyan)]">modern web technologies</span>.
            </p>
            
            <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
              I enjoy <strong className="font-medium text-[var(--foreground)]">designing backend systems</strong> that are <span className="text-[var(--accent-cyan)]">maintainable</span>, <span className="text-[var(--accent-cyan)]">secure</span>, and <span className="text-[var(--accent-cyan)]">scalable</span>. Whether developing REST APIs, integrating third-party services, or deploying applications to the cloud, I focus on writing <span className="text-[var(--accent-cyan)]">clean, reliable code</span> that solves real-world problems.
            </p>

            <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
              Beyond backend engineering, I enjoy exploring <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, and <span className="text-[var(--accent-cyan)]">game development</span> as creative side projects. Learning across different technologies helps me approach software engineering with both technical depth and creative problem-solving.
            </p>
          </div>

          {/* ── RIGHT COLUMN: Quick Facts ONLY ── */}
          <div className="flex flex-col gap-4 lg:col-span-5 pt-2">
            
            {/* Fact Card 1: Education */}
            <div className="group flex items-start gap-5 rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 p-6 transition-all hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-hover)]">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-glow)]">
                <TbSchool className="text-xl text-[var(--accent-cyan)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[var(--text-faint)] uppercase">Education</span>
                <span className="font-sans text-[14px] font-medium text-[var(--foreground)]">Master of Computer Applications</span>
                <span className="font-sans text-[13px] text-[var(--text-muted)]">Manipal University Jaipur (Ongoing)</span>
              </div>
            </div>

            {/* Fact Card 2: Location */}
            <div className="group flex items-start gap-5 rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 p-6 transition-all hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-hover)]">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-blue)]/10">
                <TbMapPin className="text-xl text-[var(--accent-cyan)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[var(--text-faint)] uppercase">Location</span>
                <span className="font-sans text-[14px] font-medium text-[var(--foreground)]">Kolkata, India</span>
                <span className="font-sans text-[13px] text-[var(--text-muted)]">Open to remote, hybrid, and relocation opportunities</span>
              </div>
            </div>

            {/* Fact Card 3: Core Focus */}
            <div className="group flex items-start gap-5 rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 p-6 transition-all hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-hover)]">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-glow)]">
                <TbCode className="text-xl text-[var(--accent-cyan)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[var(--text-faint)] uppercase">Current Focus</span>
                <span className="font-sans text-[14px] font-medium text-[var(--foreground)]">Backend Engineering</span>
                <span className="font-sans text-[13px] text-[var(--text-muted)] leading-relaxed">Python • Django • FastAPI • REST APIs</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}