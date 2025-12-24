import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Mobile App Development',
        description: 'Building cross-platform mobile applications using React Native with smooth performance and native feel.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        color: 'bg-black'
    },
    {
        title: 'Web Development',
        description: 'Creating responsive and modern web applications using React, Angular, and latest web technologies.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'bg-black'
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and beautiful user interfaces with focus on user experience and modern aesthetics.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        color: 'bg-black'
    },
    {
        title: 'Cross-Platform Solutions',
        description: 'Developing applications that work seamlessly across multiple platforms with a single codebase.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: 'bg-black'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
                        Offerings
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        My Services
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#FAFAFA] rounded-[2rem] p-10 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white"
                        >
                            <div className={`inline-flex p-4 rounded-xl ${service.color} text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10`}>
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                                {service.description}
                            </p>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
