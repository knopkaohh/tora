import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { phoneDisplay, phoneTel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Локации",
  description:
    "Залы Академии Окинавского Каратэ в Москве. Опубликованный адрес вечерних групп — метро Бауманская.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Локации"
        title="Три зала. Один характер."
        text="На сайте опубликован зал вечерних групп — у метро Бауманская. Ближайший из трёх залов подберём, когда запишетесь."
        image="/media/hero.png"
        alt="Зал академии во время тренировки"
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Основной зал</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Москва, м. Бауманская</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/75">
            Детская группа начинает в 18:00, средняя — в 19:00. Публичный ориентир — станция метро. Точный вход и схему прохода администратор присылает после заявки.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Пешая доступность от метро Бауманская",
              "Вечерние группы для детей и подростков",
              "Взрослая группа — время по набору",
              "На первое занятие хватит спортивной одежды и воды",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-paper px-4 py-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrialButton>Запросить схему прохода</TrialButton>
            <a href={`tel:${phoneTel}`} className="inline-flex h-12 items-center rounded-full border border-ink/15 px-6 text-sm">
              {phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-paper">
            <iframe
              title="Карта метро Бауманская"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.662%2C55.764%2C37.696%2C55.781&layer=mapnik&marker=55.7724%2C37.679"
              className="h-80 w-full border-0 md:h-[28rem]"
              loading="lazy"
            />
            <p className="px-5 py-4 text-xs leading-relaxed text-ink/55">
              Метка стоит у станции метро Бауманская. Это ориентир района, а не дверь зала.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            ["01", "Бауманская", "Вечерние группы, которые уже стоят в расписании."],
            ["02", "Ещё два зала", "Академия тренирует в трёх залах. Адреса остальных называем при записи, чтобы не публиковать неточные."],
            ["03", "Подбор зала", "Скажите район и возраст — подскажем, куда удобнее прийти на пробное."],
          ].map(([index, title, text]) => (
            <Reveal key={index}>
              <article className="h-full rounded-3xl bg-canvas p-6">
                <p className="font-heading text-sm text-signal">{index}</p>
                <h3 className="mt-4 font-heading text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="photo-frame relative aspect-[16/10] overflow-hidden rounded-[2rem]">
          <Image src="/media/team-2024.webp" alt="Команда клуба на пьедестале" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div>
          <h2 className="font-heading text-4xl">Зал, из которого едут на турниры</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Кубки, чемпионаты и сдача на пояса начинаются здесь. Если хотите посмотреть атмосферу до звонка — откройте страницу тренеров и хроники.
          </p>
        </div>
      </section>
    </>
  );
}
