/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FiWind,
  FiLayers,
  FiTool,
  FiCpu,
  FiHome,
  FiBox,
  FiCheckCircle,
} from "react-icons/fi";

const ACCENT = "#0ea5e9"; // sky-blue accent

const services = [
  {
    icon: <FiWind className="text-[40px]" style={{ color: ACCENT }} />,
    title: "HVAC & Industrial Ducting",
    desc: "Complete HVAC setup including GI/SS ducting, AHU installation and ventilation systems.",
    features: [
      "GI & SS Duct Fabrication",
      "AHU Installation",
      "Thermal & Acoustic Insulation",
      "Industrial Ventilation Setup",
    ],
  },
  {
    icon: <FiLayers className="text-[40px]" style={{ color: ACCENT }} />,
    title: "Hot & Cold Thermal Insulation",
    desc: "High-grade insulation for pipelines, plants, machinery and commercial buildings.",
    features: [
      "Hot & Cold Pipe Insulation",
      "Energy Saving Solutions",
      "Aluminium/SS Cladding",
      "Industrial Insulation Work",
    ],
  },
  {
    icon: <FiTool className="text-[40px]" style={{ color: ACCENT }} />,
    title: "Scaffolding & Industrial Painting",
    desc: "Reliable scaffolding with professional industrial painting and coating solutions.",
    features: [
      "Scaffolding Setup",
      "Industrial Painting",
      "Surface Preparation",
      "Anti-Corrosive Coating",
    ],
  },
  {
    icon: <FiCpu className="text-[40px]" style={{ color: ACCENT }} />,
    title: "Pipeline & Structural Fabrication",
    desc: "Fabrication & erection of pipelines, steel structures, tanks and industrial assemblies.",
    features: [
      "Pipeline Fabrication",
      "Welding & Testing",
      "MS/SS Structure Work",
      "Industrial Steel Fabrication",
    ],
  },
  {
    icon: <FiBox className="text-[40px]" style={{ color: ACCENT }} />,
    title: "Material & Labour Contracting",
    desc: "Skilled manpower and material supply for industries & construction projects.",
    features: [
      "Skilled Labour Supply",
      "Material Procurement",
      "Project Workforce",
      "Site Supervision",
    ],
  },
  {
    icon: <FiHome className="text-[40px]" style={{ color: ACCENT }} />,
    title: "Construction & Renovation",
    desc: "End-to-end construction, renovation and interior decoration services.",
    features: [
      "New Construction",
      "Renovation Work",
      "Interior Decoration",
      "Turnkey Projects",
    ],
  },
];

const Service = () => {
  return (
    <div
      className="min-h-screen pt-28 px-4 pb-20"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl text-slate-800 font-peckham mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Construction, fabrication, insulation, labour supply, HVAC, painting
            and complete industrial services — all in one place.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border border-gray-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-4 rounded-full shadow"
                  style={{ backgroundColor: `${ACCENT}22` }} // light accent bg
                >
                  {service.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-4">{service.desc}</p>

              <h3 className="font-semibold mb-3 text-slate-700 text-sm uppercase tracking-wide">
                Key Features
              </h3>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={`${service.title}-${i}`}
                    className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                  >
                    <FiCheckCircle
                      className="mt-1 flex-shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/quote"
                style={{ backgroundColor: ACCENT }}
                className="inline-block mt-6 text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium"
              >
                Request Estimate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
