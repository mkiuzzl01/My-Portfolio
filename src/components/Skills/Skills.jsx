import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFire,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    level: 90,
    tag: "Expert",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    level: 80,
    tag: "Expert",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    link: "https://tailwindcss.com/",
    level: 80,
    tag: "Expert",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    level: 80,
    tag: "Comfortable",
  },
  {
    name: "React",
    icon: FaReact,
    link: "https://reactjs.org/",
    level: 90,
    tag: "Expert",
  },
  {
    name: "Firebase",
    icon: FaFire,
    link: "https://firebase.google.com/",
    level: 80,
    tag: "Expert",
  },
  {
    name: "Express",
    icon: FaServer,
    link: "https://expressjs.com/",
    level: 70,
    tag: "Expert",
  },
  {
    name: "Node",
    icon: FaNodeJs,
    link: "https://nodejs.org/",
    level: 60,
    tag: "Comfortable",
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
    link: "https://www.mongodb.com/",
    level: 70,
    tag: "Comfortable",
  },
  {
    name: "JWT",
    icon: FaLock,
    link: "https://jwt.io/",
    level: 70,
    tag: "Comfortable",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/",
    level: 70,
    tag: "Expert",
  },
  {
    name: "Figma",
    icon: FaFigma,
    link: "https://figma.com/",
    level: 70,
    tag: "Comfortable",
  },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [progress, setProgress] = useState(skills.map((skill) => skill.level));

  const handleMouseEnter = (index) => {
    setHoveredSkill(index);
    setProgress((prev) => prev.map((value, i) => (i === index ? 0 : value)));

    setTimeout(() => {
      setProgress((prev) =>
        prev.map((value, i) => (i === index ? skills[i].level : value))
      );
    }, 100);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="Skills" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 mb-12">
          I have a strong foundation in frontend development, specializing in
          technologies like HTML5, CSS3, JavaScript, React.js, and responsive
          design. I also excel in backend technologies such as Node.js,
          Express.js, MongoDB, and Firebase for authentication.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Link
              data-tooltip-id="my-tooltip"
              data-tooltip-content={skill?.tag}
              key={index}
              to={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="group transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-[#FEF5E7] rounded-lg shadow-md p-6 flex flex-col items-center group-hover:bg-yellow-100 transition-all duration-300">
                <div
                  className={`mb-2 text-3xl text-yellow-500 transition-transform ${
                    hoveredSkill === index ? "animate-bounce" : ""
                  }`}
                >
                  <skill.icon />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${progress[index]}%`,
                    }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
