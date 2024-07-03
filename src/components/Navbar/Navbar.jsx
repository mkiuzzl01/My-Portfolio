import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About_Me">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/Skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/Experience">Experience</NavLink>
      </li>
      <li>
        <NavLink to="/Projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/Education">Education</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact US</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className={`navbar ${scroll ? 'bg-[#FEF5E7]' : 'bg-transparent'}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MD Khairul Islam</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
