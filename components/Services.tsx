"use client";

import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Services() {
    const { services } = content;

    return (
        <section id="services" className="section bg-secondary">
            <div className="container flex flex-col gap-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-8"
                >
                    Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background p-8 rounded-lg border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary"
                        >
                            <div className="text-4xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
