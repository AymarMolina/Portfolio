"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import yourPhoto from "../../public/foton.jpg";

const MainContent = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center">

      {/* Contenedor central */}
      <section className="relative flex flex-col items-center justify-center w-full px-4 mt-40 sm:mt-48 md:mt-56">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center text-center mb-[-4vw]"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] sm:text-xs md:text-sm text-gray-400 tracking-widest"
          >
            36.1627° N, 86.7816° W
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-3"
          >
            DISEÑO / CÓDIGO / CREATIVIDAD
          </motion.p>

          {/* Nombres grandes con efecto de difuminado al pasar el mouse */}
            <motion.div
            className="group relative flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
            <motion.h1
                whileHover={{
                filter: "blur(4px)",
                opacity: 0.7,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[90px] font-extrabold uppercase leading-[0.85] tracking-tight cursor-default"
            >
                AYMAR
            </motion.h1>

            <motion.h1
                whileHover={{
                filter: "blur(4px)",
                opacity: 0.6,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[90px] font-extrabold uppercase leading-[0.85] tracking-tight cursor-default"
            >
                MOLINA
            </motion.h1>
            </motion.div>

        </motion.div>

        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, y: 150, scale: 0.9, filter: "grayscale(100%)" }}
          animate={
            showContent
              ? { opacity: 1, y: 0, scale: 1, filter: "grayscale(100%)" }
              : {}
          }
          transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95], delay: 0.4 }}
          whileHover={{ filter: "grayscale(0%)", scale: 1.02 }}
          className="relative w-[90vw] max-w-[700px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700"
        >
          <Image
            src={yourPhoto}
            alt="Aymar Molina"
            width={1200}
            height={1200}
            className="object-cover w-full h-auto "
          />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>
      </section>
    </main>
  );
};

export default MainContent;
