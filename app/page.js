"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import WorkFlow from "@/components/WorkFlow";
import Tools from "@/components/Tools";
import Faq from "@/components/Faq";
import Travel from "@/components/Travel";
import FooterAbout from "@/components/FooterAbout";
import Footer from "@/components/Footer";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return (
    <>
      <ReactLenis root />

      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Portfolio />
        <WorkFlow />
        <Tools />
        <Faq />
        <Travel />
        <FooterAbout />
        <Footer />
      </div>
    </>
  );
}
