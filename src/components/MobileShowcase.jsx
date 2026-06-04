import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWifi, FaBatteryThreeQuarters, FaShieldAlt, FaDumbbell, FaFutbol, FaAngleRight } from 'react-icons/fa';

const mobileApps = [
  {
    id: "bifa",
    name: "BIFA Football Manager",
    icon: FaFutbol,
    tagline: "Sports Roster & Club Dashboard",
    tech: ["React Native", "Node.js", "NativeWind", "Supabase"],
    description: "A comprehensive team management system designed for BIFA Football Club. Streamlines player tracking, scheduling, and admin dashboards.",
    color: "#00E5FF", // Cyan
    screenData: {
      header: "BIFA Club Manager",
      metrics: [
        { label: "Active Players", value: "24" },
        { label: "Matches Played", value: "18" },
        { label: "Win Rate", value: "78%" }
      ],
      roster: [
        { name: "Fini (ST)", status: "Active" },
        { name: "A. Gannam (CF)", status: "Active" },
        { name: "K. Benzema (ST)", status: "Suspended" }
      ],
      nextMatch: "vs FC BARCELONA - Saturday, 18:00"
    }
  },
  {
    id: "sahaya",
    name: "Sahaya Safety App",
    icon: FaShieldAlt,
    tagline: "Geofenced Emergency Trigger",
    tech: ["React Native", "Geofencing", "Node.js", "Express"],
    description: "A specialized women's safety mobile application utilizing real-time geofencing and emergency alert systems to bridge gaps in immediate support.",
    color: "#FF3366", // Glowing red/pink
    screenData: {
      header: "SAHAYA SECURE",
      coordinates: "12.9716° N, 77.5946° E",
      status: "GEO_MONITORING: ACTIVE",
      alarmStatus: "SYSTEM ARMED",
      triggerBtn: "EMERGENCY SOS"
    }
  },
  {
    id: "gym",
    name: "GymNet Solutions",
    icon: FaDumbbell,
    tagline: "Fitness Dashboard & Scheduler",
    tech: ["Ionic", "Angular", "Node.js", "Supabase"],
    description: "A full-featured gym management platform supporting registration, attendance tracking, scheduling, billing, and membership logs.",
    color: "#0066FF", // Electric Blue
    screenData: {
      header: "GymNet Portal",
      revenue: "$12,450 / Mo",
      members: "348 Active",
      classes: [
        { name: "CrossFit Sync", time: "08:00 AM", instructor: "Coach Mike" },
        { name: "Yoga Flow", time: "10:30 AM", instructor: "Coach Sarah" }
      ]
    }
  }
];

const MobileShowcase = () => {
  const containerRef = useRef(null);
  const [activeApp, setActiveApp] = useState(mobileApps[0]);

  // Section 3: slides in from LEFT
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
      id="mobile-showcase" 
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
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Realistic Interactive Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-[280px] h-[560px] rounded-[45px] border-[8px] border-[#222] bg-[#000] shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col overflow-hidden z-10">
              
              {/* Phone Status Bar Top */}
              <div className="px-6 py-3 flex justify-between items-center text-[10px] font-mono text-slate-500 bg-[#000] z-20 shrink-0 select-none">
                <span>18:54</span>
                {/* Speaker Notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-16 h-4 bg-[#000] rounded-b-xl" />
                <div className="flex items-center gap-1.5">
                  <FaWifi />
                  <FaBatteryThreeQuarters />
                </div>
              </div>

              {/* Interactive Screen viewport */}
              <div className="flex-1 bg-[#050505] relative p-4 flex flex-col font-geist overflow-hidden select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeApp.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* App Internal Header */}
                    <div className="pb-3 border-b border-slate-900 flex items-center justify-between">
                      <span className="text-xs font-display font-bold text-white uppercase tracking-wider">
                        {activeApp.screenData.header}
                      </span>
                      <activeApp.icon style={{ color: activeApp.color }} size={12} />
                    </div>

                    {/* App Internal Content View */}
                    <div className="flex-1 py-4 flex flex-col justify-start space-y-4">
                      {/* BIFA RENDER */}
                      {activeApp.id === 'bifa' && (
                        <>
                          <div className="grid grid-cols-3 gap-2">
                            {activeApp.screenData.metrics.map(m => (
                              <div key={m.label} className="bg-[#111] p-1.5 rounded border border-slate-900 text-center">
                                <div className="text-[14px] font-display font-bold text-white">{m.value}</div>
                                <div className="text-[7px] text-slate-500 font-mono uppercase">{m.label.split(' ')[0]}</div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-[#111] p-2.5 rounded border border-slate-900">
                            <div className="text-[8px] font-mono text-slate-500 mb-1.5 uppercase">Player Roster (Active)</div>
                            <div className="space-y-1.5">
                              {activeApp.screenData.roster.map(r => (
                                <div key={r.name} className="flex justify-between items-center text-[9px]">
                                  <span className="text-slate-300">{r.name}</span>
                                  <span className="text-[8px] font-mono text-[#00E5FF] px-1 bg-[#00E5FF]/5 rounded">{r.status}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-[#00E5FF]/5 border border-[#00E5FF]/20 p-2.5 rounded text-[9px] font-mono text-[#00E5FF]">
                            <span className="font-bold">NEXT_FIXTURE:</span> {activeApp.screenData.nextMatch}
                          </div>
                        </>
                      )}

                      {/* SAHAYA RENDER */}
                      {activeApp.id === 'sahaya' && (
                        <>
                          <div className="bg-[#111] p-2 rounded border border-slate-900 text-center font-mono">
                            <div className="text-[8px] text-slate-500">COORDINATE_LOG:</div>
                            <div className="text-[10px] text-white font-bold">{activeApp.screenData.coordinates}</div>
                          </div>

                          {/* SOS TRIGGER BUTTON */}
                          <div className="flex-1 flex flex-col justify-center items-center py-4">
                            <motion.button 
                              animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 10px rgba(255,51,102,0.3)', '0 0 25px rgba(255,51,102,0.6)', '0 0 10px rgba(255,51,102,0.3)'] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-24 h-24 rounded-full bg-[#FF3366] text-white font-display font-bold text-[10px] flex items-center justify-center border-4 border-black text-center uppercase tracking-widest shadow-2xl"
                            >
                              {activeApp.screenData.triggerBtn}
                            </motion.button>
                            <span className="text-[8px] font-mono text-slate-500 mt-3 animate-pulse">{activeApp.screenData.status}</span>
                          </div>

                          <div className="text-center font-mono text-[8px] text-[#FF3366] border border-[#FF3366]/20 bg-[#FF3366]/5 py-1 rounded">
                            {activeApp.screenData.alarmStatus}
                          </div>
                        </>
                      )}

                      {/* GYM RENDER */}
                      {activeApp.id === 'gym' && (
                        <>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#111] p-2 rounded border border-slate-900">
                              <div className="text-[8px] text-slate-500 font-mono">REVENUE</div>
                              <div className="text-[11px] text-white font-bold">{activeApp.screenData.revenue}</div>
                            </div>
                            <div className="bg-[#111] p-2 rounded border border-slate-900">
                              <div className="text-[8px] text-slate-500 font-mono">MEMBERS</div>
                              <div className="text-[11px] text-white font-bold">{activeApp.screenData.members}</div>
                            </div>
                          </div>

                          <div className="bg-[#111] p-2.5 rounded border border-slate-900 flex-1 flex flex-col justify-between">
                            <div className="text-[8px] font-mono text-slate-500 mb-1.5 uppercase">Schedule Logs</div>
                            <div className="space-y-1.5">
                              {activeApp.screenData.classes.map(c => (
                                <div key={c.name} className="border-b border-slate-950 pb-1 last:border-0">
                                  <div className="flex justify-between items-center text-[9px] font-bold text-slate-200">
                                    <span>{c.name}</span>
                                    <span className="text-[7px] text-[#0066FF] font-mono">{c.time}</span>
                                  </div>
                                  <div className="text-[7px] text-slate-500 font-mono">{c.instructor}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* App Internal Bottom Nav Bar */}
                    <div className="pt-2 border-t border-slate-900 flex justify-around items-center text-[8px] font-mono text-slate-500">
                      <span className="text-white font-bold">[HOME]</span>
                      <span>[LOGS]</span>
                      <span>[UPLINK]</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phone Home indicator pill */}
              <div className="h-5 bg-[#000] flex justify-center items-center pb-2 shrink-0 select-none">
                <div className="w-20 h-1 bg-[#333] rounded-full" />
              </div>
            </div>

            {/* Glowing dashboard decoration behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 rounded-full bg-[#00E5FF]/5 filter blur-[60px] pointer-events-none -z-10" />
          </div>

          {/* Right Column: Descriptions & Tab Actions */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-widest text-glow-cyan">SYS_SECTOR: 03 // MOBILE_SHOWCASE</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Mobile App <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Showcase.</span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed font-light font-geist">
                Interactive simulator showing production builds of cross-platform apps. Syed Firas architects smooth mobile user experiences utilizing React Native and Ionic frameworks. Click an option below to test.
              </p>
            </div>

            {/* Interactive Selector nodes */}
            <div className="space-y-4">
              {mobileApps.map((app) => {
                const isActive = activeApp.id === app.id;
                const SelectorIcon = app.icon;
                
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app)}
                    className={`w-full text-left p-5 rounded-lg border flex items-center justify-between group transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#111111] text-white' 
                        : 'bg-transparent border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                    style={{ borderColor: isActive ? app.color : undefined }}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded border flex items-center justify-center transition-colors"
                        style={{ 
                          borderColor: isActive ? app.color : 'rgba(255,255,255,0.05)',
                          backgroundColor: isActive ? `${app.color}10` : 'transparent',
                          color: isActive ? app.color : '#94A3B8'
                        }}
                      >
                        <SelectorIcon size={16} />
                      </div>
                      
                      <div>
                        <div className="text-sm font-display font-bold">{app.name}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">{app.tagline}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: app.color }}>
                        SIMULATE
                      </span>
                      <FaAngleRight size={12} className="text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active app metadata display */}
            <div className="p-6 rounded-lg bg-[#111111]/40 border border-slate-950">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2.5">Active App Telemetry:</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {activeApp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {activeApp.tech.map(t => (
                  <span 
                    key={t} 
                    className="px-2.5 py-1 bg-[#050505] border border-slate-900 rounded font-mono text-[10px] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileShowcase;
