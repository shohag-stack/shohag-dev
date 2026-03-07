import BrowserFrame from "@/utilis/BrowserFrame";
import Image from "next/image";
import React from "react";
import { projects } from "@/db/projects.js";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="works" className="bg-black py-20 md:py-10 ">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            LATEST PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Recent Custom Designed
          </h2>
          <p className="text-white/45 text-sm">
            These are not your ordinary pre-made templates.
          </p>
        </div>

        {/* Project row — matches screenshot layout */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 "
          >
            {/* Left: stacked design + develop frames */}
            <div className="flex flex-col gap-5 h-full">
              <BrowserFrame className="flex-1" title="Design">
                <div className="h-80 overflow-hidden">
                  <Image
                    src={project.designImage}
                    alt="Design"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={900}
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame className="flex-1" title="Develop">
                <div className=" h-80 overflow-hidden p-3">
                  <Image
                    src={project.developImage}
                    alt="Design"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={900}
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: big project card */}
            <BrowserFrame title="published.jsx" highlight>
              <div className="overflow-hidden relative">
                <Image
                  src={project.publishedImage}
                  alt="Annie Photography"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={900}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-xl">
                    {project.bigTitle}
                  </h3>
                </div>
                <p className="text-white font-medium text-xl leading-relaxed mb-2">
                  {project.bigDesc}
                </p>
                <p className="text-white/50 text-base leading-relaxed mb-10">
                  {project.bigExtra}
                </p>

                <Link
                  href={"#"}
                  className="px-5 py-2 border border-white text-white font-semibold inline-flex items-center gap-4 transition-all hover:bg-white/90 hover:text-black"
                >
                  🌐 See Live
                </Link>
              </div>
            </BrowserFrame>
          </div>
        ))}
      </div>
    </section>
  );
}
