import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
    {
        title: 'Web Development Internship',
        company: 'My Job Grow & IIT Hyderabad',
        date: '2025',
        description: 'Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies and full-stack integration.',
        image: '/internship-iit.jpg',
        color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
        title: 'Web Development Course',
        company: 'My Job Grow',
        date: 'October 2025',
        description: 'Successfully completed Web Development Upskilling Course, mastering full-stack concepts, database design, and responsive UI.',
        image: '/course-webdev.jpg',
        color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
        title: 'Frontend Internship',
        company: 'iTecz Solutions',
        date: 'March 2025 - June 2025',
        description: 'Developed scalable web applications using Ionic and Angular frameworks, focusing on component-driven architecture.',
        image: '/internship-cert.jpg',
        color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
    }
];

const hackathons = [
    {
        title: 'AI HACKDAY BANGALURU',
        role: 'Full-Stack Developer',
        description: 'Developed a comprehensive platform to help Content Creators leverage AI for smart scripting and analysis.',
        date: '2025',
        achievement: 'Finalist',
        image: '/Syed Firas_page-0001.jpg',
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        details: 'Collaborated in a high-intensity environment to deliver a functional MVP within 24 hours. Focused on AI API integration and responsive frontend design.'
    },
    {
        title: 'Innovex',
        role: 'Lead Frontend Developer',
        description: 'Built SAHAYA - A women safety application with real-time location sharing and emergency alerts. Selected among top 10 teams.',
        date: '2025',
        achievement: 'Top 10',
        image: '/innovex-cert.jpg',
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        details: 'Spearheaded the frontend development of SAHAYA. Implemented complex geolocation features and emergency trigger protocols. Won recognition for UX/UI excellence.'
    },
    {
        title: 'HackPrix',
        role: 'Frontend Developer',
        description: 'Developed the user interface for a solution addressing regional social problems through tech-driven intervention.',
        date: '2025',
        achievement: 'Participation',
        image: '/hackprix-cert.jpg',
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        details: 'Focused on accessibility and local language integration to ensure the solution could be used by a wide demographic.'
    },
    {
        title: 'CodeFest',
        role: 'Frontend Developer',
        description: 'Collaborated on building a responsive web application during a high-energy development sprint.',
        date: '2025',
        achievement: 'Participation',
        image: '/codefest-cert.jpg',
        color: 'bg-slate-50 text-slate-600 border-slate-100',
        details: 'Gained hands-on experience in rapid prototyping and teamwork using modern frontend libraries.'
    }
];

const Achievements = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id="achievements" className="py-24 bg-white">
            <div className="w-full px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block"
                    >
                        Success & Learning
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        Selected Achievements
                    </h2>
                </div>

                {/* Internships & Certifications Grid */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-lg font-bold text-gray-900">Experience & Growth</h3>
                        <div className="h-[1px] flex-1 bg-gray-100 hidden sm:block" />
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {internships.map((intern, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group bg-[#FAFAFA] rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:bg-white"
                            >
                                <div className="h-60 overflow-hidden relative">
                                    <img
                                        src={intern.image}
                                        alt={intern.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md border border-gray-100">
                                            {intern.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{intern.company}</p>
                                    <h4 className="text-lg font-black text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
                                        {intern.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                        {intern.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hackathons Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-lg font-bold text-gray-900">Events & Innovation</h3>
                        <div className="h-[1px] flex-1 bg-gray-100 hidden sm:block" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                        {hackathons.map((hack, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedEvent(hack)}
                                className="group cursor-pointer bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-black transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
                            >
                                <div className="w-16 h-16 rounded-[1.5rem] bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                    </svg>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${hack.color} border mb-4`}>
                                    {hack.achievement}
                                </span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{hack.title}</h4>
                                <p className="text-gray-400 text-sm font-medium mb-6">{hack.role}</p>

                                <button className="mt-auto text-xs font-black uppercase tracking-widest text-black border-b-2 border-transparent group-hover:border-black transition-all">
                                    View details
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Split-Screen Event Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                        className="fixed inset-0 bg-white/80 backdrop-blur-xl z-[70] flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2.5rem] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row relative border border-gray-100"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-8 right-8 p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300 z-10"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Left: Dynamic Visual */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#FAFAFA]">
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Modal Right: Technical Info */}
                            <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border ${selectedEvent.color}`}>
                                    {selectedEvent.achievement}
                                </span>

                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
                                    {selectedEvent.title}
                                </h2>

                                <div className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">
                                    <span>{selectedEvent.role}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                    <span>{selectedEvent.date}</span>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-4 border-black pl-4">Perspective</h3>
                                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                            {selectedEvent.description}
                                        </p>
                                    </div>

                                    {selectedEvent.details && (
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-4 border-black pl-4">Core Contribution</h3>
                                            <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
                                                "{selectedEvent.details}"
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-full py-5 bg-black text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10"
                                    >
                                        Dismiss View
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;
