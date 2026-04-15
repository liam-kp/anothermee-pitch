"use client";

import { motion } from "framer-motion";

export default function HeroPitch() {
  return (
    <section className="flex min-h-screen w-full items-center justify-start border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start text-left">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-xs font-medium uppercase tracking-[0.28em] text-[#C9A84C]"
        >
          The Opportunity
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-[40px] md:text-[44px]"
        >
          You have the users.
          <br />
          You have the conversations.
          <br />
          You&apos;re missing the engine.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-[#8A8070] sm:text-xl"
        >
          AnotherMee is the intelligence layer that turns your traffic
          into revenue — from day one.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          className="mt-16 text-base text-white/80 sm:text-lg"
        >
          You bring the audience. We turn them into paying users.
        </motion.p>
      </div>
    </section>
  );
}
