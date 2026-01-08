import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import Section from './Section';

const Education = () => {
    return (
        <Section id="education" title="Education & Certifications" className="">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

                <div>
                    <h3 className="font-mono text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Education</h3>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="text-lg font-bold text-black">{edu.school}</h4>
                            <p className="text-zinc-600">{edu.degree}</p>
                            <p className="text-sm font-mono text-zinc-400 mt-1">{edu.year}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="font-mono text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Certifications</h3>
                    <ul className="space-y-3">
                        {resumeData.certifications.map((cert, index) => (
                            <li key={index} className="flex items-start gap-2 text-zinc-700">
                                <span className="mt-2 w-1.5 h-1.5 bg-zinc-300 rounded-full flex-shrink-0"></span>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </Section>
    );
};

export default Education;
