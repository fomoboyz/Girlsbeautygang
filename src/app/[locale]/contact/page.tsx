import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, MapPin, Clock } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import PageHeader from "@/components/ui/PageHeader";
import BookButton from "@/components/ui/BookButton";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tNav = await getTranslations("nav");

  const cards = [
    {
      Icon: WhatsAppIcon,
      label: t("whatsapp"),
      value: "+33 6 82 34 34 67",
      href: "https://wa.me/33682343467",
    },
    {
      Icon: InstagramIcon,
      label: t("instagram"),
      value: "@girlsbeautygang",
      href: "https://instagram.com/girlsbeautygang",
    },
    {
      Icon: Mail,
      label: t("email"),
      value: "contact@girlsbeautygang.fr",
      href: "mailto:contact@girlsbeautygang.fr",
    },
    {
      Icon: MapPin,
      label: t("location"),
      value: t("locationText"),
      href: null,
    },
    {
      Icon: Clock,
      label: t("hours"),
      value: t("hoursText"),
      href: null,
    },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="pb-24">
        <div className="container-x max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                    <Icon size={18} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-primary-600 mb-1">
                    {label}
                  </div>
                  <div className="text-base text-primary-900 whitespace-pre-line leading-relaxed">
                    {value}
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-2xl bg-white border border-muted p-6 hover:border-primary-300 transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="rounded-2xl bg-white border border-muted p-6"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <BookButton withIcon>{tNav("bookNow")}</BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
