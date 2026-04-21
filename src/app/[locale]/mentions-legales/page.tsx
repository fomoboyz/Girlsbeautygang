import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";

const CONTENT = {
  fr: {
    title: "Mentions légales",
    sections: [
      {
        h: "Éditeur du site",
        p: "Le présent site est édité par Girls Beauty Gang, exploité à Saint-Maur-des-Fossés (94). Contact : contact@girlsbeautygang.fr.",
      },
      {
        h: "Hébergement",
        p: "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
      },
      {
        h: "Propriété intellectuelle",
        p: "L'ensemble des éléments (textes, photos, logo, graphismes) présents sur ce site sont la propriété exclusive de Girls Beauty Gang. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.",
      },
      {
        h: "Réservations",
        p: "Les réservations sont gérées via la plateforme Treatwell. Les informations transmises lors d'une réservation sont soumises aux conditions d'utilisation de Treatwell.",
      },
      {
        h: "Responsabilité",
        p: "Les informations diffusées sur ce site sont présentées à titre indicatif. Girls Beauty Gang ne saurait être tenu responsable des erreurs ou omissions.",
      },
      {
        h: "Droit applicable",
        p: "Le présent site est soumis au droit français. En cas de litige, seuls les tribunaux français seront compétents.",
      },
    ],
  },
  es: {
    title: "Aviso legal",
    sections: [
      {
        h: "Editor del sitio",
        p: "Este sitio es editado por Girls Beauty Gang, con sede en Saint-Maur-des-Fossés (94). Contacto: contact@girlsbeautygang.fr.",
      },
      {
        h: "Alojamiento",
        p: "El sitio está alojado por Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, EE. UU.",
      },
      {
        h: "Propiedad intelectual",
        p: "El conjunto de elementos (textos, fotos, logo, gráficos) presentes en este sitio son propiedad exclusiva de Girls Beauty Gang. Queda prohibida cualquier reproducción, incluso parcial, sin autorización previa.",
      },
      {
        h: "Reservas",
        p: "Las reservas se gestionan a través de la plataforma Treatwell. La información transmitida durante una reserva está sujeta a las condiciones de uso de Treatwell.",
      },
      {
        h: "Responsabilidad",
        p: "La información difundida en este sitio se presenta a título indicativo. Girls Beauty Gang no se responsabiliza de errores u omisiones.",
      },
      {
        h: "Ley aplicable",
        p: "Este sitio está sujeto a la ley francesa. En caso de litigio, solo los tribunales franceses serán competentes.",
      },
    ],
  },
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = CONTENT[locale as "fr" | "es"];

  return (
    <>
      <PageHeader title={content.title} />
      <section className="pb-24">
        <div className="container-x max-w-3xl space-y-8">
          {content.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-xl text-primary-900 mb-2">
                {s.h}
              </h2>
              <p className="text-foreground/75 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
