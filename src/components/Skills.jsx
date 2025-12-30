import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiIonic, SiJavascript, SiTypescript, SiMongodb, SiSupabase, SiTailwindcss, SiMysql } from 'react-icons/si';

const skills = [
    { name: 'React Native', icon: FaReact },
    { name: 'Ionic', icon: SiIonic },
    { name: 'Angular', icon: FaAngular },
    { name: 'React.js', icon: FaReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git / GitHub', icon: FaGithub },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Nativewind CSS', icon: SiTailwindcss },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MySql', icon: SiMysql }
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
                        viewport={{ once: false }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 }
                            }
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
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
                                <skill.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                {skill.name}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
