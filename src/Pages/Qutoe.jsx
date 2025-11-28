import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
// import Service from "./Service";
// import Product from "./Product";
// import Project from "./Project";

// import HireLAbour from "./HireLAbour";
// import Context from "./Context";

const Qutoe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder: integrate API or email service here
    alert("Quote request submitted. We'll contact you soon.");
    setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white pt-24 px-4 pb-20">
      <div className="max-w-2xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Get Instant Quote
        </motion.h1>

        <p className="text-gray-600 text-center mb-8">
          Fill details below — we will contact with a detailed estimate.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1 flex items-center gap-2">
              <FiUser /> Full Name *
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 flex items-center gap-2">
              <FiMail /> Email *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 flex items-center gap-2">
              <FiPhone /> Phone *
            </label>
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Service / Product Type *</label>
            <select
              required
              value={form.serviceType}
              onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 bg-white"
            >
              <option value="">Select service type</option>
              <option value="materials">Construction Materials</option>
              <option value="labour">Labour Hiring</option>
              <option value="hvac">HVAC & Insulation</option>
              <option value="fabrication">Fabrication Works</option>
              <option value="painting">Painting & Scaffolding</option>
              <option value="pipeline">Pipeline Works</option>
              <option value="construction">Construction Services</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Project Details *</label>
            <textarea
              required
              rows="6"
              placeholder="Describe your project, location, timeline, budget, etc."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Submit Quote Request
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Qutoe;
