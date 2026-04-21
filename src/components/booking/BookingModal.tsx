"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

const TREATWELL_URL = "https://widget.treatwell.fr/salon/girls-beauty-gang/";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("booking");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-primary-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-4xl h-[92vh] sm:h-[88vh] bg-surface rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-muted px-5 py-4 bg-background/80 backdrop-blur">
          <div>
            <h2 className="text-lg font-serif text-primary-900">
              {t("modalTitle")}
            </h2>
            <p className="text-xs text-primary-700/70">{t("modalSubtitle")}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <iframe
          src={TREATWELL_URL}
          title="Treatwell — Girls Beauty Gang"
          className="flex-1 w-full border-0"
          loading="lazy"
          allow="payment"
        />
      </div>
    </div>
  );
}
