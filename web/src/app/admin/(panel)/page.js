import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import { HUBS, OFFERS } from "@/data/admin";
import { fetchApplications } from "@/lib/adminData";
import { createAuthClient } from "@/lib/supabaseAuth";

async function AccessWarning() {
  await connection();
  const supabase = await createAuthClient();
  const { data: isAdmin, error } = await supabase.rpc("is_admin");
  if (!error && isAdmin) return null;

  return (
    <p role="alert" className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      {error
        ? "Admin setup is incomplete. Run supabase/admin.sql in the Supabase SQL editor."
        : "This account does not have admin access."}
    </p>
  );
}

function Stat({ label, value, href }) {
  return (
    <Link
      href={href}
      className="rounded-md border border-gray-200 bg-white p-6 shadow-xs transition-colors hover:bg-gray-50"
    >
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">{value}</p>
    </Link>
  );
}

function Latest({ config, rows }) {
  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Latest {config.title.toLowerCase()}</h2>
        <Link href={config.path} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
          View all
        </Link>
      </div>
      <ApplicationsTable config={config} rows={rows.slice(0, 5)} empty={`No ${config.title.toLowerCase()} yet.`} />
    </section>
  );
}

async function Overview() {
  const [offers, hubs] = await Promise.all([fetchApplications(OFFERS), fetchApplications(HUBS)]);
  const fresh = (rows) => rows.filter((row) => row.status === "new").length;

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="New offers" value={fresh(offers.rows)} href={`${OFFERS.path}?status=new`} />
        <Stat label="All offers" value={offers.rows.length} href={OFFERS.path} />
        <Stat label="New hub applications" value={fresh(hubs.rows)} href={`${HUBS.path}?status=new`} />
        <Stat label="All hub applications" value={hubs.rows.length} href={HUBS.path} />
      </div>
      <Latest config={OFFERS} rows={offers.rows} />
      <Latest config={HUBS} rows={hubs.rows} />
    </>
  );
}

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Dashboard</h1>
      <Suspense fallback={null}>
        <AccessWarning />
      </Suspense>
      <Suspense fallback={null}>
        <Overview />
      </Suspense>
    </>
  );
}
