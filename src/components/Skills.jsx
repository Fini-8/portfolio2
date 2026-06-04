import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaDatabase, FaBrain } from 'react-icons/fa';

const skillCategories = [
  {
    id: 'mobile',
    title: "Mobile Development",
    icon: FaMobileAlt,
    color: "#00E5FF", // Cyan glow
    skills: [
      { name: "React Native", level: "Expert", desc: "Cross-platform iOS and Android apps using native bridge optimization." },
      { name: "Ionic", level: "Expert", desc: "Hybrid web-native app structures and Capacitor build pipelines." },
      { name: "JavaScript", level: "Advanced", desc: "ES6+, asynchronous logic, and responsive APIs." }
    ]
  },
  {
    id: 'frontend',
    title: "Frontend Architecture",
    icon: FaLaptopCode,
    color: "#0066FF", // Electric Blue glow
    skills: [
      { name: "React", level: "Expert", desc: "Component architecture, hooks, state engines, and virtual DOM tuning." },
      { name: "Tailwind CSS", level: "Expert", desc: "Responsive utility workflows, customized theme systems, and animations." },
      { name: "JavaScript", level: "Advanced", desc: "Browser DOM control, events handling, and modular scripts." }
    ]
  },
  {
    id: 'backend',
    title: "Backend & Cloud Databases",
    icon: FaDatabase,
    color: "#0066FF",
    skills: [
      { name: "Node.js", level: "Advanced", desc: "Scalable backend applications and custom runtime controllers." },
      { name: "Express.js", level: "Advanced", desc: "RESTful API routes, middleware validation, and router optimization." },
      { name: "Supabase", level: "Advanced", desc: "Relational database mapping, row-level security, and authentication." }
    ]
  },
  {
    id: 'ai',
    title: "AI Integration & Tools",
    icon: FaBrain,
    color: "#00E5FF",
    skills: [
      { name: "OpenAI API", level: "Advanced", desc: "Integrating language model API calls, streaming texts, and prompt engineering." },
      { name: "AI Integrations", level: "Advanced", desc: "Automating systems with custom AI-agents, tool calls, and parser scripts." },
      { name: "Git & GitHub", level: "Expert", desc: "Branching protocols, pull request code analysis, and Actions CI/CD workflows." }
    ]
  }
];

const Skills = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  // Section 2: slides in from RIGHT
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
      id="skills" 
      ref={containerRef} 
      className="py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Cyan Ambient Light Spot (Right side glow) */}
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Scroll reveal container - sliding in from RIGHT */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid lg:grid-cols-12 gap-12 items-stretch"
        >
          {/* Left Column: Command Tab Deck */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
                <span className="text-[#0066FF] font-mono text-xs uppercase tracking-widest text-glow-blue">SYS_SECTOR: 02 // COMMAND_CENTER</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Suit <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Capabilities.</span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed font-light font-geist max-w-md">
                Select a tactical category to inspect specific technology matrices. These modules power responsive web platforms and cross-platform mobile frameworks.
              </p>
            </div>

            {/* Tactical category list buttons */}
            <div className="space-y-3 pt-4">
              {skillCategories.map((category) => {
                const CategoryIcon = category.icon;
                const isActive = activeCategory.id === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left p-4 rounded-lg border font-mono text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#111111] border-glow-blue text-[#00E5FF] shadow-[0_0_15px_rgba(0,102,255,0.1)]' 
                        : 'bg-transparent border-slate-900 text-slate-500 hover:border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <CategoryIcon size={14} className={isActive ? 'text-[#00E5FF]' : 'text-slate-600'} />
                      {category.title}
                    </span>
                    <span className="text-[10px] font-mono opacity-60">
                      {isActive ? "[SELECTED]" : "[INSPECT]"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Holographic Details Deck */}
          <div className="lg:col-span-7 flex">
            <div className="w-full relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 glass-panel p-6 sm:p-8 rounded-xl border border-slate-900 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Panel Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                        DEC_DEEP_INSPECT // {activeCategory.id.toUpperCase()}_SUITE
                      </span>
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#00E5FF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                        <span>ACTIVE_NODE</span>
                      </div>
                    </div>

                    {/* Interactive holographic cards for each skill (No progress bars!) */}
                    <div className="space-y-4">
                      {activeCategory.skills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="p-4 rounded bg-[#111111]/80 border border-slate-900 hover:border-slate-800 hover:shadow-[0_0_12px_rgba(0,229,255,0.05)] transition-all duration-300"
                        >
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-sm font-display font-bold text-white group-hover:text-[#00E5FF]">
                              {skill.name}
                            </span>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-900 text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed font-geist font-light">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Panel footer */}
                  <div className="pt-4 border-t border-slate-900 font-mono text-[9px] text-slate-500 flex justify-between">
                    <span>CAPACITY: 100% OPERATIONAL</span>
                    <span>UPLINKED: {activeCategory.skills.length}_MODULES</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;