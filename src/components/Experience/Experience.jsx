import React, { useEffect } from "react";
import { FaGoogle, FaCircle, FaIndustry } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    role: "Junior Web Developer",
    type:"Industrial attachment",
    company: "Kaizen IT Ltd",
    period: "15 May 23 - 31 Aug 23",
    description:
      "Utilized HTML, CSS, JavaScript to build responsive and user-friendly web applications",
    icon: <FaIndustry className="text-blue-600" />,
  },
  {
    id: 2,
    role: "Junior Web Designer",
    company: "Sohoj it & Freelancing care",
    period: "1 Jan 22 - 30 Oct 22",
    description:
      "Applied modern front-end technologies and frameworks such as Tailwind CSS and Bootstrap to enhance the visual appeal and functionality of web pages.",
    icon: <FaIndustry className="text-red-500" />,
  },
  
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="Experience" className="py-10 bg-gray-50 relative">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">Work Experience</h1>
        <p data-aos="fade-up">
        With over 6 months of frontend development experience, I excel in creating responsive, visually appealing web interfaces.Skilled in HTML5, CSS3, JavaScript, and React.js, <br />
I collaborate effectively to deliver high-quality solutions that meet client needs and enhance user experiences. <br /> I am eager to advance my skills and contribute to innovative web projects.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-0.5 bg-gray-300">
          <div className="border-dotted border-r-2 border-gray-400 h-full"></div>
        </div>
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              data-aos="fade-up"
              className={`flex items-start space-x-4 lg:space-x-6 ${
                index % 2 === 0 ? "lg:pl-12 lg:border-l-2 lg:border-dotted lg:border-gray-300" : "lg:pr-12 lg:border-r-2 lg:border-dotted lg:border-gray-300"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                  {experience.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900">
                  {experience.role}
                </h4>
                <p className="italic">{experience?.type}</p>
                <p className="text-sm text-gray-500">
                  {experience.company} • {experience.period}
                </p>
                <p className="mt-1 text-base text-gray-600">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
