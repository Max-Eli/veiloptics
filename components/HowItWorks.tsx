import { Pipe } from "./Sprites";

const stages = [
  {
    n: "1-1",
    title: "FILL OUT THE FORM",
    body:
      "Tell us about your glasses. We email you the same business day with a prepaid label and packing instructions.",
  },
  {
    n: "1-2",
    title: "MAIL THE FRAMES",
    body:
      "Drop the package at any carrier location. Insured and tracked on every leg of the trip.",
  },
  {
    n: "1-3",
    title: "WE DO THE MOD",
    body:
      "Inspected, hand-modded under magnification, photographed before and after. Performed in-house by one technician.",
  },
  {
    n: "1-4",
    title: "BACK TO YOU",
    body:
      "Cleaned, function-tested, and shipped overnight. Or pick up free in the Kansas City metro.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="cloud-sky scanlines">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="LEVEL SELECT"
          title="HOW TO PLAY"
          lede="Four stages from your front door to ours and back. No combos required."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <li key={s.n} className="pixel-frame relative p-5">
              <div className="absolute -top-4 left-4 flex items-center gap-2">
                <Pipe width={28} height={36} />
                <span className="font-pixel bg-black px-2 py-1 text-xs text-[#fcd000]">
                  WORLD {s.n}
                </span>
              </div>
              <h3 className="font-pixel mt-6 text-[11px] text-black sm:text-sm">
                {s.title}
              </h3>
              <p className="font-terminal mt-3 text-lg leading-snug text-black">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="font-pixel mt-12 text-center text-xs text-white text-pixel-shadow-sm sm:text-sm">
          ★ STAGE CLEAR ★
        </p>
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
    <div className="text-center">
      <div className="font-pixel text-[10px] text-[#fcd000] text-pixel-shadow-sm sm:text-xs">
        ▶ {eyebrow}
      </div>
      <h2 className="font-pixel mt-4 text-2xl leading-tight text-white text-pixel-shadow sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="font-terminal mx-auto mt-4 max-w-2xl text-xl leading-snug text-white text-pixel-shadow-sm">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
