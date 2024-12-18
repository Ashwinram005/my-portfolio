const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-cover bg-center bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
        ASHWINRAM M
      </h1>
      <p className="text-xl sm:text-2xl font-medium mb-6">
        FRONTEND DEVELOPER
      </p>
      <div>
        <a
          href="#contact"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-indigo-700 transition duration-300 flex items-center space-x-2"
        >
          <i className="fas fa-envelope"></i>
          <span>Get in Touch</span>
        </a>
      </div>
      <div className="mt-6">
        <a
          href="#projects"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-indigo-700 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
