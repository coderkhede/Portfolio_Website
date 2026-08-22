import Link from "next/link";
import { person } from "@/data/portfolio";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center px-4 pt-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-violet-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold">This page is off the map.</h1>
      <p className="mt-3 text-mist">
        Return home or open a project from {person.firstName}&apos;s work.
      </p>
      <Link href="/" className="mt-6 text-sm text-frost underline-offset-4 hover:underline">
        Back to home
      </Link>
    </div>
  );
}
