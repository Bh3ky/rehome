import Image from "next/image";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { setStatus } from "@/app/admin/actions";
import StatusBadge from "@/components/admin/StatusBadge";
import { STATUSES } from "@/data/admin";
import { formatDate } from "@/lib/adminData";
import { createAuthClient } from "@/lib/supabaseAuth";

const CARD = "rounded-md border border-gray-200 bg-white shadow-xs";

export default async function ApplicationDetail({ config, params }) {
  const { id } = await params;
  await connection();
  const supabase = await createAuthClient();
  const { data: row } = await supabase.from(config.table).select("*").eq("id", id).maybeSingle();
  if (!row) notFound();

  const { data: signed } = row.photo_paths.length
    ? await supabase.storage.from(config.bucket).createSignedUrls(row.photo_paths, 3600)
    : { data: [] };
  const photos = (signed ?? []).filter((photo) => photo.signedUrl);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{row[config.titleKey]}</h1>
        <StatusBadge status={row.status} />
      </div>
      <p className="mt-1 text-sm text-gray-500">Submitted {formatDate(row.created_at)}</p>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="flex flex-col gap-6 xl:col-span-2">
          <section className={CARD}>
            <h2 className="border-b border-gray-200 px-6 py-4 text-base font-semibold text-gray-900">Details</h2>
            <dl className="divide-y divide-gray-200">
              {config.fields.map(({ label, key, long, format }) =>
                row[key] ? (
                  <div key={key} className={`px-6 py-4 ${long ? "" : "sm:grid sm:grid-cols-3 sm:gap-4"}`}>
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd
                      className={`mt-1 text-sm text-gray-900 ${long ? "whitespace-pre-wrap" : "sm:col-span-2 sm:mt-0"}`}
                    >
                      {format ? format(row[key]) : row[key]}
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          </section>

          <section className={CARD}>
            <h2 className="border-b border-gray-200 px-6 py-4 text-base font-semibold text-gray-900">
              Photos <span className="font-normal text-gray-500">({photos.length})</span>
            </h2>
            {photos.length === 0 ? (
              <p className="px-6 py-8 text-sm text-gray-500">No photos.</p>
            ) : (
              <ul className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3">
                {photos.map((photo) => (
                  <li key={photo.path}>
                    <a
                      href={photo.signedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block aspect-square overflow-hidden rounded-md border border-gray-200 bg-gray-50"
                    >
                      <Image src={photo.signedUrl} alt="" fill unoptimized className="object-cover" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <section className={`${CARD} self-start`}>
          <h2 className="border-b border-gray-200 px-6 py-4 text-base font-semibold text-gray-900">Status</h2>
          <form action={setStatus} className="flex flex-col gap-2 p-6">
            <input type="hidden" name="table" value={config.table} />
            <input type="hidden" name="id" value={row.id} />
            {STATUSES.map((status) => (
              <button
                key={status}
                type="submit"
                name="status"
                value={status}
                disabled={status === row.status}
                className="h-10 rounded-md border border-gray-300 bg-white text-sm font-medium capitalize text-gray-900 shadow-xs transition-colors hover:bg-gray-50 disabled:border-gray-900 disabled:bg-gray-900 disabled:text-white"
              >
                {status}
              </button>
            ))}
          </form>
        </section>
      </div>
    </>
  );
}
