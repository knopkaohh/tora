"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { phoneDisplay, phoneTel } from "@/lib/content";

const groups = [
  "Детская, 6–12 лет",
  "Средняя, 12–18 лет",
  "Взрослая группа",
  "Пока не выбрали",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  group: string;
  comment: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  group: groups[0],
  comment: "",
};

export function SignupForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState<string | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Как к вам обращаться?";
    if (fields.phone.trim().length < 6) next.phone = "Нужен телефон для связи";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "Проверьте почту или оставьте поле пустым";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      "Заявка на пробное занятие. Академия Окинавского Каратэ.",
      `Имя: ${fields.name.trim()}`,
      `Телефон: ${fields.phone.trim()}`,
      fields.email.trim() ? `Почта: ${fields.email.trim()}` : "",
      `Группа: ${fields.group}`,
      fields.comment.trim() ? `Комментарий: ${fields.comment.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setReady(text);
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(text);
    }
  }

  if (ready) {
    const sms = `sms:${phoneTel}?&body=${encodeURIComponent(ready)}`;
    return (
      <div className="space-y-4">
        <p className="font-heading text-2xl leading-tight text-ink">
          Заявка собрана
        </p>
        <p className="text-sm leading-relaxed text-ink/70">
          Текст скопирован. Позвоните в академию или отправьте его сообщением —
          администратор подтвердит время пробного.
        </p>
        <pre className="max-h-40 overflow-auto rounded-xl bg-canvas p-3 text-xs leading-relaxed whitespace-pre-wrap text-ink/80">
          {ready}
        </pre>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            nativeButton={false}
            render={<a href={`tel:${phoneTel}`} />}
            className="h-11 flex-1 rounded-full"
          >
            Позвонить {phoneDisplay}
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={sms} />}
            className="h-11 flex-1 rounded-full"
          >
            Отправить сообщением
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" error={errors.name}>
          <Input
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Как к вам обращаться"
            className="h-11 bg-white"
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="Телефон" error={errors.phone}>
          <Input
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="+7"
            className="h-11 bg-white"
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            inputMode="tel"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Почта" error={errors.email}>
          <Input
            type="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="Необязательно"
            className="h-11 bg-white"
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
          />
        </Field>
        <Field label="Группа">
          <select
            value={fields.group}
            onChange={(event) => update("group", event.target.value)}
            className="h-11 w-full rounded-lg border border-input bg-white px-3 text-sm text-ink outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {groups.map((group) => (
              <option key={group}>{group}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Комментарий">
        <Textarea
          value={fields.comment}
          onChange={(event) => update("comment", event.target.value)}
          placeholder="Возраст, удобные дни, опыт"
          className="min-h-24 bg-white"
        />
      </Field>
      <Button type="submit" className="h-11 w-full rounded-full text-sm">
        Собрать заявку на пробное
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Заявка остаётся у вас: сайт не отправляет её на сервер. Быстрее всего
        позвонить {phoneDisplay}.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-signal">{error}</p> : null}
    </div>
  );
}
