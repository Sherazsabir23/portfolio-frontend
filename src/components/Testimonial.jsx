import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Shakir",
      role: "Software Engineer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHKAwRGIPw0Rw/profile-displayphoto-crop_800_800/B4DZw4chKaHMAI-/0/1770473527951?e=1785369600&v=beta&t=SttZvwBqAwoJPCCpi86GG0wzonuDIn99a7sUpcXBRzQ",
      review:
        "Worked with Sheraz on a MERN project and he did a great job. He is very good with React and Node and got the work done quickly. Highly recommend him",
    },
    {
      id: 2,
      name: "Muzalfa BiBi",
      role: "Senior Engineer at NexaSecure",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQFC5luZR3nKDg/profile-framedphoto-shrink_800_800/B4DZ5TwTTKJoAk-/0/1779521631891?e=1784628000&v=beta&t=EHk6AQbj1PAgoYewp7EOpsbYUVK7fLqgnJmmetDiag4",
      review:
        "Sheraz was a great teammate during our internship at NexaSecure. His MERN Stack skills and problem solving approach made him a valuable part of the team.",
    },
    {
      id: 3,
      name: "Muskan Fatima",
      role: "Entrepreneur",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQEuGVti3ETxxA/profile-framedphoto-shrink_800_800/B4DZ2dNVEDHoAg-/0/1776459010668?e=1784628000&v=beta&t=qEhARIApwI19UEVgq7wsvggG45jcrDHLHPZYIMMVtzo",
      review:
        "I had the opportunity to work with Sheraz on a project, and it was a great experience. He is a skilled MERN Stack developer, communicates well, and is dedicated to delivering quality work.",
    },
    {
      id: 4,
      name: "Muhammad Ali",
      role: "AI & Agentic Engineer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFPhrSaC7_nmw/profile-displayphoto-crop_800_800/B4DZ67l47NIYAI-/0/1781263735162?e=1785369600&v=beta&t=cjENTtCBWtNRARX5QUN3HuJTGv5GwvRthmi69bhcOpM",
      review:
        "Sheraz is a great person to work with. He's honest, committed to his work, and makes sure everything is completed properly. Wishing him all the best.",
    },
  ];

  return (
    <section id="testimonial" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto mb-10">
        <p className="font-mono text-sm text-[#6FA88F] mb-3">
          <span className="text-[#6B6455]">05</span> — reviews
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3]">
          What clients say
        </h2>
      </div>

      <div className="max-w-6xl mx-auto testimonial-swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-12"
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1C1913] border border-[#332D22] p-7 h-full">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#332D22]"
                  />
                  <div>
                    <h3 className="text-[#F2EDE3] font-body font-medium">
                      {item.name}
                    </h3>
                    <p className="text-[#6B6455] font-mono text-xs mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-[#9C9483] font-body mt-6 leading-7 text-sm">
                  {item.review}
                </p>

                <div className="mt-6 font-mono text-xs text-[#6FA88F]">
                  ★★★★★
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper pagination bullet theming — add once globally or keep scoped here */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #332D22;
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #E8A33D;
        }
      `}</style>
    </section>
  );
}

export default Testimonial;
