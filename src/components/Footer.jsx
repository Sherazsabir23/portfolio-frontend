import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#1C1913] border-t border-[#332D22] font-mono text-xs">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6B6455]">
        {/* Left — status */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#6FA88F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA88F]" />
            main
          </span>
          <span>sheraz.dev</span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>

        {/* Center — quick links */}
        <ul className="flex gap-6">
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              offset={-56}
              className="cursor-pointer hover:text-[#F2EDE3] transition-colors"
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-56}
              className="cursor-pointer hover:text-[#F2EDE3] transition-colors"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-56}
              className="cursor-pointer hover:text-[#F2EDE3] transition-colors"
            >
              contact
            </Link>
          </li>
        </ul>

        {/* Right — socials */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/Sherazsabir23"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2EDE3] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sheraz-ali-454a0236a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2EDE3] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/sherazsabir.dev/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2EDE3] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <span className="text-[#6B6455]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
