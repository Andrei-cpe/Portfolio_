import React, { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-base-200 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold">
              Contact Me
            </h1>
            <p className="text-base-content/70 leading-relaxed text-sm sm:text-base">
              Have a project in mind, collaboration idea, or just want to say
              hi? Feel free to reach out. I’ll get back to you as soon as
              possible.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                your@email.com
              </a>

              <div className="flex gap-6 pt-2">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="input input-bordered w-full input-sm sm:input-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="input input-bordered w-full input-sm sm:input-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  rows={4}
                  className="textarea textarea-bordered w-full text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full btn-sm sm:btn-md flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {success && (
                <p className="text-success text-xs sm:text-sm pt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
