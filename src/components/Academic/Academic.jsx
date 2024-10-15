import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faChalkboardTeacher, faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const education = [
  {
    id: 1,
    institution: 'Southeast University',
    degree: 'Bachelor of Science in Computer Science',
    year: '2022 Running',
    description: "Gaining foundational and advanced knowledge in computer science principles, programming languages, and software development. Engaging in hands-on projects and collaborative learning to enhance problem-solving skills. Actively participating in courses on data structures, algorithms, web development, and databases. Continuously upgrading skills to stay current with emerging technologies.",
    icon: faGraduationCap,
    Link: 'https://seu.edu.bd'
  },
  {
    id: 2,
    institution: 'Barisal Polytechnic Institute',
    degree: 'Diploma in Computer Engineering',
    year: '2012 - 2016',
    description: 'Acquired a strong foundation in electronics, computer hardware, and software engineering. Developed practical skills through lab work, projects, and internships. Studied digital electronics, microprocessor systems, network fundamentals, and software development. Demonstrated consistent academic performance and innovation.',
    icon: faSchool,
    Link: 'https://barishalpoly.gov.bd'
  },
];

const courses = [
  {
    id: 1,
    course: 'Web Development',
    platform: 'Programming Hero',
    year: '2024',
    description: 'Enhanced my skills in advanced JavaScript concepts, dynamic web apps with React, robust server-side applications with Node.js and Express, and full MERN stack integration. I also gained proficiency in efficient styling with Tailwind CSS. This course equipped me to deliver high-quality, scalable web solutions',
    icon: faChalkboardTeacher,
    Link:'https://www.programming-hero.com'
  },
  {
    id: 2,
    course: 'Web Application Development',
    platform: 'Bangladesh Hi-Tech Park Authority',
    year: '2022',
    description: 'I covered HTML and CSS for creating structured and visually appealing web pages, Bootstrap for responsive design, and basic JavaScript for interactive features. This course provided me with essential skills to build and style functional websites.',
    icon: faChalkboard,
    Link:'https://bhtpa.gov.bd'
  },
 
  // Add more courses as needed
];

const Academic = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="Academic" className="py-10 bg-gray-50">
      <div className="text-center pb-10 pt-24">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">My Academic Background</h1>
        <p className='px-2' data-aos="fade-up">
          Here is  a summary of my educational background and the courses I've completed to enhance my skills..
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {education.map((edu) => (
            <Link to={edu.Link} target='blank' key={edu.id} className="mb-6 flex">
              <FontAwesomeIcon icon={edu.icon} className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-lg font-semibold text-gray-600">{edu.degree} ({edu.year})</p>
                <p className="text-sm">{edu.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          {courses.map((course) => (
            <Link to={course.Link} target='blank' key={course.id} className="mb-6 flex">
              <FontAwesomeIcon icon={course.icon} className="text-4xl text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{course.course}</h3>
                <p className="text-lg text-gray-600">{course.platform} ({course.year})</p>
                <p className="text-sm">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
