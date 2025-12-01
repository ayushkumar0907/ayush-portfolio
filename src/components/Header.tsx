"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerTitleIcon = "AK";
  const navLinks = [
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
    { name: "experience", href: "/experience" },
    { name: "skills", href: "/skills" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          {headerTitleIcon}
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm font-medium hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
