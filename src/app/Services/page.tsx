"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "@/component/FeaturesPage/FeaturePage";
import React from "react";

// ✅ import icons from lucide-react
import {
  LayoutDashboard,
  Database,
  Mail,
  ClipboardList,
  Upload,
  Bell,
} from "lucide-react";

const ServicePage = () => {
  // ✅ AOS setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div
          className="relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/green-head1.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text Content */}
          <div
            className="relative z-10 px-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Learn more about our mission, vision, and team.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 py-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h4 className="text-sm text-green-700 font-semibold uppercase">
              Fast & Easy Online Consulting
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#084d0c] leading-snug">
              Freelancers, entrepreneurs, and sole traders
            </h2>
            <p className="text-[#084d0c] leading-relaxed">
              Enjoy quick, convenient online banking designed for independent
              professionals, with secure access, transparent fees, and
              real-time financial tracking anytime, anywhere.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
              <p className="flex items-center text-gray-700">✅ Free plan available</p>
              <p className="flex items-center text-gray-700">✅ Full data privacy compliance</p>
              <p className="flex items-center text-gray-700">✅ 100% transparent costs</p>
              <p className="flex items-center text-gray-700">✅ Commitment-free</p>
              <p className="flex items-center text-gray-700">✅ Real-time spending overview</p>
              <p className="flex items-center text-gray-700">✅ Debit Mastercard included</p>
            </div>

            {/* Button */}
            <button
              className="
                bg-green-700 
                text-white 
                px-6 py-3 text-base sm:text-lg font-semibold 
                rounded-lg 
                border-2 border-transparent
                hover:bg-[#9ACD32]
                hover:border-green-700 
                hover:text-green-700
                hover:shadow-[6px_6px_15px_rgba(154,205,50,0.6)] 
                hover:scale-105 
                transition-all duration-300
              "
            >
              Apply Now
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/about-img1.jpg"
              alt="Banking Services"
              className="rounded-xl shadow-lg w-full max-w-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#084d0c]">
            Services
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <span className="w-16 h-1 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-[#084d0c] mt-5 text-base sm:text-lg md:text-xl">
            Discover powerful features designed to enhance your experience and
            improve efficiency.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
          <FeatureCard
            title="Real-time analytics"
            description="Get instant insights with our real-time data tracking and reporting tools."
            icon={<LayoutDashboard size={28} />}
          />
          <FeatureCard
            title="Secure data storage"
            description="Your data is protected with top-tier encryption and security protocols."
            icon={<Database size={28} />}
          />
          <FeatureCard
            title="24/7 customer support"
            description="Our dedicated support team is available around the clock to assist you."
            icon={<Mail size={28} />}
          />
          <FeatureCard
            title="Comprehensive reporting"
            description="Generate detailed reports to help you make informed decisions."
            icon={<ClipboardList size={28} />}
          />
          <FeatureCard
            title="Drag & drop functionality"
            description="Easily arrange and organize items with our drag-and-drop feature."
            icon={<Upload size={28} />}
          />
          <FeatureCard
            title="Deadline reminders"
            description="Stay on track with customizable alerts and reminders."
            icon={<Bell size={28} />}
          />
        </div>
      </section>

      {/* Invoice Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-16 py-16">
        {/* Left Side - Text */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#084d0c]">
            Account <br /> Processing
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless
            payment experiences for their customers. From online payments to
            in-store transactions, we provide the tools and infrastructure
            needed to accept payments securely and efficiently.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center w-full md:w-1/2" data-aos="fade-up-left">
          <img
            src="/images/image3.jpg"
            alt="invoice img"
            className="rounded-xl shadow-xl shadow-black/50 w-full max-w-[500px]"
          />
        </div>
      </section>

      {/* Invoice Second Part */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-16 py-16">
        {/* Left Image */}
        <div
          className="flex justify-center w-full md:w-1/2"
          data-aos="fade-up-right"
        >
          <img
            src="/images/image2.jpg"
            alt="grow-img"
            className="rounded-xl shadow-xl shadow-black/50 w-full max-w-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#084d0c]">
            Online & Finance Payment <br /> Consulting
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless
            payment experiences for their customers. From online payments to
            in-store transactions, we provide the tools and infrastructure
            needed to accept payments securely and efficiently.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
