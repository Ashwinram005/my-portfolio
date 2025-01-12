const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-3 sm:p-4 shadow-lg z-50">
      <div className="flex justify-center items-center max-w-screen-xl mx-auto">
        {/* Menu (Responsive Row without Scrolling) */}
        <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          <li>
            <a
              href="#hero"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 text-xs sm:text-sm lg:text-lg hover:text-black transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
