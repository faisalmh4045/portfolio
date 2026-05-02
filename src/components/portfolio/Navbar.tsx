"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-4">
      <nav
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "shadow-(--shadow-soft)" : ""
        }`}
        aria-label="Primary"
      >
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="md:ml-1">
          <Button
            size="sm"
            className="rounded-full bg-primary px-5 py-4 text-primary-foreground hover:bg-primary/90"
          >
            Let&apos;s Talk
          </Button>
        </a>
      </nav>
    </header>
  );
};
