import { scrollToSection } from "../Navbar/Navbar";
import { FaHandPointRight } from "react-icons/fa6";

const About_Me = () => {
  return (
    <section
      id="About Me"
      className="container lg:px-36 mx-auto my-10 px-4 md:flex md:items-center"
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <div className="relative border-r-yellow-500 border-r-4 p-2 border-b-orange-500 border-b-2 rounded-br-lg">
          <img
            src="https://i.ibb.co/c1Lcb1R/Whats-App-Image-2024-05-19-at-13-45-31-5fcd2d50.jpg"
            alt="MD Khairul Islam"
            className="rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white rounded-lg shadow-lg p-2">
            <p className="text-gray-600  font-semibold">Web Development</p>
            <p className="text-yellow-500 text-3xl font-bold">
              9<span className="text-lg">+</span>
            </p>
            <p className="text-gray-400 text-sm">Months Experience</p>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          I'm a Dedicated and <br /> Enthusiastic Web Developer
        </h1>
        <p className="md:text-lg text-gray-600 mb-4">
          with a strong focus on creating visually appealing and highly
          functional web applications. With a solid foundation in HTML, CSS, and
          JavaScript, I bring modern designs to life and ensure seamless user
          interactions. My journey in web development has equipped me with the
          skills to tackle complex challenges and deliver elegant solutions. I
          specialize in using React to build dynamic and responsive user
          interfaces that enhance the user experience. I am passionate about
          continuous learning and staying updated with the latest industry
          trends to bring innovative ideas to my projects. When I'm not coding,
          I enjoy exploring new technologies, contributing to open-source
          projects, and collaborating with other developers to create something
          extraordinary. I believe in the power of teamwork and effective
          communication to achieve outstanding results.
        </p>
        <p className="text-lg text-gray-600 font-semibold mb-6">
          Let's connect and create something amazing together!
        </p>
        <a
          title="Visit my projects"
          onClick={() => scrollToSection("Projects")}
          className="flex btn bg-yellow-500 text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition"
        >
          <FaHandPointRight />
          See Work
        </a>
      </div>
    </section>
  );
};

export default About_Me;
