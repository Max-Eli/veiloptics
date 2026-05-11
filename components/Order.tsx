import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./HowItWorks";
import { Star, Pipe } from "./Sprites";

export function Order() {
  return (
    <section id="order" className="castle-bg scanlines">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="FINAL STAGE"
          title="START YOUR ORDER"
          lede="Fill the form. We confirm fit, send a prepaid label, and walk you through packing your glasses safely."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="pixel-frame-dark p-5">
              <div className="font-pixel text-[10px] text-[#fcd000] sm:text-xs">
                ★ CONTACT
              </div>
              <ul className="font-terminal mt-3 space-y-2 text-lg text-white">
                <li>
                  <span className="text-[#bcbcbc]">EMAIL:</span>{" "}
                  <a
                    href="mailto:orders@modsbymail.com"
                    className="text-[#fcd000] hover:text-white"
                  >
                    orders@modsbymail.com
                  </a>
                </li>
                <li>
                  <span className="text-[#bcbcbc]">HOURS:</span> Mon–Fri,
                  9am–6pm CST
                </li>
                <li>
                  <span className="text-[#bcbcbc]">WORKSHOP:</span> Kansas City,
                  MO (by appt.)
                </li>
              </ul>
            </div>

            <div className="pixel-frame-dark relative p-5">
              <div className="absolute -top-6 -left-2">
                <Star size={44} className="float" />
              </div>
              <div className="font-pixel mt-2 text-[10px] text-[#00e430] sm:text-xs">
                ★ 1-UP: KC METRO
              </div>
              <p className="font-terminal mt-3 text-lg leading-snug text-white">
                In the Kansas City metro? We hand-deliver — free pickup and
                drop-off, no shipping needed. Select{" "}
                <span className="text-[#fcd000]">KC Local</span> in the form.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 opacity-90">
              <Pipe width={48} height={64} />
              <span className="font-pixel text-[10px] text-white">
                ENTER THE PIPE
              </span>
              <Pipe width={48} height={64} />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
