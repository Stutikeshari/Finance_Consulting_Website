"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import GoogleTranslate from "@/component/GoogleTranslate";

const Footer = () => {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo + About */}
        <div>
          <img
            src="/images/logo-bird.jpg"
            alt="Finance Consulting Logo"
            className="h-16 w-26 mb-4 mx-auto md:mx-0 rounded-xl"
          />
          <p className="text-gray-200 text-md leading-6">
            We provide expert financial consulting and banking solutions to help
            you grow and secure your business.
          </p>

          {/* ✅ Google Translate Widget yaha set kiya */}
          <div className="mt-4">
            <GoogleTranslate />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#9ACD32] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#9ACD32] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#9ACD32] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#9ACD32] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Business Consulting</li>
            <li>Tax Planning</li>
            <li>Investment Strategies</li>
            <li>Risk Management</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin size={18} /> Panchkula, India
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={18} /> info@financeconsulting.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-green-950 py-4 text-center text-gray-400 text-sm relative">
        © {new Date().getFullYear()} Finance Consulting. All Rights Reserved. created by StutiKeshari
      </div>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-[#9ACD32] hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Go to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
