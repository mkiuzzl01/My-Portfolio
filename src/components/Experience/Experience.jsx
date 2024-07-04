import React, { useEffect } from "react";
import { FaFacebook, FaGoogle, FaCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    role: "UX / UI Designer",
    company: "Facebook",
    period: "2019-21",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    icon: <FaFacebook className="text-blue-600" />,
  },
  {
    id: 2,
    role: "Sr. UX / UI Designer",
    company: "Google Tech.",
    period: "2018-19",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    icon: <FaGoogle className="text-red-500" />,
  },
  {
    id: 3,
    role: "Jr. UX / UI Designer",
    company: "Lenovo Ltd.",
    period: "2016-18",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    icon: <FaGoogle className="text-red-500" />,
  },
  {
    id: 4,
    role: "Front-end Web Designer",
    company: "Circle CI",
    period: "2015-16",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    icon: <FaCircle className="text-blue-600" />,
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="Experience" className="py-10 bg-gray-50 relative">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-semibold" data-aos="fade-down">Work Experience</h1>
        <p data-aos="fade-up">
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
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
