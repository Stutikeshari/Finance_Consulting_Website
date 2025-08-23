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
        group relative flex flex-col items-center justify-center h-70
        p-8 rounded-xl shadow-xl cursor-pointer 
        bg-gray-200 text-[#084d0c] transition-all duration-500
        hover:text-white 
        overflow-hidden
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
        <div
          className="flex items-center justify-center w-20 h-20 rounded-full mb-4 bg-green-200
          text-[#084d0c] group-hover:text-green group-hover:bg-[#2ffa94] transition-colors duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className=" text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
