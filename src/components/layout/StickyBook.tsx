"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
import { useBooking } from "@/components/booking/BookingProvider";

export default function StickyBook() {
  const t = useTranslations("nav");
  const { open, isOpen } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isOpen) return null;

  return (
    <button
      type="button"
      onClick={() => open()}
      aria-label={t("bookNow")}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-primary-500 text-white px-5 py-3.5 shadow-xl shadow-primary-500/30 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Sparkles size={16} />
      <span className="font-medium text-sm">{t("bookNow")}</span>
    </button>
  );
}
