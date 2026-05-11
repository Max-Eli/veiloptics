import { Coin, Mario, QBlock, BrickBlock, Pipe, Star } from "./Sprites";

export function Hero() {
  return (
    <section id="top" className="cloud-sky relative scanlines overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-6 sm:pt-20">
        <div className="mb-6 flex justify-center gap-1 sm:gap-2 float">
          {[BrickBlock, QBlock, BrickBlock, QBlock, BrickBlock].map(
            (Block, i) => (
              <div key={i} className="sm:hidden">
                <Block size={36} />
              </div>
            ),
          )}
          {[BrickBlock, QBlock, BrickBlock, QBlock, BrickBlock].map(
            (Block, i) => (
              <div key={`d-${i}`} className="hidden sm:block">
                <Block size={48} />
              </div>
            ),
          )}
        </div>

        <h1 className="text-center font-pixel text-3xl leading-[1.2] text-white text-pixel-shadow sm:text-5xl md:text-6xl">
          <span className="block text-[#fcd000]">MODS</span>
          <span className="block">BY MAIL</span>
        </h1>

        <p className="mt-8 text-center font-pixel text-[10px] leading-relaxed text-white text-pixel-shadow-sm sm:text-sm">
          A MAIL-IN SERVICE TO HIDE THE
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          RECORDING LIGHT ON YOUR
          <br />
          RAY-BAN META GLASSES.
        </p>

        <div className="mt-8 flex justify-center">
          <span className="blink font-pixel text-sm text-white text-pixel-shadow sm:text-lg">
            ▶ PRESS START
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a href="#order" className="pixel-btn pixel-btn-red text-xs sm:text-sm">
            START GAME
          </a>
          <a href="#process" className="pixel-btn text-xs sm:text-sm">
            HOW TO PLAY
          </a>
        </div>

        {/* KC 1-UP banner */}
        <div className="mt-10 flex justify-center">
          <div className="pixel-frame-dark inline-flex items-center gap-3 px-4 py-3">
            <Star size={28} className="float" />
            <div className="font-pixel text-[9px] leading-snug text-white sm:text-xs">
              <div className="text-[#00e430]">1-UP! KANSAS CITY METRO</div>
              <div className="text-white">FREE HAND DELIVERY</div>
            </div>
          </div>
        </div>

        {/* Scene strip */}
        <div className="mt-12 flex items-end justify-center gap-3 sm:gap-6">
          <Mario size={48} className="sm:hidden" />
          <Mario size={72} className="hidden sm:block" />
          <Coin size={24} className="float sm:hidden" />
          <Coin size={40} className="float hidden sm:block" />
          <Pipe width={44} height={56} className="sm:hidden" />
          <Pipe width={72} height={92} className="hidden sm:block" />
          <Coin size={24} className="float sm:hidden" />
          <Coin size={40} className="float hidden sm:block" />
          <Star size={32} className="float sm:hidden" />
          <Star size={56} className="float hidden sm:block" />
        </div>
      </div>

      {/* Ground */}
      <div className="ground-tile h-12 border-t-4 border-black" />

      {/* HUD stats below ground */}
      <div className="bg-black px-4 py-4">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["5 DAYS", "TURNAROUND"],
            ["LIFETIME", "WARRANTY"],
            ["INSURED", "SHIPPING"],
            ["BY HAND", "NO ROBOTS"],
          ].map(([k, v]) => (
            <div key={v} className="text-center font-pixel">
              <div className="text-xs text-[#fcd000] sm:text-sm">{k}</div>
              <div className="mt-1 text-[8px] text-white sm:text-[10px]">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
