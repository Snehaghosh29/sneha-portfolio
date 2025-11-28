"use client";

import { EXPERIENCES } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function WorkExperience() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // For parallax glow
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // For ripple effect
  const createRipple = (e) => {
    const card = e.currentTarget;
    const ripple = card.querySelector(".ripple");

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.remove("ripple-animate");
    void ripple.offsetWidth; 
    ripple.classList.add("ripple-animate");
  };

  return (
    <div className="relative py-24" onMouseMove={handleMouseMove}>

      {/*  Parallax Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePos.x}px ${mousePos.y}px,
              rgba(0,255,255,0.1),
              transparent 45%
            )
          `,
        }}
      ></div>

      {/* Title */}
      <h2 className="text-center text-4xl font-extrabold uppercase tracking-wide 
        bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text mb-16">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto space-y-20 px-6">

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
              scale: 1.03,
              rotateX: 6,
              rotateY: -6,
            }}
            onMouseEnter={createRipple}
            className="relative group p-10 rounded-3xl border border-white/20 
            backdrop-blur-2xl bg-white/10 shadow-xl
            hover:shadow-purple-700/40 transition-all duration-700
            flex flex-col md:flex-row gap-10 overflow-hidden"
            style={{ perspective: "1000px" }}
          >
            {/* Ripple Layer */}
            <div className="ripple-effect">
              <span className="ripple"></span>
            </div>

            {/* Floating Logo */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={exp.img}
                alt={exp.company}
                width={90}
                height={90}
                className="rounded-full border border-cyan-300/50 shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm opacity-80">{exp.year}</p>

              <h3 className="text-xl font-bold text-slate-100 mt-1">
                {exp.role}
              </h3>

              <span className="text-sm opacity-70">{exp.company}</span>

              <p className="my-4 leading-relaxed opacity-90">
                {exp.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 border border-cyan-300/40 rounded-full 
                    text-cyan-300 text-sm shadow-sm hover:bg-cyan-400/20 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Neon Glow */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-br from-cyan-300/10 to-purple-500/10 
              opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700 pointer-events-none">
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default WorkExperience;
