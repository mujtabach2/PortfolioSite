import { FC, useEffect } from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
 
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import headshot from "./headshot.png";
import { useTheme } from "../../assets/theme-context";
import { Box } from "@chakra-ui/layout";

const About: FC = () => {
  const { theme } = useTheme();

  const isLargerThan768 = window.innerWidth > 768;

  return (
    <Element id="aboutme" style={{ marginTop: "-4vh" }}>
      <Container maxW={""} p={6.75} mt={[20, 10]}>
        <div
          id="about"
          style={{
            padding: "80px 0",
            color: "#ababab",
            display: "flex",
            flexDirection: isLargerThan768 ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2vw",
          }}
        >
          <div style={{ flex: 1 }}>
            <Heading
              as="h2"
              size="3xl"
              style={{
                color: "#ababab",
                textAlign: isLargerThan768 ? "left" : "center",
              }}
            >
              About Me
            </Heading>
            <Stack
              spacing={4}
              style={{
                color: "#ababab",
                textAlign: isLargerThan768 ? "left" : "center",
                fontSize: isLargerThan768 ? "1.2rem" : "1rem",
              }}
            >
              <Text>
                I'm a computer science student at Toronto Metropolitan
                University, based in Toronto, Canada. I find joy in creating
                solutions that make lives easier and more enjoyable.
              </Text>
              <Text>
                I'm passionate about being a Full Stack Engineer and fascinated
                by the realms of Machine Learning and Artificial Intelligence.
              </Text>
            </Stack>
          </div>
          {isLargerThan768 && (
            <div style={{ flex: 1 }}>
              <img
                loading="lazy"
                src={headshot}
                alt="Mujtaba Chaudhry"
                style={{
                  borderRadius: "50%",
                  height: "auto",
                  width: "100%",
                  maxWidth: "300px",
                  margin: "auto",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      </Container>
    </Element>
  );
};

export default About;
