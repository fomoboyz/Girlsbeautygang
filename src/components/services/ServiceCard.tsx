"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  type Service,
  categories,
  getStartingPrice,
  getStartingDuration,
} from "@/data/services";
import { formatPrice, formatDuration } from "@/lib/utils";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const locale = useLocale() as "fr" | "es";
  const t = useTranslations("services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex flex-col h-full rounded-2xl bg-white border border-muted p-6 hover:border-primary-300 hover:shadow-md transition-all"
      >
        <div className="flex items-start justify-between mb-3">
          <span className="text-[11px] uppercase tracking-wider text-primary-600/80 font-medium">
            {categories[service.category].label[locale]}
          </span>
          <ArrowUpRight
            size={18}
            className="text-primary-300 group-hover:text-primary-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
        <h3 className="font-serif text-lg text-primary-900 mb-2 leading-tight">
          {service.name[locale]}
        </h3>
        <p className="text-sm text-foreground/65 line-clamp-2 mb-auto pb-5">
          {service.description[locale]}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-muted/70">
          <div className="text-sm">
            {service.variants && (
              <span className="text-xs text-foreground/55 mr-1">
                {t("from")}
              </span>
            )}
            <span className="font-medium text-primary-900">
              {formatPrice(getStartingPrice(service), locale)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-foreground/55">
            <Clock size={12} />
            {formatDuration(getStartingDuration(service), locale)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
