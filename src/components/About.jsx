import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaUserAstronaut } from 'react-icons/fa';

const About = () => {
  const containerRef = useRef(null);

  // Alternating entry variants: Section 1 slides in from LEFT
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      x: -150, 
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

  const missionLogs = [
    {
      category: "EDUCATION",
      icon: FaGraduationCap,
      title: "Computer Science Student",
      time: "2024 - Present",
      status: "COMPLETED_SEMESTER_ACTIVE",
      details: "Pursuing a Bachelor of Engineering in Computer Science & Engineering. Deep dive into algorithms, data structures, and database engines."
    },
    {
      category: "LEARNING_JOURNEY",
      icon: FaRocket,
      title: "Self-Driven Architectureups",
      time: "2024 - Present",
      status: "CONTINUOUS_COMPILING",
      details: "Transitioned from static coding to advanced UI frameworks. Mastered state management, performance optimization, and AI integrations (OpenAI API)."
    },
    {
      category: "DEVELOPMENT_EXPERIENCE",
      icon: FaCode,
      title: "Frontend Intern & Freelance Engineer",
      time: "2024 - Present",
      status: "4_COMPLETED_INTERNSHIPS",
      details: "Delivered scalable mobile systems using Ionic, React Native, and Angular. Completed internships at Omnimate, iTecz Solutions, and E&N IIT Hyderabad."
    },
    {
      category: "PERSONAL_GROWTH",
      icon: FaUserAstronaut,
      title: "Next-Gen Innovator",
      time: "Active",
      status: "UPGRADING_MATRIX",
      details: "Applying AI technologies to everyday code problems, participating in hackathons (selected in Top 10 at Innovex for SAHAYA), building clean production architectures."
    }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Electric Blue Ambient Light Spot (Left side glow) */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Scroll reveal container - sliding in from LEFT */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Side: Identity Dashboard */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-widest text-glow-cyan">SYS_SECTOR: 01 // ABOUT</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              The <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Identity.</span>
            </h2>

            {/* Profile Frame with Cyber Details */}
            <div className="glass-panel rounded-xl p-6 border border-slate-900 relative overflow-hidden group">
              {/* Scanline bar effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0066FF] to-[#00E5FF] opacity-35 animate-[scanline_6s_linear_infinite]" />
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Visual Avatar frame */}
                <div className="relative w-24 h-24 shrink-0 rounded border border-[#00E5FF]/40 p-1 bg-[#111111] overflow-hidden">
                  <div className="absolute inset-0 bg-[#0066FF]/5" />
                  <img
                    src="/logo.png"
                    alt="Syed Firas"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#050505]/80 text-[8px] font-mono text-[#00E5FF] text-center py-0.5 border-t border-[#00E5FF]/20">
                    SYS_ACTIVE
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-display font-bold text-white">Syed Firas</h3>
                  <p className="text-xs font-mono text-[#0066FF] uppercase tracking-wider">Full Stack & Mobile Engineer</p>
                  
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#050505] border border-slate-800 text-[9px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    SECURITY_CLEARANCE: LEVEL_9
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-6 leading-relaxed font-light font-geist">
                A software engineering student with 4 internships and multiple web & mobile products launched. I specialize in crafting secure code architectures, integrating advanced language models, and shaping pixel-perfect luxury product interfaces.
              </p>

              {/* HQ Status telemetry indicators */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-900 font-mono text-[10px] text-slate-500">
                <div>
                  <span className="text-[#00E5FF]">COGNITIVE:</span> FULL_STACK
                </div>
                <div>
                  <span className="text-[#00E5FF]">LATENCY:</span> STABLE
                </div>
                <div>
                  <span className="text-[#00E5FF]">SECTOR:</span> BLR_INDIA
                </div>
                <div>
                  <span className="text-[#00E5FF]">PLATFORM:</span> CRSS_DEVICES
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Mission Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">UPLINK_MISSION_TIMELINE:</h3>
            
            <div className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-900">
              {missionLogs.map((log, index) => {
                const IconComponent = log.icon;
                return (
                  <motion.div 
                    key={log.category}
                    className="relative pl-14 group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Glowing timeline dot connector */}
                    <div className="absolute left-3.5 top-0.5 -translate-x-1/2 w-6 h-6 rounded-full border border-slate-800 bg-[#050505] flex items-center justify-center text-slate-500 group-hover:border-[#00E5FF] group-hover:text-[#00E5FF] group-hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] transition-all duration-300 z-10">
                      <IconComponent size={10} />
                    </div>

                    {/* Mission card content */}
                    <div className="glass-panel p-5 rounded-lg border border-slate-900 group-hover:border-[#0066FF]/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[9px] font-mono text-[#00E5FF] tracking-wider bg-[#0066FF]/5 border border-[#0066FF]/10 px-2 py-0.5 rounded">
                          {log.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{log.time}</span>
                      </div>
                      
                      <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                        {log.title}
                      </h4>
                      
                      <p className="text-xs text-slate-400 leading-relaxed font-geist font-light mb-3">
                        {log.details}
                      </p>

                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-500">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF]/60" />
                        <span>STATUS: {log.status}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;