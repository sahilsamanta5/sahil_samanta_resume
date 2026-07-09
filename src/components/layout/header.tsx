"use client";

import { useState } from "react";
import { TbBrandDiscord, TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandX, TbBriefcase2, TbChevronLeft, TbCode, TbHome2, TbLayoutGrid, TbMail, TbUser } from "react-icons/tb";
import SidebarHead from "./Sidebar/SidebarHead";
import SidebarNavigations from "./Sidebar/SidebarNavigations";
import { title } from "process";

export default function Sidebar() {

    const [collapsed, setCollapsed] = useState(true);

    const navigationItems = [
      {
          title: "Home",
          href: "#home",
          icon: TbHome2,
      },
      {
          title: "Skills",
          href: "#skills",
          icon: TbCode,
      },
      {
          title: "About",
          href: "#about",
          icon: TbUser,
      },
      {
          title: "Experience",
          href: "#experience",
          icon: TbBriefcase2,
      },
      {
          title: "Projects",
          href: "#showcase",
          icon: TbLayoutGrid,
      },
      {
          title: "Contact",
          href: "#contact",
          icon: TbMail,
      },
  ];

  const socialItems = [
    {
      title: "Github",
      href: "https://github.com/sahilsamanta5",
      icon: TbBrandGithub
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/sahilsamanta/",
      icon: TbBrandLinkedin
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/developersahilsamanta/",
      icon: TbBrandInstagram
    },
    {
      title: "Twitter / X",
      href: "https://x.com/Sahilsamanta1",
      icon: TbBrandX
    },
    {
      title: "Discord",
      href: "https://discord.com/users/324505079837229059",
      icon: TbBrandDiscord
    },
  ];


    return (

        <aside
            className={`
                hidden
                xl:flex

                sticky
                top-0

                h-screen
                shrink-0

                flex-col

                overflow-hidden

                border-r
                border-[var(--border-subtle)]

                bg-[var(--bg-card)]
                backdrop-blur-2xl

                transition-[width]
                duration-300
                ease-[cubic-bezier(.22,1,.36,1)]

                overflow-hidden

                ${
                    collapsed
                        ? "w-[84px]"
                        : "w-[288px]"
                }
            `}
        >

            {/* Background */}

            <div className="pointer-events-none absolute inset-0">

                <div
                  className="
                      absolute
                      -right-28
                      top-[-80px]

                      h-64
                      w-64

                      rounded-full

                      bg-[var(--accent-primary)]
                      opacity-[0.025]

                      blur-[140px]
                  "
              />

              <div
                  className="
                      absolute
                      -left-24
                      bottom-[-60px]

                      h-56
                      w-56

                      rounded-full

                      bg-[var(--accent-secondary)]
                      opacity-[0.02]

                      blur-[130px]
                  "
              />

            </div>

            <div className="relative z-10 flex h-full flex-col overflow-hidden">

                {/* Profile */}
                <SidebarHead collapsed={collapsed} />

                <div className="flex-1 overflow-y-auto no-scrollbar">

                    <SidebarNavigations
                        title="Navigations"
                        collapsed={collapsed}
                        navigationItems={navigationItems}
                    />

                    <SidebarNavigations
                        title="Connect"
                        collapsed={collapsed}
                        navigationItems={socialItems}
                    />

                </div>

                <div className="border-t border-white/5 p-5">
                    <button
                      type="button"
                      onClick={() => setCollapsed(!collapsed)}
                      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                      className={`
                          group

                          flex
                          items-center
                          justify-center

                          overflow-hidden

                          transition-all
                          duration-300
                          ease-out

                          ${
                              collapsed
                                  ? "mx-auto h-10 w-10 rounded-full"
                                  : "h-12 w-full rounded-full gap-1 px-2"
                          }

                          bg-[var(--accent-secondary)]
                          text-white

                          shadow-lg

                          hover:bg-[var(--accent-primary)]
                          hover:text-black
                          hover:shadow-[0_0_28px_rgba(44,255,5,.22)]

                          active:scale-[0.98]
                      `}
                  >

                      <TbChevronLeft
                          size={collapsed ? 30 : 24}
                          className={`
                              shrink-0
                              transition-all
                              duration-300

                              ${
                                  collapsed
                                      ? "rotate-180"
                                      : ""
                              }
                          `}
                      />

                      {!collapsed && (
                          <span
                              className="
                                  text-base
                                  font-semibold
                                  tracking-tight
                                  transition-colors
                                  duration-300
                              "
                          >
                              Collapse Menu
                          </span>

                      )}

                  </button>

                </div>
            </div>

        </aside>

    );

}