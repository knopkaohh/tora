"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type FriendPhoto = {
  id: string;
  tag: string;
  title: string;
  alt: string;
  image: string;
  tall: boolean;
};

export function FriendsGallery({ photos }: { photos: readonly FriendPhoto[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = photos.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openId]);

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((item, index) => (
          <Reveal key={item.id} delay={Math.min(index, 8) * 40}>
            <button
              type="button"
              onClick={() => setOpenId(item.id)}
              className="group w-full overflow-hidden rounded-[2rem] bg-paper text-left"
            >
              <div
                className={cn(
                  "photo-frame relative overflow-hidden bg-ink",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.68rem] tracking-[0.18em] text-signal uppercase">
                  {String(index + 1).padStart(2, "0")} · {item.tag}
                </p>
                <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/86 p-4"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div className="relative max-h-[92vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={current.image}
              alt={current.alt}
              width={1600}
              height={1200}
              className="max-h-[84vh] w-full rounded-3xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/80">{current.title}</p>
            <button
              type="button"
              className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm text-ink"
              onClick={() => setOpenId(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
