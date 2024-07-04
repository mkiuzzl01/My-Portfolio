import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLock, faFire, faWind, faServer } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: faCss3Alt, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Tailwind', icon: faWind, link: 'https://tailwindcss.com/' },
  { name: 'JavaScript', icon: faJs, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: faReact, link: 'https://reactjs.org/' },
  { name: 'Firebase', icon: faFire, link: 'https://firebase.google.com/' },
  { name: 'Express', icon: faServer, link: 'https://expressjs.com/' },
  { name: 'Node', icon: faNodeJs, link: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: faDatabase, link: 'https://www.mongodb.com/' },
  { name: 'JWT', icon: faLock, link: 'https://jwt.io/' },
  { name: 'GitHub', icon: faGithub, link: 'https://github.com/' },
  { name: 'Figma', icon: faFigma, link: 'https://figma.com/' },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 mb-12">
          Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-yellow-50 rounded-lg shadow-md p-6 flex flex-col items-center group-hover:bg-yellow-100 transition-all duration-300">
                <FontAwesomeIcon
                  icon={skill.icon}
                  size="2x"
                  className="text-yellow-500 mb-4 group-hover:animate-bounce"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
