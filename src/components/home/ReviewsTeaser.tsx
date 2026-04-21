import { getTranslations, getLocale } from "next-intl/server";
import { Star } from "lucide-react";
import {
  getFeaturedReviews,
  googleSummary,
  treatwellSummary,
} from "@/data/reviews";
import ReviewCard from "./ReviewCard";

export default async function ReviewsTeaser() {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as "fr" | "es";
  const reviews = getFeaturedReviews(3);

  return (
    <section className="py-20 sm:py-28 bg-primary-50/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex justify-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900 leading-tight">
            {t("reviewsTitle")}
          </h2>
          <p className="mt-3 text-foreground/65">{t("reviewsSubtitle")}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={googleSummary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-muted px-4 py-2 text-sm hover:border-primary-300 transition-colors"
            >
              <span className="font-semibold text-primary-800">
                {googleSummary.rating.toFixed(1)}
              </span>
              <Star size={14} className="fill-accent text-accent" />
              <span className="text-foreground/70">
                {googleSummary.count}{" "}
                {locale === "fr" ? "avis Google" : "reseñas Google"}
              </span>
            </a>
            <a
              href={treatwellSummary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-muted px-4 py-2 text-sm hover:border-primary-300 transition-colors"
            >
              <span className="font-semibold text-primary-800">
                {treatwellSummary.rating.toFixed(1)}
              </span>
              <Star size={14} className="fill-accent text-accent" />
              <span className="text-foreground/70">
                {treatwellSummary.count}{" "}
                {locale === "fr" ? "avis Treatwell" : "reseñas Treatwell"}
              </span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {reviews.map((review, i) => (
            <ReviewCard
              key={`${review.author}-${i}`}
              review={review}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
