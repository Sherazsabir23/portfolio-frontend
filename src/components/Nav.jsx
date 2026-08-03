import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const TABS = [
  { to: "home", label: "home.jsx" },
  { to: "about", label: "about.jsx" },
  { to: "skill", label: "skills.jsx" },
  { to: "project", label: "projects.jsx" },
  { to: "testimonial", label: "reviews.jsx" },
  { to: "contact", label: "contact.jsx" },
];

const activeTabClasses =
  "text-[#F2EDE3] bg-[#1C1913] border-t-2 border-t-[#E8A33D] border-b-2 border-b-transparent";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#15130F]/95 backdrop-blur-md border-b border-[#332D22] font-mono">
        <div className="flex items-stretch justify-between max-w-6xl mx-auto px-4 md:px-6">
          {/* "workspace" root */}
          <div className="flex items-center gap-2 pr-4 text-sm text-[#9C9483] shrink-0">
            <span className="text-[#6FA88F]">~</span>
            <span>/sheraz.dev</span>
          </div>

          {/* Desktop tabs */}
          <ul className="hidden md:flex items-stretch overflow-x-auto">
            {TABS.map((tab) => (
              <li key={tab.to} className="flex">
                <Link
                  to={tab.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-56}
                  activeClass={activeTabClasses}
                  className="flex items-center gap-2 px-4 py-4 text-sm text-[#9C9483] border-t-2 border-t-transparent border-b-2 border-b-transparent hover:text-[#F2EDE3] hover:bg-[#1C1913]/60 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FA88F]/70" />
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Burger */}
          <button
            className="md:hidden text-2xl text-[#F2EDE3] py-4"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <CiMenuBurger />
          </button>
        </div>
      </nav>

      {/* Mobile menu — directory listing */}
      <div
        className={`fixed inset-0 z-50 bg-[#15130F] flex flex-col transition-all duration-400 ease-in-out font-mono ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#332D22]">
          <span className="text-sm text-[#9C9483]">
            <span className="text-[#6FA88F]">~</span>/sheraz.dev
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#F2EDE3]"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col px-2 py-4">
          {TABS.map((tab, i) => (
            <li key={tab.to}>
              <Link
                to={tab.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-56}
                onClick={() => setMenuOpen(false)}
                activeClass="text-[#E8A33D] bg-[#1C1913]"
                className="flex items-center gap-4 px-4 py-4 text-lg text-[#F2EDE3] rounded-md cursor-pointer hover:bg-[#1C1913] transition-colors"
              >
                <span className="text-xs text-[#6B6455]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
