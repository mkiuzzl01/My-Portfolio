import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoLogoGithub } from "react-icons/io";
import { navId } from "./NavId";

export const scrollToSection = (navId) => {
  const element = document.getElementById(navId);
  if (element) {
    const marginTop = 0;
    const scrollToY =
      element.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const determineActiveSection = () => {
    for (let i = navId.length - 1; i >= 0; i--) {
      const section = document.getElementById(navId[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navId[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

  }, []);

  return (
    <div>
      <div className={`navbar  ${scroll ? "bg-[#FEF5E7]" : "bg-transparent"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              onClick={() => setIsOpen(!isOpen)}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                onClick={()=> setIsOpen(!isOpen)}
                tabIndex={0}
                className="space-y-4  menu-sm dropdown-content bg-[#FEF5E7] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navId.map((id, i) => (
                  <li key={i} onClick={() => scrollToSection(id)}>
                    <Link
                      to="/"
                      className={
                        active === id
                          ? "border-b-2 rounded-none border-red-500 font-bold pb-2 "
                          : "font-bold "
                      }
                    >
                      {id}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a
            className="btn btn-ghost text-xl"
            onClick={() => scrollToSection("Home")}
          >
            MD Khairul Islam
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 menu-horizontal px-1">
            {navId.map((id, i) => (
              <li key={i} onClick={() => scrollToSection(id)}>
                <Link
                  to="/"
                  className={
                    active === id
                      ? "border-b-2 rounded-none border-red-500 font-bold pb-2 "
                      : "font-bold "
                  }
                >
                  {id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end me-5 lg:me-12">
          <span className="relative flex">
            <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <div className="avatar">
              <Link
                to="https://github.com/mkiuzzl01"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit My Github Profile"
                className="btn flex items-center rounded-full "
              >
                <IoLogoGithub size={20} className="" />
                GitHub
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
