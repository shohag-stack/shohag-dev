import BrowserFrame from '@/utilis/BrowserFrame';
import React from 'react'

export default function Services() {
  const cards = [
    {
      accent: "#a855f7",
      title: "Web & SaaS Design",
      desc: "Beautiful, conversion-focused UI/UX design for web apps and SaaS products. From wireframes to polished interfaces.",
      preview: (
        <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 h-full flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-3 w-full text-xs text-white/90 font-sans">
            <p className="font-bold text-xs mb-1">
              All-in-One Platform to
              <br />
              Simplify Your Workflow
            </p>
            <p className="text-white/60 text-[10px]">
              Focus on building your product not managing chaos.
            </p>
            <div className="mt-2 flex gap-1">
              <span className="bg-white/20 rounded px-2 py-0.5 text-[9px]">
                Try Vidie free
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      accent: "#22c55e",
      title: "Web & SaaS Development",
      desc: "Custom websites and web applications built with React, Next.js, and modern technologies. Fast, responsive, and scalable.",
      preview: (
        <div className="bg-[#1a1a2e] h-full flex items-center justify-center p-3">
          <div className="bg-white rounded-lg w-full p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-xs font-bold text-gray-800">
                Hi, Restore
              </span>
            </div>
            <p className="text-sm font-bold text-gray-900 mb-2">Welcome Back</p>
            <div className="grid grid-cols-3 gap-1">
              {["1,456", "1,456", "1,456"].map((v, i) => (
                <div key={i} className="bg-gray-100 rounded p-1 text-center">
                  <p className="text-xs font-bold text-gray-800">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      accent: "#f59e0b",
      title: "Full-Stack Solutions",
      desc: "Beautiful, conversion-focused UI/UX design for web apps and SaaS products. From wireframes to polished interfaces.",
      preview: (
        <div className="bg-[#0d1b3e] h-full flex items-center justify-center p-4">
          <div className="grid grid-cols-2 gap-2 w-full">
            {[
              { bg: "#1e3a5f", icon: "⚛", label: "React" },
              { bg: "#1a1a1a", icon: "N", label: "Next.js" },
              { bg: "#0d4a6b", icon: "◈", label: "Chakra" },
              { bg: "#0d3320", icon: "🍃", label: "Mongo" },
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-xl p-3 flex flex-col items-center gap-1"
                style={{ background: t.bg }}
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-white/70 text-[10px]">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      ),
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
              <div className="h-52 overflow-hidden">{c.preview}</div>
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
