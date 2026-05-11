import { SectionHeading } from "./HowItWorks";
import { Mario, Goomba, Mushroom } from "./Sprites";

const reviews = [
  {
    quote:
      "Returned looking factory. I genuinely cannot tell where the work was done — and the packaging coming back was nicer than the box from the store.",
    name: "DANIEL R.",
    role: "Brooklyn, NY",
    sprite: <Mario size={48} />,
  },
  {
    quote:
      "Photo confirmation on intake, a tracking number the same day, and a follow-up after return. Boutique-grade service from a one-person shop.",
    name: "PRIYA N.",
    role: "Austin, TX",
    sprite: <Mushroom size={48} />,
  },
  {
    quote:
      "Hand delivery in KC was the move. Met him at a coffee shop in Westport, four days door-to-door, no shipping fees.",
    name: "MARCUS T.",
    role: "Kansas City, MO",
    sprite: <Goomba size={48} />,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="cloud-sky scanlines">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="HIGH SCORES"
          title="WHAT PLAYERS SAY"
          lede="Selected dialogue from completed orders. Names shortened at the customer's request."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="pixel-frame relative p-5">
              <div className="absolute -top-6 -left-2">{r.sprite}</div>
              <blockquote className="font-terminal mt-6 text-lg leading-snug text-black">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t-4 border-black pt-3">
                <div className="font-pixel text-[10px] text-black">
                  {r.name}
                </div>
                <div className="font-terminal text-base text-[#bc4a00]">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
