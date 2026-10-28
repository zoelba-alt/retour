import Link from "next/link";

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <p className="mb-6 font-titre text-2xl font-semibold text-brique">
        Retour
      </p>
      <h1 className="font-titre text-4xl font-bold leading-tight text-nuit">
        Merci, votre paiement a bien été transmis.
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        Stripe vous envoie un reçu par email. Nous confirmons votre paiement et
        nous vous contactons très vite pour configurer vos rappels.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block w-fit rounded-full bg-brique px-8 py-4 text-lg font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
