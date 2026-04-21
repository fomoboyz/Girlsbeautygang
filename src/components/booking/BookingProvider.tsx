"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BookingModal from "./BookingModal";

type BookingContextValue = {
  open: (serviceSlug?: string) => void;
  close: () => void;
  isOpen: boolean;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export default function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BookingModal open={isOpen} onClose={close} />
    </BookingContext.Provider>
  );
}
