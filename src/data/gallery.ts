export type GalleryItem = {
  src: string;
  alt: { fr: string; es: string };
  category: "mains" | "pieds" | "regard" | "maquillage";
  featured?: boolean;
};

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/01.jpg",
    alt: {
      fr: "Baby boomer nude avec nail art fleur 3D",
      es: "Baby boomer nude con flor 3D",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/02.jpg",
    alt: {
      fr: "Semi-permanent milky pink ongles courts",
      es: "Semipermanente milky pink uñas cortas",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/03.jpg",
    alt: {
      fr: "Semi-permanent nude avec pois blancs",
      es: "Semipermanente nude con lunares blancos",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/04.jpg",
    alt: {
      fr: "French marron chocolat avec pois blancs",
      es: "French chocolate con lunares blancos",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/05.jpg",
    alt: {
      fr: "Nail art multicolore : cognac, bleu et french étoilé",
      es: "Nail art multicolor: coñac, azul y french estrellado",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/06.jpg",
    alt: {
      fr: "Nude rosé avec fleur 3D et accent or",
      es: "Nude rosado con flor 3D y detalle oro",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/07.jpg",
    alt: {
      fr: "Semi-permanent bleu nuit effet chromé",
      es: "Semipermanente azul noche efecto cromado",
    },
    category: "mains",
  },
  {
    src: "/gallery/08.jpg",
    alt: {
      fr: "Nail art bordeaux et rose avec pois en duo",
      es: "Nail art burdeos y rosa con lunares a dúo",
    },
    category: "mains",
  },
  {
    src: "/gallery/09.jpg",
    alt: {
      fr: "Nail art milky avec perles 3D",
      es: "Nail art milky con perlas 3D",
    },
    category: "mains",
  },
];

export function getFeaturedGallery(limit?: number) {
  const featured = gallery.filter((g) => g.featured);
  return limit ? featured.slice(0, limit) : featured;
}
