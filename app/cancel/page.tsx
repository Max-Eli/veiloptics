import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "Checkout canceled — ModsByMail",
  robots: { index: false, follow: false },
};

export default function CancelPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex justify-center">
          <Logo size={120} />
        </div>

        <section
          className="bevel-ridge p-6 sm:p-10 text-center"
          style={{ background: "#f5d860", borderColor: "#d04848" }}
        >
          <div
            className="comic text-sm"
            style={{ color: "#4055b2" }}
          >
            ~ checkout canceled ~
          </div>
          <h1
            className="wordart mt-3 text-4xl sm:text-5xl"
            style={{ color: "#704572" }}
          >
            NO WORRIES!!
          </h1>
          <p
            className="comic mt-4 text-base sm:text-lg"
            style={{ color: "#000" }}
          >
            You canceled before paying -- no charge was made. Your card was
            not touched.
          </p>
          <p
            className="comic mt-3 text-base sm:text-lg"
            style={{ color: "#000" }}
          >
            Want to try again?? Head back to the order form whenever
            you&apos;re ready.
          </p>

          <Link
            href="/#order"
            className="bevel-out impact mt-6 inline-block px-6 py-3 text-base no-underline"
            style={{ background: "#7abf6e", color: "#000" }}
          >
            ← Back to the order form
          </Link>
        </section>
      </div>
    </main>
  );
}
