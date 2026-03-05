import BrowserFrame from '@/utilis/BrowserFrame';
import Image from 'next/image';
import React from 'react'

export default function Services() {
  const cards = [
    {
      accent: "#a855f7",
      title: "Web & SaaS Design",
      desc: "Beautiful, conversion-focused UI/UX design for web apps and SaaS products. From wireframes to polished interfaces.",
      preview: "/assets/img/web-saas-design.png",
    },
    {
      accent: "#22c55e",
      title: "Web & SaaS Development",
      desc: "Custom websites and web applications built with React, Next.js, and modern technologies. Fast, responsive, and scalable.",
      preview: "/assets/img/web-saas-dev.png",
    },
    {
      accent: "#f59e0b",
      title: "Full-Stack Solutions",
      desc: "Beautiful, conversion-focused UI/UX design for web apps and SaaS products. From wireframes to polished interfaces.",
      preview: "/assets/img/full-stack.png",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            WHAT I DO
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Services I Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <BrowserFrame key={c.title}>
              <div className="h-70 overflow-hidden">
                <div className="h-full w-full overflow-hidden">
                <Image
                  src={c.preview}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
                </div>
                </div>
              <div className="p-5">
                <h3
                  className="font-bold text-base-bold mb-2"
                  style={{ color: c.accent }}
                >
                  {c.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </BrowserFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
