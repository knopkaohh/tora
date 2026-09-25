"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogos } from "@/components/brand-logos";
import { TrialButton } from "@/components/trial-button";
import { nav, phoneDisplay, phoneTel } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid ? "bg-canvas/92 text-ink shadow-[0_1px_0_rgba(2,31,64,0.08)] backdrop-blur-md" : "text-white",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-4 md:h-24 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandLogos size="sm" />
          <span className="min-w-0 leading-tight">
            <span className="block font-heading text-sm tracking-[0.16em] uppercase">
              Тора
            </span>
            <span className={cn("hidden truncate text-[0.68rem] tracking-wide sm:block", solid ? "text-ink/55" : "text-white/70")}>
              Окинавское каратэ
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Основное меню">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.72rem] tracking-[0.16em] uppercase transition-colors",
                  active ? "text-signal" : solid ? "text-ink/75 hover:text-ink" : "text-white/80 hover:text-white",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={`tel:${phoneTel}`}
          className={cn(
            "ml-auto hidden text-sm font-medium tracking-wide xl:inline",
            solid ? "text-ink" : "text-white",
          )}
        >
          {phoneDisplay}
        </a>
        <div className="hidden lg:block">
          <TrialButton className="h-10 px-4 text-xs tracking-[0.12em] uppercase">
            Пробное
          </TrialButton>
        </div>

        <button
          type="button"
          className="ml-auto grid size-11 place-items-center rounded-full border border-current/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Меню</span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink/10 bg-canvas px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Мобильное меню">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 font-heading text-2xl",
                    active ? "text-signal" : "text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a href={`tel:${phoneTel}`} className="text-sm font-medium text-ink">
              {phoneDisplay}
            </a>
            <TrialButton>Записаться на пробное</TrialButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
