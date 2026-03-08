"use client";

import Image from "next/image";

const Arrow = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── HERO ──────────────────────────────────────────────────────────────────────
export default function Hero() {

  let whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_URL
  return (
    <section id="home" className="relative min-h-screen w-full flex-1 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1420]" />
      <Image
        src="/assets/img/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-10 pt-28 pb-8 flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.06] mb-5 max-w-3xl">
          UI/UX Designer &<br />
          Full-Stack Developer
        </h1>
        <p className="text-white/65 text-base-bold sm:text-lg md:text-base-bold font-medium mb-10 max-w-[520px]">
          I&apos;m Mohammad Shohag — a UI/UX Designer and Frontend Developer
          helping startups and growing businesses launch high-performing
          websites, SaaS platforms, and product experiences.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={'/contact'}
            className="cursor-pointer inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-3 hover:bg-white/90 transition-colors"
          >
            Start a Project <Arrow />
          </a>
          <a
            href={whatsappLink}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#25d366] hover:text-white hover:bg-[#25d366] transition-colors"
          >
            <WaIcon />
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 from-black to-transparent bg-linear-to-t">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 flex flex-wrap gap-10 sm:gap-20 justify-center">
          {[
            ["7+", "Years Experience"],
            ["50+", "Projects Delivered"],
            ["100%", "Client Satisfaction"],
          ].map(([n, l]) => (
            <div key={n}>
              <p className="text-4xl sm:text-4xl font-black text-white">{n}</p>
              <p className="text-white/45 text-sm mt-1 tracking-wide">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
