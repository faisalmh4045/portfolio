import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  FileText,
  Zap,
  Rocket,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { getProjectBySlug, projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Faisal Mahmud`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-28 pb-24">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <header className="mb-14">
          <p className="section-label mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            Project / {project.n}
          </p>
          <h1 className="text-glow mb-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.cardDesc}
          </p>

          {/* CTA links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border border-border border-border/80 bg-card/60 text-foreground hover:border-primary/50 hover:text-primary"
            >
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <FiGithub className="h-4 w-4" /> GitHub Repo
              </a>
            </Button>
          </div>
        </header>

        <div className="mb-14 h-px bg-linear-to-r from-transparent via-border to-transparent" />

        <div className="space-y-6">
          {/* Tech Stack */}
          <Section icon={<Layers className="h-4 w-4" />} label="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-card px-3 py-1.5 font-mono-accent text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Description */}
          <Section icon={<FileText className="h-4 w-4" />} label="Description">
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Section>

          {/* Challenges */}
          <Section icon={<Zap className="h-4 w-4" />} label="Challenges">
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          {/* Future Plans */}
          <Section icon={<Rocket className="h-4 w-4" />} label="Future Plans">
            <ul className="space-y-3">
              {project.futurePlans.map((f, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {f}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <ProjectNav current={slug} />
      </div>
    </main>
  );
}

/* Section card */
function Section({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 p-6 md:p-8">
      <div className="mb-5 flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h2 className="section-label">{label}</h2>
      </div>
      {children}
    </div>
  );
}

/* Prev / Next project navigation */
function ProjectNav({ current }: { current: string }) {
  const idx = projects.findIndex((p) => p.slug === current);
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="mt-16 flex justify-between gap-4 border-t border-border pt-8"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex max-w-[45%] flex-col gap-1"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="line-clamp-1 text-sm text-foreground transition-colors group-hover:text-primary">
            {prev.name}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="group ml-auto flex max-w-[45%] flex-col items-end gap-1"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Next
            <ArrowLeft className="h-3 w-3 rotate-180 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="line-clamp-1 text-sm text-foreground transition-colors group-hover:text-primary">
            {next.name}
          </span>
        </Link>
      )}
    </nav>
  );
}
