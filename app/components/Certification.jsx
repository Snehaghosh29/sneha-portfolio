"use client";

import { CERTIFICATES } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";

// ⭐ IMPORTANT: import required Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// CSS required
import "swiper/css";

const Certification = () => {
  return (
    <div className="py-20">
      <h2
        className="mb-16 text-center text-4xl font-extrabold uppercase
         bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text"
      >
        Certification
      </h2>

      {/* ⭐ WORKING SLIDER WITH MODULES ⭐ */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl"
      >
        {CERTIFICATES.map((certificate, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl p-[3px]  
                bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
                hover:scale-105 transition-transform duration-500 
                w-[360px] block"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                  from-cyan-500 to-purple-600 opacity-0 blur-xl 
                  group-hover:opacity-40 transition duration-700"
                />

                <motion.div
                  whileHover={{
                    rotateX: 8,
                    rotateY: -8,
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="relative rounded-3xl overflow-hidden bg-slate-900"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.name}
                    width={360}
                    height={250}
                    className="object-cover w-[360px] h-[250px] 
                    group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certification;
