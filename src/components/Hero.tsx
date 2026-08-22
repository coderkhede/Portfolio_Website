import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, FileText, Mail } from "lucide-react";
import { person } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-40">
      <FadeIn>
        <AvailabilityBadge />
        <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-mist">
          {person.location} · coderkhede
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-frost text-balance sm:text-5xl lg:text-6xl">
          {person.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
          {person.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-frost px-5 py-2.5 text-sm font-medium text-obsidian transition hover:bg-white"
          >
            Explore Work
            <ArrowDownRight size={16} />
          </a>
          <a
            href={person.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink px-5 py-2.5 text-sm text-frost transition hover:border-violet-accent/60"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-mist transition hover:text-frost"
          >
            <Mail size={16} />
            Get in Touch
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.12} className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-8 rounded-full bg-violet-accent/25 blur-3xl" />
        <div className="absolute -right-6 top-10 h-32 w-32 rounded-full bg-emerald-accent/20 blur-2xl" />
        <div className="frame-glow relative rotate-2 overflow-hidden rounded-[1.75rem] border border-line bg-ink p-2 shadow-glow">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
            <Image
              src={person.photo}
              alt={`${person.name} portrait`}
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="(min-width: 1024px) 380px, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-violet-accent/10" />
          </div>
        </div>
        <p className="relative mt-4 text-center text-xs tracking-[0.22em] text-mist uppercase">
          {person.name}
        </p>
      </FadeIn>
    </section>
  );
}
