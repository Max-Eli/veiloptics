import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./HowItWorks";

export function Order() {
  return (
    <section
      id="order"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#4055b2", borderColor: "#7abf6e" }}
    >
      <SectionHeading
        eyebrow="!! READY TO ORDER !!"
        title="START AN ORDER!!"
        lede="Fill out the form!! We e-mail back within 1 business day with a pre-paid label!!"
        eyebrowColor="#f5d860"
        titleColor="#8dd0d0"
        ledeColor="#ffffff"
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div
          className="bevel-out p-4"
          style={{ background: "#f5d860" }}
        >
          <h3
            className="impact text-2xl"
            style={{ color: "#d04848" }}
          >
            ★ CONTACT INFO ★
          </h3>
          <hr />
          <ul
            className="comic space-y-3 text-sm sm:text-base"
            style={{ color: "#000080" }}
          >
            <li>
              <strong>E-MAIL:</strong>{" "}
              <a href="mailto:getmodsbymail@gmail.com">
                getmodsbymail@gmail.com
              </a>
            </li>
            <li>
              <strong>HOURS:</strong> Mon-Fri, 9am-6pm CST
            </li>
            <li>
              <strong>WORKSHOP:</strong> Kansas City, MO (by appt!!)
            </li>
          </ul>

          <hr />

          <div
            className="bevel-in mt-3 p-3"
            style={{ background: "#7abf6e" }}
          >
            <div
              className="impact text-base"
              style={{ color: "#d04848" }}
            >
              ★★ KC METRO?? ★★
            </div>
            <p
              className="comic mt-2 text-sm"
              style={{ color: "#000" }}
            >
              We will <strong>HAND DELIVER</strong>{" "}
              to anyone in the Kansas City metro area for FREE!! No shipping
              required, just pick &quot;KC Local&quot; in the form!!
            </p>
          </div>

          <hr />

          <div
            className="bevel-out mt-3 p-3 text-center"
            style={{ background: "#ffffff", borderColor: "#4055b2" }}
          >
            <div
              className="impact text-lg"
              style={{ color: "#d04848" }}
            >
              ★ WE ACCEPT ★
            </div>
            <div
              className="comic mt-1 text-sm sm:text-base"
              style={{ color: "#000080" }}
            >
              💳 Credit / Debit Card
              <br />
              💵 Cash &nbsp;·&nbsp; Venmo &nbsp;·&nbsp; PayPal
            </div>
          </div>

          <div className="mt-3 text-center">
            <span
              className="bevel-out comic inline-block px-3 py-1 text-xs"
              style={{ background: "#d96bb5", color: "#fff" }}
            >
              ✉ Mail us anytime!!
            </span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
