import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaMobileAlt, FaBrain, FaLink, FaExpandArrowsAlt, FaPencilRuler } from 'react-icons/fa';

const strengthsList = [
  {
    id: "fullstack",
    icon: FaServer,
    title: "Full Stack Development",
    metric: "REACT + NODE.JS",
    status: "OPTIMIZED",
    desc: "Architecting end-to-end applications with secure data channels, fast response routes, and unified state managers.",
    diagnostics: "DB_SYNC: ACTIVE // RELATIONAL_MAPPING"
  },
  {
    id: "mobile",
    icon: FaMobileAlt,
    title: "Mobile App Development",
    metric: "REACT NATIVE / IONIC",
    status: "CROSS_PLATFORM",
    desc: "Engineering high-performance native iOS & Android applications with custom hardware bridges and smooth animation profiles.",
    diagnostics: "THREAD: UI_MAIN // 120_FPS_TARGET"
  },
  {
    id: "ai_integration",
    icon: FaBrain,
    title: "AI Integration",
    metric: "OPENAI API UPLINK",
    status: "INTEGRATED",
    desc: "Integrating large language models directly into client flows, building prompt routers, automation scripts, and smart assistance nodes.",
    diagnostics: "API_LATENCY: 120MS // NEURAL_LINK"
  },
  {
    id: "api_dev",
    icon: FaLink,
    title: "API Development",
    metric: "REST & CRUD ROUTERS",
    status: "ENCRYPTED",
    desc: "Designing secure, validated RESTful endpoints supporting custom middleware filters, token authentications, and high concurrency rates.",
    diagnostics: "PROTO: HTTPS // SECURITY_LOCK_AES"
  },
  {
    id: "responsive",
    icon: FaExpandArrowsAlt,
    title: "Responsive Layouts",
    metric: "TAILWIND SYSTEM v4",
    status: "FLUID_MATRIX",
    desc: "Adapting complex multi-dimensional dashboard layouts fluidly to mobile viewports, tablets, and wide-screen monitors.",
    diagnostics: "BREAKPOINTS: CSS_VARIABLES // FLEX_GRID"
  },
  {
    id: "ui_ux",
    icon: FaPencilRuler,
    title: "Modern UI/UX Design",
    metric: "SPACE & CONTRAST",
    status: "PREMIUM",
    desc: "Shaping sleek dark-mode interfaces inspired by modern product leading companies, emphasizing typography hierarchies and glassmorphism.",
    diagnostics: "THEME: DARK_LUXURY // GEIST_FONT"
  }
];

const WhyWorkWithMe = () => {
  const containerRef = useRef(null);

  // Section 6 variants: slide in from RIGHT
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      x: 150, 
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.0, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section 
      id="why-me" 
      ref={containerRef} 
      className="py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Cyan Ambient Light Spot (Right side glow) */}
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00E5FF]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Scroll reveal container - sliding in from RIGHT */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
              <span className="text-[#0066FF] font-mono text-xs uppercase tracking-widest text-glow-blue">SYS_SECTOR: 06 // TACTICAL_STRENGTHS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Why Work <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">With Me.</span>
            </h2>
            <p className="text-sm text-slate-400 font-light font-geist">
              A diagnostics dashboard of my core engineering strengths. Real-world solutions delivered with clean architecture and extreme attention to details.
            </p>
          </div>

          {/* Tactical Diagnostic Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengthsList.map((strength, index) => {
              const StrengthIcon = strength.icon;
              
              return (
                <motion.div
                  key={strength.id}
                  className="glass-panel p-5 rounded-lg border border-slate-900 hover:border-slate-800 transition-colors duration-300 relative group flex flex-col justify-between min-h-[220px]"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* Subtle hover scanner line */}
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#0066FF] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header metadata */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mb-4 pb-2 border-b border-slate-900/50">
                    <span>SECTOR_STR: 0{index + 1}</span>
                    <span className="text-[#00E5FF]">{strength.status}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded border border-slate-900 bg-[#111111] flex items-center justify-center text-slate-400 group-hover:border-[#00E5FF]/40 group-hover:text-[#00E5FF] transition-all duration-300">
                        <StrengthIcon size={14} />
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300">
                          {strength.title}
                        </h3>
                        <span className="text-[8px] font-mono text-slate-500">{strength.metric}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-geist font-light pt-1">
                      {strength.desc}
                    </p>
                  </div>

                  {/* Bottom Diagnostics Log */}
                  <div className="mt-4 pt-3 border-t border-slate-900 font-mono text-[8px] text-slate-500 flex justify-between">
                    <span>{strength.diagnostics}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
