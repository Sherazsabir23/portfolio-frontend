import React, { useRef } from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const PARTICLES = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: 3 + Math.random() * 4,
  duration: 6 + Math.random() * 6,
  delay: Math.random() * 4,
}));

function CTA() {
  const ref = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useTransform([mx, my], ([x, y]) => `radial-gradient(500px circle at ${x}% ${y}%, rgba(255,255,255,0.25), transparent 70%)`);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section className="w-full py-28 px-6">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-6xl mx-auto rounded-[32px] overflow-hidden p-10 md:p-16 bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED]"
      >
        <motion.div className="absolute inset-0 pointer-events-none" style={{ background: glow }} />

        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/40 pointer-events-none"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="font-mono text-sm text-white/70 mb-4">Ready when you are</p>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              <TypeAnimation
                sequence={["Let's build something amazing together."]}
                speed={40}
                cursor
                repeat={0}
              />
            </h2>

            <p className="text-white/80 mt-5 leading-7 max-w-md">
              Have an idea or a project in mind? I build modern, responsive,
              client-ready web applications — let's turn your brief into a
              shipped product.
            </p>
          </div>

          <Link to="contact" smooth duration={500} offset={-56} className="shrink-0">
            <button className="cursor-pointer flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#0F172A] font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[0_10px_30px_rgba(15,23,42,0.2)]">
              Get in touch
              <HiOutlineArrowRight size={18} />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
