"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ lang }: { lang: "EN" | "ID" }) {
  const content = {
    EN: {
      role: "Data Scientist Intern & Tech Enthusiast",
      headlinePart1: "Bridging ",
      headlinePart2: "Data Science",
      headlinePart3: " & Interactive Technology.",
      sub: "Data Scientist Intern @ PT Indosat Ooredoo Hutchison | Full-Stack Developer | IoT & Public Speaker.",
      scroll: "Scroll down to explore",
    },
    ID: {
      role: "Data Scientist Intern & Tech Enthusiast",
      headlinePart1: "Menghubungkan ",
      headlinePart2: "Sains Data",
      headlinePart3: " & Teknologi Interaktif.",
      sub: "Data Scientist Intern @ PT Indosat Ooredoo Hutchison | Full-Stack Developer | IoT & Public Speaker.",
      scroll: "Geser ke bawah untuk mengetahui lebih lanjut",
    },
  };

  const t = content[lang];

  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-dusty text-palm relative overflow-hidden">
      {/* Background Decorative Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-cotton rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-khaki rounded-full blur-3xl -z-10"
      />

      {/* Main Grid Content */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Teks Sebelah Kiri */}
        <div className="lg:col-span-7">
          <motion.p
            key={`role-${lang}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-khaki font-semibold tracking-wide uppercase text-sm md:text-base mb-2"
          >
            {t.role}
          </motion.p>

          <motion.h1
            key={`head-${lang}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-palm leading-tight"
          >
            {t.headlinePart1}
            <span className="text-cotton">{t.headlinePart2}</span>
            {t.headlinePart3}
          </motion.h1>

          <motion.p
            key={`sub-${lang}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-xl text-palm/80 max-w-2xl leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Frame Foto Sebelah Kanan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group w-72 h-80 sm:w-80 sm:h-96">
            {/* Accents Border / Shadow Frame */}
            <div className="absolute inset-0 rounded-3xl bg-garnet/20 rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-3xl bg-cotton/30 -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
            
            {/* Foto Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-parfait/50 bg-dolce">
              <img
                src="/images/evrill cantik.jpeg"
                alt="Evrillia Kurniawati"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center gap-3 text-garnet text-sm font-medium"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span>{t.scroll}</span>
      </motion.div>
    </section>
  );
}