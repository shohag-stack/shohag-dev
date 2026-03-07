import React from "react";
import Image from "next/image";
import { tools } from "@/db/tools";

export default function Tools() {
  

  return (
    <section id="tools" className=" py-20 md:py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            TOOLS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Tools I Use
          </h2>
          <p className="text-white/45 text-sm max-w-md mx-auto">
            A curated set of tools I use to design, build, and ship high-quality
            digital products.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          {tools.map((row, ri) => (
            <div key={ri} className="flex flex-wrap justify-center gap-5">
              {row.map((t) => (
                <div
                  key={t.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 overflow-hidden"
                >
                  <Image
                    src={t.icon}
                    alt={t.label}
                    width={50}
                    height={50}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
