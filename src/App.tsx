import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Theme from "./theme";

import { Route, Routes } from "react-router";
import ThemeContextProvider from "./assets/theme-context";
import ActiveSectionContextProvider from "./assets/active-section-context";

// Lazy load page components
const Main = React.lazy(() => import("./pages/Main/Main"));
const Project = React.lazy(() => import("./pages/Project/Project"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const BlogsPage = React.lazy(() => import("./pages/BlogPage/BlogsPage"));
const Blogs = React.lazy(() => import("./pages/Blog/Blogs"));

// Lazy load other components
const BackgroundComponent = React.lazy(() => import("./components/Background/Background"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

export const App = () => (
  <HelmetProvider> {/* Wrap the app with HelmetProvider */}
    <ChakraProvider>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index path="/" element={<Main />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/blog" element={<BlogsPage />} />
              <Route path="/blog/:slug" element={<Blogs />} />
              
            </Routes>
          </React.Suspense>

          <React.Suspense fallback={<div>Loading footer...</div>}>
            <LazyFooter />
          </React.Suspense>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </ChakraProvider>
  </HelmetProvider>
);
