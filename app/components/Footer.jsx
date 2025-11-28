"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const particles = Array.from({ length: 14 });

const Footer = () => {
  return (
    <footer className="relative w-full mt-14 px-6 pb-10">

      {/* ─────────────────────────────── */}
      {/* Glowing Divider Line */}
      {/* ─────────────────────────────── */}
      <div className="w-full flex justify-center mb-10">
        <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] animate-pulse" />
      </div>

      {/* ─────────────────────────────── */}
      {/* FOOTER CONTAINER */}
      {/* ─────────────────────────────── */}
      <div
        className="
          relative mx-auto max-w-4xl rounded-3xl
          backdrop-blur-2xl bg-white/10 
          border border-white/20 
          shadow-[0_0_45px_rgba(0,255,255,0.2)]
          p-10 pt-14
        "
      >

        {/* Floating Neon Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [-15, 20, -15],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute w-[6px] h-[6px] rounded-full bg-cyan-300/50 blur-[3px]"
              style={{
                top: `${(i * 7) % 90}%`,
                left: `${10 + (i * 9) % 80}%`,
              }}
            />
          ))}
        </div>

        {/* Neon Scanline Animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Text */}
        <h3 className="text-center text-xl font-semibold text-cyan-300 tracking-wide drop-shadow-lg">
          Connect With Me
        </h3>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center items-center gap-10">
          <motion.a
            href="https://github.com/Snehaghosh29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
            className="text-slate-300 hover:text-cyan-300 transition-all duration-300"
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sneha-ghosh-65501a244"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
            className="text-slate-300 hover:text-cyan-300 transition-all duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>

        {/* © Text */}
        <p className="mt-8 text-center text-xs text-slate-400 tracking-wide">
          © {new Date().getFullYear()} compileTab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
