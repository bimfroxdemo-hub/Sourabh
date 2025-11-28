/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaTasks,
  FaUserTie,
  FaHardHat,
  FaBriefcase,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section className="py-13 bg-transparent w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 "
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl text-center mb-10 font-peckham">
          Our Experience
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">

          {/* Years Experience */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm 
                       hover:shadow-xl transition"
          >
            <FaBriefcase className="w-12 h-12 mx-auto text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold">13+</h3>
            <p className="text-gray-700 text-sm mt-1">Years Experience</p>
          </motion.div>

          {/* Happy Clients */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm 
                       hover:shadow-xl transition"
          >
            <FaUsers className="w-12 h-12 mx-auto text-green-600 mb-3" />
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-gray-700 text-sm mt-1">Happy Clients</p>
          </motion.div>

          {/* Projects Completed */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm 
                       hover:shadow-xl transition"
          >
            <FaTasks className="w-12 h-12 mx-auto text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold">110+</h3>
            <p className="text-gray-700 text-sm mt-1">Projects Completed</p>
          </motion.div>

          {/* Skilled Labour */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm 
                       hover:shadow-xl transition"
          >
            <FaHardHat className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-gray-700 text-sm mt-1">Skilled Labour</p>
          </motion.div>

          {/* Certified Engineers */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm 
                       hover:shadow-xl transition"
          >
            <FaUserTie className="w-12 h-12 mx-auto text-purple-600 mb-3" />
            <h3 className="text-3xl font-bold">4+</h3>
            <p className="text-gray-700 text-sm mt-1">Certified Engineers</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
