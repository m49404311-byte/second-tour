import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL, SITE } from "@/lib/config";

export const metadata: Metadata = { title: "Mentions légales — Second Tour" };

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Le site {SITE.name} est édité par {LEGAL.owner}, {LEGAL.status}.
      </p>
      <ul>
        <li>SIRET : {LEGAL.siret}</li>
        <li>Adresse : {LEGAL.address}</li>
        <li>Email : {SITE.contactEmail}</li>
        <li>Directeur de la publication : {LEGAL.publisher}</li>
      </ul>
      <p>{LEGAL.vatNote}.</p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis.
      </p>

      <h2>Paiements</h2>
      <p>
        Les paiements sont traités par Stripe. L&apos;éditeur n&apos;a jamais
        accès à tes numéros de carte bancaire.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, visuels et le code du site sont la propriété de l&apos;éditeur.
        Toute reproduction sans accord écrit est interdite.
      </p>

      <h2>Contact</h2>
      <p>Pour toute question : {SITE.contactEmail}.</p>
    </LegalPage>
  );
}
