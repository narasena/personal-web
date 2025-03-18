"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarMenu = [
    { name: "About Me", link: "#about_me" },
    { name: "My Skills", link: "#my_skills" },
    { name: "Portfolios", link: "#portfolios" },
    { name: "Experiences", link: "#experience" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Me", link: "#contact_me" },
  ];

  // Hide nav bar on mobile when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.innerWidth < 640) {
        // mobile only
        if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
          // scrolling down
          setVisible(false);
        } else {
          // scrolling up
          setVisible(true);
        }
      } else {
        // Always visible on larger screens
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navBarVariants = {
    hidden: { y: "-100%", transition: { duration: 0.3 } },
    visible: { y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={navBarVariants}
      animate={visible ? "visible" : "hidden"}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 sm:py-4">
        <a href="#hero" className="text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          Narasena
        </a>
        <div className="hidden sm:flex space-x-4 sm:space-x-6">
          {navbarMenu.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="relative group text-white text-sm sm:text-base">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>
        <button name="menu" onClick={() => setIsOpen(!isOpen)} className="sm:hidden focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="sm:hidden bg-gray-800">
          {navbarMenu.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors">{item.name}</div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
