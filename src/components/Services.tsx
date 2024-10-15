"use client";
import React from "react";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/moving-border";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const BLUR_FADE_DELAY = 0.04;

const Services = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="services" className="mx-10 sm:mx-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Button
                borderRadius="14px"
                className="inline-flex flex-1 px-3 py-1 text-base sm:text-xl font-semibold text-black-100 bg-white pointer-events-none"
              >
                My Services
              </Button>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Your Vision, My Expertise
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex flex-col">
                <span>
                  I offer tailor-made web development services for your business
                  that are built around my passion for clean code and seamless
                  user experiences. Whether it is developing interactive UIs or
                  executing complicated backend logics, I provide full service
                  solutions to clients.
                </span>
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <Carousel items={cards} />
        </BlurFade>
      </div>
    </section>
  );
};

const data = [
  {
    title: "Custom Web Development",
    content:
      "I build modern, responsive, and fast websites that meet your unique business needs. Whether it&apos;s a personal site or a complex web app, I craft solutions that are simple and easy to use.",
  },
  {
    title: "Full-Stack Application Development",
    content:
      "From building dynamic user interfaces to managing backend infrastructure, I offer full-stack development services with cutting-edge technologies like React, Next.js, Node.js, and MongoDB for end-to-end solutions.",
  },
  {
    title: "Responsive Design",
    content:
      "I create exciting and user friendly web designs that render well on all devices. Striking a balance between design and usability, I build systems that offer simple navigation to the users promoting enhanced engagement.",
  },
  {
    title: "E-Commerce Solutions",
    content:
      "I design fully functional e-commerce websites with shopping cart that is easy to use. Integrated with secure payment gateways like Stripe, I ensure your online store is ready for growth.",
  },
  {
    title: "API & Backend Development",
    content:
      "I design effective powerful APIs and scalable backends for your website. Starting from management of databases to adding business logic at the server-side, I construct them factoring in performance, safety and growth.",
  },
  {
    title: "Maintenance & Support",
    content:
      "I provide continuous maintenance and support so that your website or application remains up-to-date and secure. From bug fixes to feature updates, I keep your platform running smoothly.",
  },
];

export default Services;
