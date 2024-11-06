// BlogsPage.tsx
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { blogData } from "../../data/blogData";
import BlogCard from "../Blog/BlogCard";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import BackButton from "../ProjectsPage/BackButton";

const BlogsPage = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://mujtabachaudhry.ca/#/blog" />
      </Helmet>
      <BackButton />
      <ColorModeSwitcher top={0} right={8} position={"absolute"} />
      <Center pb={0} mt={10}>
        <Breadcrumb
          spacing="8px"
          mb={8}
          fontSize={30}
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Wrap spacing="20px" justify="center" pb={0}>
        {blogData.map((data, i) => (
          <WrapItem p={5} key={i}>
            <BlogCard
              blog={{
                title: data["title"] || "",
                date: data["date"] || "",
                excerpt: data["excerpt"] || "",
                content: data["content"] || "",
                slug: data["slug"] || "",
                imageSrc: data["imageSrc"] || "",
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default BlogsPage;
