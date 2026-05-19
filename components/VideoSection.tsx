import { SectionHeading } from "./HowItWorks";

export function VideoSection() {
  return (
    <section
      id="watch"
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#704572", borderColor: "#f5d860" }}
    >
      <SectionHeading
        eyebrow="~ ~ ~ WATCH THIS!! ~ ~ ~"
        title="SEE IT IN ACTION!!"
        lede="Hit PLAY to see how we work our magic on your glasses!!"
        eyebrowColor="#f5d860"
        titleColor="#8dd0d0"
        ledeColor="#ffffff"
      />

      <div className="mt-6 flex justify-center">
        <div
          className="bevel-out inline-block p-3 sm:p-4"
          style={{ background: "#000000", borderColor: "#d04848" }}
        >
          {/* Top "TV" label bar */}
          <div
            className="bevel-in mb-2 flex items-center justify-between px-3 py-1"
            style={{ background: "#c0c0c0" }}
          >
            <span
              className="courier text-xs font-bold"
              style={{ color: "#d04848" }}
            >
              ● REC
            </span>
            <span
              className="impact text-sm"
              style={{ color: "#000080" }}
            >
              MODSBYMAIL.TV
            </span>
            <span
              className="courier text-xs"
              style={{ color: "#4055b2" }}
            >
              CH-01
            </span>
          </div>

          <div
            className="bevel-in"
            style={{ background: "#000000" }}
          >
            <video
              controls
              preload="none"
              playsInline
              poster="/demo-poster.png"
              className="block h-auto w-full"
              style={{
                maxWidth: "880px",
                display: "block",
                background: "#000",
              }}
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support video playback.
              <a href="/demo.mp4">Download the demo here</a>.
            </video>
          </div>

          {/* Bottom "TV" control bar */}
          <div
            className="bevel-in mt-2 flex items-center justify-center gap-3 px-3 py-1"
            style={{ background: "#c0c0c0" }}
          >
            <span
              className="courier text-xs"
              style={{ color: "#000" }}
            >
              ◀◀
            </span>
            <span
              className="courier text-xs"
              style={{ color: "#000" }}
            >
              ▶
            </span>
            <span
              className="courier text-xs"
              style={{ color: "#000" }}
            >
              ▶▶
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <a
          href="#order"
          className="bevel-out impact inline-block px-5 py-2 text-base no-underline"
          style={{ background: "#7abf6e", color: "#000" }}
        >
          ★ READY?? ORDER NOW!! ★
        </a>
      </div>
    </section>
  );
}
