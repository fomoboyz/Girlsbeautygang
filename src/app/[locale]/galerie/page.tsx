import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import InstagramIcon from "@/components/ui/InstagramIcon";
import PageHeader from "@/components/ui/PageHeader";
import { gallery } from "@/data/gallery";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery");
  const loc = locale as "fr" | "es";

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")}>
        <a
          href="https://instagram.com/girlsbeautygang"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <InstagramIcon size={16} />
          {t("followCta")}
        </a>
      </PageHeader>
      <section className="pb-24">
        <div className="container-x">
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 via-beige to-nude relative aspect-[3/4]"
              >
                <Image
                  src={item.src}
                  alt={item.alt[loc]}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
