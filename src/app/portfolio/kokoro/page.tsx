import type { Metadata } from "next";
import { FilmCard } from "@/components/film-card";
import { PageHero } from "@/components/page-hero";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { kokoroFilms } from "@/lib/content";

export const metadata: Metadata = {
  title: "В поисках Кокоро",
  description:
    "Серия фильмов «В поисках Кокоро». Смотрите на сайте академии — файлы открываются с Яндекс Диска.",
};

export default function PortfolioKokoroPage() {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="В поисках Кокоро"
        text="Серия фильмов академии. Смотрите на сайте — без скачивания многогигабайтных файлов к себе на компьютер."
        image="/media/friends-18.webp"
        alt="Алексей Юрков с японским мастером"
        actions={<PortfolioTabs active="kokoro" />}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Серия</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Смотрите на сайте</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
            Восемь частей. Нажмите play — плеер подключит ролик с Яндекс Диска. Если браузер не даст, рядом есть прямая ссылка.
          </p>
        </Reveal>
        {kokoroFilms.map((film, index) => (
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
