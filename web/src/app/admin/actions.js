"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { STATUSES } from "@/data/admin";
import { createAuthClient } from "@/lib/supabaseAuth";

export async function signOut() {
  const supabase = await createAuthClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

const TABLES = { offers: "/admin/offers", hub_applications: "/admin/hubs" };

// RLS only lets admins update the status column, so nothing else can change from here.
export async function setStatus(formData) {
  const table = String(formData.get("table"));
  const id = String(formData.get("id"));
  const status = String(formData.get("status"));
  if (!(table in TABLES) || !STATUSES.includes(status)) return;

  const supabase = await createAuthClient();
  const { error } = await supabase.from(table).update({ status }).eq("id", id);
  if (error) {
    console.error("Updating status failed:", error.code, error.message);
    return;
  }

  revalidatePath("/admin", "layout");
}
