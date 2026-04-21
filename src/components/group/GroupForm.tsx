"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function GroupForm() {
  const t = useTranslations("group.form");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/group", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white border border-muted p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label={t("name")} required />
        <Field name="email" label={t("email")} type="email" required />
        <Field name="phone" label={t("phone")} type="tel" />
        <Field name="date" label={t("date")} type="date" />
        <Field
          name="people"
          label={t("people")}
          type="number"
          min={3}
          placeholder="3"
          required
          className="sm:col-span-2"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-primary-700 mb-1.5">
          {t("message")}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl bg-background/60 border border-muted px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors"
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-foreground/55">
          {status === "success" && (
            <span className="inline-flex items-center gap-1.5 text-green-700">
              <CheckCircle2 size={14} />
              {t("success")}
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-700">
              <AlertCircle size={14} />
              {t("error")}
            </span>
          )}
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {t("submit")}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  min,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-wider text-primary-700 mb-1.5"
      >
        {label}
        {required && <span className="text-primary-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-xl bg-background/60 border border-muted px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors"
      />
    </div>
  );
}
