"use client";

import { motion } from "framer-motion";
import { Resource, ResourceType } from "@/data/resources";

const typeIcon: Record<ResourceType, string> = {
  video: "▶",
  article: "📄",
  tool: "⚙",
  newsletter: "✉",
};

const typeColor: Record<ResourceType, string> = {
  video: "text-red-400 bg-red-500/10 border-red-500/20",
  article: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  tool: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  newsletter: "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

export default function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="group flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${typeColor[resource.type]}`}>
          {typeIcon[resource.type]} {resource.type}
        </span>
        <span className="text-xs text-gray-600">{resource.source}</span>
      </div>

      <div>
        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors leading-snug">
          {resource.title}
        </h4>
        {resource.author && (
          <p className="text-xs text-gray-500 mt-0.5">by {resource.author}</p>
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">{resource.description}</p>

      <span className="text-xs text-cyan-500 group-hover:text-cyan-300 transition-colors mt-auto">
        Read more →
      </span>
    </motion.a>
  );
}
