import React from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiCloudinary,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiRailway,
  SiGithub,
  SiGit,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { TbApi, TbUpload } from "react-icons/tb";

const EASE = [0.16, 1, 0.3, 1];

const CATEGORIES = [
  {
    title: "Frontend",
    accent: "#2563EB",
    description: "Building responsive and interactive user interfaces with the modern React ecosystem.",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "Redux Toolkit", Icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    accent: "#7C3AED",
    description: "Developing secure APIs and scalable server-side applications.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "REST APIs", Icon: TbApi },
      { name: "JWT Authentication", Icon: SiJsonwebtokens },
      { name: "Multer", Icon: TbUpload },
      { name: "Cloudinary", Icon: SiCloudinary },
    ],
  },
  {
    title: "Database",
    accent: "#06B6D4",
    description: "Designing scalable NoSQL databases and optimized data models.",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Mongoose", Icon: SiMongoose },
    ],
  },
  {
    title: "Deployment",
    accent: "#10B981",
    description: "Deploying production-ready applications with modern cloud platforms.",
    skills: [
      { name: "Vercel", Icon: SiVercel },
      { name: "Railway", Icon: SiRailway },
      { name: "GitHub", Icon: SiGithub },
    ],
  },
  {
    title: "Tools",
    accent: "#0F172A",
    description: "Professional development workflow and collaboration tools.",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
     { name: "VS Code", Icon: VscVscode },
      { name: "Postman", Icon: SiPostman },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];

function SkillChip({ name, Icon, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: EASE }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="group flex items-center gap-2.5 rounded-2xl border border-[#E2E8F0] bg-white px-3.5 py-2.5 transition-all duration-300 ease-out hover:border-[#CBD5E1] hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
    >
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3"
        style={{ backgroundColor: `${accent}14`, color: accent }}
      >
        <Icon />
      </span>
      <span className="text-sm font-medium text-[#0F172A] whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

function CategoryCard({ title, accent, description, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group/card relative rounded-[28px] border border-[#E2E8F0] bg-white/70 backdrop-blur-xl p-6 md:p-8 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
    >
      {/* ambient glow */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover/card:opacity-35"
        style={{ backgroundColor: accent }}
      />

      {/* animated border glow on hover */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 pointer-events-none group-hover/card:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
      />

      <div className="relative">
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
          <h3 className="font-display text-lg font-semibold text-[#0F172A]">{title}</h3>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-md">
          {description}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {skills.map((s, i) => (
            <SkillChip key={s.name} {...s} accent={accent} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative w-full py-28 px-6 overflow-hidden">
      <div className="absolute -z-10 top-0 right-1/4 w-96 h-96 rounded-full bg-[#06B6D4]/[0.08] blur-[120px]" />
      <div className="absolute -z-10 bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#7C3AED]/[0.06] blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
            Skills
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            The stack behind the work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.title} className={i === 0 ? "md:col-span-2" : ""}>
              <CategoryCard {...cat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;