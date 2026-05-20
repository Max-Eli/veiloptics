"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    if (data.botcheck) {
      // bot — silently no-op
      setStatus("idle");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.url) {
        throw new Error(
          json.error || "Couldn't start checkout. Try again in a minute??",
        );
      }

      // Redirect to Stripe-hosted checkout. Page leaves the site here.
      window.location.href = json.url;
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error!!");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bevel-out p-4 sm:p-6"
      style={{ background: "#c0c0c0", borderColor: "#d96bb5" }}
    >
      <fieldset
        className="bevel-in p-3 sm:p-4"
        style={{ background: "#fff" }}
      >
        <legend
          className="impact px-2 text-xl"
          style={{ background: "#f5d860", color: "#d04848" }}
        >
          ★ ORDER FORM ★
        </legend>

        {/* honeypot — humans don't fill this, bots do */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          style={{
            position: "absolute",
            left: "-9999px",
            width: 1,
            height: 1,
            opacity: 0,
          }}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="YOUR NAME" name="name" required autoComplete="name" />
          <Field
            label="E-MAIL ADDRESS"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Select
            label="WHICH FRAMES??"
            name="model"
            required
            options={[
              "Meta Ray-Ban -- Display",
              "Meta Ray-Ban -- Wayfarer",
              "Meta Ray-Ban -- Skyler",
              "Meta Ray-Ban -- Headliner",
              "Meta Ray-Ban -- Scriber",
              "Meta Ray-Ban -- Blayzer",
              "Meta Oakley -- Vanguard",
              "Meta Oakley -- HSTN",
              "Other / not sure",
            ]}
          />
          <Select
            label="SERVICE TIER"
            name="tier"
            required
            options={[
              "Standard -- $119",
              "Expedited -- $139",
              "KC Local Hand Delivery -- $89",
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
            label="ANYTHING ELSE??"
            name="notes"
            rows={4}
            placeholder="ex: i need it back by friday!! ~ or ~ i'm in the KC metro!!"
          />
        </div>

        <label className="mt-5 flex items-start gap-3 text-xs sm:text-sm">
          <input
            type="checkbox"
            name="acknowledge"
            required
            className="mt-1 h-4 w-4 shrink-0"
          />
          <span
            className="comic"
            style={{ color: "#000" }}
          >
            I get it!! Modding voids the manufacturer warranty AND I'm
            responsible for following the recording laws where I use my
            glasses!!
          </span>
        </label>

        {status === "error" ? (
          <p
            className="bevel-in mt-3 p-2 text-sm font-bold"
            style={{ background: "#d04848", color: "#f5d860" }}
          >
            !! {errorMsg} !!
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bevel-out impact px-6 py-3 text-xl"
            style={{ background: "#7abf6e", color: "#000" }}
          >
            {status === "submitting" ? "Sending…" : "PAY & ORDER!!"}
          </button>
          <button
            type="reset"
            className="bevel-out comic px-4 py-3 text-base"
            style={{ background: "#d04848", color: "#fff" }}
          >
            Reset
          </button>
        </div>

        <p
          className="comic mt-4 text-xs"
          style={{ color: "#000080" }}
        >
          ★ Secure checkout powered by Stripe ★ FREE INSURED SHIPPING both ways ★ Full refund anytime before we begin work ★
        </p>
      </fieldset>
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
      <span
        className="impact mb-1 block text-sm"
        style={{ color: "#000080" }}
      >
        {label}
        {required ? (
          <span style={{ color: "#d04848" }}> *</span>
        ) : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="bevel-in courier block w-full px-2 py-2 text-base sm:text-sm"
        style={{ background: "#fff", color: "#000" }}
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
      <span
        className="impact mb-1 block text-sm"
        style={{ color: "#000080" }}
      >
        {label}
        {required ? (
          <span style={{ color: "#d04848" }}> *</span>
        ) : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="bevel-in courier block w-full px-2 py-2 text-base sm:text-sm"
        style={{ background: "#fff", color: "#000" }}
      >
        <option value="" disabled>
          -- pick one --
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
      <span
        className="impact mb-1 block text-sm"
        style={{ color: "#000080" }}
      >
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="bevel-in courier block w-full resize-y px-2 py-2 text-base sm:text-sm"
        style={{ background: "#fff", color: "#000" }}
      />
    </label>
  );
}
