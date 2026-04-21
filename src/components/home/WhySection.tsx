"use client";

import { useTranslations } from "next-intl";
import { Sparkles, Heart, Shield, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  { key: "quality", Icon: Sparkles },
  { key: "cozy", Icon: Heart },
  { key: "hygiene", Icon: Shield },
  { key: "easy", Icon: CalendarCheck },
] as const;

export default function WhySection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-primary-50/30 to-background">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary-600 mb-3">
            Girls Beauty Gang
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900 leading-tight">
            {t("whyTitle")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ key, Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white/70 backdrop-blur border border-muted p-7 hover:border-primary-200 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-lg text-primary-900 mb-2">
                {t(`whyItems.${key}.title`)}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {t(`whyItems.${key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
