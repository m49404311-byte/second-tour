import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Second Tour",
};

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p>
        Les présentes conditions s&apos;appliquent à tout abonnement souscrit
        sur ce site auprès de {LEGAL.owner} ({LEGAL.status}, SIRET{" "}
        {LEGAL.siret}), ci-après « l&apos;éditeur ».
      </p>

      <h2>1. Objet</h2>
      <p>
        {SITE.name} est un service de rappel automatique destiné aux
        professionnels (barbiers, coiffeurs) : enregistrement des coordonnées
        de leurs clients, envoi d&apos;un rappel après un délai choisi, offre de
        retour à usage unique et compteur de clients revenus.
      </p>

      <h2>2. Prix</h2>
      <ul>
        <li>Formule mensuelle : 29 € par mois.</li>
        <li>Formule annuelle : 290 € par an.</li>
      </ul>
      <p>
        {LEGAL.vatNote}. Les prix sont indiqués en euros, toutes taxes
        comprises le cas échéant.
      </p>

      <h2>3. Paiement</h2>
      <p>
        Le paiement s&apos;effectue par carte bancaire via Stripe, au moment de
        la souscription, puis à chaque échéance (mensuelle ou annuelle)
        jusqu&apos;à résiliation.
      </p>

      <h2>4. Mise à disposition du service</h2>
      <p>
        Pendant la période de lancement, l&apos;accès au service est ouvert
        dans un délai maximum de {SITE.deliveryDays} jours après le paiement.
        L&apos;éditeur t&apos;écrit à l&apos;adresse utilisée pour payer. Si
        l&apos;accès n&apos;est pas ouvert dans ce délai, tu peux demander le
        remboursement intégral.
      </p>

      <h2>5. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant {SITE.guaranteeDays} jours à compter du paiement, tu peux
        demander le remboursement de ton abonnement, sans avoir à te justifier,
        en écrivant à {SITE.contactEmail}. Le remboursement est effectué sous{" "}
        {SITE.refundDelay} sur le moyen de paiement utilisé.
      </p>

      <h2>6. Durée et résiliation</h2>
      <p>
        L&apos;abonnement est sans engagement. Tu peux le résilier à tout
        moment en écrivant à {SITE.contactEmail} ; la résiliation est effective
        sous {SITE.cancelDelay} et aucun nouveau prélèvement n&apos;est
        effectué. Pour la formule annuelle, la résiliation empêche le
        renouvellement ; l&apos;année en cours reste acquise au-delà de la
        période de garantie.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;engage à fournir le service avec soin. Il ne
        garantit pas un résultat commercial précis : les chiffres affichés sur
        le site sont des estimations. Le professionnel reste responsable des
        messages qu&apos;il envoie à ses clients et du recueil de leur
        consentement.
      </p>

      <h2>8. Données personnelles</h2>
      <p>
        Le traitement des données est détaillé dans la{" "}
        <a href="/confidentialite" className="underline underline-offset-4">
          politique de confidentialité
        </a>
        .
      </p>

      <h2>9. Droit applicable</h2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de
        litige, une solution amiable est recherchée avant toute action devant
        les tribunaux compétents.
      </p>

      <p className="text-sm text-gris">
        Dernière mise à jour : novembre 2026. [À faire relire avant la mise en
        production.]
      </p>
    </LegalPage>
  );
}
