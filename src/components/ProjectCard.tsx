import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { TechBadge } from "@/components/TechBadge";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-ink transition hover:border-violet-accent/40">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <span className="absolute left-4 top-4 font-display text-xs text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="space-y-3 p-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mist">
            {project.role}
          </p>
          <h3 className="font-display text-xl font-semibold text-frost group-hover:text-white">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-mist">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between border-t border-line px-5 py-3 text-xs text-mist">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-frost transition hover:text-violet-accent"
        >
          Case study <ArrowUpRight size={14} />
        </Link>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-frost"
          >
            <Github size={14} />
            GitHub
          </a>
        ) : (
          <span className="text-[11px] uppercase tracking-widest">Major project</span>
        )}
      </div>
    </article>
  );
}
