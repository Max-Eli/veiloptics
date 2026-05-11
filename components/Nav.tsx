"use client";

import Link from "next/link";
import { Coin, Heart } from "./Sprites";

const links = [
  { href: "#process", label: "STAGES" },
  { href: "#pricing", label: "POWER-UPS" },
  { href: "#reviews", label: "PLAYERS" },
  { href: "#faq", label: "F.A.Q." },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        {/* HUD: Mario | World | Coins | Time */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-pixel text-[10px] text-white sm:text-xs">
          <HudItem label="WORLD" value="1-1" />
          <HudItem
            label={
              <span className="inline-flex items-center gap-1">
                <Coin size={14} />
                <span>x</span>
              </span>
            }
            value="99"
          />
          <HudItem
            label={
              <span className="inline-flex items-center gap-1">
                <Heart size={16} />
              </span>
            }
            value="03"
          />
          <HudItem label="TIME" value="999" />
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-pixel text-[10px] text-white hover:text-[#fcd000] sm:text-xs"
            >
              {l.label}
            </Link>
          ))}
          <Link href="#order" className="pixel-btn pixel-btn-red text-[10px] sm:text-xs">
            START
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HudItem({
  label,
  value,
}: {
  label: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-[#bcbcbc]">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}
