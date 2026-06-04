import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Cursor = () => {
  const prefersReduced = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let rafId;
    
    const updateMousePosition = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, input, textarea, [data-interactive="true"], [role="button"], .interactive-node');
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 8,
      height: 8,
      backgroundColor: '#0066FF',
      boxShadow: '0 0 12px #0066FF, 0 0 20px #00E5FF',
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: 'rgba(0, 229, 255, 0.1)',
      border: '1.5px solid #00E5FF',
      boxShadow: '0 0 15px rgba(0, 229, 255, 0.5)',
    }
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      width: 36,
      height: 36,
      border: '1px solid rgba(0, 229, 255, 0.25)',
      opacity: 0.8,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      border: '1.5px solid rgba(0, 102, 255, 0.6)',
      opacity: 0.1,
    }
  };

  const clickVariants = {
    false: { scale: 1, opacity: 0 },
    true: { scale: 1.8, opacity: 0.4 }
  };

  // Only render custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Inner cyber dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={ prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 1200, damping: 20, mass: 0.2 } }
      />
      
      {/* Outer target scanning ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={ prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 800, damping: 18, mass: 0.3 } }
      />
      
      {/* Laser lock-on crosshair overlay for cursor dot */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '12px' : '0px',
          height: isHovering ? '12px' : '0px',
          borderTop: '1px solid #00E5FF',
          borderBottom: '1px solid #00E5FF',
          opacity: isHovering ? 0.8 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s'
        }}
      />
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '12px' : '0px',
          height: isHovering ? '12px' : '0px',
          borderLeft: '1px solid #00E5FF',
          borderRight: '1px solid #00E5FF',
          opacity: isHovering ? 0.8 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s'
        }}
      />

      {/* Cyber pulse shockwave on click */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] border border-[#00E5FF]"
        animate={isClicking ? "true" : "false"}
        variants={clickVariants}
        initial="false"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          width: 32,
          height: 32,
          boxShadow: '0 0 10px #0066FF',
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
};

export default Cursor;