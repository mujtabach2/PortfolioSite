import { FC, lazy, Suspense, useEffect, useState, memo } from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  Button,
  Link,
  Icon,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";
import { Element } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";

// Lazy load non-critical components
const Socials = lazy(() => import("../global/Socials"));
const DownArrow = lazy(() => import("./DownArrow"));

const Placeholder = () => (
  <Box width="100%" height="50px" display="flex" justifyContent="center" alignItems="center">
    <Spinner />
  </Box>
);

const Intro: FC = memo(() => {
  const buttonSize = useBreakpointValue({ base: "2rem", md: "2.2rem" });
  const headingFontSize = useBreakpointValue({ base: "3.5rem", md: "4.5rem" });
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // Initiate typing effect after initial render
    setTyping(true);
  }, []);

  return (
    <Element id="home">
      <Container
        maxW={"6xl"}
        p={6}
        pt={["25vh", "35vh"]}
        h={"100vh"}
        margin="auto"
      >
        <VStack>
          <Heading
            fontSize={headingFontSize}
            fontWeight={500}
            fontFamily={"source-code-pro, monospace"}
            textAlign="center"
            minHeight="3rem" // Reserve space to prevent layout shift
          >
            {typing ? (
              <ReactTypingEffect
                text="Mujtaba Chaudhry"
                speed={85}
                eraseDelay={1000000}
                typingDelay={650}
                cursor="_"
              />
            ) : (
              "Mujtaba Chaudhry"
            )}
          </Heading>
          <Text
            fontSize={"2.7rem"}
            fontWeight={300}
            color={useColorModeValue("#5a657c", "#9199a9")}
            textAlign="center"
            letterSpacing={1.1}
            minHeight="2.7rem" // Reserve space
          >
            Full Stack Developer
          </Text>
          <Box p={4}>
            <Suspense fallback={<Placeholder />}>
              <Socials color={useColorModeValue("lightblue", "#9199a9")} />
            </Suspense>
          </Box>
          <Link href={"/mujtabaResume.pdf"} isExternal>
            <Button
              variant="outline"
              colorScheme="cyan"
              aria-label="View Resume"
              rightIcon={<Icon as={FiArrowUpRight} />}
              fontSize={buttonSize}
              _hover={{ backgroundColor: "#101424" }}
              width="150px" // Fixed width
              height="50px" // Fixed height
            >
              Resume
            </Button>
          </Link>
        </VStack>
        <Box mt={[10, "10vh"]}>
          <Suspense fallback={<Placeholder />}>
            <DownArrow />
          </Suspense>
        </Box>
      </Container>
    </Element>
  );
});

export default Intro;
