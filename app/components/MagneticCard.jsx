"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

//  Stable particle positions (NO randomness — avoids hydration error)
const PARTICLES = [
  { top: "10%", left: "20%" },
  { top: "30%", left: "70%" },
  { top: "60%", left: "15%" },
  { top: "80%", left: "50%" },
  { top: "50%", left: "90%" },
  { top: "20%", left: "40%" },
  { top: "70%", left: "75%" },
  { top: "40%", left: "10%" },
];

const MagneticCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX);
    y.set(offsetY);
  };

  const resetMagnetic = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMagnetic}
      className="relative p-6 rounded-3xl bg-white/5 border border-white/20 
      shadow-xl backdrop-blur-xl cursor-pointer overflow-hidden 
      transition-all duration-500 group"
    >
      {/* Neon Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 
        bg-gradient-to-br from-cyan-300/20 to-purple-500/20 
        blur-xl transition-all duration-700 pointer-events-none">
      </div>

      {/* ⭐ Stable Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-[6px] h-[6px] bg-cyan-300/40 rounded-full blur-[2px]"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-white/10 
            border border-white/20 text-cyan-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default MagneticCard;
