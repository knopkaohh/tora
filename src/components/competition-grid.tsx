"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  competitionFilters,
  competitions,
  type CompetitionCategory,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export function CompetitionGrid() {
  const [filter, setFilter] = useState<CompetitionCategory>("all");
  const items = competitions.filter((item) => filter === "all" || item.cat === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Фильтр соревнований">
        {competitionFilters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors",
                active
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 bg-white text-ink/70 hover:border-ink/40",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Link
            key={`${item.id}-${item.title}`}
            href="/about#hronika"
            className={cn(
              "photo-frame group relative overflow-hidden rounded-3xl bg-ink text-white",
              index === 0 && filter === "all" ? "sm:col-span-2 lg:row-span-2 min-h-[420px]" : "min-h-[280px]",
            )}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-5">
              <p className="text-[0.68rem] tracking-[0.18em] text-white/70 uppercase">
                {item.id} · {item.year}
              </p>
              <p className="mt-2 text-xs text-white/75">{item.tag}</p>
              <h3 className="mt-1 font-heading text-2xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-white/80">
                {item.place}
                <span className="ml-2 text-white">Подробнее →</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
