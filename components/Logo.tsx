export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`wordart text-3xl sm:text-4xl ${className}`}
      style={{ display: "inline-block" }}
    >
      <span style={{ color: "#ff00ff" }}>Mods</span>
      <span style={{ color: "#ffff00" }}>By</span>
      <span style={{ color: "#00ffff" }}>Mail</span>
      <span style={{ color: "#ff0000" }}>!!</span>
    </span>
  );
}
