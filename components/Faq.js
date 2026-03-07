import { ChevDown } from '@/icons/ChevDown';
import React, { useState } from 'react'
import {faqs} from '@/db/faq';
export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id='faq' className="py-20 md:py-28 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            FAQ'S
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-white/45 text-sm">
            Everything you might want to know before starting a project.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border overflow-hidden transition-colors ${
                open === i
                  ? "border-[#22c55e]/50 bg-[#22c55e]/5"
                  : "border-white/12 bg-[#111]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white/80 text-sm font-mono">{f.q}</span>
                <span
                  className={`flex-shrink-0 text-white/40 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <ChevDown />
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-white/55 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
