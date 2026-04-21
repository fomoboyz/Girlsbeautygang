export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
};

export type ReviewsSummary = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
};

const FALLBACK: ReviewsSummary = {
  rating: 4.9,
  count: 21,
  reviews: [],
};

export async function getGoogleReviews(
  locale: "fr" | "es" = "fr"
): Promise<ReviewsSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=${locale}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 60 * 60 * 12 },
      }
    );

    if (!res.ok) return FALLBACK;

    const data = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? []).map(
      (r: {
        authorAttribution?: {
          displayName?: string;
          uri?: string;
          photoUri?: string;
        };
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        relativePublishTimeDescription?: string;
      }) => ({
        author: r.authorAttribution?.displayName ?? "Client",
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        authorUrl: r.authorAttribution?.uri,
        profilePhotoUrl: r.authorAttribution?.photoUri,
      })
    );

    return {
      rating: data.rating ?? FALLBACK.rating,
      count: data.userRatingCount ?? FALLBACK.count,
      reviews: reviews.slice(0, 5),
    };
  } catch {
    return FALLBACK;
  }
}

// Treatwell doesn't expose a public reviews API.
// We surface the public profile stats instead.
export const treatwellSummary = {
  rating: 4.9,
  count: 92,
  url: "https://widget.treatwell.fr/salon/girls-beauty-gang/",
};
