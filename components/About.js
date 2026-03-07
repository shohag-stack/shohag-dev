import BrowserFrame from "@/utilis/BrowserFrame";
import { FaDribbble, FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  const socials = [
  { icon: <FaDribbble size={32} />, href: "https://dribbble.com/shohag4y/", hoverColor: "#ea4c89", bg: "#1a1a1a" },
  { icon: <FaGithub size={32} />,   href: "https://github.com/shohag-stack", hoverColor: "#ffffff", bg: "#1a1a1a" },
  { icon: <FaBehance size={32} />,  href: "https://www.behance.net/shohag4y", hoverColor: "#0057ff", bg: "#1a1a1a" },
  { icon: <FaLinkedinIn size={32} />, href: "https://www.linkedin.com/in/shohag4y/", hoverColor: "#0a66c2", bg: "#1a1a1a" },
  { icon: <FaXTwitter size={32} />, href: "https://x.com/shohag4y", hoverColor: "#ffffff", bg: "#1a1a1a" },
];
  return (
    <section id="about" className=" py-20 md:py-28">
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
            {socials.map((s, i) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                href={s.href}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                style={{ backgroundColor: s.bg }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = s.hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = s.bg)
                }
              >
                <span className={`text-white text-sm`}>{s.icon}</span>
              </a>
            ))}
          </div>
        </BrowserFrame>
      </div>
    </section>
  );
}
