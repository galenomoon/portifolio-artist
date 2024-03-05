import React from "react";
import { motion } from "framer-motion";
import AnimateInView from "../AnimateInView";

export default function BackgroundText({ children, className, lines, white }) {
  const text = children?.split(" ") || lines;

  return (
    <AnimateInView
      direction="Y"
      inverse
      className={`${
        white ? "!opacity-20" : ""
      } z-0 w-auto items-center select-none justify-center font-bold self-center leading-[12vw] text-[#595666] ${className}`}
    >
      <motion.p className="text-[14.55vw] uppercase z-0 w-full whitespace-nowrap">
        {text[0]}
      </motion.p>
      <motion.p className="text-[14.55vw] uppercase z-0 w-full whitespace-nowrap">
        {text[1]}
      </motion.p>
    </AnimateInView>
  );
}
