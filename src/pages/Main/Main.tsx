import React,{lazy, Suspense} from 'react';
import Intro from "../../components/Intro"
import About from "../../components/About"
import Projects from "../../components/Projects"
// import Experience from '../../components/Experience';
import Background from '../../components/Background/Background';
import Layout from '../../layout/Layout';
import { useTheme } from '../../assets/theme-context';
import { ScrollProgress } from '../../components/Background/ScrollProgress';
import ThemeSwitch from '../../components/Background/theme-switch';
const TechStack = lazy(() => import("../../components/Skills/TechStack"));
const Nav = lazy(() => import("../../components/Nav/Nav"));
const Contact = lazy(() => import("../../components/Contact/Contact"));
const BackgroundComponent = lazy(() => import("../../components/Background/Background"));
const LazySiteBarLeft = lazy(() => import("../../components/Sidebars/SideBarLeft"));
const LazySiteBarRight = lazy(() => import("../../components/Sidebars/SideBarRight"));



const Main = () => {
    const { theme } = useTheme()
    return (
        <>
        <ThemeSwitch />
        <Layout>
            <ScrollProgress
                position={"left"}
                color={"blue"}
                height={10}
                smoothness
            />
            <Suspense fallback={<div>Loading...</div>}>
                <LazySiteBarLeft />
                <LazySiteBarRight />
          </Suspense>
            < BackgroundComponent
                opacity={theme=== "light" ? "opacity-30" : "opacity-30"}
                scale="scale-y-100"
                position="-top-24"
            />
        
            <Intro />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            

            {/* Background component */}
        </Layout>
        </>
    );
}

export default Main;