import Link from "next/link";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/portfolio/kino", label: "Кино" },
] as const;

export function PortfolioTabs({
  active,
  tone = "light",
}: {
  active: "portfolio" | "kino";
  tone?: "light" | "dark";
}) {
  return (
    <nav className="flex flex-wrap gap-3" aria-label="Разделы портфолио">
      {tabs.map((tab) => {
        const current = tab.href.endsWith("/kino") ? active === "kino" : active === "portfolio";
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "inline-flex h-11 items-center rounded-full px-6 text-sm tracking-wide transition",
              current
                ? "bg-signal text-white"
                : tone === "light"
                  ? "border border-white/30 text-white hover:bg-white/10"
                  : "border border-ink/15 text-ink hover:bg-ink/5",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
