import { TbX, TbExternalLink } from "react-icons/tb";
import { ShowcaseItem } from "./showcaseData";

interface MediaModalProps {
  item: ShowcaseItem | null;
  onClose: () => void;
}

export default function MediaModal({
  item,
  onClose,
}: MediaModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-6xl
          max-h-[92vh]
          overflow-hidden
          rounded-[var(--radius-xl)]
          border
          border-[var(--border-accent)]
          bg-[var(--bg-glass)]
          backdrop-blur-[var(--blur-lg)]
          shadow-[var(--shadow-lg)]
        "
      >
        {/* Ambient Glow */}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(191,0,255,.08), transparent 40%), radial-gradient(circle at bottom left, rgba(44,255,5,.08), transparent 55%)",
          }}
        />

        {/* Header */}

        <div className="relative z-10 flex items-start justify-between border-b border-[var(--border-subtle)] px-8 py-6">

          <div className="max-w-3xl">

            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent-primary)]">
              {item.category}
            </span>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-[var(--foreground)]">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {item.description}
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border-subtle)]
              text-xl
              text-[var(--text-muted)]
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-hover)]
              hover:text-[var(--accent-primary)]
            "
          >
            <TbX />
          </button>

        </div>

        {/* Media */}

        <div className="relative z-10 flex max-h-[65vh] items-center justify-center overflow-auto p-8 no-scrollbar">

          {item.type === "image" && (
            <img
              src={item.source}
              alt={item.title}
              className="max-h-[65vh] rounded-[var(--radius-lg)] object-contain"
            />
          )}

          {item.type === "video" && (
            <video
              controls
              autoPlay
              className="max-h-[65vh] w-full rounded-[var(--radius-lg)]"
            >
              <source src={item.source} />
            </video>
          )}

          {item.type === "audio" && (
            <div className="w-full max-w-lg text-center">

              <img
                src={item.thumbnail}
                alt={item.title}
                className="mx-auto h-72 w-72 rounded-full border border-[var(--border-accent)] object-cover shadow-[var(--shadow-glow-green)]"
              />

              <audio
                controls
                className="mt-8 w-full"
              >
                <source src={item.source} />
              </audio>

            </div>
          )}

        </div>

        {/* Footer */}

        {item.link && (
          <div className="relative z-10 flex justify-end border-t border-[var(--border-subtle)] p-6">

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border-accent)]
                bg-[var(--accent-primary)]
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:shadow-[var(--shadow-glow-green)]
              "
            >
              <TbExternalLink />

              {item.linkText || "Visit Project"}
            </a>

          </div>
        )}

      </div>
    </div>
  );
}