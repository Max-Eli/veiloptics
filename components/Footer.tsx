import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-14">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-xs text-bone-400">
          © {new Date().getFullYear()} Veil Optics. Not affiliated with Meta
          Platforms, Inc. or Ray-Ban / EssilorLuxottica.
        </p>
      </div>
    </footer>
  );
}
