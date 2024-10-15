import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main className="max-w-screen-2xl m-auto">
        <nav className="sticky top-0 z-50">
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
