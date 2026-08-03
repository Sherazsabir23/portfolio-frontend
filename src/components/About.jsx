import React from "react";
import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineServer, HiOutlineShoppingCart, HiOutlineLightningBolt } from "react-icons/hi";

const TIMELINE = [
  { year: "2023", title: "Started freelancing", desc: "First paid MERN projects for small teams." },
  { year: "2024", title: "Zento platform", desc: "Built a full multi-vendor ecommerce product solo." },
  { year: "2025", title: "Kyphora SaaS Product", desc: "Built Kyphora — a secure SaaS platform for managing passwords, notes, and digital secrets with end-to-end encryption." },
  { year: "Now", title: "Independent developer", desc: "Owning projects end to end for founders." },
];

const STACK = ["react", "node.js", "express", "mongodb", "tailwindcss"];

const SERVICES = [
  {
    Icon: HiOutlineCode,
    title: "Full-Stack Web Applications",
    desc: "Build complete web applications from idea to deployment using the MERN stack.",
  },
  {
    Icon: HiOutlineServer,
    title: "SaaS & Business Platforms",
    desc: "Scalable SaaS products, dashboards, admin panels, authentication, and business automation.",
  },
  {
    Icon: HiOutlineShoppingCart,
    title: "Custom Web Solutions",
    desc: "Portfolio websites, company websites, booking systems, CRMs, eCommerce, and tailored business tools.",
  },
  {
    Icon: HiOutlineLightningBolt,
    title: "APIs & Performance",
    desc: "Secure REST APIs, database design, optimization, deployment, and long-term scalability.",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
      {children}
    </span>
  );
}

function About() {
  return (
    <section id="about" className="relative w-full py-28 px-6 overflow-hidden">
      <div className="absolute -z-10 top-1/3 left-0 w-80 h-80 rounded-full bg-[#7C3AED]/[0.08] blur-[110px]" />

      {/* ---------- Part one: the story ---------- */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight max-w-2xl leading-tight">
            Two years of turning briefs into shipped products.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] border border-[#E2E8F0] bg-[url('/about.png')] bg-cover bg-center shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/60 px-4 py-3">
                <p className="text-xs text-[#94A3B8]">based in</p>
                <p className="text-sm font-semibold text-[#0F172A]">Lahore, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-[#E2E8F0] bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.05)]"
            >
              <p className="text-[#475569] leading-8 mb-5">
                I've spent the last two years building web applications end to
                end — from database schema to the pixels a client's customers
                actually click on. I work mainly in the MERN stack, but the
                real job is translating a business problem into something that
                loads fast, doesn't break, and is genuinely pleasant to use.
              </p>
              <p className="text-[#475569] leading-8 mb-8">
                I take on freelance projects for startups and small teams who
                need a developer who can own a feature from planning to
                deployment, not just implement a spec.
              </p>

              <div className="flex flex-wrap gap-2">
                {STACK.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#E2E8F0] text-[#2563EB] bg-[#2563EB]/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="relative pl-8">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2563EB] via-[#7C3AED] to-transparent" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2563EB]" />
                    <p className="text-xs font-mono text-[#94A3B8] mb-1">{item.year}</p>
                    <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
                    <p className="text-sm text-[#94A3B8] mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Transition ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex items-center gap-4 my-20"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E2E8F0] to-[#E2E8F0]" />
        <p className="text-sm text-[#94A3B8] font-medium shrink-0">Here's how that translates into work</p>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E2E8F0] to-[#E2E8F0]" />
      </motion.div>

      {/* ---------- Part two: services ---------- */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Eyebrow>What I do</Eyebrow>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-[#0F172A] tracking-tight max-w-xl leading-tight">
            Four ways I can help build your product.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-[24px] border border-[#E2E8F0] bg-white/70 backdrop-blur-xl p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)] hover:border-transparent relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#2563EB]/[0.04] to-[#7C3AED]/[0.04] pointer-events-none" />
              <span className="relative inline-flex w-11 h-11 rounded-2xl items-center justify-center text-xl text-[#2563EB] bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 mb-5">
                <Icon />
              </span>
              <h4 className="relative font-display text-lg font-semibold text-[#0F172A] mb-2">{title}</h4>
              <p className="relative text-sm text-[#475569] leading-6">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
