import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const STATS = [
  ["role", "full-stack developer"],
  ["stack", "MERN"],
  ["based_in", "Lahore, PK"],
  ["status", "available for work"],
];

function Home() {
  return (
    <section id="home" className="w-full pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
        {/* Left — headline */}
        <div>
          <p className="font-mono text-sm text-[#6FA88F] mb-5">
            <span className="text-[#6B6455]">$</span> whoami
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl text-[#F2EDE3] font-normal">
            Transforming ideas into{" "}
            <span className="italic text-[#E8A33D]">powerful</span>{" "}
            digital{" "}
            <span className="relative inline-block">
              experiences
              <span className="font-mono text-2xl md:text-3xl text-[#6B6455] align-top">
                ;
              </span>
            </span>
          </h1>

          <p className="font-body text-[#9C9483] mt-6 max-w-lg text-base leading-7">
            I'm a Full Stack Developer who builds modern, responsive web
            applications — simple, fast, and easy to use. I turn client
            briefs into shipped products.
          </p>

          <div className="flex flex-wrap gap-4 mt-9 font-mono text-sm">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-56}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8A33D] text-[#15130F] font-medium hover:bg-[#f0b35f] transition-colors"
            >
              get_in_touch()
            </Link>
            <a href="/CV.pdf" download="Sheraz.Dev_CV.pdf">
              <button className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 border border-[#332D22] text-[#F2EDE3] hover:border-[#6FA88F] hover:text-[#6FA88F] transition-colors">
                ↓ download_cv
              </button>
            </a>
          </div>
        </div>

        {/* Right — terminal-style identity card, not a floating mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#1C1913] border border-[#332D22] font-mono text-sm w-full"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#332D22]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
            <span className="ml-2 text-xs text-[#6B6455]">profile.sh</span>
          </div>

          <div className="p-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[url('/hero.jpeg')] bg-cover bg-center border border-[#332D22] shrink-0" />
              <div>
                <p className="text-[#F2EDE3] text-base">Sheraz Ali</p>
                <p className="text-[#6FA88F] text-xs mt-1">● online</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {STATS.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-[#6B6455]">{key}</span>
                  <span className="text-[#9C9483] text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
