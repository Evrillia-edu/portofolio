"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface ProjectsProps {
  lang: "EN" | "ID";
}

export default function Projects({ lang }: ProjectsProps) {
  const experiences = {
    EN: [
      {
        title: "Data Scientist Intern",
        category: "PT Indosat Ooredoo Hutchison",
        description: "Analyzing large-scale telecom data, performing Exploratory Data Analysis (EDA), and machine learning modeling.",
        tech: ["Python", "SQL", "EDA", "Data Science"],
        bgCard: "bg-[#FCE7F3]", // Pink cerah
        accentColor: "text-garnet",
      },
      {
        title: "Junior Data Analyst",
        category: "Professional Experience",
        description: "Processing and visualizing business data to derive actionable insights for decision making.",
        tech: ["SQL", "Python", "Data Viz", "Analytics"],
        bgCard: "bg-[#FEF08A]", // Kuning pastel cerah
        accentColor: "text-palm",
      },
      {
        title: "Freelance Robotics Teacher",
        category: "Professional Experience",
        description: "Teaching foundational programming and robotics assembly to spark tech interest in young learners.",
        tech: ["Robotics", "Logic & Algo", "Hardware", "Teaching"],
        bgCard: "bg-[#D9F99D]", // Hijau pastel cerah
        accentColor: "text-palm",
      },
    ],
    ID: [
      {
        title: "Data Scientist Intern",
        category: "PT Indosat Ooredoo Hutchison",
        description: "Menganalisis data telekomunikasi skala besar, melakukan Exploratory Data Analysis (EDA), serta pemodelan Data Science.",
        tech: ["Python", "SQL", "EDA", "Data Science"],
        bgCard: "bg-[#FCE7F3]", // Pink cerah
        accentColor: "text-garnet",
      },
      {
        title: "Junior Data Analyst",
        category: "Pengalaman Profesional",
        description: "Mengolah dan memvisualisasikan data bisnis untuk menghasilkan insight yang berharga bagi pengambilan keputusan.",
        tech: ["SQL", "Python", "Data Viz", "Analytics"],
        bgCard: "bg-[#FEF08A]", // Kuning pastel cerah
        accentColor: "text-palm",
      },
      {
        title: "Pengajar Robotika (Freelance)",
        category: "Pengalaman Profesional",
        description: "Mengajar pemrograman dasar dan rakitan robotika untuk memicu minat teknologi pada generasi muda.",
        tech: ["Robotics", "Logic & Algo", "Hardware", "Teaching"],
        bgCard: "bg-[#D9F99D]", // Hijau pastel cerah
        accentColor: "text-palm",
      },
    ],
  };

  const t = {
    EN: {
      tag: "Track Record",
      title: "Experience & Roles",
      verified: "Verified Role",
    },
    ID: {
      tag: "Pengalaman Kerja",
      title: "Peran & Pengalaman",
      verified: "Peran Terverifikasi",
    },
  }[lang];

  return (
    <section className="py-24 px-6 md:px-12 bg-palm text-dusty relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-cotton uppercase tracking-widest text-sm font-semibold">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-dusty">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences[lang].map((exp, index) => (
            <motion.div
              key={`${index}-${lang}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`${exp.bgCard} p-8 rounded-2xl flex flex-col justify-between border border-white/20 shadow-xl transition-shadow`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${exp.accentColor}`}>
                  {exp.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-palm">
                  {exp.title}
                </h3>
                <p className="text-palm/90 text-sm leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/70 text-palm font-semibold shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-palm pt-4 border-t border-palm/20">
                  <span className="flex items-center gap-1.5 text-xs font-bold">
                    <Award size={14} /> {t.verified}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}