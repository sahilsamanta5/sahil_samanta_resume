"use client";

import HeroLeft from "./hero/hero_left";
import HeroCharacter from "./hero/hero_character";
import HeroStats from "./hero/hero_stats";
import HeroTechStack from "./hero/hero_tech";
import HeroStatsContainer from "./hero/hero_stats_container";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[var(--background)] px-5 py-24 sm:px-8 lg:px-12 xl:px-20 2xl:px-24"
        >
            {/* ================= Background ================= */}

            <div className="absolute inset-0 bg-[var(--background)]" />

            <div className="absolute inset-0">

                <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-[var(--accent-primary)]/5 blur-[220px]" />

                <div className="absolute -right-40 bottom-0 h-[650px] w-[650px] rounded-full bg-[var(--accent-secondary)]/5 blur-[220px]" />

            </div>

            {/* Grid Pattern */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.015]">

                <svg width="100%" height="100%">

                    <defs>

                        <pattern
                            id="hero-grid"
                            width="64"
                            height="64"
                            patternUnits="userSpaceOnUse"
                        >

                            <path
                                d="M64 0 L0 0 0 64"
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="1"
                            />

                        </pattern>

                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#hero-grid)"
                    />

                </svg>

            </div>

            {/* ================= Hero Content ================= */}

            <div className="relative z-10 mx-auto max-w-[1500px]">

                <div className="grid gap-6 lg:grid-cols-12">

                    {/* Main Hero */}
                    <HeroLeft />

                    {/* Character */}
                    <HeroCharacter />

                    {/* Technology */}
                    <HeroTechStack />

                    {/* Stats */}
                    <HeroStatsContainer />

                </div>

            </div>
        </section>
    );
}