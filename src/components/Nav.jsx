import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md text-white heading-font px-8 py-6">
        <div className="flex items-center justify-between md:justify-around">

          {/* Logo */}
          <h1 className="text-xl font-bold cursor-pointer">
            Sheraz.Dev
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blue-500"
                className="cursor-pointer transition duration-300 hover:text-blue-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blue-500"
                className="cursor-pointer transition duration-300 hover:text-blue-500"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blue-500"
                className="cursor-pointer transition duration-300 hover:text-blue-500"
              >
                My Skills
              </Link>
            </li>

            <li>
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                offset={-30}
                activeClass="text-blue-500"
                className="cursor-pointer transition duration-300 hover:text-blue-500"
              >
                Reviews
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-30}
                activeClass="text-blue-500"
                className="cursor-pointer transition duration-300 hover:text-blue-500"
              >
                Contact Us
              </Link>
            </li>

          </ul>

          {/* Burger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <CiMenuBurger />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-lg flex justify-center items-center transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-4xl text-white"
        >
          <IoClose />
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-8 text-3xl font-semibold">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-500"
              className="cursor-pointer transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-500"
              className="cursor-pointer transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-500"
              className="cursor-pointer transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              My Skills
            </Link>
          </li>

          <li>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-500"
              className="cursor-pointer transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-500"
              className="cursor-pointer transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Nav;