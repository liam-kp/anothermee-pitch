"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RevenueInMotion() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Revenue in motion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-14 max-w-2xl text-center text-base text-zinc-400 sm:text-lg"
        >
          Real transactions flowing through the system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative w-full overflow-hidden rounded-2xl border border-emerald-500/25 shadow-[0_0_60px_-12px_rgb(34_197_94/0.28)] ring-1 ring-white/5"
        >
          <Image
            src="/anothermee-pitch/team/SALE-DASH.jpeg"
            alt="AnotherMee live revenue dashboard"
            width={1024}
            height={587}
            sizes="(min-width: 1280px) 1152px, 94vw"
            priority
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
