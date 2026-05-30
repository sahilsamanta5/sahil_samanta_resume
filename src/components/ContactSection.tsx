import {
  TbMail,
  TbBrandLinkedin,
  TbArrowRight,
} from "react-icons/tb";

export default function ContactSection() {
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
          Contact
        </span>

        <h2 className="mt-4 font-serif text-5xl text-[var(--foreground)]">
          The Journey Continues
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
            p-10
            backdrop-blur-sm
        "
        >
        {/* Glow */}

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent-glow)] blur-3xl" />

        <div className="relative z-10 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            If you're looking for a software engineer
            who enjoys building practical solutions,
            scalable systems, and meaningful digital
            experiences, I'd be glad to hear from you.
            </p>

            <p className="mt-6 text-[var(--text-muted)]">
            Currently available for software engineering
            opportunities, freelance projects, and
            technical collaborations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
                sahilsamanta5@gmail.com
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
                LinkedIn
            </a>
            </div>

            <div className="mt-12">
            <p className="font-serif text-2xl italic text-[var(--text-faint)]">
                Every project starts with a conversation.
            </p>
            </div>
        </div>
        </div>
    </section>
  );
}