import React from 'react'

export default function Tools() {
  const rows = [
    [
      { label: "Figma", bg: "#1e1e1e", color: "#f24e1e", icon: "✦" },
      { label: "Sketch", bg: "#f7c948", color: "#000", icon: "💎" },
      { label: "XD", bg: "#ff61f6", color: "#fff", icon: "Xd" },
      { label: "Ps", bg: "#31a8ff", color: "#fff", icon: "Ps" },
      { label: "Ae", bg: "#9999ff", color: "#fff", icon: "Ae" },
      { label: "Pr", bg: "#9999ff", color: "#fff", icon: "Pr" },
      { label: "Ai", bg: "#ff9a00", color: "#fff", icon: "Ai" },
      { label: "Notion", bg: "#fff", color: "#000", icon: "N" },
      { label: "Resolve", bg: "#1a1a1a", color: "#e95f2b", icon: "⦿" },
    ],
    [
      { label: "HTML5", bg: "#e34f26", color: "#fff", icon: "H5" },
      { label: "CSS", bg: "#663399", color: "#fff", icon: "CSS" },
      { label: "Tailwind", bg: "#38bdf8", color: "#fff", icon: "~" },
      { label: "JS", bg: "#f0db4f", color: "#000", icon: "JS" },
      { label: "React", bg: "#222", color: "#61dafb", icon: "⚛" },
      { label: "Next.js", bg: "#fff", color: "#000", icon: "N" },
    ],
    [
      { label: "VS Code", bg: "#007acc", color: "#fff", icon: "<>" },
      { label: "Linear", bg: "#5e6ad2", color: "#fff", icon: "◆" },
      { label: "GitHub", bg: "#fff", color: "#000", icon: "⎇" },
      { label: "Lasso", bg: "#fff", color: "#000", icon: "✏" },
    ],
    [
      { label: "Supabase", bg: "#3ecf8e", color: "#000", icon: "⚡" },
      {
        label: "Framer",
        bg: "linear-gradient(135deg,#f472b6,#a78bfa)",
        color: "#fff",
        icon: "◉",
      },
      { label: "MongoDB", bg: "#13aa52", color: "#fff", icon: "🍃" },
    ],
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            TOOLS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Tools I Use
          </h2>
          <p className="text-white/45 text-sm max-w-md mx-auto">
            A curated set of tools I use to design, build, and ship high-quality
            digital products.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          {rows.map((row, ri) => (
            <div key={ri} className="flex flex-wrap justify-center gap-3">
              {row.map((t) => (
                <div
                  key={t.label}
                  title={t.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-base font-bold cursor-default hover:scale-110 transition-transform duration-200 shadow-lg"
                  style={{
                    background: t.bg.startsWith("linear") ? t.bg : t.bg,
                    color: t.color,
                  }}
                >
                  {t.icon}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
