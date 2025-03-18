import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div className="bg-transparent sm:px-40 min-w-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
