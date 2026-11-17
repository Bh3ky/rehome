import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";
import { formatDate } from "@/lib/adminData";

const HEAD = "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500";

export default function ApplicationsTable({ config, rows, empty }) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 bg-white shadow-xs">
      <table className="w-full min-w-[640px] border-collapse">
        <thead className="bg-gray-50">
          <tr>
            {config.columns.map(({ label }) => (
              <th key={label} scope="col" className={HEAD}>{label}</th>
            ))}
            <th scope="col" className={HEAD}>Status</th>
            <th scope="col" className={`${HEAD} text-right`}>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={config.columns.length + 2} className="px-4 py-12 text-center text-sm text-gray-500">
                {empty}
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={row.id} className="h-12 border-t border-gray-200 transition-colors hover:bg-gray-50">
              {config.columns.map(({ key }, index) => (
                <td key={key} className="max-w-56 truncate px-4 text-sm text-gray-600">
                  {index === 0 ? (
                    <Link href={`${config.path}/${row.id}`} className="font-medium text-gray-900 hover:underline">
                      {row[key]}
                    </Link>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td className="px-4"><StatusBadge status={row.status} /></td>
              <td className="whitespace-nowrap px-4 text-right text-sm text-gray-500">{formatDate(row.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
