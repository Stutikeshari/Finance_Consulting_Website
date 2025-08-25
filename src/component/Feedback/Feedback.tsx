"use client";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Smith",
    role: "CTO at EnvyThme",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
  {
    name: "Sarah Taylor",
    role: "CTO at ThemeForest",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
  {
    name: "James Andy",
    role: "CEO at Envato",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
  {
    name: "Sophia Lee",
    role: "Founder at StartupX",
    feedback:
      "This platform has transformed the way we handle payments. Super easy and reliable!",
  },
];

export default function FeedbackCarousel() {
  return (
    <>
      <div className="div-plane w-full h-26 relative bottom-0 left-0"></div>
      <section className="py-12 sm:py-16 bg-gray-200 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#084d0c] px-4">
          Haiper score 4.8 out of 5, from 55,495 reviews
        </h2>
        <p className="text-[#084d0c] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="max-w-6xl px-4 sm:px-6"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
  <div
    className="w-[90%] sm:w-full mx-auto 
      p-4 sm:p-6 mb-8 sm:mb-12 rounded-lg
      border border-lime-800/30 
      shadow-[4px_4px_12px_rgba(21,128,61,0.25)]
      text-left bg-white hover:shadow-lg transition
      flex flex-col justify-between"
  >
    {/* Stars */}
    <div className="flex mb-2 sm:mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>

    {/* Feedback */}
    <p className="text-[#084d0c] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex-grow leading-relaxed">
      {item.feedback}
    </p>

    {/* Name + Role */}
    <div>
      <h4 className="font-semibold text-sm sm:text-base">{item.name}</h4>
      <p className="text-[#084d0c] text-xs sm:text-sm">{item.role}</p>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </section>
    </>
  );
}
