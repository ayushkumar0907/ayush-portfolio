import { projects } from "@/constants/portfolioData";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
