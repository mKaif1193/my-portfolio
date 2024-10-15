"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/moving-border";
import { CardSpotlight } from "./ui/card-spotlight";

const BLUR_FADE_DELAY = 0.04;

const Approach = () => {
  return (
    <section id="projects" className="mx-auto sm:mx-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                My Approach
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                From an idea to execution
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have a step-by-step procedure for making your ideas come to
                life. From research and planning, I emphasize teamwork,
                iterative process while ensuring there is quality control to
                guarantee the outcome is better than anticipated.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="my-10 hidden sm:flex flex-col lg:flex-row items-center justify-center gap-6 rounded-3xl">
            <Card
              title="Discovery & Planning"
              icon={<AceternityIcon order="Phase 1" />}
              description="I start from knowing what your vision, aim, and needs are. I ensure that I have outlined the scope of work, timeline, and key deliverables of the project after thorough consultations."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl"
              />
            </Card>

            <Card
              title="Design & Development"
              icon={<AceternityIcon order="Phase 2" />}
              description="Having the strategy designed, I then implement the design as well as develop the application. With the use of up to date designs and software such as Next.js, React and MongoDB, I design and develop an appealing and high-quality output that fits your specification. I keep you updated every step of the way."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black-200 rounded-3xl"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
            </Card>

            <Card
              title="Testing & Launch"
              icon={<AceternityIcon order="Phase 3" />}
              description="I do extensive testing of the application so that I can be sure all the functionality works and there are no bugs before the application goes live. I take care of the entire process of deploying the product upon its acceptance and assistance is also given in order to avoid all possible issues during the launch of your project."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600 rounded-3xl"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="my-20 sm:hidden flex flex-col lg:flex-row items-center justify-center gap-6 rounded-3xl">
            <CardSpotlight className="flex-1 text-white border-neutral-200 dark:border-slate-800">
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold relative z-20 mt-2">
                  Planning & Strategy
                </h2>

                <p className="text-start text-white-100 mt-3 font-semibold relative z-20 sm:text-sm text-xs">
                  We&apos;ll collaborate to map out your website&apos;s goals,
                  target audience, and key functionalities. We&apos;ll discuss
                  things like site structure, navigation, and content
                  requirements.
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="flex-1 text-white border-neutral-200 dark:border-slate-800">
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold relative z-20 mt-2">
                  Development & Progress Update
                </h2>

                <p className="text-start text-white-100 mt-3 font-semibold relative z-20 sm:text-sm text-xs">
                  Once we agree on the plan, I update my notes and dive into
                  coding. From initial design to polished code, I keep you
                  updated every step of the way.
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="flex-1 text-white border-neutral-200 dark:border-slate-800">
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold relative z-20 mt-2">
                  Development & Launch
                </h2>

                <p className="text-start text-white-100 mt-3 font-semibold relative z-20 sm:text-sm text-xs">
                  This is where the magic happens! Based on the approved design,
                  I&apos;ll translate everything into functional code, building
                  your website from the ground up.
                </p>
              </div>
            </CardSpotlight>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[25rem] rounded-3xl"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl sm:text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <p
          className="text-sm text-white-200 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-lg sm:text-2xl font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </div>
    </div>
  );
};

export default Approach;
