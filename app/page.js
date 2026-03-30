"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import WorkFlow from "@/components/WorkFlow";
import Tools from "@/components/Tools";
import Faq from "@/components/Faq";
import Travel from "@/components/Travel";
import FooterAbout from "@/components/FooterAbout";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Video from "@/components/Video";

export default function Home() {


  return (
    <>
        <div className="min-h-screen">
          <Hero />
          <EmblaCarousel />
          <Video />
          <About />
          <Services />
          <Pricing />
          <Portfolio />
          <WorkFlow />
          <Tools />
          <Faq />
          <Travel />
          <FooterAbout />
        </div>
    </>
  );
}
