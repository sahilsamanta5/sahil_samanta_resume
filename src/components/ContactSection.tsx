"use client";

import {
  TbMail,
  TbBrandLinkedin,
  TbMapPin,
  TbArrowUpRight,
} from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { translation } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${
            translation.background.contact ||
            "/images/bg/contact_bg.png"
          })`,
        }}
      />

      {/* Dark Overlay */}

      <div
        className="absolute inset-0"
        style={{
            background:
            "linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.20), rgba(0,0,0,.55))",
        }}
        />

      {/* Ambient Gradient */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left,
            rgba(44,255,5,.08),
            transparent 40%),

            radial-gradient(circle at bottom right,
            rgba(191,0,255,.10),
            transparent 55%)
          `,
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-primary)]">
            {translation.contact.tagline}
          </span>

          <h2 className="mt-5 font-serif text-5xl font-semibold text-[var(--foreground)]">
            {translation.contact.heading}
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent-primary)] shadow-[var(--shadow-glow-green)]" />

        </div>

        {/* Contact Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[var(--radius-xl)]
            border
            border-[var(--border-subtle)]
            bg-[var(--bg-glass)]
            backdrop-blur-[var(--blur-lg)]
            p-10
          "
        >
          {/* Ambient Glow */}

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent-secondary)] opacity-10 blur-[140px]" />

          <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[var(--accent-primary)] opacity-10 blur-[140px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h3 className="font-serif text-3xl text-[var(--foreground)]">
                {translation.contact.heading}
              </h3>

              <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
                {translation.contact.intro}
              </p>

              <p className="mt-8 text-[var(--text-faint)]">
                {translation.contact.availability}
              </p>

              <div className="mt-12 h-px w-20 bg-[var(--accent-primary)]" />

              <p className="mt-8 font-serif text-2xl italic leading-relaxed text-[var(--accent-primary)]">
                "{translation.contact.quote}"
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <a
                href="mailto:sahilsamanta5@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-[var(--radius-lg)]
                  border
                  border-[var(--border-subtle)]
                  bg-[var(--bg-surface)]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[var(--border-accent)]
                  hover:shadow-[var(--shadow-glow-green)]
                "
              >
                <div className="flex items-center gap-4">
                  <TbMail className="text-2xl text-[var(--accent-primary)]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
                      Email
                    </p>

                    <p className="text-[var(--foreground)]">
                      {translation.contact.cta.email}
                    </p>
                  </div>
                </div>

                <TbArrowUpRight className="text-xl text-[var(--accent-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/sahilsamanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-[var(--radius-lg)]
                  border
                  border-[var(--border-subtle)]
                  bg-[var(--bg-surface)]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[var(--border-accent)]
                  hover:shadow-[var(--shadow-glow-green)]
                "
              >
                <div className="flex items-center gap-4">
                  <TbBrandLinkedin className="text-2xl text-[var(--accent-primary)]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
                      LinkedIn
                    </p>

                    <p className="text-[var(--foreground)]">
                      {translation.contact.cta.linkedin}
                    </p>
                  </div>
                </div>

                <TbArrowUpRight className="text-xl text-[var(--accent-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-[var(--radius-lg)]
                  border
                  border-[var(--border-subtle)]
                  bg-[var(--bg-surface)]
                  p-5
                "
              >
                <TbMapPin className="text-2xl text-[var(--accent-primary)]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
                    Location
                  </p>

                  <p className="text-[var(--foreground)]">
                    Kolkata, India
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}