import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { offers, phoneDisplay, phoneTel } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Стоимость",
  description:
    "Пробное занятие бесплатно. Абонемент Академии Окинавского Каратэ — 7 000 ₽ за два занятия в неделю.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Стоимость"
        title="Сначала зал. Потом абонемент."
        text="Пробная тренировка бесплатная. Дальше — 7 000 ₽ за два занятия в неделю в любой группе."
        image="/media/cup-2024.webp"
        alt="Победитель турнира с кубком"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal key={offer.name} delay={index * 70}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-[2rem] p-7",
                  offer.featured ? "bg-ink text-white" : "bg-paper text-ink",
                )}
              >
                <p className={cn("text-xs tracking-[0.18em] uppercase", offer.featured ? "text-white/55" : "text-ink/45")}>
                  {offer.hint}
                </p>
                <h2 className="mt-4 font-heading text-3xl">{offer.name}</h2>
                <p className="mt-3 font-heading text-5xl text-signal">{offer.price}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                  {offer.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                      <span className={offer.featured ? "text-white/80" : "text-ink/75"}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <TrialButton
                    variant={offer.featured ? "default" : "outline"}
                    className={offer.featured ? "" : "border-ink/20"}
                  >
                    {offer.featured ? "Записаться бесплатно" : "Записаться в группу"}
                  </TrialButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <h2 className="font-heading text-4xl">Что вы покупаете, кроме часа на татами</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Абонемент — это место в группе, тренер с даном и путь от первого занятия до пояса или турнира. Два занятия в неделю стоят 7 000 ₽.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              ["Пробное ни к чему не обязывает", "Можно прийти один раз и решить спокойно."],
              ["Группа по возрасту", "6–12, 12–18 и взрослые. Тренер подскажет, если возраст на стыке."],
              ["Соревнования по желанию", "Кто хочет медали — едет. Кто хочет характер — остаётся в зале."],
            ].map(([title, text]) => (
              <li key={title} className="rounded-2xl bg-canvas p-5">
                <h3 className="font-heading text-xl">{title}</h3>
                <p className="mt-2 text-sm text-ink/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink px-6 py-10 text-white md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">7 000 ₽ · два занятия в неделю</h2>
            <p className="mt-2 text-sm text-white/70">Позвоните {phoneDisplay} — подтвердим группу и зал.</p>
          </div>
          <a href={`tel:${phoneTel}`} className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-ink">
            Позвонить
          </a>
        </div>
      </section>
    </>
  );
}
