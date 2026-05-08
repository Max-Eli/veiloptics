import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="bevel-ridge p-4 sm:p-6"
      style={{ background: "#c0c0c0", borderColor: "#000080" }}
    >
      <div className="text-center">
        <Logo />
      </div>

      <hr />

      <div className="comic mt-4 flex flex-wrap justify-center gap-2 text-xs">
        <Badge bg="#ff00ff" fg="#ffff00">
          ★ Best Viewed in IE 6 ★
        </Badge>
        <Badge bg="#000" fg="#00ff00">
          Optimized for 800x600
        </Badge>
        <Badge bg="#0000ff" fg="#ffff00">
          Made with Microsoft FrontPage
        </Badge>
        <Badge bg="#ffff00" fg="#ff0000">
          ★ HTML 4.01 Transitional ★
        </Badge>
        <Badge bg="#00ffff" fg="#0000ff">
          Get Netscape NOW!!
        </Badge>
        <Badge bg="#00ff00" fg="#000">
          Y2K Compliant!!
        </Badge>
      </div>

      <hr />

      <div className="mt-4 text-center">
        <span
          className="comic blink text-sm"
          style={{ color: "#ff0000" }}
        >
          ★ ★ ★ SIGN OUR GUESTBOOK!! ★ ★ ★
        </span>
      </div>

      <div className="mt-4 text-center">
        <span
          className="bevel-in courier inline-block px-3 py-1 text-xs"
          style={{ background: "#000", color: "#00ff00" }}
        >
          You are visitor #&nbsp;0&nbsp;0&nbsp;0&nbsp;4&nbsp;2&nbsp;0&nbsp;6&nbsp;9
        </span>
      </div>

      <hr />

      <p
        className="comic mt-3 text-center text-xs"
        style={{ color: "#000080" }}
      >
        © {new Date().getFullYear()} ModsByMail.com -- All Rights Reserved!!
        Not affiliated with Meta Platforms or Ray-Ban / EssilorLuxottica.
        ★ Webmaster: orders@modsbymail.com ★
      </p>

      <p
        className="comic mt-2 text-center text-xs"
        style={{ color: "#800080" }}
      >
        ~~~ Thanks for visiting!! Come back soon!! ~~~
      </p>
    </footer>
  );
}

function Badge({
  bg,
  fg,
  children,
}: {
  bg: string;
  fg: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="bevel-out px-2 py-1"
      style={{ background: bg, color: fg }}
    >
      {children}
    </span>
  );
}
