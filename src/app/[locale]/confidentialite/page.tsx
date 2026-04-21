import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";

const CONTENT = {
  fr: {
    title: "Politique de confidentialité",
    sections: [
      {
        h: "Données collectées",
        p: "Nous collectons uniquement les données que vous choisissez de nous transmettre via le formulaire de contact groupe (nom, email, téléphone, date, nombre de participantes, message). Aucune autre donnée n'est collectée automatiquement sur ce site.",
      },
      {
        h: "Finalité du traitement",
        p: "Vos données sont utilisées exclusivement pour répondre à votre demande et organiser votre prestation. Elles ne sont jamais revendues ni partagées avec des tiers à des fins commerciales.",
      },
      {
        h: "Réservations Treatwell",
        p: "Les réservations en ligne sont traitées par Treatwell, qui est responsable du traitement des données associées. Merci de consulter leur politique de confidentialité : treatwell.fr/privacy.",
      },
      {
        h: "Durée de conservation",
        p: "Vos données de contact sont conservées pendant 3 ans après notre dernier échange, puis supprimées.",
      },
      {
        h: "Vos droits",
        p: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, écrivez à contact@girlsbeautygang.fr.",
      },
      {
        h: "Cookies",
        p: "Ce site n'utilise pas de cookies de suivi publicitaire. Seuls les cookies techniques strictement nécessaires au fonctionnement peuvent être déposés.",
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    sections: [
      {
        h: "Datos recopilados",
        p: "Recopilamos únicamente los datos que nos transmitas a través del formulario de contacto de grupo (nombre, email, teléfono, fecha, número de participantes, mensaje). Ningún otro dato se recopila automáticamente en este sitio.",
      },
      {
        h: "Finalidad del tratamiento",
        p: "Tus datos se utilizan exclusivamente para responder a tu solicitud y organizar tu servicio. Nunca se revenden ni se comparten con terceros con fines comerciales.",
      },
      {
        h: "Reservas Treatwell",
        p: "Las reservas online son gestionadas por Treatwell, responsable del tratamiento de los datos asociados. Consulta su política de privacidad: treatwell.fr/privacy.",
      },
      {
        h: "Duración de conservación",
        p: "Tus datos de contacto se conservan durante 3 años después de nuestro último intercambio, y luego se eliminan.",
      },
      {
        h: "Tus derechos",
        p: "De acuerdo con el RGPD, tienes derecho de acceso, rectificación, eliminación y portabilidad de tus datos. Para ejercer estos derechos, escribe a contact@girlsbeautygang.fr.",
      },
      {
        h: "Cookies",
        p: "Este sitio no utiliza cookies de seguimiento publicitario. Solo pueden depositarse cookies técnicas estrictamente necesarias para el funcionamiento.",
      },
    ],
  },
};

export default async function PrivacyPage({
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
