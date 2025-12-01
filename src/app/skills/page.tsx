import SkillGrid from "@/components/SkillGrid";

const SkillsPage = () => {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <section>
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here’s a look at the tools and technologies I work with regularly.
        </p>
      </section>
      <SkillGrid />
    </main>
  );
};

export default SkillsPage;
