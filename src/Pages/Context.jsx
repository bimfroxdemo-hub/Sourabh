/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Context = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    const whatsappNumber = "916358900891";

    const text = `New enquiry for Sourabh Corporation
    
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="min-h-screen pt-24 px-4 pb-20"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-2">
                  Get In Touch
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Contact Us
                </h1>
                <p className="text-slate-600 text-sm md:text-base max-w-md">
                  For inquiries, quotations or site visits — reach out and we’ll
                  respond quickly.
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border bg-slate-50/60 border-slate-100 px-4 py-3 flex gap-3">
                  <FiPhone className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Call</p>
                    <p className="text-sm font-medium text-slate-900">
                      +91 6358900891
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border bg-slate-50/60 border-slate-100 px-4 py-3 flex gap-3">
                  <FiMail className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Email</p>
                    <p className="text-sm font-medium text-slate-900">
                      sourabhcorporation@yahoo.com
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border bg-slate-50/60 border-slate-100 px-4 py-3 flex gap-3">
                  <FiMapPin className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">
                      City
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      Bharuch, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              {/* HEAD OFFICE ONLY */}
              <div className="mt-2 rounded-2xl border border-dashed border-blue-200 bg-blue-50/40 px-4 py-4 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Head Office
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Gujarat
                  </p>
                  <p className="text-sm text-slate-700 leading-5">
                    Mangaldeep, Rajpipla Road,
                    <br />
                    Ankleshwar, Bharuch 393001
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              {/* OTHER CITIES */}
              <div className="rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1">
                  We’re also available in these cities
                </p>
                <p className="text-sm text-slate-800">
                  Mumbai, Maharashtra &nbsp;·&nbsp; Faizabaad, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 bg-slate-50/70 border border-slate-100 rounded-2xl p-5 md:p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <FiMessageCircle className="text-blue-600" />
                <p className="text-sm font-medium text-slate-800">
                  Share your project details
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Name <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-2.5 text-slate-400 text-sm" />
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border bg-white border-slate-200 outline-none text-sm text-slate-800 focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Email <span className="text-blue-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-lg border bg-white border-slate-200 outline-none text-sm text-slate-800 focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Phone
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border bg-white border-slate-200 outline-none text-sm text-slate-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 ..."
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Message <span className="text-blue-500">*</span>
                </label>
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border bg-white border-slate-200 outline-none text-sm text-slate-800 focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your requirement..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-green-700 active:scale-[0.99] transition inline-flex items-center justify-center gap-2"
              >
                <BsWhatsapp className="text-lg" />
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <FiMapPin className="text-blue-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Find Us on Map
            </h2>
          </div>

          <p className="text-sm text-slate-700">
            Exact location for our head office.
          </p>

          <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg border bg-slate-100 border-slate-200">
            <iframe
              title="Sourabh Corporation Location"
              src="https://www.google.com/maps?q=Mangaldeep,+Rajpipla+Road,+Ankleshwar,+Bharuch+393001,+Gujarat,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Context;
