import Image from "next/image";
import Link from "next/link";
import { nav, phoneDisplay, phoneTel } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-white">
              <Image src="/media/logo.svg" alt="" width={36} height={36} unoptimized className="size-9 object-contain" />
            </span>
            <div>
              <p className="font-heading text-sm tracking-[0.18em] uppercase">Клуб Тора</p>
              <p className="text-xs text-white/60">Академия Окинавского Каратэ</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Традиции Окинавы, характер и живой зал. Москва, с 2017 года.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.22em] text-white/45 uppercase">Меню</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.22em] text-white/45 uppercase">Запись</p>
          <a href={`tel:${phoneTel}`} className="mt-4 block font-heading text-2xl">
            {phoneDisplay}
          </a>
          <p className="mt-3 text-sm text-white/70">Москва · три зала</p>
          <p className="mt-1 text-sm text-white/70">м. Савёловская — Дмитровская</p>
          <p className="mt-1 text-sm text-white/70">Пробная тренировка — бесплатно</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 md:flex-row md:justify-between md:px-6">
          <p>тигр-каратэ.рф · клуб спортивных единоборств «Тигр»</p>
          <p>道 · путь</p>
        </div>
      </div>
    </footer>
  );
}
