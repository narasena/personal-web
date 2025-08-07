"use client";
import React from "react";
import { SiBackendless, SiCss3, SiDocker, SiExpress, SiGit, SiGraphql, SiHtml5, SiJavascript, SiLinux, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedis, SiRobotframework, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrServerCluster } from "react-icons/gr";
import { TiInfinity } from "react-icons/ti";
import { FcWorkflow } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { VscSymbolMethod } from "react-icons/vsc";
import { IoIosCodeWorking } from "react-icons/io";

const mySkills = [
  {
    name: 'Languages & Frameworks',
    icon: <SiRobotframework />,
    list: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Nest.js', icon: <SiNestjs /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Java Spring Boot', icon: <BiLogoSpringBoot /> },
    ],
  },
  {
    name: 'Database & Backend',
    icon: <GrServerCluster />,
    list: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Backendless', icon: <SiBackendless /> },
      { name: 'RESTful API', icon: <TbApi /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: <TiInfinity />,
    list: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'CI/CD', icon: <FcWorkflow /> },
    ],
  },
  {
    name: 'Web & UI',
    icon: <CgWebsite />,
    list: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Responsive', icon: <DiResponsive /> },
    ],
  },
  {
    name: 'Methodology',
    icon: <VscSymbolMethod />,
    list: [
      { name: 'Agile', icon: <IoIosCodeWorking /> },
      { name: 'Scrum', icon: <IoIosCodeWorking /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id='my_skills' className='py-12 bg-gray-800/80 px-4 rounded-2xl scroll-mt-20'>
      <section className='bg-gray-900 rounded-2xl'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <div className='max-w-screen-md mb-8 lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>My Skills</h2>
            <p className=' sm:text-xl text-gray-400'>
              As a fullstack developer, I blend creativity with technical expertise to build modern, responsive web
              applications. Here’s a breakdown of the core skills I bring:
            </p>
          </div>
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 my-4'>
            {mySkills.map((cat, index) => (
              <div key={index}>
                <div className='flex justify-center gap-1.5 items-start mb-4 w-max h-10 rounded-full bg-primary-100 lg:h-12 lg:w-max bg-primary-900'>
                  {React.cloneElement(cat.icon, { 
                        className: 'w-4 h-4 text-white lg:w-6 lg:h-6',
                        size: 32 
                      })}
                <h3 className='mb-2 text-xl font-bold text-white'>{cat.name}</h3>
                </div>
                <div className='text-gray-600 flex flex-wrap gap-2'>
                  {cat.list.map((item, index) => (
                    <div key={index} className="flex gap-1 items-center rounded-md bg-white px-2">
                      {React.cloneElement(item.icon, { 
                        className: 'w-4 h-4 lg:w-5 lg:h-5',
                        size: 32 
                      })}
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
