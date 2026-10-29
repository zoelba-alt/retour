import Link from "next/link";

export const metadata = { title: "Conditions générales de vente | Retour" };

const h2 = "mt-8 font-titre text-2xl font-semibold text-nuit";
const p = "mt-2 leading-relaxed";

export default function ConditionsDeVente() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <Link href="/" className="font-titre text-2xl font-semibold text-brique">
        Retour
      </Link>
      <h1 className="mt-8 font-titre text-4xl font-bold text-nuit">
        Conditions générales de vente
      </h1>
      <p className="mt-2 text-sm">Dernière mise à jour : octobre 2026.</p>

      <h2 className={h2}>1. Qui vend</h2>
      <p className={p}>
        Le service Retour est proposé par l’éditeur identifié dans les mentions
        légales du site, ci-après « Retour ». Le client est un professionnel
        (salon de coiffure, barbier ou activité comparable).
      </p>

      <h2 className={h2}>2. Le service</h2>
      <p className={p}>
        Retour envoie un rappel aux clients du salon après le délai habituel de
        la prestation, avec si le salon le souhaite une offre de retour à
        usage unique, et permet de suivre le nombre de clients revenus. Dans
        sa phase de lancement, Retour configure les rappels avec le salon et le
        contacte par email sous trois jours ouvrés après son inscription.
      </p>

      <h2 className={h2}>3. Prix et paiement</h2>
      <p className={p}>
        Le prix de l’abonnement est de 39 € par mois. [À COMPLÉTER : préciser
        si ce prix est hors taxes ou toutes taxes comprises, selon votre
        situation vis-à-vis de la TVA.]
      </p>
      <p className={p}>
        Le paiement s’effectue en ligne par carte bancaire, via Stripe.
        L’abonnement est mensuel et se renouvelle automatiquement chaque mois
        jusqu’à sa résiliation.
      </p>

      <h2 className={h2}>4. Garantie satisfait ou remboursé, 15 jours</h2>
      <p className={p}>
        Pendant les 15 jours qui suivent le premier paiement, le client peut
        demander le remboursement de la totalité de la somme versée, sans avoir
        à se justifier, par un email à retour.service.client@outlook.com. Le
        remboursement est effectué sous cinq jours ouvrés, sur le moyen de
        paiement utilisé.
      </p>

      <h2 className={h2}>5. Résiliation</h2>
      <p className={p}>
        Le client peut résilier à tout moment, sans engagement, par un email à
        retour.service.client@outlook.com. La résiliation prend effet à la fin
        de la période mensuelle en cours, qui n’est pas remboursée en dehors de
        la garantie de l’article 4.
      </p>

      <h2 className={h2}>6. Données des clients du salon</h2>
      <p className={p}>
        Le salon reste responsable des contacts de ses propres clients. Il
        s’engage à ne saisir que les coordonnées de personnes qui ont accepté
        d’être rappelées, et à les informer de ce rappel. Retour traite ces
        données uniquement pour envoyer les rappels du salon, comme décrit dans
        la politique de confidentialité.
      </p>

      <h2 className={h2}>7. Responsabilité</h2>
      <p className={p}>
        Retour met en œuvre les moyens raisonnables pour fournir un service
        fiable, sans pouvoir garantir un résultat chiffré : le nombre de
        clients qui reviennent dépend de chaque salon et de ses clients.
      </p>

      <h2 className={h2}>8. Droit applicable</h2>
      <p className={p}>
        Les présentes conditions sont soumises au droit suisse. En cas de
        litige, les tribunaux compétents sont ceux du lieu du siège de
        l’éditeur, sous réserve des règles impératives applicables.
      </p>

      <h2 className={h2}>9. Contact</h2>
      <p className={p}>retour.service.client@outlook.com</p>

      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-brique px-8 py-4 text-lg font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
