"use client";

import { useState } from "react";
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
  TbCertificate
} from "react-icons/tb";

// ── DATA STRUCTURES ──

const skillsData = [
  { category: "Backend Architecture", icon: TbServer, skills: ["Python", "Django", "FastAPI", "MySQL", "REST APIs", "RBAC Auth"] },
  { category: "Frontend Engineering", icon: TbLayoutDashboard, skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"] },
  { category: "Interactive & 3D", icon: TbDeviceGamepad2, skills: ["Unity", "C#", "Blender", "State Mechanics"] },
  { category: "DevOps & Tooling", icon: TbSettingsCode, skills: ["Docker", "Nginx", "Ubuntu / VPS", "Git", "Payment APIs", "AI-Assisted Workflows"] },
];

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    timeline: "Currently Pursuing",
    description: "Focusing on advanced software engineering principles, system architecture, and modern full-stack development methodologies."
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata",
    timeline: "2024",
    description: "CGPA: 8.13/10. Built a strong foundation in business operations, management strategy, and analytical thinking—providing a unique perspective on the business logic behind enterprise software."
  }
];

const hobbiesData = [
  {
    title: "Game Systems & Mechanics",
    icon: TbDeviceGamepad2,
    description: "I study gaming through an architect's lens—deconstructing state logic, resource economies, and 3D environments to fuel my own development in Unity and C#."
  },
  {
    title: "Visual & Narrative Arts",
    icon: TbMovie,
    description: "I draw inspiration from anime and cinema to craft immersive narratives and character evolution mechanics, ensuring my projects have depth and world-building."
  },
  {
    title: "Creative Precision",
    icon: TbChefHat,
    description: "From culinary arts to digital design, I value precision. These creative outlets sharpen my aesthetic judgment, directly improving the UI/UX polish of my web applications."
  },
  {
    title: "Systems & Global Exploration",
    icon: TbWorld,
    description: "Driven by curiosity, I explore the world and new languages (like Japanese) to continuously iterate on my knowledge base and broaden my perspective on how systems function."
  }
];

const languagesData = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Native / Bilingual" },
  { language: "Bengali", proficiency: "Native / Bilingual" },
  { language: "Japanese", proficiency: "Learning" }
];

const certificationsData = [
  {
    title: "Introduction to Back-End Development",
    provider: "Meta",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/87SUDH8K7DVP"
  },
  {
    title: "AI For Everyone",
    provider: "DeepLearning.AI",
    date: "2026",
    url: "https://www.coursera.org/account/accomplishments/certificate/30G7WVF7XUE0"
  },
  {
    title: "Data Analysis Using Python",
    provider: "University of Pennsylvania",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/9ZF6F9Z3MUKW"
  },
  {
    title: "Introduction to Git and GitHub",
    provider: "Google",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/UX8XC6HVSQU6"
  },
  {
    title: "Crash Course on Python",
    provider: "Google",
    date: "2022",
    url: "https://www.coursera.org/account/accomplishments/certificate/HUTNE43EM3MP"
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "IBM",
    date: "2023",
    description: "Foundational knowledge in identifying cyber threats, understanding attack vectors, and securing system environments.",
    url: "https://www.coursera.org/account/accomplishments/certificate/VAZPAMMY5XGS"
  }
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("skills");
  const BG_IMAGE_URL = "/images/bg/skills_bg.png";

  const tabs = [
    { id: "skills", label: "Skills", icon: TbCode },
    { id: "education", label: "Education", icon: TbSchool },
    { id: "certs", label: "Certifications", icon: TbCertificate },
    { id: "hobbies", label: "Off-Duty", icon: TbActivity },
    { id: "languages", label: "Languages", icon: TbMessageCircle },
  ];

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
        <div className="flex animate-[fadeIn_0.4s_ease-out] flex-col gap-4">
            {certificationsData.map((cert, idx) => (
            <div key={idx} className="group flex items-center justify-between border-b border-[var(--border-subtle)] py-5 last:border-0 last:pb-0">
                
                <div className="flex items-center gap-6">
                {/* Year Indicator */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--bg-hover)] font-sans text-[10px] font-bold text-[var(--accent-cyan)]">
                    {cert.date}
                </div>
                
                {/* Title and Provider */}
                <div className="flex flex-col">
                    <h3 className="font-serif text-[16px] font-medium text-[var(--foreground)]">
                    {cert.title}
                    </h3>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    {cert.provider}
                    </span>
                </div>
                </div>

                {/* Verification Link (Visible on hover) */}
                {cert.url && (
                <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden text-[10px] font-bold tracking-widest text-[var(--accent-blue)] uppercase transition-colors group-hover:block hover:text-[var(--accent-cyan)]"
                >
                    Verify
                </a>
                )}
            </div>
            ))}
        </div>
        )}
        </div>
      </div>
    </section>
  );
}