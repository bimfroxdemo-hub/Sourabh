/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section
      className="py-20 text-gray-900 text-center px-4"
      style={{
      background:
      "linear-gradient(180deg, #ffffff 0%, #d7eaff 40%, #a6cff5 100%, #7bb6ee 100%)",
      }}
      >      
      {/* Heading */}
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-3xl mb-3 font-peckham"
      >
        Need Skilled Labour or Materials?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-lg max-w-2xl mx-auto"
      >
        Contact us now for the best pricing, quick response & fast service.
      </motion.p>

      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/916358900891"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto justify-center shadow"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+916358900891"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 w-full sm:w-auto justify-center shadow"
        >
          <FiPhoneCall className="text-2xl" />
          Call
        </motion.a>

      </div>

      {/* Request Quote Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 text-lg shadow"
        >
          Request Quote
        </Link>
      </motion.div>

    </section>
  );
};

export default CTASection;
