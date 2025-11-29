import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import RippleGrid from "./components/RippleGrid";
import NeonCursor from "./components/NeonCursor";
import ElegantPreloader from "./components/Preloader";

import useSmoothScroll from "./utils/smoothScroll";

const BG_DARK = "#121212";
const TEXT_COLOR = "#e0e0e0";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // section refs
  const sectionRefs = useMemo(
    () => ({
      home: React.createRef<HTMLElement>(),
      about: React.createRef<HTMLElement>(),
      skills: React.createRef<HTMLElement>(),
      projects: React.createRef<HTMLElement>(),
      contact: React.createRef<HTMLElement>(),
    }),
    []
  );

  const scrollTo = useSmoothScroll(sectionRefs);

  // preloader finish
  const handlePreloaderFinish = useCallback(() => {
    setLoading(false);

    setTimeout(() => {
      setShowContent(true);
    }, 200);
  }, []);

  // load fontawesome
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      id="app-main-content"
      className="min-h-screen relative font-['Montserrat',_sans-serif] overflow-x-hidden"
      style={{ backgroundColor: BG_DARK, color: TEXT_COLOR }}
    >
      {/* BG ripple grid */}
      {!loading && (
        <div className="fixed inset-0 w-full h-full transition-opacity duration-1000">
          <RippleGrid />
        </div>
      )}

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <ElegantPreloader onFinish={handlePreloaderFinish} />}
      </AnimatePresence>

      {/* Neon cursor */}
      {showContent && window.innerWidth > 768 && <NeonCursor />}

      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <Navbar scrollTo={scrollTo} />
            <Hero scrollTo={scrollTo} />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
