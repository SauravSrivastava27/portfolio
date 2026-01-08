import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import Section from './Section';

const Skills = () => {
    return (
        <Section id="skills" title="Tech Stack" className="bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-zinc-400"><skill.icon size={18} /></span>
                                <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-black">{skill.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 text-sm bg-zinc-50 border border-zinc-200 text-zinc-700 rounded-md hover:border-zinc-400 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
