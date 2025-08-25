import Link from "next/link";
import React from "react";
import Navbar from "../NavbarPage/NavbarPage";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen bg-white text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-screen overflow-hidden">
          <Image
            src="images/green-head1.jpg"
            alt="image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Navbar */}
        <Navbar />
        <div className="div-plane w-full h-26 relative bottom-0 left-0"></div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col md:flex-row items-center h-screen px-4 sm:px-6 md:px-12">
          {/* Left side text */}
          <div
            className="w-full md:w-1/2 text-center md:text-left place-self-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Celebrating A Decade of <br />
              Powerful Banking Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-xl mb-4 md:mb-6 text-gray-200 max-w-lg mx-auto md:mx-0">
              Get the financial tools and insights to start, build, and grow your
              business.
            </p>
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#209e26] hover:bg-green-700 text-base sm:text-lg text-white font-semibold rounded-lg shadow-lg">
              Book Now
            </button>
          </div>

          {/* Right side image */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image
              src="/images/banner-Image2.png"
              alt="Header Banner"
              className="w-[full] sm:w-[90%] md:w-[120%] lg:w-[130%] h-auto max-h-[750px] object-contain md:object-right"
            />
          </div>
        </section>
      </main>
    </>
  );
}
