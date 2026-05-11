import { Coin } from "./Sprites";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Coin size={28} />
      <span
        className="font-pixel text-base leading-none text-white text-pixel-shadow-sm"
      >
        MODSBYMAIL
      </span>
    </span>
  );
}
