import { SectionHeading } from "./HowItWorks";

const tiers = [
  {
    name: "STANDARD",
    price: "$149",
    cadence: "per pair!!",
    blurb:
      "The regular deal!! 5 day turnaround, insured shipping both ways, and our LIFETIME warranty!!",
    features: [
      "5 business day turnaround",
      "Insured shipping (BOTH WAYS)",
      "Photos before AND after",
      "Lifetime workmanship warranty",
    ],
    bg: "#00ffff",
    accent: "#ff00ff",
  },
  {
    name: "EXPEDITED!!",
    price: "$219",
    cadence: "per pair!!",
    blurb:
      "Need em FAST?? We jump you to the front of the line and ship em back OVERNIGHT!! ★",
    features: [
      "48 HOUR turnaround",
      "Overnight return shipping",
      "Priority status updates",
      "Everything in Standard",
    ],
    bg: "#ff00ff",
    accent: "#ffff00",
    featured: true,
  },
  {
    name: "KC LOCAL",
    price: "$129",
    cadence: "Hand Delivered!!",
    blurb:
      "If you're in the Kansas City metro we will COME TO YOU!! No shipping needed!! Cheapest option!!",
    features: [
      "FREE pickup in KC metro",
      "FREE drop-off when done",
      "Same week turnaround",
      "Cash, Venmo, or PayPal OK",
    ],
    bg: "#00ff00",
    accent: "#0000ff",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#800080", borderColor: "#ffff00" }}
    >
      <SectionHeading
        eyebrow="$$ MONEY TIME $$"
        title="OUR PRICES!!"
        lede="No hidden fees!! No surprises!! We don't charge you ONE PENNY until your frames get here safe!!"
        eyebrowColor="#00ff00"
        titleColor="#ffff00"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="bevel-out relative p-4 sm:p-6"
            style={{ background: t.bg, borderColor: t.accent }}
          >
            {t.featured ? (
              <div
                className="bevel-out impact blink absolute -right-2 -top-3 px-3 py-1 text-sm"
                style={{ background: "#ff0000", color: "#ffff00" }}
              >
                ★ MOST POPULAR!! ★
              </div>
            ) : null}

            <h3
              className="impact text-2xl sm:text-3xl"
              style={{ color: t.accent }}
            >
              {t.name}
            </h3>
            <div
              className="wordart mt-2 text-5xl sm:text-6xl"
              style={{ color: "#000080" }}
            >
              {t.price}
            </div>
            <div
              className="comic text-base"
              style={{ color: "#ff0000" }}
            >
              {t.cadence}
            </div>

            <p
              className="comic mt-3 text-sm sm:text-base"
              style={{ color: "#000" }}
            >
              {t.blurb}
            </p>

            <ul className="comic mt-4 space-y-2 text-sm" style={{ color: "#000" }}>
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className="impact"
                    style={{ color: "#ff0000" }}
                  >
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#order"
              className="bevel-out impact mt-5 inline-block px-5 py-2 text-base no-underline"
              style={{ background: "#ffff00", color: "#000" }}
            >
              ORDER {t.name}!
            </a>
          </div>
        ))}
      </div>

      <p
        className="comic mt-6 text-center text-xs sm:text-sm"
        style={{ color: "#ffff00" }}
      >
        Compatible with Ray-Ban Meta (Wayfarer + Headliner) and Ray-Ban
        Stories!! Got something else?? E-mail us first!!
      </p>
    </section>
  );
}
