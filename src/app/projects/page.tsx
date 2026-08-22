import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "ML and AI case studies from Prakhar Khedekar — AISE skill estimator, FWI predictor, data science lab, and supporting Java work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <FadeIn>
        <p className="text-[11px] uppercase tracking-[0.28em] text-violet-accent">
          Archive
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Models, pipelines, then product.
        </h1>
        <p className="mt-4 max-w-2xl text-mist">
          Featured work is machine learning and applied AI. The hotel system is supporting SDE evidence from the Java internship. Public code lives under{" "}
          <a
            href="https://github.com/coderkhede"
            className="text-frost underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/coderkhede
          </a>
          .
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={index * 0.08}
            className={index === 0 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
