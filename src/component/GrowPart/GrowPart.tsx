"use client";
import Image from "next/image";
import React from "react";

const GrowPart = () => {
  return (
    <section className="w-full bg-[#155003] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
      {/* upside first part */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side Content */}
        <div className="text-white max-w-xl space-y-6 sm:space-y-8 md:space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Made to grow with your business
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-base sm:text-lg font-semibold">International payments</h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Send and receive payments worldwide quickly, securely, and in multiple currencies with complete transparency.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold">Completely customisable</h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Tailor features, settings, and workflows to perfectly match your business needs and preferences.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold">Real-time alerts</h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Stay informed instantly with real-time notifications for transactions, updates, and important account activity.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold">Fully safe and secure</h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Protect your data and transactions with advanced encryption and top-tier security measures.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image with Color Frame */}
        <div className="relative flex justify-center md:justify-end">
          <div className="p-2 bg-[#155003] rounded-full">
            <Image
              src="/images/globe2.png"
              alt="Rotating Globe"
              className="rounded-full w-[220px] sm:w-[280px] md:w-[350px] animate-slow-spin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowPart;
