import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

// Source of truth for pricing. Keep the keys aligned with the form's
// `tier` <option> values in components/ContactForm.tsx — that's the
// contract between the client and this route. Amounts are in cents.
const TIERS = {
  "Standard -- $119": { name: "ModsByMail — Standard", amount: 11900 },
  "Expedited -- $139": { name: "ModsByMail — Expedited", amount: 13900 },
  "KC Local Hand Delivery -- $89": {
    name: "ModsByMail — KC Local Hand Delivery",
    amount: 8900,
  },
} as const;

type TierKey = keyof typeof TIERS;

function isTierKey(value: unknown): value is TierKey {
  return typeof value === "string" && value in TIERS;
}

function trim(value: unknown, max = 500): string {
  return typeof value === "string" ? value.slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    name,
    email,
    model,
    tier,
    zip,
    notes,
    acknowledge,
  } = body;

  if (
    !trim(name) ||
    !trim(email) ||
    !trim(model) ||
    !trim(zip) ||
    !acknowledge ||
    !isTierKey(tier)
  ) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error("STRIPE_SECRET_KEY is not set");
    return NextResponse.json(
      { error: "Payments are not configured yet. Try again later." },
      { status: 500 },
    );
  }

  const stripe = new Stripe(secret);
  const product = TIERS[tier];

  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://modsbymail.com";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.amount,
            product_data: {
              name: product.name,
              description:
                "LED concealment for Meta Ray-Ban / Oakley smart glasses. Free insured round-trip shipping included.",
            },
          },
        },
      ],
      customer_email: trim(email, 200),
      metadata: {
        name: trim(name, 200),
        frame_model: trim(model, 200),
        zip: trim(zip, 20),
        notes: trim(notes, 1000),
        tier,
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    const message =
      err instanceof Error ? err.message : "Could not start checkout.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
