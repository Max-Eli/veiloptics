"use client";

import Link from "next/link";

const links = [
  { href: "#top", label: "HOME", color: "#d96bb5" },
  { href: "#process", label: "How It Works", color: "#8dd0d0" },
  { href: "#pricing", label: "$$ PRICES $$", color: "#7abf6e" },
  { href: "#reviews", label: "Guestbook", color: "#f5d860" },
  { href: "#faq", label: "F.A.Q.", color: "#dd8b3a" },
  { href: "#order", label: "ORDER NOW!!", color: "#d04848" },
];

export function Nav() {
  return (
    <header
      className="bevel-ridge"
      style={{ background: "#c0c0c0", borderColor: "#d96bb5" }}
    >
      <div className="flex flex-col items-center gap-3 px-4 py-4">
        <Link
          href="#top"
          className="block w-full no-underline"
          aria-label="ModsByMail"
        >
          <div
            className="bevel-out h-20 w-full sm:h-24"
            style={{
              backgroundImage: "url('/logo-tile.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto 100%",
              backgroundColor: "#ffffff",
              borderColor: "#f5d860",
              imageRendering: "auto",
            }}
            role="img"
          />
        </Link>

        <div
          className="comic text-center text-xs"
          style={{ color: "#704572" }}
        >
          ~ Welcome to Mods By Mail!! ~
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="bevel-out comic px-3 py-2 text-sm font-bold no-underline"
              style={{ background: l.color, color: "#000" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="comic text-center text-xs" style={{ color: "#000080" }}>
          ~~ Best viewed in Internet Explorer 6 at 800x600 ~~
        </div>
      </div>
    </header>
  );
}
