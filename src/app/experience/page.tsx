import ExperienceTimeline from "@/components/ExperienceTimeline";

const ExperiencePage = () => {

    const experienceMessage = "Here’s a snapshot of my professional path — where I’ve built, learned, and grown.";
    return (
        <main className="px-6 py-12 max-w-4xl mx-auto">
            <section className="space-y-6">
                <h1 className="text-4xl font-bold">Work Experience</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">{experienceMessage}</p>
            </section>
            <ExperienceTimeline />
        </main>
    );
}

export default ExperiencePage;