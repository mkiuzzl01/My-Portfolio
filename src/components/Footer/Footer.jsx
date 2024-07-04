import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <p>Im pad</p>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-2xl hover:text-blue-600"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl hover:text-blue-400"
            />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl hover:text-gray-500"
            />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
