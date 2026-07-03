import { useEffect, useState } from "react";

interface RotatingStatProps {
  stats: string[];
}

export const RotatingStat = ({ stats }: RotatingStatProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % stats.length);
    }, 2500);

    return () => clearInterval(id);
  }, [stats]);

  return (
    <span className="text-[var(--accent-cyan)]">
      {stats[index]}
    </span>
  );
};