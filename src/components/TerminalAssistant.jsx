import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 10);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, onComplete]);

    return <span>{displayedText}</span>;
};

const TerminalAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: '>_ HQ PROTOCOL CORE v3.1 INITIALIZED' },
        { type: 'system', text: '>_ Host uplink established. Ask me anything about Syed Firas.' }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const endOfMessagesRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        if (trimmedCmd.toLowerCase() === 'clear') {
            setHistory([]);
            return;
        }
        if (trimmedCmd.toLowerCase() === 'exit') {
            setIsOpen(false);
            return;
        }

        setHistory(prev => [
            ...prev,
            { type: 'user', text: `> ${cmd}` },
            { type: 'thinking', text: '[DECRYPTING_QUERY_PAYLOAD]' }
        ]);
        setIsTyping(true);

        setTimeout(() => {
            const lowerQuery = trimmedCmd.toLowerCase();
            let response = '';

            if (/(who are you|about|bio|who is|experience|firas)/i.test(lowerQuery)) {
                response = "🧬 SUBJECT_FILE: SYED FIRAS\n• Role: Full Stack & Mobile App Developer\n• Academics: CS Engineering Student (2023 - 2027)\n• Focus: Cross-platform mobile UX, Generative AI nodes, backend API logic.\n• Credentials: 4 completed internships (Omnimate, iTecz Solutions, IIT Hyderabad) and several active projects launched.";
            } else if (/(skill|tech|stack|language|know|framework)/i.test(lowerQuery)) {
                response = "⚡ SYSTEM_CAPABILITIES:\n• Mobile: React Native, Ionic, Capacitor\n• Frontend: React, Tailwind CSS (v4), JavaScript\n• Backend: Node.js, Express.js, Supabase, MySQL\n• AI & Tools: OpenAI API, AI Integrations, Git/GitHub Actions";
            } else if (/(project|work|portfolio|built|made)/i.test(lowerQuery)) {
                response = "📁 MISSION_FILES:\n• BIFA Football Club Manager — React Native player tracker\n• CreatorFlow AI — Generative SEO scriptwriter web app\n• Sahaya Safety App — Geofenced SOS trigger mobile application\n• GymNet Solutions — Gym database and scheduling portal\n\nNavigate to the 'Showcase' and 'Projects' sections to interact directly.";
            } else if (/(contact|email|hire|reach|phone|message)/i.test(lowerQuery)) {
                response = "📡 SECURE_COMMUNICATION_UPLINKS:\n• Email: syedfiras06@gmail.com\n• GitHub: /syedfiras\n• LinkedIn: /in/syedfiras7\n\nSend a transmission packet via the secure terminal at the bottom of the page.";
            } else if (/(hello|hi|hey|greetings)/i.test(lowerQuery)) {
                response = "👋 Connection secure. Welcome to Firas's Headquarters Cognitive Core. Ask me about 'skills', 'projects', 'about', or 'contact'. Type 'help' for shell protocols.";
            } else if (/(help|cmd|command)/i.test(lowerQuery)) {
                response = "💻 SHELL_PROTOCOLS:\n• 'skills'   — Inspect skill matrices\n• 'projects' — Review completed missions\n• 'about'    — View developer logs\n• 'contact'  — Secure communication channels\n• 'clear'    — Clear screen log\n• 'exit'     — Close shell interface";
            } else {
                response = `⚠️ WARNING: Unknown directive "${trimmedCmd}".\nInput parameters unrecognized. Type 'help' to review shell protocols.`;
            }

            setHistory(prev => {
                const newHistory = [...prev];
                newHistory.pop(); // Remove thinking message
                return [...newHistory, { type: 'assistant', text: response, isNew: true }];
            });
        }, 600 + Math.random() * 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input && !isTyping) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#050505] border border-[#00E5FF]/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 group"
                    >
                        <FaTerminal className="w-5 h-5 text-[#00E5FF] group-hover:text-white transition-colors" />
                        <div className="absolute inset-0 rounded-full border border-[#00E5FF]/20 animate-ping" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[420px] h-[500px] flex flex-col bg-[#050505] border border-[#00E5FF]/20 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)] scanline-overlay"
                    >
                        {/* Terminal Header */}
                        <div className="bg-[#111111] px-4 py-3 flex items-center justify-between border-b border-slate-900">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <FaTerminal size={11} className="text-[#00E5FF]" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">HQ_COGNITIVE_SHELL</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 p-4 overflow-y-auto font-mono text-[11px] bg-[#050505] space-y-3 scrollbar-thin">
                            {history.map((msg, idx) => (
                                <div key={idx} className="leading-relaxed">
                                    {msg.type === 'user' ? (
                                        <div className="text-[#00E5FF] font-mono">
                                            {msg.text}
                                        </div>
                                    ) : msg.type === 'system' ? (
                                        <div className="text-slate-600 font-mono text-[10px]">
                                            {msg.text}
                                        </div>
                                    ) : msg.type === 'thinking' ? (
                                        <div className="text-[#0066FF] font-mono text-[10px] animate-pulse flex items-center gap-1.5">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                                            {msg.text}
                                        </div>
                                    ) : (
                                        <div className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                                            {msg.isNew ? (
                                                <TypewriterText text={msg.text} onComplete={() => {
                                                    setIsTyping(false);
                                                    msg.isNew = false;
                                                }} />
                                            ) : (
                                                <span>{msg.text}</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={endOfMessagesRef} />
                        </div>

                        {/* Terminal Input */}
                        <form onSubmit={handleSubmit} className="p-3 bg-[#111111] border-t border-slate-900 flex items-center gap-2">
                          <span className="text-[#0066FF] font-mono text-sm select-none">❯</span>
                          <span className="text-[10px] font-mono text-slate-500 select-none">visitor@firas_hq:~$</span>
                          <input
                              ref={inputRef}
                              type="text"
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              disabled={isTyping}
                              className="flex-1 bg-transparent text-white font-mono text-xs outline-none disabled:opacity-50 placeholder:text-slate-700"
                              autoComplete="off"
                              spellCheck="false"
                              placeholder="Type 'help' to begin..."
                          />
                        </form>
                        
                        {/* Footer stats */}
                        <div className="px-4 pb-2 bg-[#111111] text-[7px] font-mono text-slate-600 flex justify-between select-none border-t border-slate-950">
                            <span>Type 'help' for commands</span>
                            <span>COGNITION: 100% ONLINE</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalAssistant;