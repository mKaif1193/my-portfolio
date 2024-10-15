"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import BlurFadeText from "./magicui/blur-fade-text";
import { DATA } from "@/data/Resume";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { SendIcon, DownloadIcon } from "lucide-react";
import { TypingAnimation } from "./magicui/typing-animation";

const BLUR_FADE_DELAY = 0.04;

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhammadkaif1193@gmail.com");
    setCopiedEmail(true);

    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pb-20 pt-36 sm:pt-20 space-y-8">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#0141ff"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 dark:bg-dot-white/[0.3] bg-dot-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="hero"
        className="flex justify-center relative my-20 z-10 mx-auto"
      >
        <div className="w-full max-w-[90vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center gap-8">
          <div className="gap-8 sm:gap-2 flex sm:flex-row flex-col-reverse justify-between">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />

              <BlurFade delay={BLUR_FADE_DELAY}>
                <TypingAnimation
                  duration={20}
                  className="max-w-[600px] text-sm sm:text-lg md:text-xl"
                  text={DATA.description}
                />
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 sm:size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          <div className="flex items-end sm:items-center flex-col gap-1 sm:flex-row justify-between w-full">
            <BlurFade delay={BLUR_FADE_DELAY} className="flex items-center">
              <a
                href="/Muhammad Kaif Resume.pdf"
                download="Muhammad-Kaif-Resume.pdf"
                className="group relative inline-flex h-[40px] w-auto bg-gradient-to-r from-black-200 to-black-100 border-2 border-black-100 items-center justify-center rounded-full pl-2 sm:pl-6 pr-10 sm:pr-14 font-medium text-neutral-50"
              >
                <span className="z-10 pr-1 sm:pr-2 text-sm sm:text-base">
                  Download Resume
                </span>
                <div className="absolute right-1 inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-end rounded-full hover:rounded-full bg-black-200 transition-[width] group-hover:w-[calc(100%-6px)] sm:group-hover:w-[calc(100%-4px)]">
                  <div className="mr-1.5 sm:mr-2.5 flex items-center justify-center">
                    <DownloadIcon className="size-4 sm:size-5" />
                  </div>
                </div>
              </a>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY} className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleCopyEmail}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-[36px] rounded-full rounded-r-none text-sm bg-black-200"
                    )}
                  >
                    {copiedEmail ? (
                      <svg
                        xmlSpace="preserve"
                        viewBox="0 0 24 24"
                        y="0"
                        x="0"
                        height="18"
                        width="18"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-inherit"
                      >
                        <g>
                          <path
                            data-original="#000000"
                            fill="currentColor"
                            d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlSpace="preserve"
                        viewBox="0 0 6.35 6.35"
                        y="0"
                        x="0"
                        height="20"
                        width="20"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-inherit/50"
                      >
                        <g>
                          <path
                            fill="currentColor"
                            d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                          />
                        </g>
                      </svg>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent className="rounded-lg bg-black-200 text-white">
                  {copiedEmail ? "Email Copied!" : "Copy My Email"}
                </TooltipContent>
              </Tooltip>

              <Link
                href={DATA.contact.social.Email.url}
                className="group relative inline-flex h-[40px] w-auto bg-gradient-to-r from-black-200 to-black-100 border-2 border-black-100 items-center justify-center rounded-l-none pl-2 sm:pl-6 pr-10 sm:pr-14 font-medium text-neutral-50"
              >
                <span className="z-10 pr-1 sm:pr-2 text-sm sm:text-base">
                  {DATA.contact.social.Email.name}
                </span>
                <div className="absolute right-1 inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-end rounded-full hover:rounded-l-none bg-black-200 transition-[width] group-hover:w-[calc(100%-6px)] sm:group-hover:w-[calc(100%-4px)]">
                  <div className="mr-1.5 sm:mr-2.5 flex items-center justify-center">
                    <SendIcon className="size-4 sm:size-5" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="max-w-[90vw] md:max-w-3xl lg:max-w-[65vw] mx-auto py-10 px-6"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="sm:text-2xl text-lg font-bold">About Me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>
    </div>
  );
};

export default Hero;
