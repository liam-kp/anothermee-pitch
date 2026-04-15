"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const blocks = [
  { label: "User", sub: "Incoming intent" },
  {
    label: "Channels & Integrations",
    sub: "WhatsApp · Telegram · Slack · CRM · API",
  },
  {
    label: "AI Engine",
    sub: "Real-time decisioning",
    items: [
      "Intent Detection",
      "Identity & Context",
      "Memory",
      "Monetization Logic",
      "Content Matching",
    ],
  },
  { label: "Adaptive Response", sub: "Text · Voice · Media" },
  { label: "Conversion", sub: "Revenue event" },
];

const cardFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function SystemFlow() {
  const [engineHover, setEngineHover] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgb(255_255_255_/_0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.05)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgb(201_168_76_/_0.16),transparent_62%)] blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          What We Built
        </motion.h2>

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
          {blocks.map((block, i) => {
            const isEngine = block.label === "AI Engine";
            const isOutgoingConnector = i === 2;

            return (
              <div
                key={block.label}
                className="flex flex-col items-center gap-6 lg:flex-1 lg:flex-row lg:justify-center"
              >
                <div className="flex w-full flex-col items-center">
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={cardFade}
                    onMouseEnter={() => isEngine && setEngineHover(true)}
                    onMouseLeave={() => isEngine && setEngineHover(false)}
                    className={`flex w-full flex-col items-center justify-center rounded-2xl border bg-zinc-900/60 px-6 py-6 text-center backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                      isEngine
                        ? "border-[#C9A84C]/40 shadow-[0_0_44px_-12px_rgb(201_168_76_/_0.32)] hover:border-[#C9A84C]/60 hover:shadow-[0_0_56px_-8px_rgb(201_168_76_/_0.42)] lg:py-10"
                        : "border-white/10 hover:border-white/20 hover:shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.6)] lg:py-8"
                    }`}
                  >
                    <span
                      className={`font-medium text-white ${
                        isEngine
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {block.label}
                    </span>

                    {isEngine && block.items && (
                      <div className="mt-4 w-full rounded-xl border border-white/5 bg-black/40 p-2 shadow-[inset_0_2px_12px_rgb(0_0_0_/_0.55)]">
                        <div className="flex flex-col gap-1.5">
                          {block.items.map((item) => (
                            <div
                              key={item}
                              className={`rounded-lg border px-3 py-1.5 text-xs transition-all duration-300 ${
                                engineHover
                                  ? "border-[#C9A84C]/40 bg-black/60 text-white"
                                  : "border-white/10 bg-black/40 text-zinc-300"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15 + 0.4,
                      ease: "easeOut",
                    }}
                    className="mt-3 block w-full text-center text-xs tracking-wide text-zinc-400"
                  >
                    {block.sub}
                  </motion.span>
                </div>

                {i < blocks.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.5, 0.9, 0.5] }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 2.8,
                      delay: i * 0.15 + 0.4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      times: [0, 0.15, 0.5, 1],
                    }}
                    aria-hidden
                    className={`-mt-4 rotate-90 select-none text-2xl transition-colors duration-300 lg:mt-0 lg:rotate-0 lg:text-3xl ${
                      isOutgoingConnector && engineHover
                        ? "text-[#C9A84C]"
                        : "text-[#C9A84C]/60"
                    }`}
                  >
                    →
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
