"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  TbExternalLink,
} from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("skills");
  const [certPage, setCertPage] = useState(1);
  const { translation } = useLanguage();
  const CERTS_PER_PAGE = 4;
  const totalCertPages = Math.ceil(
    translations.en.profile.skills.certifications.length / CERTS_PER_PAGE
  );

  const displayedCertificates = translations.en.profile.skills.certifications.slice(
    (certPage - 1) * CERTS_PER_PAGE,
    certPage * CERTS_PER_PAGE
  );
  const BG_IMAGE_URL = "/images/bg/skills_bg.png";

  useEffect(() => {
    if (activeTab === "certs") {
      setCertPage(1);
    }
  }, [activeTab]);

  return (
    <section 
      id="profile" 
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6 py-24 md:px-16 lg:px-24"
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} 
      />
      <div className="relative z-10 w-full max-w-5xl">
        
        {/* ── TAB NAVIGATION ── */}
        <div className="mb-12 flex w-full flex-wrap justify-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 p-2 backdrop-blur-md sm:gap-4 sm:rounded-full">
          {translation.profile.tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 font-sans text-[12px] font-bold tracking-widest transition-all duration-300 uppercase min-w-[120px] sm:flex-none ${
                  isActive 
                    ? "text-[var(--bg-surface)] shadow-lg" 
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--bg-hover)]"
                }`}
              >
                {/* Active Tab Background Pill */}
                {isActive && (
                  <div className="absolute inset-0 z-0 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_20px_rgba(61,214,200,0.4)]" />
                )}
                <Icon className={`relative z-10 text-lg ${isActive ? "text-[var(--bg-surface)]" : "text-[var(--text-faint)]"}`} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── TAB CONTENT AREA ── */}
        <div className="min-h-[400px] w-full rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/20 p-8 backdrop-blur-sm sm:p-12">
          
          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-8 md:grid-cols-2">
              {translation.profile.skills.technical.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[var(--bg-hover)]">
                        <Icon className="text-xl text-[var(--accent-cyan)]" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-[var(--foreground)]">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-[52px]">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-sans text-[11px] tracking-wide text-[var(--text-muted)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="flex animate-[fadeIn_0.4s_ease-out] flex-col gap-10">
              {translation.profile.skills.education.map((edu, idx) => (
                <div key={idx} className="relative flex flex-col gap-2 border-l-2 border-[var(--border-subtle)] pl-6 transition-colors hover:border-[var(--accent-blue)]">
                  <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[var(--accent-blue)]" />
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--accent-blue)] uppercase">{edu.timeline}</span>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">{edu.degree}</h3>
                  <span className="font-sans text-[14px] font-medium text-[var(--text-faint)]">{edu.institution}</span>
                  <p className="mt-2 max-w-2xl font-sans text-[14px] leading-relaxed text-[var(--text-muted)]">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* HOBBIES TAB */}
          {activeTab === "hobbies" && (
            <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              {translation.profile.skills.hobbies.map((hobby, idx) => {
                const Icon = hobby.icon;
                return (
                  <div key={idx} className="group flex items-start gap-5">
                    {/* Minimalist Icon Block */}
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--bg-hover)] text-[var(--accent-cyan)] transition-colors group-hover:bg-[var(--accent-cyan)] group-hover:text-[var(--bg-surface)]">
                      <Icon className="text-lg" />
                    </div>
                    
                    {/* Clean Text Block */}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-[17px] font-medium text-[var(--foreground)]">
                        {hobby.title}
                      </h3>
                      <p className="font-sans text-[13px] leading-relaxed text-[var(--text-muted)]">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        {/* LANGUAGES TAB */}
        {activeTab === "languages" && (
        <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-6 sm:grid-cols-2">
            {translation.profile.skills.languages.map((lang, idx) => (
            <div
                key={idx}
                className="group relative overflow-hidden border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-card)]/60 via-[var(--bg-surface)]/40 to-transparent p-6 transition-all duration-500 hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_0_30px_rgba(61,214,200,0.08)]"
            >
                {/* Glow Effect */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-glow)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--accent-cyan)]" />

                <div className="relative z-10 pl-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                    Language
                </span>

                <h3 className="mt-3 font-serif text-3xl text-[var(--foreground)]">
                    {lang.language}
                </h3>

                <div className="mt-4 flex items-center gap-3">
                    <div className="h-[1px] w-10 bg-[var(--accent-cyan)]/40" />

                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    {lang.proficiency}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>
        )}

        {activeTab === "certs" && (
          <>
          <div className="grid animate-[fadeIn_0.4s_ease-out] gap-6 md:grid-cols-2">
            {displayedCertificates.map((cert, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-all duration-300 hover:border-[var(--accent-cyan)]"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-[2px] bg-[var(--bg-hover)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-cyan)]">
                      {cert.date}
                    </span>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-blue)] transition-colors hover:text-[var(--accent-cyan)]"
                      >
                        {translation.profile.cta}
                        <TbExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-[var(--foreground)]">
                      {cert.title}
                    </h3>

                    <p className="mt-1 font-sans text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalCertPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => setCertPage((p) => Math.max(1, p - 1))}
                disabled={certPage === 1}
                className="rounded-[2px] border border-[var(--border-subtle)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {translation.profile.carouselCta.prev}
              </button>

              {Array.from({ length: totalCertPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCertPage(index + 1)}
                  className={`flex h-9 w-9 items-center justify-center rounded-[2px] border text-xs font-semibold transition-all ${
                    certPage === index + 1
                      ? "border-[var(--accent-cyan)] bg-[var(--accent-cyan)] text-[var(--background)]"
                      : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCertPage((p) => Math.min(totalCertPages, p + 1))
                }
                disabled={certPage === totalCertPages}
                className="rounded-[2px] border border-[var(--border-subtle)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {translation.profile.carouselCta.next}
              </button>
            </div>
          )}
        </>
        )}
        </div>
      </div>
    </section>
  );
}