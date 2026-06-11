import React from "react";
import Navbar from "./components/Navbar/Navbar";

const NavBarRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavBarRoute;
