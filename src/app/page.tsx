import Image from "next/image";
import Link from "next/link";
import { BrandLogos } from "@/components/brand-logos";
import { CompetitionGrid } from "@/components/competition-grid";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import {
  chronicle,
  marquee,
  pillars,
  schedule,
  stats,
  trainers,
  trainings,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
        <Image
          src="/media/hero.png"
          alt="Тренировка в зале Академии Окинавского Каратэ"
          fill
          priority
          className="hero-drift object-cover object-[55%_center] md:object-[82%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,31,64,0.12)_0%,rgba(2,31,64,0.18)_42%,rgba(2,31,64,0.78)_100%)] md:bg-[linear-gradient(90deg,#021f40_0%,rgba(2,31,64,0.88)_16%,rgba(2,31,64,0.4)_32%,transparent_48%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pt-32 pb-16 md:px-6 md:pb-20">
          <p className="rise text-[0.72rem] tracking-[0.34em] text-white/70 uppercase">
            空手道 · традиции Окинавы
          </p>
          <h1 className="rise mt-5 max-w-4xl font-heading text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.9] [animation-delay:120ms]">
            Сила
            <span className="block">в настоящем</span>
          </h1>
          <p className="rise mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg [animation-delay:220ms]">
            Дисциплина, характер, развитие. Каратэ для детей, подростков и взрослых — в духе Окинавы и в ритме Москвы.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:320ms]">
            <TrialButton>Записаться на пробное занятие</TrialButton>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm tracking-wide text-white transition hover:bg-white/10"
            >
              Наши успехи
            </Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-ink text-white">
        <div className="marquee-track flex w-max gap-10 py-4">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`} className="text-xs tracking-[0.28em] uppercase">
              {item}
              <span className="ml-10 text-signal">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-ink/8 bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 md:px-6 md:py-16">
          <p className="text-[0.68rem] tracking-[0.28em] text-ink/45 uppercase">Эмблемы академии</p>
          <BrandLogos size="lg" labeled />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:py-28">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Наш подход</p>
          <h2 className="mt-4 font-heading text-4xl leading-[0.95] md:text-6xl">
            Традиции, которые воспитывают
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Мы обучаем каратэ в духе традиций Окинавы, сохраняя подлинные ценности и адаптируя их к современному миру. Наша цель — сильный, уверенный и гармонично развивающийся человек.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-signal">
            Наши успехи →
          </Link>
        </Reveal>
        <div className="space-y-4">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="grid grid-cols-[auto_1fr] gap-5 rounded-3xl border border-ink/10 bg-paper p-6">
                <span className="font-heading text-sm text-signal">{item.index}</span>
                <div>
                  <h3 className="font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">道場 · Тигр Тора</p>
            <h2 className="mt-4 font-heading text-4xl leading-[0.95] md:text-5xl">
              Победы рождаются в зале, в характере, в дисциплине
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Международный фестиваль боевых искусств, кубок Анта, чемпионаты мира — это не строчки в резюме, а годы тренировок, синяков и настоящей воли.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="font-heading text-4xl text-white">{item.value}</dt>
                  <dd className="mt-1 text-xs tracking-[0.16em] text-white/55 uppercase">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="photo-frame relative aspect-[5/4] overflow-hidden rounded-[2rem]">
              <Image
                src="/media/korovin-yurkov.webp"
                alt="Николай Коровин и Алексей Юрков"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="sorevnovaniya" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Наши соревнования</p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl">Медали на стену клуба</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">
              Каждый турнир — это опыт, характер и медали. От районных первенств до международных кубков.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <CompetitionGrid />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Наши тренировки</p>
            <h2 className="mt-3 max-w-xl font-heading text-4xl leading-[0.95] md:text-5xl">
              От детских групп до мастеров
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trainings.map((item, index) => (
              <Reveal key={item.index} delay={(index % 3) * 80}>
                <Link href="/schedule" className="photo-frame group block overflow-hidden rounded-3xl bg-ink text-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] tracking-[0.18em] text-white/55 uppercase">
                      {item.index} · {item.note}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.place} →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hronika" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Наши успехи</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Хроника клуба «Тигр»</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/65">
            Годы пути, который продолжается.
          </p>
        </Reveal>
        <ol className="mt-12 space-y-0 border-t border-ink/10">
          {chronicle.map((item, index) => (
            <Reveal key={`${item.year}-${item.title}-${index}`}>
              <li className="grid gap-3 border-b border-ink/10 py-7 md:grid-cols-[8rem_1fr_1.4fr] md:items-baseline">
                <span className="font-heading text-3xl text-signal">{item.year}</span>
                <h3 className="font-heading text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/media/kata-train.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center md:px-6 md:py-32">
          <p className="text-5xl text-signal" aria-hidden>
            “
          </p>
          <blockquote className="font-heading text-3xl leading-tight md:text-5xl">
            Мы не просто учим драться. Мы воспитываем людей, которые умеют проигрывать и вставать.
          </blockquote>
          <p className="mt-6 text-sm tracking-[0.2em] text-white/60 uppercase">Тора · Москва · 道</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Учителя пути</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Наши тренеры</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <Reveal key={trainer.id}>
              <Link href={`/trainers#${trainer.id}`} className="group overflow-hidden rounded-[2rem] bg-paper">
                <div className="photo-frame relative aspect-[3/4]">
                  <Image src={trainer.image} alt={trainer.alt} fill className="object-cover object-top" sizes="(min-width: 1280px) 22vw, (min-width: 640px) 40vw, 100vw" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <p className="text-xs tracking-[0.16em] text-signal uppercase">{trainer.role}</p>
                  <h3 className="mt-3 font-heading text-3xl">{trainer.name}</h3>
                  <p className="mt-2 text-sm text-ink/60">{trainer.meta}</p>
                  <p className="mt-5 text-sm text-ink">Профиль тренера →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1fr_1fr] md:px-6 md:py-24">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Готовы стать частью клуба?</p>
            <h2 className="mt-4 font-heading text-4xl leading-[0.95] md:text-5xl">
              Бесплатная пробная тренировка
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">
              Дети и взрослые, любой уровень подготовки. Приходите посмотреть зал и тренера до того, как решите остаться.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrialButton>Записаться</TrialButton>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm"
              >
                Стоимость
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[2rem] bg-canvas p-6 md:p-8">
              <p className="font-heading text-2xl">Расписание</p>
              <ul className="mt-6 space-y-4">
                {schedule.slice(0, 2).map((item) => (
                  <li key={item.title} className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
                    <span>
                      <span className="block font-medium">{item.title}</span>
                      <span className="text-sm text-ink/55">{item.age}</span>
                    </span>
                    <span className="font-heading text-lg">{item.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-ink/60">м. Савёловская — м. Дмитровская</p>
              <Link href="/schedule" className="mt-4 inline-block text-sm font-medium text-signal">
                Полное расписание →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
