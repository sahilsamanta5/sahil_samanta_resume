export function scrollToInternalSection(
    target: string,
    options?: ScrollIntoViewOptions
): boolean {

    if (typeof window === "undefined") {
        return false;
    }

    const id = target.startsWith("#")
        ? target.slice(1)
        : target;

    const section = document.getElementById(id);

    if (!section) {
        return false;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        ...options,
    });

    return true;
}