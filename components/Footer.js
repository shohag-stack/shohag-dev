import { WaIcon } from '@/icons/Waicon';
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8">
      {/* Grid background CTA */}
      <div
        className="relative overflow-hidden py-24 px-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            FINAL CALL
          </p>
          <h2
            className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-5"
          >
            Let's build something
            <br />
            great together
          </h2>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            Whether you need a new website, a product redesign, or help bringing
            an idea to life — I'd love to hear about your project.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#22c55e] text-black font-semibold text-sm px-7 py-3.5 hover:bg-[#16a34a] transition-colors rounded-sm"
          >
            <WaIcon /> Chat with Me
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            DESIGNED &amp; DEVELOPED BY SHOHAG © 2025
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              Payment Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
