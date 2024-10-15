import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <main className="max-w-screen-2xl m-auto">
        <nav className="fixed top-0 left-0 right-0 z-50 max-w-screen-2xl m-auto">
          <Navbar />
        </nav>
        <div className="min-h-[calc(100vh-290px)]">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
