"use client";

import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

export interface ProjectProps {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  mediaType: "image" | "video";
  mediaSrc: string;
  url?: string;
  reversed?: boolean;
}

export default function ProjectCard({
  title,
  role,
  description,
  techStack,
  mediaType,
  mediaSrc,
  url,
  reversed = false,
}: ProjectProps) {
  return (
    <div 
      className={`group flex flex-col gap-8 lg:items-center lg:justify-between ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      
      {/* ── MEDIA SECTION ── */}
      <div className="relative w-full lg:w-[50%] aspect-video overflow-hidden rounded-[2px] border border-[var(--border-subtle)] bg-[var(--bg-hover)] shadow-2xl transition-all duration-500 group-hover:border-[var(--accent-cyan)]/30 group-hover:shadow-[0_0_40px_rgba(61,214,200,0.05)]">
        
        {/* Geometric Corner Accents */}
        <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[var(--accent-cyan)]/50 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[var(--accent-cyan)]/50 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {mediaType === "video" ? (
          <>
            {/* Blurred Background Layer for Video */}
            <video
              src={mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 z-0 h-full w-full scale-110 object-cover blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
            />
            {/* Crisp Foreground Layer for Video */}
            <video
              src={mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 z-10 h-full w-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
          </>
        ) : (
          <>
            {/* Blurred Background Layer for Image */}
            <Image
              src={mediaSrc}
              alt={`${title} background blur`}
              fill
              className="z-0 scale-110 object-cover blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
            />
            {/* Crisp Foreground Layer for Image */}
            <Image
              src={mediaSrc}
              alt={title}
              fill
              className="z-10 object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
          </>
        )}
        
        {/* Hover Overlay Glow */}
        <div className="absolute inset-0 z-20 bg-[var(--accent-cyan)] mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
      </div>

      {/* ── CONTENT SECTION ── */}
      <div className="flex w-full flex-col items-start lg:w-[45%]">
        
        <div className="mb-4 flex items-center gap-3">
          <div className="h-[1px] w-6 bg-[var(--accent-blue)]" />
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[var(--accent-blue)] uppercase">
            {role}
          </span>
        </div>

        <h3 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h3>

        <p className="mb-8 font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px]">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 px-4 py-1.5 font-sans text-[11px] font-medium tracking-wide text-[var(--text-faint)] backdrop-blur-sm transition-colors group-hover:border-[var(--border)] group-hover:text-[var(--foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {url && (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center gap-3 overflow-hidden rounded-[2px] border border-[var(--accent-cyan)]/40 px-6 py-3 font-sans text-[11px] font-bold tracking-[0.15em] text-[var(--accent-cyan)] transition-all duration-300 hover:border-[var(--accent-cyan)] uppercase"
            >
                <span className="relative z-20 transition-colors duration-300 group-hover/btn:text-[var(--bg-surface)]">
                View Project
                </span>

                <TbExternalLink
                className="relative z-20 text-lg transition-all duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-[var(--bg-surface)]"
                />

                <div className="absolute inset-0 z-10 h-full w-0 bg-[var(--accent-cyan)] transition-all duration-300 ease-out group-hover/btn:w-full" />
            </a>
        )}

      </div>
    </div>
  );
}