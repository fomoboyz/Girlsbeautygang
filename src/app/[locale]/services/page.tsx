import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import CatalogFilter from "@/components/services/CatalogFilter";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="pb-24">
        <div className="container-x">
          <CatalogFilter />
        </div>
      </section>
    </>
  );
}
