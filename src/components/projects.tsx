import { useMemo, useState } from "react";

import MediaModal from "./showcase/MediaModal";
import ShowcaseCard from "./showcase/ShowcaseCard";

import {
  ShowcaseItem,
} from "./showcase/showcaseData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "@/src/translations";

export default function ShowcaseSection() {
  const [activeFilter, setActiveFilter] =
    useState("Featured");

  const [selectedItem, setSelectedItem] =
    useState<ShowcaseItem | null>(null);

  const { translation } = useLanguage();

  const filteredItems = useMemo(() => {
    switch (activeFilter) {
      case "Featured":
        return translation.project.projects.filter((item) => item.featured);

      case "All":
        return translation.project.projects;

      default:
        return translation.project.projects.filter(
          (item) => item.category === activeFilter
        );
    }
  }, [activeFilter, translation.project.projects]);

  return (
    <>
      <section
        id="showcase"
        className="relative mx-auto max-w-7xl px-6 py-24"
      >
        {/* Header */}

        <div className="mb-12 text-center">
          <span
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.3em]
              text-[var(--accent-soft)]
            "
          >
            {translation.project.title}
          </span>

          <h2
            className="
              mt-4
              font-serif
              text-5xl
              text-[var(--foreground)]
            "
          >
            {translation.project.subtitle}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[var(--text-muted)]
            "
          >
            {translation.project.para}
          </p>

          <div className="mx-auto mt-5 h-px w-24 bg-[var(--accent-soft)] shadow-[var(--shadow-glow-green)]" />
        </div>

        {/* Filters */}

        <div
          className="
            mb-10
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          <div className="mb-1 flex flex-wrap justify-center gap-3">
              {translations.en.project.filters.map((filter, idx) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    group
                    rounded-full
                    border
                    px-6
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    ${
                      activeFilter === filter
                        ? `
                          border-[var(--border-accent)]
                          bg-[var(--accent-primary)]
                          text-[var(--background)]
                          shadow-[var(--shadow-glow-green)]
                        `
                        : `
                          border-[var(--border-subtle)]
                          bg-[var(--bg-surface)]
                          text-[var(--text-muted)]
                          hover:border-[var(--border-accent)]
                          hover:text-[var(--accent-primary)]
                          hover:bg-[var(--bg-hover)]
                        `
                    }
                  `}
                >
                  {translation.project.filters[idx]}
                </button>
              ))}
            </div>
        </div>

        {/* Masonry Grid */}

        <div
          className="
            columns-1
            gap-6
            md:columns-2
            xl:columns-3
          "
        >
          {filteredItems.map((item) => (
            <ShowcaseCard
              key={item.id}
              item={item}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </section>

      {/* Modal */}

      <MediaModal
        item={selectedItem}
        onClose={() =>
          setSelectedItem(null)
        }
      />
    </>
  );
}