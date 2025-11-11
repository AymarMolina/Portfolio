"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Page() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white">
      <AnimatePresence>
        {!showMain && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <IntroScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: showMain ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <MainContent />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </motion.main>
    </div>
  );
}
