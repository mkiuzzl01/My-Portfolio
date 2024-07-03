import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling
import { navId } from "./NavId";

const Navbar = () => {
  const [active,setActive] = useState('Home');
  const [isScrolled,setScrolled] = useState(false);
  const [scroll, setScroll] = useState(false);

  const scrollToSection = (navId)=>{
    const element =document.getElementById(navId);
    if(element){
      const marginTop = 0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({top:scrollToY,behavior:'smooth'});
    }
  }

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
              {
                navId.map((id,i)=>(
                  <li key={i} onClick={()=> scrollToSection(id)}>
                    <Link to='/' className="active">{id}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MD Khairul Islam</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
                navId.map((id,i)=>(
                  <li key={i} onClick={()=> scrollToSection(id)}>
                    <Link to='/' className="active">{id}</Link>
                  </li>
                ))
              }
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
