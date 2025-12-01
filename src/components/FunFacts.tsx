import { funFacts } from "@/constants/portfolioData";

const FunFacts = () => {

  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
      {funFacts.map((fact) => (
        <li key={fact}>{fact}</li>
      ))}
    </ul>
  );
};

export default FunFacts;
