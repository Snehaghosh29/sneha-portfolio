"use client";

import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useRef } from "react";

// Skill Data
const skillData = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Django", icon: SiDjango },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
];

function Skills() {
  const particlesInit = async () => {};

  return (
    <section className="relative py-32 overflow-hidden" id="skills">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('/neon-grid.svg')] opacity-[0.15] pointer-events-none"></div>

      <Particles
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { opacity: 0 },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 35 },
            size: { value: 2 },
            color: { value: "#00eaff" },
            links: {
              enable: true,
              distance: 120,
              color: "#00eaff",
              opacity: 0.4,
            },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />

      {/* TITLE */}
<motion.h2
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-20 text-center text-5xl font-extrabold tracking-wide 
    bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 
    text-transparent bg-clip-text"
>
  SKILLS
</motion.h2>



      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-14 px-6">
        {skillData.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.07,
              }}
              style={{ perspective: "1200px" }}
              className="relative group backdrop-blur-2xl bg-white/5 border border-white/10 
              rounded-3xl px-10 py-14 shadow-[0_0_40px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_55px_rgba(165,105,255,0.45)]
              transition-all duration-700 flex flex-col items-center justify-center"
            >
              {/* HOLOGRAPHIC SHIMMER */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent 
              opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none"></div>

              {/* NEON AURA */}
              <motion.div
                animate={{ opacity: [0.3, 0.9, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r
                from-cyan-500/20 via-purple-500/20 to-pink-500/20 
                blur-2xl opacity-30 group-hover:opacity-60"
              />

              {/* FLOATING ICON */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon
                  className="text-7xl text-cyan-300 group-hover:text-purple-400 
                transition-all duration-700 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
                />
              </motion.div>

              {/* LABEL */}
              <p className="mt-6 text-2xl font-semibold text-slate-100 tracking-wide drop-shadow-lg">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
