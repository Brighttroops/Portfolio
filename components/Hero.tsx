"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import content from '../data/content.json';

export default function Hero() {
    const { profile } = content;

    return (
        <section className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="container relative z-10 w-full pt-20 md:pt-0">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display pb-4"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-text-muted font-medium mb-6"
                    >
                        {profile.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-8"
                    >
                        {profile.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link href="/work" className="btn btn-primary rounded-full px-8 py-4 text-lg">View Work</Link>
                        <Link href="/#contact" className="btn btn-outline rounded-full px-8 py-4 text-lg">Contact Me</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
