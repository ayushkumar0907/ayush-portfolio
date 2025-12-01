import { skills } from "@/constants/portfolioData";

const getColor = (index: number) => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
  ];
  return colors[index % colors.length];
};

const SkillGrid = () => {
  return (
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
              <span
                key={item}
                className={`px-3 py-1 text-sm font-medium rounded-full ${getColor(
                  index
                )} dark:opacity-90`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;
