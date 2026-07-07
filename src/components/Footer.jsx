import React from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-blue-500  ">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="heading-font text-3xl font-bold text-white">
              Sheraz.Dev
            </h2>

            <p className="text-blue-100 mt-2">
              MERN Stack Developer
            </p>
          </div>

          {/* Center */}
          <ul className="flex flex-wrap justify-center gap-8 text-white font-medium">
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right */}
          <div className="flex gap-5 text-white text-xl">

            <a
              href="https://github.com/Sherazsabir23"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sheraz-ali-454a0236a/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/sherazsabir.dev/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-400 mt-10 pt-6 text-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Sheraz.Dev. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;