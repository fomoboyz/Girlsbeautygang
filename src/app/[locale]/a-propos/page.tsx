import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sparkles, Gem, Ear } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import BookButton from "@/components/ui/BookButton";

const VALUES = [
  { key: "tailored", Icon: Sparkles },
  { key: "premium", Icon: Gem },
  { key: "listening", Icon: Ear },
] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");

  return (
    <>
      <PageHeader title={t("title")} />
      <section className="pb-20">
        <div className="container-x grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-5">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("intro")}
            </p>
            <div>
              <BookButton withIcon>{tNav("bookNow")}</BookButton>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-primary-200 via-beige to-nude relative overflow-hidden shadow-xl shadow-primary-500/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_70%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50/40">
        <div className="container-x">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-900 mb-10 max-w-lg">
            {t("valuesTitle")}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {VALUES.map(({ key, Icon }) => (
              <div
                key={key}
                className="rounded-2xl bg-white border border-muted p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-lg text-primary-900 mb-2">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {t(`values.${key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
