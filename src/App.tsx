import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Theme from "./theme"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router"
import Main from "./pages/Main/Main"
import Project from "./pages/Project/Project"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage"
import ThemeContextProvider from "./assets/theme-context"

import ActiveSectionContextProvider from "./assets/active-section-context"
import { useTheme } from "./assets/theme-context"

const BackgroundComponent = React.lazy(() => import("./components/Background/Background"))

export const App = () => (

    <ChakraProvider >
            <ThemeContextProvider>
      
                    <ActiveSectionContextProvider>           
                        <Routes>
                            <Route index path='/' element={<Main/>} />
                            <Route path='/projects' element={<ProjectsPage/>} />
                            <Route path='/projects/:id' element={<Project />} />
                        </Routes>

                        <Footer />
                </ActiveSectionContextProvider>
         
            </ThemeContextProvider>
        
    </ChakraProvider>
)
