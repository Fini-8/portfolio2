import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaNetworkWired } from 'react-icons/fa';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCodeLine, setActiveCodeLine] = useState(0);

  // Mouse coordinate tracking for interactive light glows
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Simulate typing line triggers inside code terminal
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCodeLine((prev) => (prev < 8 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const particles = React.useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5
    }));
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#050505]"
    >
      {/* Interactive Laser Glow Spot following Cursor */}
      <div 
        className="absolute hidden md:block w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px] transition-all duration-300 z-0 bg-[radial-gradient(circle,rgba(0,229,255,0.4)_0%,rgba(0,102,255,0.1)_50%,transparent_100%)]"
        style={{
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
        }}
      />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 hud-grid opacity-25 z-0" />
      
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className="absolute bg-[#00E5FF] rounded-full opacity-30"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -120, -250],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 0.8]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Holographic Status Node */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded border border-[#00E5FF]/20 bg-[#111111]/80 text-xs font-mono text-[#00E5FF] backdrop-blur-md text-glow-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
            </span>
            <span>HQ_STATUS: SECURE_UPLINK // ONLINE</span>
          </motion.div>

          {/* Large Bold Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.08] text-white tracking-tight"
          >
            Building Mobile Apps,
            <br />
            Web Platforms
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">
              & AI Experiences.
            </span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-light"
          >
            I design and develop modern digital products using React Native, React, Node.js, Supabase, and AI integrations. Engineered for high performance and sleek luxury aesthetics.
          </motion.p>

          {/* Premium Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded border border-[#0066FF] bg-[#0066FF]/10 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0066FF] hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all duration-300"
            >
              SECURE_COMMUNICATION
            </a>
            
            <a 
              href="#" // downloads resume
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded border border-slate-800 bg-[#111111]/50 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaFileDownload />
              RESUME_DAT
            </a>
          </motion.div>

          {/* Social connections HUD bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 pt-6 border-t border-slate-900 w-full max-w-md"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/syedfiras" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-[#00E5FF] transition-colors"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/syedfiras7" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-[#0066FF] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="h-1 flex-1 bg-slate-950 rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-[80%] bg-[#00E5FF]/40 rounded-full" />
            </div>
            <span className="text-[9px] font-mono text-[#00E5FF]/60 font-bold">NODE_CONNECT</span>
          </motion.div>
        </div>

        {/* Right Column: Cybernetic Console Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center"
        >
          {/* Main Terminal Frame */}
          <div className="relative w-full max-w-md glass-panel-glow rounded-xl p-5 border border-[#00E5FF]/20 shadow-2xl bg-[#111111]/90">
            {/* Header window control buttons */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <FaNetworkWired size={10} className="text-[#00E5FF]" />
                <span>firas_hq_terminal.js</span>
              </div>
            </div>

            {/* Typewriter Code Block */}
            <div className="space-y-2 font-mono text-xs text-slate-300 min-h-[220px]">
              {activeCodeLine >= 0 && (
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none text-[10px]">01</span>
                  <span><span className="text-[#00E5FF]">import</span> Supabase <span className="text-[#00E5FF]">from</span> <span className="text-emerald-500">'supabase'</span>;</span>
                </div>
              )}
              {activeCodeLine >= 1 && (
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none text-[10px]">02</span>
                  <span><span className="text-[#00E5FF]">import</span> OpenAI <span className="text-[#00E5FF]">from</span> <span className="text-emerald-500">'openai'</span>;</span>
                </div>
              )}
              {activeCodeLine >= 2 && (
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none text-[10px]">03</span>
                  <span><span className="text-[#0066FF]">const</span> <span className="text-yellow-400">devProfile</span> = {'{'}</span>
                </div>
              )}
              {activeCodeLine >= 3 && (
                <div className="flex gap-3 pl-4">
                  <span className="text-slate-600 select-none text-[10px]">04</span>
                  <span>name: <span className="text-emerald-500">'Syed Firas'</span>,</span>
                </div>
              )}
              {activeCodeLine >= 4 && (
                <div className="flex gap-3 pl-4">
                  <span className="text-slate-600 select-none text-[10px]">05</span>
                  <span>status: <span className="text-emerald-500">'building_the_future'</span>,</span>
                </div>
              )}
              {activeCodeLine >= 5 && (
                <div className="flex gap-3 pl-4">
                  <span className="text-slate-600 select-none text-[10px]">06</span>
                  <span>specialties: [<span className="text-amber-500">'React Native'</span>, <span className="text-amber-500">'AI'</span>]</span>
                </div>
              )}
              {activeCodeLine >= 6 && (
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none text-[10px]">07</span>
                  <span>{'};'}</span>
                </div>
              )}
              {activeCodeLine >= 7 && (
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none text-[10px]">08</span>
                  <span><span className="text-[#00E5FF]">export default</span> devProfile;</span>
                </div>
              )}
              
              {/* Blinking Cyber cursor */}
              <div className="flex gap-3">
                <span className="text-slate-600 select-none text-[10px]">{activeCodeLine >= 8 ? "09" : "08"}</span>
                <span className="w-1.5 h-4 bg-[#00E5FF] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Floating UI telemetry cards around the terminal */}
          <motion.div 
            className="absolute -top-5 -right-5 glass-panel px-3 py-2 rounded border border-[#00E5FF]/20 text-[9px] font-mono z-20 shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[#00E5FF]">⚡ DEPLOY_RATE</div>
            <div className="text-white font-bold font-display text-xs mt-0.5">100% SUCCESS</div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -left-4 glass-panel px-3 py-2 rounded border border-[#0066FF]/20 text-[9px] font-mono z-20 shadow-lg"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="text-[#0066FF]">📡 AI_MODEL</div>
            <div className="text-white font-bold font-display text-xs mt-0.5">INTEGRATED</div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down mouse indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 cursor-pointer"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">ENTER_HQ</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center p-1.5">
          <div className="w-1 h-1.5 bg-[#00E5FF] rounded-full mouse-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;