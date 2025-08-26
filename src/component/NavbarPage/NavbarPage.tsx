"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react"; // Icons


// Language map (code → label)
const LANGUAGES: Record<string, string> = {
  en: "English",
  hi: "Hindi",
  ar: "Arabic",
};

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // default English
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Google Translate trigger
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;

    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <>
      {/* Navbar container */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 
          w-[98%] flex items-center justify-between px-6 py-4
          bg-gradient-to-r from-green-900 via-green-800 to-green-700
          backdrop-blur-xs rounded-xl shadow-md z-30
          transition-transform duration-300
          ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo-bird.jpg"
            alt="Web Logo"
            className="h-10 w-20 rounded-lg"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 font-bold text-xl text-gray-200">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-1 rounded-md transition duration-300 hover:bg-green-500 hover:text-white"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown (Desktop/Tablet) */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-white text-green-700 hover:bg-gray-100"
            >
              <Globe className="w-4 h-4" />
              {LANGUAGES[language]}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-green-700 font-bold border rounded-lg shadow-md z-40">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500 hover:text-white"
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500 hover:text-white"
                >
                  🇮🇳 Hindi
                </button>
                <button
                  onClick={() => handleLanguageChange("ar")}
                  className="w-full text-left px-4 py-2 rounded-md hover:bg-green-500 hover:text-white"
                >
                  🇸🇦 Arabic
                </button>
              </div>
            )}
          </div>

          {/* Login Button (Desktop/Tablet only) */}
          {/* <Link
            href="/login"
            className="hidden sm:block bg-[#9ACD32] hover:bg-green-700 text-white 
              px-5 py-1.5 rounded-md font-medium 
              border-2 border-transparent
              hover:border-[#9ACD32] hover:shadow-[4px_4px_10px_rgba(154,205,50,0.6)] 
              hover:scale-105 transition-all duration-300"
          >
            Login
          </Link> */}

          <Link
            href="#"
            className="hidden sm:block bg-[#9ACD32] hover:bg-green-700 text-white 
              px-5 py-1.5 rounded-md font-medium 
              border-2 border-transparent
              hover:border-[#9ACD32] hover:shadow-[4px_4px_10px_rgba(154,205,50,0.6)] 
              hover:scale-105 transition-all duration-300"
          >
            Whatsapp
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Overlay when sidebar open */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-green-700">
          <img
            src="/images/logo-bird.jpg"
            alt="Web Logo"
            className="h-10 w-20 rounded-lg"
          />
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="flex flex-col gap-4 mt-6 px-6 text-lg font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 rounded-md hover:bg-green-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Selector in mobile */}
        <div className="mt-6 px-6">
          <h3 className="text-sm text-gray-300 mb-2">Language</h3>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleLanguageChange("en")}
              className="px-4 py-2 rounded-md hover:bg-green-600"
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => handleLanguageChange("hi")}
              className="px-4 py-2 rounded-md hover:bg-green-600"
            >
              🇮🇳 Hindi
            </button>
            <button
              onClick={() => handleLanguageChange("ar")}
              className="px-4 py-2 rounded-md hover:bg-green-600"
            >
              🇸🇦 Arabic
            </button>
          </div>
        </div>

        {/* Login in mobile */}
        {/* <div className="mt-6 px-6">
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[#9ACD32] hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
          >
            Login
          </Link>
        </div> */}
      </div>

       {/* Google Translate Dropdown */}
      
    </>
  );
};

export default Navbar;
