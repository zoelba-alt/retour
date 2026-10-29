import Link from "next/link";

export const metadata = { title: "Mentions légales | Retour" };

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <Link href="/" className="font-titre text-2xl font-semibold text-brique">
        Retour
      </Link>
      <h1 className="mt-8 font-titre text-4xl font-bold text-nuit">
        Mentions légales
      </h1>

      <h2 className="mt-8 font-titre text-2xl font-semibold text-nuit">
        Éditeur du site
      </h2>
      <p className="mt-2 leading-relaxed">
        Le site retour-sand.vercel.app est édité par :
        <br />
        [À COMPLÉTER : Zoé Balsiger]
        <br />
        [À COMPLÉTER : adresse postale en Suisse]
        <br />
       
        <br />
        Email : retour.service.client@outlook.com
      </p>

      <h2 className="mt-8 font-titre text-2xl font-semibold text-nuit">
        Hébergement
      </h2>
      <p className="mt-2 leading-relaxed">
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis. Site : vercel.com.
      </p>

      <h2 className="mt-8 font-titre text-2xl font-semibold text-nuit">
        Paiements
      </h2>
      <p className="mt-2 leading-relaxed">
        Les paiements sont traités par Stripe. Retour ne conserve aucun numéro
        de carte bancaire.
      </p>

      <h2 className="mt-8 font-titre text-2xl font-semibold text-nuit">
        Propriété intellectuelle
      </h2>
      <p className="mt-2 leading-relaxed">
        Les textes, la marque et l’identité visuelle de Retour sont protégés.
        Toute reproduction sans autorisation écrite est interdite.
      </p>

      <h2 className="mt-8 font-titre text-2xl font-semibold text-nuit">
        Contact
      </h2>
      <p className="mt-2 leading-relaxed">
        Pour toute question : retour.service.client@outlook.com
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
