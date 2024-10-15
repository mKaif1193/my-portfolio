import React from "react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/Resume";
import { Badge } from "./ui/badge";
import { Button } from "./ui/moving-border";

const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
  return (
    <section id="skills" className="mx-auto sm:mx-20">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                My Skills
              </Button>
            </div>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-2 bg-black-100 w-full">
          <div id="languages" className="flex gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-base sm:text-xl py-1 font-bold">Languages</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 py-2 overflow-hidden relative md:shadow-xl">
              {DATA.skills.languages.map((language, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Badge key={id} className="rounded-lg">
                      {language}
                    </Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div id="frontend" className="flex gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-base sm:text-xl py-1 font-bold">Frontend</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 py-2 overflow-hidden relative md:shadow-xl">
              {DATA.skills.frontend.map((f, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Badge className="rounded-lg">{f}</Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div id="backend" className="flex gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-base sm:text-xl py-1 font-bold">Backend</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 py-2 overflow-hidden relative md:shadow-xl">
              {DATA.skills.backend.map((b, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Badge className="rounded-lg">{b}</Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div id="databases" className="flex gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h3 className="text-base sm:text-xl py-1 font-bold">Databases</h3>
            </BlurFade>
            <div className="flex flex-wrap gap-2 py-2 overflow-hidden relative md:shadow-xl">
              {DATA.skills.databases.map((database, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Badge className="rounded-lg">{database}</Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div id="tools" className="flex gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-base sm:text-xl py-1 font-bold">Tools</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 py-2 overflow-hidden relative md:shadow-xl">
              {DATA.skills.tools.map((tool, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Badge className="rounded-lg">{tool}</Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
