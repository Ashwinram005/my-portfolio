import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";  // Import professional icons

const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          Contact Information
        </h2>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ashwinram-m-425314291"  // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ashwinram005"  // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Email */}
          <a
            href="mailto:ashwinrammohan2005@gmail.com"  // Replace with your email
            className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
