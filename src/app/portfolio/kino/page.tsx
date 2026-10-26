import type { Metadata } from "next";
import { FilmCard } from "@/components/film-card";
import { PageHero } from "@/components/page-hero";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { portfolioFilms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Кино",
  description: "Фильмы Академии Окинавского Каратэ. Первый фильм — «Путь к черному поясу».",
};

export default function PortfolioKinoPage() {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Кино"
        text="Длинные фильмы академии. Смотрите на сайте — без скачивания и без перехода в другое приложение, если плеер открывается."
        image="/media/seniors.webp"
        alt="Тренировка в зале академии"
        imageClassName="object-[28%_40%]"
        actions={<PortfolioTabs active="kino" />}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Фильмы</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Смотрите на сайте</h2>
        </Reveal>
        {portfolioFilms.map((film, index) => (
          <FilmCard key={film.id} film={film} index={index} />
        ))}
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-16 md:px-6">
          <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">Запись</p>
          <h2 className="max-w-xl font-heading text-4xl">После фильма — в зал</h2>
          <TrialButton>Записаться на пробное</TrialButton>
        </div>
      </section>
    </>
  );
}
