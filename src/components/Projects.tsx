/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ProjectsSection.js

import React from "react";
import Link from "next/link";

const ProjectsSection = ({ projects }: { projects: any }) => {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-medium title-font text-white">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center mt-8">
          {projects.map((project: any) => (
            <div key={project.id} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="bg-gray-800 p-6 rounded-lg">
                {/* <img
                  alt={project.title}
                  className="w-full h-48 object-cover object-center mb-4 rounded"
                  src={project.image}
                /> */}
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-base text-white">
                  {project.description}
                </p>
                <Link
                  href={project.id}
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
