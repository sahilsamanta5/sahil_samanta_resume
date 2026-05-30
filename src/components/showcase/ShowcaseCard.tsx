import {
  TbFileText,
  TbMusic,
  TbPhoto,
  TbPlayerPlay,
  TbBrandGithub,
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
    <div
      onClick={() => onClick(item)}
      className="
        group
        mb-6
        cursor-pointer
        break-inside-avoid
        overflow-hidden
        border
        border-[var(--border-subtle)]
        bg-[var(--bg-card)]/30
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-[var(--accent-cyan)]/50
        hover:shadow-[0_0_30px_rgba(61,214,200,0.08)]
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="
            aspect-[16/10]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
          "
        />

        {/* Type Badge */}

        <div
          className="
            absolute
            right-3
            top-3
            flex
            items-center
            gap-2
            border
            border-[var(--border-subtle)]
            bg-black/60
            px-3
            py-1
            text-sm
            text-[var(--accent-cyan)]
            backdrop-blur-md
          "
        >
          {getIcon()}
        </div>

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4
            bg-black/50
            px-3
            py-1
            font-mono
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[var(--accent-cyan)]
            backdrop-blur-sm
          "
        >
          {item.category}
        </div>
      </div>

      {/* Content */}

      <div className="p-5">
        <h3
          className="
            font-serif
            text-2xl
            text-[var(--foreground)]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3
            line-clamp-2
            min-h-[3rem]
            text-sm
            leading-relaxed
            text-[var(--text-muted)]
          "
        >
          {item.description}
        </p>

        <div className="mt-4 min-h-[24px]">
          {item.link && (
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
                text-[var(--text-muted)]
                transition-colors
                hover:text-[var(--accent-cyan)]
              "
            >
              <TbExternalLink />
              {item.linkText || "Visit"}
            </a>
          )}
      </div>
      </div>
    </div>
  );
}