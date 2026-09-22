import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { locations, phoneDisplay, phoneTel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Локации",
  description:
    "Три зала Академии Окинавского Каратэ: Савёловская — Дмитровская, Писцовая и Смоленская.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Локации"
        title="Три зала. Один характер."
        text="Основной зал — у метро Савёловская и Дмитровская. Дополнительный — на Писцовой. Третий — на Смоленской, в Центральной школе каратэ."
        image="/media/hero.png"
        alt="Зал академии во время тренировки"
      />

      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16 md:px-6 md:py-24">
        {locations.map((hall, index) => (
          <Reveal key={hall.id} delay={index * 60}>
            <article className="grid overflow-hidden rounded-[2rem] bg-paper md:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-[0.72rem] tracking-[0.22em] text-signal uppercase">{hall.kind}</p>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl">{hall.venue}</h2>
                <p className="mt-4 text-sm text-ink/70">{hall.metro}</p>
                <p className="mt-1 font-medium">{hall.address}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {hall.points.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <TrialButton>Записаться в этот зал</TrialButton>
                  <a href={`tel:${phoneTel}`} className="inline-flex h-12 items-center rounded-full border border-ink/15 px-6 text-sm">
                    {phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="min-h-72 border-t border-ink/8 md:border-t-0 md:border-l">
                <iframe
                  title={`Карта: ${hall.venue}`}
                  src={hall.map}
                  className="h-full min-h-80 w-full border-0"
                  loading="lazy"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="photo-frame relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image src="/media/team-2024.webp" alt="Команда клуба на пьедестале" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="font-heading text-4xl">Залы, из которых едут на турниры</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Кубки, чемпионаты и сдача на пояса начинаются здесь. Если хотите посмотреть атмосферу до звонка — откройте страницу тренеров и хроники.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
