"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-[background-color,border-color] duration-200 border-b ${scrolled ? "bg-background/80 backdrop-blur-xl border-surface-stroke" : "bg-transparent border-transparent"}`}
      id="navbar"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
        <a
          className="flex items-center gap-3 group rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href="#"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container border border-surface-stroke text-primary transition-colors duration-150 group-hover:bg-primary-container group-hover:text-surface-container-low">
            <span className="brand-mark size-4" aria-hidden="true" />
          </div>
          <span className="font-headline-md text-lg font-medium text-text-primary">
            Ismail
            <span className="text-text-muted font-normal">_</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-body-md text-sm text-on-surface-variant hover:text-text-primary transition-colors duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-body-md text-sm text-on-surface-variant hover:text-text-primary transition-colors duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-body-md text-sm text-on-surface-variant hover:text-text-primary transition-colors duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="font-body-md text-sm text-on-surface-variant hover:text-text-primary transition-colors duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#hero"
          >
            About
          </a>
        </div>
        <button
          className="md:hidden text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path
              d={
                isMenuOpen ? "M5 5 19 19M19 5 5 19" : "M4 7h16M4 12h16M4 17h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-surface-container border-b border-surface-stroke absolute w-full ${isMenuOpen ? "" : "hidden"}`}
      >
        <div className="flex flex-col p-4 gap-1">
          <a
            className="font-body-md text-on-surface-variant hover:text-text-primary px-2 py-3 rounded-lg transition-colors duration-150"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-text-primary px-2 py-3 rounded-lg transition-colors duration-150"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-text-primary px-2 py-3 rounded-lg transition-colors duration-150"
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-text-primary px-2 py-3 rounded-lg transition-colors duration-150"
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
