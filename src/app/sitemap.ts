import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://girlsbeautygang.fr";

const PAGES = [
  "",
  "/services",
  "/galerie",
  "/avis",
  "/groupe",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
];

const LOCALES = ["fr", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      const prefix = locale === "fr" ? "" : `/${locale}`;
      pages.push({
        url: `${SITE_URL}${prefix}${page || "/"}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
    for (const s of services) {
      const prefix = locale === "fr" ? "" : `/${locale}`;
      pages.push({
        url: `${SITE_URL}${prefix}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return pages;
}
