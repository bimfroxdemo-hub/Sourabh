/* eslint-disable no-unused-vars */
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { FiMenu, FiX, FiPhoneCall, FiMail } from "react-icons/fi";
  import { BsWhatsapp } from "react-icons/bs";
  import logo from "../assets/logo.png";

  import { motion, AnimatePresence } from "framer-motion";

  const Header = () => {
    const [open, setOpen] = useState(false); // mobile nav
    const [contactOpen, setContactOpen] = useState(false); // contact panel

    const nav = [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/service", label: "Services" },
      { to: "/project", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ];

    const phoneNumber = "+916358900891";
    const emailAddress = "sourabhcorporation@yahoo.com";

    return (
      <>
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* ─── LOGO IMAGE ONLY ───────────────────────────── */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu + Contact Button */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-8 items-center text-lg">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="hover:text-blue-600 transition font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-600 text-gray-600 hover:bg-blue-50 transition"
              >
                <FiPhoneCall className="text-lg text-green-400" />
              </button>
            </div>

            {/* Mobile Right Side: Call + Menu */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="text-xl text-green-400"
              >
                <FiPhoneCall />
              </button>

              <button
                className="text-3xl text-gray-900"
                onClick={() => setOpen(!open)}
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-gray-100 shadow-inner overflow-hidden"
              >
                <nav className="px-4 py-4 space-y-3 text-lg">
                  {nav.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      onClick={() => setOpen(false)}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition"
                    >
                      {i.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ─── BOTTOM CONTACT PANEL (20% HEIGHT) ───────────────────── */}
        <AnimatePresence>
          {contactOpen && (
            <>
              {/* overlay */}
              <motion.div
                className="fixed inset-0 z-[55] bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setContactOpen(false)}
              />

              {/* CLOSE ICON OUTSIDE THE PANEL - CENTERED ABOVE */}
              <motion.button
                onClick={() => setContactOpen(false)}
                className="fixed bottom-[21vh] left-1/2 -translate-x-1/2 z-[70] bg-gray-600 shadow-md rounded-full p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FiX className="text-xl text-white" />
              </motion.button>

              {/* bottom drawer */}
              <motion.div
                className="fixed left-0 right-0 bottom-0 z-[60] w-full h-[20vh] max-h-72"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <div className="h-full bg-white shadow-xl border-t rounded-t-2xl px-6 py-5 flex flex-col justify-center">
                  <div className="space-y-4">
                    {/* Call */}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center gap-4 hover:text-blue-600 transition"
                    >
                      <FiPhoneCall className="text-xl md:text-2xl" />
                      <span className="text-base md:text-lg">Call</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 hover:text-green-600 transition"
                    >
                      <BsWhatsapp className="text-xl md:text-2xl" />
                      <span className="text-base md:text-lg">WhatsApp</span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="flex items-center gap-4 hover:text-purple-600 transition"
                    >
                      <FiMail className="text-xl md:text-2xl" />
                      <span className="text-base md:text-lg">Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  };

  export default Header;
