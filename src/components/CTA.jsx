import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function CTA() {
  return (
    <section className="w-full py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-[#1C1913] border border-[#332D22] p-8 md:p-14"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-sm text-[#6FA88F] mb-4">
              <span className="text-[#6B6455]">$</span> git commit -m
            </p>

            <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3] leading-tight">
              <TypeAnimation
                sequence={["Let's build something amazing together."]}
                speed={30}
                cursor={true}
                repeat={0}
              />
            </h2>

            <p className="text-[#9C9483] font-body mt-5 leading-7">
              Have an idea or a project in mind? I build modern, responsive,
              client-ready web applications — let's turn your brief into a
              shipped product.
            </p>
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-56}
            className="shrink-0"
          >
            <button className="cursor-pointer flex items-center gap-2 px-7 py-4 bg-[#E8A33D] text-[#15130F] font-mono text-sm font-medium hover:bg-[#f0b35f] transition-colors">
              get_in_touch()
              <HiOutlineArrowRight size={18} />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
