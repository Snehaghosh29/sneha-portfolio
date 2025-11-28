"use client";

import { PROJECTS } from "../constants";
import MagneticCard from "./MagneticCard";
import { useState } from "react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // Split projects
  const initialProjects = PROJECTS.slice(0, 4);
  const extraProjects = PROJECTS.slice(4);

  return (
    <div className="relative py-24 px-6">

      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold uppercase
        tracking-wide bg-gradient-to-r from-cyan-300 to-purple-400 
        text-transparent bg-clip-text mb-16">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-10">
        
        {/* First 4 projects */}
        {initialProjects.map((project, index) => (
          <MagneticCard key={index} project={project} index={index} />
        ))}

        {/* Extra projects on click */}
        {showMore &&
          extraProjects.map((project, index) => (
            <MagneticCard 
              key={index + 4} 
              project={project} 
              index={index + 4} 
            />
          ))}
      </div>

      {/* View More / View Less button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 text-lg font-semibold rounded-xl
            bg-gradient-to-r from-cyan-500 to-purple-600
            hover:opacity-90 transition-all duration-300
            text-black shadow-lg shadow-cyan-500/30"
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
