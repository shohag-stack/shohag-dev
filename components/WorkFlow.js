import React from 'react'

export default function WorkFlow() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            WORKFLOW
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Simple, Transparent Workflow
          </h2>
          <p className="text-white/45 text-sm">
            Know exactly what happens at every stage — from the first call to
            final delivery.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative w-full overflow-x-auto">
          <div className="min-w-[700px] relative h-80 flex items-center">
            {/* SVG path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 900 300"
              fill="none"
            >
              {/* wavy dashed path from left through design loop to build circle */}
              <path
                d="M 60 220 Q 150 220 200 120 Q 250 20 300 120 Q 350 200 420 200 Q 480 200 500 200"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeOpacity="0.3"
                fill="none"
              />
              {/* Design circle */}
              <circle
                cx="580"
                cy="160"
                r="90"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeOpacity="0.3"
                fill="none"
              />
              {/* Build & Launch rainbow circle */}
              <circle
                cx="780"
                cy="160"
                r="90"
                stroke="url(#rainbow)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient
                  id="rainbow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="25%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="75%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step labels */}
            <div
              className="absolute text-white/70 text-xs"
              style={{ left: "10px", top: "210px" }}
            >
              <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center mb-1">
                <span className="w-2 h-2 bg-white rounded-full block" />
              </div>
              Discovery Call
            </div>
            <div
              className="absolute text-white/60 text-xs"
              style={{ left: "120px", top: "190px" }}
            >
              Proposal & Estimate
            </div>
            <div
              className="absolute text-white/60 text-xs"
              style={{ left: "200px", top: "80px" }}
            >
              25% Payments
            </div>
            <div
              className="absolute text-white/60 text-xs"
              style={{ left: "270px", top: "30px" }}
            >
              Sign Agreement
            </div>

            {/* Design bubble */}
            <div className="absolute" style={{ left: "530px", top: "135px" }}>
              <div className="bg-blue-400 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-blue-500/30">
                Design
              </div>
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "480px", top: "75px" }}
            >
              Sitemap, UX Strategy
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "480px", top: "100px" }}
            >
              Research & Strategy
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "480px", top: "195px" }}
            >
              Wireframes
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "480px", top: "215px" }}
            >
              25% Payments
            </div>

            {/* Build bubble */}
            <div className="absolute" style={{ left: "727px", top: "135px" }}>
              <div className="bg-purple-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-purple-500/30">
                Build & Launch
              </div>
            </div>
            <div
              className="absolute text-white text-[11px] font-medium"
              style={{ left: "700px", top: "72px" }}
            >
              Tech-stack decision
            </div>
            <div
              className="absolute text-white text-[11px] font-medium"
              style={{ left: "695px", top: "95px" }}
            >
              Front-end & Backend build
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "695px", top: "195px" }}
            >
              Testing & deliver
            </div>
            <div
              className="absolute text-white/60 text-[11px]"
              style={{ left: "695px", top: "215px" }}
            >
              50% Payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
