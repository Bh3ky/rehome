const STYLES = {
  new: "bg-blue-50 text-blue-700",
  screened: "bg-amber-50 text-amber-700",
  accepted: "bg-green-50 text-green-700",
  declined: "bg-gray-100 text-gray-600",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded px-2 text-xs font-semibold uppercase tracking-wide ${STYLES[status]}`}
    >
      {status}
    </span>
  );
}
