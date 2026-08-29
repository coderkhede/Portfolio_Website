"use client";

import Image from "next/image";
import { useState } from "react";
import { Award, CheckCircle2, ExternalLink, Maximize2, X } from "lucide-react";
import { certifications, Certification } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

export function Certificates({
  showSectionHeader = true,
}: {
  showSectionHeader?: boolean;
}) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <section className="py-12">
        {showSectionHeader && (
          <SectionHeader
            eyebrow="Credentials"
            title="Certifications & Continuous Learning"
            description="Verified coursework and intensive bootcamps spanning machine learning, deep learning, NLP, end-to-end deployment, and core Python algorithms."
          />
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink transition duration-300 hover:border-violet-accent/50 hover:shadow-glow">
                {/* Certificate Preview Image */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-line bg-obsidian"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 500px, 95vw"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/90 px-4 py-2 text-xs font-medium text-frost shadow-lg backdrop-blur-md">
                      <Maximize2 size={14} className="text-violet-accent" />
                      Click to View Full Certificate
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Issuer & Date Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-accent/30 bg-violet-accent/10 px-3 py-1 text-xs font-medium text-violet-300">
                      <Award size={13} className="text-violet-accent" />
                      {cert.issuer}
                    </span>
                    <span className="text-xs tracking-wider text-mist">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-frost group-hover:text-white">
                    {cert.title}
                  </h3>

                  {/* Instructor / Authority */}
                  {cert.instructor && (
                    <p className="mt-1.5 text-xs text-mist">
                      Instructor / Authority:{" "}
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">{cert.instructor}</span>
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {cert.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-black/[0.02] dark:bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 size={12} className="text-emerald-accent" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-5 border-t border-line/60 pt-4">
                    <p className="mb-2 text-[11px] uppercase tracking-wider text-mist">
                      Skills & Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-line bg-black/[0.03] dark:bg-obsidian px-2 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line/60 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-black/[0.03] dark:bg-white/[0.04] px-4 py-2 text-xs font-medium text-frost transition hover:border-violet-accent/60 hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
                    >
                      <Maximize2 size={13} className="text-violet-accent" />
                      View Certificate
                    </button>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-violet-accent/30 bg-violet-accent/15 px-4 py-2 text-xs font-medium text-violet-200 transition hover:bg-violet-accent/25 hover:text-white"
                      >
                        <ExternalLink size={13} />
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div className="absolute right-5 top-5 flex items-center gap-3 z-10">
            {selectedCert.credentialUrl && (
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/80 px-4 py-2 text-xs font-medium text-frost backdrop-blur-md transition hover:bg-white/20"
              >
                <ExternalLink size={14} />
                Verify
              </a>
            )}
            <button
              type="button"
              className="rounded-full border border-white/20 bg-ink/80 p-2 text-white backdrop-blur-md transition hover:bg-white/20"
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-ink p-2 sm:p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-obsidian">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 95vw"
                priority
              />
            </div>
            <div className="mt-3 flex w-full flex-wrap items-center justify-between gap-2 px-2 text-xs text-mist">
              <div>
                <span className="font-semibold text-frost">
                  {selectedCert.title}
                </span>{" "}
                · {selectedCert.issuer} ({selectedCert.issueDate})
              </div>
              {selectedCert.credentialId && (
                <div className="font-mono text-[11px] text-zinc-400">
                  ID: {selectedCert.credentialId}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

