"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Hero() {
  const { profile } = content;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" /> Independent designer & developer · Blantyre, MW
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="max-w-4xl text-[clamp(3.6rem,9vw,7.7rem)] font-bold leading-[.88] tracking-[-.075em]">
            Good ideas, <span className="text-primary">made</span> real.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .18 }} className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
            I’m {profile.name}, a product designer who builds thoughtful digital experiences from the first sketch to the final line of code.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .28 }} className="mt-9 flex flex-wrap gap-3">
            <Link href="/work" className="btn btn-primary">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link href="/#contact" className="btn btn-outline">Let’s talk</Link>
          </motion.div>
          <div className="mt-14 flex items-center gap-4 text-sm text-text-muted">
            <span className="h-px w-12 bg-border" /> Thoughtful by design. Useful by nature.
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .96, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, delay: .12 }} className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-5 -top-6 z-20 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-accent text-center text-xs font-bold uppercase leading-tight tracking-wider md:-right-8 md:h-28 md:w-28">Ideas<br/>into<br/>impact <span className="text-lg">✳</span></div>
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-[#ded9ca]">
            <Image src={profile.avatar} alt={`Portrait of ${profile.name}`} fill priority sizes="(max-width: 768px) 90vw, 40vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10 md:-left-8">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-text-muted">Currently creating</p>
            <p className="mt-1 font-semibold">Digital things that matter <span className="text-primary">↗</span></p>
          </div>
          <div className="absolute -bottom-8 right-8 -z-10 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
