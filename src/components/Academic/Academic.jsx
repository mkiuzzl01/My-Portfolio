import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const education = [
  {
    id: 1,
    institution: 'University Name',
    degree: 'Bachelor of Science in Computer Science',
    year: '2016 - 2020',
    description: 'Graduated with honors, focusing on software development and data science.',
    icon: faGraduationCap,
  },
  {
    id: 2,
    institution: 'High School Name',
    degree: 'High School Diploma',
    year: '2012 - 2016',
    description: 'Graduated with top marks in science and mathematics.',
    icon: faSchool,
  },
];

const courses = [
  {
    id: 1,
    course: 'React for Beginners',
    platform: 'Udemy',
    year: '2021',
    description: 'Learned the basics of React, including components, state, and props.',
    icon: faBook,
  },
  {
    id: 2,
    course: 'Advanced JavaScript',
    platform: 'Coursera',
    year: '2020',
    description: 'Deep dive into JavaScript ES6, asynchronous programming, and more.',
    icon: faChalkboardTeacher,
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
        <h1 className="text-3xl font-semibold" data-aos="fade-down">My Academic Background</h1>
        <p data-aos="fade-up">
          Here is a summary of my educational background and the courses I've completed to enhance my skills.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-6 flex">
              <FontAwesomeIcon icon={edu.icon} className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-sm text-gray-600">{edu.degree} ({edu.year})</p>
                <p className="text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          {courses.map((course) => (
            <div key={course.id} className="mb-6 flex">
              <FontAwesomeIcon icon={course.icon} className="text-4xl text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{course.course}</h3>
                <p className="text-sm text-gray-600">{course.platform} ({course.year})</p>
                <p className="text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
