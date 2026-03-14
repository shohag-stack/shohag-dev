'use client'
import React from 'react'
import { MenuIcon } from '@/icons/MenuIcon';
import { XIcon } from '@/icons/XIcon';
import { useState } from 'react';
import {NAV} from '@/db/nav';
import Link from 'next/link';
import PopUp from '@/components/PopUp';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/8">
       <PopUp />
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-[60px]">
        <Link
          href={'/'}
          className="text-white text-xl tracking-wide"
        >
          Shohag
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((la, index) => (
            <li key={la.label}>
              <Link
                href={`/${la.href}`}
                className="text-white/65 hover:text-white text-sm tracking-wide transition-colors"
              >
                {la.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden md:inline-flex border border-white text-white text-sm px-4 py-2 hover:bg-white hover:text-black transition-all tracking-wide"
          >
            Start Project
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {NAV.map((n) => (
            <Link
              key={n}
              href="#"
              className="text-white/75 hover:text-white text-base"
              onClick={() => setOpen(false)}
            >
              {n}
            </Link>
          ))}
          <a
            href="#"
            className="mt-2 text-center border border-white text-white text-sm py-3 hover:bg-white hover:text-black transition-all"
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
}
