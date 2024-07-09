import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css"; // Import the custom CSS file
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCodeBranch,
  faServer,
} from "@fortawesome/free-solid-svg-icons";


const projects = [
  {
    id: 1,
    title: "Nearby-Care",
    description:
      "Patients book appointments easily. View doctor schedules, locations, and costs. Doctors manage schedules, update in real-time. Patients provide feedback on their booking experience, enhancing transparency and interaction on the platform.",
    imageUrl:
      "https://i.ibb.co/sKLJ7XQ/Nearby-Care-2.png",
    tag: "Light & Dark Theme Available",
    coreFeatures: {
      Feature_1:
        "=>Doctor Appointment Booking: Enabled users to view and book available appointments, and provide issue details before their visit.",
      Feature_2:
        "=>Online Payment Integration: Integrated secure online payments for appointments.",
      Feature_3:
        "=>Appointment Management: Developed a doctor dashboard to manage and update real-time schedules and take actions based on bookings.",
    },
    technologiesUsed: [
      "HTML5",
      "CSS3",
      "Tailwind",
      "JavaScript",
      "React.js",
      "Express.js",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    liveLink: "https://nearby-care.web.app",
    githubClientLink: "https://github.com/mkiuzzl01/Nearby-Care",
    githubServerLink: "https://github.com/mkiuzzl01/Nearby-Care-Server",
  },
  {
    id: 2,
    title: "Tech-Tools",
    description:
      "Users post and manage tech products. Customers view featured items, interact with voting, reviews, and reports. Dashboard roles include users, moderators, admins. Moderators review posts and reports; admins manage roles, monitor site activity, analyze product data with visual charts. Account verification via profile payments.",
    imageUrl:
      "https://i.ibb.co/yBWGLKC/Tech-tools.png",
    tag: "Modern",
    coreFeatures: {
      Feature_1: "=>Product Posting: Users can post and modify tech products.",
      Feature_2:
        "=>Product Viewing: Customers can view all products, including featured and trending items.",
      Feature_4:
        "=>Role-Based Dashboard: Users, moderators, and admins have specific dashboard functionalities.",
      Feature_5:
        "=>Moderator Oversight: Moderators manage new, reported products, and reviews.",
      Feature_6:
        "=>Admin Controls: Admins manage user roles and monitor site statistics.",
      Feature_7:
        "=>Account Verification: Users can verify their accounts via payment.",
    },
    technologiesUsed: [
      "HTML5",
      "CSS3",
      "Tailwind",
      "JavaScript",
      "React.js",
      "Express.js",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    liveLink: "https://tech-tools-f4a05.web.app",
    githubClientLink: "https://github.com/mkiuzzl01/Tech-Tools",
    githubServerLink: "https://github.com/mkiuzzl01/Tech-Tools-Server-site",
  },
  {
    id: 3,
    title: "Travel-Mate",
    description:
      "Designed for tourist enthusiasts, this website boasts captivating animations for a delightful user experience. Easily explore and gather detailed information on tourist destinations before your visit. With robust security features, it stands out as a trusted leader among tourism platforms, ensuring a secure and enriching experience for all users.",
    imageUrl:
      "https://i.ibb.co/0MqYk0W/Travel.png",
    tag: "Light & Dark Theme Available",
    coreFeatures: {
      Feature_1:
        "=>Place Sharing: Users can share their favorite domestic and international destinations for other visitors to explore.",
      Feature_2:
        "=>Editable Content: Users can update or delete their shared places as desired.",
      Feature_3:
        "=>Contact Us: Users can submit queries and provide instructions via the Contact Us page.",
    },
    technologiesUsed: [
      "HTML5",
      "CSS3",
      "Tailwind",
      "JavaScript",
      "React.js",
      "Express.js",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    liveLink: "https://travel-mate-9fb7a.web.app",
    githubClientLink: "https://github.com/mkiuzzl01/Travel-Mate",
    githubServerLink: "https://github.com/mkiuzzl01/Travel-Mate-Server-site",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleMouseEnter = (projectId) => {
    setActiveProject(projectId);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="Projects" className="py-10 bg-gray-50">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">
          My Work & Projects
        </h1>
        <p data-aos="fade-up">
          Explore my variety of Projects. Each demonstrates my proficiency in
          building dynamic, responsive web applications using React.js, HTML5,
          CSS3, and more. <br /> These projects showcase my dedication to delivering
          functional and visually appealing solutions, from interactive
          dashboards to user-friendly interfaces. <br /> Dive into each project to see
          how I blend creativity with technical skills to meet client
          requirements and surpass expectations.
        </p>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            to={project.liveLink}
            target="blank"
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg group bg-white"
            data-aos="flip-left"
          >
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-60 sm:h-96 bg-gray-500 transition-transform duration-300 transform group-hover:scale-110"
              />
              <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {project.tag}
              </span>
              {activeProject === project.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 transition-opacity duration-300">
                  <div className="text-white text-center p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-2">
                      Core Features
                    </h3>
                    <ul className="text-sm text-gray-300">
                      {Object.values(project.coreFeatures).map(
                        (feature, index) => (
                          <li key={index} className="mb-2">
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="relative h-[320px] bottom-0 left-0 right-0 bg-gray-200 text-black p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <div className="flex flex-wrap mt-2">
                  {project.technologiesUsed.map((tool, index) => (
                    <span
                      key={index}
                      className="text-cyan-600 bg-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  className="text-cyan-600 hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                  Live
                </Link>
                <Link
                  to={project.githubClientLink}
                  target="_blank"
                  className="text-cyan-600 hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon={faCodeBranch} className="mr-2" />
                  Client Code
                </Link>
                <Link
                  to={project.githubServerLink}
                  target="_blank"
                  className="text-cyan-600 hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon={faServer} className="mr-2" />
                  Server Code
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
