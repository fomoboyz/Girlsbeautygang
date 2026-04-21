"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getFeaturedGallery } from "@/data/gallery";

export default function GalleryTeaser() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "es";
  const items = getFeaturedGallery(6);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900 leading-tight max-w-xl">
            {t("galleryTitle")}
          </h2>
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors group whitespace-nowrap"
          >
            {t("galleryCta")}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 via-beige to-nude relative group"
            >
              <Image
                src={item.src}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
