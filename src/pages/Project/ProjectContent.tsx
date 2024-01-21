import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Button,
  LinkOverlay,
  LinkBox,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { ProjectT } from "../../data/types";
import { FiGithub } from "react-icons/fi";
import MarkdownRender from "./MarkdownRender";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Blockquote from "./Blockquote";
import ScrollProgress from "../../components/Background/ScrollProgress";
import RadialGradient from "../../components/Background/Background";
import { useTheme } from "../../assets/theme-context";

interface ProjectContentProps {
  projectData: ProjectT;
}

const ProjectContent = (props: ProjectContentProps) => {
  const projectData = props.projectData;
  const [markdown, setMarkdown] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    import(`../../data/Readme/${projectData["id"]}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMarkdown(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {});
  });

  return (
    <>
      <RadialGradient
        opacity={theme === "light" ? "opacity-30" : "opacity-30"}
        scale="scale-y-100"
        position="-top-24"
      />
      <header>
        <ScrollProgress
          position="left"
          color="blue"
          height={10}
          smoothness={true}
        />
      </header>

      <Container pt={0} minH={"100vh"} maxW={"container.xl"}>
        <Stack>
          <Breadcrumb
            spacing="8px"
            mb={8}
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`#/projects/${projectData["id"]}`}>
                {projectData["name"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text
            color={"blue.200"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"1.5rem"}
            letterSpacing={1.1}
          >
            {projectData["type"]}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"4rem"}
            fontFamily={"body"}
            fontWeight={800}
          >
            {projectData["name"]}
          </Heading>
          <Text pb={4} fontSize={"2rem"}>
            {projectData["tagline"]}
          </Text>
          <HStack>
            {projectData["links"]?.map((link, i) => (
              <LinkBox key={i}>
                <LinkOverlay href={link.link} isExternal>
                  <Button
                    rightIcon={link.icon}
                    colorScheme="teal"
                    variant="outline"
                  >
                    {link.icon.type === FiGithub ? "View code" : "Visit"}
                  </Button>
                </LinkOverlay>
              </LinkBox>
            ))}
          </HStack>

          <Box mt={20}>
            <Blockquote mt={5} fontSize={"2rem"}>
              {projectData["description"]}
            </Blockquote>
            <MarkdownRender markdown={markdown} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ProjectContent;
