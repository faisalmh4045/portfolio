import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiGraphql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type Item = {
  name: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
};

const frontend: Item[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "TanStack Query", Icon: SiReactquery, color: "#FF4154" },
];

const backend: Item[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
  { name: "REST APIs", Icon: TbApi, color: "#7DD3FC" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
];

const Column = ({ title, items }: { title: string; items: Item[] }) => (
  <div className="relative">
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono-accent text-xs tracking-[0.3em] text-primary uppercase">
        {title}
      </span>
      <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
    </div>
    <div className="flex flex-wrap gap-2.5">
      {items.map((s) => (
        <div
          key={s.name}
          className="group glass flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
        >
          <s.Icon
            className="h-4 w-4 transition-transform group-hover:scale-110"
            style={{ color: s.color }}
          />
          <span className="text-sm text-foreground">{s.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Skills = () => (
  <section id="skills" className="relative px-6 py-28">
    <div className="container mx-auto max-w-5xl">
      <div className="mb-16 text-center">
        <p className="section-label mb-6">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl">
          My development <span className="text-primary">toolkit</span>.
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <Column title="Frontend" items={frontend} />
        <Column title="Backend & Tools" items={backend} />
      </div>
    </div>
  </section>
);
