"use client";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-100 to-green-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md" data-aos="zoom-in-up" data-aos-duration="1000">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Welcome back</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link
  href="/signup"
  className="
    text-green-600 hover:underline
  "
>
  Signup
</Link>

{/* Back to Home Button */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="
              bg-green-300 hover:bg-gray-300 text-green-700 text-md
              px-5 py-2 rounded-md font-medium 
              transition-all duration-300
            "
          >
            ← Back to Home
          </Link>
        </div>
          
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
