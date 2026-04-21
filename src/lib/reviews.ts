import {
  reviews,
  googleSummary,
  treatwellSummary,
  type StaticReview,
} from "@/data/reviews";

export type { StaticReview };
export { googleSummary, treatwellSummary };

export function getReviews() {
  return reviews;
}

export function getGoogleReviews(limit?: number) {
  const google = reviews.filter((r) => r.source === "Google");
  return limit ? google.slice(0, limit) : google;
}

export function getAllSources(limit?: number) {
  return limit ? reviews.slice(0, limit) : reviews;
}
