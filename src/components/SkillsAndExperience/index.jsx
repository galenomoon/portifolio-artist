import React from "react";

//context
import { ScrollContext } from "@/pages";

//components
import SectionTitle from "../SectionTitle";
import AnimateInView from "../AnimateInView";
import BackgroundText from "../BackgroundText";

//icons
import { FaLightbulb } from "react-icons/fa";
import { RiLinkedinBoxFill, RiTeamFill } from "react-icons/ri";
import { IoMdColorPalette, IoMdThumbsUp } from "react-icons/io";
import { IoExtensionPuzzleSharp, IoPeopleCircle } from "react-icons/io5";

export default function SkillsAndExperience() {
  const { ref_skills_and_experience } = React.useContext(ScrollContext);

  const skills = [
    {
      label: "Artistic Vision",
      Icon: () => <IoMdColorPalette size={30} />,
    },
    {
      label: "Creativity",
      Icon: () => <FaLightbulb size={27} />,
    },
    {
      label: "Agile Leadership",
      Icon: () => <IoPeopleCircle size={35} />,
    },
    {
      label: "Team Communication",
      Icon: () => <RiTeamFill size={26} />,
    },
    {
      label: "Good Practices",
      Icon: () => <IoMdThumbsUp size={30} />,
    },
    {
      label: "Problem solving",
      Icon: () => <IoExtensionPuzzleSharp size={26} />,
    },
  ];

  const experiences = [
    {
      title: "IM | Mix Institute",
      subtitle: "Smartphone software repair teacher",
      period: "2021",
    },
    {
      title: "System Developer - Technical Course",
      subtitle:
        "Full Stack Developer - Etec Drª Ruth Cardoso, São Vicente - SP",
      period: "2021",
    },
    {
      title: "Clear Cloud Software",
      subtitle: "Front-end Developer, Team Leader and UI/UX Designer",
      linkedin: "https://www.linkedin.com/company/cleardev/",
      period: "2021 ~ 2023",
    },
    {
      title: "Contele Soluções Tecnológicas",
      subtitle: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/company/contele/mycompany/",
      period: "now",
    },
  ];

  return (
    <div
      ref={ref_skills_and_experience}
      className="md:flex-row sm:flex-col text-typography-white-100 overflow-hidden pt-20 bg-background-sun-set w-full min-h-screen max-h-fit relative items-center text-center justify-between  flex"
    >
      <BackgroundText
        white
        lines={["Skills &", "Experience"]}
        className="absolute left-0 z-0 w-full"
      />
      <article className="flex flex-col w-full h-full z-10">
        <SectionTitle title="Skills & Experience" emoji="👨🏽‍💻" />
        <section className="flex flex-col w-full h-full text-start text-lg sm:px-12 md:px-28 gap-5">
          <AnimateInView>
            <p>
              — 🦋 A creative developer, my passion is solve <br /> problems and
              improve my self every day.
            </p>
          </AnimateInView>
          <AnimateInView duration={"0.6s"}>
            <p>
              — 🎨 Artistic vision and the creativity are ones <br /> of my best
              qualities.
            </p>
          </AnimateInView>
        </section>
        <section className="flex flex-col w-full h-full text-start text-lg sm:px-12 md:px-28 gap-12 my-20">
          <AnimateInView direction="Y" inverse>
            <h2 className="text-5xl font-semibold text-typography-100">
              Skills
            </h2>
          </AnimateInView>
          <article className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 w-fit">
            {skills?.map(({ label, Icon }, index) => (
              <AnimateInView
                key={index}
                direction="Y"
                duration={`0.${4 + index}s`}
                className="w-auto"
              >
                <div className="flex sm:items-center md:items-start flex-col sm:w-full md:w-fit justify-center gap-2">
                  <div className="text-background-sun-set flex items-center justify-center w-[50px] h-[50px] bg-background-moon rounded-full">
                    {Icon ? Icon() : null}
                  </div>
                  <span className="text-md">{label}</span>
                </div>
              </AnimateInView>
            ))}
          </article>
        </section>
      </article>
      <article className="flex flex-col jusify-between w-full h-fit relative">
        <div className="justify-around flex flex-col h-fit ">
          <AnimateInView direction="Y" inverse className={"self-center"}>
            <h2 className="text-5xl font-semibold mb-10 text-typography-100">
              Experience
            </h2>
          </AnimateInView>
          {experiences?.map((experience, index) => {
            const Element = experience.linkedin ? "a" : "div";
            return (
              <AnimateInView
                key={index}
                duration={`0.${4 + index}s`}
                className={"w-full"}
              >
                <div className="flex py-3 border-y-2 border-typography-white-300 mx-10">
                  <div className="w-[60px] px-20 flex items-center justify-center">
                    <span className="text-lg font-light uppercase whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex flex-col text-start justify-center">
                    <Element
                      target="_blank"
                      href={experience.linkedin}
                      className={`text-xl font-semibold ${
                        experience.linkedin ? "hover:underline" : ""
                      }`}
                    >
                      {experience.title}
                      {experience.linkedin ? (
                        <RiLinkedinBoxFill
                          className="inline-block ml-2"
                          size={20}
                        />
                      ) : null}
                    </Element>
                    <span className="text-typography-white-300 text-md">
                      {experience.subtitle}
                    </span>
                  </div>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </article>
    </div>
  );
}
