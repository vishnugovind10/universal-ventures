"use client";

import { FormEvent, useState } from "react";

const FORM_ID = "mwvydgon";
const isConfigured = FORM_ID.length > 0;
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

type SubmitState = "idle" | "submitting" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("_gotcha") ?? "").trim();

    if (honeypot) {
      form.reset();
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setSubmitState("error");
        return;
      }

      window.location.assign("success/");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-7 border-t border-line pt-8"
    >
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-2">
        <label htmlFor="name" className="font-mono text-xs text-subtle">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="min-h-12 border border-line bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-subtle focus:border-line-strong"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="font-mono text-xs text-subtle">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-12 border border-line bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-subtle focus:border-line-strong"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="font-mono text-xs text-subtle">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          className="min-h-48 resize-y border border-line bg-transparent px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors placeholder:text-subtle focus:border-line-strong"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <button
          type="submit"
          disabled={!isConfigured || submitState === "submitting"}
          className="w-fit border border-line px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-line-strong disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line"
        >
          {submitState === "submitting" ? "Sending" : "Send engagement inquiry"}
        </button>
        {submitState === "error" ? (
          <p className="text-sm leading-6 text-muted" aria-live="polite">
            The message could not be sent. Check the Formspree configuration and try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
