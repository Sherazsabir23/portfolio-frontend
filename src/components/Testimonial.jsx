import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Shakir",
    role: "Software Engineer",
    image:
      "/shakir.jpg",
    review:
      "Worked with Sheraz on a MERN project and he did a great job. He is very good with React and Node and got the work done quickly. Highly recommend him",
  },
  {
    id: 2,
    name: "Muzalfa BiBi",
    role: "Senior Engineer at NexaSecure",
    image:
      "/muzalfa.jpg",
    review:
      "Sheraz was a great teammate during our internship at NexaSecure. His MERN Stack skills and problem solving approach made him a valuable part of the team.",
  },
  {
    id: 3,
    name: "Muskan Fatima",
    role: "Entrepreneur",
    image:
      "/muskan.jpg",
    review:
      "I had the opportunity to work with Sheraz on a project, and it was a great experience. He is a skilled MERN Stack developer, communicates well, and is dedicated to delivering quality work.",
  },
  {
    id: 4,
    name: "Muhammad Ali",
    role: "AI & Agentic Engineer",
    image:
      "/muskan.jpg",
    review:
      "Sheraz is a great person to work with. He's honest, committed to his work, and makes sure everything is completed properly. Wishing him all the best.",
  },
];

function Testimonial() {
  return (
    <section id="testimonials" className="relative w-full py-28 px-6 overflow-hidden">
      <div className="absolute -z-10 top-10 left-1/4 w-96 h-96 rounded-full bg-[#7C3AED]/[0.08] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
          Reviews
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
          What clients say.
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto premium-testimonial-swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-14"
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[28px] border border-[#E2E8F0] bg-white/80 backdrop-blur-xl p-7 h-full shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)] transition-shadow"
              >
                <FaQuoteLeft className="text-[#2563EB]/15 text-3xl mb-4" />

                <p className="text-[#475569] leading-7 text-sm mb-6 min-h-[90px]">
                  {item.review}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-[#E2E8F0]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#E2E8F0]"
                  />
                  <div>
                    <h3 className="text-[#0F172A] font-medium text-sm">{item.name}</h3>
                    <p className="text-[#94A3B8] text-xs mt-0.5">{item.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-[#E8A33D] text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .premium-testimonial-swiper .swiper-pagination-bullet {
          background: #E2E8F0;
          opacity: 1;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .premium-testimonial-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #2563EB, #7C3AED);
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

export default Testimonial;
