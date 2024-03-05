import React from "react";

//styles
import { motion } from "framer-motion";
import { IoClose, IoLogoFigma } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

//context
import { ScrollContext } from "@/pages";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref_skills_and_experience, ref_projects, ref_contact, scrollTo } =
    React.useContext(ScrollContext);
  const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const navbar_options = [
    {
      name: "Sobre mim",
      ref: ref_skills_and_experience,
    },
    {
      name: "Últimos Lançamentos",
      ref: ref_projects,
    },
    {
      name: "Manda uma palinha!",
      ref: ref_contact,
    },
  ];

  function mobileScrollTo(ref) {
    setIsOpen(false);
    return scrollTo(ref, true);
  }

  return (
    <>
      {/* Mobile */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full fixed top-0 sm:flex z-[300] md:hidden justify-between p-4 h-[90px] items-center  text-typography-400"
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl p-3 text-black bg-white flex items-center justify-center rounded-full z-[101]"
        >
          {isOpen ? <IoClose size={40} /> : <GiHamburgerMenu />}
        </motion.button>
        <motion.article
          className="flex flex-col items-center top-0 left-0 fixed bg-white justify-center gap-4 text-4xl z-[100] overflow-hidden"
          initial={{
            width: "0px",
            height: "0px",
            top: "30px",
            left: "30px",
            position: "absolute",
          }}
          animate={{
            width: isOpen ? "100dvw" : "0px",
            height: isOpen ? "100dvh" : "0px",
            top: isOpen ? "0px" : "30px",
            left: isOpen ? "0px" : "30px",
            borderRadius: isOpen ? "0px" : "25%",
          }}
        >
          {isOpen && (
            <motion.div
              variants={container}
              className="flex flex-col items-center justify-center gap-7"
            >
              {navbar_options.map(({ name, ref }, index) => (
                <motion.button
                  onClick={() => mobileScrollTo(ref)}
                  key={index}
                  variants={item}
                  className="text-start text-black"
                >
                  {name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.article>
      </motion.div>
      {/* Desktop */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-[70%] relative sm:hidden md:flex justify-between pt-10 px-16 z-[999] h-[62px] text-typography-100 items-center"
      >
        <motion.a
          href="https://share.amuse.io/track/guilherme-galeno-te-fiz-as-melhores-musicas-do-meu-mundo"
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="absolute right-0 rounded-full px-6 text-xl py-2 bg-[#343434]"
        >
          APOIE UM ARTISTA 💛🌎
        </motion.a>
        <div className="flex w-full justify-center gap-10">
          {navbar_options.map(({ name, ref }, index) => (
            <motion.button
              onClick={() => scrollTo(ref)}
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-center text-xl"
            >
              {name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
