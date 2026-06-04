import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookmark, FaLaptopCode, FaTrophy, FaGraduationCap, FaPlus, FaMinus } from 'react-icons/fa';

const credentialsList = [
  {
    id: "omnimate",
    category: "INTERNSHIP",
    icon: FaLaptopCode,
    title: "Frontend Intern",
    company: "Omnimate",
    time: "2026 - Present",
    desc: "Currently working as a Frontend Intern contributing to modern frontend systems, UI architectures, and scalable components.",
    details: "Developing production interfaces, optimizing React bundles, collaborating with backend teams for database query syncs.",
    color: "#00E5FF" // Cyan
  },
  {
    id: "iit_intern",
    category: "INTERNSHIP",
    icon: FaLaptopCode,
    title: "Web Development Internship",
    company: "My Job Grow & IIT Hyderabad",
    time: "2025",
    desc: "Completed internship in collaboration with E&N IIT Hyderabad, focusing on full-stack integration and responsive client interfaces.",
    details: "Worked on real-world projects, implementing responsive designs and integrating REST APIs. Collaborated in cross-functional structures.",
    color: "#0066FF" // Electric Blue
  },
  {
    id: "itecz",
    category: "INTERNSHIP",
    icon: FaLaptopCode,
    title: "Frontend Internship",
    company: "iTecz Solutions",
    time: "Mar 2025 - Jun 2025",
    desc: "Developed mobile/web client systems using Ionic and Angular frameworks, focusing on component-driven architectures.",
    details: "Optimized component render trees, managed Angular state flows, and checked cross-platform compatibility metrics.",
    color: "#0066FF"
  },
  {
    id: "college",
    category: "ACADEMICS",
    icon: FaGraduationCap,
    title: "Computer Science Engineering Degree",
    company: "AITM College",
    time: "2023 - 2027",
    desc: "Pursuing Bachelor of Engineering. Studying database systems, algorithmic analysis, web technologies, and software engineering structures.",
    details: "Led the AITM Coding Club, organizing mock hackathons, managing student projects, and organizing tech presentations.",
    color: "#0066FF"
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  // Toggle card details drawer
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Section 5 variants: slide in from LEFT
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

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00E5FF]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-6 bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
            <span className="text-[#0066FF] font-mono text-xs uppercase tracking-widest text-glow-blue">SYS_SECTOR: 05 // CREDENTIALS</span>
            <span className="h-[1.5px] w-6 bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            Experience <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Timeline.</span>
          </h2>
          <p className="text-sm text-slate-400 font-light font-geist">
            A vertical records timeline tracking academic history, internships, and hackathons.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="relative pl-6 sm:pl-0 sm:before:absolute sm:before:left-1/2 sm:before:top-4 sm:before:bottom-4 sm:before:w-[1px] sm:before:bg-slate-900 before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-900"
        >
          {credentialsList.map((item, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = item.icon;
            const isExpanded = expandedId === item.id;
            
            return (
              <div 
                key={item.id} 
                className={`relative mb-12 sm:flex sm:items-start sm:justify-between w-full ${isEven ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Node Center Marker */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="absolute left-3.5 sm:left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full border border-slate-900 bg-[#050505] flex items-center justify-center text-slate-500 hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] cursor-pointer transition-all duration-300 z-10"
                >
                  <IconComponent size={11} />
                </div>

                {/* Content Card (fits left/right offset on desktop) */}
                <div className="w-full pl-10 sm:pl-0 sm:w-[45%]">
                  <div 
                    className="glass-panel p-5 rounded-lg border border-slate-900 hover:border-slate-800 transition-colors duration-300 relative group cursor-pointer"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Glowing Accent Bar */}
                    <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-lg bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ color: item.color, backgroundColor: `${item.color}08`, border: `1px solid ${item.color}20` }}>
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{item.time}</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-0.5 group-hover:text-[#00E5FF] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 mb-4">{item.company}</div>

                    <p className="text-xs text-slate-400 leading-relaxed font-geist font-light">
                      {item.desc}
                    </p>

                    {/* Expandable Technical logs panel */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-4 pt-4 border-t border-slate-900 space-y-3 font-geist text-xs text-slate-400 font-light"
                        >
                          <div className="font-mono text-[9px] text-[#00E5FF] uppercase tracking-widest">
                            [DEEP_LOG_TELEMETRY]
                          </div>
                          <p>{item.details}</p>
                          <div className="text-[8px] font-mono text-slate-500">
                            STATUS: NODE_COMPILATION_STABLE
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle expand indicator button */}
                    <div className="flex justify-end mt-4 pt-2 border-t border-slate-900/50">
                      <span className="inline-flex items-center gap-1.5 text-[8px] font-mono text-[#00E5FF]/80 uppercase hover:text-white">
                        {isExpanded ? (
                          <>COLLAPSE_LOG <FaMinus size={6} /></>
                        ) : (
                          <>EXPAND_LOG <FaPlus size={6} /></>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty block on the opposite side to handle spacing on desktop */}
                <div className="hidden sm:block sm:w-[45%]" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
