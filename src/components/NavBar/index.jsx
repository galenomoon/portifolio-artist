import React from "react";

//styles
import { motion } from "framer-motion";
import { IoClose, IoLogoFigma } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

//assets
import Image from "next/image";
import logo from "../../assets/logo_light.png";

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
      name: "Skills",
      ref: ref_skills_and_experience,
    },
    {
      name: "Portifolio",
      ref: ref_projects,
    },
    {
      name: "Contact",
      ref: ref_contact,
    },
  ];

  function mobileScrollTo(ref) {
    setIsOpen(false);
    return scrollTo(ref, true);
  }

  const socials = [
    {
      Icon: BsGithub,
      href: "https://www.github.com/galenomoon",
    },
    {
      Icon: BsLinkedin,
      href: "https://www.linkedin.com/in/guilherme-galeno-sena/",
    },
    {
      Icon: IoLogoFigma,
      href: "https://www.figma.com/@galenomoon",
    },
  ];

  return (
    <>
      {/* Mobile */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full fixed sm:flex z-[300] md:hidden justify-between p-4 h-[90px] items-center  text-typography-400"
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl p-3 text-typography-100 bg-white flex items-center justify-center rounded-full z-[101]"
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
            <>
              <motion.div
                variants={container}
                className="flex flex-col items-center justify-center gap-7"
              >
                {navbar_options.map(({ name, ref }, index) => (
                  <motion.button
                    onClick={() => mobileScrollTo(ref)}
                    key={index}
                    variants={item}
                    className="text-start"
                  >
                    {name}
                  </motion.button>
                ))}
              </motion.div>
              <motion.div
                variants={container}
                className="flex w-full h-fit absolute bottom-0 text-white bg-typography-100 items-center justify-between py-8 px-4"
              >
                <motion.p variants={item} className="text-md">
                  Let&apos;s talk!
                </motion.p>
                <motion.div
                  variants={container}
                  className="flex items-center gap-2"
                >
                  {socials.map(({ Icon, href }, index) => (
                    <motion.a
                      href={href}
                      key={index}
                      variants={item}
                      target="_blank"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.article>
      </motion.div>
      {/* Desktop */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full sm:hidden md:flex justify-between py-10 px-16 h-[120px] text-typography-300"
      >
        <div className="flex w-full justify-between">
          <motion.p variants={item} className="text-start">
            <Image alt="logo" src={logo} width={200} height={50} />
          </motion.p>
          <motion.p variants={item} className="text-start">
            São Paulo,
            <br />
            Brazil
          </motion.p>
          <motion.p variants={item} className="text-start">
            Currently Fullstack Developer <br />
            in{" "}
            <a
              href="https://www.linkedin.com/company/contele/"
              target="_blank"
              className="text-typography-100 underline"
            >
              Contele Soluções Tecnológicas
            </a>
          </motion.p>
        </div>
        <div className="flex w-[70%] justify-end gap-10">
          {navbar_options.map(({ name, ref }, index) => (
            <motion.button
              onClick={() => scrollTo(ref)}
              key={index}
              variants={item}
              className="text-start"
            >
              {name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
