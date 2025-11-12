"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      company: "Grupo Monter",
      role: "Desarrollador Full Stack",
      date: "Feb 2024 – Sept 2024",
      tasks: [
        "Desarrollo de componentes dinámicos con Angular y APIs REST en AWS.",
        "Implementación de CI/CD reduciendo tiempos de despliegue en más de 80%.",
        "Backend con Node.js, SpringBoot y PostgreSQL.",
        "Autenticación con JWT, sesiones seguras e implementacion de pasarelas de pago.",
        "Trabajo ágil con metodología Scrum."
      ],
    },
    {
      company: "Devdatep Consulting",
      role: "Desarrollador de Aplicaciones Rápidas",
      date: "Mar 2025 – Jun 2025",
      tasks: [
        "Desarrollo de aplicaciones internas con Scriptcase.",
        "Colaboración remota mediante Trello.",
        "Mantenimiento y optimización de bases de datos."
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">Experiencia</h2>
      <div className="space-y-10 max-w-3xl w-full">
        {jobs.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-l-4 border-gray-600 pl-6"
          >
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-400 text-sm mb-2">{job.company} — {job.date}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              {job.tasks.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
