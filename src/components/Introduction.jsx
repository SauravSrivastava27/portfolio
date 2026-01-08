import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Introduction = () => {
    return (
        <section id="introduction" className="min-h-screen flex items-center pt-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-zinc-500 text-sm mb-4 block">
                        Based in India · {resumeData.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black leading-tight">
                        Crafting <br />
                        <span className="text-zinc-400">Digital Systems.</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
                        I build scalable data pipelines and high-performance frontend applications with a focus on engineering precision.
                    </p>

                    <div className="flex gap-4">
                        <a href="#experience" className="group px-6 py-3 bg-black text-white rounded font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
                            Check Experience <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={resumeData.contact.linkedinUrl} target="_blank" rel="noreferrer" className="px-6 py-3 border border-zinc-200 rounded font-medium hover:bg-zinc-50 transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Technical Visual - "Code" or Dashboard Snippet */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:block"
                >
                    <div className="bg-zinc-950 rounded-lg p-1 shadow-2xl border border-zinc-800 rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-zinc-900 rounded border border-white/5 p-6 font-mono text-sm leading-relaxed overflow-hidden">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 text-zinc-400">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = {"{"}</p>
                                <p className="pl-4">name: <span className="text-green-400">"{resumeData.name}"</span>,</p>
                                <p className="pl-4">role: <span className="text-green-400">"{resumeData.title}"</span>,</p>
                                <p className="pl-4">skills: [</p>
                                <p className="pl-8"><span className="text-green-400">"React"</span>, <span className="text-green-400">"Snowflake"</span>, <span className="text-green-400">"AWS"</span></p>
                                <p className="pl-4">],</p>
                                <p className="pl-4">focus: <span className="text-green-400">"Building scalable solutions"</span></p>
                                <p>{"}"};</p>
                                <p className="mt-4 text-zinc-500">// Ready to deploy</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
