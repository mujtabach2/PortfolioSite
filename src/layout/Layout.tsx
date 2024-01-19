import React, { ReactNode } from "react";
import NavBar from "../components/Nav/Nav";
import RadialGradient from "../components/Background/Background";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-10">
      <RadialGradient
        opacity={"opacity-30"}
        scale="scale-y-100"
        position="-top-24"
      />
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;