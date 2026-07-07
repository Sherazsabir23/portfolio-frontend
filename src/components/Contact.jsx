import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="w-full py-16 px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="heading-font text-3xl font-bold text-white">
          Contact Me
        </h1>

        <p className="text-gray-500 mt-2">
          Get in touch
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-14 flex flex-col lg:flex-row gap-16">

        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col gap-10">

          {/* Call */}
          <div className="flex items-start gap-4">
            <span className="text-blue-500 text-2xl mt-1">
              <FaPhoneAlt />
            </span>

            <div>
              <h3 className="text-white text-lg font-semibold heading-font">
                Call Me
              </h3>

              <p className="text-gray-500 mt-1">
                +923034926688
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <span className="text-blue-500 text-2xl mt-1">
              <FaEnvelope />
            </span>

            <div>
              <h3 className="text-white text-lg font-semibold heading-font">
                Email
              </h3>

              <p className="text-gray-500 mt-1 break-all">
                sherazsabir.dev@gmail.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <span className="text-blue-500 text-2xl mt-1">
              <FaMapMarkerAlt />
            </span>

            <div>
              <h3 className="text-white text-lg font-semibold heading-font">
                Location
              </h3>

              <p className="text-gray-500 mt-1">
                Lahore, Punjab, Pakistan
              </p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="lg:w-2/3">

          <form className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* Project */}
            <input
              type="text"
              placeholder="Project"
              className="w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
            />

            {/* Message */}
            <textarea
              rows="7"
              placeholder="Message"
              className="w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none resize-none focus:border-blue-500 transition"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-8 py-4 rounded-xl font-medium"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;