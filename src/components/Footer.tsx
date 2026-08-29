import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { person } from "@/data/portfolio";

function KaggleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.825 23.859c-.022.08-.088.141-.188.141h-3.184c-.13 0-.239-.06-.304-.158l-5.01-6.84-1.928 1.838v4.86c0 .163-.13.299-.293.299H5.068c-.163 0-.293-.136-.293-.299V.299C4.775.136 4.905 0 5.068 0h2.849c.163 0 .293.136.293.299v14.47l6.59-6.52c.076-.076.174-.119.282-.119h3.358c.109 0 .174.065.174.152 0 .044-.022.087-.044.13l-7.393 7.07 7.828 8.196c.033.032.044.076.044.12z" />
    </svg>
  );
}

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Kaggle: KaggleIcon,
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
