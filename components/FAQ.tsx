import { SectionHeading } from "./HowItWorks";

const faqs = [
  {
    q: "Which models do you do??",
    a: "Ray-Ban Meta (Wayfarer + Headliner) and the original Ray-Ban Stories!! Got a different pair?? E-MAIL US first and we'll let ya know!!",
  },
  {
    q: "How long does it take??",
    a: "Most orders ship back within 5 business days from when you drop em off. EXPEDITED is 48 hours from when we get them. KC LOCAL is usually same week!",
  },
  {
    q: "Do the glasses still WORK after??",
    a: "YEP!! Camera, mics, speakers, charging, pairing -- all still works perfect!! Only the little light is hidden. We test EVERY pair before sending back.",
  },
  {
    q: "Does this void the warranty??",
    a: "ANY mod will void the manufacturer warranty -- thats just how it is. BUT we got our OWN lifetime warranty on our work, so if anything we did breaks, we fix it FREE!!",
  },
  {
    q: "Is shipping included??",
    a: "YES!! Insured both ways, included in the price!! We e-mail you the pre-paid label after you order. KC Local is FREE pickup/dropoff!!",
  },
  {
    q: "Is this LEGAL??",
    a: "The mod itself is legal!! BUT recording laws are different everywhere -- a lot of states need consent for audio or video. YOU are responsible for following the law where you record!! We do the mod, we do not give legal advice. Be cool!!",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#ffff00", borderColor: "#ff00ff" }}
    >
      <SectionHeading
        eyebrow="??? GOT QUESTIONS ???"
        title="F.A.Q."
        lede="Frequently Asked Questions!! (the answers are below!!)"
        eyebrowColor="#ff0000"
        titleColor="#0000ff"
        ledeColor="#000080"
      />

      <div
        className="bevel-in mt-6 p-4"
        style={{ background: "#ffffff" }}
      >
        {faqs.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="cursor-pointer list-none">
              <span
                className="impact text-lg sm:text-xl"
                style={{ color: "#ff0000" }}
              >
                Q:
              </span>{" "}
              <span
                className="comic font-bold"
                style={{ color: "#000080" }}
              >
                {f.q}
              </span>
              <span
                className="comic ml-2 text-xs"
                style={{ color: "#0000ff" }}
              >
                [click to open]
              </span>
            </summary>
            <p className="mt-2 ml-6 text-sm sm:text-base">
              <span
                className="impact text-lg"
                style={{ color: "#0000ff" }}
              >
                A:
              </span>{" "}
              <span className="times" style={{ color: "#000" }}>
                {f.a}
              </span>
            </p>
            {i < faqs.length - 1 ? <hr /> : null}
          </details>
        ))}
      </div>
    </section>
  );
}
