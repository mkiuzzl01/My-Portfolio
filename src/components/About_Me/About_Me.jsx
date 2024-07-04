
const About_Me = () => {
  return (
      <section id="About Me" className="container lg:px-36 mx-auto my-10 px-4 md:flex md:items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <img
              src="https://i.ibb.co/c1Lcb1R/Whats-App-Image-2024-05-19-at-13-45-31-5fcd2d50.jpg"
              alt="MD Khairul Islam"
              className="rounded-full w-80 h-80 object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white rounded-lg shadow-lg p-4">
              <p className="text-gray-600 text-lg font-semibold">
                Web Designer
              </p>
              <p className="text-yellow-500 text-3xl font-bold">
                180<span className="text-lg">+</span>
              </p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            I'm a Passionate Web Designer
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development cycle for
            dynamic web projects. The as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I'm a professional web designer. My motive is to build the best web
            design with all my years of experience.
          </p>
          <a
            href="#work"
            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition"
          >
            See Work
          </a>
        </div>
      </section>
  );
};

export default About_Me;
