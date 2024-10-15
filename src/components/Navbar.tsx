import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/Resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 sm:bottom-0 z-50 mx-auto w-max mt-4 mb-0 sm:mt-0 sm:mb-10 flex origin-top sm:origin-bottom max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <Dock className="z-[100] pointer-events-auto relative sm:bottom-0 mx-auto flex min-h-full h-full items-center px-4 bg-background transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <>
            <DockIcon key={item.href} className="hidden sm:block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 sm:size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={14}
                  className="rounded-lg bg-black-200 text-white"
                >
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>

            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "sm:hidden size-8 sm:size-12 rounded-full"
              )}
            >
              <item.icon className="size-4" />
            </Link>
          </>
        ))}

        <span className="hidden sm:block text-white-200 pb-3 cursor-default opacity-20 text-lg">
          |
        </span>

        {Object.entries(DATA.contact.social)
          .filter(([, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name} className="hidden sm:block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    href={social.url}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      }),
                      "size-8 sm:size-12 rounded-full"
                    )}
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
                <TooltipContent
                  sideOffset={14}
                  className="rounded-lg bg-black-200 text-white"
                >
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
      </Dock>
    </div>
  );
}
