import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const LINKS = [
  { to: "about", label: "About" },
  { to: "skill", label: "Skills" },
  { to: "project", label: "Work" },
  { to: "testimonial", label: "Reviews" },
  { to: "contact", label: "Contact" },
];

const SOCIALS = [
  { Icon: FaGithub, href: "https://github.com/Sherazsabir23", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sheraz-ali-454a0236a/", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/sherazsabir.dev/?hl=en", label: "Instagram" },
];

function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-[#E2E8F0]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="max-w-xs">
            <Link to="home" smooth duration={500} offset={-80} className="inline-flex items-center gap-2 cursor-pointer">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-semibold text-sm">
                S
              </span>
              <span className="font-semibold text-[#0F172A] text-lg tracking-tight">
                Sheraz<span className="text-[#2563EB]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] mt-4 leading-6">
              Full-stack developer building fast, polished products for
              startups and small teams.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-wide mb-4">Navigate</p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-wide mb-4">Connect</p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-white hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#7C3AED] hover:border-transparent transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8 border-t border-[#E2E8F0] text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Sheraz Ali. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-[#7C3AED]">♥</span> and a lot of coffee
          </p>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="home"
              smooth
              duration={500}
              offset={-80}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-white hover:bg-[#0F172A] hover:border-[#0F172A] transition-colors cursor-pointer"
            >
              <FaArrowUp size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
