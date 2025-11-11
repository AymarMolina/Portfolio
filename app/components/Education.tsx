"use client";
import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    { title: "Ingeniería de Sistemas Computacionales", place: "Universidad Privada del Norte", date: "2020 – 2026" },
    { title: "Secundaria", place: "IEP John Nash High School", date: "2015 – 2019" },
    { title: "Primaria", place: "IEP José Carlos Mariátegui", date: "2009 – 2014" },
  ];

  return (
    <section id="education" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">Educación</h2>
      <div className="space-y-8 max-w-xl text-center">
        {edu.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-gray-400">{e.place}</p>
            <p className="text-gray-500 text-sm">{e.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
