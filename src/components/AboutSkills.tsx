"use client";

import { motion } from "framer-motion";
import { Cpu, Database, LineChart, Mic, Server } from "lucide-react";

export default function AboutSkills({ lang }: { lang: "EN" | "ID" }) {
  const content = {
    EN: {
      aboutTag: "About Me",
      aboutTitle: "Data, Tech, and Public Speaking.",
      p1Part1: "Hello! I am ",
      p1Part2: ", a ",
      p1Role1: "Data Scientist Intern at PT Indosat Ooredoo Hutchison",
      p1Part3: " and ",
      p1Role2: "Junior Data Analyst",
      p1Part4: " based in Surabaya. Currently, I also serve as ",
      p1Role3: "Vice Chairperson of BLJ Himatifa",
      p1Part5: " at UPN \"Veteran\" Jawa Timur.",
      p2Part1: "I have a deep interest in ",
      p2Tech1: "Data Science, Back-End Web Development, and IoT",
      p2Part2: ". Beyond technical roles—including experience as a Tech & Robotics Instructor—I actively contribute as a ",
      p2Role: "Public Speaker, Guest Speaker, and Master of Ceremonies (MC)",
      p2Part3: ".",
      capTag: "Capabilities",
      capTitle: "Skills & Experience Focus",
      categories: [
        {
          title: "Data Science & Analytics",
          icon: <LineChart className="text-cotton" size={24} />,
          skills: ["Data Science", "Exploratory Data Analysis (EDA)", "Python", "SQL", "Machine Learning"],
        },
        {
          title: "Full-Stack Development",
          icon: <Server className="text-khaki" size={24} />,
          skills: ["Back-End Development", "Next.js", "Nuxt.js", "Laravel", "REST APIs"],
        },
        {
          title: "Public Speaking & Leadership",
          icon: <Mic className="text-garnet" size={24} />,
          skills: ["Master of Ceremonies (MC)", "Public Speaker", "Guest Speaker", "Vice Chairperson Himatifa"],
        },
        {
          title: "IoT & Robotics",
          icon: <Cpu className="text-palm" size={24} />,
          skills: ["Robotics Instruction", "Embedded Systems", "Hardware Integration", "IoT Dashboards"],
        },
      ],
    },
    ID: {
      aboutTag: "Tentang Saya",
      aboutTitle: "Sains Data, Teknologi, & Public Speaking.",
      p1Part1: "Halo! Saya ",
      p1Part2: ", seorang ",
      p1Role1: "Data Scientist Intern di PT Indosat Ooredoo Hutchison",
      p1Part3: " dan ",
      p1Role2: "Junior Data Analyst",
      p1Part4: " berdomisili di Surabaya. Saat ini saya juga menjabat sebagai ",
      p1Role3: "Wakil Ketua BLJ Himatifa",
      p1Part5: " di UPN \"Veteran\" Jawa Timur.",
      p2Part1: "Saya memiliki minat mendalam pada ",
      p2Tech1: "Data Science, Back-End Web Development, dan IoT",
      p2Part2: ". Selain beraktivitas di dunia teknis—termasuk pengalaman sebagai Pengajar Robotika & Teknologi—saya aktif berkontribusi sebagai ",
      p2Role: "Public Speaker, Guest Speaker, dan Master of Ceremonies (MC)",
      p2Part3: ".",
      capTag: "Keahlian",
      capTitle: "Fokus Keterampilan & Pengalaman",
      categories: [
        {
          title: "Data Science & Analitis",
          icon: <LineChart className="text-cotton" size={24} />,
          skills: ["Data Science", "Exploratory Data Analysis (EDA)", "Python", "SQL", "Machine Learning"],
        },
        {
          title: "Full-Stack Development",
          icon: <Server className="text-khaki" size={24} />,
          skills: ["Back-End Development", "Next.js", "Nuxt.js", "Laravel", "REST APIs"],
        },
        {
          title: "Public Speaking & Kepemimpinan",
          icon: <Mic className="text-garnet" size={24} />,
          skills: ["Master of Ceremonies (MC)", "Public Speaker", "Guest Speaker", "Wakil Ketua Himatifa"],
        },
        {
          title: "IoT & Robotika",
          icon: <Cpu className="text-palm" size={24} />,
          skills: ["Pengajar Robotika", "Embedded Systems", "Integrasi Hardware", "IoT Dashboards"],
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="py-24 px-6 md:px-12 bg-dusty text-palm relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-cotton uppercase tracking-widest text-sm font-semibold">
              {t.aboutTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-garnet leading-tight">
              {t.aboutTitle}
            </h2>
          </motion.div>

          <motion.div
            key={`about-text-${lang}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-4 text-palm/80 text-base md:text-lg leading-relaxed"
          >
            <p>
              {t.p1Part1}<span className="font-bold text-garnet">Evrillia Kurniawati</span>{t.p1Part2}<span className="font-bold text-palm">{t.p1Role1}</span>{t.p1Part3}<span className="font-bold text-palm">{t.p1Role2}</span>{t.p1Part4}<span className="font-bold text-palm">{t.p1Role3}</span>{t.p1Part5}
            </p>
            <p>
              {t.p2Part1}<span className="font-bold text-palm">{t.p2Tech1}</span>{t.p2Part2}<span className="font-bold text-garnet">{t.p2Role}</span>{t.p2Part3}
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-khaki uppercase tracking-widest text-sm font-semibold">
            {t.capTag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-palm">
            {t.capTitle}
          </h2>
        </motion.div>

        {/* Grid Card Keahlian */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.categories.map((category, idx) => (
            <motion.div
              key={`${idx}-${lang}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-parfait/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-dolce/50 w-fit mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-garnet mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-3 py-1.5 rounded-full bg-dusty text-palm font-medium border border-palm/10 hover:bg-cotton hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}