"use client";

import Link from "next/link";
import { useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { useLanguage } from "@/src/context/LanguageContext";

export default function MobileSocial() {
  const { translation } = useLanguage();

  const socials = translation.header.nav[1];

  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        fixed
        right-0
        top-1/2
        z-[999]
        -translate-y-1/2
        xl:hidden
      "
    >
      <div className="relative flex items-center">

        {/* Sliding Panel */}

        <div
          className={`
            absolute
            right-full
            mr-3

            transition-all
            duration-300
            ease-out

            ${
              open
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0 pointer-events-none"
            }
          `}
        >
          <div
            className="
              rounded-[var(--radius-xl)]
              border
              border-[var(--border-accent)]
              bg-[var(--bg-glass)]
              p-3
              backdrop-blur-[var(--blur-lg)]
              shadow-[var(--shadow-lg)]
            "
          >
            <div className="flex flex-col gap-2">
              {socials.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-full
                      px-4
                      py-3
                      transition-all
                      duration-300

                      hover:bg-[var(--bg-hover)]
                    "
                  >
                    <Icon
                      className="
                        text-xl
                        text-[var(--accent-primary)]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-sm
                        text-[var(--foreground)]
                      "
                    >
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vertical Button */}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="
            group
            relative

            overflow-hidden

            rounded-l-2xl

            border
            border-r-0
            border-[var(--border-accent)]

            bg-[var(--bg-glass)]

            px-3
            py-5

            backdrop-blur-[var(--blur-lg)]

            shadow-[var(--shadow-lg)]
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              opacity-20
            "
            style={{
              background: `
                radial-gradient(circle at top,
                rgba(44,255,5,.12),
                transparent 55%),

                radial-gradient(circle at bottom,
                rgba(191,0,255,.12),
                transparent 55%)
              `,
            }}
          />

          <div
            className="
              relative
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <TbChevronLeft
              className={`
                text-lg
                text-[var(--accent-primary)]
                transition-transform
                duration-300

                ${open ? "rotate-180" : ""}
              `}
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[var(--foreground)]

                [writing-mode:vertical-rl]
                [text-orientation:mixed]
              "
            >
              {socials.title}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}