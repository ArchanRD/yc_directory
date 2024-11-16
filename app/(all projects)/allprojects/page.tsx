import NavbarPortfolio from "@/components/NavbarPortfolio";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

import { projects } from "@/app/util";

const page = () => {
  return (
    <div className="ml-7 pl-5 mr-5 md:pr-0 md:max-w-2xl bg-dot !bg-repeat !bg-5 border-l-2 border-black mx-auto xl:max-w-7xl xl:mx-auto mobile-480:w-[480px] mobile-480:mx-auto sm:w-full lg:max-w-5xl lg:mx-20 lg:w-auto  lg:bg-contain xl:bg-cover xl:px-4">
      <NavbarPortfolio />

      <div>
        <h2 className="font-generalSans text-2xl font-bold">All projects</h2>
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
          {projects.map((project) => {
            return (
              <ProjectCard
                projectLink={project.projectLink}
                image={project.image}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                title={project.title}
                buttonText={project.buttonText}
                key={project.key}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
