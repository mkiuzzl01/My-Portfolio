import React from "react";
import About_Me from "../About_Me/About_Me";
import Skills from "../Skills/Skills";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Academic from "../Academic/Academic";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About_Me></About_Me>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Academic></Academic>
      <Contact></Contact>
    </div>
  );
};

export default Home;
