"use client";

import {
  TbBrandPython,
  TbBrandReact,
  TbBrandDocker,
  TbBrandGithub,
  TbBrandAws,
  TbDatabase,
  TbServer,
  TbCode,
} from "react-icons/tb";

const stack = [
  {
    title: "Backend",
    icon: TbServer,
    items: ["Python", "Django", "FastAPI"],
  },
  {
    title: "Frontend",
    icon: TbCode,
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Database",
    icon: TbDatabase,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps",
    icon: TbBrandDocker,
    items: ["Docker", "AWS", "Git"],
  },
];

export default function HeroTechStack() {
  return (
    <div className="lg:col-span-8">
      <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8">

        {/* Heading */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-soft)]">
              Technology Stack
            </p>

            <h3 className="mt-2 font-display text-3xl text-[var(--foreground)]">
              Top Tech Stacks Used
            </h3>

          </div>

          <TbBrandPython
            size={34}
            className="text-[var(--accent-secondary)]"
          />

        </div>

        {/* Categories */}

        <div className="grid gap-5 sm:grid-cols-2">

          {stack.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition duration-300 hover:border-[var(--accent-secondary)]"
              >
                <div className="mb-4 flex items-center gap-3">

                  <Icon
                    size={20}
                    className="text-[var(--accent-secondary)]"
                  />

                  <h4 className="font-semibold text-[var(--foreground)]">
                    {category.title}
                  </h4>

                </div>

                <div className="flex flex-wrap gap-2">

                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--background)] px-3 py-1 text-sm text-[var(--text-muted)]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}