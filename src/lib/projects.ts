export type Project = {
  slug: string;
  n: string;
  name: string;
  cardDesc: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futurePlans: string[];
  img: string;
};

export const projects: Project[] = [
  {
    slug: "shoe-shop-admin-dashboard",
    n: "01",
    name: "Shoe Shop Admin Dashboard",
    cardDesc:
      "A full-stack e-commerce admin dashboard with role-based access control and an AI-powered chatbot for querying business insights.",
    description:
      "Built to manage products, orders, and customers with a focus on secure, scalable architecture. Features role-based access control (RBAC), a structured backend with a clear data access layer, and an AI chatbot that lets admins query sales and order data using natural language.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Vercel AI SDK",
      "OpenRouter",
      "Supabase",
    ],
    liveUrl: "https://shoe-shop-admin-dashboard.vercel.app/login",
    githubUrl: "https://github.com/faisalmh4045/shoe-shop-admin-dashboard",
    challenges: [
      "Implementing RBAC cleanly without bloating middleware",
      "Designing the AI chatbot to interpret natural language into meaningful database queries",
      "Keeping server actions organized as the codebase scaled",
    ],
    futurePlans: [
      "Add filters, search and sorting",
      "Export reports to CSV/PDF",
      "Add tax and shipment features",
    ],
    img: "/project-1.png",
  },
  {
    slug: "shoe-shop-ecommerce",
    n: "02",
    name: "Shoe Shop — E-commerce Platform",
    cardDesc:
      "A full-stack e-commerce platform with product filtering, cart management, Stripe payment integration, and real-time variant selection.",
    description:
      "A complete shopping experience — from browsing and filtering products to checkout and order tracking. Features URL-driven state for filters and pagination, a dynamic product gallery, and real-time variant filtering that prevents invalid selections.",
    techStack: [
      "React.js",
      "TanStack Query",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "Stripe.js",
      "Supabase",
    ],
    liveUrl: "https://shoe-shop-frontstore.vercel.app/",
    githubUrl: "https://github.com/faisalmh4045/shoe-shop-ecommerce-frontstore",
    challenges: [
      "Implementing URL-driven state so filters, sorting, and pagination survive page refresh",
      "Building real-time variant filtering that blocks invalid size/color combinations",
      "Integrating Stripe with proper webhook handling for order status",
    ],
    futurePlans: [
      "Add product reviews and ratings",
      "Wishlist functionality",
      "Email notifications for order updates",
    ],
    img: "/project-2.png",
  },
  {
    slug: "kanban-task-manager",
    n: "03",
    name: "Kanban Task Manager",
    cardDesc:
      "A full-stack Kanban board with drag-and-drop task management, user authentication, and a performance-optimized reordering system.",
    description:
      "A Kanban-style task manager that lets users create boards, manage tasks across columns, and reorder them via drag-and-drop. Uses gap-based indexing to avoid expensive bulk database updates during reordering, achieving near O(1) performance per move.",
    techStack: [
      "React.js",
      "React Beautiful DnD",
      "Redux Toolkit",
      "Bootstrap",
      "Appwrite",
      "Vercel",
    ],
    liveUrl: "https://kanban-task-manager-delta.vercel.app/board",
    githubUrl: "https://github.com/faisalmh4045/kanban-task-manager",
    challenges: [
      "Designing the indexing strategy — avoiding full-list reindex on every drag",
      "Keeping Redux state in sync with Appwrite's database in real time",
      "Handling edge cases in drag-and-drop (dropping in same position, cross-column moves)",
    ],
    futurePlans: [
      "Add team collaboration with real-time updates",
      "Task deadline reminder email",
      "Board sharing with permission controls",
    ],
    img: "/project-3.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
