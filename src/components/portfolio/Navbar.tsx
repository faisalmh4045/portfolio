"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-4 right-0 left-0 z-50 px-4">
        {/* Desktop nav: centered pill */}
        <div className="hidden justify-center md:flex">
          <nav
            className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300`}
            aria-label="Primary"
          >
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={"/#contact"}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>

        {/* Mobile nav: hamburger left, CTA right */}
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`glass flex h-11 w-11 items-center justify-center rounded-full text-foreground`}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link
            href={"/#contact"}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-60 flex animate-in flex-col items-center justify-center bg-background/95 backdrop-blur-xl duration-200 fade-in md:hidden">
          <ul className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="glass mt-16 flex h-16 w-16 items-center justify-center rounded-full text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};
