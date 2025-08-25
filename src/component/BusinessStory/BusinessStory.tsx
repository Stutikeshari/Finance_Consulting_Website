"use client";
import React from "react";

export default function BusinessStory() {
  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-8 lg:px-16">
      <div
        className="max-w-6xl mx-auto rounded-2xl 
        bg-gradient-to-r from-green-900 via-green-800 to-green-700
        p-6 sm:p-10 lg:p-14 
        text-white shadow-xl 
        flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10"
      >
        {/* Left Side Text */}
        <div className="text-center md:text-left space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0">
            Join today and enjoy fast, secure, and easy access to our services.  
            Start your journey now and experience convenience like never before.
          </p>
        </div>

        {/* Right Side Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button
            className="
              bg-[#9ACD32] 
              text-white 
              px-5 sm:px-6 lg:px-8 
              py-2.5 sm:py-3 lg:py-4 
              text-base sm:text-lg lg:text-xl 
              font-semibold 
              rounded-lg 
              border-2 border-transparent
              hover:bg-green-700 
              hover:border-[#9ACD32] 
              hover:shadow-[6px_6px_15px_rgba(154,205,50,0.6)] 
              hover:scale-105 
              transition-all duration-300
            "
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
}
