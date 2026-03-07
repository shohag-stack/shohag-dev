import { Arrow } from '@/icons/Arrow';
import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
import { socials, achievements, featured } from '@/db/footer';

export default function FooterAbout() {


  return (
    <section className="py-16 md:py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: bio */}
          <div>
            <Image
              src="/assets/img/avatar.png"
              alt="Shohag"
              className="w-30 h-30 rounded-full object-cover border-white/20 mb-5"
              width={100}
              height={100}
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
            <div className="space-y-3 flex flex-col gap-3">
              {achievements.map((a) => (
                <div key={a.title} className="flex items-center gap-5">
                  <div
                    className=" flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  >
                    <Image src={a.icon} alt={a.icon} width={60} height={60} />
                    
                  </div>
                  <div>
                    <p className="text-white text-base-bold font-medium">{a.title}</p>
                    <p className="text-white/40 text-xs">
                      {a.date} ·{" "}
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
                  href={s.url}
                  target='blank'
                  key={s.label}
                  className="flex items-center justify-between gap-3 border border-white/12 rounded-xl px-4 py-3 hover:border-white/25 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: s.bg }}
                    >
                       <s.icon className="text-white text-sm" />
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
                <a href='https://github.com/shohag-stack/' className="text-[#f05032]">GitHub</a>
              </p>
            </div>

            <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              FEATURED IN
            </p>
            <div className="space-y-3">
              {featured.map((f) => (
                <div key={f.title} className="flex items-center gap-6">
                  <div
                    className="flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    
                  >
                    <Image src={f.icon} alt={f.title} width={60} height={60} />
                  </div>
                  <div>
                    <p className="text-white text-base-bold font-medium">{f.title}</p>
                    <p className="text-white/40 text-xs flex items-center gap-2">
                      {f.date} ·{" "}
                      {typeof f.brand === "function"
                        ? <f.brand className="text-white w-10 h-4" />          // React Icon component
                        : <Image src={f.brand} alt="brand" width={74} height={16} />  // SVG/PNG import
                      }
                      <Link target='_blank' href={f.link} className="text-white/60 hover:text-white underline">
                        Show Post ↗
                      </Link>
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
