import Link from "next/link";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import { STATUSES } from "@/data/admin";
import { fetchApplications } from "@/lib/adminData";

export default async function ApplicationsList({ config, searchParams }) {
  const { status } = await searchParams;
  const active = STATUSES.includes(status) ? status : "all";
  const { rows, failed } = await fetchApplications(config);

  if (failed) {
    return <p role="alert" className="mt-6 text-sm text-red-700">Could not load {config.title.toLowerCase()}. Try again shortly.</p>;
  }

  const counts = { all: rows.length };
  for (const key of STATUSES) counts[key] = rows.filter((row) => row.status === key).length;
  const shown = active === "all" ? rows : rows.filter((row) => row.status === active);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {["all", ...STATUSES].map((key) => (
          <Link
            key={key}
            href={key === "all" ? config.path : `${config.path}?status=${key}`}
            aria-current={key === active ? "page" : undefined}
            className={`inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm capitalize transition-colors ${
              key === active
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {key}
            <span className={key === active ? "text-gray-300" : "text-gray-500"}>{counts[key]}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <ApplicationsTable
          config={config}
          rows={shown}
          empty={active === "all" ? `No ${config.title.toLowerCase()} yet.` : `No ${active} ${config.title.toLowerCase()}.`}
        />
      </div>
    </>
  );
}
