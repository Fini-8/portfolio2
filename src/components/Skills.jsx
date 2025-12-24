import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'React Native',
    'Ionic',
    'Angular',
    'React.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Git / GitHub',
    'Supabase',
    'Nativewind CSS',
    'Tailwind CSS',
    'MySql'
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="w-full px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block"
                    >
                        Foundation
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        Technical Stack
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto mt-6 rounded-full" />
                </div>

                {/* Skills Container */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 }
                            }
                        }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, y: 10 },
                                    show: { opacity: 1, scale: 1, y: 0 }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    borderColor: '#000000'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="px-6 py-3 rounded-[1.2rem] bg-[#FAFAFA] text-gray-900 border-2 border-gray-50 font-bold text-xs transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-2 group"
                            >
                                <span className="w-1 h-1 rounded-full bg-black group-hover:bg-white transition-colors" />
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
