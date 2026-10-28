export default function Accueil() {
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
      <p className="mt-10 rounded-2xl bg-sable px-5 py-4 text-base text-nuit">
        Le site ouvre très bientôt. Revenez dans quelques jours.
      </p>
    </main>
  );
}
