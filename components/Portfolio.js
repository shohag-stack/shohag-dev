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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Left: stacked design + develop frames */}
          <div className="flex flex-col gap-5">
            <BrowserFrame title="Design">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80"
                  alt="Design"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </BrowserFrame>
            <BrowserFrame title="Develop">
              <div className="h-44 bg-[#1e1e1e] overflow-hidden p-3">
                <pre className="text-[10px] font-mono text-green-400 leading-relaxed overflow-hidden">{`import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.hero}
    >
      <h1>Through the lens,</h1>
      <h1>I capture stories untold.</h1>
    </motion.section>
  )
}`}</pre>
              </div>
            </BrowserFrame>
          </div>

          {/* Right: big project card */}
          <BrowserFrame title="published.jsx" highlight>
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80"
                alt="Annie Photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                <p className="text-white font-bold text-lg leading-tight">
                  Through the lens,
                  <br />I capture stories untold.
                </p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-base">
                  Annie — Photography Website
                </h3>
                <span className="flex items-center gap-1 text-[#22c55e] text-xs font-semibold">
                  🌐 Live
                </span>
              </div>
              <p className="text-white font-medium text-sm leading-relaxed mb-2">
                A sleek, photography focused template built to showcase your
                visuals through clean layouts, smooth transitions, and editorial
                inspired design.
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Annie Leibovitz blends timeless minimalism with expressive
                storytelling, creating a refined digital space to showcase your
                photography. Whether you're a professional photographer,
                creative studio, or visual artist, this template's clean layout
                and modern design ensure your work takes center stage.
              </p>
            </div>
          </BrowserFrame>
        </div>

        {/* Second row - additional projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "SaaS Dashboard",
              tag: "Development",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            },
            {
              title: "E-commerce Platform",
              tag: "Full-Stack",
              img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
            },
            {
              title: "Brand Identity",
              tag: "Design",
              img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
            },
          ].map((p) => (
            <BrowserFrame key={p.title} title={p.tag}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-white/45 text-xs tracking-widest uppercase mb-1">
                  {p.tag}
                </p>
                <h3 className="text-white text-sm font-semibold">{p.title}</h3>
              </div>
            </BrowserFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
