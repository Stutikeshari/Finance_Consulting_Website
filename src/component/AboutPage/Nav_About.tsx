"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

export default function Nav_About() {
     // ✅ AOS setup
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
        <div className="relative h-[350px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/images/green-head1.jpg')" }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Text Content */}
  <div className="relative z-10 px-4" data-aos="zoom-in"  data-aos-duration="1000">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      About Us
    </h1>
    <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
      Learn more about our mission, vision, and team.
    </p>
  </div>
        </div>



      {/* Intro Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="max-w-xl mx-auto text-justify">
  <h2 className="text-md text-green-700 font-semibold mb-2">
    HOW WE WERE FOUNDED
  </h2>
  <h3 className="text-3xl font-bold text-[#084d0c] mb-6">
    Easy, fee-free banking for entrepreneurs
  </h3>
  <p className="text-[#084d0c] text-lg leading-relaxed">
    The rise of easy, online banking has created a simple, modern
    solution designed for entrepreneurs. This innovative approach means
    less stress, no unnecessary fees, and streamlined financial tools for
    growth. At AGW Consulting, we’re passionate about helping businesses
    grow by empowering founders with financial services that support
    their success without worrying about hidden costs or outdated
    processes.
  </p>
</div>

        {/* Right Video/Image */}
        <div className="relative" data-aos="fade-left" data-aos-duration="1000">
          <Image
            src="/images/abour-img2.jpg"
            alt="Office Meeting"
            width={500}
            height={300}
            className="rounded-lg shadow-lg" data-aos="fade-left"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition">
              ▶
            </button>
          </div> */}
        </div>
      </section>

      {/* Meet Our Team Section */}
    <section className="bg-green-100 py-20" data-aos="fade-up"
     data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
  <div className="container mx-auto px-6 text-center" >
    {/* Heading */}
    <h2 className="text-4xl font-bold mb-4 text-[#084d0c]">
      Meet Our Team
    </h2>
    <div className="flex justify-center mb-6">
      <span className="w-16 h-1 bg-green-500 rounded-full"></span>
    </div>
    <p className="text-[#084d0c] text-lg mb-12 max-w-2xl mx-auto">
      Our dedicated professionals are committed to supporting your
      financial journey with expertise and passion.
    </p>

    {/* Team Grid */}
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
      
      {/* Team Member 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300" >
        <Image
          src="/images/team1.jpg"
          alt="Team Member 1"
          width={300}
          height={300}
          className="rounded-xl mb-6 mx-auto"
        />
        <h3 className="text-xl font-semibold text-gray-800">Harry Kane</h3>
        <p className="text-gray-500">Founder & Consultant</p>
      </div>

      {/* Team Member 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
        <Image
          src="/images/team2.jpg"
          alt="Team Member 2"
          width={300}
          height={300}
          className="rounded-xl mb-6 mx-auto"
        />
        <h3 className="text-xl font-semibold text-gray-800">Raheem Sterling</h3>
        <p className="text-gray-500">Head Manager</p>
      </div>

      {/* Team Member 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
        <Image
          src="/images/team3.jpg"
          alt="Team Member 3"
          width={300}
          height={300}
          className="rounded-xl mb-6 mx-auto"
        />
        <h3 className="text-xl font-semibold text-gray-800">Kyle Walker</h3>
        <p className="text-gray-500">Marketing Specialist</p>
      </div>
    </div>
  </div>
        </section>

        {/* our team partner section  */}
        <section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-3xl font-bold mb-4 text-[#084d0c]">
      Our Trusted Partner
    </h2>
    <div className="flex justify-center mb-6">
      <span className="w-16 h-1 bg-green-500 rounded-full"></span>
    </div>
    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
      We collaborate with trusted partners who share our values, ensuring
      quality, reliability, and excellence in every project we deliver.
    </p>

    {/* Partner Logos Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-1.png" alt="Partner 1" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-2.png" alt="Partner 2" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-3.png" alt="Partner 3" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-4.png" alt="Partner 4" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-5.png" alt="Partner 5" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-6.png" alt="Partner 6" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-7.png" alt="Partner 7" className="max-h-12" />
      </div>
      <div className="bg-white shadow-xlrounded-xl p-6 flex items-center justify-center hover:shadow-xl transition">
        <img src="/images/company/logoipsum-8.png" alt="Partner 8" className="max-h-12" />
      </div>
    </div>
  </div>
</section>

{/* Account part section (Full Width) */}
<section className="w-full py-12 px-6">
      <div className="max-w-full mx-auto rounded-2xl bg-gradient-to-r from-green-900 via-green-800 to-green-700
 p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-2">
            Ready to get started your account
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
 Create Free Account
</button>
        </div>

      </div>
    </section>

    </div>
  );
}
