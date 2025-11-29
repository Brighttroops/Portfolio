"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Contact() {
    const { profile } = content;
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section bg-background relative overflow-hidden">
            <div className="container max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Let's Connect</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors duration-300">
                            <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Details</h3>
                            <div className="space-y-6">
                                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl">✉️</span>
                                    </div>
                                    <span className="text-lg">{profile.email}</span>
                                </a>
                                <a href={`tel:${profile.phone}`} className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl">📱</span>
                                    </div>
                                    <span className="text-lg">{profile.phone}</span>
                                </a>
                                <div className="flex items-center gap-4 text-text-muted group">
                                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <span className="text-lg">{profile.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6 bg-secondary/30 p-8 rounded-3xl border border-border/50 backdrop-blur-sm"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Full name"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-text-muted/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-text-muted/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-text-muted/50 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="w-full py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 transition-all duration-300"
                        >
                            {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
