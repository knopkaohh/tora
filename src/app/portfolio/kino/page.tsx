import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { VkFilmEmbed } from "@/components/vk-film-embed";
import { portfolioFilms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Кино",
  description:
    "Фильмы Академии Окинавского Каратэ. Первый фильм — «Путь к черному поясу».",
};

export default function PortfolioKinoPage() {
  const featured = portfolioFilms[0];
  if (!featured) return null;

  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Кино"
        text="Длинные фильмы академии. Смотрите на сайте — без скачивания и без перехода в другое приложение."
        image="/media/kata-train.webp"
        alt="Тренировка ката"
        actions={<PortfolioTabs active="kino" />}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <article className="overflow-hidden rounded-[2rem] bg-paper p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.4rem] bg-ink">
              <VkFilmEmbed src={featured.embed} title={featured.title} />
            </div>
            <div className="px-1 pt-5">
              <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">
                01 · {featured.tag}
              </p>
              <h2 className="mt-2 font-heading text-3xl md:text-5xl">{featured.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{featured.text}</p>
              <a
                href={featured.href}
                className="mt-4 inline-flex text-sm text-signal hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Открыть во VK Видео
              </a>
            </div>
          </article>
        </Reveal>
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
