import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
};

const ProjectCard = ({
  name,
  description,
  tech,
  demoUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-black">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <p className="text-sm text-primary font-medium">
          Tech: {tech.join(",")}
        </p>
        <div className="flex gap-4 pt-2">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <ExternalLink size={16} /> Live Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <ExternalLink size={16} /> GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
