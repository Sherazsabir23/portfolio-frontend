import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Zentro",
    description:
      "A full-stack multi-vendor ecommerce platform — vendor storefronts, cart, checkout and an admin dashboard, built solo end to end.",
    image: "/zentro.png",
    demo: "https://zentro-frontend-acwj.vercel.app/",
    github: "https://github.com/Sherazsabir23?tab=repositories",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
 {
    id: 2,
    title: "Kyphora",
    description:
      "A secure SaaS vault for storing and managing sensitive credentials, with encrypted storage and access control built for teams.",
    image: "/kyphora.png",
    demo: "https://your-kyphora-demo-url.vercel.app/",
    github: "https://github.com/Sherazsabir23?tab=repositories",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
]

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Browser Mockup */}
      <div className="flex justify-center">
        <motion.div
          whileHover="hover"
          className="relative w-full max-w-[580px] rounded-[26px] border border-[#E2E8F0] bg-white overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
        >
          {/* Browser Top */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />

            <span className="ml-4 text-[11px] font-mono text-[#94A3B8] truncate">
              {project.demo.replace("https://", "")}
            </span>
          </div>

          {/* Image */}
          <div className="relative bg-[#F8FAFC] flex items-center justify-center p-6">
            <motion.img
              src={project.image}
              alt={project.title}
              variants={{
                hover: {
                  scale: 1.04,
                },
              }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-xl object-contain"
            />

            {/* Hover Overlay */}
            <motion.div
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0F172A]"
              >
                <FiExternalLink />
                Live Preview
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white"
              >
                <FiGithub />
                GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`${
          reversed
            ? "lg:pr-10 text-left"
            : "lg:pl-10 text-left"
        }`}
      >
        <p className="mb-3 text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
          Featured Project
        </p>

        <h3 className="mb-5 font-display text-4xl font-bold tracking-tight text-[#0F172A]">
          {project.title}
        </h3>

        <p className="mb-7 max-w-lg text-lg leading-8 text-[#475569]">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2563EB]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-[#0F172A]"
          >
            View Live

            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-[#2563EB]"
          >
            GitHub

            <FiGithub />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
function Projects() {
  return (
    <section id="projects" className="relative w-full py-28 px-6 overflow-hidden">
      <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 rounded-full bg-[#2563EB]/[0.08] blur-[130px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
            Selected work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight max-w-xl">
            Products, not just pages.
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
