"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "The Band",
    description: "A web app built with React and Node.js.",
    imagepath: "/portfolios_screenshots/theband.png",
    webUrl: "https://the-band-sena-jcwd3203.vercel.app/",
  },
  {
    title: "Instagram Feed",
    description: "A mobile-responsive design with Next.js.",
    imagepath: "/portfolios_screenshots/instagramfake.png",
    webUrl: "https://instagram-fake-plum.vercel.app/",
  },
  {
    title: "Todo Lists",
    description: "A dynamic e-commerce platform.",
    imagepath: "/portfolios_screenshots/todo.png",
    webUrl: "https://todo-list-ashy-seven.vercel.app/",
  },
];

const Portfolio = () => {
  

  return (
    <section id="portfolios" className="py-12 px-4">
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
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <div className="block max-w-[18rem] rounded-lg overflow-hidden bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
                  <div className="relative aspect-video overflow-hidden bg-cover bg-no-repeat">
                    <Image
                      src={project.imagepath}
                      alt={project.title}
                      width={288}
                      height={162}
                      layout="responsive"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="pt-2 border-t border-black/20"></div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-base mb-4">{project.description}</p>
                    <div className="flex w-full">
                      <Link
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Visit Site
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
