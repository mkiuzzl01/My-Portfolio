import React from "react";
import About_Me from "../About_Me/About_Me";
import Skills from "../Skills/Skills";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About_Me></About_Me>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
