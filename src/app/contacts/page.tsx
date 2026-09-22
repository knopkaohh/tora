import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SignupForm } from "@/components/signup-form";
import { nav, phoneDisplay, phoneTel, schedule } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Телефон Академии Окинавского Каратэ +7 495 003-77-73. Зал у метро Бауманская, запись на пробное занятие.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        kicker="Контакты"
        title="Запишитесь, пока есть место в группе"
        text="Пробное бесплатное. Позвоните или соберите заявку — администратор подтвердит время."
        image="/media/kata-2025.webp"
        alt="Победитель в категории ката"
      />

      <section id="zayavka" className="scroll-mt-24 mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:py-24">
        <div>
          <p className="text-[0.72rem] tracking-[0.28em] text-signal uppercase">Академия</p>
          <a href={`tel:${phoneTel}`} className="mt-4 block font-heading text-4xl md:text-5xl">
            {phoneDisplay}
          </a>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-xs tracking-[0.16em] text-ink/45 uppercase">Адрес</dt>
              <dd className="mt-1">Москва, м. Бауманская</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-ink/45 uppercase">Клуб</dt>
              <dd className="mt-1">Тора · тигр-каратэ.рф · Москва, с 2017</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-ink/45 uppercase">Группы</dt>
              <dd className="mt-2 space-y-2">
                {schedule.map((item) => (
                  <p key={item.title}>
                    {item.title}, {item.age}: {item.time}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-ink/15 px-3 py-1.5">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-paper p-6 md:p-8">
          <h2 className="font-heading text-3xl">Заявка на пробное</h2>
          <p className="mt-2 mb-6 text-sm text-ink/65">
            Имя, телефон и группа. Дальше — звонок или сообщение администратору.
          </p>
          <SignupForm />
        </div>
      </section>
    </>
  );
}
