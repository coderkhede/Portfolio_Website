"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-frost px-4 py-2 text-sm font-medium text-obsidian"
    >
      <Printer size={15} />
      Download / Print
    </button>
  );
}
