import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Blog Application",
      description:
        "A full stack MERN blogging platform with authentication, image uploads and search.",
      image: "https://images.openai.com/static-rsc-4/APPdwUT00a9JVvS62BIb_619rkRdJub-XXuVB7lAKj3FhW93MocNorKV5eEJ9WvGd5vp5YRuaPOzurujEJSGGuv4MhMWAlL45mhjWcuBj7Hm8zF7qB20jyWolH5z_V6vntHris32r5vKf4xZANV0tG1j7Dajj4UcENkI6qCtVVY?purpose=inline",
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description:
        "Modern e-commerce website with admin panel, cart system and authentication.",
      image: "https://images.openai.com/static-rsc-4/vjSEHX0cEMDc07V21fyQVkxTzCZwGzXqrMRc0iAJ9nFWCnvhr3DINM5JLfuMvxr_S2cjHBvA7HUzgZYQm3AuMKQRJgewTrDyC5cnDKDT0UEjulRb_RFD6ixS4mSpiH00jJibaYzBBQx-0jS_W5CLnz8pXse2eowid38D1c_frkI?purpose=inline",
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Responsive portfolio built with React and Tailwind CSS with smooth UI.",
      image: "https://images.openai.com/static-rsc-4/mpMynvYlczwhGXnnBifLEPhwndQ_Bey9u5jgdMqkScSTf33cGk3q9KyxyRGYMUyA-BUoFzXfWegCz5L8mkBaYMdjX8u3eevMEkDIAsLt0iABygGnCXo-pHb6pphK0D4axMyP_cU0TF0A42CvsStrfnhuSRCcqqW9YL2MvyN8zDE?purpose=inline",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="project" className="w-full py-16 ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white heading-font">
          Portfolio
        </h1>
        <p className="text-gray-500 mt-2">Most recent work</p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="!py-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className=" rounded-3xl  md:p-10 flex flex-col md:flex-row items-center gap-10 ">

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-72 object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-400">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">

                    <a href={project.demo} target="_blank">
                      <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full text-white flex items-center justify-center gap-2 w-full">
                        <FiExternalLink />
                        Live Demo
                      </button>
                    </a>

                    <a href={project.github} target="_blank">
                      <button className="border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition px-6 py-3 rounded-full text-white flex items-center justify-center gap-2 w-full">
                        <FiGithub />
                        GitHub
                      </button>
                    </a>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;