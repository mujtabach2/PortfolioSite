// Blog.tsx
import { useParams } from "react-router-dom";
import { blogData as allBlogData } from "../../data/blogData";
import { BlogT } from "../../data/types";
import { useEffect, useState } from "react";
import { Center, Text } from "@chakra-ui/react";
import BlogContent from "./BlogContent";

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogData, setBlogData] = useState<BlogT | null>(null);

  useEffect(() => {
    allBlogData.forEach((blog) => {
      if (blog["slug"] === slug) {
        setBlogData(blog);
      }
    });
    // eslint-disable-next-line
  }, []);

  console.log(blogData);
  return (
    <div>
      {blogData ? (
        <BlogContent blogData={blogData} /> 
      ) : (
        <Center>
          <Text fontSize={60} mt={40}>
            This blog post does not exist.
          </Text>
        </Center>
      )}
    </div>
  );
};

export default Blog;