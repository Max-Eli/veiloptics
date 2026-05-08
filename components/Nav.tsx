"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#top", label: "HOME", color: "#ff00ff" },
  { href: "#process", label: "How It Works", color: "#00ffff" },
  { href: "#pricing", label: "$$ PRICES $$", color: "#00ff00" },
  { href: "#reviews", label: "Guestbook", color: "#ffff00" },
  { href: "#faq", label: "F.A.Q.", color: "#ff8800" },
  { href: "#order", label: "ORDER NOW!!", color: "#ff0000" },
];

export function Nav() {
  return (
    <header
      className="bevel-ridge"
      style={{ background: "#c0c0c0", borderColor: "#ff00ff" }}
    >
      <div className="flex flex-col items-center gap-3 px-4 py-4">
        <Link href="#top" className="block">
          <Logo />
        </Link>

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
