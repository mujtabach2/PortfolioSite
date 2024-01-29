import { FC } from "react";
import {
  Container,
  Heading,
  Stack,
  Image,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Center,
  Link,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import headshot from "./headshot.png";
import { useTheme } from "../../assets/theme-context";
import { Box } from "@chakra-ui/layout";

const About: FC = () => {
  const { theme } = useTheme();

  const opentab = (event: React.MouseEvent, tabname: string) => {
    const tablinks = document.getElementsByClassName(
      "tab-links",
    ) as HTMLCollectionOf<HTMLDivElement>;
    const tabcontents = document.getElementsByClassName(
      "tab-contents",
    ) as HTMLCollectionOf<HTMLDivElement>;

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }

    for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    const targetTab = document.getElementById(tabname);
    if (targetTab) {
      targetTab.classList.add("active-tab");
    }
  };
  return (
    <Element id="aboutme" style={{ marginTop: "-4vh" }}>
      <Container maxW={""} p={6.75} mt={[20, 10]}>
        <div id="about" style={{ padding: "80px 0", color: "#ababab" }}>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div
              className="about-col-1"
              style={{
                flexBasis: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={headshot}
                alt="About Me"
                style={{
                  width: "100%", // Make the image take up the full width
                  // Ensure the image doesn't exceed its natural size
                  borderRadius: "15px",
                  margin: "auto", // Center the image horizontally
                  // Ensure the image doesn't exceed its natural size vertically
                }}
              />
            </div>
            <div style={{ flexBasis: "5%" }}></div>

            <div
              className="about-col-2"
              style={{
                flexBasis: "50%",
                width: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <h1
                  className={`color${theme === "dark" ? "black" : "white"}`}
                  style={{ fontSize: "3rem", fontWeight: 600 }}
                >
                  About me
                </h1>
                <p style={{fontSize: "1.5rem"}}>
                  Hello, I'm Mujtaba Chaudhry!
                  <br />
                  <br />
                  I'm a second-year computer science student at Ontario Tech
                  University, based in Toronto, Canada. Coding isn't just my
                  skill; it's my passion. I find joy in creating solutions that
                  make lives easier and more enjoyable.
                  <br />
                  <br />
                  I'm passionate about being a Full Stack Engineer and
                  fascinated by the realms of Machine Learning and Artificial
                  Intelligence. Outside of tech, I'm an avid fan of football and
                  MMA. My dream? To be a Software Engineer at Twitter, shaping
                  the digital world one line of code at a time.
                </p>
              </div>
            </div>
            <div style={{ flexBasis: "5%" }}></div>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default About;
