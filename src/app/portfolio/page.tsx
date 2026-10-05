import type { Metadata } from "next";
import { Camera, Play } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Фотографии и видео Академии Окинавского Каратэ: зал, тренировки и турниры. Медиатека скоро будет заполнена.",
};

const photoSlots = [
  { id: "photo-1", label: "Зал", span: "sm:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[420px]" },
  { id: "photo-2", label: "Тренировка", span: "min-h-[220px]" },
  { id: "photo-3", label: "Турнир", span: "min-h-[220px]" },
  { id: "photo-4", label: "Ката", span: "min-h-[220px]" },
  { id: "photo-5", label: "Команда", span: "min-h-[220px]" },
  { id: "photo-6", label: "Пояса", span: "min-h-[220px]" },
] as const;

const videoSlots = [
  { id: "video-1", label: "Тренировка" },
  { id: "video-2", label: "Выступление" },
  { id: "video-3", label: "Турнир" },
] as const;

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Кадры пути"
        text="Здесь появятся фотографии и видео из зала и с турниров. Пока раздел открыт как заглушка — медиа загрузим отдельно."
        image="/tora/media/team-2024.webp"
        alt="Команда клуба на пьедестале"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Фотографии</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Скоро здесь будут снимки</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
            Карточки ниже — место под будущие кадры: додзё, пояса, кубки и команда. Контент подгрузим, когда будут готовы файлы.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photoSlots.map((slot, index) => (
            <Reveal key={slot.id} delay={index * 50}>
              <article
                className={`flex h-full flex-col justify-between rounded-[2rem] border border-dashed border-ink/15 bg-paper p-6 ${slot.span}`}
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-canvas text-signal">
                  <Camera className="size-5" aria-hidden />
                </div>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">
                    {String(index + 1).padStart(2, "0")} · {slot.label}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl">Фотография</h3>
                  <p className="mt-2 text-sm text-ink/55">Медиафайл ещё не загружен</p>
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
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">Ролики появятся следом</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
              Три слота под записи тренировок и стартов. Когда будут видео, они встанут на эти места.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {videoSlots.map((slot, index) => (
              <Reveal key={slot.id} delay={index * 70}>
                <article className="flex min-h-[240px] flex-col justify-between rounded-[2rem] bg-canvas p-6">
                  <div className="grid aspect-video place-items-center rounded-[1.4rem] bg-ink text-white">
                    <span className="grid size-14 place-items-center rounded-full border border-white/25">
                      <Play className="size-5 fill-white" aria-hidden />
                    </span>
                  </div>
                  <div className="mt-5">
                    <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">
                      {String(index + 1).padStart(2, "0")} · {slot.label}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl">Видео</h3>
                    <p className="mt-2 text-sm text-ink/55">Заглушка. Файл загрузим позже.</p>
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
          <h2 className="max-w-xl font-heading text-4xl">Пока смотрите зал живьём — на пробном</h2>
          <TrialButton>Записаться на пробное</TrialButton>
        </div>
      </section>
    </>
  );
}
