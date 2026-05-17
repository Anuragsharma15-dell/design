// components/Navbar.jsx

import { motion } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              StitchAI
            </h1>
            <p className="text-xs text-zinc-400">
              AI Website Builder
            </p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-zinc-300 transition"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">

          <button className="text-sm font-medium text-zinc-300 transition hover:text-white">
            Login
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition"
          >
            Get Started

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-black/90 backdrop-blur-2xl md:hidden"
        >
          <div className="space-y-5 px-6 py-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white">
                Login
              </button>

              <button className="rounded-xl bg-white py-3 text-sm font-semibold text-black">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
