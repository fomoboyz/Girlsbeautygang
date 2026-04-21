"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Julie M.",
    text: "Je ne peux plus me passer de Girls Beauty Gang ! Un vrai moment cocooning, des ongles magnifiques qui tiennent au moins 3 semaines.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "Pose de cils impeccable, regard de biche garanti. Ambiance ultra sympa, je recommande à toutes mes copines.",
    rating: 5,
  },
  {
    name: "Camille R.",
    text: "Les taches de rousseurs semi-permanentes sont exactement ce que je voulais. Super naturel, je suis conquise !",
    rating: 5,
  },
];

export default function ReviewsTeaser() {
  const t = useTranslations("home");

  return (
    <section className="py-20 sm:py-28 bg-primary-50/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900 leading-tight">
            {t("reviewsTitle")}
          </h2>
          <p className="mt-3 text-foreground/65">{t("reviewsSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-muted p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, k) => (
                  <Star key={k} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed italic">
                « {review.text} »
              </p>
              <footer className="mt-4 text-xs font-medium text-primary-700">
                — {review.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
