import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            <h2 className="text-2xl font-bold tracking-tight">
            Sheraz<span className="text-blue-600">.</span>
            </h2>
          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                spy
                offset={-80}
                duration={500}
                activeClass="text-blue-600"
                className="cursor-pointer text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Button */}

          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="hidden lg:block"
          >
            <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-blue-600 transition">
              Hire Me
            </button>
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-10"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold cursor-pointer hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-blue-600 transition">
                Hire Me
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;