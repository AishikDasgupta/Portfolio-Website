"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background text-white py-12 mt-16 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          {/* Logo or Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Aishik Dasgupta</h2>
            <p className="text-sm text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Aishik Dasgupta. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="#about" className="hover:text-primary transition">
              About
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

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M23 3a10.91 10.91 0 01-3.149.866A4.48 4.48 0 0022.46 2a9.016 9.016 0 01-2.853 1.084A4.487 4.487 0 0016.616 2a4.45 4.45 0 00-4.451 4.451c0 .349.039.689.115 1.015a12.696 12.696 0 01-9.24-4.7 4.472 4.472 0 00-.603 2.243c0 1.548.786 2.91 1.98 3.714a4.444 4.444 0 01-2.023-.56v.056a4.451 4.451 0 003.567 4.36 4.474 4.474 0 01-2.02.076c.568 1.77 2.206 3.056 4.141 3.096a8.91 8.91 0 01-5.52 1.9c-.358 0-.71-.021-1.061-.062a12.62 12.62 0 006.822 2.006c8.179 0 12.66-6.779 12.66-12.661 0-.193-.004-.385-.013-.577A9.065 9.065 0 0023 3z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/AishikDasgupta"
              className="text-gray-400 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.01 8.17 7.14 9.49.52.09.71-.22.71-.48V16.7c-2.94.64-3.56-1.42-3.56-1.42-.48-1.21-1.16-1.53-1.16-1.53-.95-.65.07-.64.07-.64 1.05.07 1.6 1.06 1.6 1.06 1.06 1.81 2.77 1.29 3.44.99 0 0 1.03-.69 1.03-1.58 0-.93-.7-1.57-1.6-1.57-1.27 0-2.51.68-3.21 1.53-.17.23-.31.47-.47.72-.16-.26-.31-.51-.47-.74-.7-.86-1.94-1.54-3.21-1.54-1.91 0-3.44 1.25-3.44 2.77 0 1.28 1.34 1.51 2.47 1.55 2.51-.04 4.56-.66 6.06-1.59.17-.13.35-.27.51-.42-.1.34-.16.7-.16 1.06 0 1.02.24 2.11.67 2.97-1.11-.07-2.09-.4-3.01-.96-.95-.67-1.29-1.59-1.29-1.59s-.06-.56-.07-.67c0-.11-.05-.21-.09-.32 1.34-1.02 2.88-1.6 4.49-1.6 5.52 0 10 4.48 10 10 0 1.66-.47 3.27-1.28 4.62A9.94 9.94 0 0112 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aishik-dasgupta/"
              className="text-gray-400 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 9v12H6V9h6zm2 0h6v12h-6V9z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
