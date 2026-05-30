"use client";

import { useState, useEffect } from "react";
import { TbHome, TbUser, TbTerminal2, TbLayoutGrid, TbMail, TbBrandLinkedin, TbChevronsLeft } from "react-icons/tb";

const NAV = [
  { label: "HOME",     href: "#home",     icon: TbHome },
  { label: "ABOUT",    href: "#about",    icon: TbUser },
  { label: "SKILLS",   href: "#profile",   icon: TbTerminal2 },
  { label: "PROJECTS", href: "#showcase", icon: TbLayoutGrid },
  { label: "CONTACT",  href: "#contact",  icon: TbMail },
];

const SOCIALS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [active, setActive] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const handler = (e: MediaQueryList | MediaQueryListEvent) => setCollapsed(e.matches);
    
    // Set initial state
    handler(mq);
    
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setCollapsed]);

  const handleNav = (label: string) => {
    setActive(label);
    setMobileOpen(false);
  };

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + window.innerHeight / 3;

    let currentSection = NAV[0].label;

    NAV.forEach((nav) => {
      const section = document.querySelector(
        nav.href
      ) as HTMLElement | null;

      if (!section) return;

      if (
        scrollPosition >= section.offsetTop
      ) {
        currentSection = nav.label;
      }
    });

    setActive(currentSection);
  };

  handleScroll();

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () => {
    window.removeEventListener(
      "scroll",
      handleScroll
    );
  };
}, []);

  return (
    <>
      {/* ── Mobile Hamburger ── */}
      <button
        className={`fixed top-4 left-4 z-[200] flex flex-col gap-1.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 p-2.5 backdrop-blur-xl sm:hidden ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className={`h-[1.5px] w-5 rounded-sm bg-[var(--accent-cyan)] transition-all duration-300 origin-center ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
        <span className={`h-[1.5px] w-5 rounded-sm bg-[var(--accent-cyan)] transition-all duration-300 origin-center ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`h-[1.5px] w-5 rounded-sm bg-[var(--accent-cyan)] transition-all duration-300 origin-center ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
      </button>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-[90] bg-[var(--background)]/80 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Sidebar ── */}
      <aside
        className={`
          group/sidebar flex flex-col fixed top-0 left-0 bottom-0 z-[100] 
          overflow-hidden border-r border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-xl 
          transition-all duration-300 ease-out max-sm:-translate-x-full 
          ${collapsed ? "is-collapsed w-[64px]" : "w-[240px]"} 
          ${mobileOpen ? "max-sm:translate-x-0 max-sm:w-[240px]" : ""}
        `}
      >
        {/* Sheen Effects */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-50 animate-pulse pointer-events-none" />
        <div className="absolute top-[8%] right-0 bottom-[8%] w-[1px] bg-gradient-to-b from-transparent via-[var(--accent-cyan)]/20 to-transparent pointer-events-none" />

        {/* ── Profile Block ── */}
        <div className="flex flex-col items-center gap-3 border-b border-[var(--border-subtle)] px-3 pt-7 pb-5 shrink-0 transition-all duration-300 overflow-hidden group-[.is-collapsed]/sidebar:pt-[18px] group-[.is-collapsed]/sidebar:pb-[14px]">
          <div className="relative shrink-0 w-[100px] h-[100px] transition-all duration-300 group-[.is-collapsed]/sidebar:w-[32px] group-[.is-collapsed]/sidebar:h-[32px]">
            <div className="absolute inset-[-4px] border border-[var(--border)] rounded-[2px] opacity-70 pointer-events-none transition-all duration-300 group-[.is-collapsed]/sidebar:inset-[-3px] [clip-path:polygon(0_0,10px_0,10px_1px,1px_1px,1px_10px,0_10px,0_100%,0_calc(100%-10px),1px_calc(100%-10px),1px_calc(100%-1px),10px_calc(100%-1px),10px_100%,100%_100%,calc(100%-10px)_100%,calc(100%-10px)_calc(100%-1px),calc(100%-1px)_calc(100%-1px),calc(100%-1px)_calc(100%-10px),100%_calc(100%-10px),100%_0,calc(100%-10px)_0,calc(100%-10px)_1px,calc(100%-1px)_1px,calc(100%-1px)_10px,100%_10px)]" />
            <img
                src="/images/sahil.png"
                alt="Sahil Samanta"
                className="
                    h-full
                    w-full
                    rounded-[2px]
                    object-cover
                "
            />
          </div>
          <div className="flex flex-col items-center gap-1 transition-all duration-300 max-h-[80px] opacity-100 group-[.is-collapsed]/sidebar:max-h-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:overflow-hidden">
            <div className="font-serif text-[13px] font-semibold tracking-wide text-[var(--foreground)] uppercase whitespace-nowrap">
                Sahil Samanta
            </div>

            <div className="font-mono text-[9px] tracking-widest text-[var(--text-faint)] whitespace-nowrap">
                SOFTWARE ENGINEER
            </div>
          </div>
        </div>

        <div
            className={`
                flex
                flex-col
                px-[28px]
                py-4
                transition-all
                duration-300
                overflow-hidden

                ${
                mobileOpen
                    ? ""
                    : "group-[.is-collapsed]/sidebar:px-0 group-[.is-collapsed]/sidebar:items-center"
                }
            `}
            >
            <div className="flex items-center">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-cyan)] animate-pulse" />

                <span
                className={`
                    ml-3
                    text-[10px]
                    tracking-[0.15em]
                    text-[var(--text-muted)]
                    whitespace-nowrap
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                    mobileOpen
                        ? "max-w-[200px] opacity-100"
                        : "max-w-[200px] opacity-100 group-[.is-collapsed]/sidebar:max-w-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:ml-0"
                    }
                `}
                >
                OPEN TO OPPORTUNITIES
                </span>
            </div>

            <span
                className={`
                mt-2
                text-[9px]
                tracking-[0.15em]
                text-[var(--accent-cyan)]
                whitespace-nowrap
                overflow-hidden
                transition-all
                duration-300

                ${
                    mobileOpen
                    ? "max-w-[200px] opacity-100"
                    : "max-w-[200px] opacity-100 group-[.is-collapsed]/sidebar:max-w-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:mt-0"
                }
                `}
            >
                2+ YEARS EXPERIENCE
            </span>
            </div>

        {/* ── Nav ── */}
        <nav className="flex flex-col flex-1 gap-1 px-3 py-2 overflow-hidden">
          {NAV.map((n) => {
            const isActive = active === n.label;
            const IconComponent = n.icon;
            return (
              <a
                    key={n.label}
                    href={n.href}
                    className={`
                    group/item
                    relative
                    flex
                    items-center
                    px-4
                    py-3
                    rounded-[4px]
                    cursor-pointer
                    border
                    transition-colors
                    duration-200

                    ${
                        mobileOpen
                        ? ""
                        : "group-[.is-collapsed]/sidebar:px-0 group-[.is-collapsed]/sidebar:justify-center"
                    }

                    ${
                        isActive
                        ? "border-[var(--border-subtle)] bg-[var(--bg-hover)]"
                        : "border-transparent hover:bg-[var(--bg-hover)]/50"
                    }
                `}
                onClick={(e) => {
                    e.preventDefault();

                    const section = document.querySelector(n.href);

                    if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                    }

                    handleNav(n.label);
                }}
              >
                <div className={`absolute left-0 top-[20%] bottom-[20%] w-[2px] rounded-r-[1px] bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-glow)] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
                <IconComponent className={`shrink-0 text-[18px] transition-colors duration-200 ${isActive ? "text-[var(--accent-cyan)]" : "text-[var(--text-muted)] group-hover/item:text-[var(--accent-cyan)]"}`} />
                <span
                    className={`
                        ml-4
                        font-sans
                        text-[11px]
                        font-medium
                        tracking-[0.15em]
                        whitespace-nowrap
                        overflow-hidden
                        transition-all
                        duration-300

                        ${
                        mobileOpen
                            ? "max-w-[200px] opacity-100"
                            : "max-w-[200px] opacity-100 group-[.is-collapsed]/sidebar:max-w-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:ml-0"
                        }

                        ${
                        isActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--text-muted)] group-hover/item:text-[var(--foreground)]"
                        }
                    `}
                    >
                    {n.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="h-[1px] shrink-0 bg-[var(--border-subtle)] mx-4 my-2" />

        {/* ── Socials ── */}
        <div className="flex flex-col shrink-0 gap-1 px-3 pb-3">
          {SOCIALS.map((s) => {
             const IconComponent = s.icon;
             return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative flex items-center px-4 py-[10px] rounded-[4px] cursor-pointer transition-colors duration-200 hover:bg-[var(--bg-hover)]/50 group-[.is-collapsed]/sidebar:px-0 group-[.is-collapsed]/sidebar:justify-center"
              >
                <IconComponent className="shrink-0 text-[18px] text-[var(--text-muted)] transition-colors duration-200 group-hover/social:text-[var(--accent-cyan)]" />
                <span className="ml-4 font-sans text-[10px] font-medium tracking-[0.14em] text-[var(--text-muted)] whitespace-nowrap overflow-hidden transition-all duration-300 max-w-[200px] opacity-100 group-[.is-collapsed]/sidebar:max-w-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:ml-0 group-hover/social:text-[var(--foreground)]">
                  {s.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* ── Collapse Toggle ── */}
        <button
          className="group/toggle flex items-center px-4 py-4 w-full shrink-0 border-t border-[var(--border-subtle)] cursor-pointer bg-transparent max-sm:hidden transition-colors hover:bg-[var(--bg-hover)] group-[.is-collapsed]/sidebar:px-0 group-[.is-collapsed]/sidebar:justify-center"
          onClick={() => setCollapsed((v) => !v)}
        >
          <TbChevronsLeft className={`shrink-0 ml-[3px] group-[.is-collapsed]/sidebar:ml-0 text-[18px] text-[var(--text-muted)] transition-all duration-300 group-hover/toggle:text-[var(--accent-cyan)] ${collapsed ? "rotate-180" : ""}`} />
          <span className="ml-[13px] font-sans text-[9px] font-semibold tracking-[0.2em] text-[var(--text-faint)] whitespace-nowrap overflow-hidden transition-all duration-300 max-w-[200px] opacity-100 group-[.is-collapsed]/sidebar:max-w-0 group-[.is-collapsed]/sidebar:opacity-0 group-[.is-collapsed]/sidebar:ml-0 group-hover/toggle:text-[var(--text-muted)]">
            COLLAPSE
          </span>
        </button>
      </aside>
    </>
  );
}