import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../../assets/hooks";
import {
  skillsDataCMS,
  skillsDataDesign,
  skillsDataWeb,
} from "../../assets/data";
import { useTheme } from "../../assets/theme-context";
import SkillsSection from "./SkillsSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
      <div className="title-container flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 h-full">
        <motion.div
            ref={animationReference}
            style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            }}
        >
            <p className="font-black mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
              <span className="text-[--orange]" style={{color: '#55c9e6'}}>&lt;</span>Skills
              <span className="text-[--orange]" style={{color: '#55c9e6'}}>/&gt;</span>
            </p>
            <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-4">
            My TechStack and Skills
            </h1>
        </motion.div>
        </div>

        <div className="flex gap-40 justify-center max-lg:flex-col pt-0">
          <div className="w-1/3 max-lg:w-full">
            <SkillsSection skillsData={skillsDataWeb} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">
            <SkillsSection skillsData={skillsDataDesign} theme={theme} />
            <SkillsSection skillsData={skillsDataCMS} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;