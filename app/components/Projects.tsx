"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">Proyectos</h2>
      <p className="text-gray-400 text-center max-w-md">
        Aquí podrás agregar tus proyectos personales o profesionales con imágenes, descripciones y enlaces.
      </p>
      {/* 💡 Luego podrás mapear tus proyectos aquí */}
    </section>
  );
}
