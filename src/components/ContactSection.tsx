import {
  TbMail,
  TbBrandLinkedin,
  TbArrowRight,
} from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
    const { translation } = useLanguage()
  return (
    <section
        id="contact"
        className="
            relative
            overflow-hidden
            py-32
        "
    >
        {/* Background Image */}

        <div
        className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            bg-fixed
        "
        style={{
            backgroundImage:
            "url('/images/bg/contact_bg.png')",
        }}
        />

        {/* Dark Overlay */}

        <div
        className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(10,10,10,0.85),rgba(10,10,10,0.65),rgba(10,10,10,0.9))]
        "
        />

        {/* Cyan Overlay */}

        <div
        className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(61,214,200,0.08),transparent_70%)]
        "
        />
      <div className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
          {translation.contact.tagline}
        </span>

        <h2 className="mt-4 font-serif text-5xl text-[var(--foreground)]">
          {translation.contact.heading}
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-[var(--accent-cyan)]/40" />
      </div>

      <div
        className="
            relative
            mx-auto
            mt-16
            max-w-4xl
            overflow-hidden
            border
            border-[var(--border-subtle)]
            bg-[var(--bg-card)]/20
            px-5 py-8 sm:px-8 sm:py-10 lg:p-10
            backdrop-blur-sm
        "
        >
        {/* Glow */}

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--accent-glow)] blur-3xl" />

        <div className="relative z-10 text-center">
            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                {translation.contact.intro}
            </p>

            <p className="mt-6 text-[var(--text-muted)]">
                {translation.contact.availability}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
                href="mailto:sahilsamanta5@gmail.com"
                className="
                group
                flex
                items-center
                gap-3
                border
                border-[var(--accent-cyan)]/40
                px-6
                py-3
                text-[var(--foreground)]
                transition-all
                hover:border-[var(--accent-cyan)]
                hover:bg-[var(--accent-glow)]
                "
            >
                <TbMail />
                {translation.contact.cta.email}
            </a>

            <a
                href="https://www.linkedin.com/in/sahilsamanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex
                items-center
                gap-3
                border
                border-[var(--accent-cyan)]/40
                px-6
                py-3
                text-[var(--foreground)]
                transition-all
                hover:border-[var(--accent-cyan)]
                hover:bg-[var(--accent-glow)]
                "
            >
                <TbBrandLinkedin />
                {translation.contact.cta.linkedin}
            </a>
            </div>

            <div className="mt-12">
            <p className="font-serif text-xl sm:text-2xl italic text-[var(--text-faint)]">
                {translation.contact.quote}
            </p>
            </div>
        </div>
        </div>
    </section>
  );
}