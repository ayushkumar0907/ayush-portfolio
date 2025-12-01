import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import UpdatesSection from "@/components/UpdatesSection";


export default function Home() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-6">
      <Hero />
      <UpdatesSection />
      <FeaturedProjects />
    </main>
  );
}
