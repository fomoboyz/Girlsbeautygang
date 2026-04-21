"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import BookButton from "@/components/ui/BookButton";
import { ArrowRight, Star, Users, Clock } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-x grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary-700 border border-primary-200/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {t("heroEyebrow")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-primary-900 whitespace-pre-line"
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <BookButton withIcon className="text-base py-4 px-7">
              {t("heroCta")}
            </BookButton>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-500/20 bg-white/50 backdrop-blur px-6 py-4 text-sm font-medium text-primary-800 transition-all hover:bg-white hover:border-primary-500/50"
            >
              {t("heroCtaSecondary")}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-primary-800/70"
          >
            <div className="flex items-center gap-1.5">
              <Star size={14} className="fill-accent text-accent" />
              {t("trustBadges.rating")}
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-primary-600" />
              {t("trustBadges.clients")}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary-600" />
              {t("trustBadges.booking")}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-100 via-beige to-nude shadow-2xl shadow-primary-500/10">
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3">
              <div className="rounded-[1.5rem] overflow-hidden relative bg-primary-100">
                <Image
                  src="/gallery/01.jpg"
                  alt="Baby boomer nude avec fleur 3D"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden relative bg-primary-100">
                <Image
                  src="/gallery/04.jpg"
                  alt="Nude rosé avec fleur 3D blanche"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden relative col-span-2 bg-primary-200">
                <Image
                  src="/gallery/02.jpg"
                  alt="Nail art multicolore avec étoiles dorées"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="font-serif text-xl drop-shadow">
                    Nail art &amp; semi-permanent
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -left-3 h-24 w-24 rounded-full bg-primary-500/15 blur-2xl" />
          <div className="absolute -bottom-4 -right-2 h-28 w-28 rounded-full bg-accent/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
