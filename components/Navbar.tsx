"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300",
            scrolled ? "pt-4" : "pt-6"
        )}>
            <div className={cn(
                "relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 backdrop-blur-md",
                scrolled ? "bg-secondary/80 border-white/10 shadow-lg w-[90%] md:w-[60%]" : "bg-transparent border-transparent w-full container"
            )}>
                <Link href="/" className="text-xl font-bold tracking-tighter text-foreground font-display">
                    Welcome
                </Link>

                <div className="flex flex-col gap-1.5 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>

                <ul className="hidden md:flex gap-8">
                    <li><Link href="/#about" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">About</Link></li>
                    <li><Link href="/work" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">Work</Link></li>
                    <li><Link href="/#contact" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">Contact</Link></li>
                </ul>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-secondary/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 border border-white/10 md:hidden shadow-2xl z-50"
                        >
                            <li><Link href="/#about" className="text-lg font-medium text-foreground block p-2" onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link href="/work" className="text-lg font-medium text-foreground block p-2" onClick={() => setIsOpen(false)}>Work</Link></li>
                            <li><Link href="/#contact" className="text-lg font-medium text-foreground block p-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
