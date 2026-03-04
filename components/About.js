import BrowserFrame from "@/utilis/BrowserFrame";

export default function About() {
  const socials = [
    { icon: "🏀", label: "Dribbble" },
    { icon: "⚫", label: "GitHub" },
    { icon: "Bē", label: "Behance", special: true },
    { icon: "in", label: "LinkedIn" },
    { icon: "𝕏", label: "Twitter" },
  ];
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-white/50 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            ABOUT ME
          </p>
          <h2 className="text-3xl sm:text-3xl font-bold text-white leading-tight mb-6">
            Designing & building
            <br />
            digital experiences
          </h2>
          <p className="text-white/60 text-sm leading-[1.8] mb-4">
            I'm a UI/UX designer and full-stack developer with 7+ years of
            experience working with top companies like JoomShaper and
            AwesomeMotive. I specialize in creating beautiful, performant web
            applications and SaaS products.
          </p>
          <p className="text-white/60 text-sm leading-[1.8]">
            When I'm not coding or designing, you'll find me exploring new
            places around the world — I'm an avid traveler who draws creative
            inspiration from diverse cultures and landscapes.
          </p>
        </div>

        {/* Right — code card with social icons */}
        <BrowserFrame title="about/skills.json">
          {/* Line-numbered code */}
          <div className="font-mono text-sm leading-loose p-0">
            <table className="w-full border-collapse">
              <tbody>
              {[
                [1, '"UI/UX Design"', "Figma, Sketch, Framer"],
                [2, '"Frontend Dev"', "React, Next.js, TypeScript, Tailwind"],
                [3, '"Full-Stack"', "MERN Stack, PostgreSQL, APIs, Supabase"],
                [
                  4,
                  '"Design Systems"',
                  "Component Libraries, Tokens, Variants",
                ],
              ].map(([ln, pos, exp]) => (
                <tr key={ln} className="border-b border-white/5">
                  <td className="pl-4 pr-3 py-3 text-white/25 text-right select-none w-8 align-top">
                    {ln}
                  </td>
                  <td className="py-3 pr-3 pl-2 border-l border-white/8 align-top">
                    <div>
                      <span className="text-purple-400">"position"</span>
                      <span className="text-white/50"> : </span>
                      <span className="text-orange-300">
                        "{pos.replace(/"/g, "")}"
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-400">"expert"</span>
                      <span className="text-white/50"> : </span>
                      <span className="text-white/70">{exp}</span>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {/* Social icons strip */}
          <div className="flex items-center gap-5 px-6 py-4 border-t border-white/10">
            {[
              { bg: "#ea4c89", label: "D", title: "Dribbble" },
              { bg: "#fff", label: "⚫", title: "GitHub", dark: true },
              { bg: "#0057ff", label: "Bē", title: "Behance" },
              { bg: "#0a66c2", label: "in", title: "LinkedIn" },
              { bg: "#fff", label: "𝕏", title: "Twitter", dark: true },
            ].map((s) => (
              <a
                href="#"
                key={s.title}
                title={s.title}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                style={{ background: s.bg, color: s.dark ? "#000" : "#fff" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </BrowserFrame>
      </div>
    </section>
  );
}
