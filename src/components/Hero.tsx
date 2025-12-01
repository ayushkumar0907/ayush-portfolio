import { portfolioDescription, portfolioName } from "@/constants/portfolioData";
import { images } from "@/utils/portfolioImages";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <Image
        src={images.avatar}
        alt="Avatar"
        width={120}
        height={120}
        className="rounded-full border border-gray-300 dark:border-gray-600"
      />
      <h1 className="text-4xl font-bold">Hi, I am {portfolioName} 👋</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        {portfolioDescription}
      </p>
      <div>
        <Link
          href={"/projects"}
          className="px-6 py-2 bg-primary text-white rounded hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href={"/contact"}
          className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
