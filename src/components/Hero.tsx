"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col items-center justify-center min-h-screen text-center px-4 scroll-mt-20'>
      <div className='flex py-4 mb-7 flex-col text-slate-200 items-center border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-700/60 bg-gray-800/60 hover:bg-gray-700/60'>
        <Image
          className='object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:m-2'
          src='/witcher.webp'
          width={192}
          height={384}
          alt=''
          priority
          sizes='(max-width: 768px) 100vw, 192px'
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>Narasena</h5>
          <p className='mb-3 font-normal text-gray-400 text-left'>
            I am a Fullstack Developer with a passion for creating innovative solutions.
          </p>
          <p className='mb-3 font-normal text-gray-400 text-left'>
            have a keen interest in harnessing automation workflows to streamline processes and drive operational
            efficiency.
          </p>
        </div>
      </div>
      <motion.h1
        className='text-4xl sm:text-5xl font-bold mb-4 mt-8 text-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        I build, I create, I innovate...
      </motion.h1>
      <motion.p
        className='text-base sm:text-xl mb-8 text-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}>
        Welcome to my portfolio website showcasing my passion and skills in web development.
      </motion.p>
      <motion.a
        href='#about_me'
        className='px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors text-sm sm:text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
