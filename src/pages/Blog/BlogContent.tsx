// BlogContent.tsx
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MarkdownRender from "../Project/MarkdownRender";
import Blockquote from "../Project/Blockquote";
import ScrollProgress from "../../components/Background/ScrollProgress";
import RadialGradient from "../../components/Background/Background";
import { useTheme } from "../../assets/theme-context";
import { BlogT } from "../../data/types";

interface BlogContentProps {
  blogData: BlogT;
}

const BlogContent: React.FC<BlogContentProps> = ({ blogData }) => {
  const [markdown, setMarkdown] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    import(`../../data/BlogMarkdown/${blogData.slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMarkdown(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log("Markdown file not found:", err));
  }, [blogData.slug]);

  console.log(blogData);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mujtabachaudhry.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://mujtabachaudhry.ca/#/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogData.title,
        "item": `https://mujtabachaudhry.ca/#/blog/${blogData.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://mujtabachaudhry.ca/#/blog/${blogData.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <RadialGradient
        opacity={theme === "light" ? "opacity-30" : "opacity-30"}
        scale="scale-y-100"
        position="-top-24"
      />
      <header>
        <ScrollProgress position="left" color="blue" height={10} smoothness={true} />
      </header>

      <Container pt={0} minH={"100vh"} maxW={"container.xl"}>
        <Stack>
          <Breadcrumb spacing="8px" mb={8} separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`#/blog/${blogData.slug}`}>{blogData.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading color={useColorModeValue("gray.700", "white")} fontSize={"4rem"} fontFamily={"body"} fontWeight={800}>
            {blogData.title}
          </Heading>
          <Text pb={4} fontSize={"1.25rem"} color="gray.500">
            {blogData.date}
          </Text>

          <Box mt={20}>
            <Blockquote mt={5} fontSize={"1.5rem"}>
              {blogData.excerpt}
            </Blockquote>
            <MarkdownRender markdown={markdown} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default BlogContent;
