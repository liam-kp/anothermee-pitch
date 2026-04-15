"use client";

import { motion } from "framer-motion";

export default function Close() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-black px-6 pt-24 pb-24">
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Plug this into your platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-8 text-xl text-gray-400 sm:text-2xl"
        >
          You bring the audience. We turn them into paying users.
        </motion.p>

        <motion.a
          href="mailto:anothermeateam@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-24 text-sm tracking-wide text-accent/70 transition-colors duration-300 hover:text-accent"
        >
          anothermeateam@gmail.com
        </motion.a>
      </div>
    </section>
  );
}
