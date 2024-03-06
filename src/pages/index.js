import { createRef, createContext } from "react";

//components
import FirstSection from "@/components/Header";
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
        <title>
          Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais
        </title>
        <meta
          name="og:title"
          content={
            "Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais"
          }
        />
        <meta
          name="description"
          content="Olá! Sou Guilherme Galeno, um apaixonado músico de São Paulo conhecido pelas suas músicas que somadas ultrapassam os 300K de streams. Conheça e apoie esse artista independente!"
        />
        <meta
          name="og:description"
          content={
            "Olá! Sou Guilherme Galeno, um apaixonado músico de São Paulo conhecido pelas suas músicas que somadas ultrapassam os 300K de streams. Conheça e apoie esse artista independente!"
          }
        />
      </Head>
      <main className="flex min-h-screen flex-col justify-between bg-background-sun-rise clash-display font-normal text-typography-100">
        <FirstSection />
        {/* <SkillsAndExperience /> */}
        {/* <RepositoryAndFigma /> */}
        {/* <ContactMe /> */}
      </main>
    </ScrollContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title:
        "Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais",
      description:
        "Olá! Sou Guilherme Galeno, um apaixonado músico de São Paulo conhecido pelas suas músicas que somadas ultrapassam os 300K de streams. Conheça e apoie esse artista independente!",
    },
  };
}
