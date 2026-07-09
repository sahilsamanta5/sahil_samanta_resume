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
  const BG_IMAGE_URL = "/images/bg/skills_bg_2.png";

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
        <div className="mb-12 flex w-full flex-wrap justify-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--bg-glass)] p-2 backdrop-blur-[16px] shadow-[var(--shadow-md)]">
          {translation.profile.tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex min-w-[130px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 sm:flex-none
                ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {/* Active Background */}
                {isActive && (
                  <>
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-soft), var(--accent-secondary))",
                      }}
                    />

                    {/* Green Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-60"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-secondary), var(--accent-soft))",
                      }}
                    />
                  </>
                )}

                {/* Hover Border */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-transparent transition-all duration-300 group-hover:border-[var(--accent-secondary)]/40 group-hover:bg-[var(--bg-hover)]" />
                )}

                <Icon
                  className={`relative z-10 text-lg transition-all duration-300 ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--accent-primary)] group-hover:text-[var(--accent-secondary)]"
                  }`}
                />

                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── TAB CONTENT AREA ── */}
        <div className="min-h-[400px] w-full border rounded-[15px]
          border border-[var(--border-accent)]
          bg-[var(--bg-glass)]
          backdrop-blur-[var(--blur-md)]
          shadow-[var(--shadow-lg)] p-8 backdrop-blur-sm sm:p-12">
          
          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-8 md:grid-cols-2">
              {translation.profile.skills.technical.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[var(--bg-surface)] border border-[var(--border-accent)]">
                        <Icon className="text-xl text-[var(--accent-primary)]" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-[var(--foreground)]">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-[52px]">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="
                            rounded-full
                            border border-[var(--border-accent)]
                            bg-[var(--bg-surface)]
                            px-4 py-2
                            text-[12px]
                            font-medium
                            text-[var(--foreground)]
                            transition-all
                            duration-300
                            hover:border-[var(--accent-primary)]
                            hover:bg-[var(--bg-hover)]
                            hover:text-[var(--accent-primary)]
                            hover:shadow-[var(--shadow-glow-green)]
                          ">
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
                <div key={idx} className="relative flex flex-col gap-2 border-l-2 border-[var(--border-subtle)] pl-6 transition-colors hover:border-[var(--accent-secondary)]">
                  <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[var(--accent-secondary)]" />
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--accent-primary)] uppercase">{edu.timeline}</span>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">{edu.degree}</h3>
                  <span className="font-sans text-[14px] font-medium text-[var(--text-faint)]">{edu.institution}</span>
                  <p className="mt-2 max-w-2xl font-sans text-[14px] leading-relaxed text-[var(--text-muted)]">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* HOBBIES TAB */}
          {activeTab === "hobbies" && (
            <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-6 md:grid-cols-2">
              {translation.profile.skills.hobbies.map((hobby, idx) => {
                const Icon = hobby.icon;

                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-glass)] p-6 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)]"
                  >
                    {/* Purple Glow */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--accent-secondary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

                    {/* Green Accent Line */}
                    <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--accent-secondary)]" />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-accent)] bg-[var(--bg-surface)] transition-all duration-300 group-hover:bg-[var(--accent-primary)] group-hover:shadow-[var(--shadow-glow-green)]">
                        <Icon className="text-2xl text-[var(--accent-primary)] transition-colors duration-300 group-hover:text-[var(--background)]" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col">
                        <h3 className="font-serif text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                          {hobby.title}
                        </h3>

                        <p className="mt-2 font-sans text-sm leading-7 text-[var(--text-muted)]">
                          {hobby.description}
                        </p>
                      </div>
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
                className="group relative overflow-hidden rounded-[15px] border border-[var(--border-subtle)] bg-[var(--accent-secondary)]/30 p-7 backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)]"
              >
                {/* Purple Ambient Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--accent-secondary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

                <div className="relative z-10">
                  <h3 className="font-serif text-3xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                    {lang.language}
                  </h3>

                  <p className="mt-3 font-sans text-sm tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {lang.proficiency}
                  </p>
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
                className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-[var(--blur-md)] transition-all duration-300 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-green)]"
              >
                {/* Certificate */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[var(--border-accent)] bg-[var(--bg-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
                      {cert.date}
                    </span>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                      >
                        {translation.profile.cta}
                        <TbExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                      {cert.title}
                    </h3>

                    <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalCertPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={() => setCertPage((p) => Math.max(1, p - 1))}
                disabled={certPage === 1}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {translation.profile.carouselCta.prev}
              </button>

              {Array.from({ length: totalCertPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCertPage(index + 1)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                    certPage === index + 1
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-black shadow-[var(--shadow-glow-green)]"
                      : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)]"
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
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)] disabled:cursor-not-allowed disabled:opacity-40"
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