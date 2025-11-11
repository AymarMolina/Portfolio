"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-gray-300 leading-relaxed">
          Soy <strong>Aymar de Alessandro Edu Molina Uturunco</strong>, estudiante de Ingeniería de Sistemas Computacionales
          en búsqueda de una empresa donde aplicar y expandir mis conocimientos.
          Comprometido con el desarrollo profesional, la estabilidad laboral y el crecimiento intelectual.
        </p>
        <div className="mt-8 text-sm text-gray-400 space-y-1">
          <p>📍 Lima, Perú</p>
          <p>📧 aymarmolina9@gmail.com</p>
          <p>📞 +51 922 366 671</p>
          <a
            href="https://www.linkedin.com/in/aymar-molina-568ba2284"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
