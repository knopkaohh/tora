"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogos } from "@/components/brand-logos";
import { TrialButton } from "@/components/trial-button";
import { nav, phoneDisplay, phoneTel } from "@/lib/content";
import { cn } from "@/lib/utils";

function navActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = (pathname.replace(/\/$/, "") || "/") === "/";

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
  const darkText = solid || isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "bg-canvas/92 text-ink shadow-[0_1px_0_rgba(2,31,64,0.08)] backdrop-blur-md"
          : isHome
            ? "bg-white/80 text-ink backdrop-blur-md"
            : "text-white",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-3 px-4 lg:h-[4.5rem] lg:gap-5 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandLogos size="xs" className="gap-1.5 md:gap-2" />
          <span className="hidden leading-none xl:block">
            <span className="block font-heading text-[0.7rem] tracking-[0.18em] uppercase">
              Тора
            </span>
            <span className={cn("mt-1 block text-[0.62rem] tracking-wide", darkText ? "text-ink/55" : "text-white/70")}>
              Окинавское каратэ
            </span>
          </span>
        </Link>

        <nav
          className="ml-auto hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-2.5 xl:gap-x-4 2xl:gap-x-5 2xl:justify-center lg:flex"
          aria-label="Основное меню"
        >
          {nav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 whitespace-nowrap text-[0.68rem] tracking-[0.08em] uppercase transition-colors",
                  active ? "text-signal" : darkText ? "text-ink/80 hover:text-ink" : "text-white/80 hover:text-white",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:gap-4 lg:flex">
          <a
            href={`tel:${phoneTel}`}
            className={cn(
              "hidden whitespace-nowrap text-[0.8rem] font-medium tracking-normal xl:inline",
              darkText ? "text-ink" : "text-white",
            )}
          >
            {phoneDisplay}
          </a>
          <TrialButton className="h-9 shrink-0 px-3.5 text-[0.68rem] tracking-[0.08em] uppercase">
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
              const active = navActive(pathname, item.href);
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
            <a href={`tel:${phoneTel}`} className="whitespace-nowrap text-sm font-medium text-ink">
              {phoneDisplay}
            </a>
            <TrialButton>Записаться на пробное</TrialButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
