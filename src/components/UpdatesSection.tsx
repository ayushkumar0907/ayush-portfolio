import { updates } from "@/constants/portfolioData";

const UpdatesSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">📰 Latest Updates</h2>
      <ul className="space-y-2">
        {updates.map((update, index) => (
          <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">[🗓️ {update.date}] </span>
            {update.content}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpdatesSection;
