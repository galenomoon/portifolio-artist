import React from "react";

//assets
import Image from "next/image";
import galeno from "../../assets/galeno_img.png";
import logo from "../../assets/logo_light.png";

//components
import Circle from "../Circle";
import NavBar from "../NavBar";
import BackgroundText from "../BackgroundText";

//styles
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { BsGit, BsLinkedin, BsGithub } from "react-icons/bs";
import {
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiJest,
} from "react-icons/si";

export default function FirstSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const stacks = [
    {
      Icon: FaReact,
      style: "md:hover:text-[#61DBFB]",
      href: "https://reactjs.org/",
    },
    {
      Icon: SiRedux,
      style: "md:hover:text-[#764ABC]",
      href: "https://redux.js.org/",
    },
    {
      Icon: SiNextdotjs,
      style: "md:hover:text-[#fff]",
      href: "https://nextjs.org/",
    },
    {
      Icon: SiJavascript,
      style: "md:hover:text-[#F7DF1E]",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      Icon: SiTypescript,
      style: "md:hover:text-[#007ACC]",
      href: "https://www.typescriptlang.org/",
    },
    {
      Icon: SiJest,
      style: "md:hover:text-[#FFC107]",
      href: "https://jestjs.io/docs/next/getting-started",
    },
    {
      Icon: BsGit,
      style: "md:hover:text-[#F05032]",
      href: "https://git-scm.com/",
    },
    {
      Icon: SiTailwindcss,
      style: "md:hover:text-[#38B2AC]",
      href: "https://tailwindcss.com/",
    },
  ];

  const socials = [
    {
      Icon: BsGithub,
      href: "https://www.github.com/galenomoon",
      style: "md:hover:text-[#fff]",
    },
    {
      Icon: BsLinkedin,
      href: "https://www.linkedin.com/in/guilherme-galeno-sena/",
      style: "md:hover:text-[#0e76a8]",
    },
    {
      Icon: IoLogoFigma,
      href: "https://www.figma.com/@galenomoon",
      style: "md:hover:text-[#F24E1E]",
    },
  ];

  return (
    <main className="w-full h-screen max-h-screen relative items-center text-center justify-between overflow-hidden flex flex-col">
      <NavBar />
      <div className="z-20 md:mt-0 self-center sm:translate-y-[40px] md:translate-y-0 flex flex-col select-none items-center justify-center text-center text-typography-600">
        <motion.p
          variants={item}
          className="text-start text-xl md:hidden sm:flex sm:w-full -translate-y-[23px] items-start justify-end sm:h-fit"
        >
          <Image
            alt="logo"
            className="object-contain"
            src={logo}
            width={200}
            height={50}
          />
        </motion.p>
        <BackgroundText>Fullstack Developer</BackgroundText>
        <div className="z-10 w-[90vw] flex text-typography-500 items-center justify-between sm:text-xl md:text-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex sm:justify-around md:w-auto sm:w-full md:m-0 sm:my-1 items-center gap-2"
            variants={container}
          >
            {stacks.map(({ Icon, style, href }, index) => (
              <motion.a
                key={index}
                variants={item}
                href={href}
                target="_blank"
                rel={"norrefer"}
              >
                <Icon
                  key={index}
                  className={`${style} duration-200 hover:drop-shadow-xl`}
                />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex items-baseline gap-2 sm:hidden md:flex"
          >
            <motion.p
              variants={item}
              className="font-normal  md:text-2xl mx-2 leading-[1] self-end"
            >
              see more:
            </motion.p>
            {socials.map(({ Icon, href, style }, index) => (
              <motion.a
                key={index}
                variants={item}
                href={href}
                target="_blank"
                rel={"norrefer"}
              >
                <Icon
                  key={index}
                  className={`${style} duration-200 hover:drop-shadow-xl`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full py-8 z-20">
        <motion.p
          className="w-full sm:px-3 sm:translate-y-[40px] md:translate-y-0 sm:top-[265px] md:top-auto md:bottom-10 md:px-16 sm:text-lg md:text-start sm:text-center text-typography-300"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 2 } },
          }}
        >
          I&apos;m currently focused in improve my <br className="md:block" />
          knowledges, challeging myself and{" "}
          <br className="md:block sm:hidden" />
          exploring the amazing world of technology.
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="sm:flex md:absolute bottom-0 h-[90vh] z-20"
        variants={{
          hidden: { y: 120, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { delay: 1.5 } },
        }}
      >
        <Image alt="developer" src={galeno} className="object-contain " />
      </motion.div>
      <Circle />
    </main>
  );
}
