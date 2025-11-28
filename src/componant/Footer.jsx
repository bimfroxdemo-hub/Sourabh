import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer
      className="text-white w-full"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <img src={logo} alt="Saurabh Corporation Logo" className="w-60 mb-3" />

          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted partner for construction materials, labour supply & industrial services.
          </p>

          {/* Social Icons */}
          {/* <div className="flex gap-4 mt-5 text-xl">
            <FiFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FiTwitter className="hover:text-blue-500 cursor-pointer transition" />
            <FiInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FiLinkedin className="hover:text-blue-500 cursor-pointer transition" />
          </div> */}
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-300 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-gray-300 hover:text-blue-500">
                Services
              </Link>
            </li>
            {/* <li>
              <Link to="/products" className="text-gray-300 hover:text-blue-500">
                Products
              </Link>
            </li> */}
            <li>
              <Link to="/project" className="text-gray-300 hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-blue-500 transition">HVAC & Ducting</li>
            <li className="hover:text-blue-500 transition">Insulation Works</li>
            <li className="hover:text-blue-500 transition">Fabrication</li>
            <li className="hover:text-blue-500 transition">Painting & Scaffolding</li>
            <li className="hover:text-blue-500 transition">Labour Contracting</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-4 text-white">Contact</h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            63, Mangaldeep, Rajpipla Road,<br />
            Ankleshwar, Bharuch 393001,<br />
            Gujarat, India
          </p>

          <p className="mt-3 text-gray-300 text-sm hover:text-blue-500 transition cursor-pointer">
            +91 6358900891
          </p>

          <p className="text-gray-300 text-sm hover:text-blue-500 transition cursor-pointer">
            saurabhcorporation@yahoo.com
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
        © {new Date().getFullYear()} Saurabh Corporation — All Rights Reserved. <br />Made by <a href="https://www.bimfrox.com/" className="text-green-300">BIMFROX</a>
      </div>
    </footer>
  );
};

export default Footer;
