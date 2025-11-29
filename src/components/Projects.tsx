import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader title="Projects" subtitle="Some of my work." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
