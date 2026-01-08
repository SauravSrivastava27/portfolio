import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import Section from './Section';

const Summary = () => {
    return (
        <Section id="summary" className="">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border border-zinc-200 bg-white p-8 md:p-12 rounded-lg text-center"
                >
                    <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-light">
                        "{resumeData.summary}"
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default Summary;
