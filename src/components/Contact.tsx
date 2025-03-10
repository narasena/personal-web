"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact_me" className="py-12 bg-gray-800 px-4 rounded-2xl scroll-mt-20">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        Contact Me
      </motion.h2>
      <motion.div
        className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 text-xs sm:text-sm">Name</label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 text-xs sm:text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 text-xs sm:text-sm">Message</label>
            <textarea
              className="w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm"
              placeholder="Your Message"
              rows={4}></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 p-2 sm:p-3 rounded text-white font-semibold hover:bg-blue-600 transition-colors text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}>
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
