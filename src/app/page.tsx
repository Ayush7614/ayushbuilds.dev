import { SmokeCanvas } from "@/components/SmokeCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { OpenSource } from "@/components/OpenSource";
import { Blog } from "@/components/Blog";
import { Topmate } from "@/components/Topmate";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <SmokeCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Blog />
        <Topmate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
