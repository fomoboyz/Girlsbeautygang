const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://girlsbeautygang.fr";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Girls Beauty Gang",
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL,
    telephone: "+33682343467",
    email: "contact@girlsbeautygang.fr",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Maur-des-Fossés",
      postalCode: "94100",
      addressCountry: "FR",
    },
    areaServed: ["Saint-Maur-des-Fossés", "Chennevières-sur-Marne", "Créteil"],
    sameAs: ["https://www.instagram.com/girlsbeautygang"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations",
      itemListElement: [
        { "@type": "Offer", name: "Manucure" },
        { "@type": "Offer", name: "Vernis semi-permanent" },
        { "@type": "Offer", name: "Extensions de cils" },
        { "@type": "Offer", name: "Maquillage semi-permanent" },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
