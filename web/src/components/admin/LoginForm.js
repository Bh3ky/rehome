"use client";

import { useState } from "react";
import { sendMagicLink } from "@/app/admin/login/actions";

export default function LoginForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending", message: "" });

    try {
      const result = await sendMagicLink(new FormData(form));
      setStatus({ state: result.ok ? "sent" : "error", message: result.message });
      if (result.ok) form.reset();
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <label className="block text-sm font-medium text-gray-900" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        maxLength={254}
        className="mt-1.5 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm shadow-xs outline-none focus:border-ink focus:ring-1 focus:ring-ink"
      />

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-4 h-10 w-full rounded-md bg-ink text-sm font-medium text-white transition-colors hover:bg-ink/90 disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send sign-in link"}
      </button>

      {status.message && (
        <p
          role={status.state === "error" ? "alert" : "status"}
          className={`mt-4 text-sm ${
            status.state === "error" ? "text-red-700" : "text-gray-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
