import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState([]);

  const prefersReduced = useReducedMotion();
  const messages = [
    "INITIALIZING SECURITY CORE...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "LOADING HOLOGRAPHIC PANELS...",
    "CALIBRATING NEURAL NETWORKS...",
    "SYNCHRONIZING APPS & DATA...",
    "HQ INTERFACE ONLINE!"
  ];

  const logDatabase = [
    "LOG: SECURE SHELL SESSION v3.4.1 STARTED",
    "LOG: CONNECTING HOST TO SYED_FIRAS DATABASE...",
    "LOG: REACT CORE MODULE INITIATED SUCCESS",
    "LOG: TAILWIND COMPONENT STYLES LOADED",
    "LOG: FRAMER MOTION VECTOR ENGINES ACTIVE",
    "LOG: GSAP ANIMATION SCROLL TRIGGERS PRE-COMPILED",
    "LOG: UPLINKING LOCATOR TO [BANGALORE, INDIA]",
    "LOG: DOWNLOADING RESUME DATABASE ENCRYPTED",
    "LOG: AI ASSISTANT NEURAL MAPPING SYNCHRONIZED",
    "LOG: RENDERING INTERACTIVE PHONE SIMULATOR MODEL...",
    "LOG: COMPACT GRID ALIGNMENT VERIFIED",
    "LOG: SECURE TUNNEL ESTABLISHED ON PORT 8080",
    "LOG: LOADING COMPLETE. ACCESS GRANTED."
  ];

  // Progress simulation
  useEffect(() => {
    let startTime = performance.now();
    const duration = 2800;
    let animationFrame;

    // Reduce interval frequency when reduced motion
    const messageIntervalTime = prefersReduced ? 1200 : 450;
    const logIntervalTime = prefersReduced ? 500 : 200;

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, messageIntervalTime);

    // Append log entries over time
    const logInterval = setInterval(() => {
      setConsoleLogs((prev) => {
        if (prev.length < logDatabase.length) {
          return [...prev, logDatabase[prev.length]];
        }
        return prev;
      });
    }, logIntervalTime);

    const animate = (now) => {
      const elapsed = now - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        clearInterval(messageInterval);
        clearInterval(logInterval);
        if (containerRef.current) {
          containerRef.current.style.transition = 'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)';
          containerRef.current.style.opacity = '0';
          containerRef.current.style.filter = 'blur(20px)';
        }
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      clearInterval(messageInterval);
      clearInterval(logInterval);
    };
  }, [onComplete, prefersReduced]);

  // Canvas radar scan effect
  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const drawRadar = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
      const currentRadius = maxRadius * Math.min(progress + 0.1, 1);
      
      // Cyber target ring 1
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 + progress * 0.08})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Cyber target ring 2
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 102, 255, ${0.05 + progress * 0.05})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Cyber target ring 3 (Outer dashboard scale marks)
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 229, 255, ${0.02 + progress * 0.03})`;
      ctx.setLineDash([5, 15]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]); // Reset dash

      // Rotating sweeping line
      const sweepAngle = time * 0.8;
      const sweepX = centerX + Math.cos(sweepAngle) * currentRadius * 1.2;
      const sweepY = centerY + Math.sin(sweepAngle) * currentRadius * 1.2;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(sweepX, sweepY);
      ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - progress * 0.5)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      time += 0.02;
      animationId = requestAnimationFrame(drawRadar);
    };
    
    drawRadar();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [progress, prefersReduced]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden scanline-overlay font-geist"
    >
      {/* Background visual canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Cyber Grid Dots (HUD background) */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />

      {/* Futuristic scanning log terminal (Left side for desktop) */}
      <div className="absolute left-8 bottom-8 hidden lg:flex flex-col gap-1 w-96 h-64 font-mono text-[9px] text-[#00E5FF]/40 overflow-hidden select-none">
        <AnimatePresence>
          {consoleLogs.slice(-10).map((log, i) => (
            <motion.div
              key={log}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Headquarters telemetry (Right side for desktop) */}
      <div className="absolute right-8 top-8 hidden lg:flex flex-col items-end gap-1 font-mono text-[9px] text-[#0066FF]/50 text-right select-none">
        <div>SYS_MATRIX_UPLINK: ACTIVE</div>
        <div>COORDINATES: 12.9716° N, 77.5946° E</div>
        <div>STATION: SECURE_HEADQUARTERS_HQ</div>
        <div>ENCRYPTION: AES_256_GCM</div>
      </div>

      {/* Central UI Dashboard */}
      <div className="relative z-10 flex flex-col items-center px-6">
        
        {/* Futuristic Cyber Ring Indicator */}
        <div className="relative w-44 h-44 mb-8 flex items-center justify-center">
          <svg className="absolute w-full h-full transform -rotate-90">
            {/* Base track */}
            <circle
              cx="88"
              cy="88"
              r="76"
              stroke="#111111"
              strokeWidth="2"
              fill="transparent"
            />
            {/* Dynamic electric cyan progress indicator */}
            <motion.circle
              cx="88"
              cy="88"
              r="76"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeDasharray={2 * Math.PI * 76}
              strokeDashoffset={2 * Math.PI * 76 * (1 - progress)}
              strokeLinecap="round"
              fill="transparent"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central progress numbers */}
          <motion.div
            className="text-4xl font-display font-bold tracking-tight text-white flex flex-col items-center"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <span>{Math.floor(progress * 100)}</span>
            <span className="text-[10px] font-mono tracking-widest text-[#00E5FF]/80 uppercase mt-1">SYS_READY</span>
          </motion.div>
        </div>

        {/* Console Text Titles */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-display font-bold text-white tracking-widest uppercase mb-1">
            FIRAS<span className="text-[#00E5FF] text-glow-cyan">//HQ</span>
          </h1>
          
          <div className="h-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-xs text-[#0066FF] tracking-widest font-mono whitespace-nowrap uppercase"
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal loading bar */}
        <div className="w-56 mb-4">
          <div className="relative h-1 bg-[#111111] rounded-full overflow-hidden border border-white/5">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF] rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        <motion.div
          className="text-[9px] font-mono text-slate-600 text-center max-w-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
        >
          [ SECURE HEADQUARTERS PROTOCOL ]
        </motion.div>
      </div>

      {/* Corner UI borders */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF]/20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#00E5FF]/20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#00E5FF]/20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#00E5FF]/20 pointer-events-none" />
    </div>
  );
};

export default LoadingScreen;