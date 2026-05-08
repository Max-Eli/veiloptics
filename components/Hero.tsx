export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-bone-100/[0.06] grain"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(200,169,126,0.10) 0%, rgba(200,169,126,0) 70%), radial-gradient(40% 35% at 80% 30%, rgba(200,169,126,0.06), transparent 70%)",
        }}
      />
      <div className="container-page relative pt-36 pb-28 sm:pt-44 sm:pb-36">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-champagne-500">
          <span className="h-px w-8 bg-champagne-500/60" />
          A specialist mail-in service
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.02] tracking-tightest text-bone-50 text-balance sm:text-6xl md:text-7xl">
          The cleanest way to conceal the recording light on your{" "}
          <span className="text-champagne-400">Ray-Ban Meta</span> glasses.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone-300 text-balance">
          Mail your frames in. We perform a precision mod by hand and return them
          to you within five business days — looking factory and feeling
          identical to the day they shipped.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#order"
            className="inline-flex items-center justify-center rounded-full bg-champagne-500 px-6 py-3 text-sm font-medium text-ink-950 transition hover:bg-champagne-400"
          >
            Start an order
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center rounded-full border border-bone-100/15 px-6 py-3 text-sm font-medium text-bone-100 transition hover:border-bone-100/30 hover:text-bone-50"
          >
            See the process
          </a>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {[
            ["5 days", "Typical turnaround"],
            ["Lifetime", "Workmanship warranty"],
            ["Insured", "Round-trip shipping"],
            ["By hand", "Performed in-house"],
          ].map(([k, v]) => (
            <div key={v} className="border-l border-bone-100/10 pl-4">
              <dt className="font-display text-2xl text-bone-50">{k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone-400">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
