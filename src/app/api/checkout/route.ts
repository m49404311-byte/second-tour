import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PLANS, type PlanId } from "@/lib/config";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const planId = body?.plan;
  if (planId !== "mensuel" && planId !== "annuel") {
    return NextResponse.json({ error: "Formule invalide" }, { status: 400 });
  }
  const plan = PLANS[planId as PlanId];

  // Réponses du quiz : on ne garde que des petits entiers valides.
  const metadata: Record<string, string> = { plan: plan.id };
  const answers: unknown = body?.answers;
  if (Array.isArray(answers) && answers.length === 3) {
    answers.forEach((a, i) => {
      if (Number.isInteger(a) && a >= 0 && a <= 3) metadata[`q${i + 1}`] = String(a);
    });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      locale: "fr",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: plan.amount,
            recurring: { interval: plan.interval },
            product_data: { name: `Second Tour — ${plan.label}` },
          },
        },
      ],
      metadata,
      subscription_data: { metadata: { plan: plan.id } },
      success_url: `${siteUrl}/merci`,
      cancel_url: `${siteUrl}/commencer?paiement=annule`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("Stripe checkout error", e);
    return NextResponse.json({ error: "Paiement indisponible" }, { status: 502 });
  }
}
