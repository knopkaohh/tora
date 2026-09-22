import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { schedule } from "@/lib/content";

export const metadata: Metadata = {
  title: "Расписание",
  description:
    "Расписание Академии Окинавского Каратэ: детская группа 18:00–19:00, средняя 19:00–20:00, м. Бауманская.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        kicker="Расписание"
        title="Вечер в додзё"
        text="Две опубликованные группы у метро Бауманская и взрослая группа по набору. Дни недели подтверждаем, когда записываем на пробное."
        image="/media/kata-train.webp"
        alt="Тренировка ката"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-5">
          {schedule.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="grid gap-6 rounded-[2rem] bg-paper p-6 md:grid-cols-[11rem_1fr_auto] md:items-center md:p-8">
                <p className="font-heading text-3xl leading-none text-signal md:text-4xl">{item.time}</p>
                <div>
                  <h2 className="font-heading text-3xl">{item.title}</h2>
                  <p className="mt-2 text-sm text-ink/55">{item.age} · {item.place}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/75">{item.text}</p>
                </div>
                <TrialButton className="h-11">Записать в группу</TrialButton>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">Как устроено занятие</p>
            <h2 className="mt-4 font-heading text-4xl">Час, который держит форму</h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Приветствие и настрой", "Зал начинается с ритуала. Это не украшение, а способ собраться."],
                ["Техника и ката", "База, которую повторяют и новички, и те, кто едет на турнир."],
                ["Работа в паре и пояса", "Контроль, а не суета. Сдача на пояса — для всех возрастов."],
              ].map(([title, text], index) => (
                <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="font-heading text-signal">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={100}>
            <div className="photo-frame relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/media/weapons.jpg" alt="Тренировка с оружием" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <h2 className="font-heading text-3xl">Не уверены, какая группа ваша?</h2>
          <p className="mt-2 max-w-lg text-sm text-ink/70">
            На пробном тренер смотрит возраст и подготовку и говорит, куда встать.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TrialButton>Записаться на пробное</TrialButton>
          <Link href="/locations" className="inline-flex h-12 items-center rounded-full border border-ink/15 px-6 text-sm">
            Где зал
          </Link>
        </div>
      </section>
    </>
  );
}
