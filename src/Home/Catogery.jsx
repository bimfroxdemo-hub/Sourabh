/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import pipeImg from "../assets/pipeline1.png"
import thermalImg from "../assets/Thermal_Insulation.png"
import hvacImg from "../assets/HVAC_Insulation.png"
import labourImg from "../assets/Labour_Contracting.png"
import expertImg from "../assets/Professional_Experts.png"
import materialImg from "../assets/Material_Supply.png"

const Catogery = () => {
const categories = [
    {
      img: pipeImg,
      title: "Pipeline & Fabrication",
      desc: "Pipeline, welding & structural fabrication.",
    },
    {
      img: thermalImg,
      title: "Thermal Insulation",
      desc: "Hot & cold insulation works for industries.",
    },
    {
      img: hvacImg,
      title: "HVAC & Insulation",
      desc: "Duct fabrication, installation & insulation.",
    },
    {
      img: labourImg,
      title: "Labour & Contracting",
      desc: "Skilled labour with supervision.",
    },
    {
      img: expertImg,
      title: "Professional Experts",
      desc: "Verified, trained and experienced manpower.",
    },
    {
      img: materialImg,
      title: "Material Supply",
      desc: "All construction materials available at best rates.",
    },
  ];


  return (
    <section className="py-14 bg-white font-[Familjen_Grotesk]">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center mb-10 font-peckham"
      >
        Category
      </motion.h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">

        {categories.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer transition-all"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-sm shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold italic text-gray-900 group-hover:text-blue-600 transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Catogery;
