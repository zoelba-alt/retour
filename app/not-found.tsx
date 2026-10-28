import Link from "next/link";

export default function PageIntrouvable() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <h1 className="font-titre text-4xl font-bold text-nuit">
        Cette page n’existe pas.
      </h1>
      <p className="mt-4 text-lg">Le lien est peut-être incorrect ou périmé.</p>
      <Link
        href="/"
        className="mt-8 inline-block w-fit rounded-full bg-brique px-8 py-4 text-lg font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
