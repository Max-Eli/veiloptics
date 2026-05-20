import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "Order received — ModsByMail",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <Logo size={120} />
        </div>

        <section
          className="bevel-ridge p-6 sm:p-10"
          style={{ background: "#7abf6e", borderColor: "#f5d860" }}
        >
          <div className="text-center">
            <div
              className="comic text-sm"
              style={{ color: "#4055b2" }}
            >
              ~ ~ ~ ORDER RECEIVED!! ~ ~ ~
            </div>
            <h1
              className="wordart mt-3 text-4xl sm:text-6xl"
              style={{ color: "#d04848" }}
            >
              THANK YOU!!
            </h1>
            <p
              className="comic mt-3 text-lg sm:text-xl"
              style={{ color: "#000" }}
            >
              Your payment went through!! ✓
            </p>
          </div>

          <hr />

          <div
            className="bevel-in p-4 sm:p-6"
            style={{ background: "#ffffff" }}
          >
            <div
              className="impact text-2xl sm:text-3xl"
              style={{ color: "#d04848" }}
            >
              ★ WHAT HAPPENS NEXT ★
            </div>
            <ol className="comic mt-3 space-y-3 text-base sm:text-lg">
              <li>
                <strong style={{ color: "#4055b2" }}>1.</strong>{" "}
                Check your e-mail for a Stripe receipt and your prepaid
                shipping label (it lands within a few minutes).
              </li>
              <li>
                <strong style={{ color: "#4055b2" }}>2.</strong>{" "}
                Pack your frames in any small box with some padding. Print
                the label, slap it on, and drop the package at any USPS or
                UPS location.
              </li>
              <li>
                <strong style={{ color: "#4055b2" }}>3.</strong>{" "}
                We&apos;ll e-mail you when your frames arrive AND when
                they ship back, with tracking. Most orders are back on your
                face within five business days.
              </li>
            </ol>
          </div>

          <hr />

          <div className="text-center">
            <p
              className="comic text-base"
              style={{ color: "#4055b2" }}
            >
              Questions?? E-mail{" "}
              <a
                href="mailto:getmodsbymail@gmail.com"
                style={{ color: "#d04848" }}
              >
                getmodsbymail@gmail.com
              </a>{" "}
              and we&apos;ll get back to you the same business day.
            </p>
            <Link
              href="/"
              className="bevel-out impact mt-5 inline-block px-6 py-3 text-base no-underline"
              style={{ background: "#f5d860", color: "#000" }}
            >
              ← Back to ModsByMail
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
