import React from "react";
import figma from "@/icons/tools/figma.svg";
import sketch from "@/icons/tools/sketch.svg";
import xd from "@/icons/tools/xd.svg";
import ps from "@/icons/tools/ps.svg";
import ae from "@/icons/tools/ae.svg";
import pr from "@/icons/tools/ap.svg";
import ai from "@/icons/tools/ai.svg";
import notion from "@/icons/tools/notion.svg";
import asana from "@/icons/tools/asana.svg";
import html5 from "@/icons/tools/html.svg";
import css from "@/icons/tools/css.svg";
import tailwind from "@/icons/tools/tcss.svg";
import js from "@/icons/tools/js.svg";
import react from "@/icons/tools/react.svg";
import nextjs from "@/icons/tools/nextjs.svg";
import vscode from "@/icons/tools/vs.svg";
import github from "@/icons/tools/github.svg";
import tanStack from "@/icons/tools/tanstack.png";
import supabase from "@/icons/tools/supabase.png";
import mongodb from "@/icons/tools/mongo.svg";
import warp from "@/icons/tools/warp.svg";
import cursor from "@/icons/tools/cursor.png";
import affinity from "@/icons/tools/affinity.svg";
import Image from "next/image";


export default function Tools() {
  const rows = [
    [
      { label: "Figma", icon: figma },
      { label: "Sketch", icon: sketch },
      { label: "XD", icon: xd },
      { label: "Ps", icon: ps },
      { label: "Ae", icon: ae },
      { label: "Pr", icon: pr },
      { label: "Ai", icon: ai },
      { label: "Notion", icon: notion },
      { label: "Asana", icon: asana },
    ],
    [
      { label: "HTML5", icon: html5 },
      { label: "CSS", icon: css },
      { label: "Tailwind", icon: tailwind },
      { label: "JS", icon: js },
      { label: "React", icon: react },
      { label: "Next.js", icon: nextjs },
      { label: "Affinity", icon: affinity },
    ],
    [
      { label: "VS Code", icon: vscode },
      { label: "GitHub", icon: github },
      { label: "warp", icon: warp },
      { label: "Cursor", icon: cursor },
    ],
    [
      { label: "Supabase", icon: supabase },
      { label: "TanStack", icon: tanStack },
      { label: "MongoDB", icon: mongodb },
    ],
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
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
          {rows.map((row, ri) => (
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
