import type { Metadata } from "next";
import { KokoroSeries } from "@/components/kokoro-series";
import { kokoroFilms } from "@/lib/content";

export const metadata: Metadata = {
  title: "В поисках Кокоро · Первая часть",
  description: "Серия фильмов «В поисках Кокоро». Части 1–3 смотрите на сайте.",
};

export default function PortfolioKokoroPage() {
  return <KokoroSeries part={1} films={kokoroFilms} />;
}
