"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, services, getStartingPrice } from "@/data/services";
import { formatPrice, formatDuration } from "@/lib/utils";

export default function ServicesPreview() {
  const t = useTranslations("home");
  const tServices = useTranslations("services");
  const locale = useLocale() as "fr" | "es";

  const featured = services.filter((s) => s.featured).slice(0, 6);

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-600 mb-3">
              {categories.mains.label[locale]} · {categories.regard.label[locale]}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900 leading-tight max-w-2xl">
              {t("servicesTitle")}
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl">
              {t("servicesSubtitle")}
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors group"
          >
            {t("servicesCta")}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full rounded-2xl bg-white border border-muted p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary-600/80">
                    {categories[service.category].label[locale]}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-primary-400 group-hover:text-primary-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="font-serif text-xl text-primary-900 mb-2 leading-tight">
                  {service.name[locale]}
                </h3>
                <p className="text-sm text-foreground/65 line-clamp-2 mb-6">
                  {service.description[locale]}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-muted/70">
                  <span className="text-sm text-foreground/60">
                    {service.variants
                      ? `${tServices("from")} ${formatPrice(getStartingPrice(service), locale)}`
                      : formatPrice(service.price ?? 0, locale)}
                  </span>
                  <span className="text-xs text-primary-700/70">
                    {service.duration
                      ? formatDuration(service.duration, locale)
                      : formatDuration(service.variants?.[0]?.duration ?? 0, locale)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
