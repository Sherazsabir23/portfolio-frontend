import React from "react";
import { motion } from "framer-motion";

const FRONTEND = [
  ["html", "9.5.0"],
  ["css", "9.0.0"],
  ["javascript", "9.0.0"],
  ["react", "8.5.0"],
  ["tailwindcss", "9.0.0"],
];

const BACKEND = [
  ["node", "9.0.0"],
  ["express", "9.0.0"],
  ["mongodb", "8.5.0"],
  ["mongoose", "8.5.0"],
  ["rest-api", "9.0.0"],
];

function DepList({ title, deps }) {
  return (
    <div className="bg-[#1C1913] border border-[#332D22] flex-1">
      <div className="px-5 py-3 border-b border-[#332D22] font-mono text-xs text-[#6B6455]">
        {title}
      </div>
      <div className="p-5 font-mono text-sm">
        {deps.map(([name, version], i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-baseline justify-between py-2.5 border-b border-[#332D22]/60 last:border-b-0"
          >
            <span className="text-[#F2EDE3]">"{name}"</span>
            <span className="flex-1 border-b border-dotted border-[#332D22] mx-3 translate-y-[-4px]" />
            <span className="text-[#6FA88F]">^{version}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skill" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-[#6FA88F] mb-3">
          <span className="text-[#6B6455]">03</span> — skills
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3] mb-10">
          package.json
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <DepList title="dependencies — frontend" deps={FRONTEND} />
          <DepList title="dependencies — backend" deps={BACKEND} />
        </div>

        <p className="font-mono text-xs text-[#6B6455] mt-6">
          versions reflect years of hands-on experience, not semver
        </p>
      </div>
    </section>
  );
}

export default Skills;
