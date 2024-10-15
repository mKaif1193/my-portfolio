import React from "react";
import { DATA } from "@/data/Resume";
import MovingCards from "./magicui/moving-cards";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/moving-border";

const BLUR_FADE_DELAY = 0.04;

const Testimonials = () => {
  return (
    <div id="testimonials" className="mx-auto sm:mx-20">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Button
              borderRadius="14px"
              className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
            >
              Testimonials
            </Button>
            <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
              Kind words from satisfied clients
            </h2>
          </div>
        </div>
      </BlurFade>

      <div className="flex flex-col items-center mt-12 gap-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="relative flex h-full w-[95vw] sm:w-[85vw] flex-col items-center justify-center overflow-hidden bg-black-100 md:shadow-xl">
            <MovingCards />
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-2">
            {DATA.companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Testimonials;
