import { CalIcon } from "@/icons/CalIcon";
import { WaIcon } from "@/icons/Waicon";
import BrowserFrame from "@/utilis/BrowserFrame";
import { Check } from "@/icons/Check";
import React from "react";
import { plans } from "@/db/pricingPlans";
import Link from "next/link";

export default function Pricing() {

  let clanedyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  let whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL

  return (
    <section id="pricing" className="bg-black py-20 md:py-28 ">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            PRICING
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Transparent Pricing
          </h2>
          <p className="text-white/45 text-sm">
            Straightforward pricing for every stage of your project. No hidden
            fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {plans.map((p) => (
            <BrowserFrame
              key={p.name}
              highlight={p.highlight}
              electro={p.highlight}
              title={p.highlight ? `"name" : "Most Popular"` : undefined}
            >
              <div className={`p-6 pb-15 ${p.highlight && "bg-[#001A12]"}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: p.accent }}>📁</span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: p.accent }}
                  >
                    {p.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">
                    {p.price}
                  </span>
                  <span className="text-white/45 text-sm">{p.per}</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed mb-5">
                  {p.desc}
                </p>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </BrowserFrame>
          ))}
        </div>

        {/* Still hesitating banner */}
        <div className="border-2 border-white/15 p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Still hesitating?
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Schedule a free 30-minute personalized demo. We'll answer all your
              questions and show you how we work.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href={clanedyUrl}
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-3 hover:bg-white/90 transition-colors"
            >
              <CalIcon /> Book a Call
            </Link>
            <span className="text-white/40 text-sm">or</span>
            <Link
              href={whatsappUrl}
              className="inline-flex items-center gap-2 bg-[#22c55e] text-black text-sm font-semibold px-5 py-3 hover:bg-[#16a34a] transition-colors"
            >
              <WaIcon /> Chat with Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
