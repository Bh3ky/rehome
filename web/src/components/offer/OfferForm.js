"use client";

import { useState } from "react";
import { submitOffer } from "@/app/offer/actions";
import { CATEGORIES, CONDITIONS } from "@/data/forms";
import { uploadPhotos } from "@/lib/uploadPhotos";

const field =
  "w-full rounded-xl border border-ink/20 bg-white px-4 py-2.5 text-base outline-none transition-colors focus:border-ink";
const label = "flex flex-col gap-1.5 text-sm font-medium";

export default function OfferForm({ campaigns, defaultCampaign = "" }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending", message: "" });

    try {
      const files = data.getAll("photos").filter((file) => file.size > 0);
      const paths = await uploadPhotos("offer-photos", files);
      data.delete("photos");
      data.set("photoPaths", JSON.stringify(paths));

      const result = await submitOffer(data);
      if (!result.ok) throw new Error(result.message);

      form.reset();
      setStatus({ state: "done", message: "Thank you. We'll be in touch." });
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <label className={`${label} sm:col-span-2`}>
        Item name
        <input name="item" type="text" required maxLength={200} className={field} />
      </label>

      <label className={label}>
        Category
        <select name="category" required defaultValue="" className={field}>
          <option value="" disabled>
            Select
          </option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className={label}>
        Condition
        <select name="condition" required defaultValue="" className={field}>
          <option value="" disabled>
            Select
          </option>
          {CONDITIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className={`${label} sm:col-span-2`}>
        Campaign
        <select name="campaign" defaultValue={defaultCampaign} className={field}>
          <option value="">Any campaign</option>
          {campaigns.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </label>

      <label className={`${label} sm:col-span-2`}>
        Photos
        <input
          name="photos"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          required
          className={`${field} file:mr-4 file:rounded-lg file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`}
        />
      </label>

      <label className={label}>
        Size
        <input
          name="size"
          type="text"
          placeholder="e.g. 60 x 90 cm"
          maxLength={100}
          className={field}
        />
      </label>

      <label className={label}>
        Location
        <input
          name="location"
          type="text"
          placeholder="Suburb, city"
          required
          maxLength={200}
          className={field}
        />
      </label>

      <label className={`${label} sm:col-span-2`}>
        Cultural notes
        <textarea
          name="notes"
          rows={2}
          placeholder="Any meaning, or conditions on how it should be displayed"
          maxLength={2000}
          className={field}
        />
      </label>

      <label className={label}>
        Your name
        <input name="name" type="text" required maxLength={120} className={field} />
      </label>

      <label className={label}>
        Email or phone
        <input name="contact" type="text" required maxLength={200} className={field} />
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
