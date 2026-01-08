import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md border-zinc-200' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-mono font-bold text-lg tracking-tight text-black">
                    {resumeData.name.toLowerCase().replace(' ', '')}
                </div>

                <nav className="hidden md:flex gap-8 items-center">
                    {['Introduction', 'Summary', 'Experience', 'Skills', 'Education'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-zinc-500 hover:text-black transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href={`mailto:${resumeData.contact.email}`}
                        className="px-4 py-2 bg-black text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
                    >
                        Start a Project
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
