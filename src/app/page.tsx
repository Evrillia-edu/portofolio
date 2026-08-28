"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"EN" | "ID">("EN");

  return (
    <SmoothScroll>
      <Navbar lang={lang} setLang={setLang} />
      <main className="w-full">
        <Hero lang={lang} />
        <AboutSkills lang={lang} />
        <Gallery lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </SmoothScroll>
  );
}