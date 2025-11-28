/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/family.png";
import a5 from "../assets/quality.png";

const Industries = () => {
  const items = [
    {
      img: a1,
      title: "Legacy of Innovation",
      desc: "Embracing cutting-edge construction techniques since 1986, delivering excellence for over four decades.",
    },
    {
      img: a2,
      title: "RO Water Construction",
      desc: "All our construction is done using purified RO water, ensuring enhanced quality and longevity.",
    },
    {
      img: a3,
      title: "20+ Successful Projects",
      desc: "With over 20 completed projects, we have a proven track record of delivering top-tier developments.",
    },
    {
      img: a4,
      title: "10,000+ Happy Customers",
      desc: "Our commitment to quality and satisfaction has earned the trust of more than 10,000 customers.",
    },
    {
      img: a5,
      title: "Unmatched Quality",
      desc: "We consistently deliver the highest construction quality with advanced engineering excellence.",
    },
  ];

  return (
    <section className="py-2 bg-white font-[Familjen_Grotesk]">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center mb-10 font-peckham"
      >
        Driven by Excellence
      </motion.h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">

        {items.map((item, index) => (
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

export default Industries;
