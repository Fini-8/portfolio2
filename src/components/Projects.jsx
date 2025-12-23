import React from 'react';
import { motion } from 'framer-motion';
import creatorflowImg from "../assets/cfai.png";
import sahaya from "../assets/sahaya.jpeg";
import expen from "../assets/expence.png";

const mainProjects = [
    {
        title: 'Gym Management App',
        description: 'A comprehensive solution for managing gym memberships, tracking workouts, and scheduling classes. Built with Ionic and Angular for cross-platform performance.',
        tech: ['Ionic', 'Angular', 'TypeScript', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: 'https://gymnetsolutions.netlify.app',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'CreatorFlow AI',
        description: 'CreatorFlow AI helps creators beat creative blocks with instant scripts, smart analysis, and scroll-stopping hooks. A complete AI-powered content creation platform.',
        tech: ['React', 'Node.js', 'Supabase', 'AI/ML'],
        image: creatorflowImg,
        link: 'https://cfai.lovable.app',
        color: 'from-purple-500 to-indigo-500'
    },
];

const additionalProjects = [
    {
        title: 'SAHAYA - Women Safety App',
        description: 'A dedicated safety application designed to help women in distress. Features include real-time location sharing, emergency alerts, and quick access to helplines.',
        tech: ['React Native', 'Geolocation', 'Emergency API'],
        image: sahaya,
        link: '',
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'TODO-list App',
        description: 'A dedicated TODO-list application designed to help list your tasks with a clean and intuitive interface.',
        tech: ['React Native', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: '',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        title: 'ExpensesTracker App',
        description: 'A personal finance application that tracks your daily expenses and visualizes spending habits.',
        tech: ['React Native'],
        image: expen,
        link: '',
        color: 'from-green-400 to-emerald-500'
    },
];

const Projects = () => {
    const renderProjectCard = (project, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    src={project.image || 'https://via.placeholder.com/500'}
                    alt={project.title}
                />
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-xs leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300"
                        >
                            View Project
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    ) : (
                        <span className="text-sm text-gray-500 font-medium italic">
                            Private / Local Project
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        <span className="text-black">Featured Projects</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                        A selection of my recent work in mobile and web development
                    </p>
                </motion.div>

                {/* Main Projects Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="h-8 w-1 bg-primary rounded-full mr-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Main Projects</h3>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {mainProjects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>

                {/* Additional Projects Section */}
                <div>
                    <div className="flex items-center mb-8">
                        <div className="h-8 w-1 bg-secondary rounded-full mr-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Additional Projects</h3>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {additionalProjects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
