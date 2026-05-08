import { SectionHeading } from "./HowItWorks";

const reviews = [
  {
    quote:
      "OMG!! These guys were SO FAST!! My glasses came back lookin BRAND NEW and I cant even tell where the LED was!! 5 STARS!!!! ★★★★★",
    name: "~ Daniel R. ~",
    role: "Brooklyn, NY",
    bg: "#ffff00",
    color: "#ff0000",
    font: "comic",
  },
  {
    quote:
      "I was nervous about mailing my $300 glasses but they sent me a tracking number AND photos!! Came back perfect. Would order again!! :)",
    name: "<<Priya N.>>",
    role: "Austin, TX",
    bg: "#00ffff",
    color: "#000080",
    font: "times",
  },
  {
    quote:
      "Hand delivery in KC was awesome!! Met him at a coffee shop in Westport, took 4 days, no shipping fees. Highly recommend!!!",
    name: "*Marcus T.*",
    role: "Kansas City, MO",
    bg: "#00ff00",
    color: "#800080",
    font: "courier",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#ff8800", borderColor: "#00ffff" }}
    >
      <SectionHeading
        eyebrow="~ ~ ~ FROM THE GUESTBOOK ~ ~ ~"
        title="HAPPY CUSTOMERS!!"
        lede="Read what people are saying!! Sign the guestbook below after you order!!"
        eyebrowColor="#0000ff"
        titleColor="#ffff00"
        ledeColor="#ffffff"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="bevel-out p-4"
            style={{ background: r.bg }}
          >
            <div
              className="impact text-base"
              style={{ color: r.color }}
            >
              ★★★★★
            </div>
            <blockquote
              className={`${r.font} mt-2 text-sm sm:text-base`}
              style={{ color: r.color }}
            >
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption
              className="bevel-in mt-3 p-2 text-xs"
              style={{ background: "#fff", color: "#000" }}
            >
              <div className={`${r.font} font-bold`}>{r.name}</div>
              <div className="comic" style={{ color: "#0000ff" }}>
                {r.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 text-center">
        <span
          className="bevel-in courier inline-block px-3 py-1 text-xs"
          style={{ background: "#000", color: "#ffff00" }}
        >
          ✉ guestbook@modsbymail.com
        </span>
      </div>
    </section>
  );
}
