"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedPageWrapper({ children }) {
  const [particles, setParticles] = useState([]);

  // Generate particles client-side
  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 10 + 8,
      depth: Math.random() * 40 + 10,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  // Cursor motion
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth comet motion
  const cometX = useSpring(cursorX, { stiffness: 50, damping: 20 });
  const cometY = useSpring(cursorY, { stiffness: 50, damping: 20 });

  // Rotate slightly based on movement
  const cometRotate = useSpring(0, { stiffness: 40, damping: 12 });

  const onMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    // subtle rotation logic
    const centerX = window.innerWidth / 2;
    const rotate = ((e.clientX - centerX) / centerX) * 15;
    cometRotate.set(rotate);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-slate-950"
      onMouseMove={onMove}
    >
      {/* Glow BG */}
      <motion.div
        className="fixed inset-0 -z-20 pointer-events-none 
        bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.13),transparent_70%)]"
      />

      {/* Floating Neon Particles */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(0,255,255,0.7)]"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -p.depth, 0],
              x: [0, p.depth / 2, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 6 + p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/*  CURSOR-FOLLOWING COMET STREAK  */}
      <motion.div
        className="fixed z-[200] pointer-events-none"
        style={{ x: cometX, y: cometY, rotate: cometRotate }}
      >
        {/* Comet Glow Core */}
        <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_8px_rgba(0,255,255,0.8)]" />

        {/* Comet Tail */}
        <div
          className="
            absolute -left-10 top-1/2 -translate-y-1/2 
            w-24 h-[3px] 
            bg-gradient-to-l from-cyan-300/80 to-transparent
            blur-[3px]
          "
        ></div>
      </motion.div>

      {/* Page Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
