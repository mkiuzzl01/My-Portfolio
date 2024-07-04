import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'; // Import the custom CSS file

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for project 1',
    imageUrl: 'https://i.ibb.co/4K0HpGY/screencapture-nearby-care-web-app-2024-07-04-15-49-25.png',
    tag: 'Updated',
    link: 'https://nearby-care.web.app',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for project 2',
    imageUrl: 'https://i.ibb.co/0VpMJNm/screencapture-tech-tools-f4a05-web-app-2024-07-04-15-50-35.png',
    tag: 'Light & Dark Theme Available',
    link: 'https://tech-tools-f4a05.web.app',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for project 2',
    imageUrl: 'https://i.ibb.co/PhPHZxn/screencapture-travel-mate-9fb7a-web-app-2024-07-04-15-51-22.png',
    tag: 'Light & Dark Theme Available',
    link: 'https://travel-mate-9fb7a.web.app',
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="Projects" className="py-10 bg-gray-50">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-semibold" data-aos="fade-down">My Work & Projects</h1>
        <p data-aos="fade-up">
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg hover-scale"
            data-aos="flip-left"
          >
            <div
              className="w-full h-60 img-hover-zoom"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>
            <div className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded-br-lg">
              {project.tag}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover-opacity"
            >
              <span className="text-lg font-semibold">Visit</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
