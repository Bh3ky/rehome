"use client";

import { useState } from "react";
import { submitHubApplication } from "@/app/(site)/for-hubs/actions";
import { HUB_TYPES } from "@/data/forms";
import { uploadPhotos } from "@/lib/uploadPhotos";

const field =
  "w-full rounded-xl border border-ink/20 bg-white px-4 py-2.5 text-base outline-none transition-colors focus:border-ink";
const label = "flex flex-col gap-1.5 text-sm font-medium";

export default function HubForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending", message: "" });

    try {
      const files = data.getAll("photos").filter((file) => file.size > 0);
      const paths = await uploadPhotos("hub-photos", files);
      data.delete("photos");
      data.set("photoPaths", JSON.stringify(paths));

      const result = await submitHubApplication(data);
      if (!result.ok) throw new Error(result.message);

      form.reset();
      setStatus({ state: "done", message: "Thank you. We'll be in touch." });
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className={`${label} sm:col-span-2`}>
        Hub name
        <input name="hub" type="text" required maxLength={200} className={field} />
      </label>

      <label className={label}>
        Type of hub
        <select name="type" required defaultValue="" className={field}>
          <option value="" disabled>
            Select
          </option>
          {HUB_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className={label}>
        City
        <input name="city" type="text" required maxLength={100} className={field} />
      </label>

      <label className={label}>
        Contact person
        <input name="person" type="text" required maxLength={120} className={field} />
      </label>

      <label className={label}>
        Email or phone
        <input name="contact" type="text" required maxLength={200} className={field} />
      </label>

      <label className={`${label} sm:col-span-2`}>
        About the space
        <textarea
          name="about"
          rows={2}
          placeholder="What the space is like and who uses it"
          required
          maxLength={3000}
          className={field}
        />
      </label>

      <label className={`${label} sm:col-span-2`}>
        What it needs
        <textarea
          name="needs"
          rows={2}
          placeholder="Furniture, art, books, anything that would help"
          required
          maxLength={3000}
          className={field}
        />
      </label>

      <label className={`${label} sm:col-span-2`}>
        Photos
        <input
          name="photos"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className={`${field} file:mr-4 file:rounded-lg file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`}
        />
      </label>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="rounded-xl bg-ink px-6 py-3 text-base font-medium text-white transition-colors hover:bg-ink/90 disabled:opacity-60 sm:col-span-2"
      >
        {status.state === "sending" ? "Sending…" : "Submit"}
      </button>

      {status.message && (
        <p
          role={status.state === "error" ? "alert" : "status"}
          className={`text-sm font-medium sm:col-span-2 ${
            status.state === "error" ? "text-red-700" : "text-green"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
