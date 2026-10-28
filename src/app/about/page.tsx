import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { chronicle, pillars, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "О академии",
  description:
    "Клуб Тора — Академия Окинавского Каратэ в Москве. Традиция, характер и соревновательный путь с 2017 года.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="О академии"
        title="Клуб, в котором воспитывают характер"
        text="Академия Окинавского Каратэ «Тигр» учит не только удару. Здесь учатся держать себя, проигрывать и вставать."
        image="/media/group-2017.webp"
        alt="Группа спортсменов клуба"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">道場</p>
          <h2 className="mt-4 font-heading text-4xl leading-[0.95] md:text-5xl">
            Традиции Окинавы — сила в настоящем
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base leading-relaxed text-ink/75">
            Мы обучаем каратэ в духе традиций Окинавы, сохраняя подлинные ценности и адаптируя их к современному миру. Наша цель — сильный, уверенный и гармонично развивающийся человек.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Клуб спортивных единоборств «Тигр» работает в Москве с 2017 года. За плечами академии — кубки Анта, чемпионаты мира и тренеры, которые готовили национальную сборную.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-5">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-paper p-4">
                <dt className="font-heading text-3xl">{item.value}</dt>
                <dd className="mt-1 text-xs tracking-[0.14em] text-ink/50 uppercase">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 md:grid-cols-3 md:px-6">
          {pillars.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-3xl bg-canvas p-6">
                <p className="font-heading text-sm text-signal">{item.index}</p>
                <h3 className="mt-4 font-heading text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
        <Reveal>
          <div className="photo-frame relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/media/seniors.webp" alt="Тренировка старших учеников" fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="photo-frame relative aspect-[4/3] overflow-hidden rounded-[2rem] md:mt-16">
            <Image src="/media/belts.webp" alt="Группа с тренерами" fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
        </Reveal>
      </section>

      <section id="hronika" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">Хроника</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">Путь, который продолжается</h2>
          </Reveal>
          <ol className="mt-12 space-y-8">
            {chronicle.map((item, index) => (
              <Reveal key={`${item.year}-${index}`}>
                <li className="grid gap-2 border-t border-white/10 pt-6 md:grid-cols-[7rem_1fr]">
                  <span className="font-heading text-2xl text-signal">{item.year}</span>
                  <div>
                    <h3 className="font-heading text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">{item.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <blockquote className="mt-16 max-w-3xl font-heading text-3xl leading-tight md:text-4xl">
            Каждая медаль — это сотни тренировок.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:px-6">
        <h2 className="font-heading text-4xl">Приходите на пробное</h2>
        <p className="max-w-lg text-sm leading-relaxed text-ink/70">
          Посмотрите зал, тренера и группу. Если откликнется — останетесь. Если нет, ничего не должны.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TrialButton>Записаться</TrialButton>
          <Link href="/trainers" className="inline-flex h-12 items-center rounded-full border border-ink/15 px-6 text-sm">
            Познакомиться с тренерами
          </Link>
        </div>
      </section>
    </>
  );
}
