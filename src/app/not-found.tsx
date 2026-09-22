import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-end bg-ink px-4 pt-32 pb-16 text-white md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[0.72rem] tracking-[0.28em] text-white/50 uppercase">404</p>
        <h1 className="mt-4 font-heading text-5xl md:text-7xl">Этой страницы нет</h1>
        <p className="mt-4 max-w-md text-white/70">
          Вернитесь в зал — на главную — или откройте расписание.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex h-12 items-center rounded-full bg-signal px-6 text-sm">
            На главную
          </Link>
          <Link href="/schedule" className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-sm">
            Расписание
          </Link>
        </div>
      </div>
    </section>
  );
}
