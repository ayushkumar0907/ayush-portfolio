const TechGrid = () => {
  const techSkills = {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    Frameworks: ["React", "Next.js", "Redux", "Tailwind CSS"],
    Tools: ["Git", "Docker", "Webpack", "Babel"],
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Object.entries(techSkills).map(([category, skills]) => (
        <div key={category}>
          <h3 className="font-semibold text-lg mb-2">{category}</h3>
          <ul className="space-y-1">
            {skills.map((skill) => (
              <li className="text-gray-600 dark:text-gray-300" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
