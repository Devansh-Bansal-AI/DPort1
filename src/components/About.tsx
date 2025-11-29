import React from "react";
import SectionHeader from "./SectionHeader";
import { sectionVariants, itemVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { educationHistory } from "../utils/data";
import { ACCENT_COLOR } from "../utils/constants";

const About = () => {
  return (
    <motion.section id="about" className="py-24 px-6 max-w-7xl mx-auto"
                    variants={sectionVariants} initial="hidden" whileInView="visible">

      <SectionHeader title="About Me" subtitle="A quick introduction." />

      <motion.div variants={itemVariants} className="bg-[#1e1e1e] p-8 rounded-xl">
        <p className="text-gray-300 leading-relaxed">
          I am a CSE student at VIT Bhopal specializing in AI, ML, and Web Development.
        </p>
      </motion.div>

      <motion.div className="mt-8 grid md:grid-cols-2 gap-8">

        <motion.div variants={itemVariants} className="bg-[#1e1e1e] p-6 rounded-xl">
          <h3 className="text-xl text-white font-semibold mb-4">Education</h3>
          {educationHistory.map((edu) => (
            <div key={edu.degree} className="border-l-4 pl-4 mb-4" style={{ borderColor: ACCENT_COLOR }}>
              <p className="text-white font-medium">{edu.degree}</p>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default About;
