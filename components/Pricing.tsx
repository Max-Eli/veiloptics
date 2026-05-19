import { SectionHeading } from "./HowItWorks";

const tiers = [
  {
    name: "STANDARD",
    price: "$119",
    cadence: "per pair!!",
    blurb:
      "The regular deal!! 5 day turnaround, insured shipping both ways, and our LIFETIME warranty!!",
    features: [
      "2 business day turnaround",
      "Insured shipping (BOTH WAYS)",
      "Photos before AND after",
      "Lifetime workmanship warranty",
    ],
    bg: "#8dd0d0",
    accent: "#d96bb5",
  },
  {
    name: "EXPEDITED!!",
    price: "$139",
    cadence: "per pair!!",
    blurb:
      "Need em FAST?? We jump you to the front of the line and ship em back OVERNIGHT!! ★",
    features: [
      "24 HOUR turnaround",
      "Overnight return shipping",
      "Priority status updates",
      "Everything in Standard",
    ],
    bg: "#d96bb5",
    accent: "#f5d860",
    featured: true,
  },
  {
    name: "KC LOCAL",
    price: "$89",
    cadence: "Hand Delivered!!",
    blurb:
      "If you're in the Kansas City metro we will COME TO YOU!! No shipping needed!! Cheapest option!!",
    features: [
      "FREE pickup in KC metro",
      "FREE drop-off when done",
      "Same day turnaround",
      "Card, Cash, Venmo, or PayPal OK",
    ],
    bg: "#7abf6e",
    accent: "#4055b2",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#704572", borderColor: "#f5d860" }}
    >
      <SectionHeading
        eyebrow="$$ MONEY TIME $$"
        title="OUR PRICES!!"
        lede="No hidden fees!! No surprises!! We don't charge you ONE PENNY until your frames get here safe!!"
        eyebrowColor="#7abf6e"
        titleColor="#f5d860"
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
                className="bevel-out impact absolute -right-2 -top-3 px-3 py-1 text-sm"
                style={{ background: "#d04848", color: "#f5d860" }}
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
              style={{ color: "#d04848" }}
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
                    style={{ color: "#d04848" }}
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
              style={{ background: "#f5d860", color: "#000" }}
            >
              ORDER {t.name}!
            </a>
          </div>
        ))}
      </div>

      <div
        className="bevel-out mt-8 p-4 sm:p-6"
        style={{ background: "#f5d860", borderColor: "#d04848" }}
      >
        <div
          className="impact text-center text-3xl sm:text-5xl"
          style={{ color: "#d04848" }}
        >
          ★ COMPATIBLE WITH ★
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div
            className="bevel-in p-4"
            style={{ background: "#ffffff" }}
          >
            <div
              className="impact text-2xl sm:text-3xl"
              style={{ color: "#000080" }}
            >
              META RAY-BAN
            </div>
            <ul
              className="comic mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-lg sm:text-2xl"
              style={{ color: "#000" }}
            >
              <li>★ Display</li>
              <li>★ Wayfarer</li>
              <li>★ Skyler</li>
              <li>★ Headliner</li>
              <li>★ Scriber</li>
              <li>★ Blayzer</li>
            </ul>
          </div>

          <div
            className="bevel-in p-4"
            style={{ background: "#ffffff" }}
          >
            <div
              className="impact text-2xl sm:text-3xl"
              style={{ color: "#000080" }}
            >
              META OAKLEY
            </div>
            <ul
              className="comic mt-3 text-lg sm:text-2xl"
              style={{ color: "#000" }}
            >
              <li>★ Vanguard</li>
              <li>★ HSTN</li>
            </ul>
          </div>
        </div>

        <p
          className="impact mt-5 text-center text-xl sm:text-2xl"
          style={{ color: "#d04848" }}
        >
          GOT SOMETHING ELSE?? E-MAIL US FIRST!!
        </p>
      </div>
    </section>
  );
}
