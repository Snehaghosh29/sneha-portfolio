"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = ["home", "skills", "projects", "experience", "contact"];

  // ⭐ Smooth Scroll Function
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
    setMenuOpen(false);
  };

  // ⭐ Scroll Progress Indicator Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Active Section Detection (Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.4 }
    );

    sections.forEach((sec) => {
      const element = document.getElementById(sec);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ⭐ Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-cyan-400 z-[999]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[998] backdrop-blur-lg bg-black/20 border-b border-white/10 shadow-md">
        {/* Floating Blob Background */}
        <div className="absolute inset-0 -z-10">
          <div className="w-56 h-56 bg-purple-500/30 rounded-full blur-3xl absolute -top-20 -left-10 animate-pulse"></div>
          <div className="w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl absolute -bottom-20 right-0 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo with Neon Style */}
          <h1
            onClick={() => handleScrollTo("home")}
            className="text-2xl font-extrabold text-cyan-300 tracking-wider cursor-pointer hover:drop-shadow-[0_0_10px_#00ffff]"
          >
            Sneha<span className="text-purple-400">.</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item)}
                className={`relative text-sm font-semibold transition-all ${
                  active === item ? "text-cyan-300" : "text-gray-300"
                }`}
              >
                {/* Neon underline hover */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-cyan-300 transition-all duration-300 ${
                    active === item
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 group-hover:scale-100"
                  }`}
                ></span>

                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-cyan-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col items-center py-6 space-y-6">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className={`text-lg font-semibold ${
                    active === item ? "text-cyan-300" : "text-gray-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
