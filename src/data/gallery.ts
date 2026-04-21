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
      fr: "Baby boomer nude avec fleur 3D blanche et perle dorée",
      es: "Baby boomer nude con flor 3D blanca y perla dorada",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/02.jpg",
    alt: {
      fr: "Nail art multicolore cognac, bleu et french avec étoiles dorées",
      es: "Nail art multicolor coñac, azul y french con estrellas doradas",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/03.jpg",
    alt: {
      fr: "French chocolat à pois blancs",
      es: "French chocolate con lunares blancos",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/04.jpg",
    alt: {
      fr: "Semi-permanent nude rosé avec fleur 3D blanche et accent doré",
      es: "Semipermanente nude rosado con flor 3D blanca y detalle dorado",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/05.jpg",
    alt: {
      fr: "Duo bordeaux et rose avec pois en contraste",
      es: "Dúo burdeos y rosa con lunares en contraste",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/06.jpg",
    alt: {
      fr: "Semi-permanent nude à pois blancs",
      es: "Semipermanente nude con lunares blancos",
    },
    category: "mains",
    featured: true,
  },
  {
    src: "/gallery/07.jpg",
    alt: {
      fr: "Nail art milky avec perles 3D en relief",
      es: "Nail art milky con perlas 3D en relieve",
    },
    category: "mains",
  },
  {
    src: "/gallery/08.jpg",
    alt: {
      fr: "Semi-permanent milky pink ongles courts carrés",
      es: "Semipermanente milky pink uñas cortas cuadradas",
    },
    category: "mains",
  },
  {
    src: "/gallery/09.jpg",
    alt: {
      fr: "Semi-permanent bleu nuit effet chromé",
      es: "Semipermanente azul noche efecto cromado",
    },
    category: "mains",
  },
];

export function getFeaturedGallery(limit?: number) {
  const featured = gallery.filter((g) => g.featured);
  return limit ? featured.slice(0, limit) : featured;
}
