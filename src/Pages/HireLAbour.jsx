import React from "react";
import { motion } from "framer-motion";

const labourCategories = [
  { title: "Mason", rate: "₹800-1200/day" },
  { title: "Painter", rate: "₹700-1000/day" },
  { title: "Carpenter", rate: "₹900-1300/day" },
  { title: "Plumber", rate: "₹800-1200/day" },
  { title: "Electrician", rate: "₹900-1300/day" },
  { title: "Welder", rate: "₹1000-1500/day" },
  { title: "Fabricator", rate: "₹1000-1500/day" },
  { title: "HVAC Technician", rate: "₹1200-1800/day" },
  { title: "Supervisor", rate: "₹1500-2500/day" },
];

const HireLabour = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Hire Skilled Labour
        </motion.h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Verified workers with ID proof & PPE — hire for short-term or long-term projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {labourCategories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-red-600 font-semibold mb-4">{c.rate}</p>
              <a
                href="/quote"
                className="inline-block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Book Labour?</h2>
          <p className="text-gray-600 mb-4">
            Fill the quote form with your project details and preferred labour type.
          </p>
          <a
            href="/quote"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireLabour;
