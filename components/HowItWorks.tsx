const steps = [
  {
    n: "1",
    title: "FILL OUT THE FORM!!",
    body:
      "Scroll down and tell us about your glasses. We e-mail you back the SAME DAY with all the info!! (or the next day on weekends.)",
    bg: "#ff00ff",
    color: "#ffff00",
  },
  {
    n: "2",
    title: "MAIL US YOUR FRAMES",
    body:
      "We send you a PRE-PAID label!! Just drop the package off at any post office. INSURED so you don't gotta worry!!",
    bg: "#00ffff",
    color: "#0000ff",
  },
  {
    n: "3",
    title: "WE DO THE MOD!!",
    body:
      "Our top tech (one guy, in his garage, but he is VERY good) hides the LED by hand under a magnifier. Photos before AND after!",
    bg: "#00ff00",
    color: "#000080",
  },
  {
    n: "4",
    title: "BACK ON YOUR FACE!!",
    body:
      "Cleaned + tested + shipped back overnight. Most folks have em back in 5 days flat!! Or pick up in KC for FREE!!",
    bg: "#ffff00",
    color: "#ff0000",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#000", borderColor: "#00ff00" }}
    >
      <SectionHeading
        eyebrow="* * * READ THIS FIRST * * *"
        title="HOW IT WORKS!!"
        lede="It's only 4 easy steps!! No tools required on YOUR end!!"
        eyebrowColor="#00ff00"
        titleColor="#ffff00"
        ledeColor="#ff00ff"
      />

      <ol className="mt-6 grid gap-4 sm:grid-cols-2">
        {steps.map((s) => (
          <li
            key={s.n}
            className="bevel-out p-4"
            style={{ background: s.bg }}
          >
            <div className="flex items-start gap-4">
              <div
                className="bevel-in impact grid h-12 w-12 shrink-0 place-items-center text-3xl"
                style={{ background: "#fff", color: "#ff0000" }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  className="impact text-xl sm:text-2xl"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h3>
                <p
                  className="comic mt-2 text-sm sm:text-base"
                  style={{ color: "#000" }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div
        className="comic blink mt-6 text-center text-base sm:text-xl"
        style={{ color: "#00ff00" }}
      >
        ★ ★ ★ IT'S THAT EASY!! ★ ★ ★
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  eyebrowColor = "#ff00ff",
  titleColor = "#ffff00",
  ledeColor = "#fff",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  eyebrowColor?: string;
  titleColor?: string;
  ledeColor?: string;
}) {
  return (
    <div className="text-center">
      <div
        className="comic blink text-sm sm:text-base"
        style={{ color: eyebrowColor }}
      >
        {eyebrow}
      </div>
      <h2
        className="wordart mt-2 text-3xl sm:text-5xl"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className="comic mt-2 text-base sm:text-lg"
          style={{ color: ledeColor }}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
