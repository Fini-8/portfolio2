import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
    {
        title: 'Web Development Internship',
        company: 'My Job Grow & IIT Hyderabad',
        date: '2025',
        description: 'Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies.',
        image: '/internship-iit.jpg',
        color: 'border-blue-500'
    },
    {
        title: 'Web Development Course',
        company: 'My Job Grow',
        date: 'October 2025',
        description: 'Successfully completed Web Development Upskilling Course, mastering full-stack concepts.',
        image: '/course-webdev.jpg',
        color: 'border-purple-500'
    },
    {
        title: 'Frontend Internship',
        company: 'iTecz Solutions',
        date: 'March 2025 - June 2025',
        description: 'Developed scalable web applications using Ionic and Angular frameworks.',
        image: '/internship-cert.jpg',
        color: 'border-cyan-500'
    }
];

const hackathons = [
    {
        title: 'CodeFest',
        role: 'Frontend Developer',
        description: 'Collaborated on building a responsive web application.',
        date: '2025',
        achievement: 'Participation',
        image: '/codefest-cert.jpg'
    },
    {
        title: 'HackPrix',
        role: 'Frontend Developer',
        description: 'Developed the user interface for a solution addressing real-world problems.',
        date: '2025',
        achievement: 'Participation',
        image: '/hackprix-cert.jpg'
    },
    {
        title: 'Innovex',
        role: 'Frontend Developer',
        description: 'Built SAHAYA - A women safety application with real-time location sharing and emergency alerts. Our innovative solution was selected among the top 10 teams.',
        date: '2025',
        achievement: 'Top 10',
        image: '/innovex-cert.jpg'
    },
    {
        title: 'AI HACKDAY BANGALURU',
        role: 'Full-Stack',
        description: 'Developed a website to help Content Creators using AI',
        date: '2025',
        achievement: 'Participation',
        image: '/Syed Firas_page-0001.jpg'
    }
];

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section id="achievements" className="py-20 relative bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        <span className="text-black">Achievements & Internships</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                        Recognition of my skills and participation in tech events
                    </p>
                </motion.div>

                {/* Internships Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-10">
                        <div className="h-8 w-1 bg-primary rounded-full mr-4" />
                        <h3 className="text-xl font-bold text-gray-900">Internships & Certifications</h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {internships.map((intern, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="h-48 overflow-hidden bg-gray-100 relative">
                                    <img
                                        className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        src={intern.image}
                                        alt={intern.title}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
                                        {intern.date}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">{intern.title}</h4>
                                    <p className="text-secondary font-medium text-xs mb-3">{intern.company}</p>
                                    <p className="text-gray-600 text-xs leading-relaxed">{intern.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hackathons Section */}
                <div>
                    <div className="flex items-center mb-10">
                        <div className="h-8 w-1 bg-secondary rounded-full mr-4" />
                        <h3 className="text-xl font-bold text-gray-900">Hackathons Attended</h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {hackathons.map((hack, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl border border-purple-100 group-hover:bg-purple-100 transition-colors duration-300">
                                        🏆
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${hack.achievement === 'Top 10'
                                        ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                        : 'bg-gray-50 text-gray-600 border-gray-200'
                                        }`}>
                                        {hack.achievement}
                                    </span>
                                </div>

                                <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{hack.title}</h4>
                                <p className="text-xs text-secondary font-medium mb-3">{hack.role}</p>
                                <p className="text-gray-600 text-xs mb-4 line-clamp-2 leading-relaxed">{hack.description}</p>

                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                                    <span>{hack.date}</span>
                                    <button
                                        onClick={() => setSelectedCertificate(hack)}
                                        className="text-primary hover:text-secondary transition-colors cursor-pointer font-medium"
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCertificate.title}</h3>
                                    <p className="text-sm text-gray-600">{selectedCertificate.role} • {selectedCertificate.date}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCertificate(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Description</h4>
                                    <p className="text-gray-600 leading-relaxed">{selectedCertificate.description}</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Certificate</h4>
                                    <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                                        <img
                                            src={selectedCertificate.image}
                                            alt={`${selectedCertificate.title} Certificate`}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${selectedCertificate.achievement === 'Top 10'
                                        ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                        : 'bg-gray-50 text-gray-600 border-gray-200'
                                        }`}>
                                        {selectedCertificate.achievement}
                                    </span>
                                    <button
                                        onClick={() => setSelectedCertificate(null)}
                                        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                                    >
                                        Close
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
