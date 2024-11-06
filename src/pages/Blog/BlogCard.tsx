// BlogCard.tsx
import { FC } from "react";
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
import Card from "../../components/generics/Card";
import { useTheme } from "../../assets/theme-context";

interface BlogCardProps {
  blog: {
    title: string;
    date: string;
    imageSrc: string;
    excerpt: string;
    content: string;
    slug: string;
  };
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
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
          <Link href={`#/blog/${blog.slug}`}>
            <Image
              rounded={"2xl"}
              src={blog.imageSrc}
              alt={blog.title}
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
            Blog Post
          </Text>
          <Flex>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"3xl"}
              fontFamily={"body"}
            >
              {blog.title}
            </Heading>
            <Spacer />
            <Text color={"gray.500"} fontSize={"sm"}>
              {blog.date}
            </Text>
          </Flex>
          <Text color={"gray.500"}>{blog.excerpt}</Text>
          <div
            style={{
              display: "flex",
              flex: "row",
              gap: "5px",
              justifyContent: "center",
            }}
          >
            <Box>
              <Link href={`#/blog/${blog.slug}`} _hover={{ textDecor: "none" }}>
                <Button
                  variant={"outline"}
                  colorScheme={"cyan"}
                  aria-label={`Read more about ${blog.title}`}
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
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default BlogCard;
