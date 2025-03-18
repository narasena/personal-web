"use client";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about_me" className="py-12 px-2 sm:px-6 scroll-mt-20">
      <section className="bg-gray-900/80 rounded-2xl ">
        <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg px-2 w-full  sm:text-lg max-md:text-base text-gray-300">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
              <span className="font-extrabold">About Me</span>
            </h2>
            <p className="mb-4 font-light">
              I am a dedicated web developer with a background in computer science and extensive experience in crafting
              scalable, high-performance applications. My journey began with a curiosity for how things work and has
              evolved into a passion for building innovative digital solutions—from dynamic single-page applications to
              robust fullstack platforms.
            </p>
            <h2 className="font-bold text py-2">Core Skills</h2>
            <p className="mb-4 font-light">
              I specialize in modern web technologies including JavaScript, TypeScript, React, Next.js, and Node.js, as
              well as HTML, CSS, and Tailwind CSS. I continually explore new tools and frameworks to enhance user
              experiences and streamline development processes.
            </p>
            <h2 className="font-bold text py-2">Key Values</h2>
            <p className="mb-4 font-light">
              I believe in continuous learning and strive to deliver projects with precision and clarity. My work is
              defined by a commitment to timeliness, meticulous attention to detail, and clear, effective
              communication—ensuring that every project not only meets but exceeds client expectations.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
