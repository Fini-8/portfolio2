import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["React Native Developer", "Mobile App Specialist", "UI/UX Enthusiast"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

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
    }, [text, isDeleting, loopNum]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FAFAFA]">
            {/* Background Sophistication */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50/50 rounded-full blur-[120px]" />
            </div>

            <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 p-1 rounded-full bg-white border border-gray-100 shadow-sm inline-flex items-center gap-2 pr-4"
                    >
                        <div className="flex h-8 w-8 rounded-full bg-black items-center justify-center">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                            Open for collaborations
                        </span>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col items-center">

                        {/* Profile Image with Advanced Frame */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative mb-8"
                        >
                            <div className="relative w-40 h-40 md:w-52 md:h-52">
                                {/* Decorative Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-10%] rounded-[2.5rem] md:rounded-[3.5rem] border border-dashed border-black-200"
                                />

                                {/* Image Container */}
                                <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white shadow-2xl p-2 border border-white">
                                    <div className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden  transition-all duration-700 ease-in-out">
                                        <img
                                            src="/profile.jpg"
                                            alt="Syed Firas Peerzada"
                                            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                                        />
                                    </div>
                                </div>


                            </div>
                        </motion.div>

                        {/* Bold Typography Section */}
                        <div className="max-w-4xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-[0.9]"
                            >
                                Syed Firas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900">
                                    Peerzada
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="h-8 md:h-10 mb-4"
                            >
                                <p className="text-base md:text-lg font-medium text-gray-500 tracking-tight">
                                    I am a <span className="text-black font-bold border-b-2 border-black">{text}</span>
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-[3px] h-6 bg-black ml-1 translate-y-1"
                                    />
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
                            >
                                Crafting high-performance mobile experiences with React Native.
                                Currently focused on building <span className="text-black">accessible</span> and
                                <span className="text-black"> scalable</span> digital solutions.
                            </motion.p>
                        </div>

                        {/* CTA Buttons - Premium Minimalist */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-10 py-5 bg-black text-white rounded-[1.5rem] font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10 flex items-center gap-3 group"
                            >
                                View My Work
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="px-10 py-5 bg-white text-black border-2 border-gray-100 rounded-[1.5rem] font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-3"
                            >
                                Let's Talk
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[10%] top-[20%] w-12 h-12 bg-white rounded-2xl shadow-xl border border-gray-50 hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[15%] bottom-[15%] w-8 h-8 bg-black rounded-lg shadow-xl hidden lg:block"
            />
        </section>
    );
};

export default Hero;