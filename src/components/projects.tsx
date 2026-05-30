import { useMemo, useState } from "react";

import MediaModal from "./showcase/MediaModal";
import ShowcaseCard from "./showcase/ShowcaseCard";

import {
  showcaseData,
  filters,
  ShowcaseItem,
} from "./showcase/showcaseData";

export default function ShowcaseSection() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const [selectedItem, setSelectedItem] =
    useState<ShowcaseItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return showcaseData;
    }

    return showcaseData.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <section
        id="showcase"
        className="relative mx-auto max-w-7xl px-6 py-28"
      >
        {/* Header */}

        <div className="mb-16 text-center">
          <span
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.3em]
              text-[var(--accent-cyan)]
            "
          >
            Showcase
          </span>

          <h2
            className="
              mt-4
              font-serif
              text-5xl
              text-[var(--foreground)]
            "
          >
            Work & Passions
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[var(--text-muted)]
            "
          >
            Software Engineering • AI • Music •
            Creativity • Certificates
          </p>

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[var(--accent-cyan)]/40
            "
          />
        </div>

        {/* Filters */}

        <div
          className="
            mb-12
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
                border
                px-5
                py-2
                text-[11px]
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300

                ${
                  activeFilter === filter
                    ? "border-[var(--accent-cyan)] bg-[var(--accent-glow)] text-[var(--accent-cyan)]"
                    : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-cyan)]/40 hover:text-[var(--foreground)]"
                }
              `}
            >
              {filter}
            </button>
          ))}
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