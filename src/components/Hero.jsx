const Hero = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
      {/* Name and Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-4 text-gray-800">
        Ashwinram M
      </h1>
      <p className="text-lg sm:text-xl font-medium mb-6 text-gray-800">Web Developer</p>
      
      {/* Get in Touch Button */}
      <div>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-md text-lg font-semibold bg-transparent hover:bg-gray-300 hover:text-gray-900 transition duration-300 transform hover:scale-105"
        >
          <i className="fas fa-envelope mr-2 text-lg"></i>
          <span>Get in Touch</span>
        </a>
      </div>

      {/* View My Work Button */}
      <div className="mt-6">
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-md text-lg font-semibold bg-transparent hover:bg-gray-300 hover:text-gray-900 transition duration-300 transform hover:scale-105 mt-4 sm:mt-0"
        >
          <span>View My Work</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
