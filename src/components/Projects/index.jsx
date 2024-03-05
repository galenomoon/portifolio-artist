import React from "react";

//components
import Circle from "../Circle";
import Slider from "../Slider";
import SectionTitle from "../SectionTitle";
import AnimateInView from "../AnimateInView";

//context
import { ScrollContext } from "@/pages";

//Life Cell
import lifecell_desktop from "../../assets/projects/lifecell/desktop.png";
import lifecell_mobile from "../../assets/projects/lifecell/mobile.png";

// Obraminha
import obraminha_desktop from "../../assets/projects/obraminha/desktop.png";
import obraminha_mobile from "../../assets/projects/obraminha/mobile.png";

// Hi, Moon
import himoon_desktop from "../../assets/projects/himoon/desktop.png";
import himoon_mobile from "../../assets/projects/himoon/mobile.png";

export default function Projects() {
  const { ref_projects } = React.useContext(ScrollContext);

  const projects = [
    {
      title: "Hi, Moon",
      description:
        "Developed a captivating Landing Page to promote Hi, Moon, a stationery store.",
      link: "https://himoonstore.vercel.app/",
      desktop_image: himoon_desktop,
      mobile_image: himoon_mobile,
    },
    {
      title: "Obraminha",
      description:
        "The project boasts a user base exceeding 500, demonstrating its popularity and impact.",
      desktop_image: obraminha_desktop,
      mobile_image: obraminha_mobile,
    },
    {
      title: "Life Cell",
      description:
        "Developed a captivating Landing Page to promote and sell a Smartphone Repair Course.",
      link: "https://lifecell.vercel.app/",
      desktop_image: lifecell_desktop,
      mobile_image: lifecell_mobile,
    },
  ];

  return (
    <div
      ref={ref_projects}
      className="sm:flex-col sm:overflow-hidden md:flex-row text-typography-100 bg-background-main w-full min-h-screen max-h-fit relative items-center text-center justify-center  flex"
    >
      <article className="flex flex-col w-full h-screen max-h-fit py-10 gap-5 z-20">
        <div className="absolute">
          <SectionTitle title="Latest Projects" emoji="🤯" />
        </div>
        <AnimateInView className={"w-full h-full"}>
          <Slider projects={projects} />
        </AnimateInView>
      </article>
      <Circle position="top" />
    </div>
  );
}
