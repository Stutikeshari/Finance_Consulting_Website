import Link from "next/link";
import React from "react";
import Navbar from "../NavbarPage/NavbarPage";



export default function HomePage() {
  return (
    <>
    <main className="relative min-h-screen bg-white text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-screen overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/images/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src="images/green-head1.jpg" alt="image" className="absolute inset-0 w-full h-full object-cover "/>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar */}
      <Navbar />
      <div className="div-plane w-full h-26  relative bottom-0 left-0"></div>     {/* plain box  */}

      

      {/* Hero Section */}
      <section className="relative  z-10 flex flex-col md:flex-row items-center h-screen pl-6 md:pl-12">
        {/* Left side text */}
        <div className="w-[50%] text-center md:text-left  place-self-center" data-aos="fade-right" data-aos-duration="1000" >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Celebrating A Decade of <br />
            Powerful Banking Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-lg">
            Get the financial tools and insights to start, build, and grow your
            business.
          </p>
          <button className="px-8 py-3 bg-[#209e26] hover:bg-green-700 text-lg text-white font-semibold rounded-lg shadow-lg">
            Book Now
          </button>
        </div>

        {/* Right side image */}
        <div className=" relative w-[50%] flex justify-end  items-end place-self-end md:mt-0"  data-aos="fade-left" data-aos-duration="1000">
          <img
            src="/images/banner-img2.png"
            alt="Header Banner"
            className="w-full h-auto max-h-[900px] object-contain"
          />
        </div>

        
      </section>
      {/* <div className="div-plane w-full h-20 bg-white relative bottom-0 left-0"></div> */}

      
    </main>
    
    </>
  );
}
