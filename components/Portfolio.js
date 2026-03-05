import BrowserFrame from '@/utilis/BrowserFrame';
import Image from 'next/image';
import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      bigTitle: "Annie — Photography Website",
      bigTag: "published.jsx",
      bigDesc:
        "A sleek, photography focused template built to showcase your visuals through clean layouts, smooth transitions, and editorial inspired design.",
      bigExtra:
        "Annie Leibovitz blends timeless minimalism with expressive storytelling, creating a refined digital space to showcase your photography.",
      live: true,
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28 ">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            LATEST PROJECTS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Recent Custom Designed
          </h2>
          <p className="text-white/45 text-sm">
            These are not your ordinary pre-made templates.
          </p>
        </div>

        {/* Project row — matches screenshot layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 items-stretch">
          {/* Left: stacked design + develop frames */}
          <div className="flex flex-col gap-5 h-full">
            <BrowserFrame className='flex-1' title="Design">
              <div className="overflow-hidden">
                <img
                  src="/assets/img/main.png"
                  alt="Design"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </BrowserFrame>
            <BrowserFrame className='flex-1' title="Develop">
              <div className="overflow-hidden p-3">
                <img
                  src="/assets/img/image.png"
                  alt="Design"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </BrowserFrame>
          </div>

          {/* Right: big project card */}
          <BrowserFrame title="published.jsx" highlight>
            <div className="h-80 overflow-hidden relative">
              <img
                src="/assets/img/image-published.png"
                alt="Annie Photography"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-xl">
                  Annie — Photography Website
                </h3>
                <span className="flex items-center gap-1 text-[#22c55e] text-xs font-semibold">
                  🌐 Live
                </span>
              </div>
              <p className="text-white font-medium text-xl leading-relaxed mb-2">
                A sleek, photography focused template built to showcase your
                visuals through clean layouts, smooth transitions, and editorial
                inspired design.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                Annie Leibovitz blends timeless minimalism with expressive
                storytelling, creating a refined digital space to showcase your
                photography. Whether you're a professional photographer,
                creative studio, or visual artist, this template's clean layout
                and modern design ensure your work takes center stage.
              </p>
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
