"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react"; // install lucide-react for icons: npm i lucide-react

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Services", path: "/Services" },
    { name: "Contact Us", path: "/Contact" },
  ];

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLangOpen(false);
    console.log("Language changed to:", lang);
    // 👉 here you would integrate i18n library (like next-intl / next-i18next)
  };

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
      <ul className="hidden md:flex gap-6 text-bold text-xl text-gray-200">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer px-3 py-1 rounded-md transition duration-300 hover:bg-green-500 hover:text-white"
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        {/* Translator Button */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-white text-green-700 hover:bg-gray-100"
          >
            <Globe className="w-4 h-4" />
            {language}
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-green-700 text bold ml-4 border rounded-lg shadow-md z-30">
              <button
                onClick={() => handleLanguageChange("English")}
                className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => handleLanguageChange("Hindi")}
                className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500"
              >
                🇮🇳 Hindi
              </button>
              <button
                onClick={() => handleLanguageChange("Arabic")}
                className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500"
              >
                🇸🇦 Arabic
              </button>
            </div>
          )}
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="
            bg-[#9ACD32] hover:bg-green-700 text-white 
            px-5 py-1.5 rounded-md font-medium 
            border-2 border-transparent
            hover:border-[#9ACD32] hover:shadow-[4px_4px_10px_rgba(154,205,50,0.6)] 
            hover:scale-105 transition-all duration-300
          "
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
