"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      <div className="container relative mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              Browser-based PDF tools
            </div>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              Modern PDF
              <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                Toolkit
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              View, merge, split and convert PDF files directly in your browser.
              Fast, private and beautifully designed.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
                Get Started
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
                Github
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}