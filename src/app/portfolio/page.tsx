import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { portfolioPhotos, portfolioVideos } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Фотографии и видео Академии Окинавского Каратэ: зал, детские группы, гранд-мастера и выступление сборной России в Токио.",
};

export default function PortfolioPage() {
  const featuredVideo = portfolioVideos.find((item) => item.featured) ?? portfolioVideos[0];
  const otherVideos = portfolioVideos.filter((item) => item.id !== featuredVideo.id);

  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Кадры пути"
        text="Зал, пояса, турниры и живое видео: гранд-мастера, сборная в Токио и детская группа."
        image="/media/portfolio-dojo-kids.webp"
        alt="Детская группа и тренеры в зале после тренировки"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Фотографии</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Зал, который виден сразу</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
            Группы, пьедестал, работа мастеров и архив. Кадры из додзё и с первых стартов.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioPhotos.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 50}
              className={item.featured ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <article className="overflow-hidden rounded-[2rem] bg-paper">
                <div
                  className={cn(
                    "photo-frame relative overflow-hidden bg-ink",
                    item.featured ? "aspect-[16/10] min-h-[280px]" : "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes={item.featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[0.68rem] tracking-[0.18em] text-signal uppercase">
                    {String(index + 1).padStart(2, "0")} · {item.tag}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Видео</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">Смотрите на сайте</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
              Три ролика встроены в страницу: нажмите play — без перехода на другой сервис.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <article className="mt-10 overflow-hidden rounded-[2rem] bg-canvas p-4 md:p-6">
              <div className="overflow-hidden rounded-[1.4rem] bg-ink">
                <video
                  className="aspect-video w-full bg-ink"
                  controls
                  playsInline
                  preload="metadata"
                  poster={featuredVideo.poster}
                >
                  <source src={featuredVideo.src} type="video/mp4" />
                </video>
              </div>
              <div className="px-1 pt-5">
                <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">01 · {featuredVideo.tag}</p>
                <h3 className="mt-2 font-heading text-3xl">{featuredVideo.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{featuredVideo.text}</p>
              </div>
            </article>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {otherVideos.map((item, index) => (
              <Reveal key={item.id} delay={index * 70}>
                <article className="overflow-hidden rounded-[2rem] bg-canvas p-4 md:p-5">
                  <div className="overflow-hidden rounded-[1.4rem] bg-ink">
                    <video
                      className="aspect-video w-full bg-ink"
                      controls
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  </div>
                  <div className="px-1 pt-5">
                    <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">
                      {String(index + 2).padStart(2, "0")} · {item.tag}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/65">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-16 md:px-6">
          <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">Запись</p>
          <h2 className="max-w-xl font-heading text-4xl">Посмотрели кадры — приходите в зал</h2>
          <TrialButton>Записаться на пробное</TrialButton>
        </div>
      </section>
    </>
  );
}
