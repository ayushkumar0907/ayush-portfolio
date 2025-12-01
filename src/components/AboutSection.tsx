import Link from "next/link";
import FunFacts from "./FunFacts";
import TechGrid from "./TechGrid";
import { aboutMeShortDescription, callToAction, myJourneyDescription } from "@/constants/portfolioData";

const AboutSection = () => {

  return (
    <section className="section-container">
      {/* About Me Section */}
      <div className="section-block">
        <h1 className="page-heading">About Me</h1>
        <p className="section-description">
          {aboutMeShortDescription}
        </p>
      </div>

      {/* My Journey Section */}
      <div className="section-block">
        <h2 className="page-subheading">My Journey</h2>
        <p>{myJourneyDescription}</p>
      </div>

      {/* Tech Stack */}
      <div className="section-block">
        <h2 className="page-subheading">Tech Stack</h2>
        <TechGrid />
      </div>

      {/* Fun Facts Section */}
      <div className="section-block">
        <h2 className="page-subheading">Fun Facts</h2>
        <FunFacts />
      </div>

      {/* Call to Action Section */}
      <div className="section-block">
        <p className="section-cta">
          {callToAction}
          <Link href={"/contact"} className="section-cta">
            {" Let's connect!"}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
