import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MobileShowcase from './components/MobileShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

import Footer from './components/Footer';
import TerminalAssistant from './components/TerminalAssistant';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progression for the top HUD bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Lenis for smooth momentum scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Disable scrolling when booting
    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen font-sans selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">

      
      {/* Top scroll progress hud bar */}
      {!isLoading && (
        <div 
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      )}
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            {/* Cinematic Storytelling headquarters flow */}
            <Hero />
            <About />
            <Skills />
            <MobileShowcase />
            <Projects />
            <Experience />
            <WhyWorkWithMe />
            <Contact />
            <Footer />
            <TerminalAssistant />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
