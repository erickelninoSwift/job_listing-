import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Mainlayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Mainlayouts;
