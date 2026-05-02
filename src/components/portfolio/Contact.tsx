import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "faisal.mahmud.4045@gmail.com",
    href: "mailto:faisal.mahmud.4045@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1971600394",
    href: "tel:+8801971600394",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/faisal-mahmud-cse",
    href: "https://www.linkedin.com/in/faisal-mahmud-cse/",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/faisalmh4045",
    href: "https://github.com/faisalmh4045",
  },
];

export const Contact = () => (
  <section id="contact" className="px-6 py-28">
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-label mb-6">Contact</p>
      <h2 className="mb-5 font-display text-5xl leading-[1.05] md:text-7xl">
        Let&apos;s Work <em className="text-primary not-italic">Together</em>.
      </h2>
      <p className="mx-auto mb-14 max-w-xl text-lg text-muted-foreground">
        I&apos;m open to full-time opportunities. My inbox is always open.
      </p>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target="_blank"
              className="group glass flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all hover:border-primary/40"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/60 text-primary">
                  <it.icon className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block font-mono-accent text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                    {it.label}
                  </span>
                  <span className="block text-foreground">{it.value}</span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
