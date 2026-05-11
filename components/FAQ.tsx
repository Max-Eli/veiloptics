import { SectionHeading } from "./HowItWorks";
import { QBlock } from "./Sprites";

const faqs = [
  {
    q: "Which models do you service?",
    a: "Ray-Ban Meta (Wayfarer and Headliner) and the original Ray-Ban Stories. Different pair? Email us first.",
  },
  {
    q: "How long does the whole thing take?",
    a: "Most Standard orders ship back within 5 business days of drop-off. Expedited is 48 hours from receipt. KC Local is typically same week.",
  },
  {
    q: "Will the glasses still work?",
    a: "Yes. Camera, microphones, speakers, charging, and pairing are unaffected and tested before return. Only the visual indicator is concealed.",
  },
  {
    q: "Does this void the warranty?",
    a: "Any non-factory mod voids the manufacturer warranty. We offer a lifetime workmanship warranty of our own — if our work fails, we fix it.",
  },
  {
    q: "Is shipping included?",
    a: "Yes — insured round-trip shipping is included in every tier. KC Local skips shipping entirely with free pickup and drop-off.",
  },
  {
    q: "Is this legal?",
    a: "The service itself is legal. Recording laws vary by jurisdiction — many places require notice or two-party consent. You're responsible for using your modified glasses within the law where you record. We don't provide legal advice.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#3cbcfc] scanlines">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading
          eyebrow="? BLOCKS"
          title="F.A.Q."
          lede="Hit a block to reveal the answer."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group pixel-frame">
              <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:gap-4">
                <QBlock size={32} className="shrink-0" />
                <span className="font-terminal flex-1 text-xl leading-snug text-black sm:text-2xl">
                  {f.q}
                </span>
                <span className="font-pixel hidden text-[10px] text-[#bc4a00] sm:inline group-open:sm:hidden">
                  HIT
                </span>
                <span className="font-pixel hidden text-[10px] text-[#00a800] group-open:sm:inline">
                  OPEN
                </span>
              </summary>
              <p className="font-terminal border-t-4 border-black p-4 text-lg leading-snug text-black">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
