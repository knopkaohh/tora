import type { Metadata } from "next";
import { KokoroSeries } from "@/components/kokoro-series";
import { kokoroFilmsPart2 } from "@/lib/content";

export const metadata: Metadata = {
  title: "В поисках Кокоро · Вторая часть",
  description: "Второй сезон «В поисках Кокоро». Части 1–2 смотрите на сайте.",
};

export default function PortfolioKokoroPart2Page() {
  return <KokoroSeries part={2} films={kokoroFilmsPart2} />;
}
