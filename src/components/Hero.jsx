import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const name = "Syed Firas";
    const texts = ["Syed Firas Peerzada", "React Native Dev", "Mobile Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, texts]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-8 overflow-hidden relative">
            {/* Subtle background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-cyan-100/20 rounded-full blur-3xl opacity-30" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10 gap-6 py-12">
                {/* Profile Image - Smaller */}
                <motion.div
                    className="flex justify-center relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="relative w-28 h-28 md:w-32 md:h-32">


                        {/* Image wrapper */}
                        <div className="absolute inset-2 rounded-full overflow-hidden shadow-lg bg-white">
                            <img
                                src="/profile.jpg"
                                alt="Syed Firas"
                                className="w-full h-full object-cover"
                            />
                        </div>


                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="text-center max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 shadow-sm"
                    >
                        <span className="text-sm font-medium text-black-600 tracking-wide flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for Work
                        </span>
                    </motion.div>

                    {/* Main Heading with Typing Animation */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
                        <span className="block text-gray-700 mb-1">Hi, I'm</span>
                        <div className="relative inline-block">
                            <span className="text-black">
                                {text}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block ml-1 w-[3px] h-10 md:h-12 bg-black"
                                />
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-lg md:text-xl text-gray-600 font-light mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        React Native Developer
                        <span className="mx-2">•</span>
                        Mobile App Specialist
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        I build pixel-perfect, high-performance mobile applications with a focus on smooth user experiences.
                        Currently studying at <span className="text-gray-900 font-medium">Anjuman Institute of Technology</span>,
                        passionate about turning ideas into reality through code.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View Projects
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="group px-6 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-semibold text-base hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Contact Me
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Social Links / Stats */}

                </motion.div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default Hero;