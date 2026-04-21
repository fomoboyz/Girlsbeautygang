// Avis réels copiés-collés depuis Google Business Profile.
// Pour mettre à jour : édite ce fichier puis commit + push.
// Les textes sont affichés tels quels. Auteur = prénom + initiale pour RGPD.

export type StaticReview = {
  author: string;
  rating: number;
  text: string;
  source: "Google" | "Treatwell" | "Instagram";
  date?: string; // format libre : "il y a 2 semaines", "janvier 2026"...
};

export const googleSummary = {
  rating: 4.9,
  count: 21,
  url: "https://share.google/pBIVtA5QygXnvbufS",
};

export const treatwellSummary = {
  rating: 4.9,
  count: 92,
  url: "https://widget.treatwell.fr/salon/girls-beauty-gang/",
};

// Exemple : remplace par tes vrais avis Google (les plus élogieux).
// Pour chaque avis, copie le texte depuis Google Business Profile.
// Garde idéalement 6 à 9 avis pour la page /avis et les 3 premiers pour la home.
export const reviews: StaticReview[] = [
  {
    author: "Julie M.",
    rating: 5,
    text: "Je ne peux plus me passer de Girls Beauty Gang ! Un vrai moment cocooning, des ongles magnifiques qui tiennent au moins 3 semaines. Les conseils sont personnalisés et on ressort toujours avec le sourire.",
    source: "Google",
    date: "il y a 2 semaines",
  },
  {
    author: "Sarah L.",
    rating: 5,
    text: "Pose de cils impeccable, regard de biche garanti. Ambiance ultra sympa, je recommande à toutes mes copines. Le salon est propre et très bien situé.",
    source: "Google",
    date: "il y a 1 mois",
  },
  {
    author: "Camille R.",
    rating: 5,
    text: "Les taches de rousseurs semi-permanentes sont exactement ce que je voulais. Super naturel, tenue longue durée, je suis conquise !",
    source: "Treatwell",
    date: "il y a 3 semaines",
  },
  {
    author: "Léa B.",
    rating: 5,
    text: "Un vrai coup de cœur. Je suis hyper difficile avec mes ongles et je n'ai rien à redire, tout est parfait. Merci !",
    source: "Google",
    date: "il y a 2 mois",
  },
  {
    author: "Manon D.",
    rating: 5,
    text: "Accueil au top, prestation impeccable, et les prix sont honnêtes pour la qualité. Je recommande vivement, on se sent vraiment bien.",
    source: "Google",
    date: "il y a 1 mois",
  },
  {
    author: "Inès K.",
    rating: 5,
    text: "Rehaussement de cils magnifique, effet naturel, je me réveille déjà maquillée ! Un gain de temps énorme.",
    source: "Treatwell",
    date: "il y a 6 semaines",
  },
];

export function getFeaturedReviews(limit = 3) {
  return reviews.slice(0, limit);
}
