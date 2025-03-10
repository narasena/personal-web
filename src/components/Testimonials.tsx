"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  { name: "Client One", feedback: "Great work! Highly recommended." },
  { name: "Client Two", feedback: "Professional and timely delivery." },
  { name: "Client Three", feedback: "Exceeded our expectations in every way." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 px-4">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <p className="text-gray-300 italic mb-3 text-xs sm:text-sm">"{testimonial.feedback}"</p>
            <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
