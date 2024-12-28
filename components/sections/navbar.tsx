"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold">Portfolio</h1>
        </motion.div>

        {/* Links for Navigation - Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-primary transition">
            Home
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-primary transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Theme Toggle - Desktop */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Hamburger Menu and Theme Toggle - Mobile */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            className="text-primary hover:text-primary/90 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Theme Toggle - Mobile */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-t"
        >
          <div className="flex flex-col items-center p-4 space-y-4">
            <a
              href="#hero"
              className="hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
