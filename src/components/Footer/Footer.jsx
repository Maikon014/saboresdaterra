import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";



const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <img src={Logo} alt="" className="max-w-[100px]" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                0800 714 2024
              </p>
              <p className="flex items-center gap-2 mt-2">
                {""}
                <FaMapLocation /> Av. Brasil, SP.
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="home.html" className="text-white-200 hover:underline">Home</a>
                  </li>
                  <li>
                    <a href="about.html" className="text-white-200 hover:underline">About</a>
                  </li>
                  <li>
                    <a href="contact.html" className="text-white-200 hover:underline">Contact Us</a>
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2024. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
