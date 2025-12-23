import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Hide loading screen after minimum time and when page is fully loaded
        const hideLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500); // Wait for progress to complete
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            setTimeout(hideLoading, 1200);
        } else {
            // Wait for page to load
            window.addEventListener('load', () => {
                setTimeout(hideLoading, 1200);
            });
            
            // Fallback timer
            setTimeout(hideLoading, 2000);
        }

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* Logo/Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold">
                                <span className="text-black">Syed Firas</span>
                            </h1>
                            <p className="text-gray-600 mt-2 text-xs md:text-sm">
                                React Native Developer
                            </p>
                        </motion.div>

                        {/* Loading spinner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex justify-center mb-8"
                        >
                           
                        </motion.div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: '200px' }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mx-auto mb-2"
                        >
                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden w-[200px]">
                                <motion.div
                                    className="h-full bg-black rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                />
                            </div>
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-500 text-xs"
                        >
                            Loading...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;

