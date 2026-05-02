"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const PHRASES = [
  "Full-Stack Developer",
  "Problem Solver",
  "Quick Learner",
] as const;

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);

  /* Typewriter */
  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = PHRASES[phraseIdx];

      if (!deleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % PHRASES.length;
        }
      }
      timer = setTimeout(tick, deleting ? 40 : 75);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  /* Entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Intro text */}
        <div>
          <p className="hero-fade section-label mb-5 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" /> Hi, I&apos;m
          </p>

          <h1 className="hero-fade mb-6 font-display text-6xl leading-[0.9] md:text-7xl lg:text-8xl">
            Faisal <br /> Mahmud
          </h1>

          <p className="hero-fade mb-5 h-7 font-mono-accent text-lg text-primary md:text-xl">
            I&apos;m a <span ref={typeRef} aria-live="polite" />
            <span
              aria-hidden
              className="ml-1 inline-block h-5 w-0.5 animate-cursor-blink bg-primary align-middle"
            />
          </p>

          <p className="hero-fade mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build scalable web applications with clean architecture and great
            user experience.
          </p>

          <div className="hero-fade mb-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </div>

          <div className="hero-fade flex items-center gap-3">
            {[
              {
                icon: FiGithub,
                label: "GitHub",
                href: "https://github.com/faisalmh4045",
              },
              {
                icon: FiLinkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/faisal-mahmud-cse/",
              },
              {
                icon: SiLeetcode,
                label: "LeetCode",
                href: "https://leetcode.com/u/faisalmh4045/",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Avatar ─────────────────────────────────────────────────────── */}
        <div className="hero-fade relative flex justify-center lg:justify-end">
          <div className="relative h-100 w-75 md:h-137.5 md:w-100">
            {/* Blob rings */}
            <div className="absolute inset-0 animate-blob-spin bg-linear-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
            <div
              className="absolute inset-4 animate-blob-spin bg-linear-to-tr from-primary/30 to-primary-glow/20"
              style={{ animationDuration: "18s" }}
            />

            {/* Photo */}
            <div className="glass absolute inset-6 animate-float-soft overflow-hidden rounded-full">
              <Image
                src={"/faisal-avatar.png"}
                alt="Faisal Mahmud"
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover"
                priority
              />
            </div>

            {/* Status pill */}
            <div className="glass absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
