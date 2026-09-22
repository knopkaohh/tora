import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Тренеры",
  description:
    "Николай Коровин и Алексей Юрков — тренеры Академии Окинавского Каратэ, мастера спорта и обладатели данов.",
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        kicker="Тренеры · 道"
        title="Учителя пути"
        text="Президент академии и генеральный директор. За их именами — даны, сборная и десятки лет практики."
        image="/media/team-russia.webp"
        alt="Сборная России по каратэ с детьми"
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 md:px-6 md:py-24">
        {trainers.map((trainer, index) => (
          <article
            key={trainer.id}
            id={trainer.id}
            className="scroll-mt-28 grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr]"
          >
            <Reveal>
              <div className="photo-frame relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-ink">
                <Image
                  src={trainer.image}
                  alt={trainer.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 36vw, 100vw"
                  priority={index === 0}
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[0.72rem] tracking-[0.22em] text-signal uppercase">{trainer.role}</p>
              <h2 className="mt-3 font-heading text-4xl md:text-6xl">{trainer.name}</h2>
              <p className="mt-3 text-sm text-ink/55">{trainer.meta}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {trainer.ranks.map((rank) => (
                  <li key={rank} className="rounded-full bg-paper px-3 py-1.5 text-xs text-ink/80">
                    {rank}
                  </li>
                ))}
              </ul>
              {trainer.quote ? (
                <blockquote className="mt-8 border-l-2 border-signal pl-4 font-heading text-2xl leading-snug">
                  «{trainer.quote}»
                </blockquote>
              ) : null}
              <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {trainer.wins.map((win) => (
                  <li key={`${win.year}-${win.title}`} className="grid gap-1 py-4 md:grid-cols-[6.5rem_1fr]">
                    <span className="text-sm text-signal">{win.year}</span>
                    <div>
                      <p className="font-medium">{win.title}</p>
                      <p className="text-sm text-ink/55">{win.place}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </article>
        ))}
      </div>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-16 md:px-6">
          <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">Запись</p>
          <h2 className="max-w-xl font-heading text-4xl">Первое занятие — по предварительному звонку</h2>
          <TrialButton>Записаться к тренеру</TrialButton>
        </div>
      </section>
    </>
  );
}
