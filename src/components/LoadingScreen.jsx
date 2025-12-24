import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Precise progress tracking
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        const hideLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            setTimeout(hideLoading, 2000);
        } else {
            window.addEventListener('load', () => {
                setTimeout(hideLoading, 2000);
            });
            setTimeout(hideLoading, 4000);
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 overflow-hidden"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
                    </div>

                    <div className="relative w-full max-w-lg">
                        {/* Name & Role */}
                        <div className="mb-16 overflow-hidden text-center">
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-white text-xl md:text-2xl font-black tracking-[0.2em] uppercase"
                            >
                                Syed Firas
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-[1px] w-12 bg-white/20 mx-auto my-4"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase"
                            >
                                Mobile Experience Architect
                            </motion.p>
                        </div>

                        {/* Large Architectural Counter */}
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                className="text-[8rem] md:text-[12rem] font-black text-white/5 leading-none select-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {Math.floor(progress)}
                            </motion.div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                    {Math.floor(progress)}%
                                </span>
                            </div>
                        </div>

                        {/* Scanning Line Animation */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-full h-[1px] bg-white/10 mt-12 overflow-hidden relative"
                        >
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </motion.div>

                        {/* Status Bits */}
                        <div className="mt-6 flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-600">
                            <motion.span
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                INITIALIZING_SYSTEM
                            </motion.span>
                            <motion.span
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            >
                                FETCHING_RESOURCES
                            </motion.span>
                            <motion.span
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                            >
                                COMPILING_EXPERIENCE
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
