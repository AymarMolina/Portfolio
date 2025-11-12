"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFigma, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "GrupoMonter",
      category: "UI/UX Design + Web",
      description:
        "Transformación digital para GrupoMonter. Diseño UI/UX y desarrollo web orientado a eficiencia visual y experiencia de usuario.",
      image: "/grupomonter.jpeg",
      figma:
        "https://www.figma.com/design/8p4b6yWpZnlOvkU0qkPhgg/GRUPO-MONTER?node-id=0-1",
      live: "https://grupomonter.com/inicio",
    },
    {
      name: "GrupoMonter Creator",
      category: "Full Stack + Diseño UI/UX",
      description:
        "Plataforma de marketing digital y gestión de contenidos visuales. Diseño y desarrollo full stack con enfoque creativo.",
      image: "/monterCreator.jpeg",
      figma:
        "https://www.figma.com/design/vxvpHHAvlCjBwtD2CwdeAp/GM-CREATOR?node-id=358-3967",
      live: "https://grupo-creator.vercel.app/inicio",
    },
    {
      name: "Book Beauty",
      category: "UI/UX + Backend AWS",
      description:
        "Plataforma de gestión de reservas para empresa de estética. Incluye panel administrativo, correo automático y backend AWS.",
      image: "/bob.jpeg",
      figma:
        "https://www.figma.com/design/Nf9V3rI2z92jGToQwf0Fqq/BOB-BORRADOR-SANDRA?node-id=0-1",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col items-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4 text-center"
      >
        Proyectos
      </motion.h2>
      <p className="text-gray-400 text-center max-w-2xl mb-14">
        Aquí encontrarás mis proyectos más destacados, tanto de diseño UI/UX como
        de desarrollo web con tecnologías modernas.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="relative group bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-blue-500/30 transition-all duration-500"
          >
            {/* Imagen */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between h-[260px] relative z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>
              </div>

              {/* Botones */}
              <div className="flex gap-3 mt-auto">
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 z-20"
                  >
                    <FaFigma className="text-lg" />
                    Ver Figma
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 z-20"
                  >
                    Ver Página
                  </a>
                )}
              </div>
            </div>

            {/* Efecto de brillo */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500 pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
