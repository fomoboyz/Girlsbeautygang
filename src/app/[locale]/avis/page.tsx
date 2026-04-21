import { getTranslations, setRequestLocale } from "next-intl/server";
import { Star, ExternalLink } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import BookButton from "@/components/ui/BookButton";

const REVIEWS = [
  {
    name: "Julie M.",
    source: "Google",
    rating: 5,
    text: "Je ne peux plus me passer de Girls Beauty Gang ! Un vrai moment cocooning, des ongles magnifiques qui tiennent au moins 3 semaines. Les conseils sont personnalisés et on ressort toujours avec le sourire.",
  },
  {
    name: "Sarah L.",
    source: "Google",
    rating: 5,
    text: "Pose de cils impeccable, regard de biche garanti. Ambiance ultra sympa, je recommande à toutes mes copines. Le salon est propre et très bien situé.",
  },
  {
    name: "Camille R.",
    source: "Instagram",
    rating: 5,
    text: "Les taches de rousseurs semi-permanentes sont exactement ce que je voulais. Super naturel, tenue longue durée, je suis conquise !",
  },
  {
    name: "Léa B.",
    source: "Google",
    rating: 5,
    text: "Un vrai coup de cœur. Je suis hyper difficile avec mes ongles et je n'ai rien à redire, tout est parfait. Merci !",
  },
  {
    name: "Manon D.",
    source: "Google",
    rating: 5,
    text: "Accueil au top, prestation impeccable, et les prix sont honnêtes pour la qualité. Je recommande vivement, on se sent vraiment bien.",
  },
  {
    name: "Inès K.",
    source: "Instagram",
    rating: 5,
    text: "Rehaussement de cils magnifique, effet naturel, je me réveille déjà maquillée ! Un gain de temps énorme.",
  },
];

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("reviews");
  const tCommon = await getTranslations("nav");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")}>
        <div className="flex items-center gap-2 text-primary-800">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-accent text-accent"
              />
            ))}
          </div>
          <span className="font-medium">4,9 / 5</span>
          <span className="text-foreground/55">· 120+ avis</span>
        </div>
      </PageHeader>

      <section className="pb-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEWS.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl bg-white border border-muted p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, k) => (
                      <Star
                        key={k}
                        size={14}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-primary-600/70">
                    {review.source}
                  </span>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed italic">
                  « {review.text} »
                </p>
                <footer className="mt-4 text-xs font-medium text-primary-700">
                  — {review.name}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/search?q=girls+beauty+gang+saint-maur"
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
