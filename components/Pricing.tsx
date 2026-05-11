import { SectionHeading } from "./HowItWorks";
import { Mushroom, Star, FireFlower } from "./Sprites";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  sprite: React.ReactNode;
  btnClass: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "STANDARD",
    price: "$149",
    cadence: "per pair",
    blurb:
      "The everyday power-up. Hand-finished mod with insured round-trip shipping.",
    features: [
      "5 business day turnaround",
      "Insured shipping both ways",
      "Before / after photos",
      "Lifetime workmanship warranty",
    ],
    sprite: <Mushroom size={64} />,
    btnClass: "pixel-btn",
  },
  {
    name: "EXPEDITED",
    price: "$219",
    cadence: "per pair",
    blurb:
      "Fire-flower speed. Front-of-queue handling and overnight return shipping.",
    features: [
      "48-hour turnaround on receipt",
      "Overnight insured return",
      "Priority status updates",
      "Everything in Standard",
    ],
    sprite: <FireFlower size={64} />,
    btnClass: "pixel-btn pixel-btn-red",
    featured: true,
  },
  {
    name: "KC LOCAL",
    price: "$129",
    cadence: "hand delivered",
    blurb:
      "The invincibility star. Free pickup and drop-off if you're in the Kansas City metro.",
    features: [
      "Free pickup in KC metro",
      "Free drop-off when done",
      "Same-week turnaround",
      "Cash, Venmo, or PayPal",
    ],
    sprite: <Star size={64} className="float" />,
    btnClass: "pixel-btn pixel-btn-green",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-black scanlines">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="ITEM SHOP"
          title="POWER-UPS"
          lede="Three ways to play. Flat-rate pricing — no surprise charges, no payment until your frames arrive."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`pixel-frame relative p-6 ${
                t.featured ? "lg:-translate-y-3" : ""
              }`}
            >
              {t.featured ? (
                <div className="font-pixel blink absolute -top-4 right-4 bg-[#e40058] px-2 py-1 text-[10px] text-white">
                  ★ TOP PICK
                </div>
              ) : null}

              <div className="flex items-center justify-center">{t.sprite}</div>

              <h3 className="font-pixel mt-4 text-center text-sm text-black">
                {t.name}
              </h3>

              <div className="mt-4 text-center">
                <div className="font-pixel text-3xl text-black">{t.price}</div>
                <div className="font-terminal text-base text-[#bc4a00]">
                  {t.cadence}
                </div>
              </div>

              <p className="font-terminal mt-4 text-center text-lg leading-snug text-black">
                {t.blurb}
              </p>

              <ul className="font-terminal mt-5 space-y-2 text-lg text-black">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="font-pixel text-[10px] text-[#00a800]">
                      ▶
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center">
                <a href="#order" className={`${t.btnClass} text-[10px]`}>
                  SELECT {t.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="font-terminal mt-12 text-center text-base text-white">
          Compatible with Ray-Ban Meta (Wayfarer, Headliner) and Ray-Ban
          Stories. Got something else? Email us first.
        </p>
      </div>
    </section>
  );
}
