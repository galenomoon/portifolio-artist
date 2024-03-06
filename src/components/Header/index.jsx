import React from "react";

//assets
import Image from "next/image";
import galeno from "../../assets/galeno.svg";
import guilhermeGalenoTextLogo from "../../assets/guilherme_galeno_text_logo.svg";

//components
import Circle from "../Circle";
import NavBar from "../NavBar";

//styles
import { motion } from "framer-motion";
import {
  SiSpotify,
  SiDeezer,
  SiApplemusic,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import AnimateInView from "../AnimateInView";

import { tracks } from "@/mocks/spotify";

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

  const plataforms = [
    {
      Icon: SiSpotify,
      style: "md:hover:text-[#1DB954] md:hover:bg-white md:hover:rounded-full",
      href: "https://open.spotify.com/artist/31aLhhJNZBcilYlPCXxdGv?si=TixVCqUCQLS71NN9j3vCKw",
    },
    {
      Icon: SiDeezer,
      style: "md:hover:text-[#00C7F2]",
      href: "https://www.deezer.com/br/artist/104064692",
    },
    {
      Icon: SiApplemusic,
      style: "md:hover:text-[#FF2D55] md:hover:bg-white md:hover:rounded-lg",
      href: "https://music.apple.com/br/artist/guilherme-galeno/1525317537",
    },
  ];

  const socials = [
    {
      Icon: SiInstagram,
      style: "md:hover:text-[#E1306C]",
      href: "https://www.instagram.com/guilhermegaleno_oficial/",
    },
    {
      Icon: SiTiktok,
      style: "md:hover:text-[#010101]",
      href: "https://www.tiktok.com/@guilhermegaleno_oficial",
    },
  ];

  return (
    <main className="w-full h-screen max-h-screen relative items-center text-center sm:justify-center md:justify-between overflow-hidden flex flex-col">
      <NavBar />
      <div className="z-20 md:mt-0 self-center sm:translate-y-[40px] md:translate-y-0 flex flex-col select-none items-center justify-center text-center text-typography-600">
        <AnimateInView direction="Y" inverse className="flex items-center justify-center w-[70%]">
          <Image alt="logo" src={guilhermeGalenoTextLogo} layout="responsive" />
        </AnimateInView>
        <div className="z-10 w-[70%] flex text-typography-300 items-center justify-between sm:text-xl md:text-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex sm:justify-around md:w-auto sm:w-full md:m-0 sm:my-1 items-center gap-3"
            variants={container}
          >
            {plataforms.map(({ Icon, style, href }, index) => (
              <motion.a
                key={index}
                variants={item}
                href={href}
                target="_blank"
                rel={"norrefer"}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon
                  key={index}
                  size={30}
                  className={`${style} duration-200 hover:drop-shadow-xl`}
                />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex items-baseline gap-3 sm:hidden md:flex"
          >
            {socials.map(({ Icon, href, style }, index) => (
              <motion.a
                key={index}
                variants={item}
                href={href}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                target="_blank"
                rel={"norrefer"}
              >
                <Icon
                  key={index}
                  size={30}
                  className={`${style} duration-200 hover:drop-shadow-xl`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-[70%] pb-16 pt-10 z-20 flex justify-between">
        <motion.p
          className="w-full sm:px-3 sm:translate-y-[40px] md:translate-y-0 sm:top-[265px] md:top-auto md:bottom-10 sm:text-lg md:text-start sm:text-center text-typography-300"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 2 } },
          }}
        >
          Olá! Sou Guilherme Galeno, um apaixonado músico{" "}
          <br className="sm:hidden md:block" />
          de São Paulo conhecido pelas suas músicas que
          <br className="sm:hidden md:block" />
          somadas ultrapassam os 300K de streams.{" "}
          <br className="sm:hidden md:block" />
          Conheça e apoie esse artista independente!
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: 120, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { delay: 1.5 } },
          }}
          className="sm:hidden md:flex items-center justify-center gap-3"
        >
          {tracks.slice(0, 3).map((track, index) => (
            <motion.a
              key={index}
              variants={item}
              href={track.url}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              target="_blank"
              rel={"norrefer"}
            >
              <Image 
                src={track.cover}
                width={250}
                height={250}
                className={"duration-200 hover:drop-shadow-xl"}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="sm:flex md:absolute -bottom-7 sm:h-0 md:h-[80vh] z-20 md:w-[620px]"
        variants={{
          hidden: { y: 120, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { delay: 1.5 } },
        }}
      >
        <Image
          alt="developer"
          src={galeno}
          className="object-contain sm:invisible md:visible"
        />
      </motion.div>
      <Circle />
    </main>
  );
}
