import { getTranslations, setRequestLocale } from "next-intl/server";
import { Star, ExternalLink } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import BookButton from "@/components/ui/BookButton";
import ReviewCard from "@/components/home/ReviewCard";
import {
  reviews,
  googleSummary,
  treatwellSummary,
} from "@/data/reviews";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as "fr" | "es";
  const t = await getTranslations("reviews");
  const tCommon = await getTranslations("nav");
  const totalRating = (
    (googleSummary.rating * googleSummary.count +
      treatwellSummary.rating * treatwellSummary.count) /
    (googleSummary.count + treatwellSummary.count)
  ).toFixed(1);
  const totalCount = googleSummary.count + treatwellSummary.count;

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")}>
        <div className="flex items-center gap-2 text-primary-800">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="font-medium">{totalRating} / 5</span>
          <span className="text-foreground/55">
            · {totalCount} {loc === "fr" ? "avis" : "reseñas"}
          </span>
        </div>
      </PageHeader>

      <section className="pb-12">
        <div className="container-x grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <a
            href={googleSummary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white border border-muted p-6 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs uppercase tracking-widest text-primary-600">
                Google
              </div>
              <ExternalLink
                size={16}
                className="text-primary-400 group-hover:text-primary-700 transition-colors"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl text-primary-900">
                {googleSummary.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm text-foreground/65">
              {googleSummary.count}{" "}
              {loc === "fr" ? "avis vérifiés" : "reseñas verificadas"}
            </div>
          </a>

          <a
            href={treatwellSummary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white border border-muted p-6 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs uppercase tracking-widest text-primary-600">
                Treatwell
              </div>
              <ExternalLink
                size={16}
                className="text-primary-400 group-hover:text-primary-700 transition-colors"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl text-primary-900">
                {treatwellSummary.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm text-foreground/65">
              {treatwellSummary.count}{" "}
              {loc === "fr" ? "avis vérifiés" : "reseñas verificadas"}
            </div>
          </a>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <ReviewCard
                key={`${review.author}-${i}`}
                review={review}
                index={i}
                variant="full"
              />
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-muted overflow-hidden shadow-sm">
            <div className="flex items-center justify-between border-b border-muted p-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-600 mb-1">
                  Treatwell
                </div>
                <div className="font-serif text-primary-900">
                  {loc === "fr"
                    ? "Tous les avis vérifiés Treatwell"
                    : "Todas las reseñas verificadas Treatwell"}
                </div>
              </div>
              <a
                href={treatwellSummary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                {loc === "fr" ? "Ouvrir" : "Abrir"}
                <ExternalLink size={12} />
              </a>
            </div>
            <iframe
              src={treatwellSummary.url}
              title="Treatwell — Girls Beauty Gang"
              className="w-full border-0"
              style={{ height: "620px" }}
              loading="lazy"
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={googleSummary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("googleCta")}
              <ExternalLink size={14} />
            </a>
            <BookButton withIcon>{tCommon("bookNow")}</BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
