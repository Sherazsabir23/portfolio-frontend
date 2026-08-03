import React, { useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "zentro",
    ext: ".app",
    description: "A full-stack multi-vendor ecommerce platform.",
    image: "/zentro.png",
    demo: "https://zentro-frontend-acwj.vercel.app/",
    github: "https://github.com/Sherazsabir23?tab=repositories",
    stack: ["react", "node", "mongodb"],
  },
];

function Projects() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section id="project" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-sm text-[#6FA88F] mb-3">
              <span className="text-[#6B6455]">04</span> — projects
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3]">
              /projects
            </h2>
          </div>
          <p className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#6B6455]">
            scroll <FiArrowRight />
          </p>
        </div>
      </div>

      {/* Horizontal file rail — the signature element */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto px-4 md:px-6 pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* left/right scroll padding so first/last card can center-snap nicely */}
        <div className="shrink-0 w-0 md:w-[calc((100vw-72rem)/2)]" />

        {projects.map((project) => (
          <article
            key={project.id}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] bg-[#1C1913] border border-[#332D22]"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#332D22] font-mono text-xs text-[#6B6455]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
              <span className="ml-2">
                {project.title}
                <span className="text-[#6FA88F]">{project.ext}</span>
              </span>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover border-b border-[#332D22]"
            />

            <div className="p-6">
              <h3 className="font-display text-2xl text-[#F2EDE3] mb-2 capitalize">
                {project.title}
              </h3>
              <p className="text-[#9C9483] font-body text-sm leading-6 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[11px] mb-6">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 border border-[#332D22] text-[#6FA88F]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 font-mono text-xs">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#E8A33D] text-[#15130F] hover:bg-[#f0b35f] transition-colors"
                >
                  <FiExternalLink /> live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#332D22] text-[#F2EDE3] hover:border-[#6FA88F] hover:text-[#6FA88F] transition-colors"
                >
                  <FiGithub /> code
                </a>
              </div>
            </div>
          </article>
        ))}

        <div className="shrink-0 w-4" />
      </div>

      {/* scroll progress track */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-px bg-[#332D22] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-px bg-[#E8A33D] transition-[width] duration-150"
            style={{ width: `${Math.max(progress * 100, projects.length > 1 ? 8 : 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
