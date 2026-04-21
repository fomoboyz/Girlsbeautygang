"use client";

import { cn } from "@/lib/utils";
import { useBooking } from "@/components/booking/BookingProvider";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function BookButton({
  children,
  variant = "primary",
  className,
  withIcon = false,
  serviceSlug,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withIcon?: boolean;
  serviceSlug?: string;
}) {
  const { open } = useBooking();

  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "btn-ghost";

  return (
    <button
      type="button"
      onClick={() => open(serviceSlug)}
      className={cn(base, className)}
    >
      {withIcon && <Sparkles size={16} />}
      {children}
    </button>
  );
}
