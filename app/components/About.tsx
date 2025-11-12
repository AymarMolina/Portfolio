"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
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
          <p>Lima, Perú</p>
          <p>aymarmolina9@gmail.com</p>
          <p>+51 922 366 671</p>
          
          <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://github.com/AymarMolina"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-blue-400 transition-all duration-300"
          >
            <FaGithub size={22} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/aymar-molina-568ba2284"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-blue-400 transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
