import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

function CTA() {
  return (
    <section className="w-full py-16  sm:px-4">
      <div className="w-full max-w-6xl  mx-auto bg-[#161b22] rounded-3xl p-6 md:p-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white leading-tight">
              Let's Build Something Amazing Together.
            </h2>

            <p className="text-gray-400 mt-5 leading-7 max-w-xl">
              Have an idea or a project in mind? I'm always excited to
              create modern, responsive, and user-friendly web applications.
              Let's turn your vision into reality.
            </p>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-30}
              className="inline-block mt-8"
            >
              <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-7 py-3 rounded-full text-white flex items-center gap-2 cursor-pointer">
                Get In Touch
                <HiOutlineArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-6xl">💻</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;