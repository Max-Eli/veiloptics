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
        <Badge bg="#d96bb5" fg="#f5d860">
          ★ Best Viewed in IE 6 ★
        </Badge>
        <Badge bg="#000" fg="#7abf6e">
          Optimized for 800x600
        </Badge>
        <Badge bg="#4055b2" fg="#f5d860">
          Made with Microsoft FrontPage
        </Badge>
        <Badge bg="#f5d860" fg="#d04848">
          ★ HTML 4.01 Transitional ★
        </Badge>
        <Badge bg="#8dd0d0" fg="#4055b2">
          Get Netscape NOW!!
        </Badge>
        <Badge bg="#7abf6e" fg="#000">
          Y2K Compliant!!
        </Badge>
      </div>

      <hr />

      <div className="mt-4 text-center">
        <span
          className="comic text-sm"
          style={{ color: "#d04848" }}
        >
          ★ ★ ★ SIGN OUR GUESTBOOK!! ★ ★ ★
        </span>
      </div>

      <div className="mt-4 text-center">
        <span
          className="bevel-in courier inline-block px-3 py-1 text-xs"
          style={{ background: "#000", color: "#7abf6e" }}
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
        ★ Webmaster: getmodsbymail@gmail.com ★
      </p>

      <p
        className="comic mt-2 text-center text-xs"
        style={{ color: "#704572" }}
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
