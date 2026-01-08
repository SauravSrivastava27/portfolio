import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import Section from './Section';

const Experience = () => {
    return (
        <Section id="experience" title="Experience" className="">
            <div className="max-w-4xl mx-auto space-y-12">
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                            <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                            <span className="font-mono text-sm text-zinc-500">{exp.period}</span>
                        </div>
                        <div className="text-lg text-zinc-800 font-medium mb-6">{exp.company}</div>

                        <div className="space-y-6 border-l-2 border-zinc-100 pl-6 ml-1">
                            {exp.projects.map((project, pIndex) => (
                                <div key={pIndex}>
                                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-2">{project.name}</h4>
                                    <ul className="space-y-2">
                                        {project.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="text-zinc-600 leading-relaxed text-[15px]">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
