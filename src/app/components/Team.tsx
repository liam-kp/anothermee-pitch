"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Member = {
  name: string;
  role: string;
  hook: string;
  description: string;
  credibility: string;
  image: string;
  highlighted?: boolean;
};

const team: Member[] = [
  {
    name: "Asi Meskin",
    role: "CEO",
    hook: "Distribution & monetization",
    description: "Drives partnerships and monetization at scale.",
    credibility: "25+ years closing global partnerships",
    image: "/anothermee-pitch/team/asi.jpg",
  },
  {
    name: "Dvir Pinchevsky",
    role: "AI Systems",
    hook: "Conversation intelligence",
    description: "Builds high-conversion conversation intelligence.",
    credibility: "Stress-tested 20+ LLMs for conversion",
    image: "/anothermee-pitch/team/dvir.jpg",
    highlighted: true,
  },
  {
    name: "Nir Dunia",
    role: "CTO",
    hook: "Scalable infrastructure",
    description: "Architects scalable multi-platform systems.",
    credibility: "Built for real-time multi-channel systems",
    image: "/anothermee-pitch/team/nir.jpg",
  },
  {
    name: "Sefi Sasson",
    role: "Product",
    hook: "Revenue flow design",
    description: "Designs flows that turn interaction into revenue.",
    credibility: "From first message to closed deal",
    image: "/anothermee-pitch/team/sefi.jpg",
  },
  {
    name: "Liran Miller",
    role: "Operations",
    hook: "Live operator systems",
    description: "Turns AI systems into live revenue engines.",
    credibility: "Operating real revenue systems in production",
    image: "/anothermee-pitch/team/liran.jpg",
    highlighted: true,
  },
];

export default function Team() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-t border-white/5 bg-black px-6 pt-24 pb-24">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Built by Operators
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mb-14 text-center text-xs text-zinc-500"
        >
          Built and operated real revenue-generating systems in live
          environments.
        </motion.p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.12,
              }}
              className={`group flex flex-col items-start rounded-2xl border p-7 pt-10 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 md:p-8 md:pt-12 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              } ${
                member.highlighted
                  ? "border-accent/40 bg-zinc-900/70 hover:border-accent/60"
                  : "border-white/10 bg-zinc-900/60 hover:border-accent/40 hover:shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.6)]"
              }`}
            >
              <div className="relative mb-2 h-28 w-28 self-center overflow-hidden rounded-full border border-white/10 bg-zinc-800 shadow-md ring-1 ring-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="mb-5 flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      member.highlighted ? "bg-accent" : "bg-accent/70"
                    } group-hover:shadow-[0_0_8px_rgb(var(--accent)/0.8)]`}
                  />
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {member.name}
                  </h3>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {member.role}
                </p>
              </div>

              <p className="mb-5 text-base font-medium leading-snug text-white">
                {member.hook}
              </p>

              <p className="text-sm leading-relaxed text-zinc-400">
                {member.description}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-zinc-500 opacity-80">
                {member.credibility}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-center text-sm text-zinc-400"
        >
          Built from real-world monetization systems — not theory
        </motion.p>
      </div>
    </section>
  );
}
