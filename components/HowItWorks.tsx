const steps = [
  {
    n: "01",
    title: "Place your order",
    body:
      "Submit a request below with your frame model and contact details. We confirm receipt and email a prepaid, insured shipping label within one business day.",
  },
  {
    n: "02",
    title: "Send your frames",
    body:
      "Drop them at any carrier location in our protective return mailer. Tracking and insurance are included on every leg of the journey.",
  },
  {
    n: "03",
    title: "Precision concealment",
    body:
      "Your glasses are inspected, the indicator is concealed by hand under magnification, and every frame is photo-documented before and after.",
  },
  {
    n: "04",
    title: "Returned, factory-clean",
    body:
      "Frames are cleaned, function-tested, and shipped back. Most customers have their glasses on their face within five business days of drop-off.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="border-b border-bone-100/[0.06] py-28 sm:py-36"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="The process"
          title="A considered, four-step service."
          lede="Every order is handled by one technician from intake to return shipping. No overseas hand-off, no warehouse queue."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-bone-100/[0.08] bg-bone-100/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col bg-ink-900 p-8 transition hover:bg-ink-850"
            >
              <span className="font-display text-sm tracking-widest text-champagne-500">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl text-bone-50">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-champagne-500">
        <span className="h-px w-8 bg-champagne-500/60" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone-50 text-balance sm:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone-300 text-balance">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
