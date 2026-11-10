import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Second Tour",
};

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Qui est responsable de tes données ?</h2>
      <p>
        {LEGAL.owner}, {LEGAL.status}, {LEGAL.address}. Contact :{" "}
        {SITE.contactEmail}.
      </p>

      <h2>Quelles données, pourquoi ?</h2>
      <ul>
        <li>
          <strong>Paiement et abonnement :</strong> ton nom, ton email et les
          informations d&apos;abonnement, collectés par Stripe au moment du
          paiement. Finalité : exécuter le contrat, te donner accès au service,
          émettre les reçus.
        </li>
        <li>
          <strong>Réponses au quiz :</strong> les trois réponses (mode de
          réservation, nombre de clients, prix moyen) sont associées au paiement
          pour comprendre ta situation. Elles ne contiennent aucun nom.
        </li>
        <li>
          <strong>Mesure d&apos;audience :</strong> nombre de visites et pages
          vues, via Vercel Web Analytics, sans cookie ni profil individuel.
        </li>
      </ul>

      <h2>Combien de temps ?</h2>
      <p>
        Les données d&apos;abonnement sont conservées pendant la durée du
        contrat, puis le temps nécessaire aux obligations comptables
        (10 ans pour les pièces comptables).
      </p>

      <h2>Avec qui sont-elles partagées ?</h2>
      <p>
        Uniquement avec nos prestataires techniques : Stripe (paiement) et
        Vercel (hébergement). Aucune donnée n&apos;est vendue.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux demander l&apos;accès, la rectification ou la suppression de tes
        données en écrivant à {SITE.contactEmail}. Tu peux aussi saisir la
        CNIL (cnil.fr) si tu estimes que tes droits ne sont pas respectés.
      </p>

      <h2>Les données de tes clients</h2>
      <p>
        [À compléter lors de l&apos;ouverture du service : quand tu enregistreras
        les emails de tes clients dans Second Tour, tu seras responsable de ces
        données et nous les traiterons pour ton compte. Cette section précisera
        alors le recueil du consentement et la désinscription.]
      </p>

      <p className="text-sm text-gris">
        Dernière mise à jour : novembre 2026.
      </p>
    </LegalPage>
  );
}
