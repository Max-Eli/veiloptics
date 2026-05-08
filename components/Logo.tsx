export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
        className="text-champagne-500"
      >
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M3 11c2.5-3.5 5.2-5.2 8-5.2s5.5 1.7 8 5.2c-2.5 3.5-5.2 5.2-8 5.2S5.5 14.5 3 11Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle cx="11" cy="11" r="2.2" fill="currentColor" />
      </svg>
      <span className="font-display text-[1.05rem] tracking-tight text-bone-50">
        Veil <span className="text-bone-300">Optics</span>
      </span>
    </span>
  );
}
