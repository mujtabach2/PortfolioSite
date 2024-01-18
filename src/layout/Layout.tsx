import React, { ReactNode } from "react";
import NavBar from "../components/Nav/Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-10">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;