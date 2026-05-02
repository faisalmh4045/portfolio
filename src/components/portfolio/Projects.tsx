import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    n: "01",
    name: "Shoe Shop Admin Dashboard",
    desc: "A full-stack e-commerce admin dashboard with role-based access control and an AI-powered chatbot for querying business insights.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Vercel AI SDK",
      "OpenRouter",
      "Supabase",
    ],
    img: "/project-1.png",
  },
  {
    n: "02",
    name: "Shoe Shop — E-commerce Platform",
    desc: "A full-stack e-commerce platform with product filtering, cart management, Stripe payment integration, and real-time variant selection.",
    stack: [
      "React.js",
      "TanStack Query",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "Stripe.js",
      "Supabase",
    ],
    img: "/project-2.png",
  },
  {
    n: "03",
    name: "Kanban Task Manager",
    desc: "A full-stack Kanban board with drag-and-drop task management, user authentication, and a performance-optimized reordering system.",
    stack: [
      "React.js",
      "React Beautiful DnD",
      "Redux Toolkit",
      "Bootstrap",
      "Appwrite",
      "Vercel",
    ],
    img: "/project-3.png",
  },
];

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
            className="glass group relative grid items-center gap-10 overflow-hidden rounded-3xl p-8 transition-colors hover:border-primary/30 md:p-12 lg:grid-cols-2"
          >
            <div className="relative">
              <div className="mb-3 font-mono-accent text-xs tracking-widest text-primary">
                PROJECT / {p.n}
              </div>
              <h3 className="mb-4 font-display text-3xl leading-tight md:text-4xl">
                {p.name}
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono-accent text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-3">
                View Details <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-surface shadow-(--shadow-soft)">
              <Image
                src={p.img}
                alt={p.name}
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
