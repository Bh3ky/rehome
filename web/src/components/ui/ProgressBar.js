export default function ProgressBar({ received, needed, tone = "light" }) {
  const onDark = tone === "light";
  const percent = needed ? Math.min(100, (received / needed) * 100) : 0;

  return (
    <div>
      <div
        className={`h-1.5 overflow-hidden rounded-full ${
          onDark ? "bg-white/25" : "bg-ink/10"
        }`}
      >
        <div
          className={`h-full rounded-full ${onDark ? "bg-white" : "bg-green"}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p
        className={`mt-2 text-sm font-medium ${
          onDark ? "text-white/85" : "text-ink/70"
        }`}
      >
        {received} of {needed} items received
      </p>
    </div>
  );
}
