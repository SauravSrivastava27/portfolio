import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Section = ({ id, title, children, className }) => {
    return (
        <section id={id} className={clsx("section-padding relative z-10", className)}>
            <div className="container">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
                    >
                        {title}
                    </motion.h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
