"use client";

import { useEffect, useState } from "react";

const TypingTitle = ({ text, speed = 90, loop = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      // Reset typing after a pause
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }
  }, [index]);

  return (
    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">
      {displayedText}
      <span className="border-r-2 border-cyan-300 animate-pulse ml-1"></span>
    </h1>
  );
};

export default TypingTitle;
