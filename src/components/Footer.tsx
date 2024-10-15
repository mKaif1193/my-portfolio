import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/Resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/moving-border";
import { Form } from "@/components/Form";

const BLUR_FADE_DELAY = 0.04;

const Footer = () => {
  return (
    <footer id="contact" className="pb-10 mx-auto sm:mx-20">
      <div className="flex flex-col items-center">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-3">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                Contact Me
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s work together today!
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white-200 md:mt-10 mt-5 text-center">
                Have a project in mind or just want to chat about how we can
                work together? Send me a message, and together we can build
                something amazing!
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <Form />
        </BlurFade>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-[50px] sm:mb-[80px]">
        <p className="text-sm md:text-base md:font-normal font-light text-center sm:mb-0 mb-4">
          Copyright &copy; 2024 - Muhammad Kaif (mkaif.vercel.app)
        </p>

        <div className="flex flex-wrap items-center justify-center mx-10 md:gap-3 gap-6">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  key={name}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 hover:bg-black-200/80 transition-all"
                >
                  <social.icon
                    className={cn(
                      "size-4",
                      (social.name === "Facebook" ||
                        social.name === "WhatsApp") &&
                        "invert"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg bg-black-200 text-white">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
