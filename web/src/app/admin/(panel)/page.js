import { connection } from "next/server";
import { Suspense } from "react";
import { signOut } from "@/app/admin/actions";
import { createAuthClient } from "@/lib/supabaseAuth";

async function Session() {
  await connection();
  const supabase = await createAuthClient();
  const { data } = await supabase.auth.getClaims();
  const email = data?.claims?.email ?? "";
  const { data: isAdmin, error } = await supabase.rpc("is_admin");

  let message = `Signed in as ${email}.`;
  if (error) message = "Admin setup is incomplete. Run supabase/admin.sql in the Supabase SQL editor.";
  else if (!isAdmin) message = `${email} does not have admin access.`;

  return (
    <div className="w-full max-w-sm rounded-md border border-gray-200 bg-white p-8 shadow-xs">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Admin</h1>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
      <form action={signOut} className="mt-6">
        <button
          type="submit"
          className="h-10 w-full rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-xs transition-colors hover:bg-gray-50"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="grid min-h-screen place-items-center px-4">
      <Suspense fallback={null}>
        <Session />
      </Suspense>
    </div>
  );
}
