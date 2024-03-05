import React from "react";
import Image from "next/image";

//components
import { Carousel } from "flowbite-react";
import BackgroundText from "../BackgroundText";

//styles
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Slider({ projects = [] }) {
  return (
    <Carousel
      indicators={false}
      className="w-full h-full mt-10"
      leftControl={
        <SlArrowLeft className="sm:text-3xl md:text-5xl text-typography-100" />
      }
      rightControl={
        <SlArrowRight className="sm:text-3xl md:text-5xl text-typography-100" />
      }
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center h-full justify-center mb-4 z-20 cursor-default"
        >
          <BackgroundText lines={[project?.title]} className="absolute" />
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex relative justify-center items-center hover:opacity-80 transition-opacity duration-300"
          >
            <h2 className="font-semibold text-5xl uppercase">
              {project?.title}
            </h2>
            <BsBoxArrowUpRight className="absolute -right-10 text-2xl text-typography-100" />
          </a>
          <p className="text-xl">{project?.description}</p>
          <div className="flex md:gap-10 sm:gap-4 items-center justify-center z-20 mt-6">
            <Image
              className="sm:w-[55vw] md:w-auto md:h-[40vh] object-contain"
              src={project?.desktop_image?.src}
              alt=""
              width="600"
              height="600"
            />
            <Image
              className="sm:h-[16vh] md:w-auto md:h-[40vh] object-contain"
              src={project?.mobile_image?.src}
              alt=""
              width="600"
              height="600"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
