import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [projectInfo, setProjectsInfo] = useState({});

  const getData = async () => {
    const data = await fetch("/projects.json");
    const res = await data.json();
    setProjects(res);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="Projects" className="py-10 bg-gray-50 relative">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">
          My Work & Projects
        </h1>
        <p data-aos="fade-up">
          Explore my variety of Projects. Each demonstrates my proficiency in
          building dynamic, responsive web applications using React.js, HTML5,
          CSS3, and more. <br /> These projects showcase my dedication to
          delivering functional and visually appealing solutions, from
          interactive dashboards to user-friendly interfaces. <br /> Dive into
          each project to see how I blend creativity with technical skills to
          meet client requirements and surpass expectations.
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-4">
        {projects.map((project,idx) => (
          <div key={idx}>
            <button
              onClick={() => {
                setIsOpen(true), setProjectsInfo(project);
              }}
              className=""
            >
              <div className="card_container grid grid-cols-1 md:grid-cols-3 grid-flow-col md:grid-flow-row">
                <div
                  className="project_card border-2 border-yellow-500"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={project?.title}
                ></div>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="absolute  right-2">
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          projectInfo={projectInfo}
        ></Modal>
      </div>
      <Tooltip id="my-tooltip" />
    </section>
  );
};

export default ProjectsSection;
