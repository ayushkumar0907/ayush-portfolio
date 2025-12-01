import { experiences } from "@/constants/portfolioData";

const ExperienceTimeline = () => {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4 mt-6 space-y-10">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-6">
          <div className="absolute left-[-11px] top-2 w-4 h-4 bg-primary rounded-full border-2 border-black dark:border-white"></div>
          <h3 className="text-xl font-semibold mb-1">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="mt-2 text-sm text-primary font-medium">Tech: {exp.tech.join(", ")}</div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
