"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Fullstack Web Developer",
    company: "Purwadhika Digital Tech School",
    duration: "2025 - Present",
    description: "Developing responsive web applications with modern frameworks.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-800/80
     px-4 rounded-2xl scroll-mt-20">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        Experiences
      </motion.h2>
      <div className="max-w-xl mx-auto space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-white">
              {exp.role} at {exp.company}
            </h3>
            <p className="text-gray-300 italic text-xs sm:text-sm">{exp.duration}</p>
            <p className="text-gray-200 mt-2 text-xs sm:text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
