import { FilmCard, type SiteFilm } from "@/components/film-card";
import { KokoroPartTabs } from "@/components/kokoro-part-tabs";
import { PageHero } from "@/components/page-hero";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";

export function KokoroSeries({
  part,
  films,
}: {
  part: 1 | 2;
  films: readonly SiteFilm[];
}) {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="В поисках Кокоро"
        text={
          part === 1
            ? "Первая часть серии. Три фильма — смотрите на сайте, превью берётся из самого ролика."
            : "Вторая часть серии. Два новых фильма — смотрите на сайте, превью берётся из самого ролика."
        }
        image="/media/friends-18.webp"
        alt="Алексей Юрков с японским мастером"
        imageClassName="object-[center_12%]"
        actions={
          <div className="space-y-3">
            <PortfolioTabs active="kokoro" />
            <KokoroPartTabs active={part} />
          </div>
        }
      />

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Серия</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">
            {part === 1 ? "Первая часть" : "Вторая часть"}
          </h2>
        </Reveal>
        {films.map((film, index) => (
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
