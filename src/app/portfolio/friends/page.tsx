import type { Metadata } from "next";
import { FriendsGallery } from "@/components/friends-gallery";
import { PageHero } from "@/components/page-hero";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/trial-button";
import { portfolioFriends } from "@/lib/content";

export const metadata: Metadata = {
  title: "Наши друзья",
  description:
    "Фотографии встреч Академии Окинавского Каратэ: мастера, гости зала, поездки и торжественные кадры.",
};

export default function PortfolioFriendsPage() {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Наши друзья"
        text="Мастера, гости додзё, поездки и рукопожатия. Смотрите кадры на сайте — без скачивания."
        image="/media/friends-16.webp"
        alt="Гости академии в деревянном додзё"
        imageClassName="object-[center_16%]"
        actions={<PortfolioTabs active="friends" />}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Галерея</p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl">Смотрите на сайте</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
            Живые встречи Алексея Юркова и друзей академии.
          </p>
        </Reveal>
        <FriendsGallery photos={portfolioFriends} />
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
