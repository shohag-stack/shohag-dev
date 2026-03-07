import React from "react";
import { useEffect, useRef, useState } from "react";

export default function WorkFlow() {
  const [inView, setInView] = useState(false);
  const [pathLen, setPathLen] = useState(0);
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

const steps = [
  // Left curved path dots
  { x: 48.5,   y: 345.5, label: "Discovery Call",       align: "right", delay: 0.2,  anchor: "start",  dx: 18,  dy: 5   },
  { x: 270.74, y: 269.7, label: "Proposal & Estimate",  align: "right", delay: 0.5,  anchor: "start",  dx: 18,  dy: 5   },
  { x: 323.38, y: 135.6, label: "25% Payments",         align: "right", delay: 0.8,  anchor: "start",  dx: 18,  dy: 5   },
  { x: 384.93, y: 39.5,  label: "Sign Agreement",       align: "right", delay: 1.1,  anchor: "start",  dx: 18,  dy: 5   },
  // Design circle dots
  { x: 551.38, y: 157.4, label: "Sitemap, UX Strategy", align: "top",   delay: 1.4,  anchor: "middle", dx: 0,   dy: -18 },
  { x: 588.33, y: 106.4, label: "Research & Strategy",  align: "top",   delay: 1.7,  anchor: "middle", dx: 0,   dy: -18 },
  { x: 554.87, y: 295.5, label: "Wireframes",           align: "bot",   delay: 2.0,  anchor: "middle", dx: 0,   dy: 22  },
  { x: 596.67, y: 345.8, label: "25% Payments",         align: "bot",   delay: 2.3,  anchor: "middle", dx: 0,   dy: 22  },
  // Build circle dots
  { x: 859.11, y: 159.0, label: "Tech-stack decision",  align: "top",   delay: 2.6,  anchor: "middle", dx: 0,   dy: -18 },
  { x: 895.76, y: 96.75, label: "Front-end & Backend build", align: "top", delay: 2.9, anchor: "middle", dx: 0, dy: -18 },
  { x: 862.11, y: 297.2, label: "Testing & deliver",    align: "bot",   delay: 3.2,  anchor: "middle", dx: 0,   dy: 22  },
  { x: 891.91, y: 348.5, label: "50% Payments",         align: "bot",   delay: 3.5,  anchor: "middle", dx: 0,   dy: 22  },
];

  const mobileSteps = [
    { label: "Discovery & Research", icon: "🔍", color: "#00FF44" },
    { label: "Proposal & Agreement", icon: "📋", color: "#77ABFF" },
    { label: "Prop. & Planning", icon: "🗺️", color: "#77ABFF" },
    { label: "Wireframe & Structure", icon: "📐", color: "#77ABFF" },
    { label: "Visual Design", icon: "🎨", color: "#CE77FF" },
    { label: "Content Writing", icon: "✍️", color: "#77ABFF" },
    { label: "Review & Revise", icon: "👁️", color: "#77ABFF" },
    { label: "Frontend Dev", icon: "💻", color: "#CE77FF" },
    { label: "Backend & CMS", icon: "⚙️", color: "#CE77FF" },
    { label: "Final Review & Launch", icon: "🚀", color: "#CE77FF" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            WORKFLOW
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Simple, Transparent Workflow
          </h2>
          <p className="text-white/45 text-sm">
            Know exactly what happens at every stage — from the first call to
            final delivery.
          </p>
        </div>

        <div ref={sectionRef} style={{ background: "#000", width: "100%" }}>
      <style>{`
        @keyframes ping {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(2.8); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0); }
          65%  { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes spinCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 5px #00FF44); }
          50%      { filter: drop-shadow(0 0 16px #00FF44) drop-shadow(0 0 32px #00FF4455); }
        }
        @keyframes slideCard {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .wf-desktop { display: block; }
        .wf-mobile  { display: none; }
        @media (max-width: 768px) {
          .wf-desktop { display: none !important; }
          .wf-mobile  { display: flex !important; }
        }
        .spin-cw {
          transform-origin: 691.234px 221.842px;
          animation: spinCW 18s linear infinite;
        }
        .spin-ccw {
          transform-origin: 1039.39px 221.842px;
          animation: spinCCW 22s linear infinite;
        }
      `}</style>

      {/* ── Desktop SVG ── */}
      <div className="wf-desktop" style={{ maxWidth: 1233, margin: "0 auto", padding: "0 20px" }}>
        <svg
          viewBox="0 0 1233 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", overflow: "visible" }}
        >
          {/* ── BASE dashed path (always visible, dim) ── */}
          <path
            ref={pathRef}
            d="M563.63 311.231C506.017 236.242 417.855 -52.0192 348.424 68.2382C290.758 168.119 348.424 345.64 47.8438 345.64"
            stroke="#2a2a2a"
            strokeWidth="2"
            strokeDasharray="20 8"
            fill="none"
          />

          {/* ── ANIMATED green draw-on path ── */}
          {pathLen > 0 && (
            <path
              d="M563.63 311.231C506.017 236.242 417.855 -52.0192 348.424 68.2382C290.758 168.119 348.424 345.64 47.8438 345.64"
              stroke="#00FF44"
              strokeWidth="2.5"
              strokeDasharray="20 8"
              fill="none"
              style={{
                strokeDashoffset: inView ? 0 : pathLen,
                transition: inView
                  ? "stroke-dashoffset 2.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s"
                  : "none",
                filter: "drop-shadow(0 0 5px #00FF44aa)",
              }}
            />
          )}

          {/* ── DESIGN CIRCLE — spinning dashed ring ── */}
          {/* Spinning animated ring */}
          <circle
            cx="691.234" cy="221.842" r="156.006"
            stroke="#555"
            strokeWidth="2"
            strokeDasharray="20 8"
            className="spin-cw"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease 1.4s",
            }}
          />
         

          {/* ── BUILD CIRCLE — spinning rainbow ring ── */}
          {/* Spinning rainbow */}
          <circle
            cx="1039.39" cy="221.842" r="191.85"
            stroke="url(#rainbow)"
            strokeWidth="2.5"
            strokeDasharray="20 8"
            className="spin-ccw"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease 2.4s",
            }}
          />
          {/* Second build ring */}
          

          {/* ── START DOT — pulsing green ── */}
          <g style={{ animation: inView ? "glowPulse 2.5s ease-in-out infinite" : "none" }}>
            <circle
              cx="48.5" cy="345.521" r="22"
              fill="#00FF44" fillOpacity="0.15"
              style={{
                animation: inView ? "ping 2s ease-in-out infinite" : "none",
                transformOrigin: "48.5px 345.521px",
              }}
            />
            <circle cx="48.5" cy="345.521" r="9.14" fill="#fff" />
            <circle cx="48.5" cy="345.521" r="4.74" fill="white" />
          </g>

          {/* ── STEP DOTS ── */}
          {steps.map((s, i) => (
            <g
              key={i}
              style={{
                transformOrigin: `${s.x}px ${s.y}px`,
                animation: inView
                  ? `popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) ${s.delay}s both`
                  : "none",
              }}
            >
              <circle cx={s.x} cy={s.y} r="10" fill="#111" stroke="#444" strokeWidth="1.5" />
              <circle cx={s.x} cy={s.y} r="4.5" fill="white" />
            </g>
          ))}

          {/* ── STEP LABELS ── */}
          {steps.map((s, i) => (
            <text
              key={i}
              x={s.x + s.dx}
              y={s.y + s.dy}
              fill="rgba(255,255,255,0.85)"
              fontSize="17"
              fontWeight="500"
              fontFamily="'Segoe UI', -apple-system, sans-serif"
              textAnchor={s.anchor}
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity 0.4s ease ${s.delay + 0.15}s`,
              }}
            >
              {s.label}
            </text>
          ))}

          {/* ── DESIGN pill ── */}
          <g style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1.8s" }}>
            <rect x="637.234" y="199.877" width="108" height="44" rx="22" fill="#77ABFF" />
            <text x="691" y="227" fill="white" fontSize="17" fontWeight="700"
              textAnchor="middle" fontFamily="'Segoe UI', sans-serif">Design</text>
          </g>

          {/* ── BUILD & LAUNCH pill ── */}
          <g style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 2.8s" }}>
            <rect x="947.891" y="199.842" width="183" height="44" rx="22" fill="#CE77FF" />
            <text x="1039" y="227" fill="white" fontSize="17" fontWeight="700"
              textAnchor="middle" fontFamily="'Segoe UI', sans-serif">Build &amp; Launch</text>
          </g>

          <defs>
            <linearGradient id="rainbow" x1="1039.39" y1="28" x2="1039.39" y2="415" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="0.25" stopColor="#FFFF00" />
              <stop offset="0.45" stopColor="#15FF00" />
              <stop offset="0.74" stopColor="#0088FF" />
              <stop offset="1"    stopColor="#F200FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Mobile stacked steps ── */}
      <div
        className="wf-mobile"
        style={{
          flexDirection: "column",
          gap: 10,
          maxWidth: 480,
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {mobileSteps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              animation: inView ? `slideCard 0.5s ease ${i * 0.08}s both` : "none",
              opacity: inView ? 1 : 0,
            }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: "50%",
              background: step.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 800, color: "#000", flexShrink: 0,
            }}>
              {i + 1}
            </div>
            <span style={{ fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.85)", flex: 1 }}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
}
