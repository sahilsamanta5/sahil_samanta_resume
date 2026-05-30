import { TbX, TbBrandGithub, TbExternalLink } from "react-icons/tb";
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
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-6xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-6 py-4">
          <div>
            <h3 className="font-serif text-2xl text-[var(--foreground)]">
              {item.title}
            </h3>

            <p className="text-sm text-[var(--text-muted)]">
              {item.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <TbX />
          </button>
        </div>

        {/* Content */}

        <div className="flex max-h-[80vh] items-center justify-center overflow-auto p-6">
          {/* IMAGE */}

          {item.type === "image" && (
            <img
              src={item.source}
              alt={item.title}
              className="max-h-[80vh] w-auto object-contain"
            />
          )}

          {/* VIDEO */}

          {item.type === "video" && (
            <video
              controls
              autoPlay
              className="max-h-[80vh] w-full"
            >
              <source src={item.source} />
            </video>
          )}

          {/* AUDIO */}

          {item.type === "audio" && (
            <div className="w-full max-w-2xl text-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="mx-auto mb-8 h-72 w-72 rounded-lg object-cover"
              />

              <audio controls className="w-full">
                <source src={item.source} />
              </audio>
            </div>
          )}

          {/* PDF */}
        </div>

        {/* Footer */}

        {(item.link ) && (
          <div className="flex justify-end gap-3 border-t border-[var(--border-subtle)] p-4">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-muted)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
              >
                <TbExternalLink />
                {item.linkText || "Visit"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}