import { SiLeetcode } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => (
  <footer className="border-t border-border/60 px-6 py-14">
    <div className="mx-auto flex flex-col items-center gap-5">
      <div className="flex items-center gap-3">
        {[
          {
            icon: FiGithub,
            label: "GitHub",
            href: "https://github.com/faisalmh4045",
          },
          {
            icon: FiLinkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/faisal-mahmud-cse/",
          },
          {
            icon: SiLeetcode,
            label: "LeetCode",
            href: "https://leetcode.com/u/faisalmh4045/",
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noreferrer"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <p className="font-mono-accent text-xs tracking-wide text-muted-foreground">
        Designed &amp; Built by Faisal Mahmud · © 2026
      </p>
    </div>
  </footer>
);
