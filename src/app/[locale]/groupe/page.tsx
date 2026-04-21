import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sparkles, Users, Home } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import GroupForm from "@/components/group/GroupForm";

export default async function GroupPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("group");

  const occasions = t.raw("occasions") as string[];
  const steps = t.raw("steps") as string[];

  return (
    <>
      <PageHeader
        eyebrow="3+"
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="pb-10">
        <div className="container-x max-w-5xl grid md:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl text-primary-900 mb-5 flex items-center gap-2">
              <Sparkles size={20} className="text-primary-600" />
              {t("occasionsTitle")}
            </h2>
            <ul className="space-y-2.5">
              {occasions.map((occ) => (
                <li
                  key={occ}
                  className="flex items-center gap-3 rounded-xl bg-white border border-muted px-4 py-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span className="text-sm text-foreground/80">{occ}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary-900 mb-5 flex items-center gap-2">
              <Home size={20} className="text-primary-600" />
              {t("howItWorks")}
            </h2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-medium shrink-0">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm text-foreground/80 leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-primary-900 mb-6 flex items-center gap-2">
            <Users size={22} className="text-primary-600" />
            {t("formTitle")}
          </h2>
          <GroupForm />
        </div>
      </section>
    </>
  );
}
