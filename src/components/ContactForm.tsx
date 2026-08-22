"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { person } from "@/data/portfolio";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!emailPattern.test(email.trim())) next.email = "Enter a valid email.";
    if (message.trim().length < 20)
      next.message = "A little more context helps — at least 20 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:${person.social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-accent/30 bg-emerald-accent/10 p-6 text-sm text-emerald-100">
        Your mail client should open with the message drafted. If it does not, write
        directly to {person.social.email}.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-mist">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-frost outline-none ring-violet-accent/40 placeholder:text-zinc-600 focus:ring-2"
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-mist">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-frost outline-none ring-violet-accent/40 placeholder:text-zinc-600 focus:ring-2"
          placeholder="you@company.com"
        />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-mist">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full resize-y rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-frost outline-none ring-violet-accent/40 placeholder:text-zinc-600 focus:ring-2"
          placeholder="What should we build, hire, or explore?"
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-frost px-5 py-2.5 text-sm font-medium text-obsidian transition hover:bg-white"
      >
        Send message
        <Send size={15} />
      </button>
    </form>
  );
}
