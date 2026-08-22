"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { person } from "@/data/portfolio";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(person.social.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-frost transition hover:border-violet-accent/50"
    >
      {copied ? <Check size={15} className="text-emerald-accent" /> : <Copy size={15} />}
      {copied ? "Copied" : person.social.email}
    </button>
  );
}
