import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { nameVariants, floatVariants } from "../utils/motion";
import { ACCENT_COLOR } from "../utils/constants";

const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const first = useAnimationControls();
  const last = useAnimationControls();

  useEffect(() => {
    first.start("expandFirst");
    last.start("expandLast");
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <motion.h2 className="text-lg" style={{ color: ACCENT_COLOR }}>
            Hello, I'm
          </motion.h2>

          <h1 className="text-5xl font-bold mt-2">
            <motion.span variants={nameVariants} animate={first}>Devansh</motion.span>{" "}
            <motion.span variants={nameVariants} animate={last}>Bansal</motion.span>
          </h1>

          <p className="text-gray-400 mt-4">
            AI Developer and Web Developer passionate about high-performance tech.
          </p>

          <motion.button
            onClick={() => scrollTo("projects")}
            className="mt-6 py-3 px-6 rounded-full text-white font-semibold"
            style={{ backgroundColor: ACCENT_COLOR }}
            whileHover={{ scale: 1.1 }}
          >
            View My Work
          </motion.button>
        </div>

        <motion.div
          className="flex justify-center"
          variants={floatVariants}
          animate="float"
        >
          <img
            src="https://placehold.co/300x300/121212/6C63FF?text=Devansh"
            className="rounded-full w-64 h-64 object-cover border-4"
            style={{ borderColor: ACCENT_COLOR }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
