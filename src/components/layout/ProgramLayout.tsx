import React from "react";
import { Outlet } from "react-router-dom"; 


const ProgramLayout: React.FC = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
      <h1>Footer</h1>
      
    </>
  );
};

export default ProgramLayout;
