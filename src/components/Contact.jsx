import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTerminal } from 'react-icons/fa';

const Contact = () => {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate high-tech encryption transmission delay
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3500);
    }, 2000);
  };

  // Section 7 variants: slide in from LEFT
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
      id="contact" 
      ref={containerRef} 
      className="py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-15" />
      
      {/* Subtle Electric Blue Ambient Light Spot (Left side glow) */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0066FF]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Scroll reveal container - sliding in from LEFT */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Comms Header & Social Uplinks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-widest text-glow-cyan">SYS_SECTOR: 07 // COMMS</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Open A <span className="bg-gradient-to-r from-[#0066FF] to-[#00E5FF] bg-clip-text text-transparent">Secure Channel.</span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed font-light font-geist">
                Establish a direct link to my headquarters terminal. Drop a message to discuss development, integrations, or contract details.
              </p>
            </div>

            {/* Social details list */}
            <div className="space-y-4">
              <a 
                href="mailto:syedfiras06@gmail.com" 
                className="flex items-center gap-5 p-4 rounded bg-[#111111]/30 border border-slate-900 hover:border-[#00E5FF]/40 hover:bg-[#111111]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded border border-slate-800 bg-[#050505] flex items-center justify-center text-slate-500 group-hover:text-[#00E5FF] transition-colors duration-300">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">EMAIL UPLINK</div>
                  <div className="text-sm font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors font-mono">syedfiras06@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/syedfiras" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-4 rounded bg-[#111111]/30 border border-slate-900 hover:border-[#0066FF]/40 hover:bg-[#111111]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded border border-slate-800 bg-[#050505] flex items-center justify-center text-slate-500 group-hover:text-[#0066FF] transition-colors duration-300">
                  <FaGithub size={14} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">GITHUB PROTOCOL</div>
                  <div className="text-sm font-display font-bold text-white group-hover:text-[#0066FF] transition-colors font-mono">github.com/syedfiras</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/syedfiras7" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-4 rounded bg-[#111111]/30 border border-slate-900 hover:border-[#00E5FF]/40 hover:bg-[#111111]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded border border-slate-800 bg-[#050505] flex items-center justify-center text-slate-500 group-hover:text-[#00E5FF] transition-colors duration-300">
                  <FaLinkedin size={14} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">LINKEDIN NETWORK</div>
                  <div className="text-sm font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors font-mono">linkedin.com/in/syedfiras7</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Secure Comms Terminal Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-xl p-6 sm:p-8 border border-[#00E5FF]/10 shadow-2xl relative bg-[#111111]/90">
              
              {/* Terminal window bar */}
              <div className="flex items-center gap-2 mb-8 border-b border-slate-900 pb-4 justify-between font-mono text-[9px] text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="uppercase tracking-widest">comms_uplink_shell.sh</span>
                </div>
                <span>STATUS: SECURED_CHANNEL</span>
              </div>

              {/* High-tech terminal form inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group font-mono text-xs">
                  <div className="flex items-center gap-2 border-b border-slate-900 focus-within:border-[#00E5FF] py-3.5 transition-colors">
                    <span className="text-[#0066FF] select-none">❯</span>
                    <span className="text-slate-500 select-none">ident_name:</span>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-700"
                      placeholder="ENTER_NAME"
                    />
                  </div>
                </div>

                <div className="relative group font-mono text-xs">
                  <div className="flex items-center gap-2 border-b border-slate-900 focus-within:border-[#00E5FF] py-3.5 transition-colors">
                    <span className="text-[#0066FF] select-none">❯</span>
                    <span className="text-slate-500 select-none">return_addr:</span>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-700"
                      placeholder="ENTER_EMAIL"
                    />
                  </div>
                </div>

                <div className="relative group font-mono text-xs">
                  <span className="text-slate-500 select-none block mb-2 font-mono">❯ transmission_payload:</span>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-[#050505] border border-slate-900 rounded p-4 text-white focus:outline-none focus:border-[#00E5FF] transition-colors resize-none placeholder-slate-700"
                    placeholder="> WRITE_SECURE_TRANSMISSION_PAYLOAD_HERE_"
                  />
                </div>

                {/* Submitting state button */}
                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full py-4 rounded border font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 bg-[#050505] border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>UPLINK_ENCRYPTING...</span>
                    </>
                  ) : status === 'success' ? (
                    <span className="text-[#27C93F] font-bold flex items-center gap-2">
                      ✔ PAYLOAD_TRANSMITTED_SUCCESS
                    </span>
                  ) : (
                    <span>INITIATE_TRANSFER_HANDSHAKE</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;