"use server";

import { headers } from "next/headers";
import { createAuthClient } from "@/lib/supabaseAuth";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMagicLink(formData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return { ok: false, message: "Enter a valid email address." };
  }

  // shouldCreateUser: false means only people already invited in Supabase can ever sign in.
  const origin = (await headers()).get("origin");
  const supabase = await createAuthClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false, emailRedirectTo: `${origin}/auth/confirm` },
  });

  if (error?.status === 429) {
    return { ok: false, message: "Please wait a minute before asking for another link." };
  }
  if (error) console.error("Admin sign-in link failed:", error.status, error.code);

  // Same answer whether or not the address has access, so it cannot be used to probe for admins.
  return { ok: true, message: "If that address has access, a sign-in link is on its way." };
}
