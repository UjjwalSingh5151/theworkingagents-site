"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ResourceCard from "@/components/ResourceCard";
import { projects } from "@/data/projects";
import { resources } from "@/data/resources";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "duplicate" | "error";

export default function Home() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setFormState("loading");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email });

    if (!error) {
      setFormState("success");
    } else if (error.code === "23505") {
      // Postgres unique violation — email already registered
      setFormState("duplicate");
    } else {
      setFormState("error");
    }
  }

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center pt-20">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-2/3 h-80 w-80 translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Real agents. Real results. Run them yourself.
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Agents are{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              already working.
            </span>
            <br />
            Are you?
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 leading-relaxed">
            The Working Agents is a launchpad for real AI agent projects — built
            by someone obsessed with what agents can do. Explore, launch, and
            learn from demos you can actually run.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              Explore the Agents →
            </a>
            <a
              href="#operators"
              className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-gray-300 hover:border-white/30 hover:text-white transition-all"
            >
              Become an Operator
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 flex flex-col items-center gap-1 text-gray-600"
        >
          <span className="text-xs">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────────── */}
      <section id="projects" className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">
              Live Projects
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Agents you can launch right now
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl">
              Every project here is something built and shipped. Click through,
              test it, break it — that&apos;s the point.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / WHY ─────────────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left: identity card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-xl font-black text-black shrink-0">
                  US
                </div>
                <div>
                  <p className="font-semibold text-white text-lg leading-tight">Ujjwal Singh</p>
                  <p className="text-sm text-gray-500">Builder · IIT Madras</p>
                </div>
              </div>

              {/* Timeline chips */}
              <div className="flex flex-col gap-2">
                {[
                  { org: "Meesho", detail: "2 years" },
                  { org: "Imperial College London", detail: "Research Intern" },
                  { org: "University of Calgary", detail: "MITACS Research Intern" },
                  { org: "E-Cell, IIT Madras", detail: "3 years" },
                ].map((item) => (
                  <div key={item.org} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-sm text-white">{item.org}</span>
                    <span className="ml-auto text-xs text-gray-600">{item.detail}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/iit-ujjwal-singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn profile
              </a>
            </motion.div>

            {/* Right: the story */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
                Why I&apos;m building this
              </p>

              <blockquote className="border-l-2 border-cyan-500 pl-5 mb-6">
                <p className="text-xl font-medium text-white leading-relaxed">
                  &ldquo;A chai shop owner in Bhagalpur now has access to the same
                  intelligence as a VC-backed startup in Bangalore.
                  That asymmetry just flipped — and most people haven&apos;t noticed yet.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I build AI agents — not as a startup, but because I genuinely
                  believe it&apos;s the most useful thing I can do with my time outside
                  work. Every project here is something I built to solve a real
                  problem, shipped, and put in front of real people.
                </p>
                <p>
                  At Meesho, I worked closely with sellers running small businesses
                  from Tier 3 and 4 cities — people who had never used a software
                  product before, but whose lives had already been changed by a
                  smartphone and an internet connection. The missing piece was always
                  the same: the tools that could genuinely help them were too
                  expensive and too complex to reach them.
                </p>
                <p>
                  AI changes that equation. An agent today can handle what used to
                  require an entire ops team — at a fraction of the cost, available
                  to anyone with a problem worth solving. As a Research Intern at
                  Imperial College London and a MITACS Research Intern at the
                  University of Calgary, I worked on how technology creates or closes
                  access gaps. The pattern is always the same: it&apos;s a distribution
                  problem, not a capability problem.
                </p>
                <p className="text-white font-medium">
                  Agents are the distribution fix. This is where I build them —
                  one real problem at a time — and where I&apos;m looking for others who
                  want to do the same.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WRITING (SUBSTACK) ──────────────────────────────────────────── */}
      <section id="writing" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">
                Field Notes
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Writing from inside the build
              </h2>
              <p className="mt-3 text-gray-400 max-w-xl">
                Not predictions. Not takes. Observations from someone actually
                shipping agents — what&apos;s working, what&apos;s changing, what it
                means for the people using them.
              </p>
            </div>
            <a
              href="https://theworkingagents.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              All articles on Substack →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "The Funnel Just Learned How to Talk",
                description:
                  "For a decade, 'personalization' in B2C meant a slightly better landing page. Now it can mean someone is actually walking you through the product.",
                date: "May 16, 2026",
                url: "https://theworkingagents.substack.com/p/the-funnel-just-learned-how-to-talk",
                tag: "B2C · Agents",
              },
              {
                title: "A Tuesday Afternoon in the Life of an Agent Manager",
                description:
                  "What 'managing AI' actually looks like when you're a marketing ops lead, a CS manager, or a growth PM — not an engineer.",
                date: "Apr 30, 2026",
                url: "https://theworkingagents.substack.com/p/a-tuesday-afternoon-in-the-life-of",
                tag: "Ops · Workflow",
              },
              {
                title: "When Your User Sends an Agent Instead",
                description:
                  "The Platform Shift — what happens when AI agents start mediating user interactions on the platforms we built for humans.",
                date: "Apr 23, 2026",
                url: "https://theworkingagents.substack.com/p/when-your-user-sends-an-agent-instead",
                tag: "Platform · Future",
              },
            ].map((article, i) => (
              <motion.a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{article.date}</span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-xs text-cyan-400">
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {article.description}
                </p>
                <span className="text-xs text-cyan-500 group-hover:text-cyan-300 transition-colors">
                  Read on Substack →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ───────────────────────────────────────────────────── */}
      <section id="resources" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Curated Resources
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The best signal on agents
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl">
              Hand-picked reads, videos, and tools — no fluff, just the things
              that actually move your thinking forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, i) => (
              <ResourceCard key={resource.id} resource={resource} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── THE OPERATORS ───────────────────────────────────────────────── */}
      <section id="operators" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              The Operators
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              People who manage the agents
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Not engineers debating theory. Problem solvers who have strong
              intuition, pattern recognition, and deep empathy for the people
              they&apos;re building for. If you believe agents can change the lives
              of hundreds of millions of people — you belong here.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { label: "Projects launched", value: String(projects.length) },
                { label: "Operators joining", value: "Growing" },
                { label: "Agents in the wild", value: "Soon" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-4 text-center"
                >
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Email capture */}
            {formState === "success" ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-emerald-400 font-medium"
              >
                You&apos;re in. We&apos;ll be in touch when the next agent ships.
              </motion.p>
            ) : formState === "duplicate" ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-cyan-400 font-medium"
              >
                You&apos;re already on the list — we&apos;ll see you when the next one drops.
              </motion.p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  suppressHydrationWarning
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={formState === "loading"}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-60"
                >
                  {formState === "loading" ? "Saving…" : "Become an Operator →"}
                </button>
                {formState === "error" && (
                  <p className="w-full text-center text-xs text-red-400 mt-1">
                    Something went wrong — try again in a moment.
                  </p>
                )}
              </form>
            )}

            <p className="mt-4 text-xs text-gray-600">
              No spam. Just project drops and co-build invites.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
