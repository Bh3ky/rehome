import { connection } from "next/server";
import { createAuthClient } from "@/lib/supabaseAuth";

const DATE = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeZone: "Africa/Harare" });
export const formatDate = (iso) => DATE.format(new Date(iso));

// Volumes are small, so the lists load the latest rows once and filter them in memory.
export async function fetchApplications(config) {
  await connection();
  const supabase = await createAuthClient();
  const columns = config.columns.map(({ key }) => key).join(", ");
  const { data, error } = await supabase
    .from(config.table)
    .select(`id, created_at, status, ${columns}`)
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) console.error(`Loading ${config.table} failed:`, error.code, error.message);
  return { rows: data ?? [], failed: Boolean(error) };
}
