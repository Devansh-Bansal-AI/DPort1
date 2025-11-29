import React from "react";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../utils/constants";
import { Project } from "../types";


const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl">
      <img
        src={`https://placehold.co/600x400/1e1e1e/${ACCENT_COLOR.slice(1)}?text=${project.title}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: `${ACCENT_COLOR}22`, color: ACCENT_COLOR }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
