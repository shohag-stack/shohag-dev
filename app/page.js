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
import LenisProvider from "@/components/LenisProvider";
import { EmblaCarousel } from "@/components/EmblaCarousel";

export default function Home() {


  return (
    <>
      <LenisProvider>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <EmblaCarousel />
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
      </LenisProvider>
    </>
  );
}
