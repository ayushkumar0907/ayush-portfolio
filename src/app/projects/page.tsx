import ProjectGrid from "@/components/ProjectGrid";

const ProjectsPage = () => {
  const projectIntroMessage =
    "Here are some of the projects I’ve worked on — from enterprise tools to creative experiments.";

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {projectIntroMessage}
        </p>
        <ProjectGrid />
      </section>
    </main>
  );
};

export default ProjectsPage;
