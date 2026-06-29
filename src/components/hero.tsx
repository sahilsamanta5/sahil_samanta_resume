"use client";

import Image from "next/image";
import { TbArrowRight, TbDownload } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Hero() {
  const { translation } = useLanguage();
  return (
    <section 
      id="home" 
      // Changed to items-center with py-24 to prevent the top from ever getting cut off on smaller screens
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--background)] px-5 py-20 sm:px-6 sm:py-24 md:px-16 lg:px-24"
    >
      
      {/* ── Background Decorative Layers ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url(${translation?.background?.hero || "/images/bg/hero_bg.png"})`,
        }}
      />
      <div className="pointer-events-none absolute left-[15%] top-[25%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)] opacity-[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[20%] h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--accent-blue)] opacity-[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--accent-cyan)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Main Content Container ── */}
      {/* Solid flex layout: Stacks on mobile, sits perfectly side-by-side on desktop */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-14 lg:flex-row lg:gap-8">
        
        {/* ── LEFT COLUMN: Typography & Actions ── */}
        <div className="flex w-full flex-col space-y-10 text-center lg:w-[55%] lg:text-left xl:w-[60%]">
          
          {/* ── TOP LOGO & STATUS BLOCK ── */}
          <div className="flex flex-col">
            
            {/* Logo Container */}
            <div className="relative mx-auto w-[70vw] max-w-[300px] sm:w-[50vw] lg:mx-0 lg:w-[40vw]">
                <Image 
                    src="/images/logo/sahil_resume_en_logo_3.png" 
                    alt={translation.header.name}
                    width={1000} 
                    height={1000} 
                    sizes="(max-width:640px) 70vw,
                    (max-width:1024px) 50vw,
                    40vw"
                    className="w-full h-auto object-contain rounded-[2px]" 
                    priority
                />
            </div>
            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <div className="h-[1px] w-8 bg-[var(--accent-cyan)]" />
              <span className="font-sans text-[11px] font-medium tracking-[0.16em] text-[var(--accent-cyan)] uppercase">
                {translation.header.position}
              </span>
            </div>
            
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl">
              {translation.hero.title()}
            </h2>

            <p className="mx-auto max-w-xl font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] lg:mx-0">
              {translation.hero.para}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
                href="#showcase"
                className="group relative flex w-full justify-center items-center gap-3 sm:w-auto overflow-hidden rounded-[2px] border border-[var(--accent-cyan)]/60 bg-[var(--accent-glow)] px-8 py-4 font-sans text-xs font-semibold tracking-widest text-[var(--accent-cyan)] transition-all duration-300 hover:border-[var(--accent-cyan)]"
            >
                <span className="relative z-10 uppercase transition-colors duration-300 group-hover:text-[var(--background)]">
                    {translation.hero.cta1}
                </span>

                <TbArrowRight className="relative z-10 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--background)]" />

                <div className="absolute inset-0 z-0 h-full w-0 bg-[var(--accent-cyan)] transition-all duration-300 ease-out group-hover:w-full" />
            </a>

            <a
              href="/documents/resume/en/sahil_samanta_resume_v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full justify-center items-center gap-3 sm:w-auto px-4 py-4 rounded-[2px] font-sans text-xs font-semibold tracking-widest text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--bg-hover)] uppercase"
            >
              <span>{translation.hero.cta2}</span>
              <TbDownload className="text-[18px] text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent-cyan)]" />
            </a>
          </div>        
        </div>

        {/* ── RIGHT COLUMN: AI Character ── */}
        <div className="hidden w-full justify-end lg:flex lg:w-[45%] xl:w-[40%] relative pt-12">
          
          <div className="relative mx-auto w-full max-w-[500px] xl:max-w-[600px] aspect-[3/4]">
            
            {/* ── CHAT BUBBLE OVER CHARACTER ── */}
            <div className="absolute -top-6 -left-12 z-20 animate-[bounce_3s_ease-in-out_infinite]">
               <div className="relative flex flex-col items-start gap-1 rounded-t-2xl rounded-br-2xl rounded-bl-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl max-w-[280px]">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                    </div>
                    <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--accent-cyan)] uppercase">{translation.hero.status.head}</span>
                  </div>
                  <p className="font-sans text-[13px] font-medium leading-relaxed text-[var(--foreground)] mt-1">
                    {translation.hero.status.stat()}
                  </p>
               </div>
            </div>

            {/* Character Image */}
            <div className="relative h-full w-full overflow-visible">
              <Image 
                src={translation.hero.model || translations.en.hero.model}
                alt="Sahil Samanta AI Character" 
                fill
                className="object-contain object-bottom drop-shadow-2xl" 
                priority
              />
            </div>
          </div>

        </div>

      </div>

      {/* ── Decorative Right-side Scroll Indicator ── */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-8 xl:flex">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent to-[var(--border-subtle)]" />
        <span 
          className="font-sans text-[10px] font-medium tracking-[0.3em] text-[var(--text-faint)] uppercase" 
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL TO EXPLORE
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-t from-transparent to-[var(--border-subtle)]" />
      </div>

    </section>
  );
}