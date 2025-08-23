"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import HomePage from "@/component/HomePage/HomePage";
import AboutPage from "@/component/AboutPage/AboutPage";
import FeatureCard from "@/component/FeaturesPage/FeaturePage";
import InvoicingPage from "@/component/InvoicingPage/InvoicingPage";
import FeedbackCarousel from "@/component/Feedback/Feedback";
import GrowPart from "@/component/GrowPart/GrowPart";
import { Mail, LayoutDashboard, Database, Bell, Upload, ClipboardList } from "lucide-react";
import BusinessStory from "@/component/BusinessStory/BusinessStory";


export default function Home() {
  // ✅ AOS setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const features = [
    {
      title: "Incredible infrastructure",
      description: "High-performance, reliable infrastructure built for speed, uptime, and seamless performance.",
      icon: <Database size={28} />,
      gradient: "bg-gradient-to-r from-indigo-900 to-blue-700"
    },
    {
      title: "Email notifications",
      description: "Instant, automated alerts for updates, reminders, and activities.",
      icon: <Mail size={28} />,
      gradient: "bg-gradient-to-r from-blue-800 to-blue-600"
    },
    {
      title: "Simple dashboard",
      description: "Manage data and reports from a clean, user-friendly dashboard.",
      icon: <LayoutDashboard size={28} />,
      gradient: "bg-gradient-to-r from-blue-900 to-sky-700"
    },
    {
      title: "Information retrieval",
      description: "Quickly locate and access information with smart search features.",
      icon: <ClipboardList size={28} />,
      gradient: "bg-gradient-to-r from-slate-900 to-indigo-800"
    },
    {
      title: "Drag & drop functionality",
      description: "Easily arrange and organize items with our drag-and-drop feature.",
      icon: <Upload size={28} />,
      gradient: "bg-gradient-to-r from-blue-900 to-cyan-700"
    },
    {
      title: "Deadline reminders",
      description: "Stay on track with customizable alerts and reminders.",
      icon: <Bell size={28} />,
      gradient: "bg-gradient-to-r from-indigo-900 to-blue-800"
    }
  ];

  return (
    <>
      {/* Hero + About */}
      <HomePage />
      <AboutPage />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold  text-[#084d0c]">Our Features</h2>
          <div className="flex justify-center mt-4 mb-6">
            <span className="w-16 h-1 bg-green-500 rounded-full"></span>
            </div>
          <p className="text-[#084d0c] mt-5 text-xl">
            Discover powerful features designed to enhance your experience and improve efficiency.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
          {features.map((feature, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                
              />
            </div>
          ))}
        </div>
      </section>
      {/* Grow Part Section */}
      <GrowPart />
      {/* Invoicing Section */}
      <InvoicingPage />
      {/* feedback carousel */}
      <FeedbackCarousel />

      {/* BusinessStory Part */}
      <BusinessStory />

      {/* <FooterPage /> */}
    </>
  );
}
