import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: "fr" | "es" = "fr") {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDuration(minutes: number, locale: "fr" | "es" = "fr") {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (locale === "es") {
    if (h === 0) return `${m} min`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}`;
  }
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h}h`;
  return `${h}h${String(m).padStart(2, "0")}`;
}
