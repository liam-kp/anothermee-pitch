"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Proof() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#C9A84C]"
        >
          Proof
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mb-4 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          The system is live.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mb-14 max-w-2xl text-center text-base text-zinc-400 sm:text-lg"
        >
          Real users. Real conversations. Real audio. Running 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#C9A84C]/30 bg-zinc-900/70 shadow-[0_0_60px_-12px_rgb(201_168_76/0.38)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C9A84C]/50 hover:shadow-[0_0_72px_-8px_rgb(201_168_76/0.48)]"
        >
          <div className="flex flex-col gap-2 px-7 pt-7 pb-4 md:px-9 md:pt-9">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
                System Layer
              </span>
            </div>
            <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Live conversations, in production.
            </h3>
          </div>

          <div className="relative mx-5 mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_2px_12px_rgb(0_0_0/0.55)] md:mx-7 md:mb-7">
            <Image
              src="/anothermee-pitch/team/Voice Example - Chat.png"
              alt="AnotherMee live conversation with voice interaction"
              width={2882}
              height={1316}
              sizes="(min-width: 1024px) 1040px, 92vw"
              priority
              className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/65 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                Live · Voice + Chat
              </span>
            </div>
          </div>

          <p className="px-7 pb-7 text-sm leading-relaxed text-zinc-400 md:px-9 md:pb-9 md:text-base">
            Production traffic. Real audio interaction. Nothing staged.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-12 text-center text-xs text-zinc-500"
        >
          Not a prototype. Not a mockup. A working system in production.
        </motion.p>
      </div>
    </section>
  );
}
