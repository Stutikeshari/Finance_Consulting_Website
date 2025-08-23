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
      <div className="div-plane w-full h-26 relative bottom-0 left-0"></div> {/* plain box */}
      <section className="py-16 bg-gray-200 text-center ">
        {/* Heading */}
        <h2 className="text-5xl md:text-3xl font-bold mb-2 text-[#084d0c]">
          Haiper score 4.8 out of 5, from 55,495 reviews
        </h2>
        <p className="text-[#084d0c] max-w-2xl mx-auto mb-12 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true, // ✅ makes it slide RIGHT → LEFT
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl px-6"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-6 w-90 h-70 mb-20 border-r-2 border-b-1 border-b-lime-800 rounded-lg shadow-[6px_6px_15px_rgba(21,128,61,0.4)]
                text-left bg-white hover:shadow-xl transition flex flex-col justify-between">
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-[#084d0c] text-lg mb-4 flex-grow">
                  {item.feedback}
                </p>

                {/* Name + Role */}
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-[#084d0c] text-md">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
