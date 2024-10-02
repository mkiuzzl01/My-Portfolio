import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";

const Layout = () => {
  return (
    <div>
      <main className="max-w-screen-2xl m-auto">
      <nav className="z-10 top-0 sticky">
        <Navbar></Navbar>
      </nav>
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
      </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
