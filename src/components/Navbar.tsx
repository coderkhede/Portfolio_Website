"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { person } from "@/data/portfolio";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-line bg-ink/80 px-4 py-3 shadow-glow backdrop-blur-md transition-colors duration-200">
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
                    ? "bg-violet-accent/15 text-frost font-medium"
                    : "text-mist hover:bg-black/5 hover:text-frost dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <AvailabilityBadge compact />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-frost"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur-md md:hidden shadow-xl">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-mist hover:bg-black/5 hover:text-frost dark:hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-line/60 pt-3 px-1">
              <AvailabilityBadge compact />
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
