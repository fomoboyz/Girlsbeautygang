"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { StaticReview } from "@/data/reviews";

export default function ReviewCard({
  review,
  index = 0,
  variant = "compact",
}: {
  review: StaticReview;
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
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, k) => (
            <Star key={k} size={14} className="fill-accent text-accent" />
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-wider text-primary-600/70">
          {review.source}
        </span>
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
        {review.date && (
          <span className="text-foreground/45">{review.date}</span>
        )}
      </footer>
    </motion.blockquote>
  );
}
