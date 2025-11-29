import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { professionalSkills, technicalBadges } from "../utils/data";
import { ACCENT_COLOR } from "../utils/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">

      <SectionHeader title="Skills" subtitle="Technologies I work with." />

      <div className="grid md:grid-cols-3 gap-8">
        {professionalSkills.map((skill) => (
          <motion.div key={skill.title}
                      className="bg-[#1e1e1e] p-6 rounded-xl text-center">
            <i className={`${skill.icon} text-4xl`} style={{ color: ACCENT_COLOR }} />
            <h3 className="text-white mt-4">{skill.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      <SectionHeader title="Tech Stack" subtitle="Tools I use daily." />

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {technicalBadges.map((badge) => (
          <span key={badge.name}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${ACCENT_COLOR}22`,
                  border: `1px solid ${ACCENT_COLOR}55`,
                  color: ACCENT_COLOR
                }}>
            <i className={`${badge.icon} mr-2`}></i>
            {badge.name}
          </span>
        ))}
      </div>

    </section>
  );
};

export default Skills;
