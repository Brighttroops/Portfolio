"use client";

import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function About() {
    const { profile } = content;

    return (
        <section id="about" className="section bg-background">
            <div className="container flex flex-col gap-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-8 font-display"
                >
                    Meet Bright Fungula
                </motion.h2>
                <div className="flex justify-center">
                    <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl bg-neutral-900">
                        <img
                            src="/images/Avator.jpg"
                            alt="Bright Fungula"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-text-muted leading-relaxed text-center max-w-3xl mx-auto mb-8"
                >
                    <p>{profile.bio}</p>
                </motion.div>

            </div>
        </section>
    );
}
