"use client";

import { motion } from "framer-motion";

const avatarItems = [
  "Avatar experience",
  "Creator / character identity",
  "Tone, style, and emotional wrapper",
  "User-facing interface",
];

const engineItems = [
  "Real-time decision engine",
  "Conversation management",
  "Memory and personalization",
  "Monetization logic",
  "Content / media matching",
  "Follow-up automation",
  "Multi-language handling",
];

export default function AvatarLayer() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-black px-6 pt-24 pb-24">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Your Platform. Our Intelligence.
        </motion.h2>

        <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-center md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 rounded-2xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.6)] md:py-10"
          >
            <h3 className="text-[1.375rem] font-medium text-white md:text-[1.625rem]">
              Your Avatar Platform
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {avatarItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-relaxed text-zinc-200 md:text-base"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-400">
              Owns the user experience and brand
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-hidden
            className="flex rotate-90 items-center justify-center text-3xl text-zinc-600 md:rotate-0 md:text-4xl"
          >
            →
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-[1.25] rounded-2xl border border-accent/30 bg-zinc-900/80 p-8 shadow-[0_0_44px_-12px_rgb(var(--accent)/0.28)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/45 md:py-12"
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              AnotherMee Intelligence Layer
            </h3>
            <ul className="mt-6 flex flex-col gap-2.5">
              {engineItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-zinc-200 md:text-base"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-16 max-w-2xl text-center text-lg text-zinc-300 sm:text-xl md:text-2xl"
        >
          You own the experience. We drive the revenue.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="mt-5 text-center text-xs text-zinc-500"
        >
          Building in-house: months of iteration. Integrating AnotherMee: weeks.
        </motion.p>
      </div>
    </section>
  );
}
