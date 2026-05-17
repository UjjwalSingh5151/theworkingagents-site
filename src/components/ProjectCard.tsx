"use client";

import { motion } from "framer-motion";
import { Project, ProjectTag } from "@/data/projects";

const tagColors: Record<ProjectTag, string> = {
  chatbot: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "multi-agent": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "data-analysis": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  automation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  education: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  productivity: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const statusBadge: Record<Project["status"], { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  },
  "github-only": {
    label: "Open Source",
    className: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
  },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const badge = statusBadge[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-violet-500/5" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-white text-lg leading-snug">{project.name}</h3>
          <p className="text-cyan-400 text-sm mt-0.5">{project.tagline}</p>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${tagColors[tag]}`}
          >
            {tag.replace("-", " ")}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 mt-auto">
        {project.status === "live" && project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Launch Demo →
          </a>
        ) : project.status === "coming-soon" ? (
          <span className="flex-1 text-center rounded-xl border border-white/10 py-2.5 text-sm text-gray-500 cursor-default">
            Demo Coming Soon
          </span>
        ) : null}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
