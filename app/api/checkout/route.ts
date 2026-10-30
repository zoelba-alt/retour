import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const cle = process.env.STRIPE_SECRET_KEY?.trim();
  const prix = process.env.STRIPE_PRICE_ID?.trim();
  const erreur = NextResponse.redirect(`${origin}/?paiement=erreur`, 303);

  if (!cle || !prix) {
    console.error("checkout: variable manquante", {
      cle: Boolean(cle),
      prix: Boolean(prix),
    });
    return erreur;
  }

  const corps = new URLSearchParams({
    mode: "subscription",
    "line_items[0][price]": prix,
    "line_items[0][quantity]": "1",
    success_url: `${origin}/merci`,
    cancel_url: `${origin}/?paiement=annule`,
    locale: "fr",
  });

  try {
    const reponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: corps,
    });
    const donnees = await reponse.json();
    if (!reponse.ok || !donnees.url) {
      console.error("checkout: Stripe a refusé", {
        statut: reponse.status,
        type: donnees?.error?.type,
        message: donnees?.error?.message,
      });
      return erreur;
    }
    return NextResponse.redirect(donnees.url, 303);
  } catch (e) {
    console.error("checkout: échec de l'appel à Stripe", {
      message: e instanceof Error ? e.message : String(e),
      debutCle: cle.slice(0, 8),
    });
    return erreur;
  }
}
