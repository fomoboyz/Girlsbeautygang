import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

const NAV_LINKS = [
  { href: "/services", key: "services" },
  { href: "/galerie", key: "gallery" },
  { href: "/avis", key: "reviews" },
  { href: "/groupe", key: "group" },
  { href: "/a-propos", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-muted bg-primary-50/40">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-primary-900">
            Girls Beauty Gang
          </div>
          <p className="mt-3 text-sm text-foreground/70 whitespace-pre-line max-w-sm">
            {t("footer.tagline")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com/girlsbeautygang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2.5 bg-white border border-muted hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="mailto:contact@girlsbeautygang.fr"
              aria-label="Email"
              className="rounded-full p-2.5 bg-white border border-muted hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary-900 mb-4">
            {t("footer.navTitle")}
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  className="text-foreground/70 hover:text-primary-700 transition-colors"
                >
                  {t(`nav.${l.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary-900 mb-4">
            {t("footer.legalTitle")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/mentions-legales"
                className="text-foreground/70 hover:text-primary-700 transition-colors"
              >
                {t("footer.legal")}
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                className="text-foreground/70 hover:text-primary-700 transition-colors"
              >
                {t("footer.privacy")}
              </Link>
            </li>
            <li className="flex items-start gap-2 text-foreground/70 pt-2">
              <MapPin size={14} className="mt-1 shrink-0 opacity-60" />
              <span>Saint-Maur-des-Fossés</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-muted">
        <div className="container-x flex flex-col sm:flex-row justify-between items-center gap-2 py-6 text-xs text-foreground/50">
          <span>
            © {year} Girls Beauty Gang. {t("footer.rights")}
          </span>
          <span>{t("footer.madeWith")}</span>
        </div>
      </div>
    </footer>
  );
}
