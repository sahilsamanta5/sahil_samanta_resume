"use client";

import { useEffect, useState } from "react";

import { IconType } from "react-icons";

export interface NavigationItem {
    title: string;
    href: string;
    icon: IconType;
}

interface SidebarNavigationsProps {
    title: string;
    collapsed: boolean;
    navigationItems: NavigationItem[];
}
export default function SidebarNavigations({
    title,
    collapsed,
    navigationItems,
}: SidebarNavigationsProps) {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            let current = "";

            navigationItems.forEach((item) => {
                if (!item.href.startsWith("#")) return;

                const section = document.querySelector(item.href);

                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= 140 && rect.bottom >= 140) {
                    current = item.href;
                }
            });

            setActiveSection(current);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navigationItems]);

    return (
        <nav className="flex-1 px-4 py-6">

            <div>
                {!collapsed && (
                    <p
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]

                            text-[var(--accent-secondary)]
                            px-2 pb-6
                        "
                    >
                        {title}
                    </p>
                )}
            </div>

            <ul className="space-y-2">

                {navigationItems.map((item) => {

                    const Icon = item.icon;

                    return (

                        <li key={item.title}>

                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (!item.href.startsWith("#")) return;

                                    e.preventDefault();

                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className={`
                                    group

                                    flex
                                    items-center

                                    ${
                                        collapsed
                                            ? "justify-center"
                                            : "gap-4 px-4"
                                    }

                                    h-14

                                    rounded-xl

                                    transition-all
                                    duration-300

                                    ${
                                        activeSection === item.href
                                            ? "bg-[var(--bg-surface)] text-[var(--foreground)]"
                                            : "text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--foreground)]"
                                    }
                                `}
                            >

                                <Icon
                                    size={22}
                                    className={`
                                        shrink-0
                                        transition-colors
                                        duration-300

                                        ${
                                            activeSection === item.href
                                                ? "text-[var(--accent-primary)]"
                                                : "group-hover:text-[var(--accent-primary)]"
                                        }
                                    `}
                                />

                                {!collapsed && (

                                    <span
                                        className={`
                                            text-[15px]
                                            font-semibold
                                            transition-colors
                                            duration-300

                                            ${
                                                activeSection === item.href
                                                    ? "text-[var(--foreground)]"
                                                    : "group-hover:text-[var(--accent-primary)]"
                                            }
                                        `}
                                    >
                                        {item.title}
                                    </span>

                                )}

                            </a>

                        </li>

                    );

                })}

            </ul>

        </nav>
    );
}