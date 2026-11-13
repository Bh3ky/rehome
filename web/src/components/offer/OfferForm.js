"use client";

const field =
  "w-full rounded-xl border border-ink/20 bg-white px-4 py-2.5 text-base outline-none transition-colors focus:border-ink";
const label = "flex flex-col gap-1.5 text-sm font-medium";

const CATEGORIES = [
  "Art",
  "Craft",
  "Furniture",
  "Textile",
  "Cultural piece",
  "Creative materials",
  "Other",
];

const CONDITIONS = ["Excellent", "Good", "Fair"];

export default function OfferForm({ campaigns, defaultCampaign = "" }) {
  // Submission is wired to Supabase next; until then the form only validates.
  const onSubmit = (event) => event.preventDefault();

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <label className={`${label} sm:col-span-2`}>
        Item name
        <input name="item" type="text" required className={field} />
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
          accept="image/*"
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
          className={field}
        />
      </label>

      <label className={`${label} sm:col-span-2`}>
        Cultural notes
        <textarea
          name="notes"
          rows={2}
          placeholder="Any meaning, or conditions on how it should be displayed"
          className={field}
        />
      </label>

      <label className={label}>
        Your name
        <input name="name" type="text" required className={field} />
      </label>

      <label className={label}>
        Email or phone
        <input name="contact" type="text" required className={field} />
      </label>

      <button
        type="submit"
        className="rounded-xl bg-ink px-6 py-3 text-base font-medium text-white transition-colors hover:bg-ink/90 sm:col-span-2"
      >
        Submit
      </button>
    </form>
  );
}
