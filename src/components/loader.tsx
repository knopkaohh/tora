"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 350 : 1500;
    const fade = reduce ? 200 : 650;
    const hide = window.setTimeout(() => setPhase("out"), hold);
    const done = window.setTimeout(() => setPhase("done"), hold + fade);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`loader-screen ${phase === "out" ? "is-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Загрузка сайта академии"
    >
      <div className="flex w-[min(88vw,280px)] flex-col items-center">
        <Image
          src="/media/logo.svg"
          alt=""
          width={112}
          height={112}
          unoptimized
          priority
          className="h-28 w-28 object-contain"
        />
        <p className="mt-6 text-center font-heading text-sm tracking-[0.18em] text-ink uppercase">
          Академия
          <span className="mt-1 block text-[0.68rem] tracking-[0.28em] text-ink/60">
            Окинавского каратэ
          </span>
        </p>
        <div className="mt-8 h-px w-full overflow-hidden bg-ink/10">
          <div className="loader-bar h-full w-full bg-signal" />
        </div>
        <p className="mt-4 text-[0.68rem] tracking-[0.35em] text-ink/45 uppercase">
          道場
        </p>
      </div>
    </div>
  );
}
