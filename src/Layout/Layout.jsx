import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="sticky top-0 z-10">
          <Navbar></Navbar>
        </nav>
        <Banner></Banner>
      </header>
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
