"use client";

import { useEffect, useState } from "react";
import { BrandLogos } from "@/components/brand-logos";

export function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const seen = window.sessionStorage.getItem("tora-loaded") === "1";
    if (seen || path !== "/") {
      setPhase("done");
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 250 : 700;
    const fade = reduce ? 160 : 400;
    const hide = window.setTimeout(() => setPhase("out"), hold);
    const done = window.setTimeout(() => {
      setPhase("done");
      window.sessionStorage.setItem("tora-loaded", "1");
    }, hold + fade);
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
      <div className="flex w-[min(94vw,560px)] flex-col items-center">
        <BrandLogos size="lg" />
        <p className="mt-8 text-center font-heading text-sm tracking-[0.18em] text-ink uppercase">
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
