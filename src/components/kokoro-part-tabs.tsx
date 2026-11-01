import Link from "next/link";
import { cn } from "@/lib/utils";

const parts = [
  { id: 1, href: "/portfolio/kokoro", label: "Первая часть" },
  { id: 2, href: "/portfolio/kokoro/2", label: "Вторая часть" },
] as const;

export function KokoroPartTabs({ active }: { active: 1 | 2 }) {
  return (
    <nav className="flex flex-wrap gap-3" aria-label="Части серии «В поисках Кокоро»">
      {parts.map((part) => {
        const current = part.id === active;
        return (
          <Link
            key={part.href}
            href={part.href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "inline-flex h-11 items-center rounded-full px-6 text-sm tracking-wide transition",
              current ? "bg-white text-ink" : "border border-white/30 text-white hover:bg-white/10",
            )}
          >
            {part.label}
          </Link>
        );
      })}
    </nav>
  );
}
