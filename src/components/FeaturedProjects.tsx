import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/portfolioData";

const FeaturedProjects = () => {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">🚀 Latest Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="pt-2">
                <Link href="/projects" className="text-primary font-medium hover:underline">See All Projects</Link>       
            </div>
        </section>
    );
}

export default FeaturedProjects;