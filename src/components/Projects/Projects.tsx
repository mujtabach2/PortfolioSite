import { FC } from "react";
import {
  VStack,
  Container,
  Heading,
  Wrap,
  WrapItem,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";
import LinkIconButton from "./LinkIconButton";
import { projectData } from "../../data/projectData";
import { Link } from "react-router-dom";
import { useSectionInView } from "../../assets/hooks";
import { useTheme } from "../../assets/theme-context";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Scroll from "react-scroll";
import LiveTicker from "../../pages/Project/ParallaxTest";

const scroll = Scroll.animateScroll;

const Projects: FC = () => {
  const [isMobile] = useMediaQuery("(min-width: 764px)");
  const { ref } = useSectionInView("Projects");
  const { theme } = useTheme();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Element id="projects">
      <Container maxW={"10xl"} p={6.75} mt={20} mb={[10, 20]} px={[0, 10]}>
        <VStack spacing={0}>
          <div className="title-container flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 h-full">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
              }}
            >
              <p className="font-black mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
                <span className="text-[--orange]" style={{ color: "#55c9e6" }}>
                  &lt;
                </span>
                Projects
                <span className="text-[--orange]" style={{ color: "#55c9e6" }}>
                  /&gt;
                </span>
              </p>
            </motion.div>
          </div>
          <Wrap spacing={0} justify="center">
            {projectData.slice(0, isMobile ? 6 : 3).map((data) => (
              <WrapItem p={5}>
                <ProjectCard
                  name={data["name"] || ""}
                  type={data["type"] || ""}
                  id={data["id"] || ""}
                  tags={data["tags"] || []}
                  imageSrc={data["imageSrc"] || ""}
                  description={data["description"] || ""}
                  links={data["links"]?.map((link) => (
                    <LinkIconButton href={link.link} icon={link.icon} />
                  ))}
                  headerLink={data["headerLink"] || ""}
                />
              </WrapItem>
            ))}
          </Wrap>

          <Link to={"/projects"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"lg"}
              onClick={() => {
                scroll.scrollToTop({ duration: 450 });
              }}
            >
              View All
            </Button>
          </Link>
        </VStack>
      </Container>
      <LiveTicker />
    </Element>
  );
};

export default Projects;
