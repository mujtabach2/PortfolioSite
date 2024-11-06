import React, { lazy, Suspense } from "react";
import Layout from "../../layout/Layout";
import Footer from "../../components/Footer";
import ThemeSwitch from "../../components/Background/theme-switch";
import { useTheme } from "../../assets/theme-context";
import ScrollProgress from "../../components/Background/ScrollProgress";
import Divider from "../../components/Divider";
import Projects from "../../components/Projects";
import Intro from "../../components/Intro";

const LazyBannerQuote = lazy(() => import("../../components/BannerQoute"));
const LazySiteBarRight = lazy(
  () => import("../../components/Sidebars/SideBarRight"),
);
const LazySiteBarLeft = lazy(
  () => import("../../components/Sidebars/SideBarLeft"),
);
const LazyTechStack = lazy(() => import("../../components/Skills/TechStack"));
const LazyAboutMe = lazy(() => import("../../components/About"));
const LazyContact = lazy(() => import("../../components/Contact"));


import RadialGradient from "../../components/Background/Background";

const Main: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <RadialGradient
            opacity={theme === "light" ? "opacity-30" : "opacity-30"}
            scale="scale-y-100"
            position="-top-24"
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <Intro />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <LazyBannerQuote
            style={"withBG"}
            quoteIndex={0}
            containerType="quote"
          />
          <LazyAboutMe />
          <LazyBannerQuote
            style={"withBG"}
            quoteIndex={0}
            containerType="quote"
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTechStack />

            <Projects />

            <div className="relative -mb-24 pb-32 -mt-0">
              {/* <RadialGradient
                opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                scale="scale-y-100"
                position="-top-24"
              /> */}

              <LazyContact />
            </div>
          </Suspense>
        </main>
      </Layout>
    </>
  );
};

export default Main;
