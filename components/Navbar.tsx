"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [ ['About', '/#about'], ['Work', '/work'], ['Contact', '/#contact'] ];

  return (
    <nav aria-label="Main navigation" className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-background/85 px-5 py-3 shadow-sm shadow-black/5 backdrop-blur-xl md:px-7">
        <Link href="/" className="text-lg font-bold tracking-[-.06em]" onClick={() => setIsOpen(false)}>bright<span className="text-primary">.</span></Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-medium text-text-muted transition-colors hover:text-foreground">{label}</Link>)}
          <Link href="/#contact" className="btn btn-primary !px-5 !py-2.5 text-sm">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <button type="button" className="rounded-full border border-border px-4 py-2 text-sm font-semibold md:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        {isOpen && <div id="mobile-navigation" className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl border border-border bg-background p-4 shadow-xl md:hidden">
          {links.map(([label, href]) => <Link key={label} href={href} className="block rounded-2xl px-4 py-3 font-medium hover:bg-secondary" onClick={() => setIsOpen(false)}>{label}</Link>)}
        </div>}
      </div>
    </nav>
  );
}
