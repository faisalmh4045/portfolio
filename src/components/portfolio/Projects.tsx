import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export const Projects = () => (
  <section id="projects" className="px-6 py-28">
    <div className="mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <p className="section-label mb-6">Projects</p>
        <h2 className="font-display text-4xl md:text-5xl">
          Selected <em className="text-primary not-italic">work</em>.
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((p) => (
          <article
            key={p.n}
            className="group relative grid items-center gap-10 overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-8 transition-colors hover:border-primary/30 md:p-12 lg:grid-cols-2"
          >
            <div className="relative">
              <div className="mb-3 font-mono-accent text-xs tracking-widest text-primary">
                PROJECT / {p.n}
              </div>
              <h3 className="mb-4 font-display text-3xl leading-tight md:text-4xl">
                {p.name}
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {p.cardDesc}
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono-accent text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                View Details <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <Image
                src={p.img}
                alt={p.name}
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
