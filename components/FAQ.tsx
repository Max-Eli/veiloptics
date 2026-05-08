import { SectionHeading } from "./HowItWorks";

const faqs = [
  {
    q: "Which models do you service?",
    a: "Ray-Ban Meta (Wayfarer and Headliner) and the original Ray-Ban Stories. If you have a different pair, contact us before ordering and we'll let you know.",
  },
  {
    q: "How long does the entire process take?",
    a: "Most Standard orders are returned within five business days of you dropping off the package. Expedited orders are typically out the door within 48 hours of receipt.",
  },
  {
    q: "Will this affect the rest of the glasses' functions?",
    a: "No. Camera, microphones, speakers, charging, and pairing are unaffected and tested before return. Only the visual indicator is concealed.",
  },
  {
    q: "Does this void the manufacturer warranty?",
    a: "Any non-factory modification will void the manufacturer warranty. Our own lifetime workmanship warranty covers everything we touch — if our work fails, we make it right.",
  },
  {
    q: "Is shipping included?",
    a: "Yes. Insured round-trip shipping is included in every tier. We email a prepaid label after your order is confirmed.",
  },
  {
    q: "Is this legal?",
    a: "The service itself is legal. Recording laws, however, vary widely by jurisdiction — many places require notice or two-party consent for audio or video. You are responsible for using your modified glasses in compliance with the laws where you record. We provide a service; we do not provide legal advice.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-bone-100/[0.06] py-28 sm:py-36"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Answers, ahead of time."
        />

        <div className="mt-16 divide-y divide-bone-100/[0.08] border-y border-bone-100/[0.08]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 sm:gap-8">
                <span className="font-display text-base text-bone-50 sm:text-lg">
                  {f.q}
                </span>
                <Plus />
              </summary>
              <p className="mt-4 max-w-3xl pr-2 text-sm leading-relaxed text-bone-300 sm:pr-10">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plus() {
  return (
    <span
      aria-hidden
      className="relative mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-bone-100/15 text-bone-300 transition group-open:rotate-45 group-open:border-champagne-500/40 group-open:text-champagne-400"
    >
      <span className="absolute h-px w-3 bg-current" />
      <span className="absolute h-3 w-px bg-current" />
    </span>
  );
}
