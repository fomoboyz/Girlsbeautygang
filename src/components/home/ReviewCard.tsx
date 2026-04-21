"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { GoogleReview } from "@/lib/reviews";

export default function ReviewCard({
  review,
  index = 0,
  variant = "compact",
}: {
  review: GoogleReview;
  index?: number;
  variant?: "compact" | "full";
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="rounded-2xl bg-white border border-muted p-6 shadow-sm flex flex-col"
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, k) => (
          <Star key={k} size={14} className="fill-accent text-accent" />
        ))}
      </div>
      <p
        className={`text-sm text-foreground/75 leading-relaxed italic ${
          variant === "compact" ? "line-clamp-5" : ""
        }`}
      >
        « {review.text} »
      </p>
      <footer className="mt-4 flex items-center justify-between text-xs">
        <span className="font-medium text-primary-700">— {review.author}</span>
        {review.relativeTime && (
          <span className="text-foreground/45">{review.relativeTime}</span>
        )}
      </footer>
    </motion.blockquote>
  );
}
