import {
  TbMusic,
  TbPhoto,
  TbPlayerPlay,
  TbExternalLink,
} from "react-icons/tb";

import { ShowcaseItem } from "./showcaseData";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  onClick: (item: ShowcaseItem) => void;
}

export default function ShowcaseCard({
  item,
  onClick,
}: ShowcaseCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case "image":
        return <TbPhoto />;

      case "video":
        return <TbPlayerPlay />;

      case "audio":
        return <TbMusic />;

      default:
        return <TbPhoto />;
    }
  };

  return (
    <article
      onClick={() => onClick(item)}
      className="
        group
        relative
        mb-8
        cursor-pointer
        break-inside-avoid
        overflow-hidden
        rounded-[var(--radius-lg)]
        border
        border-[var(--border-subtle)]
        bg-[var(--bg-glass)]
        backdrop-blur-[var(--blur-md)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--border-accent)]
        hover:shadow-[var(--shadow-glow-green)]
      "
    >
      {/* Ambient Glow */}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(191,0,255,.08), transparent 40%), radial-gradient(circle at bottom left, rgba(44,255,5,.08), transparent 60%)",
        }}
      />

      {/* Image */}

      <div className="relative isolate overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="
            aspect-[16/10]
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:brightness-110
            group-hover:contrast-105
            group-hover:saturate-110
          "
        />

        {/* Dark Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {/* Category */}

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-[var(--border-accent)]
            bg-black/50
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[var(--accent-primary)]
            backdrop-blur-md
          "
        >
          {item.category}
        </span>

        {/* Type */}

        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border-accent)]
            bg-black/50
            text-lg
            text-[var(--accent-primary)]
            backdrop-blur-md
          "
        >
          {getIcon()}
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 p-6">
        <h3
          className="
            font-serif
            text-2xl
            font-semibold
            text-[var(--foreground)]
            transition-colors
            duration-300
            group-hover:text-[var(--accent-primary)]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-4
            line-clamp-3
            text-[15px]
            leading-7
            text-[var(--text-muted)]
          "
        >
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[var(--text-muted)]
                transition-colors
                duration-300
                hover:text-[var(--accent-primary)]
              "
            >
              {item.linkText || "Visit"}

              <TbExternalLink size={16} />
            </a>
          ) : (
            <span />
          )}

          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-[var(--accent-soft)]
            "
          >
            View Details
          </span>
        </div>
      </div>
    </article>
  );
}