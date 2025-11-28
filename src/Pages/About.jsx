/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Exprience from "./Exprience";

import heroImg from "../assets/about_hero.png";
import founderImg from "../assets/company.png";
import whyImg from "../assets/why_choose.png";
import promiseImg from "../assets/promises.png";
import teamImg from "../assets/team.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] pt-24">
      {/* ================= HERO + WE ARE CARD ================ */}
      <section className="relative">
        {/* HERO PART */}
        <div className="relative h-[260px] md:h-[360px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="tracking-[0.35em] text-md md:text-sm uppercase mb-3 font-peckham text-blue-400"
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-4xl font-semibold"
            >
              A single partner for materials, labour & industrial solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-sm md:text-base text-gray-100"
            >
              Saurabh Corporation brings construction materials, skilled
              manpower, HVAC works and turnkey contracting under one trusted
              brand.
            </motion.p>
          </div>
        </div>

        {/* WE ARE SAURABH CORPORATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto px-4 -mt-16 md:-mt-24 relative z-20"
        >
          <div className="bg-white shadow-xl rounded-sm overflow-hidden md:grid md:grid-cols-2 mt-7 lg:mt-1">
            {/* LEFT : TEXT */}
            <div className="p-8 md:p-10 text-gray-800">
              <p className="uppercase tracking-[0.3em] text-sm text-blue-400 mb-3">
                We Are
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                Saurabh Corporation
              </h2>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                Saurabh Corporation is a one-stop solution for premium
                construction materials, verified manpower, fabrication, HVAC
                works, industrial pipeline setup, insulation services,
                waterproofing, painting, structural steel fabrication,
                commercial interiors and full turnkey project execution.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-6">
                With a mission to simplify project management for contractors,
                industries and commercial clients, we bring{" "}
                <strong>quality, reliability and timely delivery</strong> under
                one trusted brand. Our team ensures strict supervision,
                professional service and transparent work ethics—helping clients
                save time, cost and effort.
              </p>

              <p className="text-sm italic text-gray-500">
                “We believe good projects start with honest work, clear
                communication and strong on-site execution.”
              </p>

              <p className="mt-4 font-semibold text-gray-900">
                — Founder, Saurabh Corporation
              </p>
            </div>

            {/* RIGHT : OWNER IMAGE */}
            <div className="relative h-72 md:h-full">
              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======= EXPERIENCE ======= */}
      <div className="max-w-6xl mx-auto px-4 mt-12 text-blue-400">
        <Exprience />
      </div>

      {/* ================= WHY CHOOSE US ================ */}
      <section className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-sm shadow-md"
        >
          <img
            src={whyImg}
            alt="Team at work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.25em] text-3xl text-blue-400 mb-5 font-peckham">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            A trusted partner from planning to handover.
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            With over a decade of hands-on experience, we combine strong
            manpower, premium materials and modern work practices to deliver
            consistent, high-quality results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Complete Solution</h3>
              <p className="text-gray-600">
                Materials, labour, fabrication & HVAC works under one roof.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Skilled Manpower</h3>
              <p className="text-gray-600">
                Verified masons, painters, electricians, welders & supervisors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quality & Safety</h3>
              <p className="text-gray-600">
                Premium brands, proper PPE and safe site practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">On-Time Delivery</h3>
              <p className="text-gray-600">
                Planned execution, supervision and clear timelines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Transparent Working</h3>
              <p className="text-gray-600">
                Clear scope, fair pricing and GST billing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Long-Term Support</h3>
              <p className="text-gray-600">
                Reliable partner for repeat projects & maintenance.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= MEET OUR TEAM ================ */}
      <section className="max-w-6xl mx-auto px-4 mt-20 md:mt-24 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <p className="uppercase tracking-[0.25em] text-xl md:text-3xl text-blue-400 mb-3 font-peckham">
              Meet Our Team
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              A dedicated team behind every project.
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-600">
              Engineers, supervisors and site coordinators working together to
              deliver safe, timely and well-managed execution on every site.
            </p>

            <h3 className="mt-6 text-lg md:text-xl font-semibold mb-3">
              People you can rely on, even if you don’t see their faces.
            </h3>

            <p className="text-sm md:text-base text-gray-700 mb-5">
              Our team works mostly on-site and behind the scenes—planning,
              coordinating and executing your project with full responsibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
              <div>
                <h4 className="font-semibold mb-1">Project Planning</h4>
                <p className="text-gray-600">
                  BOQ, material planning & execution schedules.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Site Supervision</h4>
                <p className="text-gray-600">
                  Supervisors tracking quality & daily progress.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Technical Support</h4>
                <p className="text-gray-600">
                  Support for HVAC, insulation & fabrication.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Labour Management</h4>
                <p className="text-gray-600">
                  Skilled labour for each activity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden shadow-md"
          >
            <img
              src={teamImg}
              alt="Saurabh Corporation Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR PROMISE (SWAPPED) ================ */}
      <section className="max-w-6xl mx-auto px-4 mt-4 md:mt-6 mb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-sm shadow-md"
        >
          <img
            src={promiseImg}
            alt="Our Promise"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.25em] text-3xl text-blue-400 mb-5 font-peckham">
            Our Promise
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Commitment that goes beyond handover.
          </h2>

          <p className="text-sm md:text-base text-gray-700 mb-6">
            Har site par hum sirf kaam nahi, responsibility bhi lete hain —
            planning, BOQ, execution & after-service support.
          </p>

          <div className="space-y-3 text-sm md:text-base text-gray-700">
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Clear BOQ, scope of work & transparent costing.</p>
            </div>
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Dedicated supervisor for quality checks.</p>
            </div>
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Genuine materials with proper billing.</p>
            </div>
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Safety-first execution with PPE & safe practices.</p>
            </div>
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Regular progress updates & committed timelines.</p>
            </div>
            <div className="flex gap-3">
              <FiCheckCircle className="mt-1 text-[#7a1f26]" />
              <p>Support even after handover.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;