"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function MobileHeader() {
  const { translation } = useLanguage();

  const navItems = useMemo(
    () => translation.header.nav[0].items,
    [translation]
  );

  const leftItems = navItems.slice(1, 3);
  const homeItem = navItems[0];
  const rightItems = navItems.slice(3);

  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;

        if (!section) return;

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          current = item.href;
        }
      });

      setActive((prev) => (prev === current ? prev : current));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleClick = (href: string) => {
    const section = document.querySelector(href) as HTMLElement;

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 40,
      behavior: "smooth",
    });
  };

  const renderButton = (
    item: (typeof navItems)[number],
    isHome = false
  ) => {
    const Icon = item.icon;
    const isActive = active === item.href;

    return (
      <button
        key={item.href}
        onClick={() => handleClick(item.href)}
        aria-label={item.title}
        className={`group relative flex items-center justify-center transition-all duration-300
        ${
          isHome
            ? `
              -mt-8
              mx-2
              h-16
              w-16
              rounded-full
              bg-[var(--accent-primary)]
              text-[var(--background)]
              shadow-[var(--shadow-glow-green)]
              ${
                isActive
                  ? "ring-2 ring-[var(--accent-secondary)]"
                  : ""
              }
            `
            : `
              h-11
              w-11
              rounded-full
              ${
                isActive
                  ? `
                    bg-[var(--bg-hover)]
                    text-[var(--accent-primary)]
                  `
                  : `
                    text-[var(--text-muted)]
                    hover:bg-[var(--bg-hover)]
                    hover:text-[var(--accent-primary)]
                  `
              }
            `
        }`}
      >
        <Icon
          className={`transition-transform duration-300 ${
            isHome ? "text-2xl" : "text-xl"
          } group-hover:scale-110`}
        />

        {!isHome && isActive && (
          <span
            className="
              absolute
              -bottom-1
              h-1.5
              w-1.5
              rounded-full
              bg-[var(--accent-primary)]
              shadow-[var(--shadow-glow-green)]
            "
          />
        )}
      </button>
    );
  };

  return (
    <nav
      className="
        fixed
        bottom-5
        left-1/2
        z-[999]
        -translate-x-1/2
        xl:hidden
      "
    >
      <div
        className="
          relative
          flex
          items-center
          gap-2
          rounded-full
          border
          border-[var(--border-accent)]
          bg-[var(--bg-glass)]
          px-3
          py-3
          backdrop-blur-[var(--blur-lg)]
          shadow-[var(--shadow-lg)]
        "
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at left,
                rgba(44,255,5,.08),
                transparent 45%),
              radial-gradient(circle at right,
                rgba(191,0,255,.08),
                transparent 45%)
            `,
          }}
        />

        {leftItems.map((item) => renderButton(item))}

        {renderButton(homeItem, true)}

        {rightItems.map((item) => renderButton(item))}
      </div>
    </nav>
  );
}