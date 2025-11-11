"use client";
import { motion } from "framer-motion";
import {
  FaAngular,
  FaAws,
  FaNodeJs,
  FaDatabase,
  FaReact,
  FaWordpress,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiScrumalliance,
  SiGoogletranslate,
  SiMysql,
  SiElementor,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Angular", icon: <FaAngular className="text-red-500 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
    { name: "SpringBoot", icon: <SiSpringboot className="text-green-500 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
    { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500 text-3xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-500 text-3xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-3xl" /> },
    { name: "Elementor", icon: <SiElementor className="text-pink-400 text-3xl" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-300 text-3xl" /> },
    { name: "Scrum", icon: <SiScrumalliance className="text-pink-400 text-3xl" /> },
    { name: "Inglés B1", icon: <SiGoogletranslate className="text-blue-300 text-3xl" /> },
    { name: "Portugués Básico", icon: <SiGoogletranslate className="text-green-300 text-3xl" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12">Habilidades</h2>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
      >
        {skills.map((s) => (
          <motion.li
            key={s.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center bg-gray-800/60 backdrop-blur-md px-4 py-6 rounded-xl hover:bg-gray-700/60 transition-all shadow-md hover:shadow-lg"
          >
            {s.icon}
            <p className="mt-3 text-sm font-medium">{s.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
