"use client";
import React from "react";

export default function BusinessStory() {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-full mx-auto rounded-2xl bg-gradient-to-r from-green-900 via-green-800 to-green-700
 p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-2">
            Ready to get started?
          </h2>
          <p className="text-white/80 max-w-md text-lg">
            Join today and enjoy fast, secure, and easy access to our services.  
            Start your journey now and experience convenience like never before.
          </p>
        </div>

        {/* Right Side Button */}
        <div>
          <button
  className="
    bg-[#9ACD32] 
    text-white 
    px-6 py-3 text-lg font-semibold 
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
