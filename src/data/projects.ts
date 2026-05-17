export type ProjectStatus = "live" | "coming-soon" | "github-only";

export type ProjectTag =
  | "chatbot"
  | "multi-agent"
  | "data-analysis"
  | "automation"
  | "education"
  | "productivity";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: ProjectTag[];
  status: ProjectStatus;
  demoUrl?: string;       // link to the live app
  githubUrl?: string;     // link to the GitHub repo
  thumbnail?: string;     // optional image path inside /public
  featured?: boolean;     // shows larger card on the grid
}

// ─── ADD YOUR PROJECTS HERE ───────────────────────────────────────────────────
// To add a new project: copy one object block, fill in the fields, save. Done.
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "jee-neet-rank-booster",
    name: "JEE & NEET Rank Booster",
    tagline: "Know exactly where your preparation needs to improve",
    description:
      "Take a test, upload your rough sheets and answers. The agent goes beyond right or wrong — it reads your actual working, spots the gaps in your understanding, and tells you precisely what to fix before the next attempt.",
    tags: ["chatbot", "education"],
    status: "coming-soon",
    // demoUrl: "https://your-deployed-app.com",
    // githubUrl: "https://github.com/yourusername/jee-neet-rank-booster",
    featured: true,
  },
];
