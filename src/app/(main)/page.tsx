import React from "react";
import Navigation from "@/components/main/Navigation";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import Team from "@/components/main/Team";

export default async function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section*/}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Team Section */}
      <Team />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
