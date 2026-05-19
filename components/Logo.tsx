export function Logo({
  className = "",
  size = 96,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`bevel-out inline-block ${className}`}
      style={{
        background: "#ffffff",
        padding: 4,
        borderColor: "#f5d860",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="ModsByMail"
        width={size}
        height={size}
        style={{ display: "block", width: size, height: "auto" }}
      />
    </span>
  );
}
