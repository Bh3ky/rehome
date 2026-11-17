"use server";

import { HUB_TYPES } from "@/data/forms";
import { MAX_PHOTOS, PHOTO_PATH } from "@/lib/uploadPhotos";
import { getSupabase } from "@/lib/supabase";

const text = (formData, name) => String(formData.get(name) ?? "").trim();

// Server Actions are public endpoints, so everything is checked again here.
export async function submitHubApplication(formData) {
  const application = {
    hub_name: text(formData, "hub"),
    hub_type: text(formData, "type"),
    city: text(formData, "city"),
    contact_person: text(formData, "person"),
    contact: text(formData, "contact"),
    about: text(formData, "about"),
    needs: text(formData, "needs"),
  };

  let photoPaths = null;
  try {
    photoPaths = JSON.parse(text(formData, "photoPaths") || "[]");
  } catch {}

  const valid =
    application.hub_name &&
    application.city &&
    application.contact_person &&
    application.contact &&
    application.about &&
    application.needs &&
    HUB_TYPES.includes(application.hub_type) &&
    Array.isArray(photoPaths) &&
    photoPaths.length <= MAX_PHOTOS &&
    photoPaths.every((path) => PHOTO_PATH.test(path));

  if (!valid) return { ok: false, message: "Please check the form and try again." };

  // Visitors may only insert, so the new row is not read back.
  const { error } = await getSupabase()
    .from("hub_applications")
    .insert({ ...application, photo_paths: photoPaths });

  if (error) {
    console.error("Saving a hub application failed:", error.code, error.message);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
