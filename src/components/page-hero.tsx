import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  text,
  image,
  alt,
  actions,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="hero-drift object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-4 pt-32 pb-14 md:px-6 md:pb-16">
        <p className="rise text-[0.72rem] tracking-[0.32em] text-white/70 uppercase">{kicker}</p>
        <h1 className="rise mt-4 max-w-4xl font-heading text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.92] [animation-delay:120ms]">
          {title}
        </h1>
        <p className="rise mt-6 max-w-xl text-base leading-relaxed text-white/78 md:text-lg [animation-delay:220ms]">
          {text}
        </p>
        {actions ? <div className="rise mt-8 [animation-delay:320ms]">{actions}</div> : null}
      </div>
    </section>
  );
}
