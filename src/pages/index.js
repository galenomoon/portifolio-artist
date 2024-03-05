import { createRef, createContext } from "react";

//components
import Projects from "@/components/Projects";
import FirstSection from "@/components/Header";
import ContactMe from "@/components/ContactMe";
import RepositoryAndFigma from "@/components/RepositoryAndFigma";
import SkillsAndExperience from "@/components/SkillsAndExperience";
import Head from "next/head";

//context
export const ScrollContext = createContext(null);

export default function Home() {
  const ref_first_section = createRef(() => {});
  const ref_skills_and_experience = createRef(() => {});
  const ref_repository_and_figma = createRef(() => {});
  const ref_projects = createRef(() => {});
  const ref_contact = createRef(() => {});

  function scrollTo(ref, is_mobile = false) {
    return ref?.current?.scrollIntoView({
      behavior: is_mobile ? "auto" : "smooth",
    });
  }

  return (
    <ScrollContext.Provider
      value={{
        ref_first_section,
        ref_skills_and_experience,
        ref_repository_and_figma,
        ref_projects,
        ref_contact,
        scrollTo,
      }}
    >
      <Head>
        <title> Galenomoon - Fullstack Developer </title>
        <meta
          name="og:title"
          content={
            "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise"
          }
        />
        <meta
          name="description"
          content="Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."
        />
        <meta
          name="og:description"
          content={
            "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."
          }
        />
      </Head>
      <main className="flex min-h-screen flex-col justify-between bg-background-night-light clash-display font-normal text-typography-100">
        <FirstSection />
        <SkillsAndExperience />
        <RepositoryAndFigma />
        <Projects />
        <ContactMe />
      </main>
    </ScrollContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title:
        "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise",
      description:
        "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities.",
    },
  };
}
