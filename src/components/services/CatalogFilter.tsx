"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  categories,
  services,
  type ServiceCategory,
} from "@/data/services";
import ServiceCard from "./ServiceCard";

type Filter = "all" | ServiceCategory;

export default function CatalogFilter() {
  const t = useTranslations("services");
  const locale = useLocale() as "fr" | "es";
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? services : services.filter((s) => s.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "mains", label: categories.mains.label[locale] },
    { key: "pieds", label: categories.pieds.label[locale] },
    { key: "regard", label: categories.regard.label[locale] },
    { key: "maquillage", label: categories.maquillage.label[locale] },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              filter === f.key
                ? "bg-primary-500 border-primary-500 text-white"
                : "bg-white/50 border-primary-200/60 text-primary-800 hover:border-primary-400"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </div>
  );
}
