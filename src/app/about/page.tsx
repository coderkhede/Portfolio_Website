import type { Metadata } from "next";
import Image from "next/image";
import { person } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { Certificates } from "@/components/Certificates";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: `About ${person.name} — technical philosophy, experience, education, and verified certifications.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <FadeIn>
        <p className="text-[11px] uppercase tracking-[0.28em] text-violet-accent">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Models first. Interfaces when the score is honest.
        </h1>
      </FadeIn>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <div className="frame-glow relative mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-line p-2 lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
              <Image
                src={person.photo}
                alt={`${person.name} portrait`}
                fill
                className="object-cover object-[center_15%]"
                sizes="400px"
                priority
              />
            </div>
          </div>
        </FadeIn>
        <div className="space-y-5 text-base leading-relaxed text-mist">
          {person.philosophy.map((paragraph) => (
            <FadeIn key={paragraph}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <section className="py-20">
        <SectionHeader
          eyebrow="Path"
          title="Experience & education"
          description="Dates, titles, and CGPA taken from the one-page resume — Data Analyst Intern, Java SDE Intern, B.Tech CSE (AI & ML) 7.97/10."
        />
        <Timeline />
      </section>

      <Certificates />
    </div>
  );
}
