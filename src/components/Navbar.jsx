import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-4 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-white font-bold text-2xl">
          <a href="#hero" className="hover:text-gray-200 transition duration-300">
            MyPortfolio
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#hero"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden w-full flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
          <li>
            <a
              href="#hero"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
