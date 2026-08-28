"use client";

import { motion } from "framer-motion";
import { Link, Code2, Share2, Mail, ArrowUpRight } from "lucide-react";

interface ContactProps {
  lang: "EN" | "ID";
}

export default function Contact({ lang }: ContactProps) {
  const content = {
    EN: {
      tag: "Get In Touch",
      title: "Let's work together or just say hello!",
      sub: "Feel free to reach out for collaborations, project inquiries, or public speaking opportunities.",
      copyRight: "Evrillia Kurniawati. All rights reserved.",
    },
    ID: {
      tag: "Kontak",
      title: "Mari berkolaborasi atau sekadar menyapa!",
      sub: "Buka peluang untuk kolaborasi proyek, konsultasi data, maupun kesempatan Public Speaking.",
      copyRight: "Evrillia Kurniawati. Hak cipta dilindungi.",
    },
  }[lang];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Link size={20} />,
      url: "https://www.linkedin.com/in/evrillia-kurniawati-034539325",
      username: "Evrillia Kurniawati",
    },
    {
      name: "GitHub",
      icon: <Code2 size={20} />,
      url: "https://github.com/Evrillia-edu",
      username: "@Evrillia-edu",
    },
    {
      name: "Instagram",
      icon: <Share2 size={20} />,
      url: "https://instagram.com/aevriall",
      username: "@aevriall",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:hitmeup.evrill@gmail.com",
      username: "hitmeup.evrill@gmail.com",
    },
  ];

  return (
    <footer className="py-20 px-6 md:px-12 bg-dusty text-palm relative overflow-hidden border-t border-palm/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Sisi Kiri: Teks Ajakan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-cotton uppercase tracking-widest text-sm font-semibold">
              {content.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-garnet leading-tight">
              {content.title}
            </h2>
            <p className="mt-4 text-palm/80 text-base md:text-lg max-w-xl">
              {content.sub}
            </p>
          </motion.div>

          {/* Sisi Kanan: Tautan Sosial Media */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl bg-white/60 border border-parfait/30 flex items-center justify-between group hover:bg-garnet hover:text-dusty transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-dolce/60 group-hover:bg-dusty/20 text-garnet group-hover:text-dusty transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-palm/60 group-hover:text-dusty/80">
                      {social.name}
                    </span>
                    <span className="text-xs font-semibold truncate max-w-[120px] block">
                      {social.username}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-palm/10 text-center text-xs text-palm/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 {content.copyRight}</p>
          <p className="font-semibold text-garnet">Designed & Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}