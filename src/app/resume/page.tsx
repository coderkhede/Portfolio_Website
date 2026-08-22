import type { Metadata } from "next";
import {
  person,
  timeline,
  projects,
  techStack,
  certifications,
} from "@/data/portfolio";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume — ${person.name}, Machine Learning Engineer`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 print:max-w-none print:px-0 print:pt-8">
      <div className="mb-8 flex items-start justify-between gap-4 print:hidden">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-accent">
            Resume
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold">{person.name}</h1>
          <p className="text-mist">{person.title}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={person.resumeUrl}
            download
            className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-frost"
          >
            PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-ink p-8 print:border-0 print:bg-white print:p-0 print:text-black">
        <p className="text-sm leading-relaxed text-mist print:text-neutral-700">
          {person.bio}
        </p>
        <p className="mt-4 text-sm text-frost print:text-black">
          {person.social.email} · {person.phone} · {person.location}
          <br />
          {person.social.github} · {person.social.linkedin}
        </p>

        <h2 className="mt-10 font-display text-xl font-semibold">Technical skills</h2>
        <div className="mt-4 space-y-3">
          {techStack.map((category) => (
            <p key={category.name} className="text-sm text-mist print:text-neutral-700">
              <span className="font-medium text-frost print:text-black">
                {category.name}:{" "}
              </span>
              {category.items.join(", ")}
            </p>
          ))}
        </div>

        <h2 className="mt-10 font-display text-xl font-semibold">Experience & education</h2>
        <div className="mt-4 space-y-6">
          {timeline.map((item) => (
            <div key={`${item.role}-${item.organization}`}>
              <p className="text-xs uppercase tracking-widest text-mist print:text-neutral-500">
                {item.dates}
              </p>
              <p className="font-medium">
                {item.role} — {item.organization}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mist print:text-neutral-700">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-xl font-semibold">
          Featured machine learning & AI projects
        </h2>
        <ul className="mt-4 space-y-3 text-sm">
          {projects.map((project) => (
            <li key={project.slug}>
              <span className="font-medium text-frost print:text-black">
                {project.title}.
              </span>{" "}
              <span className="text-mist print:text-neutral-700">{project.tagline}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-xl font-semibold">
          Certifications & Credentials
        </h2>
        <div className="mt-4 space-y-4 text-sm">
          {certifications.map((cert) => (
            <div key={cert.id} className="border-l-2 border-violet-accent/40 pl-3">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <span className="font-medium text-frost print:text-black">
                  {cert.title}
                </span>
                <span className="text-xs text-mist print:text-neutral-500">
                  {cert.issuer} · {cert.issueDate}
                </span>
              </div>
              <p className="mt-1 text-xs text-mist print:text-neutral-700">
                {cert.description}
              </p>
              {cert.credentialId && (
                <p className="mt-0.5 font-mono text-[11px] text-zinc-400 print:text-neutral-600">
                  Credential ID: {cert.credentialId}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
