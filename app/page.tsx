type Props = { searchParams: Promise<{ paiement?: string }> };

export default async function Accueil({ searchParams }: Props) {
  const { paiement } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <p className="mb-6 font-titre text-2xl font-semibold text-brique">
        Retour
      </p>
      <h1 className="font-titre text-4xl font-bold leading-tight text-nuit sm:text-5xl">
        Vos clients ne vous quittent pas, ils oublient de reprendre rendez-vous.
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        Retour envoie un rappel au bon moment à chaque client de votre salon, et
        vous montre combien de clients sont revenus grâce à lui.
      </p>

      {paiement === "annule" && (
        <p className="mt-8 rounded-2xl bg-sable px-5 py-4 text-base text-nuit">
          Le paiement a été annulé, rien n’a été débité. Vous pouvez réessayer
          quand vous voulez.
        </p>
      )}
      {paiement === "erreur" && (
        <p className="mt-8 rounded-2xl bg-sable px-5 py-4 text-base text-nuit">
          Le paiement n’a pas pu démarrer et rien n’a été débité. Réessayez dans
          un instant.
        </p>
      )}

      <form action="/api/checkout" method="POST" className="mt-10">
        <button
          type="submit"
          className="w-full rounded-full bg-brique px-8 py-4 text-lg font-semibold text-white sm:w-auto"
        >
          Tester le paiement (mode test)
        </button>
      </form>
    </main>
  );
}
