import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useMotionValue, useSpring, useTransform, animate, useInView } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { value: 2, suffix: "+", label: "years experience" },
  { value: 15, suffix: "+", label: "projects shipped" },
  { value: 10, suffix: "+", label: "happy clients" },
];

const FLOAT_TECH = [
  { Icon: SiReact, color: "#2563EB", top: "4%", left: "-10%", delay: 0 },
  { Icon: SiNodedotjs, color: "#10B981", top: "20%", left: "94%", delay: 0.5 },
  { Icon: SiTailwindcss, color: "#06B6D4", top: "80%", left: "-8%", delay: 1 },
  { Icon: SiMongodb, color: "#7C3AED", top: "92%", left: "90%", delay: 1.5 },
];

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function Home() {
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 90, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 90, damping: 20 });

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* Ambient background — quiet, never distracting */}
      <div className="absolute inset-0 -z-10 bg-[#F8FAFC]">
        <div className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-[#2563EB]/[0.10] blur-[120px]" />
        <div className="absolute top-10 right-0 w-[24rem] h-[24rem] rounded-full bg-[#7C3AED]/[0.10] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 55% 45% at 50% 15%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 mb-9 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white/80 backdrop-blur-sm text-xs font-medium text-[#475569]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            className="font-display font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.03] text-[2.75rem] sm:text-6xl md:text-[4.75rem]"
          >
           Fast websites.
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            Better business.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="text-[#475569] mt-7 max-w-lg text-base md:text-lg leading-relaxed"
          >
I build fast, scalable MERN applications with clean architecture and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link to="contact" smooth duration={500} offset={-56} className="cursor-pointer">
              <button className="group inline-flex items-center gap-2 rounded-full pl-6 pr-5 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] shadow-[0_10px_30px_rgba(37,99,235,0.32)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,99,235,0.4)] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
                Start a project
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <a href="/CV.pdf" download="Sheraz.Dev_CV.pdf">
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-[#0F172A] border border-[#E2E8F0] bg-white/70 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#94A3B8] hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
                Download CV
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="flex items-center gap-5 mt-10 text-[#94A3B8]"
          >
           {[
  { Icon: FaGithub, href: "https://github.com/Sherazsabir23", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sheraz-ali-454a0236a/", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/sherazsabir.dev/?hl=en", label: "Instagram" },
].map(({ Icon, href, label }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="text-lg transition-all duration-300 ease-out hover:text-[#0F172A] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] rounded-sm"
  >
    <Icon />
  </a>
))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="flex gap-10 mt-16 pt-8 border-t border-[#E2E8F0] max-w-md"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-[#94A3B8] mt-1.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — the recurring "status card" motif */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-[28px] border border-[#E2E8F0] bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-visible transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E8F0]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
              <span className="ml-2 text-xs font-mono text-[#94A3B8]">profile.status</span>
            </div>

            <div className="p-3 overflow-hidden rounded-[18px]">
              <div className="rounded-[18px] overflow-hidden aspect-[4/5] border border-[#E2E8F0] group">
                <div
                  className="w-full h-full bg-[url('/hero.png')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="absolute -bottom-6 -left-8 rounded-2xl border border-[#E2E8F0] bg-white/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.1)] px-4 py-3 flex items-center gap-3"
            >
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center text-white text-xs font-semibold">
                ✓
              </span>
              <div>
                <p className="text-xs font-semibold text-[#0F172A] leading-none">Sheraz Ali</p>
                <p className="text-[11px] text-[#94A3B8] mt-1">Full-stack developer</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 rounded-2xl border border-[#E2E8F0] bg-white/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.1)] px-4 py-2.5 font-mono text-[11px] text-[#2563EB]"
            >
              &lt;/&gt; shipped v2.0
            </motion.div>
          </div>

          {FLOAT_TECH.map(({ Icon, color, top, left, delay }, i) => (
            <motion.div
              key={i}
              style={{ top, left }}
              className="hidden md:flex absolute w-12 h-12 rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-xl shadow-[0_10px_24px_rgba(15,23,42,0.08)] items-center justify-center transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.14)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <Icon size={20} color={color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;