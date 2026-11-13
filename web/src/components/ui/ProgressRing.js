export default function ProgressRing({ received, needed, size = 36 }) {
  const percent = needed ? Math.min(100, (received / needed) * 100) : 0;

  return (
    <svg
      viewBox="0 0 36 36"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray={`${percent} 100`}
        transform="rotate(-90 18 18)"
      />
    </svg>
  );
}
