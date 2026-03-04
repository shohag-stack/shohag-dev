import { Arrow } from '@/icons/Arrow';
import React from 'react'

export default function FooterAbout() {
  const socials = [
    {
      icon: "𝕏",
      label: "X (formerly twitter)",
      handle: "@shohag4y",
      bg: "#000",
    },
    { icon: "⎇", label: "Github", handle: "@shohag-stack", bg: "#161b22" },
    { icon: "🏀", label: "Dribbble", handle: "@shohag4y", bg: "#ea4c89" },
    { icon: "Bē", label: "Behance", handle: "@shohag4y", bg: "#0057ff" },
  ];
  const achievements = [
    {
      icon: "G",
      bg: "#4285f4",
      title: "Foundations of User Experience (UX) Design",
      date: "April 2021",
    },
    {
      icon: "M",
      bg: "#0081fb",
      title: "Programming with JavaScript",
      date: "Feb 2024",
    },
  ];
  const featured = [
    {
      icon: "DC",
      bg: "#2d2d2d",
      title: "DesignCourse",
      date: "Feb 2021",
      yt: true,
    },
    { icon: "Xd", bg: "#ff61f6", title: "Adobe XD", date: "April 2020" },
  ];

  return (
    <section className="bg-black py-16 md:py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: bio */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
              alt="Shohag"
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20 mb-5"
            />
            <h2
              className="text-3xl font-bold text-white mb-4"
            >
              I'm Mohammad Shohag
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              I work across the entire pipeline, from idea and product thinking
              to design, development, deployment, monitoring, and scaling,
              covering frontend, backend, payments, integrations,
              infrastructure, and CI/CD.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              I'm focused on turning ideas into usable tools with AI features
              where they make sense, and learning by building in public.
            </p>

            <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              ACHIEVEMENTS
            </p>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a.title} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: a.bg }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{a.title}</p>
                    <p className="text-white/40 text-xs">
                      {a.date} ·{" "}
                      <a
                        href="#"
                        className="text-white/60 hover:text-white underline"
                      >
                        Show Credential ↗
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: socials + github graph + featured */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socials.map((s) => (
                <a
                  href="#"
                  key={s.label}
                  className="flex items-center justify-between gap-3 border border-white/12 rounded-xl px-4 py-3 hover:border-white/25 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: s.bg }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">
                        {s.label}
                      </p>
                      <p className="text-white/40 text-xs">{s.handle}</p>
                    </div>
                  </div>
                  <Arrow size={12} />
                </a>
              ))}
            </div>

            {/* GitHub contribution graph placeholder */}
            <div className="border border-white/10 rounded-xl p-4 mb-6 bg-[#0d1117]">
              <div
                className="grid gap-0.5"
                style={{ gridTemplateColumns: "repeat(52,1fr)" }}
              >
                {Array.from({ length: 364 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{
                      background:
                        Math.random() > 0.6
                          ? `rgba(34,197,94,${Math.random() * 0.8 + 0.2})`
                          : "#161b22",
                    }}
                  />
                ))}
              </div>
              <p className="text-white/35 text-[10px] mt-2">
                1,877 contributions in the last year on{" "}
                <span className="text-[#f05032]">GitHub</span>
              </p>
            </div>

            <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              FEATURED IN
            </p>
            <div className="space-y-3">
              {featured.map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: f.bg }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{f.title}</p>
                    <p className="text-white/40 text-xs">
                      {f.date} ·{" "}
                      {f.yt && (
                        <span className="text-red-500 font-medium">
                          ▶ YouTube
                        </span>
                      )}{" "}
                      <a
                        href="#"
                        className="text-white/60 hover:text-white underline ml-1"
                      >
                        Show Post ↗
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
