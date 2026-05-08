"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: null }));
        throw new Error(error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-champagne-500/30 bg-champagne-500/[0.06] p-10 text-center">
        <div className="font-display text-2xl text-bone-50">
          Request received.
        </div>
        <p className="mx-auto mt-3 max-w-md text-sm text-bone-300">
          We've sent a confirmation to your inbox. You'll hear from us within
          one business day with your prepaid shipping label and packing
          instructions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-2xl border border-bone-100/[0.08] bg-ink-900 p-7 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Frame model"
          name="model"
          required
          options={[
            "Ray-Ban Meta — Wayfarer",
            "Ray-Ban Meta — Headliner",
            "Ray-Ban Meta — Skyler",
            "Ray-Ban Stories (original)",
            "Other / not sure",
          ]}
        />
        <Select
          label="Service tier"
          name="tier"
          required
          options={["Standard — $149", "Expedited — $219"]}
        />
      </div>

      <Field
        label="Shipping ZIP / postal code"
        name="zip"
        required
        autoComplete="postal-code"
      />

      <Textarea
        label="Anything else we should know?"
        name="notes"
        rows={4}
        placeholder="e.g. preferred return date, prescription lenses, special handling…"
      />

      <label className="mt-2 flex items-start gap-3 text-xs text-bone-400">
        <input
          type="checkbox"
          name="acknowledge"
          required
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-champagne-500"
        />
        <span>
          I understand modifying my frames voids the manufacturer warranty, and
          that I am responsible for complying with the recording laws in any
          jurisdiction in which I use the device.
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-300">{errorMsg}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-champagne-500 px-6 py-3 text-sm font-medium text-ink-950 transition hover:bg-champagne-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit request"}
      </button>

      <p className="text-xs text-bone-400">
        We reply within one business day. No payment is taken at this stage —
        we invoice once your frames have been received and inspected.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-bone-400">
        {label}
        {required ? <span className="text-champagne-500"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="block w-full rounded-lg border border-bone-100/10 bg-ink-850 px-4 py-3 text-base text-bone-50 placeholder-bone-400 outline-none transition focus:border-champagne-500/50 focus:ring-2 focus:ring-champagne-500/20 sm:text-sm"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-bone-400">
        {label}
        {required ? <span className="text-champagne-500"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="select-chevron block w-full appearance-none rounded-lg border border-bone-100/10 bg-ink-850 px-4 py-3 pr-10 text-base text-bone-50 outline-none transition focus:border-champagne-500/50 focus:ring-2 focus:ring-champagne-500/20 sm:text-sm"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-bone-400">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="block w-full resize-y rounded-lg border border-bone-100/10 bg-ink-850 px-4 py-3 text-base text-bone-50 placeholder-bone-400 outline-none transition focus:border-champagne-500/50 focus:ring-2 focus:ring-champagne-500/20 sm:text-sm"
      />
    </label>
  );
}
