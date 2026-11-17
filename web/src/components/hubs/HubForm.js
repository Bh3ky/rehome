"use client";

const field =
  "w-full rounded-xl border border-ink/20 bg-white px-4 py-2.5 text-base outline-none transition-colors focus:border-ink";
const label = "flex flex-col gap-1.5 text-sm font-medium";

const HUB_TYPES = [
  "Mental health",
  "Learning",
  "Tech skills",
  "Recovery",
  "Arts and crafts",
  "Community",
  "Other",
];

export default function HubForm() {
  // Submission is wired to Supabase next; until then the form only validates.
  const onSubmit = (event) => event.preventDefault();

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className={`${label} sm:col-span-2`}>
        Hub name
        <input name="hub" type="text" required className={field} />
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
        <input name="city" type="text" required className={field} />
      </label>

      <label className={label}>
        Contact person
        <input name="person" type="text" required className={field} />
      </label>

      <label className={label}>
        Email or phone
        <input name="contact" type="text" required className={field} />
      </label>

      <label className={`${label} sm:col-span-2`}>
        About the space
        <textarea
          name="about"
          rows={2}
          placeholder="What the space is like and who uses it"
          required
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
          className={field}
        />
      </label>

      <label className={`${label} sm:col-span-2`}>
        Photos
        <input
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className={`${field} file:mr-4 file:rounded-lg file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`}
        />
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
