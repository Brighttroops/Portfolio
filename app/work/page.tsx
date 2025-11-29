"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '@/data/content.json';

export default function Work() {
    const { projects } = content;
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    return (
        <section className="min-h-screen pt-32 pb-12 px-6 bg-background">
            <div className="container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-16 font-display text-center"
                >
                    Engineering
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col"
                        >
                            <div className="aspect-video relative overflow-hidden bg-neutral-900">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-muted border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors mt-auto cursor-pointer"
                                >
                                    View Project →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-900 p-4 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center border border-white/10"
                        >
                            {selectedProject.image && (
                                <div className="w-full relative rounded-lg overflow-hidden mb-6">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-auto object-contain max-h-[60vh]"
                                    />
                                </div>
                            )}
                            <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                            <p className="text-xl text-primary font-display mb-6">Coming Soon</p>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-medium"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
