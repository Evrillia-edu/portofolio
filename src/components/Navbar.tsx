"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

interface NavbarProps {
  lang: "EN" | "ID";
  setLang: (lang: "EN" | "ID") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-dusty/80 backdrop-blur-md border-b border-palm/10 flex justify-between items-center"
    >
      <span className="font-bold text-lg tracking-wider text-garnet">
        EVRILLIA.
      </span>

      <div className="flex items-center gap-4">
        {/* Switcher Toggle ID / EN */}
        <div className="flex items-center bg-dolce/60 p-1 rounded-full border border-garnet/20">
          <button
            onClick={() => setLang("EN")}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
              lang === "EN"
                ? "bg-garnet text-dusty shadow-md"
                : "text-palm/70 hover:text-garnet"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ID")}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
              lang === "ID"
                ? "bg-garnet text-dusty shadow-md"
                : "text-palm/70 hover:text-garnet"
            }`}
          >
            ID
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/evrillia-kurniawati-034539325"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-khaki text-palm font-bold hover:bg-cotton hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.header>
  );
}