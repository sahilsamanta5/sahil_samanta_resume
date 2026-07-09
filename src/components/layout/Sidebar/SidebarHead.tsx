"use client";

import { useLanguage } from "@/src/context/LanguageContext";

interface SidebarHeadProps {
    collapsed: boolean;
}

export default function SidebarHead({ collapsed }: SidebarHeadProps) {
    const { translation } = useLanguage();

    if (collapsed) {
        return (
            <div className="flex flex-col justify-center items-center gap-3 px-4 py-6 mt-6">
                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center

                        rounded-xl

                        border border-[var(--border-subtle)] bg-[var(--bg-surface)]

                        shadow-md
                    "
                >
                    <span
                        className="
                            font-display
                            text-xl
                            font-bold

                            text-[var(--accent-secondary)]
                        "
                    >
                        SS
                    </span>
                </div>
                <div>
                    <p
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]

                            text-[var(--accent-primary)]
                        "
                    >
                        SDE
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 px-6 py-8 mt-6">

            {/* Status */}
            <div>
                <span
                    className="
                        inline-flex
                        items-center

                        rounded-full

                        rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]
                        px-6
                        py-2
                        gap-3

                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.14em]

                        text-[var(--accent-secondary)]
                    "
                >
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)]" />
                    {translation.header.availability}
                </span>
            </div>

            {/* Name */}
            <div>
                <h2
                    className="
                        text-3xl
                        font-display
                        font-bold
                        leading-none

                        text-[var(--foreground)]
                    "
                >
                    {translation.header.name}
                </h2>
            </div>

            {/* Role */}
            <div>
                <p
                    className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]

                        text-[var(--accent-primary)]
                    "
                >
                    {translation.header.position}
                </p>
            </div>

        </div>
    );
}