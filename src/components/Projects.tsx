import React from "react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/Resume";
import { ProjectCard } from "./ui/project-card";
import { Button } from "./ui/moving-border";

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
  return (
    <section id="projects" className="mx-10 sm:mx-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                My Projects
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a various projects, where I&apos;ve applied
                my web development skills in a purposeful, user-focused
                solutions that makes a difference.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 max-w-[850px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
