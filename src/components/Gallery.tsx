"use client";

import { motion } from "framer-motion";

interface GalleryProps {
  lang: "EN" | "ID";
}

export default function Gallery({ lang }: GalleryProps) {
  const photosList = {
    EN: [
      {
        src: "/images/MC Santika (2).JPG",
        title: "Master of Ceremonies (MC)",
        desc: "Hosting official at Seminar Nasional Informatika (SANTIKA) 2026.",
      },
      {
        src: "/images/magang.jpeg",
        title: "Data Scientist Intern",
        desc: "Internship experience at PT Indosat Ooredoo Hutchison.",
      },
      {
        src: "/images/blj himatifa.jpeg",
        title: "Vice Chairperson Himatifa",
        desc: "Leading organizational activities at BLJ Himatifa.",
      },
      {
        src: "/images/IMG_7910.JPG",
        title: "MC at event SONIC 2024",
        desc: "Speaking in front of an audience of over 300 attendees.",
      },
      {
        src: "/images/bindes.jpeg",
        title: "Community & Education",
        desc: "Engagement in educational development programs.",
      },
      {
        src: "/images/evrill punkdidikan.jpeg",
        title: "Anggota BLJ Himatifa 2025/2026",
        desc: "Komisi Pendidikan.",
      },
      {
        src: "/images/evrill cantik.jpeg",
        title: "Professional Profile",
        desc: "Personal branding & creative portfolio.",
      },
      {
        src: "/images/PEMIRA.JPEG",
        title: "Special Moments",
        desc: "Highlights from academic & professional journey.",
      },
    ],
    ID: [
      {
        src: "/images/MC Santika (2).JPG",
        title: "Master of Ceremonies (MC)",
        desc: "Memandu acara resmi Seminar Nasional Informatika (SANTIKA) 2026.",
      },
      {
        src: "/images/magang.jpeg",
        title: "Data Scientist Intern",
        desc: "Pengalaman magang di PT Indosat Ooredoo Hutchison.",
      },
      {
        src: "/images/blj himatifa.jpeg",
        title: "Wakil Ketua BLJ Himatifa",
        desc: "Kegiatan kepemimpinan & organisasi Himatifa.",
      },
      {
        src: "/images/IMG_7910.JPG",
        title: "MC di Acara SONIC 2024",
        desc: "Dengan lebih dari 300 audiens.",
      },
      {
        src: "/images/bindes.jpeg",
        title: "Pengabdian & Pendidikan",
        desc: "Keterlibatan dalam program pengembangan pendidikan.",
      },
      {
        src: "/images/evrill punkdidikan.jpeg",
        title: "Anggota BLJ Himatifa 2025/2026",
        desc: "Komisi Pendidikan.",
      },
      {
        src: "/images/evrill cantik.jpeg",
        title: "Potret Profesional",
        desc: "Branding diri & portofolio kreatif.",
      },
      {
        src: "/images/PEMIRA.JPEG",
        title: "Momen Berharga",
        desc: "Dokumentasi perjalanan akademik & profesional.",
      },
    ],
  };

  const t = {
    EN: {
      tag: "Moments & Journey",
      title: "Life in Action",
    },
    ID: {
      tag: "Dokumentasi & Perjalanan",
      title: "Aktivitas & Momen",
    },
  }[lang];

  const currentPhotos = photosList[lang];
  // Duplikasi array agar animasi berjalan mulus tanpa terputus (infinite loop)
  const duplicatedPhotos = [...currentPhotos, ...currentPhotos];

  return (
    <section className="py-20 bg-dusty text-palm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cotton uppercase tracking-widest text-sm font-semibold">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-garnet">
            {t.title}
          </h2>
        </motion.div>
      </div>

      {/* Track Animasi Bergulir ke Samping */}
      <div className="flex w-full overflow-hidden select-none">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative flex-shrink-0 w-72 md:w-80 h-96 rounded-2xl overflow-hidden bg-dolce shadow-md border border-parfait/30"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garnet/95 via-garnet/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-dusty">
                <h3 className="text-lg font-bold leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-dusty/80 mt-2 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}