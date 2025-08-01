"use client";
import React from "react";
import Link from "next/link";

const projects = [
  {
    title: 'IGN Home&DetailsPage',
    description: 'Replicate the Homepage of IGN and the article detail page',
    webUrl: 'https://ign-dot-com.vercel.app/',
  },
  {
    title: 'Savory Spice Shop',
    description: 'Replicate some pages from an ecommerce spice shop',
    webUrl: 'https://company-savoryspiceshop.vercel.app/',
  },
  {
    title: 'Event Ticketing App',
    description: 'Bootcamp Project for event ticketing app',
    webUrl: 'https://mini-project-loket.vercel.app/',
  },
  {
    title: 'Online Grocery App',
    description: 'Bootcamp Project for e-grocery and managaement app',
    webUrl: 'https://finpro-grocery-web-apps.vercel.app/',
  },
];

const Portfolio = () => {
  

  return (
    <section id="portfolios" className="py-12 md:px-4 px-2 scroll-mt-20">
      <section className=" bg-gray-900/80 rounded-2xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 min-w-full px-2 sm:px-8">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">My Portfolios</h2>
            <p className=" sm:text-xl text-gray-200">
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
                  <div className="relative aspect-[16/10] overflow-hidden bg-cover bg-no-repeat cursor-pointer" onClick={() => window.open(project.webUrl, '_blank')}>
                    <iframe
                      src={project.webUrl}
                      title={project.title}
                      className="w-full h-full border-0 scale-[0.21] origin-top-left pointer-events-none"
                      style={{ width: '1366px', height: '768px' }}
                      loading="lazy"
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
                        className="bg-blue-800 w-full text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
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
