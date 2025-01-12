import profilephoto from "../assets/images/profilephoto.jpg";

const About = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={profilephoto}
            alt="Ashwinram M"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-fit transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-2/3 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Hello! I'm Ashwinram M, a passionate Web Developer with a focus on creating dynamic and interactive user experiences.
            With a strong foundation in web technologies like HTML, CSS, JavaScript and React, I strive to build applications that are not only visually appealing but also highly functional.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            I enjoy solving complex problems, learning new technologies, and collaborating with other talented professionals to create innovative solutions.
            Outside of coding, I love exploring design trends, traveling, and working on personal projects to enhance my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
