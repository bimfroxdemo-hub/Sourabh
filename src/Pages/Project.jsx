/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const highlights = [
    {
      title: "Industrial Projects",
      desc: "Pipeline, fabrication, HVAC ducting, insulation and heavy industrial execution with safety-first approach.",
    },
    {
      title: "Commercial & Offices",
      desc: "Modern interiors, partitions, ceilings, painting, electrical and complete site coordination.",
    },
    {
      title: "Material & Manpower",
      desc: "Bulk material supply and skilled labour teams for fabrication, insulation, civil and finishing works.",
    },
    {
      title: "End-to-End Execution",
      desc: "From BOQ and planning to final handover – one team responsible for quality, timeline and coordination.",
    },
  ];

  return (
    <div
      className="min-h-screen pt-28 px-4 pb-20 font-poppins"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-peckham text-center mb-4"
        >
          Projects & Site Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-center max-w-2xl mx-auto text-lg mb-10"
        >
          We are currently updating this section with real-site photos, case
          studies and completed project details.  
          <span className="block mt-1 font-semibold">
            Meanwhile, here is what we typically deliver on-site:
          </span>
        </motion.p>

        {/* HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="bg-white/90 rounded-2xl shadow-md border border-white/60 
                         px-5 py-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-[#0f172a] text-white rounded-3xl px-6 py-8 md:px-10 md:py-10 
                     shadow-2xl border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Have an upcoming project?
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-5 max-w-2xl">
            Share your drawings, BOQ or basic requirement and we&apos;ll help you
            with planning, labour support, material supply and full project
            execution across HVAC, insulation, fabrication and construction work.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
                         text-sm md:text-base font-semibold bg-white text-[#0f172a] 
                         shadow-lg hover:shadow-xl transition-all"
            >
              Discuss Your Project
            </a>
            <p className="text-xs md:text-sm text-gray-300">
              Project photos & case studies will be live here very soon.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
