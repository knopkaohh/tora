"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type FriendPhoto = {
  id: string;
  alt: string;
  image: string;
};

export function FriendsGallery({ photos }: { photos: readonly FriendPhoto[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const current = photos.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      <div ref={rootRef} className={cn("friends-mosaic mt-10", shown && "is-in")}>
        {photos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="friends-mosaic-item"
            style={{ "--mosaic-i": Math.min(index, 11) } as CSSProperties}
            aria-label={item.alt}
          >
            <img
              src={item.image}
              alt={item.alt}
              width={800}
              height={1000}
              loading={index < 8 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/88 p-3 md:p-6"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <img
            src={current.image}
            alt={current.alt}
            className="max-h-[92vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm text-ink"
            onClick={() => setOpenId(null)}
          >
            Закрыть
          </button>
        </div>
      ) : null}
    </>
  );
}
