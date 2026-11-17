"use server";

import { getCampaign } from "@/data/campaigns";
import { CATEGORIES, CONDITIONS } from "@/data/forms";
import { MAX_PHOTOS, PHOTO_PATH } from "@/lib/uploadPhotos";
import { getSupabase } from "@/lib/supabase";

const text = (formData, name) => String(formData.get(name) ?? "").trim();

// Server Actions are public endpoints, so everything is checked again here.
export async function submitOffer(formData) {
  const offer = {
    item: text(formData, "item"),
    category: text(formData, "category"),
    condition: text(formData, "condition"),
    campaign_slug: text(formData, "campaign") || null,
    size: text(formData, "size") || null,
    location: text(formData, "location"),
    cultural_notes: text(formData, "notes") || null,
    donor_name: text(formData, "name"),
    donor_contact: text(formData, "contact"),
  };

  let photoPaths = null;
  try {
    photoPaths = JSON.parse(text(formData, "photoPaths") || "[]");
  } catch {}

  const valid =
    offer.item &&
    offer.location &&
    offer.donor_name &&
    offer.donor_contact &&
    CATEGORIES.includes(offer.category) &&
    CONDITIONS.includes(offer.condition) &&
    (!offer.campaign_slug || getCampaign(offer.campaign_slug)) &&
    Array.isArray(photoPaths) &&
    photoPaths.length >= 1 &&
    photoPaths.length <= MAX_PHOTOS &&
    photoPaths.every((path) => PHOTO_PATH.test(path));

  if (!valid) return { ok: false, message: "Please check the form and try again." };

  // Visitors may only insert, so the new row is not read back.
  const { error } = await getSupabase()
    .from("offers")
    .insert({ ...offer, photo_paths: photoPaths });

  if (error) {
    console.error("Saving an offer failed:", error.code, error.message);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
