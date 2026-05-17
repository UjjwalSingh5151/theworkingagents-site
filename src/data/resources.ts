export type ResourceType = "video" | "article" | "tool" | "newsletter";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  source: string;        // e.g. "YouTube", "Substack", "GitHub"
  author?: string;
}

// ─── ADD CURATED RESOURCES HERE ───────────────────────────────────────────────
export const resources: Resource[] = [
  {
    id: "what-are-ai-agents",
    title: "What Are AI Agents?",
    description:
      "A clear, no-fluff explainer on what agents actually are, how they differ from plain LLMs, and why they matter.",
    type: "video",
    url: "https://www.youtube.com/watch?v=F8NKVhkZZWI",
    source: "YouTube",
    author: "Andrej Karpathy",
  },
  {
    id: "agents-survey",
    title: "The Rise and Potential of LLM-Based Agents",
    description:
      "Comprehensive survey of agent architectures, memory, planning, and tool use — great for getting the full picture.",
    type: "article",
    url: "https://arxiv.org/abs/2309.07864",
    source: "arXiv",
  },
  {
    id: "langchain-docs",
    title: "LangChain: Build Your First Agent",
    description:
      "Hands-on framework for chaining LLM calls, tools, and memory into working agents.",
    type: "tool",
    url: "https://python.langchain.com/docs/how_to/agent_executor/",
    source: "LangChain Docs",
  },
  {
    id: "simon-willison-blog",
    title: "Simon Willison's Weblog",
    description:
      "The most consistently insightful writing on practical LLM and agent development — updated almost daily.",
    type: "newsletter",
    url: "https://simonwillison.net",
    source: "Blog",
    author: "Simon Willison",
  },
];
