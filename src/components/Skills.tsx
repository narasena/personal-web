"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiBackendless, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { SlScreenDesktop, SlScreenTablet } from "react-icons/sl";
import { TbApi } from "react-icons/tb";

const skillsData = [
  { name: "JavaScript & Typescript", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "CSS / Tailwind", level: 70 },
  { name: "Responsive", level: 75 },
  { name: "Backendless", level: 90 },
  { name: "API", level: 90 },
];

const Skills = () => {
  return (
    <section id="my_skills" className="py-12 bg-gray-800 px-4 rounded-2xl scroll-mt-20">
      <section className="bg-white dark:bg-gray-900 rounded-2xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Skills</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              As a fullstack developer, I blend creativity with technical expertise to build modern, responsive web
              applications. Here’s a breakdown of the core skills I bring:
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiJavascript />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiTypescript />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">JavaScript & Typescript</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I write robust and scalable code using both JavaScript and TypeScript. TypeScript{"’"}s static typing
                helps catch errors early and makes large codebases more maintainable.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <FaCode />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiNextdotjs />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Frontend Dev.</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Leveraging libraries like React and frameworks such as Next.js, I create dynamic, interactive, and
                server-rendered applications that deliver seamless user experiences. I{"’"}m passionate about building
                interfaces that are not only visually appealing but also highly performant.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiTailwindcss />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiHtml5 />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiCss3 />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Tailwind CSS, HTML, & CSS</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I design and implement responsive layouts using semantic HTML and CSS. With Tailwind CSS, I rapidly
                develop custom, utility-first styles that ensure consistency across devices—whether it{"’"}s a mobile
                phone or a desktop.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <HiMiniDevicePhoneMobile />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SlScreenTablet />
                </svg>
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SlScreenDesktop />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Responsive & Mobile-First Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I build applications with a mobile-first approach, ensuring that all projects look and work beautifully
                on screens under 480px as well as on larger displays.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <SiBackendless />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Backendless & Serverless Architecture</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I leverage Backendless as a backend-as-a-service platform to accelerate development. By using
                Backendless, I can quickly implement data management, user authentication, and real-time capabilities
                without the overhead of managing traditional servers.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max dark:bg-primary-900">
                <svg
                  className="w-8 h-8 text-white lg:w-12 lg:h-12 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <TbApi />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">API Development & Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I design and implement RESTful API routes that power dynamic applications. My approach ensures seamless
                communication between the client and server, and I follow best practices to maintain clean, efficient
                code.
              </p>
            </div>
          </div>
        </div>
      </section>
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center my-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}></motion.h2>
      <div className="max-w-xl mx-auto space-y-4">
        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-white text-sm sm:text-base">{skill.name}</span>
              <span className="text-white text-sm sm:text-base">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="bg-blue-500 h-3 rounded-full"></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
