import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "John Carter",
      role: "Business Owner",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHKAwRGIPw0Rw/profile-displayphoto-crop_800_800/B4DZw4chKaHMAI-/0/1770473527951?e=1785369600&v=beta&t=SttZvwBqAwoJPCCpi86GG0wzonuDIn99a7sUpcXBRzQ",
      review:
        "Worked with Sheraz on a MERN project and he did a great job. He is very good with React and Node and got the work done quickly. Highly recommend him",
    },
    {
      id: 2,
      name: "Emily Johnson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "Great communication and excellent development skills. Highly recommended for MERN projects.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      review:
        "The project was completed before the deadline with a clean and modern design.",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      review:
        "Very professional developer. Attention to detail and code quality was impressive.",
    },
    {
      id: 5,
      name: "David Miller",
      role: "Agency Owner",
      image: "https://randomuser.me/api/portraits/men/83.jpg",
      review:
        "Working with Sheraz was a great experience. Everything worked smoothly from start to finish.",
    },
    {
      id: 6,
      name: "Olivia Moore",
      role: "Freelance Client",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      review:
        "One of the best developers I've worked with. Responsive, friendly and highly skilled.",
    },
  ];

  return (
    <section id="testimonial" className="w-full py-16  sm:px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="heading-font text-3xl font-bold text-white">
          Testimonials
        </h1>

        <p className="heading-font text-gray-500 mt-2">
          What my clients say
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
           className="!pb-8 sm:!pb-14"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
         
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#161b22] rounded-xl p-7 h-full">

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold heading-font">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mt-6 leading-7">
                  "{item.review}"
                </p>

                <div className="mt-6 text-yellow-400 text-xl">
                  ★★★★★
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;