"use client";

import Image from "next/image";
import Profilepic from "../../public/sneha.png";
import TypingTitle from "./TypingTitle";
import { PROFILE } from "../constants";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

// Static, hydration-safe particle positions
const PARTICLES = [
  { top: "8%", left: "12%", size: 6, delay: 0 },
  { top: "18%", left: "34%", size: 8, delay: 0.3 },
  { top: "10%", left: "68%", size: 5, delay: 0.6 },
  { top: "26%", left: "82%", size: 7, delay: 0.9 },
  { top: "40%", left: "10%", size: 4, delay: 1.1 },
  { top: "55%", left: "20%", size: 6, delay: 1.4 },
  { top: "62%", left: "48%", size: 5, delay: 1.7 },
  { top: "72%", left: "78%", size: 7, delay: 2.0 },
  { top: "82%", left: "60%", size: 4, delay: 2.3 },
  { top: "30%", left: "52%", size: 6, delay: 2.6 },
];

const ProfileOverView = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // FIXED — JS only, no TS!
  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] mx-auto max-w-6xl px-6 py-16 lg:py-24"
      onMouseMove={handleMouseMove}
    >
      {/* Neon halo */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: [0.2, 1, 0.5], y: [0, -8, 0] }}
            transition={{
              duration: 6,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: p.top, left: p.left }}
            className="absolute"
          >
            <span
              style={{ width: p.size, height: p.size }}
              className="block rounded-full bg-cyan-300/70 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
            />
          </motion.span>
        ))}
      </div>

      {/* Cursor comet */}
      <motion.div
        className="pointer-events-none absolute -z-10"
        animate={{ x: cursorPos.x, y: cursorPos.y }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
          <div className="absolute -right-8 top-1/2 h-[2px] w-10 -translate-y-1/2 bg-gradient-to-l from-cyan-300 via-transparent to-transparent blur-[1px]" />
        </div>
      </motion.div>

      {/* CONTENT FLEX SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 justify-between">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <div className="inline-block rounded-full bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.15em] text-cyan-200/80 ring-1 ring-cyan-300/20 mb-4">
            Sneha Ghosh · Full Stack Developer
          </div>

          <div className="relative inline-block">
            <TypingTitle text="Nice to Meet You!" speed={80} />
            <div className="mt-2 h-[3px] w-40 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 blur-[1px]" />
          </div>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            I am a passionate{" "}
            <span className="text-white font-semibold">Full Stack Developer</span>{" "}
            skilled in building{" "}
            <span className="text-white font-semibold">
              responsive & SEO-friendly applications.
            </span>{" "}
            With hands-on experience as a{" "}
            <span className="text-white font-semibold">
              Web Developer Trainee at Indegene Pvt. Ltd.
            </span>
            , I build scalable solutions using Java, React.js, Node.js, Python, SQL & MongoDB.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="/Sneha.pdf"
            target="_blank"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400 px-7 py-3 font-semibold text-slate-900 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_40px_rgba(129,140,248,0.85)] hover:-translate-y-1 transition-all"
          >
            Download Resume <FaDownload />
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-cyan-400/20 blur-2xl" />
          </div>

          {/* Image wrapper */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="rounded-full p-1 bg-white/10 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_35px_rgba(15,23,42,0.8)]"
          >
            <Image
              src={Profilepic}
              alt={PROFILE.name}
              width={300}
              height={300}
              className="rounded-full object-cover ring-2 ring-cyan-300/40"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProfileOverView;
