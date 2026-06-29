"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  TbCode, 
  TbSchool, 
  TbActivity, 
  TbMessageCircle,
  TbServer,
  TbLayoutDashboard,
  TbDeviceGamepad2,
  TbSettingsCode,
  TbHeadphones,
  TbMovie,
  TbChefHat,
  TbBrain,
  TbWorld,
  TbExternalLink,
  TbCertificate,
  TbServer2,
  TbDeviceDesktopCode,
  TbDatabase,
  TbCloudComputing,
  TbTools,
  TbHierarchy3,
  TbMusic
} from "react-icons/tb";

// ── DATA STRUCTURES ──

const skillsData = [
  { category: "Programming Languages", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] },
  { category: "Backend Engineering", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] },
  { category: "Frontend Engineering", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] },
  { category: "Databases", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] },
  { category: "Cloud & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] },
  { category: "Tools & Platforms", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] },
  { category: "Concepts", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]}
];

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    timeline: "2026 - Present",
    description:
      "Currently pursuing a master's degree with a focus on software engineering, distributed systems, cloud computing, and modern application development."
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata",
    timeline: "2021 - 2024",
    description:
      "Graduated with a CGPA of 8.13/10. Developed strong analytical, problem-solving, and business management skills, providing valuable insight into designing software that aligns with real-world business needs."
  }
];

const hobbiesData = [
  {
    title: "Game Development",
    icon: TbDeviceGamepad2,
    description:
      "I enjoy learning Unity, C#, and game design by building small prototypes and studying gameplay mechanics, level design, and interactive systems."
  },
  {
    title: "Music & Singing",
    icon: TbMusic,
    description:
      "Singing is one of my favorite creative outlets. It helps me relax, improve focus, and maintain a healthy balance alongside software development."
  },
  {
    title: "Cooking & Creativity",
    icon: TbChefHat,
    description:
      "Cooking teaches patience, attention to detail, and continuous experimentation—qualities I also apply when designing and building software."
  },
  {
    title: "Learning Languages & Culture",
    icon: TbWorld,
    description:
      "I'm currently learning Japanese and enjoy exploring different cultures, technologies, and ideas through travel, books, and online communities."
  }
];

const languagesData = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Native / Bilingual Proficiency" },
  { language: "Bengali", proficiency: "Native / Bilingual Proficiency" },
  { language: "Japanese", proficiency: "Beginner (JLPT N5)" }
];

const certificationsData = [
  {
    title: "Applied AI Foundations",
    provider: "OpenAI",
    date: "June 21, 2026",
    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
    image: "/images/certs/1.jpg"
  },
  {
    title: "AI Foundations",
    provider: "OpenAI",
    date: "June 21, 2026",
    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
    image: "/images/certs/2.jpg"
  },
  {
    title: "AI For Everyone",
    provider: "DeepLearning.AI",
    date: "March 26, 2026",
    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
    image: "/images/certs/3.jpeg"
  },
  {
    title: "Introduction to Git and GitHub",
    provider: "Google",
    date: "August 26, 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
    image: "/images/certs/4.jpeg"
  },
  {
    title: "Introduction to Data Analytics",
    provider: "IBM",
    date: "April 13, 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
    image: "/images/certs/6.jpg"
  },
  {
    title: "Introduction to Back-End Development",
    provider: "Meta",
    date: "March 11, 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
    image: "/images/certs/7.jpg"
  },
  {
    title: "Python (Basic)",
    provider: "HackerRank",
    date: "September 30, 2023",
    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
    image: "/images/certs/5.png"
  },
  {
    title: "Using Python to Interact with the Operating System",
    provider: "Google",
    date: "July 1, 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
    image: "/images/certs/8.jpg"
  },
  {
    title: "Introduction to Cybersecurity Tools & Cyberattacks",
    provider: "IBM",
    date: "June 17, 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
    image: "/images/certs/9.jpg"
  },
  {
    title: "Programming with Python: Introduction for Beginners",
    provider: "upGrad",
    date: "April 24, 2023",
    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
    image: "/images/certs/10.png"
  },
  {
    title: "Data Analysis Using Python",
    provider: "University of Pennsylvania",
    date: "March 9, 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
    image: "/images/certs/11.jpg"
  },
  {
    title: "Technical Support Fundamentals",
    provider: "Google",
    date: "December 21, 2022",
    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
    image: "/images/certs/12.jpg"
  },
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("skills");
  const [certPage, setCertPage] = useState(1);
  const CERTS_PER_PAGE = 4;
  const totalCertPages = Math.ceil(
    certificationsData.length / CERTS_PER_PAGE
  );

  const displayedCertificates = certificationsData.slice(
    (certPage - 1) * CERTS_PER_PAGE,
    certPage * CERTS_PER_PAGE
  );
  const BG_IMAGE_URL = "/images/bg/skills_bg.png";

  const tabs = [
    { id: "skills", label: "Technical Skills", icon: TbCode },
    { id: "education", label: "Education", icon: TbSchool },
    { id: "certs", label: "Certifications", icon: TbCertificate },
    { id: "hobbies", label: "Off-Duty", icon: TbActivity },
    { id: "languages", label: "Languages", icon: TbMessageCircle },
  ];

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
          {tabs.map((tab) => {
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
              {skillsData.map((category, idx) => {
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
              {educationData.map((edu, idx) => (
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
              {hobbiesData.map((hobby, idx) => {
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
            {languagesData.map((lang, idx) => (
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
                        Verify
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
                Previous
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
                Next
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