import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { person } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm text-frost">{person.name}</p>
          <p className="mt-1 text-xs text-mist">{person.title}</p>
        </div>
        <div className="flex items-center gap-3">
          {person.socialLinks.map((link) => {
            const Icon = iconMap[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="rounded-full border border-line p-2 text-mist transition hover:border-violet-accent/50 hover:text-frost"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-mist">
          © {new Date().getFullYear()} ·{" "}
          <Link href="/contact" className="hover:text-frost">
            Available for roles
          </Link>
        </p>
      </div>
    </footer>
  );
}
