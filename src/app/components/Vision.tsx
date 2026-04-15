"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-xs font-medium uppercase tracking-[0.28em] text-[#BFA25A]"
        >
          The Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          Every business has a voice.
          <br />
          We scale it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-12 max-w-2xl text-lg leading-relaxed text-[#A09687] sm:text-xl"
        >
          We replicate how a person thinks, writes, and sounds — enabling any
          business to deliver a continuous, high-quality human conversation
          experience, at scale.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          className="mt-16 max-w-xl text-sm leading-relaxed text-[#BFA25A]/85 sm:text-base"
        >
          From one human. To thousands of conversations.
          <br />
          Without losing the identity.
        </motion.p>
      </div>
    </section>
  );
}
