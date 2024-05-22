import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectItems } from "@/../config";

const Projects = () => {
  return (
    <div className="py-12 my-12 mx-auto max-w-8xl px-4" id="projects">
      <div className="mx-auto">
        <div
          className="mx-auto max-w-2xl mb-16"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-primary font-black text-4xl text-center">
            Our Ongoing Projects
          </h2>
          <p className="text-primary text-md text-center mt-4">
            Explore our ongoing collaborations and community projects – the
            power of teamwork in action! See how you can get involved and
            contribute your skills.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {ProjectItems.map((project) => (
            <ProjectCard
              key={project.title}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
