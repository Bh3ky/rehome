import { getSupabase } from "@/lib/supabase";

export const MAX_PHOTOS = 6;
export const PHOTO_PATH =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[1-9]\.(jpeg|png|webp)$/;
const MAX_BYTES = 5 * 1024 * 1024;
const EXTENSIONS = { "image/jpeg": "jpeg", "image/png": "png", "image/webp": "webp" };

// Photos go from the browser straight to Supabase Storage: Server Actions cap requests at 1 MB.
// Returns paths shaped like "<uuid>/1.jpeg", which the Server Action re-checks before saving.
export async function uploadPhotos(bucket, files) {
  if (files.length > MAX_PHOTOS) {
    throw new Error(`Please add up to ${MAX_PHOTOS} photos.`);
  }

  const supabase = getSupabase();
  const folder = crypto.randomUUID();
  const paths = [];

  for (const [index, file] of files.entries()) {
    const extension = EXTENSIONS[file.type];
    if (!extension) throw new Error("Photos must be JPG, PNG or WebP.");
    if (file.size > MAX_BYTES) throw new Error("Each photo must be under 5 MB.");

    const path = `${folder}/${index + 1}.${extension}`;
    const { error } = await supabase.storage
      .from(bucket)
      .upload(path, file, { contentType: file.type });
    if (error) throw new Error("A photo could not be uploaded. Please try again.");

    paths.push(path);
  }

  return paths;
}
