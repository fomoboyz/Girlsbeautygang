"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export default function GroupCTA() {
  const t = useTranslations("home");

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-10 sm:p-16 text-white"
        >
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium mb-5">
              <Users size={14} />
              3+
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {t("groupTitle")}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
              {t("groupSubtitle")}
            </p>
            <Link
              href="/groupe"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary-700 px-6 py-3.5 text-sm font-medium hover:bg-primary-50 transition-colors group"
            >
              {t("groupCta")}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
