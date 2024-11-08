import { FC, ReactElement } from "react";
import {
  Box,
  useColorModeValue,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  Flex,
  Spacer,
  Link,
  Button,
} from "@chakra-ui/react";
import Card from "../generics/Card";
import { useTheme } from "../../assets/theme-context";
interface ProjectCardProps {
  name: string;
  type: string;
  id: string;
  tags: Array<ReactElement>;
  imageSrc: string;
  description: string;
  links?: Array<ReactElement>;
  headerLink: string;
  website?: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { theme } = useTheme();
  return (
    <div>
      <Card
        maxW={"325px"}
        w={"full"}
        mb={3}
        overflow={"hidden"}
        rounded={"3xl"}
        background={`${theme === "dark" ? "#101424" : "white"}`}
        boxShadow={"2xl"}
        transition={"0.3s ease-in-out"}
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Box
          h={"175px"}
          bg={"gray.100"}
          mt={0}
          mx={0}
          rounded={"2xl"}
          mb={6}
          pos={"relative"}
          overflow={"hidden"}
          transition={"0.3s ease-in-out"}
          _hover={{
            filter: "brightness(1.15)",
          }}
        >
          <Link  href={`#/projects/${props.id}`} >
            <Image
              rounded={"2xl"}
              src={props.imageSrc}
              alt={props.name}
              height={"175px"}
              width={"100%"}
              fit={"cover"}
              loading="lazy"
              transform={"scale(1.1)"}
              transition={"0.3s ease-in-out"}
              _hover={{
                transform: "scale(1.15)",
              }}
            />
          </Link>
        </Box>
        <Stack px={1}>
          <Text
            color={"blue.200"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"xl"}
            letterSpacing={1.1}
          >
            {props.type}
          </Text>
          <Flex>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"3xl"}
              fontFamily={"body"}
            >
              {props.name}
            </Heading>
            <Spacer />
            <HStack>{props.links}</HStack>
          </Flex>
          <HStack>{props.tags}</HStack>
          <Text color={"gray.500"}>{props.description}</Text>
          <div
            style={{
              display: "flex",
              flex: "row",
              gap: "5px",
              justifyContent: "center",
            
            }}
          >
            <Box>
              <Link
                href={`#/projects/${props.id}`}
                _hover={{ textDecor: "none" }}
              >
                <Button
                  variant={"outline"}
              
                  colorScheme={"cyan"}
                  aria-label={`Read more about ${props.name}`}
                  fontSize={"1.25rem"}
                  h={14}
                  pb={0}
                  mt={2}
                  _hover={{
                    background: theme === "dark" ? "white" : "lightgray",
                    color: theme === "dark" ? "black" : "black",
                  }}
                >
                  Read more
                </Button>
              </Link>
            </Box>

            <Box>
              {props.website && (
                <Link
                  href={props.website}
                  _hover={{ textDecor: "none" }}
                  isExternal
                >
                  <Button
                    variant={"outline"}
                    colorScheme={"cyan"}
                    aria-label={`Visit ${props.name}'s website`}
                    fontSize={"1.25rem"}
                    h={14}
                    pb={0}
                    mt={2}
                    _hover={{
                      background: theme === "dark" ? "white" : "lightgray",
                      color: theme === "dark" ? "black" : "black",
                    }}
                  >
                    Visit Website
                  </Button>
                </Link>
              )}
            </Box>
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default ProjectCard;
