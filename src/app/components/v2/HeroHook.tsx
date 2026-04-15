"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroHook() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#080808] px-6 pt-24 pb-24">
      <div className="flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.26em] text-white/85"
          >
            AnotherMee
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-6 max-w-xl text-sm font-medium text-white/65 sm:text-base"
          >
            An intelligence layer for any platform where conversations drive revenue.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#EAEAEA] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]"
          >
            Built on conversations
            <br />
            <span className="text-[#BFA25A] [text-shadow:0_0_32px_rgb(191_162_90/0.25),0_0_72px_rgb(191_162_90/0.12)]">
              that already pay
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-10 max-w-xl text-xl text-[#A09687] sm:text-[1.375rem]"
          >
            Shaped by real monetization data — not assumptions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex w-full max-w-[640px] flex-1 items-center justify-center"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgb(191_162_90/0.1),transparent_70%)] blur-3xl"
          />
          <Image
            src="/anothermee-pitch/team/AnotherMee_Image.png"
            alt="AnotherMee"
            width={1024}
            height={1024}
            priority
            className="relative h-auto w-full object-contain drop-shadow-[0_0_70px_rgb(191_162_90/0.14)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
