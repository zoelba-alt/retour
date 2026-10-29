import Link from "next/link";

export const metadata = { title: "Politique de confidentialité | Retour" };

const h2 = "mt-8 font-titre text-2xl font-semibold text-nuit";
const p = "mt-2 leading-relaxed";

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <Link href="/" className="font-titre text-2xl font-semibold text-brique">
        Retour
      </Link>
      <h1 className="mt-8 font-titre text-4xl font-bold text-nuit">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm">Dernière mise à jour : octobre 2026.</p>

      <h2 className={h2}>Qui est responsable</h2>
      <p className={p}>
        Le responsable du traitement est l’éditeur du site, identifié dans les
        mentions légales. Contact : retour.service.client@outlook.com
      </p>

      <h2 className={h2}>Les données que nous recevons</h2>
      <p className={p}>
        Lorsque vous vous abonnez : votre adresse email, votre nom et les
        informations liées à votre paiement. Les numéros de carte bancaire sont
        saisis chez Stripe et ne sont jamais transmis à Retour.
      </p>
      <p className={p}>
        Lorsque vous nous écrivez : votre adresse email et le contenu de votre
        message.
      </p>
      <p className={p}>
        Lorsque vous utilisez le service : les coordonnées (email ou numéro) des
        clients de votre salon que vous nous confiez, afin de leur envoyer vos
        rappels. Vous restez responsable de ces contacts, comme indiqué dans
        les conditions générales de vente.
      </p>

      <h2 className={h2}>Pourquoi, et sur quelle base</h2>
      <p className={p}>
        Nous utilisons ces données pour fournir le service, encaisser et
        rembourser les paiements, répondre à vos messages et respecter nos
        obligations comptables. Nous ne les vendons pas et ne les utilisons pas
        pour de la publicité.
      </p>

      <h2 className={h2}>Les prestataires techniques</h2>
      <p className={p}>
        Pour faire fonctionner le service, nous faisons appel à des
        prestataires : Vercel (hébergement du site), Stripe (paiements) et, au
        fil de l’ouverture du service, des outils de base de données et d’envoi
        d’emails. Certains peuvent traiter des données hors de Suisse et de
        l’Union européenne, notamment aux États-Unis, dans le cadre de
        garanties contractuelles prévues par la loi.
      </p>

      <h2 className={h2}>Cookies et mesure d’audience</h2>
      <p className={p}>
        Ce site ne dépose pas de cookie publicitaire. Si nous ajoutons une
        mesure d’audience, ce sera un outil respectueux de la vie privée, et
        cette page sera mise à jour.
      </p>

      <h2 className={h2}>Combien de temps</h2>
      <p className={p}>
        Les données de paiement sont conservées pendant la durée légale de
        conservation comptable (en Suisse, dix ans). Les autres données sont
        supprimées à votre demande ou à la fin de votre abonnement, sauf
        obligation légale contraire.
      </p>

      <h2 className={h2}>Vos droits</h2>
      <p className={p}>
        Vous pouvez demander l’accès à vos données, leur correction ou leur
        suppression, en écrivant à retour.service.client@outlook.com. Nous
        répondons dans un délai de 30 jours. Si vous êtes en France ou dans
        l’Union européenne, vous pouvez aussi saisir votre autorité de
        protection des données. En Suisse, il s’agit du Préposé fédéral à la
        protection des données et à la transparence.
      </p>

      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-brique px-8 py-4 text-lg font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
