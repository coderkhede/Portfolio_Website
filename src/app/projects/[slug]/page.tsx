import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe } from "lucide-react";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  person,
} from "@/data/portfolio";
import { TechBadge } from "@/components/TechBadge";
import { FadeIn } from "@/components/FadeIn";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.coverImage],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-mist transition hover:text-frost"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>
        <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-violet-accent">
          {project.role} · {project.timeline}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-mist">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-frost hover:border-violet-accent/50"
            >
              <Github size={15} />
              Repository
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-mist">
              Major project · local codebase
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-frost hover:border-emerald-accent/50"
            >
              <Globe size={15} />
              Live
            </a>
          ) : null}
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12">
        <div className="relative overflow-hidden rounded-3xl border border-line shadow-glow">
          <div className="relative aspect-[16/8]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="64rem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
          </div>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-line bg-ink p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-mist">
              {metric.label}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-frost">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-14 rounded-2xl border border-violet-accent/25 bg-violet-accent/10 p-6 sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
          The Problem
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold">
          Why this existed
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-200">
          {project.problemStatement}
        </p>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-mist">
            Engineering & Execution
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            What I built
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            {project.technicalApproach}
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-ink p-5">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-mist">
            Architecture notes
          </p>
          <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-emerald-200/90">
            {project.architectureNotes.map((line) => `→ ${line}`).join("\n")}
          </pre>
        </div>
      </section>

      <section className="mt-10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
          Results & Impact
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold">
          What changed
        </h2>
        <ul className="mt-5 space-y-3">
          {project.results.map((result) => (
            <li
              key={result}
              className="rounded-xl border border-line bg-ink px-4 py-3 text-sm leading-relaxed text-mist"
            >
              {result}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-sm text-mist">
        Built by {person.name}.{" "}
        {project.githubUrl ? (
          <>
            Source of truth:{" "}
            <a
              href={project.githubUrl}
              className="text-frost underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {project.githubUrl.replace("https://", "")}
            </a>
          </>
        ) : (
          <>AISE is the B.Tech major project (AI Skill Estimator) — Streamlit product, not a public clone URL yet.</>
        )}
      </p>
    </article>
  );
}
