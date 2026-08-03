import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sm text-[#6FA88F] mb-3">
          <span className="text-[#6B6455]">02</span> — about
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C1913] border border-[#332D22]"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#332D22] font-mono text-xs text-[#6B6455]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6FA88F]" />
            <span className="ml-2">README.md</span>
          </div>

          <div className="p-6 md:p-10 font-body">
            <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3] mb-6">
              About Sheraz
            </h2>

            <p className="text-[#9C9483] leading-8 mb-5">
              I've spent the last two years building web applications end to
              end — from database schema to the pixels a client's customers
              actually click on. I work mainly in the MERN stack, but the
              real job is translating a business problem into something that
              loads fast, doesn't break, and is genuinely pleasant to use.
            </p>

            <p className="text-[#9C9483] leading-8 mb-8">
              I take on freelance projects for startups and small teams who
              need a developer who can own a feature from planning to
              deployment, not just implement a spec. Clear communication,
              realistic timelines, and code the next developer can actually
              read.
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {["react", "node.js", "express", "mongodb", "tailwindcss"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-[#332D22] text-[#6FA88F]"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
