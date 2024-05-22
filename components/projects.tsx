import React from "react";
import { Spacer } from "@nextui-org/spacer";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export const Projects = () => {
  return (
    <section id="projects">
      <Spacer y={5} />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 mt-24">
          <h1 className={title()}>My Projects</h1>
          <Spacer y={2} />
          <p className={subtitle()}>
            Here are some of the projects I have worked on. These projects are
            my requirements in our Web Development Course.
          </p>
        </div>
        <div className="flex flex-row">
          {siteConfig.projects.map((project) => (
            <a
              key={project.image}
              className="sm:w-100 h-100 w-150 p-4 "
              href={project.link}
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
