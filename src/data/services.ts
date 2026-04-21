export type ServiceCategory = "mains" | "pieds" | "regard" | "maquillage";

export type ServiceVariant = {
  id: string;
  name: { fr: string; es: string };
  duration: number; // minutes
  price: number; // EUR
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  name: { fr: string; es: string };
  description: { fr: string; es: string };
  duration?: number;
  price?: number;
  variants?: ServiceVariant[];
  image?: string;
  featured?: boolean;
};

export const categories: Record<
  ServiceCategory,
  { label: { fr: string; es: string }; tagline: { fr: string; es: string } }
> = {
  mains: {
    label: { fr: "Beauté des mains", es: "Belleza de manos" },
    tagline: {
      fr: "Manucure, gel, vernis semi-permanent, nail art",
      es: "Manicura, gel, esmalte semipermanente, nail art",
    },
  },
  pieds: {
    label: { fr: "Beauté des pieds", es: "Belleza de pies" },
    tagline: {
      fr: "Pédicure et vernis semi-permanent",
      es: "Pedicura y esmalte semipermanente",
    },
  },
  regard: {
    label: { fr: "Beauté du regard", es: "Belleza de la mirada" },
    tagline: {
      fr: "Extensions de cils, rehaussement, sourcils",
      es: "Extensiones de pestañas, lifting, cejas",
    },
  },
  maquillage: {
    label: {
      fr: "Maquillage semi-permanent",
      es: "Maquillaje semipermanente",
    },
    tagline: {
      fr: "Taches de rousseurs, grain de beauté",
      es: "Pecas, lunar estético",
    },
  },
};

export const services: Service[] = [
  // Beauté des mains
  {
    slug: "manucure",
    category: "mains",
    name: { fr: "Manucure", es: "Manicura" },
    description: {
      fr: "Soin complet des mains et mise en forme des ongles pour une finition naturelle et soignée.",
      es: "Cuidado completo de las manos y limado de las uñas para un acabado natural y cuidado.",
    },
    duration: 35,
    price: 25,
    featured: true,
  },
  {
    slug: "gainage-gel",
    category: "mains",
    name: {
      fr: "Gainage Gel — Pose & remplissage",
      es: "Refuerzo Gel — Colocación y relleno",
    },
    description: {
      fr: "Renforcement naturel de l'ongle avec du gel, pour une tenue longue durée et un effet fin et glossy.",
      es: "Refuerzo natural de la uña con gel, tenue duradera y acabado fino y brillante.",
    },
    variants: [
      {
        id: "couleur-simple",
        name: { fr: "Couleur simple", es: "Color simple" },
        duration: 90,
        price: 50,
      },
      {
        id: "chromee",
        name: { fr: "Couleur chromée", es: "Color cromado" },
        duration: 90,
        price: 55,
      },
      {
        id: "french",
        name: { fr: "French / Baby Boomer", es: "French / Baby Boomer" },
        duration: 90,
        price: 60,
      },
    ],
    featured: true,
  },
  {
    slug: "vernis-semi-permanent",
    category: "mains",
    name: {
      fr: "Vernis semi-permanent",
      es: "Esmalte semipermanente",
    },
    description: {
      fr: "Couleur intense et tenue 3 semaines, sans abîmer l'ongle naturel.",
      es: "Color intenso y duración 3 semanas, sin dañar la uña natural.",
    },
    variants: [
      {
        id: "colore",
        name: { fr: "Coloré", es: "Color" },
        duration: 60,
        price: 37,
      },
      {
        id: "french",
        name: { fr: "French", es: "French" },
        duration: 65,
        price: 47,
      },
    ],
    featured: true,
  },
  {
    slug: "gel-capsules",
    category: "mains",
    name: {
      fr: "Gel — Pose avec capsules",
      es: "Gel — Extensiones con cápsulas",
    },
    description: {
      fr: "Extensions sur mesure avec capsules pour allonger et sculpter les ongles.",
      es: "Extensiones a medida con cápsulas para alargar y esculpir las uñas.",
    },
    variants: [
      {
        id: "colore",
        name: { fr: "Gel coloré", es: "Gel color" },
        duration: 120,
        price: 60,
      },
      {
        id: "french",
        name: { fr: "Gel French / Baby boomer", es: "Gel French / Baby boomer" },
        duration: 120,
        price: 70,
      },
    ],
  },
  {
    slug: "reparation-ongle",
    category: "mains",
    name: { fr: "Réparation d'un ongle cassé", es: "Reparación de uña rota" },
    description: {
      fr: "Réparation express d'un ongle cassé pour prolonger la tenue de votre pose.",
      es: "Reparación express de una uña rota para prolongar la duración del servicio.",
    },
    duration: 10,
    price: 2,
  },
  {
    slug: "depose-manucure",
    category: "mains",
    name: {
      fr: "Dépose semi-permanent & manucure",
      es: "Retirada semipermanente y manicura",
    },
    description: {
      fr: "Dépose en douceur du vernis semi-permanent, suivie d'une manucure complète.",
      es: "Retirada suave del esmalte semipermanente y manicura completa.",
    },
    duration: 45,
    price: 27,
  },
  {
    slug: "depose-capsules",
    category: "mains",
    name: { fr: "Dépose de capsules", es: "Retirada de cápsulas" },
    description: {
      fr: "Dépose complète des capsules pour retrouver votre ongle naturel.",
      es: "Retirada completa de las cápsulas para recuperar la uña natural.",
    },
    duration: 10,
    price: 32,
  },
  {
    slug: "nail-art",
    category: "mains",
    name: { fr: "Nail Art (sur devis)", es: "Nail Art (presupuesto)" },
    description: {
      fr: "Décorations personnalisées, motifs sur mesure selon vos envies.",
      es: "Decoraciones personalizadas y diseños a medida según tus gustos.",
    },
    duration: 5,
    price: 5,
  },
  {
    slug: "depose-express",
    category: "mains",
    name: {
      fr: "Dépose semi-permanent express",
      es: "Retirada semipermanente express",
    },
    description: {
      fr: "Dépose rapide et soignée du vernis semi-permanent, sans manucure.",
      es: "Retirada rápida y cuidada del esmalte semipermanente, sin manicura.",
    },
    duration: 20,
    price: 15,
  },
  // Beauté des pieds
  {
    slug: "beaute-pieds-semi",
    category: "pieds",
    name: {
      fr: "Beauté des pieds & vernis semi-permanent",
      es: "Pedicura y esmalte semipermanente",
    },
    description: {
      fr: "Soin complet des pieds avec limage, cuticules et pose de vernis semi-permanent.",
      es: "Cuidado completo de los pies con limado, cutículas y esmalte semipermanente.",
    },
    variants: [
      {
        id: "colore",
        name: { fr: "Coloré", es: "Color" },
        duration: 55,
        price: 37,
      },
      {
        id: "french",
        name: { fr: "French", es: "French" },
        duration: 60,
        price: 47,
      },
    ],
    featured: true,
  },
  {
    slug: "depose-pieds",
    category: "pieds",
    name: {
      fr: "Dépose semi-permanent pieds",
      es: "Retirada semipermanente pies",
    },
    description: {
      fr: "Dépose du vernis semi-permanent sur les ongles des pieds.",
      es: "Retirada del esmalte semipermanente de las uñas de los pies.",
    },
    duration: 20,
    price: 10,
  },
  // Beauté du regard
  {
    slug: "extensions-cil-a-cil",
    category: "regard",
    name: {
      fr: "Extensions de cils « Cil à cil »",
      es: "Extensiones pestaña a pestaña",
    },
    description: {
      fr: "Pose d'une extension par cil naturel pour un résultat élégant et discret.",
      es: "Una extensión por cada pestaña natural para un resultado elegante y discreto.",
    },
    variants: [
      {
        id: "remplissage",
        name: {
          fr: "Remplissage (3 semaines)",
          es: "Relleno (3 semanas)",
        },
        duration: 90,
        price: 50,
      },
      {
        id: "complete",
        name: { fr: "Pose complète", es: "Colocación completa" },
        duration: 75,
        price: 75,
      },
    ],
    featured: true,
  },
  {
    slug: "extensions-mixte",
    category: "regard",
    name: {
      fr: "Extensions de cils « Pose mixte »",
      es: "Extensiones de pestañas mixtas",
    },
    description: {
      fr: "Mélange de cil à cil et volume pour un regard dense et naturel.",
      es: "Mezcla de pestaña a pestaña y volumen para una mirada densa y natural.",
    },
    duration: 90,
    price: 95,
  },
  {
    slug: "extensions-volume-russe",
    category: "regard",
    name: {
      fr: "Extensions « Volume russe »",
      es: "Extensiones « Volumen ruso »",
    },
    description: {
      fr: "Bouquets d'extensions ultra-fines pour un regard spectaculaire et dense.",
      es: "Abanicos de extensiones ultrafinas para una mirada espectacular y densa.",
    },
    duration: 150,
    price: 110,
    featured: true,
  },
  {
    slug: "teinture-cils",
    category: "regard",
    name: { fr: "Teinture des cils", es: "Tinte de pestañas" },
    description: {
      fr: "Teinture professionnelle pour intensifier naturellement vos cils.",
      es: "Tinte profesional para intensificar naturalmente las pestañas.",
    },
    duration: 30,
    price: 20,
  },
  {
    slug: "rehaussement-teinture",
    category: "regard",
    name: {
      fr: "Rehaussement & teinture des cils",
      es: "Lifting y tinte de pestañas",
    },
    description: {
      fr: "Courbe naturelle et couleur intense, effet mascara pendant 6 à 8 semaines.",
      es: "Curva natural y color intenso, efecto máscara durante 6 a 8 semanas.",
    },
    duration: 75,
    price: 60,
    featured: true,
  },
  {
    slug: "epilation-sourcils",
    category: "regard",
    name: {
      fr: "Épilation des sourcils à la pince",
      es: "Depilación de cejas con pinza",
    },
    description: {
      fr: "Dessin précis des sourcils à la pince pour un résultat sur-mesure.",
      es: "Diseño preciso de las cejas con pinza para un resultado a medida.",
    },
    duration: 30,
    price: 15,
  },
  {
    slug: "brow-lift",
    category: "regard",
    name: { fr: "Brow Lift", es: "Brow Lift" },
    description: {
      fr: "Restructuration et fixation de vos sourcils pour un effet plus fourni et symétrique.",
      es: "Reestructuración y fijación de las cejas para un efecto más poblado y simétrico.",
    },
    duration: 75,
    price: 50,
  },
  // Maquillage semi-permanent
  {
    slug: "taches-rousseurs",
    category: "maquillage",
    name: {
      fr: "Taches de rousseurs semi-permanentes",
      es: "Pecas semipermanentes",
    },
    description: {
      fr: "Dessin délicat de taches de rousseurs sur-mesure pour un effet frais et naturel.",
      es: "Dibujo delicado de pecas a medida para un efecto fresco y natural.",
    },
    variants: [
      {
        id: "premiere",
        name: { fr: "Première visite", es: "Primera visita" },
        duration: 45,
        price: 100,
      },
      {
        id: "retouche",
        name: { fr: "Retouche", es: "Retoque" },
        duration: 45,
        price: 50,
      },
    ],
    featured: true,
  },
  {
    slug: "grain-de-beaute",
    category: "maquillage",
    name: {
      fr: "Grain de beauté semi-permanent",
      es: "Lunar semipermanente",
    },
    description: {
      fr: "Réalisation d'un grain de beauté esthétique placé avec précision.",
      es: "Realización de un lunar estético colocado con precisión.",
    },
    duration: 35,
    price: 30,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}

export function getStartingPrice(service: Service): number {
  if (service.price !== undefined) return service.price;
  if (service.variants) return Math.min(...service.variants.map((v) => v.price));
  return 0;
}

export function getStartingDuration(service: Service): number {
  if (service.duration !== undefined) return service.duration;
  if (service.variants) return Math.min(...service.variants.map((v) => v.duration));
  return 0;
}
