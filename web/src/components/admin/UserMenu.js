import { connection } from "next/server";
import { signOut } from "@/app/admin/actions";
import { createAuthClient } from "@/lib/supabaseAuth";

export default async function UserMenu() {
  await connection();
  const supabase = await createAuthClient();
  const { data } = await supabase.auth.getClaims();
  const email = data?.claims?.email ?? "";

  return (
    <details className="group relative">
      <summary className="flex h-12 cursor-pointer list-none items-center gap-3 rounded-md px-2 transition-colors hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-medium uppercase text-white">
          {email.charAt(0)}
        </span>
        <span className="min-w-0 truncate text-sm text-gray-700">{email}</span>
      </summary>
      <div className="absolute inset-x-0 bottom-full z-20 mb-2 rounded-md border border-gray-200 bg-white p-1 shadow-md">
        <form action={signOut}>
          <button
            type="submit"
            className="flex h-9 w-full items-center rounded px-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
          >
            Sign out
          </button>
        </form>
      </div>
    </details>
  );
}
