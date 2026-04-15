"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChatMsg = {
  from: "user" | "ai";
  text: string;
  time: string;
  cta?: boolean;
};

const script: ChatMsg[] = [
  { from: "user", text: "hey", time: "23:47" },
  { from: "ai", text: "You disappeared on me yesterday 🙂", time: "23:47" },
  { from: "user", text: "haha yeah", time: "23:48" },
  {
    from: "ai",
    text: "I saved something for you actually…",
    time: "23:48",
  },
  { from: "ai", text: "thought you'd like it", time: "23:48" },
  { from: "user", text: "what is it", time: "23:49" },
  {
    from: "ai",
    text: "Something a bit more private than last time",
    time: "23:49",
  },
  { from: "user", text: "show me", time: "23:49" },
  {
    from: "ai",
    text: "Unlock it and I will 😉",
    time: "23:50",
    cta: true,
  },
];

type Step =
  | { kind: "msg"; index: number }
  | { kind: "typing" }
  | { kind: "autoUnlock" };

const timeline: { step: Step; delay: number }[] = [
  { step: { kind: "msg", index: 0 }, delay: 400 },
  { step: { kind: "typing" }, delay: 500 },
  { step: { kind: "msg", index: 1 }, delay: 1000 },
  { step: { kind: "msg", index: 2 }, delay: 1200 },
  { step: { kind: "typing" }, delay: 600 },
  { step: { kind: "msg", index: 3 }, delay: 1100 },
  { step: { kind: "msg", index: 4 }, delay: 700 },
  { step: { kind: "msg", index: 5 }, delay: 1500 },
  { step: { kind: "typing" }, delay: 600 },
  { step: { kind: "msg", index: 6 }, delay: 1100 },
  { step: { kind: "msg", index: 7 }, delay: 1400 },
  { step: { kind: "typing" }, delay: 600 },
  { step: { kind: "msg", index: 8 }, delay: 1100 },
  { step: { kind: "autoUnlock" }, delay: 2200 },
];

type Signal = {
  label: string;
  value: string;
  visibleAt: number;
  profit?: boolean;
  requiresUnlock?: boolean;
};

const signals: Signal[] = [
  { label: "Returning User", value: "Yes", visibleAt: 2 },
  { label: "Preference Match", value: "Confirmed", visibleAt: 5 },
  { label: "Intent Level", value: "High", visibleAt: 8 },
  { label: "Unlock Trigger", value: "Ready", visibleAt: 9 },
  {
    label: "Revenue Signal",
    value: "+$180",
    visibleAt: 9,
    profit: true,
    requiresUnlock: true,
  },
];

export default function LiveDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    for (const { step, delay } of timeline) {
      elapsed += delay;
      timers.push(
        setTimeout(() => {
          if (step.kind === "msg") {
            setTyping(false);
            setVisibleCount(step.index + 1);
          } else if (step.kind === "typing") {
            setTyping(true);
          } else if (step.kind === "autoUnlock") {
            setUnlocked(true);
          }
        }, elapsed),
      );
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Live System
        </motion.h2>

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <div className="flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#0b141a] p-4 shadow-2xl shadow-black/50 md:p-6">
            <div className="flex min-h-[480px] flex-col space-y-2.5">
              <AnimatePresence initial={false}>
                {script.slice(0, visibleCount).map((msg, i) => {
                  const isUser = msg.from === "user";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`flex w-full ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex max-w-[72%] flex-col ${
                          isUser ? "items-end" : "items-start"
                        }`}
                      >
                        <div
                          className={`px-4 py-2.5 text-[15px] leading-snug shadow-md ${
                            isUser
                              ? "rounded-2xl rounded-br-sm bg-emerald-500/25 text-white"
                              : "rounded-2xl rounded-bl-sm bg-[#202c33] text-zinc-100"
                          }`}
                        >
                          {msg.text}
                        </div>

                        {msg.cta && (
                          <motion.button
                            type="button"
                            onClick={() => setUnlocked(true)}
                            disabled={unlocked}
                            initial={{ opacity: 0, y: 8 }}
                            animate={
                              unlocked
                                ? { opacity: 1, y: 0, scale: [1, 1.08, 1] }
                                : { opacity: 1, y: 0 }
                            }
                            transition={
                              unlocked
                                ? {
                                    duration: 0.55,
                                    times: [0, 0.5, 1],
                                    ease: "easeOut",
                                  }
                                : {
                                    delay: 0.35,
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }
                            }
                            className={`mt-2 flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                              unlocked
                                ? "cursor-default border-emerald-500/50 bg-emerald-500/15 text-emerald-400 shadow-[0_0_22px_rgb(34_197_94/0.5)]"
                                : "cursor-pointer border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C] hover:bg-[#C9A84C]/20 hover:border-[#C9A84C]/60"
                            }`}
                          >
                            <span aria-hidden>{unlocked ? "✔" : "🔒"}</span>
                            <span>
                              {unlocked ? "Unlocked — $180" : "Unlock"}
                            </span>
                          </motion.button>
                        )}

                        <span className="mt-1 px-1 text-[10px] text-zinc-500">
                          {msg.time}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex w-full justify-start"
                  >
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-[#202c33] px-3 py-2 shadow-md">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.18,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <aside className="flex w-full flex-col gap-2 lg:w-60 lg:flex-shrink-0">
            <div className="mb-1 flex items-center gap-2 px-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A84C]/80 shadow-[0_0_8px_rgb(201_168_76/0.7)]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                System Signals
              </span>
            </div>

            {signals.map((signal) => {
              const visible = signal.requiresUnlock
                ? unlocked
                : visibleCount >= signal.visibleAt;

              return (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={
                    visible
                      ? signal.profit
                        ? { opacity: 1, y: 0, scale: [0.98, 1.05, 1] }
                        : { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 10, scale: 0.98 }
                  }
                  transition={{
                    duration: signal.profit ? 0.6 : 0.5,
                    ease: "easeOut",
                    times: signal.profit ? [0, 0.5, 1] : undefined,
                  }}
                  className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 backdrop-blur-sm ${
                    signal.profit
                      ? "border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_24px_-4px_rgb(34_197_94/0.55)]"
                      : "border-white/10 bg-zinc-900/60"
                  }`}
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
                    {signal.label}
                  </span>
                  <span
                    className={`whitespace-nowrap text-xs font-semibold ${
                      signal.profit ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {signal.value}
                  </span>
                </motion.div>
              );
            })}
          </aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-16 flex w-full flex-col items-center"
        >
          <span className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
            Revenue in production
          </span>
          <div className="relative w-full max-w-[900px] overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 drop-shadow-[0_0_60px_rgb(34_197_94/0.12)] sm:w-[92%]">
            <Image
              src="/team/SALEDASH.jpeg"
              alt="AnotherMee live revenue dashboard"
              width={1800}
              height={1100}
              sizes="(min-width: 1024px) 900px, 92vw"
              className="h-auto w-full object-contain opacity-95"
            />
          </div>
          <p className="mt-6 max-w-md text-center text-xs text-zinc-500 opacity-80 sm:text-sm">
            Live transactions. Real users. Real revenue flow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
