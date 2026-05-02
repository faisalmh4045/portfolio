import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
