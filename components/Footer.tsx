import { Logo } from "./Logo";
import { Coin } from "./Sprites";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <div className="font-pixel text-2xl text-white text-pixel-shadow-sm sm:text-3xl">
            THANK YOU
          </div>
          <div className="font-pixel mt-2 text-xs text-[#fcd000] sm:text-sm">
            FOR PLAYING
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Coin size={20} className="coin-spin" />
          <span className="font-pixel blink text-[10px] text-white sm:text-xs">
            INSERT COIN TO CONTINUE
          </span>
          <Coin size={20} className="coin-spin" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Logo />
          <p className="font-terminal text-center text-base text-[#bcbcbc] sm:text-right">
            © {new Date().getFullYear()} ModsByMail. Not affiliated with Meta
            Platforms or Ray-Ban / EssilorLuxottica.
          </p>
        </div>
      </div>
    </footer>
  );
}
