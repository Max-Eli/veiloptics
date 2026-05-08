import { SectionHeading } from "./HowItWorks";

const tiers = [
  {
    name: "Standard",
    price: "$149",
    cadence: "per pair",
    blurb:
      "Hand-finished concealment with insured round-trip shipping. The right choice for almost everyone.",
    features: [
      "Five business-day turnaround",
      "Insured round-trip shipping",
      "Before / after photo documentation",
      "Lifetime workmanship warranty",
    ],
    cta: "Start a Standard order",
    featured: false,
  },
  {
    name: "Expedited",
    price: "$219",
    cadence: "per pair",
    blurb:
      "Front-of-queue handling and overnight return shipping for travelers and creators on a deadline.",
    features: [
      "48-hour turnaround on receipt",
      "Overnight insured return",
      "Priority status updates",
      "Everything in Standard",
    ],
    cta: "Start an Expedited order",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-bone-100/[0.06] py-28 sm:py-36"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="One service, two speeds."
          lede="Flat-rate pricing with no surprise add-ons. We do not charge until your frames have been received and inspected."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "relative flex flex-col rounded-2xl border p-8 sm:p-10",
                t.featured
                  ? "border-champagne-500/40 bg-gradient-to-b from-champagne-500/[0.06] to-transparent"
                  : "border-bone-100/[0.08] bg-ink-900",
              ].join(" ")}
            >
              {t.featured ? (
                <span className="absolute right-6 top-6 rounded-full border border-champagne-500/40 bg-champagne-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-champagne-300">
                  Most chosen
                </span>
              ) : null}

              <h3 className="font-display text-2xl text-bone-50">{t.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-5xl text-bone-50">
                  {t.price}
                </span>
                <span className="pb-2 text-sm text-bone-400">{t.cadence}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-bone-300">
                {t.blurb}
              </p>

              <ul className="mt-8 space-y-3 text-sm text-bone-200">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#order"
                className={[
                  "mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
                  t.featured
                    ? "bg-champagne-500 text-ink-950 hover:bg-champagne-400"
                    : "border border-bone-100/15 text-bone-100 hover:border-bone-100/30",
                ].join(" ")}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-bone-400">
          Compatible with Ray-Ban Meta (Wayfarer and Headliner) and Ray-Ban
          Stories. Other models — ask before ordering.
        </p>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="mt-0.5 shrink-0 text-champagne-400"
      aria-hidden
    >
      <path
        d="M3.75 9.5l3.25 3.25 7.25-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
