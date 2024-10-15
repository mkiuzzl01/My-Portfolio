import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <section id="Projects" className=" bg-gray-50 relative">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">
          My Work & Projects
        </h1>
        <p className="px-2 md:px-14" data-aos="fade-up">
          Explore my variety of Projects. Each demonstrates my proficiency in
          building dynamic, responsive web applications using React.js, HTML5,
          CSS3, and more. These projects showcase my dedication to
          delivering functional and visually appealing solutions, from
          interactive dashboards to user-friendly interfaces. Dive into
          each project to see how I blend creativity with technical skills to
          meet client requirements and surpass expectations.
        </p>
      </div>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12">
        {projects.map((project, idx) => (
          <div key={idx}>
            <button
              onClick={() => {
                setIsOpen(true), setProjectsInfo(project);
              }}
              data-aos="flip-left"
            >
              <div
                className="w-96 h-[500px] rounded-lg transition-all ease-in-out duration-[3s] hover:bg-bottom bg-cover bg-top  border-2 border-yellow-500"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={project?.title}
              ></div>
            </button>
          </div>
        ))}
      </div>
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
