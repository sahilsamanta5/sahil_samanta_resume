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
        <div
          className="
            mb-12
            grid
            grid-cols-2
            gap-3
            rounded-[var(--radius-xl)]
            border
            border-[var(--border-accent)]
            bg-[var(--bg-glass)]
            p-3
            backdrop-blur-[var(--blur-md)]
            shadow-[var(--shadow-md)]

            sm:grid-cols-3
            lg:flex
            lg:flex-wrap
            lg:justify-center
          "
        >
          {translation.profile.tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group
                  relative
                  flex
                  min-h-[64px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  px-5
                  py-3
                  transition-all
                  duration-300

                  lg:min-h-[52px]
                  lg:w-auto
                  lg:min-w-[170px]

                  ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }
                `}
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

                    <div
                      className="absolute inset-0 rounded-full opacity-60 blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-secondary), var(--accent-soft))",
                      }}
                    />
                  </>
                )}

                {/* Hover */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-transparent transition-all duration-300 group-hover:border-[var(--border-accent)] group-hover:bg-[var(--bg-hover)]" />
                )}

                <Icon
                  className={`relative z-10 shrink-0 text-lg ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--accent-primary)] group-hover:text-[var(--accent-secondary)]"
                  }`}
                />

                <span
                  className="
                    relative
                    z-10
                    text-center
                    text-[11px]
                    font-semibold
                    leading-tight
                    tracking-[0.05em]

                    lg:text-xs
                    lg:tracking-[0.1em]
                  "
                >
                  {tab.label}
                </span>
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
            <div className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-6 lg:grid-cols-2">
              {displayedCertificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="
                    group
                    overflow-hidden
                    rounded-[var(--radius-lg)]
                    border
                    border-[var(--border-subtle)]
                    bg-[var(--bg-glass)]
                    backdrop-blur-[var(--blur-md)]
                    transition-all
                    duration-300
                    hover:border-[var(--border-accent)]
                    hover:shadow-[var(--shadow-glow-green)]
                  "
                >
                  {/* Image */}

                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}

                  <div className="space-y-4 p-5 sm:p-6">

                    {/* Date + Link */}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                      <span
                        className="
                          w-fit
                          rounded-full
                          border
                          border-[var(--border-accent)]
                          bg-[var(--bg-surface)]
                          px-3
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          text-[var(--accent-primary)]
                        "
                      >
                        {cert.date}
                      </span>

                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-[var(--text-muted)]
                            transition-colors
                            duration-300
                            hover:text-[var(--accent-primary)]
                          "
                        >
                          {translation.profile.cta}

                          <TbExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    {/* Title */}

                    <div>

                      <h3
                        className="
                          font-serif
                          text-xl
                          font-semibold
                          leading-tight
                          text-[var(--foreground)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--accent-primary)]
                        "
                      >
                        {cert.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          tracking-[0.08em]
                          text-[var(--text-faint)]
                        "
                      >
                        {cert.provider}
                      </p>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            {totalCertPages > 1 && (
              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                "
              >
                <button
                  onClick={() => setCertPage((p) => Math.max(1, p - 1))}
                  disabled={certPage === 1}
                  className="
                    rounded-full
                    border
                    border-[var(--border-subtle)]
                    bg-[var(--bg-surface)]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[var(--text-muted)]
                    transition-all
                    duration-300
                    hover:border-[var(--border-accent)]
                    hover:text-[var(--accent-primary)]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  {translation.profile.carouselCta.prev}
                </button>

                {Array.from({ length: totalCertPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCertPage(index + 1)}
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        certPage === index + 1
                          ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-black shadow-[var(--shadow-glow-green)]"
                          : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)]"
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCertPage((p) => Math.min(totalCertPages, p + 1))
                  }
                  disabled={certPage === totalCertPages}
                  className="
                    rounded-full
                    border
                    border-[var(--border-subtle)]
                    bg-[var(--bg-surface)]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[var(--text-muted)]
                    transition-all
                    duration-300
                    hover:border-[var(--border-accent)]
                    hover:text-[var(--accent-primary)]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
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