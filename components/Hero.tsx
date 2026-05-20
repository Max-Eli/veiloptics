import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section id="top">
      <Marquee>
        <span>
          ★★★ WELCOME TO MODSBYMAIL.COM ★★★ NOW ACCEPTING ORDERS!! ★★★ HAND
          DELIVERY IN KANSAS CITY!! ★★★ TELL YOUR FRIENDS!!! ★★★ SIGN OUR
          GUESTBOOK!! ★★★&nbsp;&nbsp;&nbsp;
        </span>
      </Marquee>

      <div
        className="bevel-out p-6 text-center sm:p-10"
        style={{ background: "#d96bb5", borderColor: "#f5d860" }}
      >
        <h1
          className="wordart rainbow-text text-4xl leading-none sm:text-6xl md:text-7xl"
          style={{ textShadow: "3px 3px 0 #000" }}
        >
          M*O*D*S*B*Y*M*A*I*L
        </h1>

        <p
          className="comic mt-4 text-lg font-bold sm:text-2xl"
          style={{ color: "#f5d860" }}
        >
          ~~~ The #1 Spot On The Web To Hide That Annoying LED!! ~~~
        </p>

        <p
          className="comic mt-2 text-base sm:text-lg"
          style={{ color: "#ffffff" }}
        >
          You mail us your Ray-Ban or Oakley Meta glasses. We hide the recording light.
          We mail them back. <span>EASY!!</span>
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#order"
            className="bevel-out impact px-6 py-3 text-2xl no-underline blink"
            style={{ background: "#7abf6e", color: "#000" }}
          >
            CLICK HERE TO ORDER!!!
          </a>
          <a
            href="#process"
            className="bevel-out comic px-4 py-3 text-base no-underline"
            style={{ background: "#8dd0d0", color: "#000" }}
          >
            How does it work??
          </a>
        </div>

        <div
          className="bevel-in mt-6 inline-block px-4 py-2 text-base"
          style={{ background: "#000", color: "#7abf6e" }}
        >
          <span className="courier">★ KANSAS CITY METRO?</span>{" "}
          <span className="courier" style={{ color: "#d96bb5" }}>
            WE HAND DELIVER!!
          </span>
        </div>
      </div>

      <div
        className="construction-stripes p-4 text-center"
        aria-hidden
      >
        <div
          className="bevel-out impact inline-block px-4 py-2 text-lg"
          style={{ background: "#f5d860", color: "#000" }}
        >
          🚧 UNDER CONSTRUCTION 🚧 PARDON OUR DUST!! 🚧
        </div>
      </div>

      <div
        className="bevel-in mx-auto my-4 grid max-w-3xl grid-cols-2 gap-2 p-4 text-center sm:grid-cols-4"
        style={{ background: "#f5d860" }}
      >
        {[
          ["24 HOURS", "Turnaround"],
          ["LIFETIME", "Warranty!!"],
          ["FREE", "Shipping!! (both ways)"],
          ["BY HAND", "(no robots!)"],
        ].map(([k, v]) => (
          <div
            key={v}
            className="bevel-out p-2"
            style={{ background: "#fff" }}
          >
            <div
              className="impact text-lg"
              style={{ color: "#d04848" }}
            >
              {k}
            </div>
            <div className="comic text-xs" style={{ color: "#000080" }}>
              {v}
            </div>
          </div>
        ))}
      </div>

      <div
        className="comic mx-auto max-w-3xl text-center text-sm"
        style={{ color: "#f5d860" }}
      >
        Visitor #&nbsp;
        <span
          className="bevel-in courier inline-block px-2 py-1"
          style={{ background: "#000", color: "#7abf6e" }}
        >
          0 0 0 4 2 0 6 9
        </span>
        &nbsp; ★ Last updated: 5/7/2026 ★
      </div>
    </section>
  );
}
