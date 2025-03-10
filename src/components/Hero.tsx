"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="flex py-4 mb-7 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700/60 dark:bg-gray-800/60 dark:hover:bg-gray-700/60">
        <Image
          className="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:m-2"
          src="/witcher.webp"
          width={100}
          height={200}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Narasena
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I'm a Fullstack Developer with a passion for creating innovative solutions. I picked an interest in automation workflow.
          </p>
        </div>
      </div>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        I build, I create, I innovate...
      </motion.h1>
      <motion.p
        className="text-base sm:text-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}>
        Welcome to my portfolio website showcasing my passion and skills in web development.
      </motion.p>
      <motion.a
        href="#about_me"
        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
