"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Resources", href: "#resources" },
  { label: "The Operators", href: "#operators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-black text-black">
            TWA
          </span>
          <span className="font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            The Working Agents
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#operators"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Become an Operator
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 bg-[#0a0a0f]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#operators"
            onClick={() => setOpen(false)}
            className="w-fit rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1.5 text-sm font-medium text-white"
          >
            Become an Operator
          </a>
        </div>
      )}
    </header>
  );
}
