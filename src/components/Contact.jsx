import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const INFO = [
  { Icon: FaPhoneAlt, label: "Phone", value: "+92 303 4926688" },
  { Icon: FaEnvelope, label: "Email", value: "sherazsabir.dev@gmail.com" },
  { Icon: FaMapMarkerAlt, label: "Location", value: "Lahore, Punjab, Pakistan" },
];

const SOCIALS = [
  { Icon: FaGithub, href: "https://github.com/Sherazsabir23", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sheraz-ali-454a0236a/", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/sherazsabir.dev/?hl=en", label: "Instagram" },
];

function Field({ label, name, type = "text", value, onChange, textarea }) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        type={!textarea ? type : undefined}
        name={name}
        rows={textarea ? 6 : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full bg-white/70 backdrop-blur-sm border rounded-2xl px-4 pt-6 pb-2.5 text-[#0F172A] outline-none transition-colors resize-none
          ${focused ? "border-[#2563EB]" : "border-[#E2E8F0]"}`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-[#94A3B8]
          ${focused || filled ? "top-2 text-[11px] text-[#2563EB]" : "top-4 text-sm"}`}
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);
      toast.success("Email sent successfully");
      setFormData({ name: "", email: "", project: "", message: "" });
      setSent(true);
      setTimeout(() => setSent(false), 2200);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 px-6 overflow-hidden">
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 rounded-full bg-[#2563EB]/[0.08] blur-[130px]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-5">
            Let's start a conversation.
          </h2>
          <p className="text-[#475569] leading-7 max-w-md mb-10">
            Tell me about your project and I'll get back within a day.
            Available for freelance work right now.
          </p>

          <div className="space-y-5 mb-10">
            {INFO.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white/70 backdrop-blur-sm px-5 py-4"
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Icon />
                </span>
                <div>
                  <p className="text-[11px] text-[#94A3B8]">{label}</p>
                  <p className="text-sm font-medium text-[#0F172A] break-all">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-white hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#7C3AED] hover:border-transparent transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-[28px] border border-[#E2E8F0] bg-white/70 backdrop-blur-xl p-7 md:p-9 shadow-[0_20px_60px_rgba(15,23,42,0.06)] space-y-5"
        >
          <div className="flex items-center gap-2 pb-5 mb-2 border-b border-[#E2E8F0]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
            <span className="ml-2 text-xs font-mono text-[#94A3B8]">new_message.form</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Name" name="name" value={formData.name} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>

          <Field label="Project" name="project" value={formData.project} onChange={handleChange} />
          <Field label="Message" name="message" value={formData.message} onChange={handleChange} textarea />

          <button
            type="submit"
            disabled={loading}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] disabled:opacity-60 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
          >
            {loading ? "Sending…" : sent ? "Message sent ✓" : "Send message"}
            {!loading && !sent && (
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
