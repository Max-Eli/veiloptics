export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="marquee py-2 text-base sm:text-lg">
      <div className="marquee-track">{children}</div>
    </div>
  );
}
