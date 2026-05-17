"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-[10px] font-black text-black">
            TWA
          </span>
          <span className="text-sm font-semibold text-white">The Working Agents</span>
        </div>

        <nav className="flex gap-6 text-sm text-gray-500">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#writing" className="hover:text-white transition-colors">Writing</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#operators" className="hover:text-white transition-colors">The Operators</a>
        </nav>

        <p suppressHydrationWarning className="text-xs text-gray-600">
          © {new Date().getFullYear()} The Working Agents · Built in public
        </p>
      </div>
    </footer>
  );
}
