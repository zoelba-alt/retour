type Props = { searchParams: Promise<{ paiement?: string }> };

const EMAIL = "retour.service.client@outlook.com";

function Bouton({ texte }: { texte: string }) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className="w-full rounded-full bg-brique px-8 py-5 text-lg font-semibold text-white sm:w-auto"
      >
        {texte}
      </button>
    </form>
  );
}

function Calendrier() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-14 w-14 text-nuit"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="12" width="48" height="44" rx="6" />
      <path d="M8 26h48M20 6v12M44 6v12" />
      <circle cx="40" cy="42" r="8" stroke="#e4572e" />
      <path d="M22 40h6M22 48h6" />
    </svg>
  );
}

const questions = [
  {
    q: "Est-ce que ça marche pour mon salon ?",
    r: "Oui si vous êtes coiffeur ou barbier indépendant, avec des clients réguliers dont vous pouvez noter l’email ou le numéro au moment de l’encaissement. Sans ce contact, aucun rappel n’est possible.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ dix minutes pour démarrer : vous répondez à quelques questions par email et je configure vos rappels avec vous. Ensuite, votre seul geste est de demander le contact à chaque client.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: `Vous m’écrivez à ${EMAIL} et j’arrête l’abonnement. Pendant les 15 premiers jours, vous êtes remboursé sur simple demande.`,
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À ce que chaque client dont le délai habituel est écoulé reçoive un message de votre part, avec une offre de retour à usage unique, et à savoir combien sont revenus grâce à lui. Pas un logiciel à apprendre.",
  },
];

export default async function Accueil({ searchParams }: Props) {
  const { paiement } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-6 pb-16 pt-8">
      <header className="flex items-center justify-between">
        <p className="font-titre text-2xl font-semibold text-brique">Retour</p>
        <Calendrier />
      </header>

      {paiement === "annule" && (
        <p className="mt-6 rounded-2xl bg-sable px-5 py-4 text-base text-nuit">
          Le paiement a été annulé, rien n’a été débité. Vous pouvez réessayer
          quand vous voulez.
        </p>
      )}
      {paiement === "erreur" && (
        <p className="mt-6 rounded-2xl bg-sable px-5 py-4 text-base text-nuit">
          Le paiement n’a pas pu démarrer et rien n’a été débité. Réessayez dans
          un instant, ou écrivez-nous à {EMAIL}.
        </p>
      )}

      <section className="mt-8">
        <h1 className="font-titre text-4xl font-bold leading-tight text-nuit sm:text-5xl">
          Vos clients ne vous quittent pas, ils oublient de reprendre
          rendez-vous.
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Retour envoie un rappel au bon moment à chaque client de votre salon,
          avec une offre pour revenir, et vous montre combien sont revenus.
        </p>
        <div className="mt-8">
          <Bouton texte="Commencer pour 39 € par mois" />
          <p className="mt-3 text-sm text-nuit">
            Sans engagement, résiliable à tout moment.
            <br />
            Satisfait ou remboursé pendant 15 jours.
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-nuit px-6 py-8 text-creme">
        <p className="font-titre text-2xl font-semibold leading-snug">
        Un client fidèle qui ne revient plus, c’est 240 € perdus par an.
        </p>
        <p className="mt-3 text-base leading-relaxed">
         Exemple : une coupe à 30 €, huit visites par an, ça fait 240 €. Retour
             coûte 1,30 € par jour. Si un seul client revient grâce au rappel,
             vous avez déjà couvert votre mois.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-3xl font-bold text-nuit">
          Trois choses, rien de plus
        </h2>
        <ul className="mt-6 space-y-6">
          <li>
            <p className="font-titre text-xl font-semibold text-nuit">
              Vous notez le contact à l’encaissement
            </p>
            <p className="mt-1 text-base leading-relaxed">
              Un email ou un numéro, au moment où le client paie. Dix secondes.
            </p>
          </li>
          <li>
            <p className="font-titre text-xl font-semibold text-nuit">
              Le rappel part tout seul au bon moment
            </p>
            <p className="mt-1 text-base leading-relaxed">
              Quelques semaines après la coupe, quand le client doit revenir.
              Il reçoit une offre de retour simple, à usage unique.
            </p>
          </li>
          <li>
            <p className="font-titre text-xl font-semibold text-nuit">
              Vous voyez ce que ça rapporte
            </p>
            <p className="mt-1 text-base leading-relaxed">
              Le nombre de clients revenus et le chiffre généré par les
              rappels.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-14 rounded-3xl bg-sable px-6 py-8">
        <p className="font-titre text-2xl font-semibold text-nuit">
          Offre fondateur : 39 € par mois
        </p>
        <p className="mt-2 text-base text-nuit">
          Soit environ 1,30 € par jour. Au début, On configure vos rappels avec vous, et on vous contacte par
          email sous trois jours ouvrés après votre inscription.
        </p>
        <div className="mt-6">
          <Bouton texte="Commencer pour 39 € par mois" />
          <p className="mt-3 text-sm text-nuit">
            Sans engagement, résiliable à tout moment.
          </p>
        </div>
        <div className="mt-6 border-t border-nuit/20 pt-5">
          <p className="font-titre text-lg font-semibold text-nuit">
            Garantie satisfait ou remboursé, 15 jours
          </p>
          <p className="mt-1 text-sm leading-relaxed text-nuit">
            Si Retour ne vous convient pas, écrivez-nous à {EMAIL} dans les 15
            jours qui suivent votre paiement. Vous êtes remboursé de la totalité
            sous cinq jours ouvrés, sans avoir à vous justifier.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-3xl font-bold text-nuit">
          Vos questions
        </h2>
        <div className="mt-6 divide-y divide-nuit/15 border-y border-nuit/15">
          {questions.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-titre text-lg font-semibold text-nuit">
                {item.q}
              </summary>
              <p className="mt-3 text-base leading-relaxed">{item.r}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-14 text-sm">
        <p>
          Une question ? Écrivez-nous :{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
        </p>
      </footer>
    </main>
  );
}
