import Image from "next/image";
import React from "react";
import { Marquee } from "./marquee";
import { DATA } from "@/data/Resume";

const MovingCards = () => {
  return (
    <Marquee pauseOnHover className="[--duration:20s]">
      {DATA.testimonials.map((item) => (
        <figure
          key={item.name}
          className="relative w-[300px] sm:w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[0.1] bg-gray-50/[0.10] hover:bg-gray-50/[.15]"
        >
          <blockquote className="my-2 text-sm">{item.quote}</blockquote>
          <div className="flex items-center">
            <figcaption className="text-xs sm:text-sm font-medium text-white me-3">
              <Image
                className="rounded-full"
                width="32"
                height="32"
                alt={item.name}
                src={item.img}
              />
            </figcaption>
            <div className="flex flex-col">
              <p className="text-sm sm:text-base leading-[1.2] text-white font-bold">
                {item.name}
              </p>
              <p className="text-[8px] sm:text-xs leading-[1.2] text-white-200 font-normal">
                {item.title}
              </p>
            </div>
          </div>
        </figure>
      ))}
    </Marquee>
  );
};

export default MovingCards;
