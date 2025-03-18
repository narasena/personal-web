"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: 'The Band',
    description: 'A web app built with React and Node.js.',
    imagepath: '/portfolios_screenshots/theband.png',
    webUrl: 'https://the-band-sena-jcwd3203.vercel.app/',
  },
  {
    title: 'Instagram Feed',
    description: 'A replica of the instagram feed view',
    imagepath: '/portfolios_screenshots/instagramfake.png',
    webUrl: 'https://instagram-fake-plum.vercel.app/',
  },
  {
    title: 'Todo Lists',
    description: 'A dynamic todo list',
    imagepath: '/portfolios_screenshots/todo.png',
    webUrl: 'https://todo-list-ashy-seven.vercel.app/',
  },
  {
    title: 'IGN Home&DetailsPage',
    description: 'Replicate the Homepage of IGN and the article detail page',
    imagepath: '/portfolios_screenshots/ign.png',
    webUrl: 'https://ign-dot-com.vercel.app/',
  },
  {
    title: 'Savory Spice Shop',
    description: 'Replicate some pages from an ecommerce spice shop',
    imagepath: '/portfolios_screenshots/savoryspiceshop.png',
    webUrl: 'https://company-savoryspiceshop.vercel.app/',
  },
];

const Portfolio = () => {
  

  return (
    <section id="portfolios" className="py-12 md:px-4 px-2 scroll-mt-20">
      <section className=" bg-gray-900/80 rounded-2xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 min-w-full px-2 sm:px-8">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">My Portfolios</h2>
            <p className=" sm:text-xl text-gray-400">
              Welcome to my portfolio—a curated collection of projects where innovation meets technical excellence. Each
              project showcased here is a testament to my expertise in fullstack development, blending creative design
              with robust, high-performance solutions. From dynamic e-commerce platforms and interactive dashboards to
              custom content management systems, every project highlights my commitment to user-centric design,
              cutting-edge technologies (like JavaScript, TypeScript, React, Next.js, Node.js, and Tailwind CSS), and
              continuous improvement. Explore these projects to see how I transform complex challenges into elegant,
              efficient digital experiences.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <div className="block max-w-[18rem] rounded-lg overflow-hidden bg-gray-900/60 text-surface shadow-secondary-1 bg-surface-dark text-white">
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
                    <div className="pt-2 border-t border-white/20"></div>
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
