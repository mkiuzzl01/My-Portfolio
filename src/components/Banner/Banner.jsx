import React from "react";
import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    <div className="relative h-screen -top-20 pt-24 flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#76D7C4">
                <animate
                  attributeName="stopColor"
                  values="#ff7e5f;#feb47b;#ff7e5f"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#feb47b">
                <animate
                  attributeName="stopColor"
                  values="#feb47b;#ff7e5f;#feb47b"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M0 0H800V600H0z" />
          <g transform="translate(400,300)">
            <path
              fill="#FFFFFF55"
              d="M120,-200C153,-160,163,-107,182,-55C201,-3,230,47,232,100C235,153,211,210,168,241C125,272,63,278,10,267C-44,256,-88,228,-113,189C-138,150,-144,100,-163,52C-182,3,-214,-42,-214,-83C-214,-123,-181,-159,-141,-192C-100,-224,-50,-253,0,-253C50,-253,100,-224,120,-200Z"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="20s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.2;1"
                dur="10s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 10; 0 -10; 0 0"
                dur="10s"
                repeatCount="indefinite"
                additive="sum"
              />
            </path>
          </g>
        </svg>
      </div>
      <div className="relative rounded-lg flex flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="text-center pt-24 px-4 md:px-0 md:pt-0 md:ps-14 lg:ps-20 md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hey! I'm</h1>
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Web Developer
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#hire"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-lg hover:bg-orange-600 transition mr-4"
            >
              Hire Me
            </a>
            <a
              href="#cv"
              className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 pt-24 md:pt-0 md:mt-0 md:ml-10">
          <img
            src="https://i.ibb.co/qgkYS4N/uzzal.png"
            alt="MD Khairul Islam"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
