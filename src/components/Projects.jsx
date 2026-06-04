import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLaptop, FaMobileAlt } from 'react-icons/fa';

const projectsList = [
  {
    id: "bifa",
    title: "BIFA Football Club Manager",
    type: "Mobile Application",
    deviceType: "mobile",
    tech: ["React Native", "Node.js", "NativeWind", "Supabase"],
    description: "A comprehensive team management system designed for BIFA Football Club. Streamlines player tracking, match scheduling, and club administration dashboards.",
    features: [
      "Real-time player registration portal",
      "Dynamic match schedule calendars",
      "Club administration metrics graphs",
      "Secure user roles for admins & players"
    ],
    github: "https://github.com/syedfiras/bifa",
    live: "https://bifa-registration-portal.netlify.app/",
    color: "#00E5FF", // Cyan glow
    align: "left" // Slide in from LEFT
  },
  {
    id: "auctionfootball",
    title: "Auction Football System",
    type: "Web Application",
    deviceType: "desktop",
    tech: ["React", "Node.js", "Supabase", "Stripe"],
    description: "A high-performance auction platform for football clubs to bid on player transfers with real-time updates and secure payments.",
    features: [
      "Live auction bidding with countdown timers",
      "Player profile cards with stats",
      "Secure Stripe payments integration",
      "Real-time notifications via websockets"
    ],
    github: "https://github.com/syedfiras/auction-football-system",
    live: "",
    color: "#00E5FF", // Cyan
    align: "right" // Slide in from RIGHT
  },
  {
    id: "codecafe",
    title: "Code Cafe Ordering System",
    type: "Web Application",
    deviceType: "desktop",
    tech: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    description: "A modern ordering web app for a tech-themed café, featuring menu browsing, cart, and order tracking.",
    features: [
      "Interactive menu with categories",
      "Cart management and checkout",
      "Order status tracking for baristas",
      "Responsive design for tablets and phones"
    ],
    github: "https://github.com/syedfiras/code-cafe-ordering",
    live: "",
    color: "#0066FF", // Electric Blue
    align: "left" // Slide in from LEFT
  },
  {
    id: "sahaya",
    title: "Sahaya Women Safety App",
    type: "Mobile Application",
    deviceType: "mobile",
    tech: ["React Native", "Geofencing", "Node.js", "Express"],
    description: "A safety application utilizing geolocation features to trigger immediate emergency alerts, helping women in distress broadcast security warnings.",
    features: [
      "One-tap emergency broadcast signals",
      "Active geofenced location updates",
      "Offline emergency message fallback options"
    ],
    github: "https://github.com/syedfiras/sahaya",
    live: "",
    color: "#FF3366", // Red/Pink
    align: "left" // Slide in from LEFT
  },
  {
    id: "gymnet",
    title: "GymNet Solutions Portal",
    type: "Mobile & Web",
    deviceType: "mobile",
    tech: ["Ionic", "Angular", "Node.js", "Supabase"],
    description: "A full-featured gym management platform supporting member tracking, work scheduling, automated invoice billing, and monthly performance logs.",
    features: [
      "Interactive class scheduler timelines",
      "Automated PDF invoice generation",
      "Trainer tracking and training planners",
      "Supabase real-time backend updates"
    ],
    github: "https://github.com/AhmedGannam/Gym-Management-App",
    live: "https://gymnetsolutions.netlify.app",
    color: "#00E5FF", // Cyan
    align: "right" // Slide in from RIGHT
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0066FF]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#00E5FF]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-widest text-glow-cyan">SYS_SECTOR: 04 // PROJECTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            Completed <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Missions.</span>
          </h2>
          <p className="text-sm text-slate-400 font-light font-geist max-w-md">
            Production builds launched in public channels. Each project details a completed code mission.
          </p>
        </div>

        {/* Alternating Project Files list */}
        <div className="space-y-36">
          {projectsList.map((project, index) => {
            const isLeft = project.align === "left";
            
            // Alternating entry variant configurations
            const itemVariants = {
              hidden: { 
                opacity: 0, 
                x: isLeft ? -150 : 150, 
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
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                {/* Column 1: Project Metadata (Position depends on alignment) */}
                <div className={`lg:col-span-6 space-y-6 ${!isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      MISSION_ID: 0{index + 1}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono" style={{ color: project.color }}>
                      {project.deviceType === "mobile" ? <FaMobileAlt size={10} /> : <FaLaptop size={10} />}
                      {project.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight hover:text-[#00E5FF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-light font-geist">
                    {project.description}
                  </p>

                  {/* Core features listing */}
                  <div className="space-y-2 bg-[#111111]/30 p-4 rounded border border-slate-900 font-geist">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Key Metrics & Features:</div>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[#00E5FF]" size={11} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack capsules */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#111111] border border-slate-900 rounded font-mono text-[10px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links triggers */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-900">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-slate-800 bg-[#111111] text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-300"
                    >
                      <FaGithub />
                      GET_SOURCE
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#0066FF] bg-[#0066FF]/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-[#0066FF] hover:shadow-[0_0_15px_rgba(0,102,255,0.3)] transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        LAUNCH_PREVIEW
                      </a>
                    )}
                  </div>
                </div>

                {/* Column 2: Cyber Dashboard Mockup Image View */}
                <div className={`lg:col-span-6 flex justify-center ${!isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    className="relative w-full max-w-md aspect-video glass-panel rounded-xl border border-slate-900 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-slate-800"
                    style={{ 
                      boxShadow: `0 10px 40px rgba(0,0,0,0.8), 0 0 2px ${project.color}33`
                    }}
                  >
                    {/* Mock Browser Header */}
                    <div className="px-4 py-2 border-b border-slate-900 flex justify-between items-center bg-[#0d0d0d] select-none text-[8px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      </div>
                      <span>{project.id}_dashboard_matrix.cfg</span>
                      <div className="w-6" />
                    </div>

                    {/* Cyber Mock Screen Content representing database panels */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-[#080808] font-mono text-[9px] relative overflow-hidden select-none">
                      {/* Grid background inside mock screen */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px]" />
                      
                      {/* Visual cyber layout elements */}
                      <div className="space-y-4 relative z-10">
                        <div className="flex justify-between items-center text-slate-500">
                          <span>SYS_SECURE_LINK: UPLINKED</span>
                          <span className="animate-pulse" style={{ color: project.color }}>● ACTIVE</span>
                        </div>
                        
                        <div className="h-0.5 w-full bg-slate-900 overflow-hidden">
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="h-full w-1/3" 
                            style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#111111] p-3 rounded border border-slate-900 space-y-2">
                            <div className="text-[8px] text-slate-500 uppercase">TELEMETRY_PORT</div>
                            <div className="text-xs text-white font-bold tracking-wider">DEV_SESSION</div>
                            <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] rounded-full" style={{ backgroundColor: project.color }} />
                            </div>
                          </div>

                          <div className="bg-[#111111] p-3 rounded border border-slate-900 space-y-2">
                            <div className="text-[8px] text-slate-500 uppercase">DECRYPT_CODE</div>
                            <div className="text-[9px] text-[#00E5FF] font-bold tracking-tight">STATUS: COMPILING</div>
                            <div className="text-[8px] text-slate-400 font-bold truncate">AES256_RSA_SHA256</div>
                          </div>
                        </div>
                      </div>

                      {/* Screen footer */}
                      <div className="flex justify-between items-center text-[7px] text-slate-600 border-t border-slate-900 pt-3 relative z-10">
                        <span>SECURITY_NODE_SF_09</span>
                        <span>v3.0.12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
