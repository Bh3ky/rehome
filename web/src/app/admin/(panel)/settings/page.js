import { connection } from "next/server";
import { Suspense } from "react";
import { formatDate } from "@/lib/adminData";
import { createAuthClient } from "@/lib/supabaseAuth";

async function Profile() {
  await connection();
  const supabase = await createAuthClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user;
  if (!user) return null;

  const rows = [
    ["Email", user.email],
    ["Member since", formatDate(user.created_at)],
    ["Last sign-in", user.last_sign_in_at ? formatDate(user.last_sign_in_at) : "—"],
  ];

  return (
    <section className="mt-6 max-w-2xl rounded-md border border-gray-200 bg-white shadow-xs">
      <h2 className="border-b border-gray-200 px-6 py-4 text-base font-semibold text-gray-900">Profile</h2>
      <dl className="divide-y divide-gray-200">
        {rows.map(([label, value]) => (
          <div key={label} className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm text-gray-500">{label}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function SettingsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Settings</h1>
      <Suspense fallback={null}>
        <Profile />
      </Suspense>
    </>
  );
}
