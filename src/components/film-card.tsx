import { VkFilmEmbed } from "@/components/vk-film-embed";
import { YandexDiskVideo } from "@/components/yandex-disk-video";
import { Reveal } from "@/components/reveal";

export type SiteFilm = {
  id: string;
  tag: string;
  title: string;
  text: string;
  kind: "vk" | "yandex";
  href: string;
  embed?: string;
  poster?: string;
};

export function FilmCard({ film, index }: { film: SiteFilm; index: number }) {
  const openLabel = film.kind === "vk" ? "Открыть во VK Видео" : "Открыть на Яндекс Диске";

  return (
    <Reveal delay={Math.min(index, 6) * 60}>
      <article className="overflow-hidden rounded-[2rem] bg-paper p-4 md:p-6">
        <div className="overflow-hidden rounded-[1.4rem] bg-ink">
          {film.kind === "vk" && film.embed ? (
            <VkFilmEmbed src={film.embed} title={film.title} />
          ) : (
            <YandexDiskVideo publicUrl={film.href} title={film.title} />
          )}
        </div>
        <div className="px-1 pt-5">
          <p className="text-[0.68rem] tracking-[0.18em] text-ink/45 uppercase">
            {String(index + 1).padStart(2, "0")} · {film.tag}
          </p>
          <h3 className="mt-2 font-heading text-3xl md:text-4xl">{film.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{film.text}</p>
          <a
            href={film.href}
            className="mt-4 inline-flex text-sm text-signal hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {openLabel}
          </a>
        </div>
      </article>
    </Reveal>
  );
}
