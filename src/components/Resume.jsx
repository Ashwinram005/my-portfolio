import { FaFilePdf } from "react-icons/fa";  // Import the PDF icon from react-icons
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          My Resume
        </h2> 

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          Click the icon below to view or download my resume. I am always open to new opportunities!
        </p>

        {/* Resume Icon with Hover Effect */}
        <div className="flex justify-center items-center space-x-4">
          <a
            href={resume}  // Replace with the correct path to your resume PDF
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white hover:bg-red-800 transition-colors transform hover:scale-110 shadow-lg"
            aria-label="View or Download Resume"
          >
            <FaFilePdf className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
