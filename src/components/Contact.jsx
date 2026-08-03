import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const fieldClasses =
  "w-full bg-[#15130F] border border-[#332D22] px-4 py-3.5 text-[#F2EDE3] font-body outline-none focus:border-[#6FA88F] transition-colors placeholder:text-[#6B6455]";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto mb-12">
        <p className="font-mono text-sm text-[#6FA88F] mb-3">
          <span className="text-[#6B6455]">06</span> — contact
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE3]">
          Get in touch
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left — contact.config */}
        <div className="lg:w-1/3 bg-[#1C1913] border border-[#332D22] h-fit">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#332D22] font-mono text-xs text-[#6B6455]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B6455]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
            <span className="ml-2">contact.config</span>
          </div>

          <div className="p-6 flex flex-col gap-8 font-mono text-sm">
            <div className="flex items-start gap-4">
              <span className="text-[#6FA88F] text-lg mt-0.5">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-[#6B6455] text-xs mb-1">phone</p>
                <p className="text-[#F2EDE3]">+92 303 4926688</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#6FA88F] text-lg mt-0.5">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-[#6B6455] text-xs mb-1">email</p>
                <p className="text-[#F2EDE3] break-all">
                  sherazsabir.dev@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#6FA88F] text-lg mt-0.5">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-[#6B6455] text-xs mb-1">location</p>
                <p className="text-[#F2EDE3]">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={fieldClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={fieldClasses}
              />
            </div>

            <input
              type="text"
              name="project"
              placeholder="Project"
              value={formData.project}
              onChange={handleChange}
              className={fieldClasses}
            />

            <textarea
              rows="7"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${fieldClasses} resize-none`}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="font-mono text-sm bg-[#E8A33D] hover:bg-[#f0b35f] disabled:bg-[#6B6455] transition-colors text-[#15130F] px-8 py-4 font-medium"
            >
              {loading ? "sending..." : "send_message()"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
