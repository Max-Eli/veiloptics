import { SectionHeading } from "./HowItWorks";

const reviews = [
  {
    quote:
      "Returned looking factory. I genuinely cannot tell where the work was done — and the packaging coming back rivaled what they shipped from the store.",
    name: "Daniel R.",
    role: "Photographer, Brooklyn",
  },
  {
    quote:
      "Communication was the surprise here. Photo confirmation on intake, a tracking number the same day, and a follow-up after return. Boutique-grade service.",
    name: "Priya N.",
    role: "Product designer, Austin",
  },
  {
    quote:
      "I was skeptical about mailing in $300 frames. The insured label and the documented before-and-after made it a non-issue. Five days, in and out.",
    name: "Marcus T.",
    role: "Filmmaker, Los Angeles",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="border-b border-bone-100/[0.06] py-28 sm:py-36"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="From the bench"
          title="Why customers choose us."
          lede="Selected notes from recent orders. Names shortened at the customer's request."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-bone-100/[0.08] bg-ink-900 p-7"
            >
              <Quote />
              <blockquote className="mt-5 text-[15px] leading-relaxed text-bone-200">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-bone-100/[0.08] pt-5">
                <div className="text-sm text-bone-50">{r.name}</div>
                <div className="text-xs text-bone-400">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className="text-champagne-500/70"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M8.4 5.5C5.2 6.7 3 9.7 3 13.4 3 16 4.6 17.5 6.5 17.5c1.6 0 2.9-1.2 2.9-2.8 0-1.6-1.1-2.7-2.6-2.7-.2 0-.4 0-.6.1.6-1.7 2-3 4-3.6l-1.8-3Zm9 0c-3.2 1.2-5.4 4.2-5.4 7.9 0 2.6 1.6 4.1 3.5 4.1 1.6 0 2.9-1.2 2.9-2.8 0-1.6-1.1-2.7-2.6-2.7-.2 0-.4 0-.6.1.6-1.7 2-3 4-3.6l-1.8-3Z"
      />
    </svg>
  );
}
