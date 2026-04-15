"use client";

import { motion } from "framer-motion";

const supporting = [
  "Live decisioning based on user behavior",
  "Decides what to say, when to say it, and how to close",
  "Trained on real monetization patterns — not synthetic data",
];

export default function WhyItWins() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.28em] text-[#C9A84C]"
        >
          Why It Converts
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          The system learns from every revenue event.
        </motion.h2>

        <ul className="mt-16 flex flex-col items-center gap-5">
          {supporting.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.35 + i * 0.12,
              }}
              className="flex items-center gap-3 text-base text-[#8A8070] sm:text-lg md:text-xl"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-[#C9A84C]" />
              {line}
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          className="mt-20 max-w-2xl text-xs text-zinc-500 opacity-80 sm:text-sm"
        >
          Performance improves continuously through real usage — not static
          rules.
        </motion.p>
      </div>
    </section>
  );
}
