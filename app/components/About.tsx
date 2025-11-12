"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center bg-gradient-to-b from-zinc-900/60 to-black border border-zinc-800 rounded-3xl p-10 shadow-lg backdrop-blur-sm hover:shadow-blue-500/10 transition-all duration-500"
    >
      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Sobre mí
      </h2>

      <p className="text-gray-300 leading-relaxed text-lg">
        Soy{" "}
        <strong className="text-white">
          Aymar de Alessandro Edu Molina Uturunco
        </strong>
        , estudiante de{" "}
        <span className="text-blue-400">
          Ingeniería de Sistemas Computacionales
        </span>{" "}
        apasionado por la tecnología, el desarrollo web y la innovación.  
        Busco una empresa donde aplicar y expandir mis conocimientos, comprometido con el{" "}
        <span className="text-purple-400">crecimiento profesional</span>, la{" "}
        <span className="text-pink-400">estabilidad laboral</span> y el{" "}
        <span className="text-blue-400">desarrollo intelectual</span>.
      </p>

      <div className="mt-10 space-y-2 text-gray-400 text-sm flex flex-col items-center">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" />
          <span>Lima, Perú</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />
          <span>aymarmolina9@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-400" />
          <span>+51 922 366 671</span>
        </div>
      </div>

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
    </motion.div>
  );
}
