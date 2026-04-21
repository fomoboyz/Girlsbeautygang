import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  categories,
  getServiceBySlug,
  services,
} from "@/data/services";
import { formatDuration, formatPrice } from "@/lib/utils";
import BookButton from "@/components/ui/BookButton";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const loc = locale as "fr" | "es";
  return {
    title: `${service.name[loc]} — Girls Beauty Gang`,
    description: service.description[loc],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const loc = locale as "fr" | "es";
  const t = await getTranslations("services");

  return (
    <>
      <section className="pt-12 pb-10">
        <div className="container-x max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("backToCatalog")}
          </Link>
          <p className="text-xs uppercase tracking-widest text-primary-600 mb-3">
            {categories[service.category].label[loc]}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-primary-900 leading-[1.05]">
            {service.name[loc]}
          </h1>
          <p className="mt-5 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            {service.description[loc]}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x max-w-4xl">
          <div className="rounded-3xl bg-white border border-muted overflow-hidden">
            {service.variants ? (
              <div>
                <div className="p-6 sm:p-8 border-b border-muted">
                  <h2 className="font-serif text-xl text-primary-900">
                    {t("variantsTitle")}
                  </h2>
                </div>
                <ul className="divide-y divide-muted">
                  {service.variants.map((v) => (
                    <li
                      key={v.id}
                      className="flex items-center justify-between gap-4 p-6 sm:p-8"
                    >
                      <div>
                        <h3 className="font-medium text-primary-900">
                          {v.name[loc]}
                        </h3>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-foreground/60">
                          <Clock size={12} />
                          {formatDuration(v.duration, loc)}
                        </div>
                      </div>
                      <div className="text-lg font-medium text-primary-800">
                        {formatPrice(v.price, loc)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-600">
                    {t("duration")}
                  </div>
                  <div className="mt-1 font-medium text-primary-900 text-lg flex items-center gap-2">
                    <Clock size={16} />
                    {formatDuration(service.duration ?? 0, loc)}
                  </div>
                </div>
                <div className="sm:text-right">
                  <div className="text-xs uppercase tracking-widest text-primary-600">
                    Prix
                  </div>
                  <div className="mt-1 font-serif text-3xl text-primary-900">
                    {formatPrice(service.price ?? 0, loc)}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-xs text-foreground/55 max-w-md">
              {t("detailPriceNote")}
            </p>
            <BookButton withIcon className="whitespace-nowrap">
              {t("bookThis")}
            </BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
