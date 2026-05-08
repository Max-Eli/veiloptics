import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./HowItWorks";

export function Order() {
  return (
    <section
      id="order"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#0000ff", borderColor: "#00ff00" }}
    >
      <SectionHeading
        eyebrow="!! READY TO ORDER !!"
        title="START AN ORDER!!"
        lede="Fill out the form!! We e-mail back within 1 business day with a pre-paid label!!"
        eyebrowColor="#ffff00"
        titleColor="#00ffff"
        ledeColor="#ffffff"
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div
          className="bevel-out p-4"
          style={{ background: "#ffff00" }}
        >
          <h3
            className="impact text-2xl"
            style={{ color: "#ff0000" }}
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
              <a href="mailto:orders@modsbymail.com">
                orders@modsbymail.com
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
            style={{ background: "#00ff00" }}
          >
            <div
              className="impact blink text-base"
              style={{ color: "#ff0000" }}
            >
              ★★ KC METRO?? ★★
            </div>
            <p
              className="comic mt-2 text-sm"
              style={{ color: "#000" }}
            >
              We will <span className="blink"><strong>HAND DELIVER</strong></span>{" "}
              to anyone in the Kansas City metro area for FREE!! No shipping
              required, just pick &quot;KC Local&quot; in the form!!
            </p>
          </div>

          <hr />

          <div className="mt-3 text-center">
            <span
              className="bevel-out comic inline-block px-3 py-1 text-xs"
              style={{ background: "#ff00ff", color: "#fff" }}
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
