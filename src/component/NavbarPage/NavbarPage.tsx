"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 
        w-[98%] flex items-center justify-between px-6 py-4
        bg-gradient-to-r from-green-900 via-green-800 to-green-700
        backdrop-blur-xs rounded-xl shadow-md z-20
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Logo inside navbar */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo-bird.jpg"
          alt="Web Logo"
          className="h-10 w-20 rounded-lg"
        />
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-6  text-bold text-xl text-gray-200">
        {["Home", "About Us", "Services", "Contact Us", "Pages", "Features"].map(
          (item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-1 rounded-md transition duration-300 hover:bg-green-500 hover:text-white"
            >
              {item}
            </li>
          )
        )}
      </ul>

      {/* Login Button on right */}
      <button
        className="
          bg-[#9ACD32] hover:bg-green-700 text-white 
          px-5 py-1.5 rounded-md font-medium 
          border-2 border-transparent 
          ] 
          hover:border-[#9ACD32] hover:shadow-[4px_4px_10px_rgba(154,205,50,0.6)] 
          hover:scale-105 transition-all duration-300
        "
      >
        <Link href="/login">Login</Link>
      </button>
    </nav>
  );
};

export default Navbar;
