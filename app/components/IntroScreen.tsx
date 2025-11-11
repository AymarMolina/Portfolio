"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -1000, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-4xl font-light tracking-wide font-sans">
              AYMAR MOLINA UTURUNCO
            </h1>
            <p className="text-gray-400 text-sm md:text-base mt-2 font-sans">
              © 2025 PORTAFOLIO
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
