export function VkFilmEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-video overflow-hidden bg-ink">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        allowFullScreen
        loading="eager"
      />
    </div>
  );
}
