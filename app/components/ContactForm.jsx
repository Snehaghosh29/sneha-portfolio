"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const WEB3_ACCESS_KEY = "df78b630-e961-41dc-94e3-2be5b1ff03c8";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message Sent Successfully! ✨");
      e.target.reset();
    } else {
      toast.error("Failed to send message. Try again.");
    }

    setIsSending(false);
  };

  return (
    <div id="contact" className="relative py-20 flex justify-center">
      <Toaster />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/neon-grid.svg')] opacity-30 pointer-events-none"></div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl 
        rounded-3xl px-10 py-12 w-full max-w-xl"
      >
        <h2 className="text-center text-4xl font-bold uppercase 
          bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text mb-10">
          Get In Touch
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Hidden Web3Forms Key */}
          <input type="hidden" name="access_key" value={WEB3_ACCESS_KEY} />

          {/* Auto reply name */}
          <input type="hidden" name="from_name" value="Sneha's Portfolio" />

          {/* SUBJECT */}
          <input type="hidden" name="subject" value="New Contact Message from Portfolio" />

          {/* NAME */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/30 
              text-slate-100 outline-none focus:border-cyan-400 transition duration-300"
            />
          </motion.div>

          {/* EMAIL */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/30 
              text-slate-100 outline-none focus:border-cyan-400 transition duration-300"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/30 
              text-slate-100 outline-none focus:border-cyan-400 transition duration-300"
            />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            whileTap={{ scale: isSending ? 1 : 0.97 }}
            className={`w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 
            py-3 text-lg font-semibold text-slate-900 transition-all 
            ${isSending ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}
