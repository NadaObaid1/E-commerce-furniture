import React from "react";
import Navbar from "../Screens/HomeScreens/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Screens/Footer/Footer.jsx";

export default function LayOut() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  );
}
