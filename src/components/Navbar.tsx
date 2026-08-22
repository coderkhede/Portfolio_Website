"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { person } from "@/data/portfolio";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 shadow-glow backdrop-blur-md">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-frost"
        >
          {person.firstName}
          <span className="text-violet-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-white/10 text-frost"
                    : "text-mist hover:text-frost"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <AvailabilityBadge compact />
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-frost md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-mist hover:bg-white/5 hover:text-frost"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
