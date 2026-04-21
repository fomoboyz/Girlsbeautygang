"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import BookButton from "@/components/ui/BookButton";
import LocaleSwitcher from "./LocaleSwitcher";

const LINKS = [
  { href: "/" as const, key: "home" },
  { href: "/services" as const, key: "services" },
  { href: "/galerie" as const, key: "gallery" },
  { href: "/avis" as const, key: "reviews" },
  { href: "/groupe" as const, key: "group" },
  { href: "/a-propos" as const, key: "about" },
  { href: "/contact" as const, key: "contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-muted"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-lg sm:text-xl tracking-wide text-primary-900"
        >
          Girls Beauty Gang
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-primary-700 font-medium"
                    : "text-foreground/80 hover:text-primary-700"
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <div className="hidden sm:block">
            <BookButton withIcon>{t("book")}</BookButton>
          </div>
          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden rounded-full p-2 hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-muted bg-background">
          <nav className="container-x flex flex-col py-4 gap-1">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "py-3 px-3 rounded-lg text-base",
                    active
                      ? "bg-primary-50 text-primary-900 font-medium"
                      : "hover:bg-muted"
                  )}
                >
                  {t(link.key)}
                </Link>
              );
            })}
            <div className="pt-3 px-3 sm:hidden">
              <BookButton withIcon className="w-full">
                {t("bookNow")}
              </BookButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
