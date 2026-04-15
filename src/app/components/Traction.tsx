"use client";

import { motion } from "framer-motion";

type Metric = {
  title: string;
  value: string | string[];
  highlight?: boolean;
};

const metrics: Metric[] = [
  {
    title: "Channels & Integrations",
    value: ["WhatsApp", "Telegram", "Platforms", "API"],
  },
  {
    title: "Status",
    value: "Real Conversations. Real Revenue.",
    highlight: true,
  },
  { title: "Deployment", value: "Running in Production" },
];

export default function Traction() {
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
          Live. In Production.
        </motion.h2>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {metrics.map((metric, i) => {
            const isStacked = Array.isArray(metric.value);
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.18,
                }}
                className={`flex flex-col justify-center rounded-2xl border px-10 py-14 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 md:px-12 md:py-20 ${
                  isStacked ? "items-start text-left" : "items-center text-center"
                } ${
                  metric.highlight
                    ? "border-accent/40 bg-zinc-900/70 shadow-glow-accent hover:border-accent/60 hover:shadow-glow-accent-strong"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.6)]"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.18 + 0.15 }}
                  className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500"
                >
                  {metric.title}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: [0, 0.3, 1, 0.7, 1], y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.18 + 0.3,
                    ease: "easeOut",
                    times: [0, 0.3, 0.55, 0.75, 1],
                  }}
                  className={`mt-6 flex flex-col text-white ${
                    isStacked ? "items-start" : "items-center"
                  }`}
                >
                  {Array.isArray(metric.value) ? (
                    <div className="flex flex-col items-start gap-2">
                      {metric.value.map((line) => (
                        <span
                          key={line}
                          className="text-xl font-semibold leading-tight md:text-2xl"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-2xl font-semibold md:text-3xl">
                      {metric.value}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-12 text-center text-xs text-zinc-500"
        >
          Every conversation improves the next. This compounds over time.
        </motion.p>
      </div>
    </section>
  );
}
