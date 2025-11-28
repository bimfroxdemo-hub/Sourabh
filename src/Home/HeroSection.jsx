/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Import images from src/assets
import img7 from "../assets/33.png";
import img1 from "../assets/1.png";

import img3 from "../assets/3.png";

import img6 from "../assets/22.png";

// Array of images
const images = [img7,img6 ,img1,  img3];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ---- BACKGROUND SLIDER ---- */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Slider Background"
          />
        </AnimatePresence>
      </div>

      {/* ---- Dark Overlay ---- */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ---- TEXT CONTENT ---- */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight"
          >
            One-Stop Solution for{" "}
            <span className="text-blue-500">Construction & Labour</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          >
            Materials, manpower, HVAC, fabrication — everything in one trusted place.
          </motion.p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Instant Quote
          </Link>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
