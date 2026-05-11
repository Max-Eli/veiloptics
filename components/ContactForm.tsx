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
        throw new Error(error || "Something went wrong. Try again.");
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
      <div className="pixel-frame p-6 text-center">
        <div className="font-pixel text-lg text-[#00a800]">
          ★ STAGE CLEAR ★
        </div>
        <p className="font-terminal mt-4 text-lg leading-snug text-black">
          We got your request. Check your inbox — you&apos;ll hear from us within
          one business day with a prepaid shipping label and packing
          instructions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="pixel-frame p-5 sm:p-6">
      <div className="font-pixel mb-4 text-center text-xs text-black">
        ▶ ENTER YOUR DATA
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="NAME" name="name" required autoComplete="name" />
        <Field
          label="EMAIL"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Select
          label="FRAME MODEL"
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
          label="POWER-UP"
          name="tier"
          required
          options={[
            "Standard — $149",
            "Expedited — $219",
            "KC Local Hand Delivery — $129",
          ]}
        />
      </div>

      <div className="mt-4">
        <Field
          label="ZIP / POSTAL CODE"
          name="zip"
          required
          autoComplete="postal-code"
        />
      </div>

      <div className="mt-4">
        <Textarea
          label="NOTES"
          name="notes"
          rows={4}
          placeholder="anything we should know? deadlines, KC pickup, etc."
        />
      </div>

      <label className="font-terminal mt-5 flex items-start gap-3 text-base leading-snug text-black">
        <input
          type="checkbox"
          name="acknowledge"
          required
          className="mt-1 h-5 w-5 shrink-0"
        />
        <span>
          I understand modding the frames voids the manufacturer warranty, and
          I&apos;m responsible for complying with recording laws where I use
          the device.
        </span>
      </label>

      {status === "error" ? (
        <p className="font-pixel mt-4 bg-[#e40058] p-3 text-[10px] text-white">
          {errorMsg}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="pixel-btn pixel-btn-red text-xs disabled:opacity-60"
        >
          {status === "submitting" ? "SENDING…" : "START GAME"}
        </button>
        <button type="reset" className="pixel-btn text-xs">
          RESET
        </button>
      </div>

      <p className="font-terminal mt-5 text-base text-[#bc4a00]">
        No payment is taken now — we invoice once your frames have been
        received and inspected.
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
      <span className="font-pixel mb-2 block text-[9px] text-black sm:text-[10px]">
        {label}
        {required ? <span className="text-[#e40058]"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="font-terminal block w-full border-4 border-black bg-white px-3 py-2 text-lg text-black outline-none focus:bg-[#fcd000]"
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
      <span className="font-pixel mb-2 block text-[9px] text-black sm:text-[10px]">
        {label}
        {required ? <span className="text-[#e40058]"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="font-terminal block w-full appearance-none border-4 border-black bg-white px-3 py-2 text-lg text-black outline-none focus:bg-[#fcd000]"
      >
        <option value="" disabled>
          — pick one —
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
      <span className="font-pixel mb-2 block text-[9px] text-black sm:text-[10px]">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="font-terminal block w-full resize-y border-4 border-black bg-white px-3 py-2 text-lg text-black outline-none focus:bg-[#fcd000]"
      />
    </label>
  );
}
