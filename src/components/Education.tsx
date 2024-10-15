import React from "react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/Resume";
import { EducationCard } from "./ui/education-card";
import { Button } from "./ui/moving-border";

const BLUR_FADE_DELAY = 0.04;

const Education = () => {
  return (
    <section id="education" className="mx-auto sm:mx-20">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                My Education
              </Button>
            </div>
          </div>
        </BlurFade>

        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <EducationCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Education;
