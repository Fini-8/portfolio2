import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React Native', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    { name: 'Ionic', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    { name: 'Angular', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
    { name: 'React.js', bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
    { name: 'JavaScript', bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    { name: 'Node.js', bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    { name: 'MongoDB', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    { name: 'Git / GitHub', bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        <span className="text-black">Technical Skills</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                        Technologies and tools I use to build amazing applications
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
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
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                show: { opacity: 1, scale: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-4 py-2 rounded-full ${skill.bg} ${skill.text} ${skill.border} border-2 font-medium text-xs md:text-sm transition-all duration-300 cursor-default shadow-sm hover:shadow-md`}
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
