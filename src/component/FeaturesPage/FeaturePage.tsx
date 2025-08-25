"use client";

import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className={`
        group relative flex flex-col items-center justify-center 
        h-auto sm:h-72 lg:h-80 
        p-5 sm:p-6 md:p-8 
        rounded-xl shadow-xl cursor-pointer 
        bg-gray-200 text-[#084d0c] 
        transition-all duration-500 hover:text-white 
        overflow-hidden
        max-w-xs sm:max-w-sm lg:max-w-md mx-auto
      `}
    >
      {/* Gradient background effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-800
        translate-x-[-100%] group-hover:translate-x-0 
        transition-transform duration-500 ease-out"
      ></span>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div
          className="
            flex items-center justify-center 
            w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
            rounded-full mb-3 sm:mb-4 
            bg-green-200 text-[#084d0c] 
            group-hover:text-green-900 group-hover:bg-[#2ffa94] 
            transition-colors duration-500
          "
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
